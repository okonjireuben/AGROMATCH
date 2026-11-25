const fs = require('fs');
const path = require('path');

const publicDir = path.join(__dirname, '..', 'public', 'products');

// Ensure directories exist
['jerseys', 'boots', 'balls', 'gear'].forEach(sub => {
  fs.mkdirSync(path.join(publicDir, sub), { recursive: true });
});

// Helper to generate Jersey SVG
function generateJerseySVG({
  club,
  brand,
  bodyColor,
  sleeveColor,
  collarColor,
  sponsorText,
  badgeText,
  stripePattern = 'none', // 'none', 'vertical', 'half', 'hoops', 'eagle', 'cross', 'diagonal'
  stripeColor = '#ffffff',
  brandLogo = 'adidas', // 'adidas', 'nike', 'puma', 'castore', 'kappa', 'ea7'
  accentColor = '#FFD700',
  textColor = '#ffffff'
}) {
  let patternDef = '';
  let patternFill = 'none';

  if (stripePattern === 'vertical') {
    patternDef = `
      <pattern id="stripes" width="40" height="40" patternUnits="userSpaceOnUse">
        <rect width="20" height="40" fill="${stripeColor}" opacity="0.9"/>
      </pattern>
    `;
    patternFill = 'url(#stripes)';
  } else if (stripePattern === 'half') {
    patternDef = `
      <pattern id="halfSplit" width="400" height="400" patternUnits="userSpaceOnUse">
        <rect x="0" y="0" width="200" height="400" fill="${stripeColor}"/>
      </pattern>
    `;
    patternFill = 'url(#halfSplit)';
  } else if (stripePattern === 'eagle') {
    patternDef = `
      <pattern id="eagleChevron" width="50" height="40" patternUnits="userSpaceOnUse">
        <path d="M 0 10 L 25 30 L 50 10 L 50 20 L 25 40 L 0 20 Z" fill="${stripeColor}" opacity="0.6"/>
      </pattern>
    `;
    patternFill = 'url(#eagleChevron)';
  } else if (stripePattern === 'cross') {
    patternDef = `
      <pattern id="crossPat" width="200" height="200" patternUnits="userSpaceOnUse">
        <rect x="85" y="0" width="30" height="200" fill="${stripeColor}"/>
        <rect x="0" y="90" width="200" height="30" fill="${stripeColor}"/>
      </pattern>
    `;
    patternFill = 'url(#crossPat)';
  }

  // Brand Logo SVG representation
  let brandSvg = '';
  if (brandLogo === 'nike') {
    brandSvg = `<path d="M 135 145 Q 165 158 180 140 Q 155 162 135 145 Z" fill="${textColor}"/>`;
  } else if (brandLogo === 'adidas') {
    brandSvg = `
      <g transform="translate(140, 140) scale(0.65)" fill="${textColor}">
        <rect x="0" y="14" width="7" height="12" rx="1.5" transform="skewX(-25)"/>
        <rect x="11" y="7" width="7" height="19" rx="1.5" transform="skewX(-25)"/>
        <rect x="22" y="0" width="7" height="26" rx="1.5" transform="skewX(-25)"/>
      </g>
    `;
  } else if (brandLogo === 'puma') {
    brandSvg = `
      <g transform="translate(142, 142) scale(0.7)" fill="${textColor}">
        <path d="M 5 20 Q 15 5 28 8 Q 20 18 10 22 Z"/>
      </g>
    `;
  } else {
    brandSvg = `<circle cx="150" cy="148" r="8" fill="${textColor}" opacity="0.9"/>`;
  }

  return `<?xml version="1.0" encoding="UTF-8"?>
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 600 600" width="100%" height="100%">
  <defs>
    <radialGradient id="bgGlow" cx="50%" cy="40%" r="65%">
      <stop offset="0%" stopColor="#1E2922" stopOpacity="0.8"/>
      <stop offset="100%" stopColor="#090A09" stopOpacity="1"/>
    </radialGradient>

    <linearGradient id="bodyShade" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stopColor="#ffffff" stopOpacity="0.2"/>
      <stop offset="40%" stopColor="#ffffff" stopOpacity="0.0"/>
      <stop offset="100%" stopColor="#000000" stopOpacity="0.45"/>
    </linearGradient>

    <filter id="cardShadow" x="-10%" y="-10%" width="130%" height="130%">
      <feDropShadow dx="0" dy="16" stdDeviation="16" floodColor="#000000" floodOpacity="0.85"/>
    </filter>

    ${patternDef}
  </defs>

  <!-- Studio Background -->
  <rect width="600" height="600" rx="32" fill="url(#bgGlow)"/>

  <!-- Subtle Pitch Lines in Background -->
  <circle cx="300" cy="300" r="180" stroke="#107C41" stroke-width="1.5" opacity="0.15" fill="none"/>
  <line x1="60" y1="300" x2="540" y2="300" stroke="#107C41" stroke-width="1.5" opacity="0.15"/>

  <!-- Jersey Vector (Centered) -->
  <g transform="translate(100, 70)" filter="url(#cardShadow)">

    <!-- Left Sleeve -->
    <path d="M 110 70 L 25 145 L 70 195 L 120 150 Z" fill="${sleeveColor}" stroke="#000000" stroke-width="1.5"/>
    
    <!-- Right Sleeve -->
    <path d="M 290 70 L 375 145 L 330 195 L 280 150 Z" fill="${sleeveColor}" stroke="#000000" stroke-width="1.5"/>

    <!-- Main Body Base -->
    <path d="M 120 70 C 145 85, 255 85, 280 70 L 305 155 L 295 440 C 200 452, 200 452, 105 440 L 95 155 Z" fill="${bodyColor}" stroke="#000000" stroke-width="2"/>

    <!-- Stripe / Texture Overlay -->
    ${stripePattern !== 'none' ? `
      <path d="M 120 70 C 145 85, 255 85, 280 70 L 305 155 L 295 440 C 200 452, 200 452, 105 440 L 95 155 Z" fill="${patternFill}"/>
    ` : ''}

    <!-- Collar -->
    <path d="M 145 70 C 175 102, 225 102, 255 70 C 225 82, 175 82, 145 70 Z" fill="${collarColor}" stroke="#000000" stroke-width="1.5"/>

    <!-- Realistic Fabric Highlights & Shadows -->
    <path d="M 120 70 C 145 85, 255 85, 280 70 L 305 155 L 295 440 C 200 452, 200 452, 105 440 L 95 155 Z" fill="url(#bodyShade)"/>

    <!-- Brand Logo (Left Chest) -->
    ${brandSvg}

    <!-- Club Crest (Right Chest) -->
    <g transform="translate(230, 130)">
      <circle cx="20" cy="20" r="21" fill="#0A0A0A" stroke="${accentColor}" stroke-width="2"/>
      <circle cx="20" cy="20" r="17" fill="${bodyColor}"/>
      <text x="20" y="24" textAnchor="middle" fontSize="11" fontWeight="900" fill="${textColor}" font-family="Arial, sans-serif">
        ${badgeText}
      </text>
    </g>

    <!-- Chest Sponsor -->
    <g transform="translate(130, 240)">
      <rect x="0" y="0" width="140" height="42" rx="8" fill="#000000" fill-opacity="0.35"/>
      <text x="70" y="27" textAnchor="middle" fontSize="16" fontWeight="900" letter-spacing="2" fill="${textColor}" font-family="Arial, sans-serif">
        ${sponsorText}
      </text>
    </g>

    <!-- Official Authentic Match Hem Tag -->
    <g transform="translate(250, 412)">
      <rect width="32" height="18" rx="3" fill="#FFD700"/>
      <text x="16" y="13" textAnchor="middle" fontSize="8" fontWeight="900" fill="#000000" font-family="Arial">PRO</text>
    </g>
  </g>

  <!-- Club Banner Footer -->
  <g transform="translate(0, 525)">
    <rect x="60" y="0" width="480" height="45" rx="14" fill="#141417" stroke="#27272A" stroke-width="1"/>
    <text x="300" y="27" textAnchor="middle" fill="#00FF66" fontSize="16" fontWeight="900" letter-spacing="2" font-family="Arial, sans-serif">
      ${club.toUpperCase()} • 24/25 OFFICIAL KIT
    </text>
  </g>
</svg>`;
}

