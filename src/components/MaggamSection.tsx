import React from 'react';
import { BoutiqueArtwork } from './BoutiqueArtwork';
import { MessageCircle, Sparkles, Gem, Feather, Palette } from 'lucide-react';
import { buildWhatsAppUrl } from '../utils/whatsapp';

interface MaggamSectionProps {
  customPhotos: Record<string, string>;
  onEnquire?: () => void;
}

export const MaggamSection: React.FC<MaggamSectionProps> = ({
  customPhotos
}) => {
  const sleeveImage = customPhotos['maggam-sleeves'];
  const machineImage = customPhotos['computer-embroidery-machine'];

  const whatsappUrl = buildWhatsAppUrl('Intricate Maggam & Embroidery Work');

  const craftsmanshipPillars = [
    {
      title: 'Handcrafted Zardozi',
      desc: 'Metallic gold coil wires and antique dabka thread embroidery.',
      icon: Feather
    },
    {
      title: 'Kundan & Bead Clusters',
      desc: 'Lustrous stones, glass beads, and pearl drops handset into motifs.',
      icon: Gem
    },
    {
      title: 'Peacock & Temple Themes',
      desc: 'Traditional South Indian iconography for weddings and festivities.',
      icon: Sparkles
    },
    {
      title: 'Cutwork Necklines',
      desc: 'Delicate scalloped borders with contrasting fabric or net inserts.',
      icon: Palette
    }
  ];

  return (
    <section id="maggam" className="py-20 bg-[#120306] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs uppercase tracking-widest text-[#DFBE68] font-semibold">
            Artisanal Detailing
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-[#F9F6F0] mt-2 mb-4">
            Intricate Maggam & Embroidery Work
          </h2>
          <div className="w-16 h-[2px] bg-[#D4AF37] mx-auto mb-6" />
          <p className="text-base sm:text-lg text-[#F3E5AB] font-serif italic max-w-2xl mx-auto">
            "From delicate floral patterns to rich bridal embroidery, our designs are created to add a distinctive finish to every outfit."
          </p>
        </div>

        {/* Visual Showcase Grid: Maggam Sleeves + Machine Precision */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center mb-14">
          
          {/* Main Visual: Maggam Sleeves Showcase */}
          <div className="lg:col-span-7">
            <div className="relative rounded-sm overflow-hidden border border-[#D4AF37]/35 shadow-2xl group bg-[#180307]">
              <div className="aspect-[16/10] w-full">
                <BoutiqueArtwork
                  svgType="maggam-sleeves"
                  customImage={sleeveImage}
                  alt="Intricate Maggam Blouse Sleeves Collection"
                />
              </div>
              <div className="absolute bottom-3 left-3 right-3 p-3 bg-[#120205]/90 backdrop-blur-md border border-[#D4AF37]/30 rounded-sm flex items-center justify-between">
                <div>
                  <span className="text-xs text-[#DFBE68] font-semibold uppercase tracking-wider block">
                    Maggam Sleeve Cuffs
                  </span>
                  <span className="text-xs text-[#E5D7C5]">
                    Peacock motifs, stone borders & zardozi handcraft
                  </span>
                </div>
                <span className="text-xs text-[#DFBE68] font-mono border border-[#D4AF37]/40 px-2 py-0.5">
                  Shanvi Sri Atelier
                </span>
              </div>
            </div>
          </div>

          {/* Secondary Visual & Studio Sync */}
          <div className="lg:col-span-5 space-y-6">
            <div className="relative rounded-sm overflow-hidden border border-[#D4AF37]/25 shadow-xl group bg-[#180307]">
              <div className="aspect-[16/9] w-full">
                <BoutiqueArtwork
                  svgType="embroidery-machine"
                  customImage={machineImage}
                  alt="Embroidery Machine Studio"
                />
              </div>
              <div className="p-4 bg-[#1B050B]">
                <h4 className="font-serif text-base font-bold text-[#F9F6F0]">
                  Close-Up Embroidery Craftsmanship
                </h4>
                <p className="text-xs text-[#D4C3B2] mt-1 leading-relaxed">
                  Every curve of the neckline, sleeve border, and back arch is planned to balance stone weight, thread density, and fabric comfort.
                </p>
              </div>
            </div>

            {/* 4 Detailing Points */}
            <div className="grid grid-cols-2 gap-3 pt-2">
              {craftsmanshipPillars.map((pillar) => {
                const IconComp = pillar.icon;
                return (
                  <div key={pillar.title} className="p-3 bg-[#20050C]/60 border border-[#D4AF37]/20 rounded-sm">
                    <div className="flex items-center gap-1.5 text-[#DFBE68] mb-1">
                      <IconComp className="w-3.5 h-3.5" />
                      <span className="font-serif text-xs font-semibold text-[#F9F6F0]">{pillar.title}</span>
                    </div>
                    <p className="text-[11px] text-[#C5B7A5] leading-snug">{pillar.desc}</p>
                  </div>
                );
              })}
            </div>
          </div>

        </div>

        {/* CTA Bar with dynamically appended section title */}
        <div className="text-center pt-4">
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2.5 px-8 py-3.5 bg-gradient-to-r from-[#DFBE68] via-[#F3E5AB] to-[#D4AF37] hover:from-[#F3E5AB] hover:to-[#DFBE68] text-[#240409] font-bold text-xs uppercase tracking-widest rounded-sm shadow-xl shadow-[#D4AF37]/15 transition-transform hover:-translate-y-0.5 cursor-pointer"
          >
            <MessageCircle className="w-4 h-4 text-[#240409]" />
            <span>Enquire For Custom Design</span>
          </a>
        </div>

      </div>
    </section>
  );
};
