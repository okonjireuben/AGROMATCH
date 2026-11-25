import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import {
  ShoppingBag,
  Heart,
  Search,
  Menu,
  X,
  Sparkles,
  Flame,
  Award,
  ChevronRight,
  ShieldCheck,
  Globe
} from 'lucide-react';

export default function Navbar() {
  const {
    activeTab,
    setActiveTab,
    cartCount,
    wishlist,
    currency,
    setCurrency,
    searchQuery,
    setSearchQuery,
    setSelectedLeague
  } = useApp();

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);

  const navLinks = [
    { id: 'home', label: 'Home' },
    { id: 'jerseys', label: 'Football Jerseys' },
    { id: 'boots', label: 'Boots' },
    { id: 'equipment', label: 'Match Balls & Gear' },
    { id: 'customizer', label: 'Design Your Jersey', highlight: true },
    { id: 'about', label: 'About Store' },
  ];

  const handleNavClick = (tabId, leagueFilter = null) => {
    setActiveTab(tabId);
    if (leagueFilter) setSelectedLeague(leagueFilter);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      setActiveTab('jerseys');
      setSearchOpen(false);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#0A0A0A]/95 backdrop-blur-md border-b border-[#27272A]">
      {/* Top Announcement Bar */}
      <div className="bg-gradient-to-r from-rf-pitch via-rf-emerald to-rf-pitch py-1.5 px-4 text-center text-xs font-black text-white tracking-wider flex items-center justify-center gap-2">
        <Sparkles className="w-3.5 h-3.5 text-rf-neon animate-pulse" />
        <span>KICKOFF SPECIAL: USE CODE <strong className="text-rf-neon bg-black/40 px-2 py-0.5 rounded">KICKOFF20</strong> FOR 20% OFF ALL JERSEYS & BOOTS</span>
        <span className="hidden md:inline text-white/70">• FREE EXPRESS SHIPPING OVER ₦70,000</span>
      </div>

      {/* Main Nav Container */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20 gap-4">

          {/* BRAND LOGO */}
          <div
            onClick={() => handleNavClick('home')}
            className="flex items-center gap-3 cursor-pointer group"
          >
            {/* Custom Football Emblem Icon */}
            <div className="relative w-11 h-11 rounded-2xl bg-gradient-to-br from-rf-emerald to-rf-pitch border-2 border-rf-neon/40 flex items-center justify-center shadow-neon group-hover:scale-105 transition-transform">
              <span className="text-xl">⚽</span>
              <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-rf-gold text-black rounded-full flex items-center justify-center text-[9px] font-black">
                ★
              </div>
            </div>

            <div>
              <div className="flex items-center gap-1.5">
                <span className="font-display text-2xl sm:text-3xl font-black text-white tracking-wider uppercase leading-none">
                  REUBEN
                </span>
                <span className="font-display text-2xl sm:text-3xl font-black text-rf-neon tracking-wider uppercase leading-none">
                  FOOTBALL
                </span>
                <span className="hidden sm:inline font-display text-2xl sm:text-3xl font-black text-white/80 tracking-wider uppercase leading-none">
                  STORE
                </span>
              </div>
              <p className="text-[9px] sm:text-[10px] font-bold text-slate-400 tracking-widest uppercase">
                Wear Your Passion. Play Your Game.
              </p>
            </div>
          </div>

          {/* DESKTOP NAVIGATION LINKS */}
          <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => handleNavClick(link.id)}
                className={`px-3.5 py-2 rounded-xl text-xs font-bold transition flex items-center gap-1.5 ${activeTab === link.id
                    ? 'bg-rf-pitch text-rf-neon border border-rf-neon/30 shadow-sm'
                    : link.highlight
                      ? 'bg-gradient-to-r from-rf-neon/15 to-rf-gold/15 text-rf-neon border border-rf-neon/40 hover:bg-rf-neon hover:text-black font-extrabold animate-neon-pulse'
                      : 'text-slate-300 hover:text-white hover:bg-white/5'
                  }`}
              >
                {link.highlight && <Flame className="w-3.5 h-3.5 text-rf-gold" />}
                <span>{link.label}</span>
              </button>
            ))}
          </nav>

          {/* RIGHT ACTION CONTROLS */}
          <div className="flex items-center gap-3">

            {/* Currency Selector */}
            <div className="hidden sm:flex items-center bg-[#18181B] rounded-xl border border-[#27272A] p-0.5 text-xs font-bold">
              {['NGN', 'USD', 'GBP'].map((cur) => (
                <button
                  key={cur}
                  onClick={() => setCurrency(cur)}
                  className={`px-2 py-1 rounded-lg transition ${currency === cur ? 'bg-rf-emerald text-white' : 'text-slate-400 hover:text-white'
                    }`}
                >
                  {cur === 'NGN' ? '₦ NGN' : cur === 'USD' ? '$ USD' : '£ GBP'}
                </button>
              ))}
            </div>

            {/* Search Trigger */}
            <div className="relative">
              {searchOpen ? (
                <form onSubmit={handleSearchSubmit} className="flex items-center">
                  <input
                    type="text"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    placeholder="Search Arsenal, Mbappé, Mercurial..."
                    autoFocus
                    className="w-48 sm:w-64 px-3 py-1.5 rounded-xl bg-[#18181B] border border-rf-neon text-xs text-white placeholder-slate-500 outline-none"
                  />
                  <button
                    type="button"
                    onClick={() => setSearchOpen(false)}
                    className="p-1.5 ml-1 text-slate-400 hover:text-white"
                  >
                    <X className="w-4 h-4" />
                  </button>
                </form>
              ) : (
                <button
                  onClick={() => setSearchOpen(true)}
                  className="p-2.5 rounded-xl bg-[#18181B] hover:bg-[#27272A] text-slate-300 hover:text-white transition border border-[#27272A]"
                  title="Search products"
                >
                  <Search className="w-4 h-4" />
                </button>
              )}
            </div>

            {/* Wishlist Heart */}
            <button
              onClick={() => handleNavClick('jerseys')}
              className="relative p-2.5 rounded-xl bg-[#18181B] hover:bg-[#27272A] text-slate-300 hover:text-white transition border border-[#27272A]"
              title="Saved Wishlist"
            >
              <Heart className="w-4 h-4" />
              {wishlist.length > 0 && (
                <span className="absolute -top-1.5 -right-1.5 w-5 h-5 rounded-full bg-rose-500 text-white font-black text-[10px] flex items-center justify-center">
                  {wishlist.length}
                </span>
              )}
            </button>

            {/* Shopping Cart Button */}
            <button
              onClick={() => handleNavClick('cart')}
              className="relative px-3.5 py-2.5 rounded-xl bg-rf-pitch hover:bg-rf-emerald text-rf-neon hover:text-white border border-rf-neon/40 transition flex items-center gap-2 shadow-neon group"
              title="View Cart"
            >
              <ShoppingBag className="w-4 h-4 text-rf-neon group-hover:text-white" />
              <span className="text-xs font-black hidden sm:inline">Cart</span>
              {cartCount > 0 && (
                <span className="w-5 h-5 rounded-full bg-rf-neon text-black font-black text-[11px] flex items-center justify-center shadow-md">
                  {cartCount}
                </span>
              )}
            </button>

            {/* Mobile Menu Toggle Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2.5 rounded-xl bg-[#18181B] text-slate-300 hover:text-white border border-[#27272A]"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* MOBILE DRAWER */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#0A0A0A] border-b border-[#27272A] px-4 pt-4 pb-6 space-y-3">
          <form onSubmit={handleSearchSubmit} className="mb-4">
            <div className="relative">
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search jerseys, boots, clubs..."
                className="w-full px-4 py-3 rounded-xl bg-[#18181B] border border-[#27272A] text-sm text-white placeholder-slate-500 outline-none focus:border-rf-neon"
              />
              <button type="submit" className="absolute right-3 top-3 text-rf-neon">
                <Search className="w-5 h-5" />
              </button>
            </div>
          </form>

          <div className="space-y-1">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => handleNavClick(link.id)}
                className={`w-full py-3 px-4 rounded-xl text-left text-sm font-bold flex items-center justify-between ${activeTab === link.id
                    ? 'bg-rf-pitch text-rf-neon'
                    : link.highlight
                      ? 'bg-gradient-to-r from-rf-neon/20 to-rf-gold/20 text-rf-neon font-black'
                      : 'text-slate-300 hover:bg-white/5'
                  }`}
              >
                <span>{link.label}</span>
                <ChevronRight className="w-4 h-4 text-slate-500" />
              </button>
            ))}
          </div>

          <div className="pt-4 border-t border-[#27272A] flex items-center justify-between text-xs font-bold text-slate-400">
            <span>Currency:</span>
            <div className="flex gap-2">
              {['NGN', 'USD', 'GBP'].map((cur) => (
                <button
                  key={cur}
                  onClick={() => setCurrency(cur)}
                  className={`px-2.5 py-1 rounded-lg border ${currency === cur ? 'bg-rf-neon text-black font-black border-rf-neon' : 'bg-[#18181B] text-white border-[#27272A]'
                    }`}
                >
                  {cur}
                </button>
              ))}
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
