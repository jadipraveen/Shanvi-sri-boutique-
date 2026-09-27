import React from 'react';
import { MessageCircle, CheckCircle, ArrowRight } from 'lucide-react';
import { buildWhatsAppUrl } from '../utils/whatsapp';

export const HowToOrder: React.FC = () => {
  const whatsappUrl = buildWhatsAppUrl('How To Order - Send Your Design');

  const steps = [
    {
      step: '01',
      title: 'Choose Your Design',
      desc: 'Browse our signature gallery, pick an embroidery style, or bring your own reference photo from social media or magazines.'
    },
    {
      step: '02',
      title: 'Share Your Requirements',
      desc: 'Provide your measurements, saree fabric details, neckline preferences, and desired delivery timeframe.'
    },
    {
      step: '03',
      title: 'Get Your Custom Work',
      desc: 'Our boutique team crafts your blouse with precision embroidery, perfect stitching, and immaculate finishing ready for your special day.'
    }
  ];

  return (
    <section id="how-to-order" className="py-20 bg-[#120306] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs uppercase tracking-widest text-[#DFBE68] font-semibold">
            Simple 3-Step Process
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-[#F9F6F0] mt-2 mb-4">
            How To Order Your Custom Design
          </h2>
          <div className="w-16 h-[2px] bg-[#D4AF37] mx-auto" />
        </div>

        {/* 3 Step Editorial Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {steps.map((st, i) => (
            <div
              key={st.step}
              className="relative p-8 bg-[#1A0409] border border-[#D4AF37]/30 hover:border-[#DFBE68]/70 rounded-sm transition-all duration-300 group hover:shadow-xl hover:shadow-[#D4AF37]/10"
            >
              {/* Step Number */}
              <div className="text-3xl font-serif font-bold text-[#DFBE68]/90 mb-4 font-mono">
                {st.step} —
              </div>

              <h3 className="font-serif text-xl sm:text-2xl font-bold text-[#F9F6F0] group-hover:text-[#F3E5AB] transition-colors mb-3">
                {st.title}
              </h3>

              <p className="text-xs sm:text-sm text-[#D4C3B2] leading-relaxed font-light">
                {st.desc}
              </p>

              {/* Decorative bottom hairline */}
              <div className="mt-6 pt-4 border-t border-[#310710] flex items-center justify-between text-xs text-[#DFBE68]">
                <span>Step {i + 1} of 3</span>
                <CheckCircle className="w-4 h-4 text-[#DFBE68]/70" />
              </div>
            </div>
          ))}
        </div>

        {/* WhatsApp CTA with dynamic section title */}
        <div className="text-center pt-2">
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-[#881337] via-[#9F1239] to-[#881337] hover:from-[#9F1239] hover:to-[#BE123C] text-[#FDFBF7] font-bold text-xs uppercase tracking-widest rounded-sm border border-[#D4AF37]/60 shadow-xl shadow-[#881337]/30 transition-all transform hover:-translate-y-0.5 cursor-pointer"
          >
            <MessageCircle className="w-5 h-5 text-[#25D366]" />
            <span>Send Your Design</span>
            <ArrowRight className="w-4 h-4 text-[#DFBE68]" />
          </a>
          <p className="text-xs text-[#A89887] mt-3">
            Send photo references directly to our WhatsApp at <span className="text-[#DFBE68] font-medium">+91 96767 15780</span>
          </p>
        </div>

      </div>
    </section>
  );
};
