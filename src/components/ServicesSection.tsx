import React from 'react';
import { SERVICE_LIST } from '../data/portfolioData';
import { BoutiqueArtwork } from './BoutiqueArtwork';
import { MessageCircle, Check } from 'lucide-react';
import { buildWhatsAppUrl } from '../utils/whatsapp';

interface ServicesSectionProps {
  customPhotos: Record<string, string>;
  onSelectService: (serviceName: string) => void;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({
  customPhotos,
  onSelectService
}) => {
  return (
    <section id="services" className="py-20 bg-[#120306] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs uppercase tracking-widest text-[#DFBE68] font-semibold">
            Boutique Services & Craftsmanship
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-[#F9F6F0] mt-2 mb-4">
            Our Specialities
          </h2>
          <div className="w-16 h-[2px] bg-[#D4AF37] mx-auto" />
        </div>

        {/* 6 Premium Service Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SERVICE_LIST.map((service, index) => {
            const customImg =
              customPhotos[service.svgType] ||
              (service.id === 'designer-blouse' ? customPhotos['designer-embroidered-blouse'] : null) ||
              (service.id === 'maggam-work' ? customPhotos['maggam-sleeves'] : null) ||
              (service.id === 'computer-embroidery' ? customPhotos['computer-embroidery-machine'] : null) ||
              (service.id === 'bridal-blouse-designs' ? customPhotos['bridal-showcase'] : null) ||
              (service.id === 'custom-designs' ? customPhotos['shop-interior'] : null) ||
              (service.id === 'boutique-designs' ? customPhotos['children-designer-dress'] : null);

            // Dynamically appends section title & specific service name
            const whatsappEnquiryUrl = buildWhatsAppUrl('Our Specialities', service.title);

            return (
              <div
                key={service.id}
                className="group flex flex-col bg-[#1A0409] border border-[#D4AF37]/25 hover:border-[#DFBE68]/70 rounded-sm overflow-hidden transition-all duration-300 hover:shadow-xl hover:shadow-[#3B0711]/40"
              >
                {/* Visual card header using the uploaded boutique photo slot */}
                <div className="relative aspect-[16/10] w-full overflow-hidden bg-[#24050D]">
                  <BoutiqueArtwork
                    svgType={service.svgType}
                    customImage={customImg}
                    alt={service.title}
                  />
                  {/* Service Number Watermark / Editorial index */}
                  <div className="absolute top-3 right-3 px-2 py-0.5 bg-[#170307]/80 backdrop-blur-sm border border-[#D4AF37]/30 text-[11px] font-mono text-[#DFBE68]">
                    0{index + 1}
                  </div>
                </div>

                {/* Card Content */}
                <div className="p-6 flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="font-serif text-xl sm:text-2xl font-bold text-[#F9F6F0] group-hover:text-[#F3E5AB] transition-colors mb-2.5">
                      {service.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-[#D4C3B2] leading-relaxed mb-4">
                      "{service.description}"
                    </p>

                    {/* Features list */}
                    <ul className="space-y-1.5 mb-6 text-xs text-[#E5D7C5]/90 border-t border-[#3A0A14] pt-3">
                      {service.details.map((detail, idx) => (
                        <li key={idx} className="flex items-center gap-2">
                          <Check className="w-3 h-3 text-[#DFBE68] flex-shrink-0" />
                          <span>{detail}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Card Actions */}
                  <div className="pt-2 flex items-center justify-between border-t border-[#3A0A14]">
                    <button
                      onClick={() => onSelectService(service.title)}
                      className="text-xs font-semibold uppercase tracking-wider text-[#DFBE68] hover:text-[#F9F6F0] transition-colors cursor-pointer"
                    >
                      Enquire Custom Fit
                    </button>
                    <a
                      href={whatsappEnquiryUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-xs text-[#25D366] hover:text-[#4ade80] transition-colors"
                      title={`Enquire about ${service.title} on WhatsApp`}
                    >
                      <MessageCircle className="w-3.5 h-3.5" />
                      <span>WhatsApp</span>
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
