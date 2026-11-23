import React from 'react';
import { useApp } from '../context/AppContext';
import {
  Sprout,
  ShieldCheck,
  Truck,
  Users,
  Target,
  Award,
  ArrowRight,
  CheckCircle2
} from 'lucide-react';

export default function AboutPage() {
  const { setActiveTab } = useApp();

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-16">
      {/* Hero Section */}
      <div className="text-center max-w-3xl mx-auto space-y-4">
        <div className="inline-flex items-center gap-2 bg-emerald-100 text-agro-forest px-4 py-1.5 rounded-full text-xs font-black">
          <Sprout className="w-4 h-4 text-agro-green" />
          TRANSFORMING NIGERIAN AGRICULTURAL VALUE CHAINS
        </div>
        <h1 className="text-4xl sm:text-5xl font-black text-agro-forest tracking-tight">
          Empowering Nigerian Farmers. Feeding Growing Cities.
        </h1>
        <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
          AGROMATCH was founded with a singular mission: to eliminate predatory middlemen, guarantee higher incomes for hardworking farmers, and provide businesses with authentic, farm-fresh produce through technology and cold-chain haulage.
        </p>
      </div>

      {/* Pillars */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="bg-white rounded-3xl p-8 border border-slate-200/80 shadow-soft space-y-4">
          <div className="w-14 h-14 bg-emerald-50 text-agro-green rounded-2xl flex items-center justify-center font-black">
            <Target className="w-7 h-7" />
          </div>
          <h3 className="text-xl font-black text-slate-900">Direct Farm-Gate Access</h3>
          <p className="text-sm text-slate-600 leading-relaxed">
            We bypass up to 5 layers of exploitative brokers. When a chef in Lagos buys tomatoes or Benue yams, over 85% of that expenditure reaches the farmer directly.
          </p>
        </div>

        <div className="bg-white rounded-3xl p-8 border border-slate-200/80 shadow-soft space-y-4">
          <div className="w-14 h-14 bg-emerald-50 text-agro-green rounded-2xl flex items-center justify-center font-black">
            <ShieldCheck className="w-7 h-7" />
          </div>
          <h3 className="text-xl font-black text-slate-900">Trust & Escrow Protection</h3>
          <p className="text-sm text-slate-600 leading-relaxed">
            Buyers never have to fear fraudulent bank payments or bad quality. Payments remain locked in Nigerian Escrow until produce is physically inspected at delivery docks.
          </p>
        </div>

        <div className="bg-white rounded-3xl p-8 border border-slate-200/80 shadow-soft space-y-4">
          <div className="w-14 h-14 bg-emerald-50 text-agro-green rounded-2xl flex items-center justify-center font-black">
            <Truck className="w-7 h-7" />
          </div>
          <h3 className="text-xl font-black text-slate-900">Interstate Cold-Chain</h3>
          <p className="text-sm text-slate-600 leading-relaxed">
            From the fertile soils of Kano, Benue, Oyo, and Rivers, our partner logistics fleets transport perishable produce under temperature control, reducing post-harvest losses.
          </p>
        </div>
      </div>

      {/* Nigerian Agricultural Leadership / Team */}
      <div className="bg-white rounded-3xl p-10 border border-slate-200/80 shadow-soft space-y-8">
        <div className="text-center max-w-xl mx-auto">
          <span className="text-xs font-bold text-agro-green uppercase tracking-wider">Our Leadership</span>
          <h2 className="text-3xl font-black text-slate-900 mt-1">Built by Agronomists and Tech Innovators</h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          <div className="text-center space-y-3">
            <img
              src="https://images.unsplash.com/photo-1507152832244-10d45c7eda57?auto=format&fit=crop&w=300&q=80"
              alt="Engr. Babatunde Alabi"
              className="w-28 h-28 rounded-3xl object-cover mx-auto ring-4 ring-emerald-50 shadow-md"
            />
            <div>
              <h4 className="font-bold text-slate-900 text-base">Babatunde Alabi</h4>
              <p className="text-xs text-agro-green font-semibold">Co-Founder & CEO</p>
              <p className="text-[11px] text-slate-500 mt-1">Ex-Agricultural Extension Officer & Logistics Director</p>
            </div>
          </div>

          <div className="text-center space-y-3">
            <img
              src="https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&w=300&q=80"
              alt="Amina Sanusi"
              className="w-28 h-28 rounded-3xl object-cover mx-auto ring-4 ring-emerald-50 shadow-md"
            />
            <div>
              <h4 className="font-bold text-slate-900 text-base">Amina Sanusi</h4>
              <p className="text-xs text-agro-green font-semibold">Head of Farm Verification</p>
              <p className="text-[11px] text-slate-500 mt-1">Senior Agronomist specializing in Northern Crop Clusters</p>
            </div>
          </div>

          <div className="text-center space-y-3">
            <img
              src="https://images.unsplash.com/photo-1566753323558-f4e0952af115?auto=format&fit=crop&w=300&q=80"
              alt="Chidi Okeke"
              className="w-28 h-28 rounded-3xl object-cover mx-auto ring-4 ring-emerald-50 shadow-md"
            />
            <div>
              <h4 className="font-bold text-slate-900 text-base">Chidi Okeke</h4>
              <p className="text-xs text-agro-green font-semibold">CTO & Supply Chain Lead</p>
              <p className="text-[11px] text-slate-500 mt-1">Architect of Agromatch Escrow & Tracking Protocol</p>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Banner */}
      <div className="bg-agro-forest rounded-3xl p-10 text-white text-center space-y-5">
        <h2 className="text-3xl font-black">Ready to Partner with Nigeria's Master Farmers?</h2>
        <p className="text-white/80 max-w-xl mx-auto text-sm">
          Join hundreds of restaurants, supermarkets, and food distributors who source directly through AGROMATCH every week.
        </p>
        <button
          onClick={() => {
            setActiveTab('marketplace');
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
          className="px-8 py-3.5 bg-lime-400 hover:bg-lime-300 text-agro-forest font-extrabold rounded-2xl shadow-lg transition inline-flex items-center gap-2 text-sm"
        >
          <span>Explore Farm Marketplace</span>
          <ArrowRight className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
}

