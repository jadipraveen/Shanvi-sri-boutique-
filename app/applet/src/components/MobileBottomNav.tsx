import React from 'react';
import { Home, Image as ImageIcon, MessageCircle, Phone } from 'lucide-react';
import { buildWhatsAppUrl } from '../utils/whatsapp';

interface MobileBottomNavProps {
  onNavClick: (href: string) => void;
  activeSectionTitle?: string;
}

export const MobileBottomNav: React.FC<MobileBottomNavProps> = ({ onNavClick, activeSectionTitle }) => {
  const whatsappUrl = buildWhatsAppUrl(activeSectionTitle || 'Mobile Navigation');

  return (
    <nav aria-label="Mobile navigation" className="sm:hidden fixed bottom-0 left-0 right-0 z-40 bg-[#120205]/95 backdrop-blur-md border-t border-[#D4AF37]/30 shadow-2xl">
      <div className="grid grid-cols-4 h-16">
        {/* Home */}
        <button
          onClick={() => onNavClick('#home')}
          className="flex flex-col items-center justify-center text-[#E5D7C5] hover:text-[#DFBE68] active:text-[#DFBE68] transition-colors"
        >
          <Home className="w-5 h-5 mb-0.5" />
          <span className="text-[10px] uppercase tracking-wider font-medium">Home</span>
        </button>

        {/* Gallery */}
        <button
          onClick={() => onNavClick('#gallery')}
          className="flex flex-col items-center justify-center text-[#E5D7C5] hover:text-[#DFBE68] active:text-[#DFBE68] transition-colors"
        >
          <ImageIcon className="w-5 h-5 mb-0.5" />
          <span className="text-[10px] uppercase tracking-wider font-medium">Gallery</span>
        </button>

        {/* WhatsApp with dynamic section */}
        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center justify-center text-[#25D366] hover:text-[#4ade80] transition-colors"
        >
          <MessageCircle className="w-5 h-5 mb-0.5" />
          <span className="text-[10px] uppercase tracking-wider font-medium">WhatsApp</span>
        </a>

        {/* Call */}
        <a
          href="tel:+919676715780"
          className="flex flex-col items-center justify-center text-[#DFBE68] hover:text-[#F3E5AB] transition-colors"
        >
          <Phone className="w-5 h-5 mb-0.5" />
          <span className="text-[10px] uppercase tracking-wider font-medium">Call</span>
        </a>
      </div>
    </nav>
  );
};