// Generate Boot SVG
function generateBootSVG({ name, brand, primaryColor, accentColor, plateColor, description }) {
  return `<?xml version="1.0" encoding="UTF-8"?>
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 600 600" width="100%" height="100%">
  <defs>
    <radialGradient id="bootGlow" cx="50%" cy="50%" r="60%">
      <stop offset="0%" stopColor="#17261E" stopOpacity="0.9"/>
      <stop offset="100%" stopColor="#080908" stopOpacity="1"/>
    </radialGradient>
    <filter id="bootDropShadow" x="-10%" y="-10%" width="130%" height="130%">
      <feDropShadow dx="0" dy="18" stdDeviation="18" floodColor="#000000" floodOpacity="0.9"/>
    </filter>
  </defs>

  <rect width="600" height="600" rx="32" fill="url(#bootGlow)"/>

  <!-- High-Tech Stadium Pedestal -->
  <ellipse cx="300" cy="460" rx="220" ry="40" fill="#00FF66" opacity="0.12"/>
  <ellipse cx="300" cy="455" rx="190" ry="25" fill="#18181B" stroke="#27272A" stroke-width="2"/>

  <!-- Boot Silhouette (Professional Dynamic Profile) -->
  <g transform="translate(70, 160)" filter="url(#bootDropShadow)">
    <!-- Soleplate & Studs (FG/AG Cleats) -->
    <path d="M 50 250 L 410 245 C 430 240, 440 215, 430 200 L 410 210 L 40 220 Z" fill="${plateColor}" stroke="#111" stroke-width="2"/>
    
    <!-- Studs -->
    <polygon points="65,248 80,248 72,280" fill="${accentColor}"/>
    <polygon points="120,248 135,248 127,280" fill="${accentColor}"/>
    <polygon points="260,247 275,247 268,280" fill="${accentColor}"/>
    <polygon points="320,246 335,246 328,280" fill="${accentColor}"/>
    <polygon points="380,245 395,245 388,278" fill="${accentColor}"/>

    <!-- Boot Upper Body -->
    <path d="M 70 240 
             C 40 180, 50 120, 80 80 
             C 105 50, 130 50, 150 90 
             L 190 130 
             C 250 140, 320 150, 380 180 
             C 430 205, 440 230, 400 240 Z" 
          fill="${primaryColor}" stroke="#000" stroke-width="3"/>

    <!-- High Dynamic Sock Collar (Dynamic Fit) -->
    <path d="M 80 80 C 70 50, 95 30, 125 35 C 145 40, 150 70, 150 90 Z" fill="#111111" stroke="${accentColor}" stroke-width="1.5"/>

    <!-- Lacing System & Tongue Area -->
    <path d="M 140 100 L 250 150" stroke="#000" stroke-width="6" stroke-dasharray="8 6"/>

    <!-- Iconic Brand Graphic Swoosh / Stripes on Flank -->
    ${brand === 'Nike' ? `
      <!-- Nike Swoosh -->
      <path d="M 170 190 Q 250 215 320 170 Q 260 210 170 190 Z" fill="${accentColor}" stroke="#000" stroke-width="1"/>
    ` : brand === 'Adidas' ? `
      <!-- Adidas 3-Stripes -->
      <g fill="${accentColor}" transform="translate(190, 130) rotate(15)">
        <polygon points="0,0 12,0 35,50 23,50"/>
        <polygon points="18,0 30,0 53,50 41,50"/>
        <polygon points="36,0 48,0 71,50 59,50"/>
      </g>
    ` : `
      <!-- Puma Formstrip -->
      <path d="M 140 210 Q 240 230 360 175 Q 260 210 140 210 Z" fill="${accentColor}"/>
    `}

    <!-- Gripknit / Strikeskin 3D Micro-texture Ribs -->
    <path d="M 280 180 Q 320 195 360 190" stroke="${accentColor}" stroke-width="3" fill="none" opacity="0.8"/>
    <path d="M 290 195 Q 330 210 370 205" stroke="${accentColor}" stroke-width="3" fill="none" opacity="0.8"/>
  </g>

  <!-- Product Label -->
  <g transform="translate(0, 520)">
    <rect x="50" y="0" width="500" height="50" rx="16" fill="#121214" stroke="#27272A" stroke-width="1"/>
    <text x="300" y="32" textAnchor="middle" fill="#FFFFFF" fontSize="16" fontWeight="900" letter-spacing="1" font-family="Arial, sans-serif">
      ${name.toUpperCase()}
    </text>
  </g>
</svg>`;
}

