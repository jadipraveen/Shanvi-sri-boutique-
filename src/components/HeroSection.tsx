import React from 'react';
import { BoutiqueArtwork } from './BoutiqueArtwork';
import { MessageCircle, Compass, MapPin, Camera } from 'lucide-react';
import { buildWhatsAppUrl } from '../utils/whatsapp';

interface HeroSectionProps {
  heroImage?: string | null;
  onExploreClick: () => void;
  onOpenPhotoManager?: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ 
  heroImage, 
  onExploreClick,
  onOpenPhotoManager 
}) => {
  const whatsappUrl = buildWhatsAppUrl();

  return (
    <section id="home" className="relative min-h-[92vh] lg:min-h-screen flex items-center justify-center pt-24 pb-16 overflow-hidden">
      {/* Background Visual Layer: The bridal blouse / design showcase */}
      <div className="absolute inset-0 z-0">
        <BoutiqueArtwork
          svgType="bridal-masterpiece"
          customImage={heroImage}
          className="w-full h-full"
          alt="Shanvi Sri Boutique Bridal Blouse Showcase"
          priority
        />
        {/* Subtle Dark Gradient Overlay for optimal readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#120205]/95 via-[#180307]/80 to-[#120205]/90 pointer-events-none" />
        <div className="absolute inset-0 bg-radial from-transparent via-[#140206]/50 to-[#100104]/90 pointer-events-none" />
      </div>

      {/* Decorative hairline gold borders */}
      <div className="absolute top-0 inset-x-0 h-[1px] bg-gradient-to-r from-transparent via-[#D4AF37]/40 to-transparent" />
      <div className="absolute bottom-0 inset-x-0 h-[1px] bg-gradient-to-r from-transparent via-[#D4AF37]/30 to-transparent" />

      {/* Hero Content Container */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center">
        
        {/* Location & Craft Kicker */}
        <div className="flex items-center gap-2 mb-6 text-xs uppercase tracking-widest text-[#DFBE68] font-medium">
          <MapPin className="w-3.5 h-3.5 text-[#DFBE68]" />
          <span>Mancherial, Telangana</span>
          <span aria-hidden="true" className="text-[#D4AF37]/60">·</span>
          <span className="text-[#E5D7C5]">Ladies Boutique & Embroidery Clinic</span>
        </div>

        {/* Main Heading */}
        <h1 className="font-serif text-4xl sm:text-6xl md:text-7xl font-bold tracking-tight text-[#F9F6F0] mb-4 text-balance">
          Shanvi Sri Boutique
        </h1>

        {/* Main Tagline */}
        <p className="font-serif italic text-xl sm:text-2xl md:text-3xl text-[#DFBE68] mb-4 font-normal tracking-wide">
          Where Tradition Meets Elegant Craftsmanship
        </p>

        {/* Subheading */}
        <p className="text-sm sm:text-base md:text-lg text-[#E5D7C5] max-w-2xl mx-auto mb-8 font-light tracking-wide leading-relaxed">
          Designer Blouses • Maggam Work • Computer Embroidery • Boutique Designs
        </p>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto justify-center mb-6">
          {/* Explore Our Designs */}
          <button
            onClick={onExploreClick}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-3.5 bg-gradient-to-r from-[#DFBE68] via-[#F3E5AB] to-[#D4AF37] hover:from-[#F3E5AB] hover:to-[#DFBE68] text-[#240409] font-semibold text-sm tracking-wider uppercase rounded-sm shadow-lg shadow-[#D4AF37]/15 transition-all transform hover:-translate-y-0.5 cursor-pointer"
          >
            <Compass className="w-4 h-4 text-[#240409]" />
            <span>Explore Our Designs</span>
          </button>

          {/* WhatsApp Us with dynamically appended section */}
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-3.5 bg-[#2B050E]/80 hover:bg-[#3D0814] text-[#F9F6F0] font-medium text-sm tracking-wider uppercase rounded-sm border border-[#D4AF37]/50 hover:border-[#DFBE68] backdrop-blur-sm transition-all cursor-pointer"
          >
            <MessageCircle className="w-4 h-4 text-[#25D366]" />
            <span>WhatsApp Us</span>
          </a>
        </div>

        {/* Prominent Quick Photo Upload Callout */}
        {onOpenPhotoManager && (
          <button
            onClick={onOpenPhotoManager}
            className="inline-flex items-center gap-2 px-4 py-2 mb-8 text-xs font-medium text-[#F3E5AB] bg-[#27050E]/80 hover:bg-[#3D0A16] border border-[#D4AF37]/50 hover:border-[#DFBE68] rounded-sm transition-colors cursor-pointer shadow-md"
          >
            <Camera className="w-3.5 h-3.5 text-[#DFBE68]" />
            <span>Upload Real Photos / ఫోటోలు జోడించండి</span>
          </button>
        )}

        {/* Grounded Key Craft Pillars */}
        <div className="pt-6 border-t border-[#D4AF37]/20 w-full max-w-3xl grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
          <div className="flex flex-col items-center">
            <span className="text-xs uppercase tracking-wider text-[#DFBE68] font-medium">Bespoke Fitting</span>
            <span className="text-xs text-[#C5B7A5] mt-0.5">Tailored to perfection</span>
          </div>
          <div className="flex flex-col items-center">
            <span className="text-xs uppercase tracking-wider text-[#DFBE68] font-medium">Hand Maggam Work</span>
            <span className="text-xs text-[#C5B7A5] mt-0.5">Zardozi & Kundan stones</span>
          </div>
          <div className="flex flex-col items-center">
            <span className="text-xs uppercase tracking-wider text-[#DFBE68] font-medium">Computer Embroidery</span>
            <span className="text-xs text-[#C5B7A5] mt-0.5">High precision patterns</span>
          </div>
          <div className="flex flex-col items-center">
            <span className="text-xs uppercase tracking-wider text-[#DFBE68] font-medium">Personalized Care</span>
            <span className="text-xs text-[#C5B7A5] mt-0.5">Custom fabric consultation</span>
          </div>
        </div>

      </div>
    </section>
  );
};
