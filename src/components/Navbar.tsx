import React, { useState, useEffect } from 'react';
import { Phone, MessageCircle, Menu, X, Sparkles, Camera } from 'lucide-react';
import { buildWhatsAppUrl } from '../utils/whatsapp';

interface NavbarProps {
  onOpenPhotoManager: () => void;
  uploadedCount: number;
  activeSectionTitle?: string;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenPhotoManager, uploadedCount, activeSectionTitle }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Home', href: '#home' },
    { label: 'About', href: '#about' },
    { label: 'Specialities', href: '#services' },
    { label: 'Signature', href: '#signature' },
    { label: 'Maggam Work', href: '#maggam' },
    { label: 'Studio', href: '#studio' },
    { label: 'Gallery', href: '#gallery' },
    { label: 'Contact', href: '#contact' },
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const whatsappUrl = buildWhatsAppUrl(
    'Navigation Bar',
    activeSectionTitle ? `Current View: ${activeSectionTitle}` : undefined
  );

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#140306]/95 backdrop-blur-md border-b border-[#D4AF37]/25 shadow-xl py-3'
          : 'bg-gradient-to-b from-[#100204]/90 to-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo & Brand Name */}
          <a
            href="#home"
            onClick={(e) => handleNavClick(e, '#home')}
            className="flex items-center gap-3 group focus-visible:outline-none"
          >
            <div className="w-10 h-10 rounded-full border border-[#D4AF37]/60 flex items-center justify-center bg-[#28060D] text-[#D4AF37] group-hover:border-[#F3E5AB] transition-colors">
              <Sparkles className="w-5 h-5 text-[#DFBE68]" />
            </div>
            <div className="flex flex-col">
              <span className="font-serif text-xl sm:text-2xl font-bold tracking-wide text-[#F9F6F0] group-hover:text-[#F3E5AB] transition-colors">
                Shanvi Sri Boutique
              </span>
              <span className="text-[10px] sm:text-[11px] text-[#DFBE68]/90 tracking-widest uppercase">
                Beauty Clinic & Designer Studio
              </span>
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-7">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="text-xs tracking-wider uppercase text-[#E5D7C5] hover:text-[#DFBE68] transition-colors font-medium relative py-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[1.5px] after:bg-[#D4AF37] hover:after:w-full after:transition-all"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Header Action Buttons */}
          <div className="hidden sm:flex items-center gap-3">
            {/* Photo Manager Toggle Button */}
            <button
              onClick={onOpenPhotoManager}
              title="Upload or manage your real boutique photos"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs text-[#E5D7C5] hover:text-[#F3E5AB] bg-[#2A050D] hover:bg-[#3E0915] border border-[#D4AF37]/35 rounded-sm transition-colors cursor-pointer"
            >
              <Camera className="w-3.5 h-3.5 text-[#DFBE68]" />
              <span>Manage Photos</span>
              {uploadedCount > 0 && (
                <span className="ml-1 text-[10px] text-[#DFBE68] bg-[#4D0816] px-1.5 py-0.2 rounded-full">
                  {uploadedCount}
                </span>
              )}
            </button>

            {/* Call Button */}
            <a
              href="tel:+919676715780"
              className="p-2 text-[#DFBE68] hover:text-[#F9F6F0] hover:bg-[#340710] rounded-sm transition-colors"
              title="Call +91 96767 15780"
            >
              <Phone className="w-4 h-4" />
            </a>

            {/* WhatsApp CTA with dynamic section context */}
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-[#881337] via-[#9F1239] to-[#881337] hover:from-[#9F1239] hover:to-[#BE123C] text-[#FDFBF7] text-xs font-semibold tracking-wider uppercase rounded-sm border border-[#D4AF37]/50 shadow-md hover:shadow-[#D4AF37]/20 transition-all cursor-pointer"
            >
              <MessageCircle className="w-4 h-4 text-[#F3E5AB]" />
              <span>WhatsApp Us</span>
            </a>
          </div>

          {/* Mobile menu trigger */}
          <div className="flex sm:hidden items-center gap-2">
            <button
              onClick={onOpenPhotoManager}
              className="p-2 text-[#DFBE68] bg-[#26050C] border border-[#D4AF37]/30 rounded-sm"
              title="Manage Photos"
            >
              <Camera className="w-4 h-4" />
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-[#F9F6F0] hover:text-[#DFBE68] rounded-sm focus-visible:outline-none"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#180408] border-b border-[#D4AF37]/30 px-5 pt-3 pb-6 space-y-3 animate-in fade-in duration-200">
          <div className="grid grid-cols-2 gap-2 pt-2 pb-3 border-b border-[#3D0A14]">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="text-sm font-medium text-[#E5D7C5] hover:text-[#DFBE68] py-2 px-3 rounded hover:bg-[#28060D]"
              >
                {link.label}
              </a>
            ))}
          </div>

          <div className="flex flex-col gap-2 pt-2">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 w-full py-3 bg-[#881337] text-[#FDFBF7] text-sm font-semibold rounded-sm border border-[#D4AF37]/50"
            >
              <MessageCircle className="w-4 h-4 text-[#F3E5AB]" />
              <span>Chat on WhatsApp</span>
            </a>
            <a
              href="tel:+919676715780"
              className="flex items-center justify-center gap-2 w-full py-2.5 bg-[#25050C] text-[#DFBE68] text-sm font-medium rounded-sm border border-[#D4AF37]/30"
            >
              <Phone className="w-4 h-4" />
              <span>Call +91 96767 15780</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
