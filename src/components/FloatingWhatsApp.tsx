import React from 'react';
import { MessageCircle } from 'lucide-react';
import { buildWhatsAppUrl } from '../utils/whatsapp';

interface FloatingWhatsAppProps {
  activeSectionTitle?: string;
}

export const FloatingWhatsApp: React.FC<FloatingWhatsAppProps> = ({ activeSectionTitle }) => {
  const whatsappUrl = buildWhatsAppUrl(activeSectionTitle || 'Floating Quick Chat');

  return (
    <aside aria-label="WhatsApp quick chat" className="fixed bottom-20 sm:bottom-6 right-6 z-40">
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat with Shanvi Sri Boutique on WhatsApp"
        className="group relative flex items-center justify-center w-14 h-14 bg-gradient-to-tr from-[#1EBE5D] to-[#25D366] text-white rounded-full shadow-2xl hover:scale-110 active:scale-95 transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#DFBE68]"
      >
        {/* Pulsing ring aura */}
        <span className="absolute -inset-1 rounded-full bg-[#25D366]/30 animate-ping pointer-events-none" />
        <span className="absolute inset-0 rounded-full border-2 border-[#F3E5AB]/40 pointer-events-none" />

        <MessageCircle className="w-7 h-7 text-white fill-white" />

        {/* Desktop Tooltip displaying the dynamically appended section */}
        <span className="absolute right-16 top-1/2 -translate-y-1/2 px-3 py-1.5 bg-[#140205] text-[#F9F6F0] text-xs font-semibold rounded shadow-xl border border-[#D4AF37]/40 whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none hidden sm:flex flex-col items-end">
          <span>Chat on WhatsApp</span>
          {activeSectionTitle && (
            <span className="text-[10px] text-[#DFBE68] font-normal truncate max-w-[180px]">
              re: {activeSectionTitle}
            </span>
          )}
        </span>
      </a>
    </aside>
  );
};