// Generate Match Ball SVG
function generateBallSVG({ name, type, primaryColor, secondaryColor, accentColor, starColor = '#ffffff' }) {
  return `<?xml version="1.0" encoding="UTF-8"?>
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 600 600" width="100%" height="100%">
  <defs>
    <radialGradient id="ballShine" cx="35%" cy="30%" r="65%">
      <stop offset="0%" stopColor="#ffffff" stopOpacity="0.4"/>
      <stop offset="45%" stopColor="#ffffff" stopOpacity="0.0"/>
      <stop offset="100%" stopColor="#000000" stopOpacity="0.65"/>
    </radialGradient>
    <filter id="ballShadow" x="-10%" y="-10%" width="130%" height="130%">
      <feDropShadow dx="0" dy="20" stdDeviation="20" floodColor="#000000" floodOpacity="0.95"/>
    </filter>
  </defs>

  <rect width="600" height="600" rx="32" fill="#0C140E"/>

  <!-- Pedestal -->
  <ellipse cx="300" cy="480" rx="160" ry="30" fill="#00FF66" opacity="0.15"/>
  <ellipse cx="300" cy="475" rx="130" ry="18" fill="#18181B" stroke="#27272A" stroke-width="2"/>

  <!-- Main Ball Sphere -->
  <g filter="url(#ballShadow)">
    <circle cx="300" cy="270" r="165" fill="${primaryColor}" stroke="#111111" stroke-width="3"/>

    ${type === 'ucl' ? `
      <!-- UEFA Champions League Starball Panels -->
      <g fill="${secondaryColor}" stroke="${accentColor}" stroke-width="2">
        <!-- Central Star -->
        <polygon points="300,210 315,250 355,255 325,280 335,320 300,295 265,320 275,280 245,255 285,250" fill="${starColor}"/>
        <!-- Top Left Star Panel -->
        <polygon points="200,160 215,190 245,195 220,215 230,245 200,225 175,245 185,215 160,195 190,190" fill="#111111"/>
        <!-- Top Right Star Panel -->
        <polygon points="400,160 415,190 445,195 420,215 430,245 400,225 375,245 385,215 360,195 390,190" fill="#111111"/>
        <!-- Bottom Star Panel -->
        <polygon points="300,370 312,395 340,398 320,415 327,440 300,425 273,440 280,415 260,398 288,395" fill="#111111"/>
      </g>
      <circle cx="300" cy="270" r="24" fill="#0A0A0A" stroke="#FFD700" stroke-width="1.5"/>
      <text x="300" y="275" textAnchor="middle" fill="#FFD700" fontSize="11" fontWeight="900" font-family="Arial">UCL</text>
    ` : type === 'telstar' ? `
      <!-- Adidas Telstar 18 Classic Pixelated Panels -->
      <g fill="#111111">
        <polygon points="300,180 345,210 330,260 270,260 255,210"/>
        <polygon points="200,240 240,265 230,310 180,310 170,265"/>
        <polygon points="400,240 430,265 420,310 370,310 360,265"/>
        <polygon points="260,330 340,330 355,380 300,410 245,380"/>
      </g>
      <!-- Telstar Pixel Distortions -->
      <rect x="285" y="165" width="30" height="15" fill="#475569"/>
      <rect x="220" y="230" width="20" height="15" fill="#475569"/>
      <rect x="360" y="230" width="20" height="15" fill="#475569"/>
      <text x="300" y="295" textAnchor="middle" fill="#111111" fontSize="16" fontWeight="900" font-family="Arial">telstar 18</text>
    ` : `
      <!-- Nike Flight Aerowsculpt Grooves -->
      <circle cx="300" cy="270" r="130" stroke="${accentColor}" stroke-width="5" stroke-dasharray="35 25" fill="none"/>
      <circle cx="300" cy="270" r="85" stroke="${secondaryColor}" stroke-width="4" stroke-dasharray="25 15" fill="none"/>
      <!-- Premier League Lion / Nike Swoosh -->
      <path d="M 270 270 Q 300 285 330 260" stroke="#111" stroke-width="6" fill="none" stroke-linecap="round"/>
      <circle cx="300" cy="235" r="18" fill="#41B6E6"/>
      <text x="300" y="240" textAnchor="middle" fill="#FFFFFF" fontSize="10" fontWeight="900" font-family="Arial">PL</text>
    `}

    <!-- Spherical 3D Light & Shade Overlay -->
    <circle cx="300" cy="270" r="165" fill="url(#ballShine)"/>
  </g>

  <!-- Product Label -->
  <g transform="translate(0, 520)">
    <rect x="50" y="0" width="500" height="50" rx="16" fill="#121214" stroke="#27272A" stroke-width="1"/>
    <text x="300" y="32" textAnchor="middle" fill="#00FF66" fontSize="15" fontWeight="900" letter-spacing="1" font-family="Arial, sans-serif">
      ${name.toUpperCase()}
    </text>
  </g>
</svg>`;
}

