import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import ProductCard from '../components/ProductCard';
import { Award, Sparkles } from 'lucide-react';

export default function EquipmentPage() {
  const { products } = useApp();
  const [selectedSubCat, setSelectedSubCat] = useState('All');

  const gear = products.filter(
    p => p.category === 'Match Balls' || p.category === 'Training Equipment' || p.category === 'Goalkeeper Gear' || p.category === 'Accessories'
  );

  const filteredGear = gear.filter(g => {
    if (selectedSubCat === 'All') return true;
    return g.category === selectedSubCat;
  });

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-10">
      {/* Header Banner */}
      <div className="relative rounded-3xl p-8 sm:p-12 bg-gradient-to-r from-rf-pitch via-[#0E2E1D] to-[#0A0A0A] border border-rf-neon/30 shadow-elevated">
        <div className="max-w-2xl space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-rf-neon/15 text-rf-neon border border-rf-neon/30 text-xs font-black uppercase">
            <Award className="w-3.5 h-3.5" />
            FIFA QUALITY PRO & PRO TRAINING
          </div>
          <h1 className="text-3xl sm:text-5xl font-black text-white font-display uppercase tracking-tight">
            MATCH BALLS & PRO EQUIPMENT
          </h1>
          <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
            Official UEFA Champions League and Premier League match balls, Predator Pro goalkeeper gloves, rebounder walls, and team agility equipment.
          </p>
        </div>
      </div>

      {/* Tabs */}
      <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none">
        {['All', 'Match Balls', 'Goalkeeper Gear', 'Training Equipment', 'Accessories'].map(cat => (
          <button
            key={cat}
            onClick={() => setSelectedSubCat(cat)}
            className={`px-4 py-2 rounded-xl text-xs font-bold whitespace-nowrap transition border ${
              selectedSubCat === cat
                ? 'bg-rf-neon text-black border-rf-neon font-black shadow-neon'
                : 'bg-[#18181B] border-[#27272A] text-slate-400 hover:text-white'
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {filteredGear.map(item => (
          <ProductCard key={item.id} product={item} />
        ))}
      </div>
    </div>
  );
}

