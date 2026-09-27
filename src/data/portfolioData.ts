export interface PortfolioItem {
  id: string;
  number: number;
  title: string;
  category: 'Blouse Designs' | 'Maggam Work' | 'Embroidery' | 'Designer Collections' | 'Our Work';
  subtitle: string;
  description: string;
  tags: string[];
  fabricType: string;
  craftType: string;
  dominantColor: string;
  accentColor: string;
  svgType: string;
}

export const INITIAL_PORTFOLIO_ITEMS: PortfolioItem[] = [
  {
    id: 'bridal-showcase',
    number: 10,
    title: 'Bridal Blouse Showcase',
    category: 'Blouse Designs',
    subtitle: 'Grand Bridal Masterpiece with Intricate Zardozi & Kundan Work',
    description: 'Heavily embellished bridal blouse crafted in deep maroon wine silk fabric, decorated with authentic Maggam craftsmanship, antique gold zardozi vines, pearl drops, and handset stones.',
    tags: ['Bridal Blouse', 'Maggam Work', 'Deep Wine / Maroon', 'Zardozi'],
    fabricType: 'Raw Silk & Velvet',
    craftType: 'Bridal Maggam & Zardozi',
    dominantColor: '#3A0810',
    accentColor: '#D4AF37',
    svgType: 'bridal-masterpiece'
  },
  {
    id: 'shop-interior',
    number: 1,
    title: 'Boutique Studio & Material Display',
    category: 'Our Work',
    subtitle: 'Shanvi Sri Boutique Interior in Mancherial',
    description: 'Our welcoming boutique interior in Mancherial showcasing fine Banarasi, Kanchi, and raw silk blouse materials, designer borders, and custom client tailoring displays.',
    tags: ['Boutique Interior', 'Mancherial Studio', 'Silk Materials'],
    fabricType: 'Pure Silk & Designer Fabrics',
    craftType: 'Boutique Atelier',
    dominantColor: '#2B040B',
    accentColor: '#DFBE68',
    svgType: 'shop-interior'
  },
  {
    id: 'maggam-sleeves',
    number: 5,
    title: 'Maggam & Embroidered Sleeves Collection',
    category: 'Maggam Work',
    subtitle: 'Curated Sleeve Cuffs with Peacock & Paisley Stone Work',
    description: 'Showcasing a rich variety of hand-stitched and machine-detailed Maggam blouse sleeves featuring peacock motifs, antique coins, bead clusters, and fine cutwork.',
    tags: ['Maggam Work', 'Sleeve Border', 'Stone Detailing', 'Peacock Motifs'],
    fabricType: 'Tussar & Raw Silk',
    craftType: 'Intricate Maggam Handcraft',
    dominantColor: '#1F050B',
    accentColor: '#D4AF37',
    svgType: 'maggam-sleeves'
  },
  {
    id: 'computer-embroidery-machine',
    number: 4,
    title: 'Computer Embroidery Machine Studio',
    category: 'Embroidery',
    subtitle: 'Multi-Needle Precision Technology & Colorful Thread Spools',
    description: 'Our in-house computer embroidery setup creating clean, symmetric, and detailed thread patterns with precision tension and vibrant color coordination.',
    tags: ['Computer Embroidery', 'Embroidery Studio', 'Thread Work'],
    fabricType: 'Multi-fabric Compatible',
    craftType: 'Computerized Embroidery',
    dominantColor: '#180307',
    accentColor: '#DFBE68',
    svgType: 'embroidery-machine'
  },
  {
    id: 'pink-designer-blouse',
    number: 6,
    title: 'Pink Designer Blouse Embroidery',
    category: 'Blouse Designs',
    subtitle: 'Lotus Motif Border & Pearl Embellishments',
    description: 'Festive rani and baby pink designer blouse featuring delicate thread embroidery, blooming lotus floral vines, and luminous pearl drops along the neckline.',
    tags: ['Pink Blouse', 'Lotus Embroidery', 'Pearl Work', 'Festive'],
    fabricType: 'Mulberry Silk',
    craftType: 'Computer Thread Embroidery & Beads',
    dominantColor: '#5C0E28',
    accentColor: '#F3E5AB',
    svgType: 'pink-blouse'
  },
  {
    id: 'blue-designer-blouse',
    number: 7,
    title: 'Royal Blue Saree Blouse Work',
    category: 'Blouse Designs',
    subtitle: 'Royal Blue with Elaborate Gold Zari Cutwork',
    description: 'Stunning royal blue festive saree blouse decorated with contrast gold zari jaal embroidery, temple border neckline, and intricate latkan tassels.',
    tags: ['Royal Blue', 'Gold Zari', 'Cutwork', 'Saree Blouse'],
    fabricType: 'Kanchipuram Silk Brocade',
    craftType: 'Gold Zari & Maggam Detailing',
    dominantColor: '#0A1838',
    accentColor: '#D4AF37',
    svgType: 'blue-blouse'
  },
  {
    id: 'red-embroidered-blouse',
    number: 8,
    title: 'Red Embroidered Blouse',
    category: 'Maggam Work',
    subtitle: 'Traditional Crimson Red with Intricate Golden Embroidery',
    description: 'Classic auspicious crimson red bridal blouse featuring temple arch back-neck design, dense stone work, and traditional South Indian wedding motifs.',
    tags: ['Crimson Red', 'Bridal Blouse', 'Temple Motif', 'Maggam'],
    fabricType: 'Crimson Raw Silk',
    craftType: 'Traditional Maggam Work',
    dominantColor: '#4A0812',
    accentColor: '#D4AF37',
    svgType: 'red-blouse'
  },
  {
    id: 'maroon-gold-blouse',
    number: 9,
    title: 'Maroon & Gold Designer Blouse',
    category: 'Designer Collections',
    subtitle: 'Deep Maroon with Antique Gold Zardozi Back Design',
    description: 'Sophisticated deep maroon blouse featuring circular mandala back neck embroidery, antique dull-gold French knots, and potli button detailing.',
    tags: ['Maroon & Gold', 'Mandala Back', 'Zardozi Work'],
    fabricType: 'Velvet & Silk Blend',
    craftType: 'Zardozi & Cutdana Work',
    dominantColor: '#380610',
    accentColor: '#DFBE68',
    svgType: 'maroon-gold-blouse'
  },
  {
    id: 'children-designer-dress',
    number: 2,
    title: "Designer Children's Dress",
    category: 'Designer Collections',
    subtitle: 'Custom Festive Pattu Pavada & Lehenga for Girls',
    description: 'Custom handcrafted festive kids wear and pattu pavada blouse with comfortable soft lining, gentle embroidery accents, and traditional golden borders.',
    tags: ['Kids Designer Wear', 'Pattu Pavada', 'Custom Tailoring'],
    fabricType: 'South Silk & Brocade',
    craftType: 'Custom Boutique Stitching',
    dominantColor: '#30081C',
    accentColor: '#F3E5AB',
    svgType: 'kids-dress'
  },
  {
    id: 'designer-embroidered-blouse',
    number: 3,
    title: 'Designer Embroidered Blouse',
    category: 'Our Work',
    subtitle: 'Contemporary Back-Neck Embroidery & Cutwork',
    description: 'Modern silhouette designer blouse combining symmetrical computer embroidery, sheer net inserts, and artistic neckline finish for cocktail and reception sarees.',
    tags: ['Designer Blouse', 'Cutwork', 'Contemporary', 'Custom Fit'],
    fabricType: 'Designer Silk',
    craftType: 'Precision Computer Embroidery',
    dominantColor: '#240610',
    accentColor: '#D4AF37',
    svgType: 'designer-embroidered-blouse'
  }
];

