import React, { useState } from 'react';
import { PortfolioItem } from '../data/portfolioData';
import { BoutiqueArtwork } from './BoutiqueArtwork';
import { Eye, MessageCircle, Sparkles, Camera } from 'lucide-react';
import { buildWhatsAppUrl } from '../utils/whatsapp';

interface GallerySectionProps {
  items: PortfolioItem[];
  customPhotos: Record<string, string>;
  onOpenLightbox: (item: PortfolioItem) => void;
  onOpenPhotoManager: () => void;
}

export const GallerySection: React.FC<GallerySectionProps> = ({
  items,
  customPhotos,
  onOpenLightbox,
  onOpenPhotoManager
}) => {
  const [activeCategory, setActiveCategory] = useState<string>('All Designs');

  const categories = [
    'All Designs',
    'Blouse Designs',
    'Maggam Work',
    'Embroidery',
    'Designer Collections',
    'Our Work'
  ];

  const filteredItems = activeCategory === 'All Designs'
    ? items
    : items.filter((item) => item.category === activeCategory);

  const galleryWhatsAppUrl = buildWhatsAppUrl('Our Work & Creations Gallery', `Category: ${activeCategory}`);

  return (
    <section id="gallery" className="py-24 bg-[#140306] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Gallery Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 mb-3 rounded-full border border-[#D4AF37]/30 bg-[#25050D]">
            <Sparkles className="w-3.5 h-3.5 text-[#DFBE68]" />
            <span className="text-xs uppercase tracking-widest text-[#F3E5AB] font-semibold">
              Boutique Portfolio
            </span>
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-[#F9F6F0] mb-4">
            Our Work & Creations
          </h2>
          <p className="text-xs sm:text-sm text-[#D4C3B2] max-w-xl mx-auto font-light">
            Every design represents custom stitching, intricate embroidery patterns, and dedicated craftsmanship created at our Mancherial boutique.
          </p>

          <div className="w-16 h-[2px] bg-[#D4AF37] mx-auto mt-6" />
        </div>

        {/* Category Filter Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-2 text-xs font-semibold uppercase tracking-wider rounded-sm transition-all cursor-pointer ${
                activeCategory === cat
                  ? 'bg-gradient-to-r from-[#DFBE68] to-[#D4AF37] text-[#240409] shadow-md shadow-[#D4AF37]/20 font-bold'
                  : 'bg-[#23050C] text-[#E5D7C5] hover:text-[#F3E5AB] hover:bg-[#320711] border border-[#D4AF37]/25'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Masonry / Responsive Portfolio Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map((item, idx) => {
            const customImg = customPhotos[item.id] || customPhotos[item.svgType];
            const isFeatured = idx === 0 || idx === 4;

            return (
              <div
                key={item.id}
                onClick={() => onOpenLightbox(item)}
                className={`group relative bg-[#1B0409] border border-[#D4AF37]/25 hover:border-[#DFBE68]/70 rounded-sm overflow-hidden transition-all duration-500 hover:shadow-2xl hover:shadow-[#D4AF37]/15 cursor-pointer flex flex-col ${
                  isFeatured ? 'sm:col-span-2 lg:col-span-1' : ''
                }`}
              >
                {/* Visual Area */}
                <div className="relative aspect-[4/3] w-full overflow-hidden bg-[#24050D]">
                  <BoutiqueArtwork
                    svgType={item.svgType}
                    customImage={customImg}
                    alt={item.title}
                  />

                  {/* Hover Quick Action Scrim */}
                  <div className="absolute inset-0 bg-[#140206]/75 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center p-6 text-center">
                    <span className="p-3 bg-[#DFBE68] text-[#1A0307] rounded-full mb-3 shadow-lg transform translate-y-3 group-hover:translate-y-0 transition-transform duration-300">
                      <Eye className="w-5 h-5" />
                    </span>
                    <span className="text-xs uppercase tracking-widest text-[#F3E5AB] font-bold">
                      Click To Enlarge
                    </span>
                    <span className="text-[11px] text-[#E5D7C5] mt-1 max-w-xs">
                      View embroidery close-up & enquire on WhatsApp
                    </span>
                  </div>

                  {/* Clean unboxed category kicker */}
                  <div className="absolute top-3 left-3 px-2.5 py-1 bg-[#120205]/85 backdrop-blur-sm border border-[#D4AF37]/35 text-[10px] uppercase font-semibold text-[#DFBE68]">
                    {item.category}
                  </div>

                  {/* Portfolio slot number */}
                  <div className="absolute top-3 right-3 px-2 py-0.5 bg-[#120205]/80 text-[10px] font-mono text-[#F3E5AB]/70 border border-[#D4AF37]/20">
                    #{item.number}
                  </div>
                </div>

                {/* Info Card */}
                <div className="p-5 flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="font-serif text-lg sm:text-xl font-bold text-[#F9F6F0] group-hover:text-[#F3E5AB] transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-xs text-[#D4C3B2] mt-1 line-clamp-2 leading-relaxed font-light">
                      {item.description}
                    </p>
                  </div>

                  {/* Craft & Fabric metadata */}
                  <div className="mt-4 pt-3 border-t border-[#350912] flex items-center justify-between text-[11px] text-[#DFBE68]">
                    <span className="truncate max-w-[170px]">{item.craftType}</span>
                    <span className="text-[#E5D7C5] group-hover:text-[#DFBE68] transition-colors flex items-center gap-1 font-medium">
                      <span>Enquire</span>
                      <span>→</span>
                    </span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Boutique Owner Photo Management & Direct WhatsApp Gallery Enquiry Bar */}
        <div className="mt-14 p-6 bg-[#22050D] border border-[#D4AF37]/30 rounded-sm flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3 text-center sm:text-left">
            <div className="w-10 h-10 rounded-full bg-[#3D0A16] border border-[#D4AF37]/50 flex items-center justify-center text-[#DFBE68] flex-shrink-0">
              <Camera className="w-5 h-5" />
            </div>
            <div>
              <h4 className="font-serif text-base font-bold text-[#F9F6F0]">
                Are you the boutique owner or updating real portfolio photos?
              </h4>
              <p className="text-xs text-[#C5B7A5] mt-0.5">
                You can upload or replace photos for any of the 10 work showcase slots anytime with instant browser persistence.
              </p>
            </div>
          </div>
          
          <div className="flex flex-wrap items-center gap-3">
            <a
              href={galleryWhatsAppUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2.5 bg-[#25050C] hover:bg-[#380914] text-[#25D366] text-xs font-semibold uppercase tracking-wider rounded-sm border border-[#D4AF37]/40 transition-colors"
            >
              <MessageCircle className="w-4 h-4" />
              <span>Ask about {activeCategory}</span>
            </a>

            <button
              onClick={onOpenPhotoManager}
              className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#3B0711] hover:bg-[#4E0B19] text-[#F3E5AB] text-xs font-semibold uppercase tracking-wider rounded-sm border border-[#D4AF37]/40 transition-colors cursor-pointer flex-shrink-0"
            >
              <Camera className="w-4 h-4 text-[#DFBE68]" />
              <span>Manage Boutique Photos</span>
            </button>
          </div>
        </div>

      </div>
    </section>
  );
};
