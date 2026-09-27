import React from 'react';
import { BoutiqueArtwork } from './BoutiqueArtwork';
import { Sparkles, ArrowRight, MessageCircle } from 'lucide-react';
import { buildWhatsAppUrl } from '../utils/whatsapp';

interface FeaturedDesignSectionProps {
  bridalImage?: string | null;
  onViewGallery: () => void;
}

export const FeaturedDesignSection: React.FC<FeaturedDesignSectionProps> = ({
  bridalImage,
  onViewGallery
}) => {
  const whatsappUrl = buildWhatsAppUrl('Featured Bridal Design Showcase');

  return (
    <section id="featured-design" className="py-24 bg-[#120306] relative overflow-hidden border-b border-[#D4AF37]/15">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Split-Screen Frame */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-0 border border-[#D4AF37]/35 rounded-sm overflow-hidden bg-[#180409] shadow-2xl">
          
          {/* Left: Bridal Blouse / Fashion Showcase Visual */}
          <div className="lg:col-span-6 relative aspect-[4/3] lg:aspect-auto lg:min-h-[500px]">
            <BoutiqueArtwork
              svgType="bridal-masterpiece"
              customImage={bridalImage}
              className="w-full h-full"
              alt="Bridal Blouse Fashion Showcase"
            />
            
            <div className="absolute top-4 left-4 px-3 py-1 bg-[#150205]/85 backdrop-blur-sm border border-[#D4AF37]/40 text-xs font-serif tracking-wider text-[#DFBE68] uppercase">
              Bridal Masterpiece
            </div>
          </div>

          {/* Right: Exact Required Copy and CTA */}
          <div className="lg:col-span-6 p-8 sm:p-12 lg:p-16 flex flex-col justify-center bg-gradient-to-br from-[#1C050C] via-[#160308] to-[#120205]">
            <div className="inline-flex items-center gap-2 mb-4 text-xs font-semibold uppercase tracking-widest text-[#DFBE68]">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Couture Craft</span>
            </div>

            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-[#F9F6F0] mb-6 leading-tight text-balance">
              Designed To Make Every Occasion Special
            </h2>

            <p className="text-base sm:text-lg text-[#E5D7C5] leading-relaxed mb-8 font-light">
              Explore elegant embroidery, blouse designs and customized boutique creations made with attention to detail.
            </p>

            <div className="pt-2 flex flex-wrap items-center gap-4">
              <button
                onClick={onViewGallery}
                className="inline-flex items-center gap-3 px-8 py-3.5 bg-gradient-to-r from-[#DFBE68] via-[#F3E5AB] to-[#D4AF37] hover:from-[#F3E5AB] hover:to-[#DFBE68] text-[#240409] font-bold text-xs uppercase tracking-widest rounded-sm shadow-xl shadow-[#D4AF37]/15 transition-all transform hover:-translate-y-0.5 cursor-pointer"
              >
                <span>View Gallery</span>
                <ArrowRight className="w-4 h-4 text-[#240409]" />
              </button>

              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3.5 bg-[#25050D] hover:bg-[#390815] text-[#25D366] font-semibold text-xs uppercase tracking-wider rounded-sm border border-[#D4AF37]/40 transition-colors"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Enquire Bridal Design</span>
              </a>
            </div>

            <div className="mt-12 pt-8 border-t border-[#3B0A15] grid grid-cols-2 gap-4">
              <div>
                <span className="text-xs text-[#DFBE68] uppercase tracking-wider block font-semibold">Bridal & Muhurtham</span>
                <span className="text-xs text-[#C5B7A5]">Rich zardozi, kundan & pearl work</span>
              </div>
              <div>
                <span className="text-xs text-[#DFBE68] uppercase tracking-wider block font-semibold">Reception & Sangeet</span>
                <span className="text-xs text-[#C5B7A5]">Modern cutwork & floral jaal</span>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
