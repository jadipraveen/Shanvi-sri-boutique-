/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { INITIAL_PORTFOLIO_ITEMS, PortfolioItem } from './data/portfolioData';
import { getCustomPhotos } from './utils/photoStorage';
import { useActiveSection } from './hooks/useActiveSection';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { AboutSection } from './components/AboutSection';
import { ServicesSection } from './components/ServicesSection';
import { SignatureCollection } from './components/SignatureCollection';
import { MaggamSection } from './components/MaggamSection';
import { StudioSection } from './components/StudioSection';
import { FeaturedDesignSection } from './components/FeaturedDesignSection';
import { GallerySection } from './components/GallerySection';
import { WhyChooseUs } from './components/WhyChooseUs';
import { HowToOrder } from './components/HowToOrder';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';
import { MobileBottomNav } from './components/MobileBottomNav';
import { LightboxModal } from './components/LightboxModal';
import { PhotoManagerModal } from './components/PhotoManagerModal';

export default function App() {
  const [items] = useState<PortfolioItem[]>(INITIAL_PORTFOLIO_ITEMS);
  const [customPhotos, setCustomPhotos] = useState<Record<string, string>>({});
  const [lightboxItem, setLightboxItem] = useState<PortfolioItem | null>(null);
  const [photoManagerOpen, setPhotoManagerOpen] = useState(false);
  const [selectedService, setSelectedService] = useState<string>('Bridal Blouse Designs');

  // Track the active section the user is currently scrolling in
  const activeSectionTitle = useActiveSection();

  // Load photos on mount
  useEffect(() => {
    refreshPhotos();
  }, []);

  const refreshPhotos = () => {
    setCustomPhotos(getCustomPhotos());
  };

  const handleScrollTo = (selector: string) => {
    const el = document.querySelector(selector);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleSelectService = (serviceName: string) => {
    setSelectedService(serviceName);
    handleScrollTo('#contact');
  };

  const uploadedCount = Object.keys(customPhotos).length;

  return (
    <div className="min-h-screen bg-[#120306] text-[#F9F6F0] selection:bg-[#D4AF37]/30 selection:text-[#F3E5AB]">
      {/* Top Luxury Navigation */}
      <Navbar
        onOpenPhotoManager={() => setPhotoManagerOpen(true)}
        uploadedCount={uploadedCount}
        activeSectionTitle={activeSectionTitle}
      />

      <main>
        {/* Hero Section */}
        <HeroSection
          heroImage={customPhotos['bridal-showcase']}
          onExploreClick={() => handleScrollTo('#gallery')}
          onOpenPhotoManager={() => setPhotoManagerOpen(true)}
        />

        {/* About Section */}
        <AboutSection shopImage={customPhotos['shop-interior']} />

        {/* Specialities & Services Section */}
        <ServicesSection
          customPhotos={customPhotos}
          onSelectService={handleSelectService}
        />

        {/* Signature Collection (Horizontal Scrolling) */}
        <SignatureCollection
          items={items}
          customPhotos={customPhotos}
          onOpenLightbox={(item) => setLightboxItem(item)}
        />

        {/* Maggam Work Section */}
        <MaggamSection
          customPhotos={customPhotos}
          onEnquire={() => handleScrollTo('#contact')}
        />

        {/* Precision Embroidery Studio Section */}
        <StudioSection
          machineImage={customPhotos['computer-embroidery-machine']}
        />

        {/* Featured Design Split-Screen Showcase */}
        <FeaturedDesignSection
          bridalImage={customPhotos['bridal-showcase']}
          onViewGallery={() => handleScrollTo('#gallery')}
        />

        {/* Full Masonry Portfolio Gallery */}
        <GallerySection
          items={items}
          customPhotos={customPhotos}
          onOpenLightbox={(item) => setLightboxItem(item)}
          onOpenPhotoManager={() => setPhotoManagerOpen(true)}
        />

        {/* Why Choose Us */}
        <WhyChooseUs />

        {/* How To Order (3 Steps) */}
        <HowToOrder />

        {/* Contact & Map Section */}
        <ContactSection initialService={selectedService} />
      </main>

      {/* Luxury Footer */}
      <Footer />

      {/* Floating WhatsApp Action Button with dynamic active section title */}
      <FloatingWhatsApp activeSectionTitle={activeSectionTitle} />

      {/* Fixed Mobile Bottom Navigation with dynamic active section title */}
      <MobileBottomNav
        onNavClick={handleScrollTo}
        activeSectionTitle={activeSectionTitle}
      />

      {/* Lightbox Modal */}
      <LightboxModal
        item={lightboxItem}
        items={items}
        customPhotos={customPhotos}
        onClose={() => setLightboxItem(null)}
        onNavigate={(item) => setLightboxItem(item)}
      />

      {/* Boutique Owner Photo Upload / Customizer Modal */}
      <PhotoManagerModal
        isOpen={photoManagerOpen}
        onClose={() => setPhotoManagerOpen(false)}
        items={items}
        customPhotos={customPhotos}
        onPhotosUpdated={refreshPhotos}
      />
    </div>
  );
}
