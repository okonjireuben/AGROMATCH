import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import ProductCard from '../components/ProductCard';
import { Zap, Sparkles, Filter, Award } from 'lucide-react';

export default function BootsPage() {
  const { products } = useApp();
  const [selectedBrand, setSelectedBrand] = useState('All');
  const [selectedSurface, setSelectedSurface] = useState('All');

  const boots = products.filter(p => p.category === 'Boots');

  const filteredBoots = boots.filter(b => {
    const matchesBrand = selectedBrand === 'All' || b.brand === selectedBrand;
    return matchesBrand;
  });

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-10">
      {/* Header Banner */}
      <div className="relative rounded-3xl p-8 sm:p-12 bg-gradient-to-r from-[#17171C] via-[#0E2E1D] to-[#0A0A0A] border border-rf-gold/30 shadow-elevated">
        <div className="max-w-2xl space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-rf-gold/15 text-rf-gold border border-rf-gold/30 text-xs font-black uppercase">
            <Zap className="w-3.5 h-3.5" />
            ELITE PRO FOOTBALL BOOTS
          </div>
          <h1 className="text-3xl sm:text-5xl font-black text-white font-display uppercase tracking-tight">
            FOOTBALL BOOTS COLLECTION
          </h1>
          <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
            Worn by the world's most lethal forwards and clinical playmakers. Experience Nike Air Zoom Mercurial, Adidas Predator Strikeskin, and Puma Future agility technology.
          </p>
        </div>
      </div>

      {/* Filter Bar */}
      <div className="flex flex-wrap items-center justify-between gap-4 p-4 rounded-2xl bg-[#121214] border border-[#27272A]">
        <div className="flex items-center gap-2">
          <span className="text-xs font-bold text-slate-400">Brand:</span>
          {['All', 'Nike', 'Adidas', 'Puma'].map(br => (
            <button
              key={br}
              onClick={() => setSelectedBrand(br)}
              className={`px-3 py-1.5 rounded-xl text-xs font-bold border transition ${
                selectedBrand === br
                  ? 'bg-rf-gold text-black border-rf-gold shadow-sm'
                  : 'bg-[#18181B] border-[#27272A] text-slate-300 hover:text-white'
              }`}
            >
              {br}
            </button>
          ))}
        </div>

        <p className="text-xs font-bold text-slate-400">
          Showing <strong className="text-white">{filteredBoots.length}</strong> elite models
        </p>
      </div>

      {/* Boots Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {filteredBoots.map(boot => (
          <ProductCard key={boot.id} product={boot} />
        ))}
      </div>
    </div>
  );
}