// Generate Gear / Accessories SVG
function generateGearSVG({ title, subtitle, icon, color = '#107C41' }) {
  return `<?xml version="1.0" encoding="UTF-8"?>
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 600 600" width="100%" height="100%">
  <defs>
    <radialGradient id="gearBg" cx="50%" cy="50%" r="65%">
      <stop offset="0%" stopColor="#1B2920" stopOpacity="0.9"/>
      <stop offset="100%" stopColor="#080A08" stopOpacity="1"/>
    </radialGradient>
    <filter id="gearShadow" x="-10%" y="-10%" width="130%" height="130%">
      <feDropShadow dx="0" dy="16" stdDeviation="16" floodColor="#000000" floodOpacity="0.9"/>
    </filter>
  </defs>

  <rect width="600" height="600" rx="32" fill="url(#gearBg)"/>

  <!-- Pedestal -->
  <ellipse cx="300" cy="460" rx="180" ry="30" fill="${color}" opacity="0.2"/>

  <!-- Big Central Icon / Graphical Illustration -->
  <g transform="translate(180, 120)" filter="url(#gearShadow)">
    <rect width="240" height="260" rx="36" fill="#121214" stroke="${color}" stroke-width="4"/>
    <circle cx="120" cy="110" r="70" fill="${color}" opacity="0.2"/>
    <text x="120" y="135" textAnchor="middle" fontSize="72">${icon}</text>
    <rect x="40" y="200" width="160" height="28" rx="8" fill="#1F1F23" stroke="#333" stroke-width="1"/>
    <text x="120" y="219" textAnchor="middle" fill="#00FF66" fontSize="12" fontWeight="900" font-family="Arial">PRO MATCH GRADE</text>
  </g>

  <!-- Product Label -->
  <g transform="translate(0, 500)">
    <rect x="50" y="0" width="500" height="60" rx="16" fill="#121214" stroke="#27272A" stroke-width="1"/>
    <text x="300" y="28" textAnchor="middle" fill="#FFFFFF" fontSize="16" fontWeight="900" letter-spacing="1" font-family="Arial, sans-serif">
      ${title.toUpperCase()}
    </text>
    <text x="300" y="48" textAnchor="middle" fill="#00FF66" fontSize="12" fontWeight="700" letter-spacing="2" font-family="Arial, sans-serif">
      ${subtitle.toUpperCase()}
    </text>
  </g>
</svg>`;
}

