import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import ProductCard from '../components/ProductCard';
import JerseyCustomizer from '../components/JerseyCustomizer';
import { TESTIMONIALS, CLUBS_AND_NATIONS } from '../data/footballData';
import {
  Flame,
  ArrowRight,
  ShieldCheck,
  Truck,
  RotateCcw,
  Sparkles,
  Award,
  Zap,
  Star,
  CheckCircle2,
  MapPin,
  Clock,
  Gift,
  Shirt,
  ShoppingBag
} from 'lucide-react';

export default function HomePage() {
  const {
    products,
    setActiveTab,
    setSelectedLeague,
    formatPrice
  } = useApp();

  const [activeLeagueTab, setActiveLeagueTab] = useState('Premier League');

  // Filter sections
  const featuredJerseys = products.filter(p => p.category === 'Jerseys' && p.featured);
  const bestSellingJerseys = products.filter(
    p => p.category === 'Jerseys' && (activeLeagueTab === 'All' || p.league === activeLeagueTab)
  );
  const featuredBoots = products.filter(p => p.category === 'Boots');
  const featuredEquipment = products.filter(p => p.category === 'Match Balls' || p.category === 'Goalkeeper Gear');

  return (
    <div className="space-y-24 pb-20 overflow-hidden">

      {/* 1. HERO SECTION */}
      <section className="relative min-h-[88vh] flex items-center justify-center pt-12 pb-20 px-4 sm:px-6 lg:px-8 overflow-hidden bg-gradient-to-b from-[#0A0A0A] via-[#0D1610] to-[#0A0A0A]">
        {/* Dynamic Stadium Floodlights Effect */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[700px] h-[450px] bg-rf-pitch/30 rounded-full blur-[140px] pointer-events-none" />
        <div className="absolute top-10 right-10 w-96 h-96 bg-rf-neon/10 rounded-full blur-[120px] pointer-events-none" />

        <div className="max-w-7xl mx-auto w-full relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">

            {/* Left Content (7 cols) */}
            <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
              {/* Season Pill Badge */}
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-rf-pitch/90 border border-rf-neon/40 text-rf-neon text-xs font-black shadow-neon">
                <span className="w-2 h-2 rounded-full bg-rf-neon animate-ping" />
                <span>2024 / 2025 OFFICIAL EUROPEAN & INTERNATIONAL KITS</span>
              </div>

              {/* Main Headline */}
              <h1 className="text-4xl sm:text-6xl xl:text-7xl font-black text-white tracking-tight leading-[1.08] font-display uppercase">
                YOUR ULTIMATE <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-rf-neon via-white to-rf-gold">
                  FOOTBALL DESTINATION.
                </span>
              </h1>

              {/* Slogan & Supporting Description */}
              <p className="text-base sm:text-lg text-slate-300 max-w-2xl font-normal leading-relaxed mx-auto lg:mx-0">
                <strong className="text-white font-bold">"Wear Your Passion. Play Your Game."</strong> Reuben Football Store delivers certified authentic jerseys from the Premier League, La Liga, Ligue 1, and the Super Eagles, alongside pro-spec football boots, match balls, and customized kit printing.
              </p>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 pt-2">
                <button
                  onClick={() => {
                    setActiveTab('jerseys');
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className="px-8 py-4 rounded-2xl bg-gradient-to-r from-rf-emerald via-rf-neon to-rf-emerald hover:brightness-110 text-black font-black text-sm shadow-neon-strong transition transform hover:-translate-y-0.5 flex items-center gap-2"
                >
                  <ShoppingBag className="w-4 h-4 text-black" />
                  <span>SHOP NOW</span>
                  <ArrowRight className="w-4 h-4 text-black" />
                </button>

                <button
                  onClick={() => {
                    setActiveTab('customizer');
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className="px-8 py-4 rounded-2xl bg-[#18181B] hover:bg-[#27272A] text-white border border-[#3F3F46] hover:border-rf-neon font-black text-sm transition flex items-center gap-2 group"
                >
                  <Shirt className="w-4 h-4 text-rf-neon group-hover:scale-110 transition-transform" />
                  <span>DESIGN YOUR JERSEY</span>
                </button>
              </div>

              {/* Mini Highlights */}
              <div className="grid grid-cols-3 gap-4 pt-6 border-t border-[#1F1F23] max-w-lg mx-auto lg:mx-0 text-left">
                <div>
                  <span className="text-xl sm:text-2xl font-black text-white font-display">100%</span>
                  <p className="text-[11px] font-bold text-slate-400 uppercase tracking-wide">Authentic Gear</p>
                </div>
                <div>
                  <span className="text-xl sm:text-2xl font-black text-rf-neon font-display">24-48 HR</span>
                  <p className="text-[11px] font-bold text-slate-400 uppercase tracking-wide">Doorstep Haulage</p>
                </div>
                <div>
                  <span className="text-xl sm:text-2xl font-black text-rf-gold font-display">15,000+</span>
                  <p className="text-[11px] font-bold text-slate-400 uppercase tracking-wide">Kits Printed</p>
                </div>
              </div>
            </div>

            {/* Right Hero Visual (5 cols) */}
            <div className="lg:col-span-5 relative">
              <div className="relative rounded-3xl overflow-hidden border border-[#27272A] shadow-elevated group aspect-[4/5] max-h-[540px] w-full">
                <img
                  src="/products/jerseys/arsenal-home.svg"
                  alt="Arsenal FC 24/25 Home Authentic Jersey"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent" />

                {/* Floating promo badge */}
                <div className="absolute top-5 left-5 bg-black/80 backdrop-blur-md p-3 rounded-2xl border border-rf-neon/40 shadow-neon">
                  <div className="flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-rf-neon animate-pulse" />
                    <span className="text-xs font-black text-white uppercase tracking-wider">Official Matchday Kits</span>
                  </div>
                  <div className="text-[11px] text-rf-neon font-bold mt-0.5">Premier League • Champions League</div>
                </div>

                {/* Floating Bottom Card */}
                <div className="absolute bottom-5 inset-x-5 bg-[#121214]/95 backdrop-blur-md p-4 rounded-2xl border border-[#27272A] flex items-center justify-between">
                  <div>
                    <span className="text-[10px] font-bold text-rf-gold uppercase tracking-wider block">Featured Drop</span>
                    <h4 className="text-sm font-black text-white">Super Eagles 2024/25 Home Kit</h4>
                    <span className="text-xs font-black text-rf-neon">₦52,000</span>
                  </div>

                  <button
                    onClick={() => {
                      setActiveTab('jerseys');
                      setSelectedLeague('International');
                      window.scrollTo({ top: 0, behavior: 'smooth' });
                    }}
                    className="px-3.5 py-2 rounded-xl bg-rf-neon text-black font-black text-xs hover:bg-rf-lime transition"
                  >
                    View Kit
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. PROMOTIONAL GIVEAWAY BANNER */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative rounded-3xl p-6 sm:p-10 bg-gradient-to-r from-rf-pitch via-[#143B20] to-[#0A0A0A] border-2 border-rf-neon/50 shadow-neon-strong overflow-hidden">
          <div className="absolute -right-10 -bottom-10 w-64 h-64 bg-rf-neon/20 rounded-full blur-3xl pointer-events-none" />
          <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="space-y-2 text-center md:text-left">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-rf-gold/20 text-rf-gold border border-rf-gold/40 text-xs font-black uppercase">
                <Gift className="w-4 h-4" />
                MONTHLY REUBEN FOOTBALL GIVEAWAY
              </div>
              <h3 className="text-2xl sm:text-3xl font-black text-white font-display tracking-wide uppercase">
                WIN A SIGNED VICTOR OSIMHEN OR MESSI MATCH SHIRT!
              </h3>
              <p className="text-sm text-slate-300 max-w-xl">
                Every purchase above ₦50,000 this month enters you into our verified VIP prize draw. Winners announced live on our social channels on the 30th!
              </p>
            </div>

            <button
              onClick={() => {
                setActiveTab('jerseys');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="px-8 py-3.5 rounded-2xl bg-rf-gold hover:bg-yellow-400 text-black font-black text-sm transition shadow-gold whitespace-nowrap"
            >
              Enter With Any Order →
            </button>
          </div>
        </div>
      </section>

      {/* 3. AI-GENERATED REUBEN FOOTBALL STORE FLAGSHIP STORE VISUAL */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#121214] rounded-3xl p-6 sm:p-10 border border-[#27272A] shadow-elevated space-y-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
            <div>
              <div className="inline-flex items-center gap-2 text-xs font-black text-rf-neon uppercase tracking-wider mb-1">
                <MapPin className="w-4 h-4" />
                FLAGSHIP STORE EXPERIENCE
              </div>
              <h2 className="text-3xl sm:text-4xl font-black text-white tracking-tight font-display uppercase">
                THE REUBEN FOOTBALL STORE FLAGSHIP
              </h2>
              <p className="text-sm text-slate-400 mt-1 max-w-2xl">
                Step into our state-of-the-art football retail temple. Featuring glowing illuminated boot testing walls, live printing stations, and the full world catalog of official club jerseys.
              </p>
            </div>

            <div className="flex items-center gap-2">
              <span className="px-3 py-1.5 rounded-xl bg-rf-pitch border border-rf-neon/40 text-rf-neon text-xs font-bold flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-rf-neon animate-pulse" />
                Open 7 Days a Week
              </span>
            </div>
          </div>

          {/* THE GENERATED PHOTO */}
          <div className="relative rounded-3xl overflow-hidden border-2 border-rf-neon/40 shadow-2xl group aspect-[16/9] max-h-[580px] w-full bg-[#18181B]">
            <img
              src="/reuben-football-store.jpg"
              alt="REUBEN FOOTBALL STORE Flagship Architectural Exterior"
              className="w-full h-full object-cover group-hover:scale-102 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/20 pointer-events-none" />

            {/* Bottom Floating Flagship Overlay */}
            <div className="absolute bottom-6 left-6 right-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 bg-black/80 backdrop-blur-md p-4 sm:p-5 rounded-2xl border border-white/10">
              <div className="space-y-1">
                <div className="flex items-center gap-2">
                  <span className="font-display text-xl sm:text-2xl font-black text-white tracking-wider uppercase">
                    REUBEN FOOTBALL STORE • LAGOS FLAGSHIP
                  </span>
                  <CheckCircle2 className="w-5 h-5 text-rf-neon" />
                </div>
                <p className="text-xs text-slate-300">
                  Plot 18 Sports Boulevard, Victoria Island, Lagos • Nationwide Express Haulage Available
                </p>
              </div>

              <div className="flex items-center gap-3">
                <button
                  onClick={() => {
                    setActiveTab('jerseys');
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className="px-5 py-2.5 rounded-xl bg-rf-neon hover:bg-rf-lime text-black font-black text-xs transition shadow-neon"
                >
                  Shop In-Store Catalog
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. "THE GAME STARTS HERE" COMMITMENT SECTION */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-12">
          <span className="text-xs font-black text-rf-neon uppercase tracking-widest">
            OUR PROMISE TO FOOTBALL ENTHUSIASTS
          </span>
          <h2 className="text-3xl sm:text-5xl font-black text-white font-display tracking-tight uppercase">
            THE GAME STARTS HERE
          </h2>
          <p className="text-sm sm:text-base text-slate-400 leading-relaxed">
            Every match is defined by passion, precision, and the pride of your colors. At Reuben Football Store, we never compromise on quality. Here is what sets our gear apart:
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-8 rounded-3xl bg-[#121214] border border-[#27272A] hover:border-rf-neon/50 transition-all space-y-4">
            <div className="w-14 h-14 rounded-2xl bg-rf-pitch text-rf-neon flex items-center justify-center font-black">
              <Award className="w-7 h-7" />
            </div>
            <h3 className="text-xl font-black text-white">Direct Manufacturer Sourcing</h3>
            <p className="text-xs text-slate-400 leading-relaxed">
              We work directly with authorized distributors of Nike, Adidas, Puma, and Castore. No cheap knockoffs, no peeling sponsors, only authentic professional sportswear.
            </p>
          </div>

          <div className="p-8 rounded-3xl bg-[#121214] border border-[#27272A] hover:border-rf-neon/50 transition-all space-y-4">
            <div className="w-14 h-14 rounded-2xl bg-rf-pitch text-rf-neon flex items-center justify-center font-black">
              <Zap className="w-7 h-7" />
            </div>
            <h3 className="text-xl font-black text-white">Precision Heat-Press Printing</h3>
            <p className="text-xs text-slate-400 leading-relaxed">
              Our in-house jersey studio utilizes official Premier League and UEFA Champions League flock lettering fonts. Your name and squad number stay vibrant through hundreds of matches.
            </p>
          </div>

          <div className="p-8 rounded-3xl bg-[#121214] border border-[#27272A] hover:border-rf-neon/50 transition-all space-y-4">
            <div className="w-14 h-14 rounded-2xl bg-rf-pitch text-rf-neon flex items-center justify-center font-black">
              <Truck className="w-7 h-7" />
            </div>
            <h3 className="text-xl font-black text-white">Speed & Reliability Across Nigeria</h3>
            <p className="text-xs text-slate-400 leading-relaxed">
              Whether you need kits for your 5-a-side weekend squad or a collector's piece for Saturday's derby, our dedicated logistics hub ensures safe, tracked 24-48 hr delivery.
            </p>
          </div>
        </div>
      </section>

      {/* 5. BEST-SELLING JERSEYS SECTION WITH LEAGUE TABS */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div>
            <span className="text-xs font-black text-rf-neon uppercase tracking-wider">
              24/25 Matchday Collections
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-white font-display tracking-tight uppercase mt-1">
              BEST-SELLING CLUB & NATIONAL JERSEYS
            </h2>
            <p className="text-sm text-slate-400 mt-1">
              Authentic player and fan edition kits from the most competitive leagues on Earth.
            </p>
          </div>

          <button
            onClick={() => {
              setActiveTab('jerseys');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className="text-xs font-bold text-rf-neon hover:text-white flex items-center gap-1 self-start md:self-auto"
          >
            <span>View All 28 Club Kits</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

        {/* League Selector Tabs */}
        <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none">
          {['Premier League', 'La Liga', 'Ligue 1', 'Bundesliga & Serie A', 'International'].map((league) => (
            <button
              key={league}
              onClick={() => setActiveLeagueTab(league)}
              className={`px-4 py-2 rounded-xl text-xs font-bold whitespace-nowrap transition border ${
                activeLeagueTab === league
                  ? 'bg-rf-pitch border-rf-neon text-rf-neon shadow-neon'
                  : 'bg-[#18181B] border-[#27272A] text-slate-400 hover:text-white'
              }`}
            >
              {league}
            </button>
          ))}
        </div>

        {/* Product Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {bestSellingJerseys.slice(0, 4).map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>

      {/* 6. EMBEDDED JERSEY CUSTOMIZER STUDIO */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <JerseyCustomizer />
      </section>

      {/* 7. LATEST FOOTBALL BOOTS COLLECTION */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div>
            <span className="text-xs font-black text-rf-gold uppercase tracking-wider">
              Speed, Touch & Power
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-white font-display tracking-tight uppercase mt-1">
              LATEST ELITE FOOTBALL BOOTS
            </h2>
            <p className="text-sm text-slate-400 mt-1">
              Equipped with Nike Air Zoom, Adidas Strikeskin fins, and lightweight carbon speed plates.
            </p>
          </div>

          <button
            onClick={() => {
              setActiveTab('boots');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className="text-xs font-bold text-rf-gold hover:text-white flex items-center gap-1 self-start md:self-auto"
          >
            <span>Explore All Elite Boots</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {featuredBoots.slice(0, 3).map((boot) => (
            <ProductCard key={boot.id} product={boot} />
          ))}
        </div>
      </section>

      {/* 8. MATCH BALLS & PRO EQUIPMENT */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div>
            <span className="text-xs font-black text-rf-neon uppercase tracking-wider">
              FIFA Quality Pro
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-white font-display tracking-tight uppercase mt-1">
              OFFICIAL MATCH BALLS & GOALKEEPING GEAR
            </h2>
          </div>

          <button
            onClick={() => {
              setActiveTab('equipment');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className="text-xs font-bold text-rf-neon hover:text-white flex items-center gap-1 self-start md:self-auto"
          >
            <span>View All Gear & Balls</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {featuredEquipment.slice(0, 3).map((item) => (
            <ProductCard key={item.id} product={item} />
          ))}
        </div>
      </section>

      {/* 9. TESTIMONIALS & REVIEWS */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        <div className="text-center max-w-2xl mx-auto space-y-2">
          <span className="text-xs font-black text-rf-neon uppercase tracking-wider">
            VOICES FROM THE PITCH
          </span>
          <h2 className="text-3xl sm:text-4xl font-black text-white font-display uppercase tracking-tight">
            TRUSTED BY PLAYERS, COACHES & LEGENDS
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {TESTIMONIALS.map((t) => (
            <div
              key={t.id}
              className="bg-[#121214] border border-[#27272A] rounded-3xl p-6 flex flex-col justify-between space-y-4 hover:border-rf-neon/40 transition-colors"
            >
              <div className="space-y-3">
                <div className="flex gap-1">
                  {[...Array(t.stars)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                  ))}
                </div>

                <p className="text-xs text-slate-300 leading-relaxed italic">
                  "{t.comment}"
                </p>
              </div>

              <div className="pt-4 border-t border-[#1F1F23] flex items-center gap-3">
                <img
                  src={t.avatar}
                  alt={t.name}
                  className="w-11 h-11 rounded-2xl object-cover ring-2 ring-rf-neon/30 shrink-0"
                />
                <div className="min-w-0">
                  <h4 className="text-xs font-bold text-white truncate">{t.name}</h4>
                  <p className="text-[10px] text-rf-neon truncate">{t.role}</p>
                  <span className="text-[9px] text-slate-500 block truncate mt-0.5">
                    ✓ Verified: {t.verifiedPurchase}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