export const SERVICE_LIST = [
  {
    id: 'designer-blouse',
    title: 'Designer Blouse',
    description: 'Beautifully designed blouses with elegant embroidery and fashionable patterns.',
    details: ['Princess Cut & Sabyasachi Cuts', 'Contemporary & Traditional Necklines', 'Custom Latkans & Dori Backs'],
    svgType: 'designer-embroidered-blouse',
    color: '#3A0810'
  },
  {
    id: 'maggam-work',
    title: 'Maggam Work',
    description: 'Intricate traditional and contemporary Maggam work for special occasions.',
    details: ['Zardozi & Kundan Stones', 'Handcrafted Peacock & Floral Motifs', 'Rich Beaded Sleeve Cuffs'],
    svgType: 'maggam-sleeves',
    color: '#2B040B'
  },
  {
    id: 'computer-embroidery',
    title: 'Computer Embroidery',
    description: 'Detailed embroidery designs created with professional embroidery technology.',
    details: ['Symmetric Neckline Framing', 'High-Density Thread Embroidery', 'Vibrant Multi-Color Coordination'],
    svgType: 'embroidery-machine',
    color: '#1F050B'
  },
  {
    id: 'bridal-blouse-designs',
    title: 'Bridal Blouse Designs',
    description: 'Elegant bridal and festive blouse designs with rich embroidery details.',
    details: ['Muhurtham & Reception Blouses', 'Heavy Grand Backneck Work', 'Perfect Fit with Padded Lining'],
    svgType: 'bridal-masterpiece',
    color: '#4A0812'
  },
  {
    id: 'custom-designs',
    title: 'Custom Designs',
    description: 'Bring your design idea and create a customized blouse according to your preference.',
    details: ['Reference Photo Stitching', 'Fabric & Color Consultation', 'Individual Measurement Tailoring'],
    svgType: 'shop-interior',
    color: '#380610'
  },
  {
    id: 'boutique-designs',
    title: 'Boutique Designs',
    description: 'Beautiful boutique creations for women and special occasions.',
    details: ['Festive Kids Lehenga & Frocks', 'Designer Dupatta Borders', 'Special Occasion Ensembles'],
    svgType: 'kids-dress',
    color: '#30081C'
  }
];