// -------------------------------------------------------------
// LIST OF ALL PRODUCTS TO GENERATE EXACT MATCHING ASSETS
// -------------------------------------------------------------

const JERSEYS_CONFIG = [
  // Premier League
  {
    file: 'arsenal-home.svg',
    club: 'Arsenal FC',
    brand: 'Adidas',
    bodyColor: '#EF0107',
    sleeveColor: '#FFFFFF',
    collarColor: '#034694',
    sponsorText: 'Emirates',
    badgeText: 'AFC',
    stripePattern: 'none',
    brandLogo: 'adidas',
    accentColor: '#FFFFFF',
    textColor: '#FFFFFF'
  },
  {
    file: 'manchester-united-home.svg',
    club: 'Manchester United',
    brand: 'Adidas',
    bodyColor: '#DA291C',
    sleeveColor: '#DA291C',
    collarColor: '#FFFFFF',
    sponsorText: 'Snapdragon',
    badgeText: 'MUFC',
    stripePattern: 'none',
    brandLogo: 'adidas',
    accentColor: '#FBE122',
    textColor: '#FFFFFF'
  },
  {
    file: 'manchester-city-home.svg',
    club: 'Manchester City',
    brand: 'Puma',
    bodyColor: '#6CABDD',
    sleeveColor: '#6CABDD',
    collarColor: '#1C2C5B',
    sponsorText: 'ETIHAD',
    badgeText: 'MCFC',
    stripePattern: 'none',
    brandLogo: 'puma',
    accentColor: '#FFFFFF',
    textColor: '#1C2C5B'
  },
  {
    file: 'liverpool-home.svg',
    club: 'Liverpool FC',
    brand: 'Nike',
    bodyColor: '#C8102E',
    sleeveColor: '#C8102E',
    collarColor: '#F6EB61',
    sponsorText: 'Standard C.',
    badgeText: 'LFC',
    stripePattern: 'none',
    brandLogo: 'nike',
    accentColor: '#F6EB61',
    textColor: '#FFFFFF'
  },
  {
    file: 'chelsea-home.svg',
    club: 'Chelsea FC',
    brand: 'Nike',
    bodyColor: '#034694',
    sleeveColor: '#034694',
    collarColor: '#DBA111',
    sponsorText: 'INFINITE',
    badgeText: 'CFC',
    stripePattern: 'none',
    brandLogo: 'nike',
    accentColor: '#DBA111',
    textColor: '#FFFFFF'
  },
  {
    file: 'tottenham-home.svg',
    club: 'Tottenham Hotspur',
    brand: 'Nike',
    bodyColor: '#FFFFFF',
    sleeveColor: '#132257',
    collarColor: '#132257',
    sponsorText: 'AIA',
    badgeText: 'SPURS',
    stripePattern: 'none',
    brandLogo: 'nike',
    accentColor: '#132257',
    textColor: '#132257'
  },
  {
    file: 'newcastle-home.svg',
    club: 'Newcastle United',
    brand: 'Adidas',
    bodyColor: '#111111',
    sleeveColor: '#111111',
    collarColor: '#41B6E6',
    sponsorText: 'SELA',
    badgeText: 'NUFC',
    stripePattern: 'vertical',
    stripeColor: '#FFFFFF',
    brandLogo: 'adidas',
    accentColor: '#41B6E6',
    textColor: '#FFFFFF'
  },
  {
    file: 'aston-villa-home.svg',
    club: 'Aston Villa',
    brand: 'Adidas',
    bodyColor: '#670E36', // Claret
    sleeveColor: '#95BFE5', // Sky blue
    collarColor: '#95BFE5',
    sponsorText: 'BETANO',
    badgeText: 'AVFC',
    stripePattern: 'none',
    brandLogo: 'adidas',
    accentColor: '#FFD700',
    textColor: '#FFFFFF'
  },

  // La Liga
  {
    file: 'real-madrid-home.svg',
    club: 'Real Madrid',
    brand: 'Adidas',
    bodyColor: '#FFFFFF',
    sleeveColor: '#FFFFFF',
    collarColor: '#FEBE10',
    sponsorText: 'Emirates',
    badgeText: 'RMCF',
    stripePattern: 'none',
    brandLogo: 'adidas',
    accentColor: '#FEBE10',
    textColor: '#1E293B'
  },
  {
    file: 'barcelona-home.svg',
    club: 'FC Barcelona',
    brand: 'Nike',
    bodyColor: '#004D98',
    sleeveColor: '#004D98',
    collarColor: '#EDBB00',
    sponsorText: 'Spotify',
    badgeText: 'FCB',
    stripePattern: 'half',
    stripeColor: '#A50044',
    brandLogo: 'nike',
    accentColor: '#EDBB00',
    textColor: '#EDBB00'
  },
  {
    file: 'atletico-madrid-home.svg',
    club: 'Atletico Madrid',
    brand: 'Nike',
    bodyColor: '#CB3524',
    sleeveColor: '#CB3524',
    collarColor: '#272E61',
    sponsorText: 'RIYADH AIR',
    badgeText: 'ATM',
    stripePattern: 'vertical',
    stripeColor: '#FFFFFF',
    brandLogo: 'nike',
    accentColor: '#272E61',
    textColor: '#FFFFFF'
  },
  {
    file: 'athletic-club-home.svg',
    club: 'Athletic Club Bilbao',
    brand: 'Castore',
    bodyColor: '#EE2524',
    sleeveColor: '#EE2524',
    collarColor: '#FFFFFF',
    sponsorText: 'KUTXABANK',
    badgeText: 'ATH',
    stripePattern: 'vertical',
    stripeColor: '#FFFFFF',
    brandLogo: 'castore',
    accentColor: '#FFFFFF',
    textColor: '#FFFFFF'
  },

  // Ligue 1
  {
    file: 'psg-home.svg',
    club: 'Paris Saint-Germain',
    brand: 'Nike',
    bodyColor: '#004170',
    sleeveColor: '#004170',
    collarColor: '#DA291C',
    sponsorText: 'ALL ACCOR',
    badgeText: 'PSG',
    stripePattern: 'vertical',
    stripeColor: '#DA291C',
    brandLogo: 'nike',
    accentColor: '#FFFFFF',
    textColor: '#FFFFFF'
  },
  {
    file: 'marseille-home.svg',
    club: 'Olympique Marseille',
    brand: 'Puma',
    bodyColor: '#FFFFFF',
    sleeveColor: '#2FAEE0',
    collarColor: '#2FAEE0',
    sponsorText: 'CMA CGM',
    badgeText: 'OM',
    stripePattern: 'none',
    brandLogo: 'puma',
    accentColor: '#2FAEE0',
    textColor: '#2FAEE0'
  },
  {
    file: 'monaco-home.svg',
    club: 'AS Monaco',
    brand: 'Kappa',
    bodyColor: '#ED1C24',
    sleeveColor: '#FFFFFF',
    collarColor: '#FFFFFF',
    sponsorText: 'FEDCOM',
    badgeText: 'ASM',
    stripePattern: 'half',
    stripeColor: '#FFFFFF',
    brandLogo: 'kappa',
    accentColor: '#FFD700',
    textColor: '#FFFFFF'
  },

  // Bundesliga & Serie A
  {
    file: 'bayern-munich-home.svg',
    club: 'Bayern Munich',
    brand: 'Adidas',
    bodyColor: '#DC052D',
    sleeveColor: '#DC052D',
    collarColor: '#FFFFFF',
    sponsorText: 'T . . .',
    badgeText: 'FCB',
    stripePattern: 'none',
    brandLogo: 'adidas',
    accentColor: '#FFFFFF',
    textColor: '#FFFFFF'
  },
  {
    file: 'dortmund-home.svg',
    club: 'Borussia Dortmund',
    brand: 'Puma',
    bodyColor: '#FDE100',
    sleeveColor: '#FDE100',
    collarColor: '#000000',
    sponsorText: '1&1',
    badgeText: 'BVB',
    stripePattern: 'vertical',
    stripeColor: '#000000',
    brandLogo: 'puma',
    accentColor: '#000000',
    textColor: '#000000'
  },
  {
    file: 'leverkusen-home.svg',
    club: 'Bayer Leverkusen',
    brand: 'Castore',
    bodyColor: '#111111',
    sleeveColor: '#111111',
    collarColor: '#E32221',
    sponsorText: 'BARMENIA',
    badgeText: 'B04',
    stripePattern: 'cross',
    stripeColor: '#E32221',
    brandLogo: 'castore',
    accentColor: '#FFD700',
    textColor: '#FFFFFF'
  },
  {
    file: 'juventus-home.svg',
    club: 'Juventus',
    brand: 'Adidas',
    bodyColor: '#111111',
    sleeveColor: '#111111',
    collarColor: '#FFFFFF',
    sponsorText: 'JEEP',
    badgeText: 'JJ',
    stripePattern: 'vertical',
    stripeColor: '#FFFFFF',
    brandLogo: 'adidas',
    accentColor: '#FFD700',
    textColor: '#FFFFFF'
  },
  {
    file: 'inter-milan-home.svg',
    club: 'Inter Milan',
    brand: 'Nike',
    bodyColor: '#010E80',
    sleeveColor: '#010E80',
    collarColor: '#0090D0',
    sponsorText: 'BETSSON',
    badgeText: 'IM',
    stripePattern: 'vertical',
    stripeColor: '#000000',
    brandLogo: 'nike',
    accentColor: '#FFD700',
    textColor: '#FFD700'
  },
  {
    file: 'ac-milan-home.svg',
    club: 'AC Milan',
    brand: 'Puma',
    bodyColor: '#FB090B',
    sleeveColor: '#FB090B',
    collarColor: '#000000',
    sponsorText: 'Emirates',
    badgeText: 'ACM',
    stripePattern: 'vertical',
    stripeColor: '#000000',
    brandLogo: 'puma',
    accentColor: '#FFFFFF',
    textColor: '#FFFFFF'
  },
  {
    file: 'napoli-home.svg',
    club: 'SSC Napoli',
    brand: 'EA7',
    bodyColor: '#12A0D7',
    sleeveColor: '#12A0D7',
    collarColor: '#FFFFFF',
    sponsorText: 'MSC',
    badgeText: 'N',
    stripePattern: 'none',
    brandLogo: 'ea7',
    accentColor: '#FFFFFF',
    textColor: '#FFFFFF'
  },

  // International
  {
    file: 'nigeria-home.svg',
    club: 'Nigeria (Super Eagles)',
    brand: 'Nike',
    bodyColor: '#008751',
    sleeveColor: '#FFFFFF',
    collarColor: '#00FF66',
    sponsorText: 'NAIJA',
    badgeText: 'NGR',
    stripePattern: 'eagle',
    stripeColor: '#FFFFFF',
    brandLogo: 'nike',
    accentColor: '#00FF66',
    textColor: '#FFFFFF'
  },
  {
    file: 'argentina-home.svg',
    club: 'Argentina (3-Star Champions)',
    brand: 'Adidas',
    bodyColor: '#75AADB',
    sleeveColor: '#75AADB',
    collarColor: '#FFFFFF',
    sponsorText: 'AFA ★★★',
    badgeText: 'ARG',
    stripePattern: 'vertical',
    stripeColor: '#FFFFFF',
    brandLogo: 'adidas',
    accentColor: '#FFD700',
    textColor: '#FFD700'
  },
  {
    file: 'brazil-home.svg',
    club: 'Brazil (Seleção Canarinho)',
    brand: 'Nike',
    bodyColor: '#FFDC02',
    sleeveColor: '#FFDC02',
    collarColor: '#009C3B',
    sponsorText: 'BRASIL',
    badgeText: 'CBF',
    stripePattern: 'none',
    brandLogo: 'nike',
    accentColor: '#009C3B',
    textColor: '#009C3B'
  },
  {
    file: 'france-home.svg',
    club: 'France (Les Bleus)',
    brand: 'Nike',
    bodyColor: '#002654',
    sleeveColor: '#002654',
    collarColor: '#CE1126',
    sponsorText: 'FFF',
    badgeText: 'FRA',
    stripePattern: 'none',
    brandLogo: 'nike',
    accentColor: '#FFD700',
    textColor: '#FFFFFF'
  },
  {
    file: 'england-home.svg',
    club: 'England (Three Lions)',
    brand: 'Nike',
    bodyColor: '#FFFFFF',
    sleeveColor: '#FFFFFF',
    collarColor: '#CE1124',
    sponsorText: 'ENGLAND',
    badgeText: 'ENG',
    stripePattern: 'none',
    brandLogo: 'nike',
    accentColor: '#132257',
    textColor: '#132257'
  },
  {
    file: 'portugal-home.svg',
    club: 'Portugal (CR7)',
    brand: 'Nike',
    bodyColor: '#E42518',
    sleeveColor: '#006600',
    collarColor: '#006600',
    sponsorText: 'PORTUGAL',
    badgeText: 'FPF',
    stripePattern: 'half',
    stripeColor: '#006600',
    brandLogo: 'nike',
    accentColor: '#FFD700',
    textColor: '#FFFFFF'
  }
];

