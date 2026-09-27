import { useState, useEffect } from 'react';

export interface SectionMeta {
  id: string;
  title: string;
}

export const SECTIONS: SectionMeta[] = [
  { id: 'home', title: 'Shanvi Sri Boutique (Home)' },
  { id: 'about', title: 'Crafted With Creativity & Care (About Us)' },
  { id: 'services', title: 'Our Specialities (Services)' },
  { id: 'signature', title: 'Signature Designs' },
  { id: 'maggam', title: 'Intricate Maggam & Embroidery Work' },
  { id: 'studio', title: 'Precision Embroidery Studio' },
  { id: 'featured-design', title: 'Featured Bridal Showcase' },
  { id: 'gallery', title: 'Gallery - Our Work & Creations' },
  { id: 'why-choose-us', title: 'Why Choose Shanvi Sri Boutique' },
  { id: 'how-to-order', title: 'How To Order' },
  { id: 'contact', title: "Let's Create Something Beautiful (Contact)" }
];

export function useActiveSection(): string {
  const [activeSectionTitle, setActiveSectionTitle] = useState<string>(SECTIONS[0].title);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 250; // offset for navbar and viewport height

      for (let i = SECTIONS.length - 1; i >= 0; i--) {
        const el = document.getElementById(SECTIONS[i].id);
        if (el) {
          const top = el.offsetTop;
          if (scrollPosition >= top) {
            setActiveSectionTitle(SECTIONS[i].title);
            return;
          }
        }
      }
      setActiveSectionTitle(SECTIONS[0].title);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return activeSectionTitle;
}
