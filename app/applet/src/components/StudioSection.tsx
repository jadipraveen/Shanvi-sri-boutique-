import React from 'react';
import { BoutiqueArtwork } from './BoutiqueArtwork';
import { Check, MessageCircle } from 'lucide-react';
import { buildWhatsAppUrl } from '../utils/whatsapp';

interface StudioSectionProps {
  machineImage?: string | null;
}

export const StudioSection: React.FC<StudioSectionProps> = ({ machineImage }) => {
  const whatsappUrl = buildWhatsAppUrl('Precision Embroidery Studio');

  const studioHighlights = [
    {
      title: 'Detailed Embroidery',
      desc: 'Clean, dense needlework with vibrant metallic and silk threads that hold structure over time.'
    },
    {
      title: 'Creative Patterns',
      desc: 'Floral vines, geometric borders, temple crests, and personalized motifs suited for all occasions.'
    },
    {
      title: 'Custom Design Work',
      desc: 'Tailored pattern sizing adapted to match your exact blouse measurements and saree border colors.'
    }
  ];

  return (
    <section id="studio" className="py-20 bg-[#160307] relative border-b border-[#D4AF37]/15">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Main Visual: Embroidery Machine and Thread Collection */}
          <div className="lg:col-span-6 relative order-2 lg:order-1">
            <div className="relative rounded-sm overflow-hidden border border-[#D4AF37]/35 shadow-2xl group">
              <div className="aspect-[4/3] w-full">
                <BoutiqueArtwork
                  svgType="embroidery-machine"
                  customImage={machineImage}
                  alt="Computer Embroidery Machine and Colorful Thread Spools"
                />
              </div>

              {/* Thread Spools Highlights Bar */}
              <div className="absolute bottom-4 left-4 right-4 p-3 bg-[#140206]/90 backdrop-blur-md border border-[#D4AF37]/30 rounded-sm flex items-center justify-between">
                <div>
                  <span className="text-xs font-semibold text-[#DFBE68] tracking-wider uppercase block">
                    In-House Embroidery Setup
                  </span>
                  <span className="text-xs text-[#E5D7C5]">
                    Multi-needle computer embroidery & thread collection
                  </span>
                </div>
                <div className="flex gap-1">
                  {['#D97706', '#DB2777', '#2563EB', '#059669', '#E11D48'].map((c, i) => (
                    <span key={i} className="w-2.5 h-2.5 rounded-full" style={{ backgroundColor: c }} />
                  ))}
                </div>
              </div>
            </div>

            <div className="absolute -inset-2 border border-[#D4AF37]/15 rounded-sm -z-10 translate-x-2 translate-y-2 pointer-events-none" />
          </div>

          {/* Text and 3 Key Points */}
          <div className="lg:col-span-6 space-y-6 order-1 lg:order-2">
            <div>
              <span className="text-xs uppercase tracking-widest text-[#DFBE68] font-semibold">
                Embroidery Studio
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-[#F9F6F0] mt-2 mb-4">
                Precision Embroidery. Beautiful Results.
              </h2>
              <div className="w-16 h-[2px] bg-[#D4AF37] mb-6" />
            </div>

            <p className="text-sm sm:text-base text-[#D4C3B2] leading-relaxed font-light">
              At Shanvi Sri Boutique, we combine contemporary computerized embroidery technology with personalized design curation. Our setup enables us to embroider intricate necklines, elaborate sleeves, and festive back patterns with crisp symmetry and rich thread luster.
            </p>

            {/* 3 Explicit Points */}
            <div className="space-y-4 pt-2">
              {studioHighlights.map((pt) => (
                <div
                  key={pt.title}
                  className="flex items-start gap-3.5 p-3.5 bg-[#23050C]/60 border border-[#D4AF37]/20 rounded-sm hover:border-[#DFBE68]/50 transition-colors"
                >
                  <div className="w-6 h-6 rounded-full bg-[#3F0A15] border border-[#D4AF37]/40 flex items-center justify-center text-[#DFBE68] flex-shrink-0 mt-0.5">
                    <Check className="w-3.5 h-3.5" />
                  </div>
                  <div>
                    <h3 className="font-serif text-base font-semibold text-[#F9F6F0]">
                      ✓ {pt.title}
                    </h3>
                    <p className="text-xs text-[#C5B7A5] mt-0.5 leading-relaxed">
                      {pt.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* WhatsApp CTA with dynamic section title */}
            <div className="pt-2">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 bg-[#881337] hover:bg-[#9F1239] text-[#FDFBF7] text-xs font-semibold tracking-wider uppercase rounded-sm border border-[#D4AF37]/40 transition-colors"
              >
                <MessageCircle className="w-4 h-4 text-[#F3E5AB]" />
                <span>Discuss Embroidery Design</span>
              </a>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