// Write all Jerseys
JERSEYS_CONFIG.forEach(cfg => {
  const content = generateJerseySVG(cfg);
  fs.writeFileSync(path.join(publicDir, 'jerseys', cfg.file), content);
});

// Boots config
const BOOTS_CONFIG = [
  {
    file: 'nike-mercurial-superfly.svg',
    name: 'Nike Air Zoom Mercurial Superfly 10 Elite',
    brand: 'Nike',
    primaryColor: '#00FF66', // Electric green
    accentColor: '#0A0A0A',
    plateColor: '#00FF66',
    description: 'Electric Green / Air Zoom Soleplate'
  },
  {
    file: 'adidas-predator-24.svg',
    name: 'Adidas Predator 24 Elite FT Fold-over Tongue',
    brand: 'Adidas',
    primaryColor: '#111111',
    accentColor: '#FF2A2A', // Solar Red
    plateColor: '#FFFFFF',
    description: 'Black / Solar Red / Strikeskin Fins'
  },
  {
    file: 'puma-future-7.svg',
    name: 'Puma Future 7 Ultimate FG/AG',
    brand: 'Puma',
    primaryColor: '#FDE100', // Cyber yellow
    accentColor: '#111111',
    plateColor: '#000000',
    description: 'Fast Yellow / FUZIONFIT360'
  },
  {
    file: 'nike-phantom-luna.svg',
    name: 'Nike Phantom Luna II Elite FG',
    brand: 'Nike',
    primaryColor: '#FF2A85', // Sunset Pulse Pink
    accentColor: '#FFFFFF',
    plateColor: '#1E1E24',
    description: 'Sunset Pulse / Cyclone 360 Soleplate'
  },
  {
    file: 'adidas-f50-elite.svg',
    name: 'Adidas F50 Elite Fast Reborn FG',
    brand: 'Adidas',
    primaryColor: '#8B5CF6', // Chameleon Purple
    accentColor: '#00FF66',
    plateColor: '#00FF66',
    description: 'Chameleon Purple / Sprintframe 360'
  },
  {
    file: 'nike-tiempo-legend.svg',
    name: 'Nike Tiempo Legend 10 Elite FG',
    brand: 'Nike',
    primaryColor: '#FFFFFF',
    accentColor: '#008751',
    plateColor: '#000000',
    description: 'Pure White / FlyTouch Plus Leather'
  }
];

