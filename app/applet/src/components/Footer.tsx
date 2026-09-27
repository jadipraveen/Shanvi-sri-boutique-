import React from 'react';
import { Phone, MessageCircle, MapPin, Sparkles } from 'lucide-react';
import { buildWhatsAppUrl } from '../utils/whatsapp';

export const Footer: React.FC = () => {
  const whatsappUrl = buildWhatsAppUrl('Footer & Boutique Information');
  const mapsUrl = 'https://www.google.com/maps/search/?api=1&query=Shanvi+Sri+Boutique+Mancherial+Near+Iqbal+Ahmed+Nagar';

  const footerLinks = [
    { label: 'Home', href: '#home' },
    { label: 'About', href: '#about' },
    { label: 'Services', href: '#services' },
    { label: 'Gallery', href: '#gallery' },
    { label: 'Contact', href: '#contact' },
  ];

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-[#0D0103] border-t border-[#D4AF37]/25 text-[#E5D7C5] pt-16 pb-24 lg:pb-16 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Footer Row */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          
          {/* Brand Info */}
          <div className="space-y-4 lg:col-span-1">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-full border border-[#D4AF37]/60 flex items-center justify-center bg-[#25040B] text-[#D4AF37]">
                <Sparkles className="w-4 h-4 text-[#DFBE68]" />
              </div>
              <span className="font-serif text-2xl font-bold text-[#F9F6F0]">
                Shanvi Sri Boutique
              </span>
            </div>

            <p className="text-xs font-serif text-[#DFBE68] tracking-wider italic">
              Designer Blouses • Maggam Work • Computer Embroidery
            </p>

            <p className="text-xs text-[#A89887] leading-relaxed">
              Ladies Boutique, Designer Blouse, Embroidery & Maggam Works in Mancherial, Telangana.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-serif text-sm font-bold uppercase tracking-widest text-[#DFBE68] mb-4">
              Quick Links
            </h4>
            <ul className="space-y-2 text-xs">
              {footerLinks.map((item) => (
                <li key={item.label}>
                  <a
                    href={item.href}
                    onClick={(e) => handleLinkClick(e, item.href)}
                    className="hover:text-[#F3E5AB] transition-colors"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact & Connect */}
          <div>
            <h4 className="font-serif text-sm font-bold uppercase tracking-widest text-[#DFBE68] mb-4">
              Connect With Us
            </h4>
            <ul className="space-y-3 text-xs">
              <li>
                <a
                  href="tel:+919676715780"
                  className="flex items-center gap-2 hover:text-[#F3E5AB] transition-colors"
                >
                  <Phone className="w-3.5 h-3.5 text-[#DFBE68]" />
                  <span>Call: +91 96767 15780</span>
                </a>
              </li>
              <li>
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-[#25D366] hover:text-[#4ade80] transition-colors"
                >
                  <MessageCircle className="w-3.5 h-3.5" />
                  <span>WhatsApp Enquiry</span>
                </a>
              </li>
              <li>
                <a
                  href={mapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 hover:text-[#F3E5AB] transition-colors"
                >
                  <MapPin className="w-3.5 h-3.5 text-[#DFBE68]" />
                  <span>Near Iqbal Ahmed Nagar & Vaibhav Shopping Mall, Mancherial</span>
                </a>
              </li>
            </ul>
          </div>

          {/* Local Mancherial SEO Context */}
          <div>
            <h4 className="font-serif text-sm font-bold uppercase tracking-widest text-[#DFBE68] mb-4">
              Mancherial Studio
            </h4>
            <p className="text-xs text-[#A89887] leading-relaxed mb-3">
              Serving patrons looking for boutique in Mancherial, designer blouse stitching, Maggam blouse designs, and computer embroidery work near Vaibhav Shopping Mall and Iqbal Ahmed Nagar.
            </p>
            <div className="text-[11px] text-[#DFBE68]/80 space-x-1">
              <span>Bridal Blouses</span> • <span>Maggam Works</span> • <span>Boutique Tailoring</span>
            </div>
          </div>

        </div>

        {/* Hairline Divider & Copyright */}
        <div className="pt-8 border-t border-[#2A060E] flex flex-col sm:flex-row items-center justify-between text-xs text-[#8C7A6D]">
          <p>© {new Date().getFullYear()} Shanvi Sri Beauty Clinic & Boutique. All rights reserved.</p>
          <p className="mt-2 sm:mt-0 font-serif italic text-[#A89887]">
            Where Tradition Meets Elegant Craftsmanship
          </p>
        </div>

      </div>
    </footer>
  );
};
