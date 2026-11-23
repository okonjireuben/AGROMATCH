import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import {
  TrendingDown,
  ArrowRight,
  TrendingUp,
  MapPin,
  CheckCircle2,
  Calendar,
  Sparkles
} from 'lucide-react';

export default function PriceComparisonPage() {
  const { products, setActiveTab, navigateToProduct } = useApp();
  const [selectedCrop, setSelectedCrop] = useState('All Produce');

  // Benchmark Comparison Data comparing Agromatch farm gate rates with typical city open market rates
  const COMPARISONS = [
    {
      crop: 'Abakaliki Long Grain Rice (50kg)',
      agromatchPrice: 68000,
      openMarketPrice: 84000,
      savings: '₦16,000 (19% Savings)',
      unit: '50kg bag',
      origin: 'Ebonyi State (Direct from Mill)',
      sourceMarket: 'Mile 12 / Bodija Market',
      trend: 'down'
    },
    {
      crop: 'Kano Roma Tomatoes (Raffia Basket)',
      agromatchPrice: 34000,
      openMarketPrice: 48000,
      savings: '₦14,000 (29% Savings)',
      unit: 'Large basket (~45kg)',
      origin: 'Kano State (Irrigation Basin)',
      sourceMarket: 'Ketu / Wuse Market',
      trend: 'down'
    },
    {
      crop: 'Zaki-Biam Grade-1 White Yams',
      agromatchPrice: 125000,
      openMarketPrice: 165000,
      savings: '₦40,000 (24% Savings)',
      unit: 'Bundle of 100 Tubers',
      origin: 'Benue State (Food Basket)',
      sourceMarket: 'Mile 12 Market Lagos',
      trend: 'down'
    },
    {
      crop: 'Pure Red Palm Oil (25L Jerrycan)',
      agromatchPrice: 32500,
      openMarketPrice: 42000,
      savings: '₦9,500 (22.6% Savings)',
      unit: '25L Jerrycan',
      origin: 'Abia / Nsukka Mills',
      sourceMarket: 'Oyingbo Market Lagos',
      trend: 'down'
    },
    {
      crop: 'Fresh Table Catfish (50kg Lot)',
      agromatchPrice: 95000,
      openMarketPrice: 120000,
      savings: '₦25,000 (20.8% Savings)',
      unit: '50kg Lot (~1.5kg each)',
      origin: 'Rivers / Delta Wetlands',
      sourceMarket: 'Ijora Fishery Port',
      trend: 'down'
    },
    {
      crop: 'Jumbo Table Brown Eggs (30 Crates)',
      agromatchPrice: 115000,
      openMarketPrice: 138000,
      savings: '₦23,000 (16.6% Savings)',
      unit: 'Bundle of 30 Crates',
      origin: 'Oyo Integrated Poultry',
      sourceMarket: 'Agege Wholesale Market',
      trend: 'down'
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-10">
      {/* Header Banner */}
      <div className="bg-gradient-to-r from-agro-forest via-emerald-800 to-agro-green rounded-3xl p-8 sm:p-10 text-white relative overflow-hidden shadow-xl">
        <div className="max-w-2xl relative z-10 space-y-4">
          <span className="inline-flex items-center gap-1.5 bg-lime-400 text-agro-forest text-xs font-black px-3 py-1 rounded-full uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5" />
            Transparent Nigerian Farm Gate Intelligence
          </span>
          <h1 className="text-3xl sm:text-4xl font-black tracking-tight">
            Farm Gate vs. Middleman Market Prices
          </h1>
          <p className="text-sm sm:text-base text-white/80 leading-relaxed">
            Compare actual direct-from-farm listings on AGROMATCH against open market wholesale prices across Lagos, Abuja, and Port Harcourt. Eliminate middlemen markups and save an average of 18% to 32% on bulk agricultural produce.
          </p>
        </div>
      </div>

      {/* Comparison Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {COMPARISONS.map((comp, idx) => (
          <div
            key={idx}
            className="bg-white rounded-3xl p-6 border border-slate-200/80 shadow-soft hover:shadow-elevated transition-all flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center justify-between gap-2 mb-3">
                <span className="text-xs font-bold text-agro-green">{comp.unit}</span>
                <span className="inline-flex items-center gap-1 text-[11px] font-extrabold text-emerald-700 bg-emerald-50 px-2.5 py-1 rounded-full border border-emerald-200/60">
                  <TrendingDown className="w-3.5 h-3.5" />
                  {comp.savings}
                </span>
              </div>

              <h3 className="font-bold text-slate-900 text-lg leading-snug mb-2">{comp.crop}</h3>

              <div className="flex items-center gap-1.5 text-xs text-slate-500 mb-5">
                <MapPin className="w-3.5 h-3.5 text-agro-green" />
                <span>{comp.origin}</span>
              </div>

              {/* Price comparison cards */}
              <div className="grid grid-cols-2 gap-3 p-4 bg-slate-50 rounded-2xl mb-4">
                <div>
                  <span className="text-[11px] font-bold text-agro-green uppercase block">AGROMATCH</span>
                  <span className="text-xl font-black text-agro-forest">₦{comp.agromatchPrice.toLocaleString()}</span>
                  <span className="text-[10px] text-slate-500 block">Direct Farm Rate</span>
                </div>
                <div className="border-l border-slate-200 pl-3">
                  <span className="text-[11px] font-bold text-rose-500 uppercase block">Open Market</span>
                  <span className="text-xl font-black text-slate-400 line-through">₦{comp.openMarketPrice.toLocaleString()}</span>
                  <span className="text-[10px] text-slate-500 block">{comp.sourceMarket}</span>
                </div>
              </div>
            </div>

            <button
              onClick={() => {
                setActiveTab('marketplace');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="w-full py-2.5 bg-green-50 hover:bg-green-100 text-agro-forest font-bold text-xs rounded-xl transition flex items-center justify-center gap-1"
            >
              <span>Explore Marketplace Produce</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