BOOTS_CONFIG.forEach(cfg => {
  const content = generateBootSVG(cfg);
  fs.writeFileSync(path.join(publicDir, 'boots', cfg.file), content);
});

// Balls config
const BALLS_CONFIG = [
  {
    file: 'adidas-ucl-pro-ball.svg',
    name: 'Adidas UEFA Champions League 24/25 Pro Match Ball',
    type: 'ucl',
    primaryColor: '#FFFFFF',
    secondaryColor: '#111111',
    accentColor: '#FFD700',
    starColor: '#0B2341'
  },
  {
    file: 'nike-flight-pl-ball.svg',
    name: 'Nike Flight Premier League 24/25 Official Match Ball',
    type: 'flight',
    primaryColor: '#FFFFFF',
    secondaryColor: '#41B6E6',
    accentColor: '#E63946'
  },
  {
    file: 'adidas-telstar-18-ball.svg',
    name: 'Adidas Telstar 18 FIFA World Cup Official Match Ball',
    type: 'telstar',
    primaryColor: '#F8FAFC',
    secondaryColor: '#1E293B',
    accentColor: '#475569'
  }
];

BALLS_CONFIG.forEach(cfg => {
  const content = generateBallSVG(cfg);
  fs.writeFileSync(path.join(publicDir, 'balls', cfg.file), content);
});

