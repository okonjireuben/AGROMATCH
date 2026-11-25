import React from 'react';
import JerseyCustomizer from '../components/JerseyCustomizer';
import { Sparkles, Shirt, Award } from 'lucide-react';

export default function CustomizerPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-8">
      <div className="text-center max-w-2xl mx-auto space-y-2">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-rf-neon/15 text-rf-neon border border-rf-neon/30 text-xs font-black uppercase">
          <Shirt className="w-3.5 h-3.5" />
          OFFICIAL HEAT-PRESS PRINTING STUDIO
        </div>
        <h1 className="text-3xl sm:text-5xl font-black text-white font-display uppercase tracking-tight">
          CUSTOM JERSEY STUDIO
        </h1>
        <p className="text-sm text-slate-400">
          Personalize any club or national team kit with your chosen name, squad number, and official European sleeve patches.
        </p>
      </div>

      <JerseyCustomizer initialClub="Nigeria (Super Eagles)" />
    </div>
  );
}

