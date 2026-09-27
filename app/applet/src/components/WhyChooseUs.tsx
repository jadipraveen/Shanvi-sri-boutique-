import React from 'react';
import { Palette, Cpu, Scissors, Sparkles, HeartHandshake, Eye } from 'lucide-react';

export const WhyChooseUs: React.FC = () => {
  const reasons = [
    {
      title: 'Creative Designs',
      desc: 'Thoughtfully styled blouse designs and neckline patterns that highlight the beauty of your saree.',
      icon: Palette
    },
    {
      title: 'Detailed Embroidery',
      desc: 'Carefully placed zardozi stitches, stones, and computer threadwork designed for elegance and lasting wear.',
      icon: Cpu
    },
    {
      title: 'Custom Work',
      desc: 'Every piece is tailored to your individual fit, comfort, and fabric choices.',
      icon: Scissors
    },
    {
      title: 'Traditional & Modern Styles',
      desc: 'From traditional South Indian temple motifs to contemporary sheer cutwork and sleek silhouettes.',
      icon: Sparkles
    },
    {
      title: 'Attention To Detail',
      desc: 'Proper armhole fitting, reinforced seams, and smooth inner lining for irritation-free comfort.',
      icon: Eye
    },
    {
      title: 'Personalized Service',
      desc: 'One-on-one consultation to understand your occasion, schedule, and design expectations.',
      icon: HeartHandshake
    }
  ];

  return (
    <section id="why-choose-us" className="py-20 bg-[#170408] relative border-b border-[#D4AF37]/15">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs uppercase tracking-widest text-[#DFBE68] font-semibold">
            Our Commitment
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-[#F9F6F0] mt-2 mb-4">
            Why Choose Shanvi Sri Boutique
          </h2>
          <p className="text-xs sm:text-sm text-[#D4C3B2] max-w-xl mx-auto font-light">
            Dedicated craftsmanship and tailored care for every blouse, dress, and embroidery piece we create in Mancherial.
          </p>
          <div className="w-16 h-[2px] bg-[#D4AF37] mx-auto mt-6" />
        </div>

        {/* 6 Feature Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {reasons.map((r) => {
            const IconC = r.icon;
            return (
              <div
                key={r.title}
                className="p-6 bg-[#21050C]/60 border border-[#D4AF37]/25 hover:border-[#DFBE68]/60 rounded-sm transition-all duration-300 hover:bg-[#2A0710]/70 group"
              >
                <div className="w-10 h-10 rounded-full bg-[#3D0A16] border border-[#D4AF37]/40 flex items-center justify-center text-[#DFBE68] group-hover:text-[#F3E5AB] group-hover:border-[#DFBE68] transition-colors mb-4">
                  <IconC className="w-5 h-5" />
                </div>
                <h3 className="font-serif text-lg sm:text-xl font-bold text-[#F9F6F0] mb-2 group-hover:text-[#F3E5AB] transition-colors">
                  • {r.title}
                </h3>
                <p className="text-xs sm:text-sm text-[#C5B7A5] leading-relaxed">
                  {r.desc}
                </p>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
