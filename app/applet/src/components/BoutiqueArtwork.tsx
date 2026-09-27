import React from 'react';

interface BoutiqueArtworkProps {
  svgType: string;
  customImage?: string | null;
  className?: string;
  alt?: string;
  priority?: boolean;
}

export const BoutiqueArtwork: React.FC<BoutiqueArtworkProps> = ({
  svgType,
  customImage,
  className = '',
  alt = 'Shanvi Sri Boutique Design'
}) => {
  if (customImage) {
    return (
      <div className={`relative w-full h-full overflow-hidden bg-[#180307] ${className}`}>
        <img
          src={customImage}
          alt={alt}
          referrerPolicy="no-referrer"
          className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent pointer-events-none" />
      </div>
    );
  }

  // High-fidelity handcrafted bespoke SVG visuals for each specific boutique piece
  return (
    <div className={`relative w-full h-full overflow-hidden bg-[#150306] select-none ${className}`}>
      {/* Background silk weave texture */}
      <svg
        className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
        viewBox="0 0 800 600"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="xMidYMid slice"
      >
        <defs>
          {/* Gold foil metallic gradient */}
          <linearGradient id="goldMetallic" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#DFBE68" />
            <stop offset="25%" stopColor="#F9EBB2" />
            <stop offset="50%" stopColor="#B8860B" />
            <stop offset="75%" stopColor="#F5E08C" />
            <stop offset="100%" stopColor="#8A6715" />
          </linearGradient>

          {/* Deep wine silk gradient */}
          <linearGradient id="deepWineSilk" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#4A0814" />
            <stop offset="40%" stopColor="#30040C" />
            <stop offset="100%" stopColor="#190105" />
          </linearGradient>

          {/* Royal blue silk gradient */}
          <linearGradient id="royalBlueSilk" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#0B1C47" />
            <stop offset="50%" stopColor="#071333" />
            <stop offset="100%" stopColor="#03081A" />
          </linearGradient>

          {/* Lotus pink silk gradient */}
          <linearGradient id="lotusPinkSilk" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#6E1236" />
            <stop offset="50%" stopColor="#4A0B23" />
            <stop offset="100%" stopColor="#290513" />
          </linearGradient>

          {/* Rich crimson red gradient */}
          <linearGradient id="crimsonRedSilk" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#5E0814" />
            <stop offset="50%" stopColor="#3D040C" />
            <stop offset="100%" stopColor="#1F0105" />
          </linearGradient>

          {/* Dark studio boutique interior gradient */}
          <linearGradient id="atelierGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#2D060F" />
            <stop offset="50%" stopColor="#1A0207" />
            <stop offset="100%" stopColor="#0D0103" />
          </linearGradient>

          {/* Subtle floral pattern overlay */}
          <pattern id="zariWeave" width="20" height="20" patternUnits="userSpaceOnUse">
            <path d="M 0 10 L 10 0 L 20 10 L 10 20 Z" fill="none" stroke="rgba(212, 175, 55, 0.08)" strokeWidth="0.8" />
          </pattern>
        </defs>

        {/* 1. BRIDAL MASTERPIECE BLOUSE */}
        {svgType === 'bridal-masterpiece' && (
          <g>
            <rect width="800" height="600" fill="url(#deepWineSilk)" />
            <rect width="800" height="600" fill="url(#zariWeave)" />
            
            {/* Blouse outline silhouette */}
            <path
              d="M 220 140 C 270 200, 340 240, 400 240 C 460 240, 530 200, 580 140 L 640 260 C 600 300, 580 340, 580 490 L 220 490 C 220 340, 200 300, 160 260 Z"
              fill="#3A0810"
              stroke="#D4AF37"
              strokeWidth="2"
            />
            
            {/* Deep back neckline cutout with grand temple curve */}
            <path
              d="M 290 140 C 330 320, 470 320, 510 140 C 460 170, 340 170, 290 140 Z"
              fill="#220409"
              stroke="url(#goldMetallic)"
              strokeWidth="4"
            />

            {/* Intricate Maggam Zardozi border along neckline */}
            <path
              d="M 285 140 C 325 330, 475 330, 515 140"
              fill="none"
              stroke="url(#goldMetallic)"
              strokeWidth="8"
              strokeDasharray="2 4"
            />
            <path
              d="M 275 140 C 320 350, 480 350, 525 140"
              fill="none"
              stroke="#F3E5AB"
              strokeWidth="2"
              strokeDasharray="6 3"
            />

            {/* Central bridal medallion / Kundan peacock motif */}
            <g transform="translate(400, 370)">
              <circle r="46" fill="#470B16" stroke="url(#goldMetallic)" strokeWidth="3" />
              <circle r="36" fill="none" stroke="#DFBE68" strokeWidth="2" strokeDasharray="3 3" />
              <circle r="24" fill="#671020" stroke="url(#goldMetallic)" strokeWidth="2" />
              <circle r="12" fill="#DFBE68" />
              <circle r="6" fill="#470B16" />
              {/* Petal accents */}
              {[0, 45, 90, 135, 180, 225, 270, 315].map((angle, i) => (
                <circle
                  key={i}
                  cx={36 * Math.cos((angle * Math.PI) / 180)}
                  cy={36 * Math.sin((angle * Math.PI) / 180)}
                  r="4"
                  fill="#FDFBF7"
                  stroke="#D4AF37"
                  strokeWidth="1.5"
                />
              ))}
            </g>

            {/* Hanging pearl latkans / dori tassels */}
            <path d="M 330 140 Q 370 200 385 280" fill="none" stroke="url(#goldMetallic)" strokeWidth="2" />
            <path d="M 470 140 Q 430 200 415 280" fill="none" stroke="url(#goldMetallic)" strokeWidth="2" />
            <circle cx="400" cy="285" r="7" fill="#D4AF37" />
            <circle cx="400" cy="305" r="5" fill="#F9F6F0" />
            <circle cx="395" cy="320" r="4" fill="#DFBE68" />
            <circle cx="405" cy="320" r="4" fill="#DFBE68" />

            {/* Rich waist border with traditional motifs */}
            <rect x="220" y="450" width="360" height="40" fill="#28050C" stroke="url(#goldMetallic)" strokeWidth="2" />
            <line x1="220" y1="465" x2="580" y2="465" stroke="#D4AF37" strokeWidth="1.5" strokeDasharray="4 4" />
            <line x1="220" y1="475" x2="580" y2="475" stroke="#F3E5AB" strokeWidth="1" />
            {Array.from({ length: 14 }).map((_, i) => (
              <circle key={i} cx={235 + i * 25} cy="470" r="3.5" fill="#DFBE68" stroke="#FDFBF7" strokeWidth="0.8" />
            ))}
          </g>
        )}

        {/* 2. SHOP INTERIOR & DISPLAYED MATERIALS */}
        {svgType === 'shop-interior' && (
          <g>
            <rect width="800" height="600" fill="url(#atelierGradient)" />
            {/* Chandelier lights */}
            <g transform="translate(400, 60)">
              <line x1="0" y1="-60" x2="0" y2="40" stroke="#DFBE68" strokeWidth="3" />
              <path d="M -80 40 Q 0 80 80 40" fill="none" stroke="url(#goldMetallic)" strokeWidth="3" />
              <path d="M -50 40 Q 0 100 50 40" fill="none" stroke="#DFBE68" strokeWidth="2" />
              <circle cx="-80" cy="40" r="7" fill="#FFF2B2" filter="drop-shadow(0 0 8px #F3E5AB)" />
              <circle cx="-40" cy="55" r="6" fill="#FFF2B2" filter="drop-shadow(0 0 8px #F3E5AB)" />
              <circle cx="0" cy="62" r="8" fill="#FFF9D6" filter="drop-shadow(0 0 10px #F3E5AB)" />
              <circle cx="40" cy="55" r="6" fill="#FFF2B2" filter="drop-shadow(0 0 8px #F3E5AB)" />
              <circle cx="80" cy="40" r="7" fill="#FFF2B2" filter="drop-shadow(0 0 8px #F3E5AB)" />
            </g>

            {/* Display wooden shelving with rolls of colourful raw silk & brocade */}
            <rect x="70" y="160" width="340" height="380" rx="8" fill="#1C060A" stroke="#5C1625" strokeWidth="2" />
            {/* Shelf dividers */}
            <line x1="70" y1="260" x2="410" y2="260" stroke="#DFBE68" strokeWidth="2" />
            <line x1="70" y1="360" x2="410" y2="360" stroke="#DFBE68" strokeWidth="2" />
            <line x1="70" y1="460" x2="410" y2="460" stroke="#DFBE68" strokeWidth="2" />

            {/* Silk Rolls on Shelf 1 */}
            <rect x="90" y="180" width="40" height="70" rx="4" fill="#991B1B" />
            <rect x="140" y="180" width="40" height="70" rx="4" fill="#1E3A8A" />
            <rect x="190" y="180" width="40" height="70" rx="4" fill="#831843" />
            <rect x="240" y="180" width="40" height="70" rx="4" fill="#065F46" />
            <rect x="290" y="180" width="40" height="70" rx="4" fill="#92400E" />
            <rect x="340" y="180" width="40" height="70" rx="4" fill="#701A75" />

            {/* Silk Rolls on Shelf 2 */}
            <rect x="90" y="280" width="40" height="70" rx="4" fill="#78350F" />
            <rect x="140" y="280" width="40" height="70" rx="4" fill="#881337" />
            <rect x="190" y="280" width="40" height="70" rx="4" fill="#1E40AF" />
            <rect x="240" y="280" width="40" height="70" rx="4" fill="#D97706" />
            <rect x="290" y="280" width="40" height="70" rx="4" fill="#9F1239" />
            <rect x="340" y="280" width="40" height="70" rx="4" fill="#047857" />

            {/* Display Mannequin on right side */}
            <g transform="translate(580, 200)">
              <ellipse cx="0" cy="50" rx="45" ry="70" fill="#3D0A14" stroke="#DFBE68" strokeWidth="2" />
              <path d="M -45 50 C -30 140, -20 220, -50 320 L 50 320 C 20 220, 30 140, 45 50 Z" fill="#4E0C1B" stroke="#DFBE68" strokeWidth="2" />
              {/* Draped golden dupatta saree */}
              <path d="M -40 70 Q 0 160 40 240 L 45 310 Q 0 250 -35 150 Z" fill="url(#goldMetallic)" opacity="0.85" />
              {/* Stand */}
              <line x1="0" y1="320" x2="0" y2="380" stroke="#DFBE68" strokeWidth="6" />
              <rect x="-40" y="375" width="80" height="12" rx="4" fill="url(#goldMetallic)" />
            </g>
          </g>
        )}

        {/* 3. MAGGAM SLEEVES COLLECTION */}
        {svgType === 'maggam-sleeves' && (
          <g>
            <rect width="800" height="600" fill="url(#atelierGradient)" />
            <rect width="800" height="600" fill="url(#zariWeave)" />

            {/* 4 Distinct Maggam Sleeve Cuffs on Exhibition */}
            {/* Sleeve 1: Peacock & Kundan in Deep Wine */}
            <g transform="translate(80, 100)">
              <rect width="280" height="180" rx="10" fill="#3A0812" stroke="url(#goldMetallic)" strokeWidth="2" />
              {/* Grand border */}
              <rect x="0" y="120" width="280" height="60" fill="#220409" />
              <line x1="0" y1="120" x2="280" y2="120" stroke="#DFBE68" strokeWidth="3" />
              {/* Peacock motif */}
              <path d="M 90 85 Q 120 40 150 70 Q 170 95 190 75 Q 160 110 120 100 Z" fill="#0D47A1" stroke="#DFBE68" strokeWidth="2" />
              <circle cx="100" cy="75" r="5" fill="#DFBE68" />
              {/* Peacock feathers stones */}
              {[130, 150, 170].map((cx, i) => (
                <circle key={i} cx={cx} cy="65" r="4" fill="#00E676" stroke="#DFBE68" strokeWidth="1" />
              ))}
              {/* Sleeve cuff zardozi lines */}
              <line x1="10" y1="140" x2="270" y2="140" stroke="#DFBE68" strokeWidth="1.5" strokeDasharray="5 3" />
              <line x1="10" y1="155" x2="270" y2="155" stroke="#F3E5AB" strokeWidth="2" strokeDasharray="3 3" />
              <text x="140" y="205" fill="#DFBE68" fontSize="13" textAnchor="middle" letterSpacing="2">PEACOCK ZARDOZI SLEEVE</text>
            </g>

            {/* Sleeve 2: Lotus Pink with Pearl Chains */}
            <g transform="translate(440, 100)">
              <rect width="280" height="180" rx="10" fill="#58102B" stroke="url(#goldMetallic)" strokeWidth="2" />
              <rect x="0" y="120" width="280" height="60" fill="#380719" />
              <line x1="0" y1="120" x2="280" y2="120" stroke="#DFBE68" strokeWidth="3" />
              {/* Lotus center */}
              <path d="M 140 60 C 130 75, 130 90, 140 95 C 150 90, 150 75, 140 60 Z" fill="#F472B6" stroke="#DFBE68" strokeWidth="2" />
              <path d="M 140 95 C 120 85, 115 70, 120 65 C 125 75, 130 85, 140 95 Z" fill="#EC4899" stroke="#DFBE68" strokeWidth="1.5" />
              <path d="M 140 95 C 160 85, 165 70, 160 65 C 155 75, 150 85, 140 95 Z" fill="#EC4899" stroke="#DFBE68" strokeWidth="1.5" />
              {/* Hanging pearls */}
              {[40, 70, 100, 130, 160, 190, 220, 250].map((x, i) => (
                <circle key={i} cx={x} cy="150" r="3.5" fill="#FDFBF7" stroke="#DFBE68" strokeWidth="1" />
              ))}
              <text x="140" y="205" fill="#DFBE68" fontSize="13" textAnchor="middle" letterSpacing="2">LOTUS PEARL DROP SLEEVE</text>
            </g>

            {/* Sleeve 3: Royal Blue with Cutwork Lace */}
            <g transform="translate(80, 340)">
              <rect width="280" height="180" rx="10" fill="#0C2050" stroke="url(#goldMetallic)" strokeWidth="2" />
              <rect x="0" y="120" width="280" height="60" fill="#061230" />
              <line x1="0" y1="120" x2="280" y2="120" stroke="#DFBE68" strokeWidth="3" />
              {/* Triangular cutwork pattern */}
              <path d="M 20 120 L 40 90 L 60 120 L 80 90 L 100 120 L 120 90 L 140 120 L 160 90 L 180 120 L 200 90 L 220 120 L 240 90 L 260 120" fill="none" stroke="url(#goldMetallic)" strokeWidth="3" />
              <line x1="10" y1="150" x2="270" y2="150" stroke="#DFBE68" strokeWidth="2" strokeDasharray="4 4" />
              <text x="140" y="205" fill="#DFBE68" fontSize="13" textAnchor="middle" letterSpacing="2">TEMPLE CUTWORK SLEEVE</text>
            </g>

            {/* Sleeve 4: Antique Gold & Emerald Stone Work */}
            <g transform="translate(440, 340)">
              <rect width="280" height="180" rx="10" fill="#3D0610" stroke="url(#goldMetallic)" strokeWidth="2" />
              <rect x="0" y="120" width="280" height="60" fill="#200308" />
              <line x1="0" y1="120" x2="280" y2="120" stroke="#DFBE68" strokeWidth="3" />
              {/* Floral vine with green emerald stones */}
              <path d="M 30 75 Q 80 40 140 75 Q 200 110 250 75" fill="none" stroke="url(#goldMetallic)" strokeWidth="3" />
              {[60, 100, 140, 180, 220].map((x, i) => (
                <circle key={i} cx={x} cy={i % 2 === 0 ? 55 : 95} r="6" fill="#047857" stroke="#DFBE68" strokeWidth="1.5" />
              ))}
              <line x1="10" y1="145" x2="270" y2="145" stroke="#DFBE68" strokeWidth="2" strokeDasharray="3 5" />
              <text x="140" y="205" fill="#DFBE68" fontSize="13" textAnchor="middle" letterSpacing="2">EMERALD STONE WORK SLEEVE</text>
            </g>
          </g>
        )}

        {/* 4. COMPUTER EMBROIDERY MACHINE */}
        {svgType === 'embroidery-machine' && (
          <g>
            <rect width="800" height="600" fill="url(#atelierGradient)" />
            {/* Top Thread Spool Rack with colorful threads */}
            <rect x="180" y="50" width="440" height="24" fill="#333" stroke="#DFBE68" strokeWidth="1.5" />
            {[
              '#D97706', '#DC2626', '#DB2777', '#7C3AED', '#2563EB', '#059669', '#FBBF24', '#EA580C', '#4F46E5', '#BE185D'
            ].map((col, idx) => (
              <g key={idx} transform={`translate(${210 + idx * 40}, 30)`}>
                {/* Thread spool cylinder */}
                <rect x="-12" y="0" width="24" height="42" rx="3" fill={col} stroke="#F9F6F0" strokeWidth="0.8" />
                <line x1="0" y1="0" x2="0" y2="-15" stroke="#E5E7EB" strokeWidth="1" />
                {/* Thread guide to needle */}
                <path d={`M 0 42 Q ${-5 + idx} 120 0 170`} fill="none" stroke={col} strokeWidth="1.2" opacity="0.85" />
              </g>
            ))}

            {/* Computer Machine Heavy Casting Body */}
            <rect x="160" y="170" width="480" height="150" rx="14" fill="#1E293B" stroke="#64748B" strokeWidth="3" />
            <rect x="180" y="190" width="160" height="100" rx="8" fill="#0F172A" stroke="#38BDF8" strokeWidth="1.5" />
            
            {/* Digital Screen showing stitching pattern */}
            <text x="260" y="215" fill="#38BDF8" fontSize="11" textAnchor="middle" fontFamily="monospace">SHANVI SRI EMBROIDERY</text>
            <path d="M 210 245 Q 260 220 310 245 Q 260 270 210 245" fill="none" stroke="#FBBF24" strokeWidth="2" strokeDasharray="3 2" />
            <circle cx="260" cy="245" r="8" fill="none" stroke="#F43F5E" strokeWidth="1.5" />
            <text x="260" y="280" fill="#10B981" fontSize="10" textAnchor="middle" fontFamily="monospace">SPEED: 850 SPM • NEEDLE #4</text>

            {/* Multi-Needle Head assembly */}
            <rect x="420" y="190" width="180" height="160" rx="6" fill="#334155" stroke="#94A3B8" strokeWidth="2" />
            {/* Needles bar */}
            {[440, 465, 490, 515, 540, 565].map((nx, i) => (
              <g key={i}>
                <line x1={nx} y1="350" x2={nx} y2="400" stroke="#CBD5E1" strokeWidth="2.5" />
                <polygon points={`${nx-2},400 ${nx+2},400 ${nx},412`} fill="#E2E8F0" />
              </g>
            ))}

            {/* Embroidery Hoop clamping Silk Fabric */}
            <ellipse cx="500" cy="460" rx="190" ry="110" fill="#4A0814" stroke="#D4AF37" strokeWidth="8" />
            <ellipse cx="500" cy="460" rx="175" ry="98" fill="#3B050F" stroke="#F3E5AB" strokeWidth="2" strokeDasharray="4 4" />
            
            {/* Intricate floral pattern actively being stitched by needle */}
            <g transform="translate(500, 460)">
              <circle r="40" fill="none" stroke="#FBBF24" strokeWidth="3" strokeDasharray="3 3" />
              {[0, 60, 120, 180, 240, 300].map((deg, i) => (
                <path
                  key={i}
                  d={`M 0 0 Q ${35 * Math.cos((deg * Math.PI)/180)} ${35 * Math.sin((deg * Math.PI)/180)} ${65 * Math.cos(((deg+30) * Math.PI)/180)} ${65 * Math.sin(((deg+30) * Math.PI)/180)}`}
                  fill="none"
                  stroke="#F43F5E"
                  strokeWidth="2.5"
                />
              ))}
            </g>
          </g>
        )}

        {/* 5. PINK DESIGNER BLOUSE */}
        {svgType === 'pink-blouse' && (
          <g>
            <rect width="800" height="600" fill="url(#lotusPinkSilk)" />
            <rect width="800" height="600" fill="url(#zariWeave)" />

            {/* Pink Blouse Silhouette */}
            <path
              d="M 230 140 C 280 190, 350 230, 400 230 C 450 230, 520 190, 570 140 L 630 250 C 590 290, 570 330, 570 480 L 230 480 C 230 330, 210 290, 170 250 Z"
              fill="#5A0E2B"
              stroke="#F3E5AB"
              strokeWidth="2"
            />

            {/* Sweetheart back-neckline */}
            <path
              d="M 310 140 Q 350 260 400 290 Q 450 260 490 140"
              fill="#340618"
              stroke="url(#goldMetallic)"
              strokeWidth="5"
            />

            {/* Lotus motifs on the border */}
            <g transform="translate(400, 360)">
              {/* Central Lotus Motif */}
              <path d="M 0 -40 C -15 -15, -15 15, 0 35 C 15 15, 15 -15, 0 -40 Z" fill="#F472B6" stroke="#DFBE68" strokeWidth="2" />
              <path d="M 0 35 C -30 20, -40 -10, -25 -25 C -20 -5, -10 15, 0 35 Z" fill="#EC4899" stroke="#DFBE68" strokeWidth="2" />
              <path d="M 0 35 C 30 20, 40 -10, 25 -25 C 20 -5, 10 15, 0 35 Z" fill="#EC4899" stroke="#DFBE68" strokeWidth="2" />
              <circle cx="0" cy="10" r="8" fill="#FDFBF7" stroke="#D4AF37" strokeWidth="2" />
            </g>

            {/* Pearl chain loops along neck */}
            {Array.from({ length: 9 }).map((_, i) => (
              <circle key={i} cx={325 + i * 19} cy={160 + Math.sin((i / 8) * Math.PI) * 115} r="4" fill="#FDFBF7" stroke="#DFBE68" strokeWidth="1" />
            ))}

            {/* Sleeve edge floral lace */}
            <line x1="230" y1="460" x2="570" y2="460" stroke="#DFBE68" strokeWidth="2" strokeDasharray="4 2" />
          </g>
        )}

        {/* 6. ROYAL BLUE SAREE BLOUSE WORK */}
        {svgType === 'blue-blouse' && (
          <g>
            <rect width="800" height="600" fill="url(#royalBlueSilk)" />
            <rect width="800" height="600" fill="url(#zariWeave)" />

            {/* Royal Blue Blouse Outline */}
            <path
              d="M 230 140 C 280 190, 350 230, 400 230 C 450 230, 520 190, 570 140 L 630 250 C 590 290, 570 330, 570 480 L 230 480 C 230 330, 210 290, 170 250 Z"
              fill="#0B2052"
              stroke="#D4AF37"
              strokeWidth="2.5"
            />

            {/* Gold zari jaal (checkered net with floral centres) */}
            <g clipPath="url(#blueCutout)">
              {Array.from({ length: 6 }).map((_, i) => (
                <line key={`d1-${i}`} x1={200 + i * 70} y1="200" x2={350 + i * 70} y2="480" stroke="#DFBE68" strokeWidth="1.2" opacity="0.6" />
              ))}
              {Array.from({ length: 6 }).map((_, i) => (
                <line key={`d2-${i}`} x1={550 - i * 70} y1="200" x2={400 - i * 70} y2="480" stroke="#DFBE68" strokeWidth="1.2" opacity="0.6" />
              ))}
            </g>

            {/* Temple neck arch */}
            <path
              d="M 310 140 L 340 260 L 400 290 L 460 260 L 490 140"
              fill="#061230"
              stroke="url(#goldMetallic)"
              strokeWidth="6"
            />
            
            {/* Golden coins / Kasu mala motif along neckline */}
            {[325, 350, 375, 400, 425, 450, 475].map((cx, idx) => (
              <circle key={idx} cx={cx} cy={200 + Math.abs(cx - 400) * 0.4} r="7" fill="url(#goldMetallic)" stroke="#F3E5AB" strokeWidth="1" />
            ))}

            {/* Deep tassels / latkans */}
            <line x1="330" y1="140" x2="380" y2="240" stroke="#DFBE68" strokeWidth="2" />
            <line x1="470" y1="140" x2="420" y2="240" stroke="#DFBE68" strokeWidth="2" />
            <polygon points="390,250 410,250 400,280" fill="url(#goldMetallic)" />
          </g>
        )}

        {/* 7. RED EMBROIDERED BLOUSE */}
        {svgType === 'red-blouse' && (
          <g>
            <rect width="800" height="600" fill="url(#crimsonRedSilk)" />
            <rect width="800" height="600" fill="url(#zariWeave)" />

            <path
              d="M 230 140 C 280 190, 350 230, 400 230 C 450 230, 520 190, 570 140 L 630 250 C 590 290, 570 330, 570 480 L 230 480 C 230 330, 210 290, 170 250 Z"
              fill="#4E0812"
              stroke="#D4AF37"
              strokeWidth="2.5"
            />

            {/* Classic U-cut backneck framed with dense zardozi */}
            <path
              d="M 310 140 C 310 320, 490 320, 490 140"
              fill="#250308"
              stroke="url(#goldMetallic)"
              strokeWidth="7"
            />

            {/* Peacock crest pair at the base */}
            <g transform="translate(400, 380)">
              <circle r="42" fill="#580815" stroke="url(#goldMetallic)" strokeWidth="2.5" />
              <path d="M -25 5 Q -10 -25 15 -10 Q 30 10 10 20 Z" fill="#D4AF37" />
              <circle cx="5" cy="5" r="8" fill="#10B981" stroke="#DFBE68" strokeWidth="1.5" />
              {/* Radiating kundan stones */}
              {[0, 30, 60, 90, 120, 150, 180, 210, 240, 270, 300, 330].map((deg, i) => (
                <circle
                  key={i}
                  cx={35 * Math.cos((deg * Math.PI)/180)}
                  cy={35 * Math.sin((deg * Math.PI)/180)}
                  r="3.5"
                  fill="#FFF"
                  stroke="#D4AF37"
                  strokeWidth="1"
                />
              ))}
            </g>

            {/* Lower hemline grand gold border */}
            <rect x="230" y="450" width="340" height="30" fill="#2E040B" stroke="#DFBE68" strokeWidth="1.5" />
            <line x1="230" y1="465" x2="570" y2="465" stroke="url(#goldMetallic)" strokeWidth="2" strokeDasharray="3 3" />
          </g>
        )}

        {/* 8. MAROON & GOLD DESIGNER BLOUSE */}
        {svgType === 'maroon-gold-blouse' && (
          <g>
            <rect width="800" height="600" fill="url(#deepWineSilk)" />
            <rect width="800" height="600" fill="url(#zariWeave)" />

            <path
              d="M 230 140 C 280 190, 350 230, 400 230 C 450 230, 520 190, 570 140 L 630 250 C 590 290, 570 330, 570 480 L 230 480 C 230 330, 210 290, 170 250 Z"
              fill="#34060E"
              stroke="#DFBE68"
              strokeWidth="2.5"
            />

            {/* Circular Keyhole Mandala Back Neck */}
            <circle cx="400" cy="270" r="85" fill="#1C0206" stroke="url(#goldMetallic)" strokeWidth="6" />
            <circle cx="400" cy="270" r="70" fill="none" stroke="#DFBE68" strokeWidth="2" strokeDasharray="5 3" />
            <circle cx="400" cy="270" r="50" fill="none" stroke="#F3E5AB" strokeWidth="1.5" strokeDasharray="3 3" />
            <circle cx="400" cy="270" r="28" fill="#4B0915" stroke="url(#goldMetallic)" strokeWidth="2" />
            <circle cx="400" cy="270" r="10" fill="#DFBE68" />

            {/* Potli buttons running down the back */}
            {[370, 390, 410, 430, 450].map((py, idx) => (
              <circle key={idx} cx="400" cy={py} r="6" fill="url(#goldMetallic)" stroke="#220409" strokeWidth="1.5" />
            ))}
          </g>
        )}

        {/* 9. CHILDREN'S DESIGNER DRESS */}
        {svgType === 'kids-dress' && (
          <g>
            <rect width="800" height="600" fill="url(#lotusPinkSilk)" />
            <rect width="800" height="600" fill="url(#zariWeave)" />

            {/* Cute festive lehenga / frock flared skirt */}
            <path
              d="M 330 260 L 470 260 L 600 520 L 200 520 Z"
              fill="#7A1338"
              stroke="#DFBE68"
              strokeWidth="2"
            />

            {/* Gold zari broad border at bottom of skirt */}
            <polygon points="200,460 600,460 600,520 200,520" fill="url(#goldMetallic)" />
            <line x1="200" y1="480" x2="600" y2="480" stroke="#7A1338" strokeWidth="2" strokeDasharray="6 4" />
            <line x1="200" y1="500" x2="600" y2="500" stroke="#7A1338" strokeWidth="2" strokeDasharray="4 4" />

            {/* Choli Blouse top */}
            <path
              d="M 310 140 L 490 140 L 510 240 L 290 240 Z"
              fill="#2F0510"
              stroke="url(#goldMetallic)"
              strokeWidth="2.5"
            />
            {/* Cute puff sleeves */}
            <ellipse cx="270" cy="180" rx="30" ry="25" fill="#4B091B" stroke="#DFBE68" strokeWidth="2" />
            <ellipse cx="530" cy="180" rx="30" ry="25" fill="#4B091B" stroke="#DFBE68" strokeWidth="2" />

            {/* Embroidered floral spray on chest */}
            <circle cx="400" cy="190" r="14" fill="#DFBE68" />
            <circle cx="400" cy="190" r="8" fill="#F472B6" />
          </g>
        )}

        {/* 10. DESIGNER EMBROIDERED BLOUSE */}
        {svgType === 'designer-embroidered-blouse' && (
          <g>
            <rect width="800" height="600" fill="url(#atelierGradient)" />
            <rect width="800" height="600" fill="url(#zariWeave)" />

            <path
              d="M 230 140 C 280 190, 350 230, 400 230 C 450 230, 520 190, 570 140 L 630 250 C 590 290, 570 330, 570 480 L 230 480 C 230 330, 210 290, 170 250 Z"
              fill="#2A050D"
              stroke="#D4AF37"
              strokeWidth="2.5"
            />

            {/* Sheer cutwork net insert */}
            <path
              d="M 310 140 Q 400 220 490 140 Q 400 340 310 140 Z"
              fill="#180206"
              stroke="url(#goldMetallic)"
              strokeWidth="4"
            />
            {/* Intricate cutwork lattice */}
            <g stroke="#DFBE68" strokeWidth="1.2" opacity="0.75">
              <line x1="330" y1="160" x2="470" y2="280" />
              <line x1="360" y1="160" x2="480" y2="250" />
              <line x1="470" y1="160" x2="330" y2="280" />
              <line x1="440" y1="160" x2="320" y2="250" />
            </g>

            {/* Floral embroidery borders */}
            <path d="M 310 140 Q 400 350 490 140" fill="none" stroke="url(#goldMetallic)" strokeWidth="6" strokeDasharray="4 4" />
          </g>
        )}
      </svg>

      {/* Subtle vignette and contrast scrim for text legibility */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#100204]/90 via-[#100204]/30 to-transparent pointer-events-none" />
      
      {/* Subtle gold border aura */}
      <div className="absolute inset-0 border border-[#D4AF37]/20 pointer-events-none" />
    </div>
  );
};
