export const PHONE_NUMBER = '919676715780';
export const BASE_WHATSAPP_MESSAGE =
  'Hi Shanvi Sri Boutique, I would like to know about your designer blouse and embroidery work.';

/**
 * Builds a WhatsApp chat URL dynamically appending the specific section title
 * where the user clicked or is currently viewing.
 *
 * @param sectionTitle - Title of the section (e.g. "Hero Section", "Our Specialities", "Intricate Maggam & Embroidery Work", etc.)
 * @param extraContext - Optional extra detail (e.g. design item name or custom inquiry)
 */
export function buildWhatsAppUrl(sectionTitle?: string, extraContext?: string): string {
  let message = BASE_WHATSAPP_MESSAGE;

  if (sectionTitle) {
    if (extraContext) {
      message += ` (Regarding: ${sectionTitle} - ${extraContext})`;
    } else {
      message += ` (Regarding: ${sectionTitle})`;
    }
  }

  return `https://wa.me/${PHONE_NUMBER}?text=${encodeURIComponent(message)}`;
}
