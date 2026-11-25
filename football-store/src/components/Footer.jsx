import React from 'react';
import { useApp } from '../context/AppContext';
import {
  ShieldCheck,
  Truck,
  RotateCcw,
  Sparkles,
  Phone,
  Mail,
  MapPin,
  CheckCircle2,
  Lock,
  ArrowRight
} from 'lucide-react';

export default function Footer() {
  const { setActiveTab, setSelectedLeague } = useApp();

  return (
    <footer className="bg-[#070708] border-t border-[#27272A] pt-16 pb-12 text-slate-400">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">

        {/* 4 Value Pillars Bar */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 pb-12 border-b border-[#1F1F23]">
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 rounded-2xl bg-rf-pitch/60 border border-rf-neon/30 text-rf-neon flex items-center justify-center shrink-0">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <div>
              <h4 className="text-white font-black text-sm">100% Authentic Gear</h4>
              <p className="text-xs text-slate-400 mt-1">Guaranteed genuine player & fan kits sourced directly from verified manufacturer distributors.</p>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <div className="w-12 h-12 rounded-2xl bg-rf-pitch/60 border border-rf-neon/30 text-rf-neon flex items-center justify-center shrink-0">
              <Truck className="w-6 h-6" />
            </div>
            <div>
              <h4 className="text-white font-black text-sm">Express Nationwide Delivery</h4>
              <p className="text-xs text-slate-400 mt-1">Fast 24-48 hr doorstep haulage to Lagos, Abuja, Port Harcourt and all Nigerian states.</p>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <div className="w-12 h-12 rounded-2xl bg-rf-pitch/60 border border-rf-neon/30 text-rf-neon flex items-center justify-center shrink-0">
              <RotateCcw className="w-6 h-6" />
            </div>
            <div>
              <h4 className="text-white font-black text-sm">Official Custom Printing</h4>
              <p className="text-xs text-slate-400 mt-1">Machine heat-press player names, squad numbers & official UCL / Premier League sleeve badges.</p>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <div className="w-12 h-12 rounded-2xl bg-rf-pitch/60 border border-rf-neon/30 text-rf-neon flex items-center justify-center shrink-0">
              <Lock className="w-6 h-6" />
            </div>
            <div>
              <h4 className="text-white font-black text-sm">Bank-Grade Escrow Checkout</h4>
              <p className="text-xs text-slate-400 mt-1">Pay with peace of mind via Bank Transfer, Debit Cards (Paystack/Flutterwave ready) or Pay on Delivery.</p>
            </div>
          </div>
        </div>

        {/* Main Footer Links & Newsletter */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">

          {/* Col 1 & 2: Brand Info */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-2xl bg-rf-emerald border border-rf-neon/40 flex items-center justify-center text-lg">
                ⚽
              </div>
              <span className="font-display text-2xl font-black text-white tracking-wider uppercase">
                REUBEN <span className="text-rf-neon">FOOTBALL</span> STORE
              </span>
            </div>

            <p className="text-xs leading-relaxed text-slate-400 max-w-sm">
              Your premier international football retail experience. Dedicated to empowering fans, grassroots players, academies and professional athletes with world-class gear.
            </p>

            <div className="space-y-2 pt-2 text-xs">
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-rf-neon shrink-0" />
                <span>Flagship Store: Plot 18 Sports Boulevard, Victoria Island, Lagos, Nigeria</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-rf-neon shrink-0" />
                <span>+234 (0) 800 REUBEN FOOTBALL (Toll Free) • +234 814 772 9010</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-rf-neon shrink-0" />
                <span>sales@reubenfootballstore.com • support@reubenfootballstore.ng</span>
              </div>
            </div>
          </div>

          {/* Col 3: Football Leagues */}
          <div className="space-y-3">
            <h4 className="text-sm font-black text-white uppercase tracking-wider">Top Leagues</h4>
            <ul className="space-y-2 text-xs">
              <li>
                <button onClick={() => { setActiveTab('jerseys'); setSelectedLeague('Premier League'); }} className="hover:text-rf-neon transition">
                  Premier League Kits
                </button>
              </li>
              <li>
                <button onClick={() => { setActiveTab('jerseys'); setSelectedLeague('La Liga'); }} className="hover:text-rf-neon transition">
                  La Liga Santander
                </button>
              </li>
              <li>
                <button onClick={() => { setActiveTab('jerseys'); setSelectedLeague('Ligue 1'); }} className="hover:text-rf-neon transition">
                  Ligue 1 Uber Eats
                </button>
              </li>
              <li>
                <button onClick={() => { setActiveTab('jerseys'); setSelectedLeague('Bundesliga & Serie A'); }} className="hover:text-rf-neon transition">
                  Bundesliga & Serie A
                </button>
              </li>
              <li>
                <button onClick={() => { setActiveTab('jerseys'); setSelectedLeague('International'); }} className="hover:text-rf-neon transition font-bold text-white">
                  Super Eagles & World Cup
                </button>
              </li>
            </ul>
          </div>

          {/* Col 4: Collections & Tools */}
          <div className="space-y-3">
            <h4 className="text-sm font-black text-white uppercase tracking-wider">Collections</h4>
            <ul className="space-y-2 text-xs">
              <li><button onClick={() => setActiveTab('boots')} className="hover:text-rf-neon transition">Nike Mercurial Superfly</button></li>
              <li><button onClick={() => setActiveTab('boots')} className="hover:text-rf-neon transition">Adidas Predator 24 Elite</button></li>
              <li><button onClick={() => setActiveTab('equipment')} className="hover:text-rf-neon transition">Official Match Balls (UCL Pro)</button></li>
              <li><button onClick={() => setActiveTab('customizer')} className="hover:text-rf-neon transition text-rf-neon font-bold">Design Your Jersey Studio</button></li>
              <li><button onClick={() => setActiveTab('equipment')} className="hover:text-rf-neon transition">Goalkeeper Match Gloves</button></li>
            </ul>
          </div>

          {/* Col 5: VIP Club Newsletter */}
          <div className="space-y-3">
            <h4 className="text-sm font-black text-white uppercase tracking-wider">Reuben VIP Locker</h4>
            <p className="text-xs text-slate-400">
              Subscribe to get exclusive early access to retro kit drops and 10% off your first order.
            </p>
            <form onSubmit={(e) => { e.preventDefault(); alert("Welcome to Reuben Football VIP Locker! Use code WELCOME10 for 10% off."); }} className="space-y-2">
              <input
                type="email"
                required
                placeholder="Enter your email..."
                className="w-full px-3 py-2 rounded-xl bg-[#18181B] border border-[#27272A] text-xs text-white placeholder-slate-500 focus:border-rf-neon outline-none"
              />
              <button
                type="submit"
                className="w-full py-2 bg-rf-neon hover:bg-rf-lime text-black font-black text-xs rounded-xl transition shadow-neon"
              >
                Join VIP Locker
              </button>
            </form>
          </div>
        </div>

        {/* Bottom Copyright */}
        <div className="pt-8 border-t border-[#1F1F23] flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 gap-4">
          <p>© 2026 REUBEN FOOTBALL STORE. All rights reserved. Registered in Nigeria.</p>
          <div className="flex items-center gap-6">
            <span className="hover:text-white cursor-pointer">Privacy Policy</span>
            <span className="hover:text-white cursor-pointer">Terms of Service</span>
            <span className="hover:text-white cursor-pointer">Size Guide</span>
            <span className="hover:text-white cursor-pointer">Authenticity Certificate</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
