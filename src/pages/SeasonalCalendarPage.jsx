import React, { useState } from 'react';
import { SEASONAL_CALENDAR } from '../data/mockData';
import { useApp } from '../context/AppContext';
import {
  Calendar,
  Sparkles,
  ArrowRight,
  TrendingDown,
  Sun,
  CloudRain
} from 'lucide-react';

export default function SeasonalCalendarPage() {
  const { setActiveTab } = useApp();
  const [selectedMonth, setSelectedMonth] = useState('November');

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-10">
      {/* Header */}
      <div className="bg-gradient-to-r from-emerald-950 via-agro-forest to-emerald-900 rounded-3xl p-8 sm:p-10 text-white relative overflow-hidden shadow-xl">
        <div className="max-w-2xl relative z-10 space-y-3">
          <span className="inline-flex items-center gap-1.5 bg-lime-400 text-agro-forest text-xs font-black px-3 py-1 rounded-full uppercase tracking-wider">
            <Calendar className="w-3.5 h-3.5" />
            Nigerian Agro-Climatic Intelligence
          </span>
          <h1 className="text-3xl sm:text-4xl font-black tracking-tight">
            Seasonal Produce Calendar & Harvest Cycles
          </h1>
          <p className="text-sm sm:text-base text-white/80 leading-relaxed">
            Plan your procurement around natural harvest seasons in Nigeria to lock in bottom farm-gate pricing, optimal crop nutritional freshness, and reliable supply quantities.
          </p>
        </div>
      </div>

      {/* Months Selector */}
      <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none">
        {SEASONAL_CALENDAR.map((cal) => (
          <button
            key={cal.month}
            onClick={() => setSelectedMonth(cal.month)}
            className={`px-4 py-2 rounded-2xl text-xs font-bold whitespace-nowrap transition ${
              selectedMonth === cal.month
                ? 'bg-agro-green text-white shadow-md'
                : 'bg-white text-slate-700 hover:bg-slate-100 border border-slate-200'
            }`}
          >
            {cal.month}
            {cal.month === 'November' && ' (Current)'}
          </button>
        ))}
      </div>

      {/* Selected Month Detail Card */}
      {(() => {
        const item = SEASONAL_CALENDAR.find((c) => c.month === selectedMonth) || SEASONAL_CALENDAR[0];
        return (
          <div className="bg-white rounded-3xl p-8 border border-slate-200/80 shadow-soft space-y-6">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-100 pb-6">
              <div>
                <span className="text-xs font-bold text-agro-green uppercase tracking-wide">
                  Harvest Profile
                </span>
                <h2 className="text-3xl font-black text-slate-900 mt-1">{item.month} Peak Harvest</h2>
                <p className="text-sm text-slate-600 mt-1">{item.description}</p>
              </div>
              <span className="inline-flex items-center gap-1.5 bg-green-50 text-agro-forest font-bold text-xs px-3.5 py-1.5 rounded-full border border-green-200 self-start sm:self-auto">
                <Sparkles className="w-3.5 h-3.5 text-agro-green" />
                {item.status}
              </span>
            </div>

            <div>
              <h3 className="font-bold text-slate-900 text-base mb-4">
                Recommended Crops to Procure in {item.month} (Best Pricing & Abundance)
              </h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3">
                {item.inSeason.map((crop, i) => (
                  <div
                    key={i}
                    className="p-4 bg-agro-cream rounded-2xl border border-emerald-100 text-center hover:border-agro-green transition cursor-pointer"
                    onClick={() => {
                      setActiveTab('marketplace');
                      window.scrollTo({ top: 0, behavior: 'smooth' });
                    }}
                  >
                    <span className="font-bold text-agro-forest text-sm block">{crop}</span>
                    <span className="text-[11px] text-agro-green font-medium mt-1 block">In Peak Season →</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="pt-6 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-between gap-4">
              <p className="text-xs text-slate-500">
                Procuring crops in-season can save up to 35% on logistics and farm-gate cost.
              </p>
              <button
                onClick={() => {
                  setActiveTab('marketplace');
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className="px-6 py-2.5 bg-agro-green hover:bg-emerald-700 text-white font-bold text-xs rounded-xl shadow-md transition flex items-center gap-1.5"
              >
                <span>Browse {item.month} Market Listings</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        );
      })()}
    </div>
  );
}

