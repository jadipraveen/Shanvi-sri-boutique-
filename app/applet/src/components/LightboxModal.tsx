import React, { useEffect } from 'react';
import { PortfolioItem } from '../data/portfolioData';
import { BoutiqueArtwork } from './BoutiqueArtwork';
import { X, ChevronLeft, ChevronRight, MessageCircle, Sparkles, Check } from 'lucide-react';
import { buildWhatsAppUrl } from '../utils/whatsapp';

interface LightboxModalProps {
  item: PortfolioItem | null;
  items: PortfolioItem[];
  customPhotos: Record<string, string>;
  onClose: () => void;
  onNavigate: (item: PortfolioItem) => void;
}

export const LightboxModal: React.FC<LightboxModalProps> = ({
  item,
  items,
  customPhotos,
  onClose,
  onNavigate
}) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!item) return;
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowLeft') {
        const currentIndex = items.findIndex((i) => i.id === item.id);
        const prevIndex = (currentIndex - 1 + items.length) % items.length;
        onNavigate(items[prevIndex]);
      }
      if (e.key === 'ArrowRight') {
        const currentIndex = items.findIndex((i) => i.id === item.id);
        const nextIndex = (currentIndex + 1) % items.length;
        onNavigate(items[nextIndex]);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [item, items, onClose, onNavigate]);

  if (!item) return null;

  const currentIndex = items.findIndex((i) => i.id === item.id);
  const prevItem = items[(currentIndex - 1 + items.length) % items.length];
  const nextItem = items[(currentIndex + 1) % items.length];
  const customImg = customPhotos[item.id] || customPhotos[item.svgType];

  const whatsappUrl = buildWhatsAppUrl('Gallery Portfolio Lightbox', `${item.title} (${item.category})`);

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="lightbox-modal-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/90 backdrop-blur-md animate-in fade-in duration-200"
    >
      {/* Background click to close */}
      <div className="absolute inset-0" onClick={onClose} />

      {/* Main Lightbox Frame */}
      <div className="relative z-10 w-full max-w-5xl bg-[#170307] border border-[#D4AF37]/40 rounded-sm overflow-hidden shadow-2xl flex flex-col lg:flex-row max-h-[92vh]">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-3 right-3 z-20 p-2 text-[#DFBE68] hover:text-[#F9F6F0] bg-[#120205]/80 hover:bg-[#25040B] rounded-full border border-[#D4AF37]/40 transition-colors cursor-pointer"
          aria-label="Close lightbox"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Visual Preview Side */}
        <div className="relative lg:w-3/5 bg-[#120205] flex items-center justify-center min-h-[300px] lg:min-h-[540px] overflow-hidden">
          <div className="w-full h-full aspect-[4/3] lg:aspect-auto">
            <BoutiqueArtwork
              svgType={item.svgType}
              customImage={customImg}
              alt={item.title}
              className="w-full h-full"
            />
          </div>

          {/* Previous / Next Arrow Controls */}
          <button
            onClick={() => onNavigate(prevItem)}
            className="absolute left-3 top-1/2 -translate-y-1/2 p-2.5 bg-[#140206]/85 hover:bg-[#2B050E] text-[#DFBE68] rounded-full border border-[#D4AF37]/35 transition-colors cursor-pointer"
            aria-label="Previous design"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button
            onClick={() => onNavigate(nextItem)}
            className="absolute right-3 top-1/2 -translate-y-1/2 p-2.5 bg-[#140206]/85 hover:bg-[#2B050E] text-[#DFBE68] rounded-full border border-[#D4AF37]/35 transition-colors cursor-pointer"
            aria-label="Next design"
          >
            <ChevronRight className="w-5 h-5" />
          </button>

          {/* Design Counter */}
          <div className="absolute bottom-3 left-3 px-2.5 py-1 bg-[#120205]/80 text-xs font-mono text-[#DFBE68] border border-[#D4AF37]/30">
            {currentIndex + 1} / {items.length}
          </div>
        </div>

        {/* Details Side */}
        <div className="lg:w-2/5 p-6 sm:p-8 flex flex-col justify-between overflow-y-auto bg-[#1C050D]">
          <div>
            {/* Category */}
            <div className="inline-flex items-center gap-1.5 text-xs uppercase tracking-widest text-[#DFBE68] font-semibold mb-2">
              <Sparkles className="w-3.5 h-3.5" />
              <span>{item.category}</span>
            </div>

            <h3 id="lightbox-modal-title" className="font-serif text-2xl sm:text-3xl font-bold text-[#F9F6F0] mb-2 leading-snug">
              {item.title}
            </h3>

            <p className="text-xs sm:text-sm text-[#DFBE68] font-serif italic mb-4">
              {item.subtitle}
            </p>

            <p className="text-xs sm:text-sm text-[#D4C3B2] leading-relaxed mb-6 font-light">
              {item.description}
            </p>

            {/* Craft Specs */}
            <div className="space-y-2.5 py-4 border-y border-[#3A0A16] text-xs">
              <div className="flex justify-between">
                <span className="text-[#A89887] uppercase tracking-wider">Craftsmanship:</span>
                <span className="text-[#F9F6F0] font-medium">{item.craftType}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-[#A89887] uppercase tracking-wider">Fabric Base:</span>
                <span className="text-[#F9F6F0] font-medium">{item.fabricType}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-[#A89887] uppercase tracking-wider">Boutique:</span>
                <span className="text-[#DFBE68] font-medium">Shanvi Sri, Mancherial</span>
              </div>
            </div>

            {/* Design Highlights */}
            <div className="mt-4">
              <span className="text-[11px] uppercase tracking-widest text-[#DFBE68] font-semibold block mb-2">
                Features & Detailing
              </span>
              <ul className="space-y-1 text-xs text-[#E5D7C5]">
                {item.tags.map((t, idx) => (
                  <li key={idx} className="flex items-center gap-1.5">
                    <Check className="w-3 h-3 text-[#DFBE68]" />
                    <span>{t}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Action Footer */}
          <div className="pt-6 mt-6 border-t border-[#3A0A16] flex flex-col gap-2.5">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full inline-flex items-center justify-center gap-2 py-3 px-4 bg-gradient-to-r from-[#881337] via-[#9F1239] to-[#881337] hover:from-[#9F1239] hover:to-[#BE123C] text-[#FDFBF7] font-semibold text-xs uppercase tracking-widest rounded-sm border border-[#D4AF37]/50 shadow-lg shadow-[#881337]/25 transition-all cursor-pointer"
            >
              <MessageCircle className="w-4 h-4 text-[#25D366]" />
              <span>Enquire About This On WhatsApp</span>
            </a>

            <p className="text-[11px] text-center text-[#A89887]">
              Or call us directly at <a href="tel:+919676715780" className="text-[#DFBE68] hover:underline font-semibold">+91 96767 15780</a>
            </p>
          </div>

        </div>

      </div>
    </div>
  );
};
