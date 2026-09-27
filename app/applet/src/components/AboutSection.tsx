import React from 'react';
import { BoutiqueArtwork } from './BoutiqueArtwork';
import { Sparkles, Scissors, Cpu, Palette, MessageCircle } from 'lucide-react';
import { buildWhatsAppUrl } from '../utils/whatsapp';

interface AboutSectionProps {
  shopImage?: string | null;
}

export const AboutSection: React.FC<AboutSectionProps> = ({ shopImage }) => {
  const whatsappUrl = buildWhatsAppUrl('Crafted With Creativity & Care (About Us)');

  const featureCards = [
    {
      title: 'Designer Blouses',
      description: 'Custom cuts, trendy sleeves, and fine finishing for festive sarees.',
      icon: Scissors
    },
    {
      title: 'Maggam Work',
      description: 'Zardozi, stone clusters, kundan, and traditional South Indian motifs.',
      icon: Sparkles
    },
    {
      title: 'Computer Embroidery',
      description: 'High-density multi-color thread work with symmetrical precision.',
      icon: Cpu
    },
    {
      title: 'Custom Designs',
      description: 'Bring your blouse inspiration and have it tailored to your measurements.',
      icon: Palette
    }
  ];

  return (
    <section id="about" className="py-20 bg-[#160307] relative overflow-hidden border-b border-[#D4AF37]/15">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs uppercase tracking-widest text-[#DFBE68] font-semibold">
            About Our Boutique
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-[#F9F6F0] mt-2 mb-4 text-balance">
            Crafted With Creativity & Care
          </h2>
          <div className="w-16 h-[2px] bg-[#D4AF37] mx-auto" />
        </div>

        {/* 2-Column Split: Visual & Narrative */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left: Boutique Shop Interior & Materials Visual */}
          <div className="lg:col-span-6 relative">
            <div className="relative rounded-sm overflow-hidden border border-[#D4AF37]/30 shadow-2xl group">
              <div className="aspect-[4/3] w-full">
                <BoutiqueArtwork
                  svgType="shop-interior"
                  customImage={shopImage}
                  alt="Shanvi Sri Boutique Interior and Blouse Materials Display"
                />
              </div>

              {/* Interior Label Tag */}
              <div className="absolute bottom-4 left-4 right-4 p-3 bg-[#170307]/90 backdrop-blur-md border border-[#D4AF37]/30 rounded-sm">
                <p className="text-xs text-[#DFBE68] font-semibold uppercase tracking-wider">
                  Shanvi Sri Boutique Studio
                </p>
                <p className="text-xs text-[#E5D7C5] mt-0.5">
                  Fabric materials, designer borders & custom blouse atelier in Mancherial
                </p>
              </div>
            </div>

            {/* Background subtle offset frame */}
            <div className="absolute -inset-2 border border-[#D4AF37]/15 rounded-sm -z-10 translate-x-2 translate-y-2 pointer-events-none" />
          </div>

          {/* Right: Realistic, elegant copy as requested */}
          <div className="lg:col-span-6 space-y-6">
            <p className="text-lg sm:text-xl text-[#F9F6F0] font-serif leading-relaxed italic text-[#F3E5AB]">
              "Shanvi Sri Boutique brings together creative boutique designs, detailed embroidery and beautiful blouse craftsmanship. From elegant traditional designs to modern patterns, every piece is created with attention to detail."
            </p>

            <p className="text-sm sm:text-base text-[#D4C3B2] leading-relaxed font-light">
              Located in Mancherial near Iqbal Ahmed Nagar, we provide tailored fashion solutions for brides, festive gatherings, and everyday elegance. Our work focuses on neat cuts, comfortable lining, rich zardozi work, and computer embroidery that complements your saree and style.
            </p>

            {/* 4 Feature Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
              {featureCards.map((feat) => {
                const IconComponent = feat.icon;
                return (
                  <div
                    key={feat.title}
                    className="p-4 bg-[#23050C]/70 border border-[#D4AF37]/25 rounded-sm hover:border-[#DFBE68]/60 transition-colors group"
                  >
                    <div className="flex items-center gap-2.5 mb-2">
                      <div className="w-7 h-7 rounded-full bg-[#3D0A16] flex items-center justify-center text-[#DFBE68] group-hover:text-[#F3E5AB]">
                        <IconComponent className="w-3.5 h-3.5" />
                      </div>
                      <h3 className="font-serif text-base font-semibold text-[#F9F6F0]">
                        • {feat.title}
                      </h3>
                    </div>
                    <p className="text-xs text-[#C5B7A5] leading-relaxed">
                      {feat.description}
                    </p>
                  </div>
                );
              })}
            </div>

            {/* Quick Consultation Actions */}
            <div className="pt-2 flex flex-wrap items-center gap-4">
              <a
                href="#contact"
                className="inline-flex items-center gap-2 text-xs uppercase tracking-widest text-[#DFBE68] hover:text-[#F3E5AB] font-semibold pb-1 border-b border-[#D4AF37]/40 hover:border-[#F3E5AB] transition-all"
              >
                <span>Visit Us in Mancherial</span>
                <span>→</span>
              </a>

              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-[#25050C] hover:bg-[#380914] text-[#25D366] text-xs font-medium rounded-sm border border-[#D4AF37]/30 transition-colors"
              >
                <MessageCircle className="w-3.5 h-3.5" />
                <span>Ask about boutique work</span>
              </a>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