// Gear config
const GEAR_CONFIG = [
  {
    file: 'predator-gloves.svg',
    title: 'Adidas Predator Pro Goalkeeper Gloves',
    subtitle: 'URG 1.0 Sticky Latex + Fingersave',
    icon: '🧤',
    color: '#FF2A2A'
  },
  {
    file: 'rebounder-wall.svg',
    title: 'Pro Dual-Angle Football Rebounder Wall',
    subtitle: '100cm × 100cm Commercial Training Board',
    icon: '🧱',
    color: '#00FF66'
  },
  {
    file: 'agility-ladder-cones.svg',
    title: 'Speed & Agility Elite Training Pack',
    subtitle: '12-Piece Footwork Ladder & Disc Cones',
    icon: '🏃',
    color: '#FFD700'
  },
  {
    file: 'tracksuit-reuben.svg',
    title: 'REUBEN FOOTBALL STORE Trackmaster Fleece',
    subtitle: 'Pitch Black & Emerald Gold Signature Apparel',
    icon: '🧥',
    color: '#107C41'
  }
];

GEAR_CONFIG.forEach(cfg => {
  const content = generateGearSVG(cfg);
  fs.writeFileSync(path.join(publicDir, 'gear', cfg.file), content);
});

console.log('Successfully generated all 41 dedicated, 100% accurate product assets!');

