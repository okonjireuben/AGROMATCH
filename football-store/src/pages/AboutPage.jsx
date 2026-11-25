import React from 'react';
import { useApp } from '../context/AppContext';
import {
  Award,
  ShieldCheck,
  Truck,
  Users,
  MapPin,
  Clock,
  Sparkles,
  ArrowRight
} from 'lucide-react';

export default function AboutPage() {
  const { setActiveTab } = useApp();

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-16">
      {/* Hero */}
      <div className="text-center max-w-3xl mx-auto space-y-4">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-rf-pitch border border-rf-neon/40 text-rf-neon text-xs font-black uppercase">
          <Sparkles className="w-4 h-4 text-rf-neon" />
          THE REUBEN FOOTBALL STORY
        </div>
        <h1 className="text-4xl sm:text-6xl font-black text-white font-display uppercase tracking-tight">
          WEAR YOUR PASSION. PLAY YOUR GAME.
        </h1>
        <p className="text-base text-slate-300 leading-relaxed">
          Founded in Lagos, Nigeria with an international vision, REUBEN FOOTBALL STORE was established to solve a critical problem facing African football fans: the rampant circulation of low-grade replicas and the lack of accessible genuine football gear.
        </p>
      </div>

      {/* Flagship Store Visual Banner */}
      <div className="rounded-3xl overflow-hidden border-2 border-rf-neon/40 shadow-2xl relative aspect-[16/9] max-h-[500px]">
        <img
          src="/reuben-football-store.jpg"
          alt="Reuben Football Store Flagship Exterior"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
        <div className="absolute bottom-6 left-6 right-6 flex items-center justify-between">
          <div className="text-white">
            <h3 className="font-display text-2xl font-black uppercase">Victoria Island Flagship Retail Experience</h3>
            <p className="text-xs text-slate-300">Plot 18 Sports Boulevard, Victoria Island, Lagos</p>
          </div>
        </div>
      </div>

      {/* 3 Pillars */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="p-8 rounded-3xl bg-[#121214] border border-[#27272A] space-y-4">
          <div className="w-12 h-12 rounded-2xl bg-rf-pitch text-rf-neon flex items-center justify-center font-black">
            <ShieldCheck className="w-6 h-6" />
          </div>
          <h3 className="text-xl font-black text-white">100% Genuine Authenticity</h3>
          <p className="text-xs text-slate-400 leading-relaxed">
            Every jersey and boot in our store features verified manufacturer QR verification codes, genuine barcodes, and official holographic league tags.
          </p>
        </div>

        <div className="p-8 rounded-3xl bg-[#121214] border border-[#27272A] space-y-4">
          <div className="w-12 h-12 rounded-2xl bg-rf-pitch text-rf-neon flex items-center justify-center font-black">
            <Award className="w-6 h-6" />
          </div>
          <h3 className="text-xl font-black text-white">Player-Spec Customization</h3>
          <p className="text-xs text-slate-400 leading-relaxed">
            We operate the most sophisticated jersey heat-press station in West Africa, offering authentic Premier League, UCL Starball, and Copa America sleeve patches.
          </p>
        </div>

        <div className="p-8 rounded-3xl bg-[#121214] border border-[#27272A] space-y-4">
          <div className="w-12 h-12 rounded-2xl bg-rf-pitch text-rf-neon flex items-center justify-center font-black">
            <Truck className="w-6 h-6" />
          </div>
          <h3 className="text-xl font-black text-white">Nationwide & Global Shipping</h3>
          <p className="text-xs text-slate-400 leading-relaxed">
            Partnered with leading courier fleets, we guarantee 24-48 hr delivery across Nigeria and 3-5 days worldwide express shipping.
          </p>
        </div>
      </div>

      {/* Call to action */}
      <div className="p-10 rounded-3xl bg-gradient-to-r from-rf-pitch via-[#143B20] to-[#0A0A0A] border border-rf-neon/40 text-center space-y-4">
        <h2 className="text-3xl font-black text-white font-display uppercase tracking-wide">
          READY TO GEAR UP FOR MATCHDAY?
        </h2>
        <p className="text-sm text-slate-300 max-w-xl mx-auto">
          Explore our collection of over 28 clubs, national teams, and elite boots today.
        </p>
        <button
          onClick={() => {
            setActiveTab('jerseys');
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
          className="px-8 py-3.5 bg-rf-neon hover:bg-rf-lime text-black font-black text-xs rounded-xl shadow-neon transition inline-flex items-center gap-2"
        >
          <span>EXPLORE STORE CATALOG</span>
          <ArrowRight className="w-4 h-4 text-black" />
        </button>
      </div>
    </div>
  );
}
