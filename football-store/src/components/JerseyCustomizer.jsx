import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import { CLUBS_AND_NATIONS, SLEEVE_BADGES } from '../data/footballData';
import {
  RotateCcw,
  Sparkles,
  ShoppingBag,
  CheckCircle2,
  Layers,
  Award,
  Zap,
  Tag
} from 'lucide-react';

export default function JerseyCustomizer({ initialClub = "Nigeria (Super Eagles)", onAdded }) {
  const { addToCart, showNotification } = useApp();

  const [selectedClubName, setSelectedClubName] = useState(initialClub);
  const [kitType, setKitType] = useState('Home'); // Home, Away, Third
  const [viewAngle, setViewAngle] = useState('back'); // 'back' or 'front'
  const [playerName, setPlayerName] = useState('REUBEN');
  const [playerNumber, setPlayerNumber] = useState('10');
  const [size, setSize] = useState('L');
  const [edition, setEdition] = useState('Player Match Edition'); // or 'Stadium Fan Edition'
  const [selectedBadgeId, setSelectedBadgeId] = useState('badge-fifa');

  const clubObj = CLUBS_AND_NATIONS.find(c => c.name === selectedClubName) || CLUBS_AND_NATIONS[0];
  const badgeObj = SLEEVE_BADGES.find(b => b.id === selectedBadgeId) || SLEEVE_BADGES[0];

  const basePrice = edition === 'Player Match Edition' ? 52000 : 44000;
  const printingPrice = (playerName || playerNumber) ? 4500 : 0;
  const badgePrice = badgeObj.price;
  const totalPrice = basePrice + printingPrice + badgePrice;

  // Kit color palette based on club and kitType
  const getKitColors = () => {
    if (selectedClubName.includes('Nigeria')) {
      if (kitType === 'Home') return { body: '#008751', secondary: '#FFFFFF', pattern: 'eagle', text: '#FFFFFF', accent: '#70FF00' };
      if (kitType === 'Away') return { body: '#024D30', secondary: '#00FF66', pattern: 'forest', text: '#00FF66', accent: '#FFFFFF' };
      return { body: '#FFFFFF', secondary: '#008751', pattern: 'clean', text: '#008751', accent: '#008751' };
    }
    if (selectedClubName.includes('Arsenal')) {
      if (kitType === 'Home') return { body: '#EF0107', secondary: '#FFFFFF', pattern: 'cannon', text: '#FFFFFF', accent: '#034694' };
      if (kitType === 'Away') return { body: '#111111', secondary: '#00FF66', pattern: 'heritage', text: '#00FF66', accent: '#DA291C' };
      return { body: '#24B6B1', secondary: '#0B2341', pattern: 'aqua', text: '#0B2341', accent: '#FFFFFF' };
    }
    if (selectedClubName.includes('Real Madrid')) {
      if (kitType === 'Home') return { body: '#FFFFFF', secondary: '#FEBE10', pattern: 'crown', text: '#1E293B', accent: '#FEBE10' };
      if (kitType === 'Away') return { body: '#FF6600', secondary: '#1E293B', pattern: 'fire', text: '#FFFFFF', accent: '#1E293B' };
      return { body: '#475569', secondary: '#FEBE10', pattern: 'charcoal', text: '#FEBE10', accent: '#FFFFFF' };
    }
    if (selectedClubName.includes('Barcelona')) {
      if (kitType === 'Home') return { body: '#004D98', secondary: '#A50044', pattern: 'blaugrana', text: '#EDBB00', accent: '#EDBB00' };
      if (kitType === 'Away') return { body: '#111111', secondary: '#EDBB00', pattern: 'stealth', text: '#EDBB00', accent: '#004D98' };
      return { body: '#70FF00', secondary: '#004D98', pattern: 'volt', text: '#004D98', accent: '#004D98' };
    }
    if (selectedClubName.includes('Argentina')) {
      if (kitType === 'Home') return { body: '#75AADB', secondary: '#FFFFFF', pattern: 'albiceleste', text: '#D4AF37', accent: '#D4AF37' };
      if (kitType === 'Away') return { body: '#1E293B', secondary: '#75AADB', pattern: 'sol', text: '#D4AF37', accent: '#75AADB' };
      return { body: '#0F172A', secondary: '#D4AF37', pattern: 'darkgold', text: '#D4AF37', accent: '#FFFFFF' };
    }
    if (selectedClubName.includes('Paris Saint-Germain')) {
      if (kitType === 'Home') return { body: '#004170', secondary: '#DA291C', pattern: 'hechter', text: '#FFFFFF', accent: '#DA291C' };
      if (kitType === 'Away') return { body: '#FFFFFF', secondary: '#004170', pattern: 'eiffel', text: '#004170', accent: '#DA291C' };
      return { body: '#C8A2C8', secondary: '#004170', pattern: 'jordan', text: '#004170', accent: '#DA291C' };
    }
    // Default fallback
    return {
      body: clubObj.primaryColor || '#0B3B24',
      secondary: clubObj.secondaryColor || '#FFFFFF',
      pattern: 'modern',
      text: clubObj.secondaryColor === '#000000' ? '#000000' : '#FFFFFF',
      accent: '#FFD700'
    };
  };

  const colors = getKitColors();

  const handleAddToCart = () => {
    // Helper to get image matching selected club
    const getClubJerseyImage = (clubName) => {
      const lower = clubName.toLowerCase();
      if (lower.includes('arsenal')) return '/products/jerseys/arsenal-home.svg';
      if (lower.includes('real madrid')) return '/products/jerseys/real-madrid-home.svg';
      if (lower.includes('barcelona')) return '/products/jerseys/barcelona-home.svg';
      if (lower.includes('nigeria')) return '/products/jerseys/nigeria-home.svg';
      if (lower.includes('manchester united')) return '/products/jerseys/manchester-united-home.svg';
      if (lower.includes('manchester city')) return '/products/jerseys/manchester-city-home.svg';
      if (lower.includes('liverpool')) return '/products/jerseys/liverpool-home.svg';
      if (lower.includes('chelsea')) return '/products/jerseys/chelsea-home.svg';
      if (lower.includes('paris') || lower.includes('psg')) return '/products/jerseys/psg-home.svg';
      if (lower.includes('argentina')) return '/products/jerseys/argentina-home.svg';
      if (lower.includes('brazil')) return '/products/jerseys/brazil-home.svg';
      if (lower.includes('france')) return '/products/jerseys/france-home.svg';
      if (lower.includes('portugal')) return '/products/jerseys/portugal-home.svg';
      if (lower.includes('bayern')) return '/products/jerseys/bayern-munich-home.svg';
      if (lower.includes('dortmund')) return '/products/jerseys/dortmund-home.svg';
      if (lower.includes('inter')) return '/products/jerseys/inter-milan-home.svg';
      if (lower.includes('milan')) return '/products/jerseys/ac-milan-home.svg';
      if (lower.includes('juventus')) return '/products/jerseys/juventus-home.svg';
      return '/products/jerseys/nigeria-home.svg';
    };

    const customizedProduct = {
      id: `custom-${Date.now()}`,
      name: `${selectedClubName} 24/25 ${kitType} Custom Jersey (${playerName} #${playerNumber})`,
      category: 'Jerseys',
      price: totalPrice,
      originalPrice: totalPrice + 10000,
      image: getClubJerseyImage(selectedClubName),
      type: `${edition} (${size})`,
      customDetails: {
        club: selectedClubName,
        kit: kitType,
        name: playerName,
        number: playerNumber,
        size,
        badge: badgeObj.name,
        edition
      }
    };

    addToCart(customizedProduct, 1);
    showNotification(`Custom ${selectedClubName} #${playerNumber} added to cart!`);
    if (onAdded) onAdded();
  };

  return (
    <div className="bg-[#121214] border border-[#27272A] rounded-3xl p-6 sm:p-8 shadow-elevated">
      <div className="flex flex-col lg:flex-row gap-8 items-center lg:items-start">

        {/* LEFT: LIVE JERSEY VISUALIZER CANVAS (5 cols) */}
        <div className="w-full lg:w-5/12 flex flex-col items-center">
          <div className="relative w-full max-w-[380px] aspect-[4/5] bg-gradient-to-b from-[#18181B] via-[#0D0D0E] to-[#0A0A0A] rounded-3xl p-6 border border-[#27272A] flex flex-col items-center justify-center overflow-hidden shadow-2xl">
            {/* Background stadium floodlight ambience */}
            <div className="absolute top-0 inset-x-0 h-40 bg-radial-gradient from-rf-neon/15 via-transparent to-transparent pointer-events-none" />

            {/* View angle badge button */}
            <div className="absolute top-4 left-4 z-20 flex gap-1.5 bg-[#000000]/70 backdrop-blur-md p-1 rounded-full border border-white/10">
              <button
                onClick={() => setViewAngle('front')}
                className={`px-3 py-1 text-xs font-bold rounded-full transition ${
                  viewAngle === 'front' ? 'bg-rf-neon text-black shadow-neon' : 'text-slate-400 hover:text-white'
                }`}
              >
                Front View
              </button>
              <button
                onClick={() => setViewAngle('back')}
                className={`px-3 py-1 text-xs font-bold rounded-full transition ${
                  viewAngle === 'back' ? 'bg-rf-neon text-black shadow-neon' : 'text-slate-400 hover:text-white'
                }`}
              >
                Back View (Name & Number)
              </button>
            </div>

            {/* Flip toggle shortcut icon */}
            <button
              onClick={() => setViewAngle(prev => prev === 'front' ? 'back' : 'front')}
              className="absolute top-4 right-4 z-20 p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition backdrop-blur-md"
              title="Flip Jersey"
            >
              <RotateCcw className="w-4 h-4" />
            </button>

            {/* SVG REALISTIC SHIRT MOCKUP */}
            <div className="relative w-full h-full flex items-center justify-center transform hover:scale-105 transition-transform duration-500 drop-shadow-[0_20px_25px_rgba(0,0,0,0.8)]">
              <svg viewBox="0 0 400 480" className="w-full h-full max-h-[380px]">
                <defs>
                  <linearGradient id="jerseyShine" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#ffffff" stopOpacity="0.25" />
                    <stop offset="50%" stopColor="#ffffff" stopOpacity="0.0" />
                    <stop offset="100%" stopColor="#000000" stopOpacity="0.35" />
                  </linearGradient>

                  <filter id="shadowFilter" x="-10%" y="-10%" width="130%" height="130%">
                    <feDropShadow dx="0" dy="10" stdDeviation="12" floodColor="#000000" floodOpacity="0.8" />
                  </filter>
                </defs>

                {/* Jersey Body Path */}
                <g filter="url(#shadowFilter)">
                  {/* Left Sleeve */}
                  <path
                    d="M 110 70 L 30 140 L 70 190 L 120 145 Z"
                    fill={colors.secondary}
                    stroke="#111111"
                    strokeWidth="1.5"
                  />
                  {/* Right Sleeve */}
                  <path
                    d="M 290 70 L 370 140 L 330 190 L 280 145 Z"
                    fill={colors.secondary}
                    stroke="#111111"
                    strokeWidth="1.5"
                  />

                  {/* Main Torso */}
                  <path
                    d="M 120 70 
                       C 140 85, 260 85, 280 70 
                       L 300 150 
                       L 290 440 
                       C 200 450, 200 450, 110 440 
                       L 100 150 Z"
                    fill={colors.body}
                    stroke="#111111"
                    strokeWidth="2"
                  />

                  {/* Collar */}
                  <path
                    d="M 140 70 C 170 100, 230 100, 260 70 C 230 82, 170 82, 140 70 Z"
                    fill={colors.secondary}
                  />

                  {/* Jersey Texture Overlays */}
                  <path
                    d="M 120 70 C 140 85, 260 85, 280 70 L 300 150 L 290 440 C 200 450, 200 450, 110 440 L 100 150 Z"
                    fill="url(#jerseyShine)"
                  />
                </g>

                {/* Sleeve Badge Icon on Right Sleeve */}
                {badgeObj.id !== 'badge-none' && (
                  <g transform="translate(325, 145) scale(0.9)">
                    <circle cx="12" cy="12" r="14" fill="#0A0A0A" stroke="#FFD700" strokeWidth="2" />
                    <text x="12" y="17" textAnchor="middle" fontSize="13" fill="#FFD700">
                      {badgeObj.icon}
                    </text>
                  </g>
                )}

                {/* VIEW ANGLE CONTENT: FRONT OR BACK */}
                {viewAngle === 'back' ? (
                  /* BACK VIEW: NAME & NUMBER */
                  <g>
                    {/* Player Name */}
                    <text
                      x="200"
                      y="170"
                      textAnchor="middle"
                      fill={colors.text}
                      fontSize="36"
                      fontWeight="900"
                      fontFamily="Teko, sans-serif"
                      letterSpacing="4"
                      className="select-none"
                    >
                      {playerName.toUpperCase() || "NAME"}
                    </text>

                    {/* Squad Number */}
                    <text
                      x="200"
                      y="310"
                      textAnchor="middle"
                      fill={colors.text}
                      fontSize="140"
                      fontWeight="900"
                      fontFamily="Teko, sans-serif"
                      letterSpacing="2"
                      className="select-none"
                      stroke={colors.body === '#FFFFFF' ? '#1E293B' : 'transparent'}
                      strokeWidth="1"
                    >
                      {playerNumber || "10"}
                    </text>

                    {/* Lower back sponsor / ventilation detail */}
                    <line x1="150" y1="365" x2="250" y2="365" stroke={colors.secondary} strokeWidth="2" strokeDasharray="6 4" opacity="0.6" />
                    <text x="200" y="390" textAnchor="middle" fill={colors.secondary} fontSize="11" fontWeight="700" letterSpacing="3" opacity="0.8">
                      REUBEN FOOTBALL PRO
                    </text>
                  </g>
                ) : (
                  /* FRONT VIEW: CREST, SPONSOR & LOGO */
                  <g>
                    {/* Brand Swoosh / Three Stripes representation */}
                    <path
                      d="M 140 135 Q 160 145 175 130"
                      stroke={colors.secondary}
                      strokeWidth="4"
                      fill="none"
                      strokeLinecap="round"
                    />

                    {/* Club Crest Simulation */}
                    <g transform="translate(225, 120)">
                      <circle cx="15" cy="15" r="16" fill={colors.secondary} stroke="#FFD700" strokeWidth="1.5" />
                      <circle cx="15" cy="15" r="12" fill={colors.body} />
                      <text x="15" y="19" textAnchor="middle" fontSize="11" fontWeight="900" fill={colors.secondary}>
                        ⚽
                      </text>
                    </g>

                    {/* Main Chest Sponsor */}
                    <rect x="145" y="225" width="110" height="36" rx="6" fill="#000000" fillOpacity="0.25" />
                    <text
                      x="200"
                      y="248"
                      textAnchor="middle"
                      fill={colors.secondary}
                      fontSize="17"
                      fontWeight="900"
                      letterSpacing="2"
                      fontFamily="Teko, sans-serif"
                    >
                      FLY BETTER
                    </text>

                    {/* Authentic Match Badge on bottom hem */}
                    <rect x="250" y="405" width="30" height="18" rx="2" fill="#D4AF37" />
                    <text x="265" y="418" textAnchor="middle" fill="#000000" fontSize="8" fontWeight="900">
                      PRO
                    </text>
                  </g>
                )}
              </svg>
            </div>

            {/* Bottom summary pill */}
            <div className="mt-2 text-center text-xs font-semibold text-slate-400">
              <span className="text-rf-neon font-bold">{selectedClubName}</span> • {kitType} Kit
            </div>
          </div>
        </div>

        {/* RIGHT: CUSTOMIZATION CONTROLS (7 cols) */}
        <div className="w-full lg:w-7/12 space-y-6">
          <div>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-rf-neon/10 border border-rf-neon/30 text-rf-neon text-xs font-black uppercase tracking-wider mb-2">
              <Zap className="w-3.5 h-3.5" />
              Live Interactive Jersey Studio
            </div>
            <h2 className="text-2xl sm:text-3xl font-black text-white tracking-tight">
              Design Your Personalized Match Jersey
            </h2>
            <p className="text-sm text-slate-400 mt-1">
              Select any world club or national squad, choose edition, enter your custom name and squad number with official heat-press lettering.
            </p>
          </div>

          {/* 1. Club / Nation Selection Dropdown */}
          <div className="space-y-2">
            <label className="text-xs font-bold text-slate-300 uppercase tracking-wider block">
              1. Select Club or National Team
            </label>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
              {CLUBS_AND_NATIONS.slice(0, 9).map(c => (
                <button
                  key={c.name}
                  onClick={() => setSelectedClubName(c.name)}
                  className={`py-2 px-3 rounded-xl text-xs font-bold text-left truncate transition border ${
                    selectedClubName === c.name
                      ? 'bg-rf-pitch border-rf-neon text-rf-neon shadow-sm'
                      : 'bg-[#18181B] border-[#27272A] text-slate-300 hover:border-slate-500'
                  }`}
                >
                  {c.name}
                </button>
              ))}
            </div>
            {/* Extended dropdown for all other clubs */}
            <select
              value={selectedClubName}
              onChange={e => setSelectedClubName(e.target.value)}
              className="w-full mt-2 px-4 py-2.5 rounded-xl bg-[#18181B] border border-[#27272A] text-white text-xs font-bold focus:border-rf-neon outline-none"
            >
              {CLUBS_AND_NATIONS.map(c => (
                <option key={c.name} value={c.name} className="bg-black text-white">
                  {c.name} ({c.league})
                </option>
              ))}
            </select>
          </div>

          {/* 2. Kit Edition & Type Selection */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="text-xs font-bold text-slate-300 uppercase tracking-wider block mb-1.5">
                2. Kit Variation
              </label>
              <div className="flex gap-2">
                {['Home', 'Away', 'Third'].map(k => (
                  <button
                    key={k}
                    onClick={() => setKitType(k)}
                    className={`flex-1 py-2 rounded-xl text-xs font-bold border transition ${
                      kitType === k
                        ? 'bg-rf-neon text-black border-rf-neon shadow-neon'
                        : 'bg-[#18181B] border-[#27272A] text-slate-400 hover:text-white'
                    }`}
                  >
                    {k}
                  </button>
                ))}
              </div>
            </div>

            <div>
              <label className="text-xs font-bold text-slate-300 uppercase tracking-wider block mb-1.5">
                3. Fabric Tier
              </label>
              <div className="flex gap-2">
                {[
                  { id: 'Player Match Edition', label: 'Player Pro' },
                  { id: 'Stadium Fan Edition', label: 'Fan Standard' }
                ].map(ed => (
                  <button
                    key={ed.id}
                    onClick={() => setEdition(ed.id)}
                    className={`flex-1 py-2 px-2 rounded-xl text-xs font-bold border transition truncate ${
                      edition === ed.id
                        ? 'bg-white text-black border-white shadow-sm'
                        : 'bg-[#18181B] border-[#27272A] text-slate-400 hover:text-white'
                    }`}
                  >
                    {ed.label}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* 3. Name & Number Inputs */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            <div className="sm:col-span-2">
              <label className="text-xs font-bold text-slate-300 uppercase tracking-wider block mb-1.5">
                4. Custom Back Name
              </label>
              <input
                type="text"
                maxLength={12}
                value={playerName}
                onChange={e => {
                  setPlayerName(e.target.value.toUpperCase());
                  setViewAngle('back');
                }}
                placeholder="YOUR NAME"
                className="w-full px-4 py-2.5 rounded-xl bg-[#18181B] border border-[#27272A] text-white font-bold tracking-wider text-sm focus:border-rf-neon focus:ring-1 focus:ring-rf-neon outline-none uppercase"
              />
            </div>

            <div>
              <label className="text-xs font-bold text-slate-300 uppercase tracking-wider block mb-1.5">
                Squad Number
              </label>
              <input
                type="number"
                min={1}
                max={99}
                value={playerNumber}
                onChange={e => {
                  setPlayerNumber(e.target.value);
                  setViewAngle('back');
                }}
                className="w-full px-4 py-2.5 rounded-xl bg-[#18181B] border border-[#27272A] text-white font-black text-center text-sm focus:border-rf-neon focus:ring-1 focus:ring-rf-neon outline-none"
              />
            </div>
          </div>

          {/* 4. Size & Sleeve Badges */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="text-xs font-bold text-slate-300 uppercase tracking-wider block mb-1.5">
                5. Select Fit Size
              </label>
              <div className="flex gap-1.5">
                {['S', 'M', 'L', 'XL', '2XL'].map(s => (
                  <button
                    key={s}
                    onClick={() => setSize(s)}
                    className={`flex-1 py-2 rounded-xl text-xs font-bold border transition ${
                      size === s
                        ? 'bg-rf-neon text-black border-rf-neon font-black'
                        : 'bg-[#18181B] border-[#27272A] text-slate-300 hover:text-white'
                    }`}
                  >
                    {s}
                  </button>
                ))}
              </div>
            </div>

            <div>
              <label className="text-xs font-bold text-slate-300 uppercase tracking-wider block mb-1.5">
                6. Official Sleeve Badge
              </label>
              <select
                value={selectedBadgeId}
                onChange={e => setSelectedBadgeId(e.target.value)}
                className="w-full px-3 py-2 rounded-xl bg-[#18181B] border border-[#27272A] text-white text-xs font-bold focus:border-rf-neon outline-none"
              >
                {SLEEVE_BADGES.map(b => (
                  <option key={b.id} value={b.id} className="bg-black text-white">
                    {b.icon ? `${b.icon} ` : ''}{b.name} (+₦{b.price.toLocaleString()})
                  </option>
                ))}
              </select>
            </div>
          </div>

          {/* Pricing & Add to Cart Action */}
          <div className="pt-4 border-t border-[#27272A] flex flex-col sm:flex-row items-center justify-between gap-4">
            <div>
              <span className="text-xs text-slate-400 block font-medium">Custom Kit Total Price</span>
              <div className="flex items-baseline gap-2">
                <span className="text-2xl font-black text-rf-neon">₦{totalPrice.toLocaleString()}</span>
                <span className="text-xs text-slate-500 line-through">₦{(totalPrice + 12000).toLocaleString()}</span>
                <span className="text-[11px] font-bold text-rf-gold bg-rf-gold/10 px-2 py-0.5 rounded">Special Promo</span>
              </div>
            </div>

            <button
              onClick={handleAddToCart}
              className="w-full sm:w-auto px-8 py-4 bg-gradient-to-r from-rf-emerald via-rf-neon to-rf-emerald hover:brightness-110 text-black font-black text-sm rounded-2xl shadow-neon transition flex items-center justify-center gap-2 transform active:scale-95"
            >
              <ShoppingBag className="w-5 h-5 text-black" />
              <span>Add Custom Kit to Cart</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

