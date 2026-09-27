import React, { useRef } from 'react';
import { PortfolioItem } from '../data/portfolioData';
import { BoutiqueArtwork } from './BoutiqueArtwork';
import { ChevronLeft, ChevronRight, Eye, MessageCircle } from 'lucide-react';
import { buildWhatsAppUrl } from '../utils/whatsapp';

interface SignatureCollectionProps {
  items: PortfolioItem[];
  customPhotos: Record<string, string>;
  onOpenLightbox: (item: PortfolioItem) => void;
}

export const SignatureCollection: React.FC<SignatureCollectionProps> = ({
  items,
  customPhotos,
  onOpenLightbox
}) => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const signatureItems = items.filter((it) =>
    [
      'blue-designer-blouse',
      'pink-designer-blouse',
      'red-embroidered-blouse',
      'maroon-gold-blouse',
      'maggam-sleeves',
      'children-designer-dress',
      'bridal-showcase'
    ].includes(it.id)
  );

  const scroll = (direction: 'left' | 'right') => {
    if (scrollContainerRef.current) {
      const scrollAmount = 360;
      scrollContainerRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section id="signature" className="py-20 bg-[#170408] relative overflow-hidden border-b border-[#D4AF37]/15">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading & Controls */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
          <div>
            <span className="text-xs uppercase tracking-widest text-[#DFBE68] font-semibold">
              Curated Masterpieces
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-[#F9F6F0] mt-2 mb-3">
              Signature Designs
            </h2>
            <p className="text-xs sm:text-sm text-[#D4C3B2] max-w-xl font-light">
              Explore exquisite colour palettes, ornate necklines, and intricate embroidery work tailored for grand occasions and festivals.
            </p>
          </div>

          {/* Scroll Navigation Buttons */}
          <div className="flex items-center gap-2 mt-4 md:mt-0">
            <button
              onClick={() => scroll('left')}
              className="w-10 h-10 rounded-full border border-[#D4AF37]/40 flex items-center justify-center text-[#DFBE68] hover:bg-[#320711] hover:border-[#DFBE68] transition-colors cursor-pointer"
              aria-label="Scroll left"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={() => scroll('right')}
              className="w-10 h-10 rounded-full border border-[#D4AF37]/40 flex items-center justify-center text-[#DFBE68] hover:bg-[#320711] hover:border-[#DFBE68] transition-colors cursor-pointer"
              aria-label="Scroll right"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Horizontal Scrolling Reel */}
        <div
          ref={scrollContainerRef}
          className="flex gap-6 overflow-x-auto pb-6 pt-2 snap-x snap-mandatory scrollbar-none scroll-smooth -mx-4 px-4 sm:mx-0 sm:px-0"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {signatureItems.map((item) => {
            const customImg = customPhotos[item.id] || customPhotos[item.svgType];
            const whatsappUrl = buildWhatsAppUrl('Signature Designs', item.title);

            return (
              <div
                key={item.id}
                className="flex-none w-[280px] sm:w-[320px] snap-start group relative bg-[#1E050D] border border-[#D4AF37]/25 hover:border-[#DFBE68]/70 rounded-sm overflow-hidden transition-all duration-500 hover:shadow-2xl hover:shadow-[#D4AF37]/10"
              >
                {/* Visual Area with subtle hover zoom */}
                <div
                  onClick={() => onOpenLightbox(item)}
                  className="relative aspect-[3/4] w-full overflow-hidden cursor-pointer"
                >
                  <BoutiqueArtwork
                    svgType={item.svgType}
                    customImage={customImg}
                    alt={item.title}
                  />

                  {/* Hover Overlay Button */}
                  <div className="absolute inset-0 bg-[#120205]/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-3">
                    <span className="p-3 bg-[#DFBE68] text-[#1A0307] rounded-full shadow-lg transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                      <Eye className="w-5 h-5" />
                    </span>
                  </div>

                  {/* Clean unboxed category kicker */}
                  <div className="absolute top-3 left-3 text-[11px] font-medium tracking-wider uppercase text-[#F3E5AB] bg-[#120205]/80 backdrop-blur-sm px-2.5 py-1 border border-[#D4AF37]/30 rounded-sm">
                    {item.category}
                  </div>
                </div>

                {/* Details Footer */}
                <div className="p-5">
                  <h3
                    onClick={() => onOpenLightbox(item)}
                    className="font-serif text-lg font-bold text-[#F9F6F0] group-hover:text-[#F3E5AB] transition-colors cursor-pointer truncate"
                  >
                    {item.title}
                  </h3>
                  <p className="text-xs text-[#C5B7A5] mt-1 line-clamp-2 leading-relaxed">
                    {item.subtitle}
                  </p>

                  {/* Typographic metadata (No fake prices) */}
                  <div className="flex items-center gap-2 text-[11px] text-[#DFBE68] mt-3 pt-3 border-t border-[#380A14]">
                    <span>{item.craftType}</span>
                    <span aria-hidden="true">·</span>
                    <span>{item.fabricType}</span>
                  </div>

                  {/* WhatsApp Enquiry Link with section + item title */}
                  <div className="mt-4 pt-3 flex items-center justify-between border-t border-[#2F0811]">
                    <button
                      onClick={() => onOpenLightbox(item)}
                      className="text-xs text-[#E5D7C5] hover:text-[#DFBE68] font-medium transition-colors cursor-pointer"
                    >
                      View Details
                    </button>
                    <a
                      href={whatsappUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-xs text-[#25D366] hover:text-[#4ade80] transition-colors font-medium"
                    >
                      <MessageCircle className="w-3.5 h-3.5" />
                      <span>Enquire</span>
                    </a>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
