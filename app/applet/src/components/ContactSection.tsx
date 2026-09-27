import React, { useState } from 'react';
import { Phone, MessageCircle, MapPin, Clock, Send, Sparkles, Navigation } from 'lucide-react';
import { buildWhatsAppUrl, PHONE_NUMBER } from '../utils/whatsapp';

interface ContactSectionProps {
  initialService?: string;
}

export const ContactSection: React.FC<ContactSectionProps> = ({ initialService = '' }) => {
  const [customerName, setCustomerName] = useState('');
  const [blouseType, setBlouseType] = useState(initialService || 'Bridal Blouse Designs');
  const [occasion, setOccasion] = useState('Wedding / Reception');
  const [userNotes, setUserNotes] = useState('');

  const phoneNumberFormatted = '+91 96767 15780';
  
  // Dynamically appended section title for contact section quick button
  const whatsappUrl = buildWhatsAppUrl("Let's Create Something Beautiful (Contact Section)");
  const mapsUrl = 'https://www.google.com/maps/search/?api=1&query=Shanvi+Sri+Boutique+Mancherial+Near+Iqbal+Ahmed+Nagar';

  const handleCustomFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const formattedMessage = `Hi Shanvi Sri Boutique,
I would like to enquire about custom stitching & embroidery:
• Name: ${customerName || 'Guest'}
• Service/Blouse Type: ${blouseType}
• Occasion: ${occasion}
${userNotes ? `• Notes/Style: ${userNotes}` : ''}
[Section: Custom Enquiry Form]

Please let me know consultation availability. Thank you!`;

    const customWhatsAppUrl = `https://wa.me/${PHONE_NUMBER}?text=${encodeURIComponent(formattedMessage)}`;
    window.open(customWhatsAppUrl, '_blank', 'noopener,noreferrer');
  };

  return (
    <section id="contact" className="py-24 bg-[#140306] relative border-b border-[#D4AF37]/15">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs uppercase tracking-widest text-[#DFBE68] font-semibold">
            Get In Touch
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-[#F9F6F0] mt-2 mb-4">
            Let's Create Something Beautiful
          </h2>
          <p className="text-xs sm:text-sm text-[#D4C3B2] max-w-xl mx-auto font-light">
            Visit our boutique atelier in Mancherial, call us directly, or send us a WhatsApp message to discuss your designer blouse and embroidery vision.
          </p>
          <div className="w-16 h-[2px] bg-[#D4AF37] mx-auto mt-6" />
        </div>

        {/* 3 Quick Action Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-4 mb-16 max-w-2xl mx-auto">
          {/* Call Now Button */}
          <a
            href="tel:+919676715780"
            className="flex-1 min-w-[160px] inline-flex items-center justify-center gap-2.5 px-6 py-4 bg-[#23050C] hover:bg-[#340812] text-[#F9F6F0] text-xs font-bold uppercase tracking-wider rounded-sm border border-[#D4AF37]/40 hover:border-[#DFBE68] transition-colors"
          >
            <Phone className="w-4 h-4 text-[#DFBE68]" />
            <span>Call Now</span>
          </a>

          {/* WhatsApp Button with dynamic section title */}
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 min-w-[160px] inline-flex items-center justify-center gap-2.5 px-6 py-4 bg-gradient-to-r from-[#881337] to-[#9F1239] hover:from-[#9F1239] hover:to-[#BE123C] text-[#FDFBF7] text-xs font-bold uppercase tracking-wider rounded-sm border border-[#D4AF37]/50 transition-colors shadow-lg shadow-[#881337]/20"
          >
            <MessageCircle className="w-4 h-4 text-[#25D366]" />
            <span>WhatsApp</span>
          </a>

          {/* Get Directions Button */}
          <a
            href={mapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 min-w-[160px] inline-flex items-center justify-center gap-2.5 px-6 py-4 bg-[#23050C] hover:bg-[#340812] text-[#F9F6F0] text-xs font-bold uppercase tracking-wider rounded-sm border border-[#D4AF37]/40 hover:border-[#DFBE68] transition-colors"
          >
            <Navigation className="w-4 h-4 text-[#DFBE68]" />
            <span>Get Directions</span>
          </a>
        </div>

        {/* 2-Column Content: Store Details & Google Map / Custom WhatsApp Form */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Boutique Information & Google Maps Section */}
          <div className="lg:col-span-6 space-y-6">
            <div className="p-8 bg-[#1B0409] border border-[#D4AF37]/30 rounded-sm">
              <h3 className="font-serif text-2xl font-bold text-[#F9F6F0] mb-6">
                Shanvi Sri Beauty Clinic & Boutique
              </h3>

              <div className="space-y-5 text-sm text-[#D4C3B2]">
                {/* Phone */}
                <div className="flex items-start gap-3.5">
                  <div className="w-8 h-8 rounded-full bg-[#30060E] border border-[#D4AF37]/40 flex items-center justify-center text-[#DFBE68] flex-shrink-0 mt-0.5">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-xs uppercase tracking-wider text-[#DFBE68] block font-semibold">Phone / WhatsApp</span>
                    <a href="tel:+919676715780" className="text-base text-[#F9F6F0] hover:text-[#DFBE68] font-medium transition-colors">
                      {phoneNumberFormatted}
                    </a>
                  </div>
                </div>

                {/* Location */}
                <div className="flex items-start gap-3.5">
                  <div className="w-8 h-8 rounded-full bg-[#30060E] border border-[#D4AF37]/40 flex items-center justify-center text-[#DFBE68] flex-shrink-0 mt-0.5">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-xs uppercase tracking-wider text-[#DFBE68] block font-semibold">Boutique Address</span>
                    <p className="text-sm text-[#F9F6F0]">
                      Near Iqbal Ahmed Nagar, Near Vaibhav Shopping Mall
                    </p>
                    <p className="text-xs text-[#C5B7A5] mt-0.5">
                      Mancherial, Telangana, India
                    </p>
                  </div>
                </div>

                {/* Timings */}
                <div className="flex items-start gap-3.5">
                  <div className="w-8 h-8 rounded-full bg-[#30060E] border border-[#D4AF37]/40 flex items-center justify-center text-[#DFBE68] flex-shrink-0 mt-0.5">
                    <Clock className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-xs uppercase tracking-wider text-[#DFBE68] block font-semibold">Boutique Timings</span>
                    <p className="text-sm text-[#F9F6F0]">
                      Monday – Sunday: 10:00 AM – 8:30 PM
                    </p>
                    <p className="text-xs text-[#C5B7A5] mt-0.5">
                      Open all days for bridal fittings & consultations
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Google Maps Location Section */}
            <div className="p-4 bg-[#1B0409] border border-[#D4AF37]/30 rounded-sm">
              <div className="flex items-center justify-between mb-3 px-2">
                <span className="text-xs uppercase font-semibold text-[#DFBE68] tracking-wider flex items-center gap-1.5">
                  <MapPin className="w-3.5 h-3.5" />
                  <span>Mancherial Studio Location</span>
                </span>
                <a
                  href={mapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs text-[#DFBE68] hover:text-[#F3E5AB] font-medium underline flex items-center gap-1"
                >
                  <span>Open in Google Maps</span>
                  <span>↗</span>
                </a>
              </div>

              {/* Embedded Google Maps View for Mancherial location */}
              <div className="w-full h-56 rounded-sm overflow-hidden border border-[#D4AF37]/20 relative bg-[#170307]">
                <iframe
                  title="Shanvi Sri Boutique Mancherial Google Maps Location"
                  src="https://maps.google.com/maps?q=Mancherial,Telangana,India&t=&z=14&ie=UTF8&iwloc=&output=embed"
                  width="100%"
                  height="100%"
                  style={{ border: 0, filter: 'invert(90%) hue-rotate(180deg) brightness(85%) contrast(120%)' }}
                  loading="lazy"
                  referrerPolicy="no-referrer"
                  allowFullScreen
                />
              </div>
            </div>

          </div>

          {/* Right Column: Instant WhatsApp Design Enquiry Form */}
          <div className="lg:col-span-6">
            <div className="p-8 bg-[#1C050C] border border-[#D4AF37]/30 rounded-sm shadow-xl">
              <div className="flex items-center gap-2 mb-2 text-[#DFBE68]">
                <Sparkles className="w-4 h-4" />
                <span className="text-xs uppercase tracking-widest font-semibold">Direct Consultation</span>
              </div>
              <h3 className="font-serif text-2xl font-bold text-[#F9F6F0] mb-2">
                Send Your Blouse Requirements
              </h3>
              <p className="text-xs text-[#D4C3B2] mb-6">
                Fill this quick note and click to open a pre-formatted message directly in WhatsApp with our master designer.
              </p>

              <form onSubmit={handleCustomFormSubmit} className="space-y-4">
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-[#DFBE68] mb-1.5">
                    Your Name
                  </label>
                  <input
                    type="text"
                    value={customerName}
                    onChange={(e) => setCustomerName(e.target.value)}
                    placeholder="e.g. Sravanthi / Anitha"
                    className="w-full px-4 py-2.5 bg-[#120205] border border-[#D4AF37]/30 rounded-sm text-sm text-[#F9F6F0] placeholder-[#736254] focus:outline-none focus:border-[#DFBE68] transition-colors"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-[#DFBE68] mb-1.5">
                      Work / Design Type
                    </label>
                    <select
                      value={blouseType}
                      onChange={(e) => setBlouseType(e.target.value)}
                      className="w-full px-4 py-2.5 bg-[#120205] border border-[#D4AF37]/30 rounded-sm text-sm text-[#F9F6F0] focus:outline-none focus:border-[#DFBE68] transition-colors"
                    >
                      <option value="Bridal Blouse Designs">Bridal Blouse Designs</option>
                      <option value="Maggam Work">Maggam Work</option>
                      <option value="Computer Embroidery">Computer Embroidery</option>
                      <option value="Designer Blouse">Designer Blouse Stitching</option>
                      <option value="Custom Designs">Custom Saree Blouse</option>
                      <option value="Children's Designer Dress">Children's Designer Dress</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-[#DFBE68] mb-1.5">
                      Occasion
                    </label>
                    <select
                      value={occasion}
                      onChange={(e) => setOccasion(e.target.value)}
                      className="w-full px-4 py-2.5 bg-[#120205] border border-[#D4AF37]/30 rounded-sm text-sm text-[#F9F6F0] focus:outline-none focus:border-[#DFBE68] transition-colors"
                    >
                      <option value="Wedding / Reception">Wedding / Reception</option>
                      <option value="Festive / Pooja">Festive / Pooja</option>
                      <option value="Engagement / Sangeet">Engagement / Sangeet</option>
                      <option value="Special Party / Family Event">Special Party / Event</option>
                      <option value="General Custom Stitching">General Custom Stitching</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-[#DFBE68] mb-1.5">
                    Design Preference / Custom Notes
                  </label>
                  <textarea
                    rows={3}
                    value={userNotes}
                    onChange={(e) => setUserNotes(e.target.value)}
                    placeholder="e.g. Saree is royal blue with gold border; need peacock sleeve Maggam work and deep back neck with dori..."
                    className="w-full px-4 py-2.5 bg-[#120205] border border-[#D4AF37]/30 rounded-sm text-sm text-[#F9F6F0] placeholder-[#736254] focus:outline-none focus:border-[#DFBE68] transition-colors resize-none"
                  />
                </div>

                <div className="pt-2">
                  <button
                    type="submit"
                    className="w-full inline-flex items-center justify-center gap-2.5 px-6 py-3.5 bg-gradient-to-r from-[#DFBE68] via-[#F3E5AB] to-[#D4AF37] hover:from-[#F3E5AB] hover:to-[#DFBE68] text-[#240409] font-bold text-xs uppercase tracking-widest rounded-sm shadow-xl shadow-[#D4AF37]/15 transition-all cursor-pointer"
                  >
                    <Send className="w-4 h-4 text-[#240409]" />
                    <span>Send Message on WhatsApp</span>
                  </button>
                </div>
              </form>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
