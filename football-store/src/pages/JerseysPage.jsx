import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import ProductCard from '../components/ProductCard';
import { LEAGUES, CLUBS_AND_NATIONS } from '../data/footballData';
import {
  Filter,
  Search,
  Sparkles,
  Shirt,
  Award,
  Layers
} from 'lucide-react';

export default function JerseysPage() {
  const {
    products,
    selectedLeague,
    setSelectedLeague,
    searchQuery,
    setSearchQuery,
    setActiveTab
  } = useApp();

  const [selectedBrand, setSelectedBrand] = useState('All');
  const [selectedClub, setSelectedClub] = useState('All');
  const [sortBy, setSortBy] = useState('featured');

  // Filter only jerseys
  const allJerseys = products.filter(p => p.category === 'Jerseys');

  // Apply filters
  const filteredJerseys = allJerseys.filter(p => {
    const matchesLeague = selectedLeague === 'All Leagues' || p.league === selectedLeague;
    const matchesBrand = selectedBrand === 'All' || p.brand === selectedBrand;
    const matchesClub = selectedClub === 'All' || p.club === selectedClub;
    const matchesSearch = searchQuery === '' || 
      p.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      p.club.toLowerCase().includes(searchQuery.toLowerCase()) ||
      p.league.toLowerCase().includes(searchQuery.toLowerCase());

    return matchesLeague && matchesBrand && matchesClub && matchesSearch;
  });

  // Sorting
  const sortedJerseys = [...filteredJerseys].sort((a, b) => {
    if (sortBy === 'price-low') return a.price - b.price;
    if (sortBy === 'price-high') return b.price - a.price;
    if (sortBy === 'rating') return b.rating - a.rating;
    return 0;
  });

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-10">

      {/* Header Banner */}
      <div className="relative rounded-3xl p-8 sm:p-12 bg-gradient-to-r from-rf-pitch via-[#0E2E1D] to-[#0A0A0A] border border-rf-neon/30 overflow-hidden shadow-elevated">
        <div className="relative z-10 max-w-2xl space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-rf-neon/15 text-rf-neon border border-rf-neon/30 text-xs font-black uppercase">
            <Shirt className="w-3.5 h-3.5" />
            2024 / 2025 OFFICIAL CLUB & COUNTRY SHIRTS
          </div>

          <h1 className="text-3xl sm:text-5xl font-black text-white font-display uppercase tracking-tight">
            FOOTBALL JERSEYS COLLECTION
          </h1>

          <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
            From the electric pitches of the Premier League to La Liga, Ligue 1, Serie A, and the Super Eagles. Every kit is certified authentic with breathable player-issue technology and official flock lettering.
          </p>

          <div className="pt-2">
            <button
              onClick={() => {
                setActiveTab('customizer');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="px-6 py-2.5 bg-rf-neon hover:bg-rf-lime text-black font-black text-xs rounded-xl shadow-neon transition"
            >
              Open Custom Name & Number Studio →
            </button>
          </div>
        </div>
      </div>

      {/* Filter & Search Bar */}
      <div className="bg-[#121214] border border-[#27272A] rounded-2xl p-4 sm:p-6 space-y-4 shadow-card">
        {/* League Selector Tabs */}
        <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none">
          {LEAGUES.map((league) => (
            <button
              key={league}
              onClick={() => setSelectedLeague(league)}
              className={`px-4 py-2 rounded-xl text-xs font-bold whitespace-nowrap transition border ${
                selectedLeague === league
                  ? 'bg-rf-neon text-black border-rf-neon font-black shadow-neon'
                  : 'bg-[#18181B] border-[#27272A] text-slate-400 hover:text-white'
              }`}
            >
              {league}
            </button>
          ))}
        </div>

        {/* Search, Brand, and Sort Row */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-3 pt-2">
          {/* Keyword Search */}
          <div>
            <div className="relative">
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search club or player..."
                className="w-full pl-9 pr-4 py-2 rounded-xl bg-[#18181B] border border-[#27272A] text-xs text-white placeholder-slate-500 focus:border-rf-neon outline-none"
              />
              <Search className="w-4 h-4 text-slate-500 absolute left-3 top-2.5" />
            </div>
          </div>

          {/* Brand Filter */}
          <div>
            <select
              value={selectedBrand}
              onChange={(e) => setSelectedBrand(e.target.value)}
              className="w-full px-3 py-2 rounded-xl bg-[#18181B] border border-[#27272A] text-xs font-bold text-white focus:border-rf-neon outline-none"
            >
              <option value="All">All Brands (Nike, Adidas, Puma, etc.)</option>
              <option value="Adidas">Adidas</option>
              <option value="Nike">Nike</option>
              <option value="Puma">Puma</option>
              <option value="Castore">Castore</option>
              <option value="Kappa">Kappa</option>
            </select>
          </div>

          {/* Club Filter */}
          <div>
            <select
              value={selectedClub}
              onChange={(e) => setSelectedClub(e.target.value)}
              className="w-full px-3 py-2 rounded-xl bg-[#18181B] border border-[#27272A] text-xs font-bold text-white focus:border-rf-neon outline-none"
            >
              <option value="All">All Clubs & Countries</option>
              {CLUBS_AND_NATIONS.map(c => (
                <option key={c.name} value={c.name}>{c.name}</option>
              ))}
            </select>
          </div>

          {/* Sort By */}
          <div>
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="w-full px-3 py-2 rounded-xl bg-[#18181B] border border-[#27272A] text-xs font-bold text-white focus:border-rf-neon outline-none"
            >
              <option value="featured">Sort by: Featured</option>
              <option value="price-low">Price: Low to High</option>
              <option value="price-high">Price: High to Low</option>
              <option value="rating">Customer Rating</option>
            </select>
          </div>
        </div>
      </div>

      {/* Product Results */}
      <div>
        <div className="flex items-center justify-between mb-6">
          <p className="text-xs font-bold text-slate-400">
            Showing <strong className="text-white">{sortedJerseys.length}</strong> authentic jerseys
          </p>
          {(selectedLeague !== 'All Leagues' || selectedBrand !== 'All' || selectedClub !== 'All' || searchQuery) && (
            <button
              onClick={() => {
                setSelectedLeague('All Leagues');
                setSelectedBrand('All');
                setSelectedClub('All');
                setSearchQuery('');
              }}
              className="text-xs font-bold text-rf-neon hover:underline"
            >
              Reset Filters
            </button>
          )}
        </div>

        {sortedJerseys.length === 0 ? (
          <div className="bg-[#121214] border border-[#27272A] rounded-3xl p-12 text-center space-y-4">
            <Shirt className="w-12 h-12 text-slate-600 mx-auto" />
            <h3 className="text-lg font-black text-white">No Matching Jerseys Found</h3>
            <p className="text-xs text-slate-400">Try adjusting your league or search filters.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {sortedJerseys.map((jersey) => (
              <ProductCard key={jersey.id} product={jersey} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

