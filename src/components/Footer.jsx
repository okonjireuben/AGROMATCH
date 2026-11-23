import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import {
  Sprout,
  ShieldCheck,
  Mail,
  Phone,
  MapPin,
  ArrowRight,
  CheckCircle,
  Truck,
  Scale,
  Award
} from 'lucide-react';

export default function Footer() {
  const { setActiveTab, showNotification } = useApp();
  const [newsletterEmail, setNewsletterEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (!newsletterEmail || !newsletterEmail.includes('@')) {
      showNotification('Please enter a valid business or personal email', 'error');
      return;
    }
    setSubscribed(true);
    showNotification('Thank you for subscribing to AGROMATCH Farm Market Bulletins!');
    setNewsletterEmail('');
  };

  const navTo = (tab) => {
    setActiveTab(tab);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-agro-forest text-slate-200 pt-16 pb-12 border-t border-emerald-900/40">
      {/* Top Value Pillars */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-12 border-b border-emerald-800/40">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="flex items-start gap-4">
            <div className="p-3 bg-agro-green/20 text-lime-300 rounded-2xl shrink-0">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <div>
              <h4 className="text-white font-bold text-sm">Guaranteed Escrow Safety</h4>
              <p className="text-xs text-slate-300 mt-1 leading-relaxed">
                Funds are held securely until buyers inspect and sign off on produce quality at delivery.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <div className="p-3 bg-agro-green/20 text-lime-300 rounded-2xl shrink-0">
              <Truck className="w-6 h-6" />
            </div>
            <div>
              <h4 className="text-white font-bold text-sm">Cold-Chain Farm Transit</h4>
              <p className="text-xs text-slate-300 mt-1 leading-relaxed">
                Temperature-controlled interstate haulage from rural farms direct to urban commercial kitchens.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <div className="p-3 bg-agro-green/20 text-lime-300 rounded-2xl shrink-0">
              <Scale className="w-6 h-6" />
            </div>
            <div>
              <h4 className="text-white font-bold text-sm">Zero Middleman Markup</h4>
              <p className="text-xs text-slate-300 mt-1 leading-relaxed">
                Farmers keep up to 40% more profit while corporate buyers save 20-30% on food raw materials.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <div className="p-3 bg-agro-green/20 text-lime-300 rounded-2xl shrink-0">
              <Award className="w-6 h-6" />
            </div>
            <div>
              <h4 className="text-white font-bold text-sm">Verified Farm Grading</h4>
              <p className="text-xs text-slate-300 mt-1 leading-relaxed">
                CAC verified producers, strict optical sort grading, and certified moisture & weight standards.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer Links */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          {/* Brand Info */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-2 cursor-pointer" onClick={() => navTo('home')}>
              <div className="w-10 h-10 rounded-2xl bg-gradient-to-br from-agro-green to-lime-500 flex items-center justify-center text-white">
                <Sprout className="w-6 h-6 text-agro-forest" />
              </div>
              <span className="text-2xl font-black tracking-tight text-white">
                AGRO<span className="text-lime-400">MATCH</span>
              </span>
            </div>
            <p className="text-xs text-slate-300 leading-relaxed max-w-sm">
              Nigeria's premier direct agricultural marketplace. Connecting farmers directly with restaurants, supermarkets, hotels, food processors, and bulk distributors.
            </p>
            
            <div className="pt-2 text-xs text-slate-300 space-y-2">
              <div className="flex items-center gap-2.5">
                <MapPin className="w-4 h-4 text-lime-400 shrink-0" />
                <span>Plot 22, Agri-Tech Innovation Hub, Victoria Island, Lagos State</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-lime-400 shrink-0" />
                <span>+234 (0) 800-AGROMATCH / +234 803 412 8901</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-lime-400 shrink-0" />
                <span>trade@agromatch.ng | support@agromatch.ng</span>
              </div>
            </div>
          </div>

          {/* Sourcing Hubs */}
          <div>
            <h4 className="text-xs font-bold text-lime-400 uppercase tracking-wider mb-4">
              Regional Farm Corridors
            </h4>
            <ul className="space-y-2.5 text-xs text-slate-300">
              <li><span className="font-semibold text-white">Kano & Sokoto:</span> Tomatoes, Onions & Peppers</li>
              <li><span className="font-semibold text-white">Benue & Niger:</span> Zaki-Biam Yams & Grains</li>
              <li><span className="font-semibold text-white">Ebonyi:</span> Abakaliki Parboiled Rice</li>
              <li><span className="font-semibold text-white">Rivers & Delta:</span> Aquaculture & Cassava Roots</li>
              <li><span className="font-semibold text-white">Oyo & Ogun:</span> Jumbo Eggs & Poultry</li>
              <li><span className="font-semibold text-white">Plateau:</span> Irish Potatoes & Cool Veg</li>
              <li><span className="font-semibold text-white">Abia & Imo:</span> Low-FFA Red Palm Oil</li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-xs font-bold text-lime-400 uppercase tracking-wider mb-4">
              Platform & Features
            </h4>
            <ul className="space-y-2 text-xs text-slate-300">
              <li>
                <button onClick={() => navTo('marketplace')} className="hover:text-white transition">
                  Browse Marketplace
                </button>
              </li>
              <li>
                <button onClick={() => navTo('bulk-procurement')} className="hover:text-white transition">
                  Restaurant & Retailer Portal
                </button>
              </li>
              <li>
                <button onClick={() => navTo('bulk-procurement')} className="hover:text-white transition">
                  Request For Quotation (RFQ)
                </button>
              </li>
              <li>
                <button onClick={() => navTo('price-comparison')} className="hover:text-white transition">
                  Smart Price Comparison
                </button>
              </li>
              <li>
                <button onClick={() => navTo('seasonal-calendar')} className="hover:text-white transition">
                  Seasonal Produce Calendar
                </button>
              </li>
              <li>
                <button onClick={() => navTo('farmer-dashboard')} className="hover:text-white transition">
                  Farmer Registration & Selling
                </button>
              </li>
              <li>
                <button onClick={() => navTo('about')} className="hover:text-white transition">
                  Our Mission & Impact
                </button>
              </li>
              <li>
                <button onClick={() => navTo('contact')} className="hover:text-white transition">
                  Help & Dispute Resolution
                </button>
              </li>
            </ul>
          </div>

          {/* Newsletter Form */}
          <div>
            <h4 className="text-xs font-bold text-lime-400 uppercase tracking-wider mb-4">
              Weekly Market Bulletin
            </h4>
            <p className="text-xs text-slate-300 mb-3 leading-relaxed">
              Subscribe to verified farm-gate commodity prices, harvest forecasts, and wholesale price drops.
            </p>
            {subscribed ? (
              <div className="p-3 bg-emerald-900/60 border border-emerald-600/40 rounded-xl flex items-center gap-2 text-emerald-300 text-xs">
                <CheckCircle className="w-4 h-4 shrink-0" />
                <span>Subscribed! Check your inbox for Monday's price index.</span>
              </div>
            ) : (
              <form onSubmit={handleSubscribe} className="space-y-2">
                <div className="relative">
                  <input
                    type="email"
                    value={newsletterEmail}
                    onChange={(e) => setNewsletterEmail(e.target.value)}
                    placeholder="Enter your work email..."
                    className="w-full bg-emerald-950/80 border border-emerald-800 text-white placeholder-slate-400 text-xs rounded-xl px-3.5 py-2.5 focus:outline-none focus:ring-2 focus:ring-lime-400"
                    required
                  />
                </div>
                <button
                  type="submit"
                  className="w-full flex items-center justify-center gap-2 bg-agro-green hover:bg-emerald-600 text-white font-bold text-xs py-2.5 rounded-xl transition shadow-md shadow-emerald-950"
                >
                  <span>Subscribe to Price Alerts</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </form>
            )}
            <div className="mt-4 flex items-center gap-2 text-[11px] text-slate-400">
              <ShieldCheck className="w-3.5 h-3.5 text-lime-400" />
              <span>Zero spam. Unsubscribe anytime.</span>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 border-t border-emerald-900/60 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
        <div>
          &copy; {new Date().getFullYear()} AGROMATCH Technologies Ltd. All rights reserved. Built for African Agricultural Transformation.
        </div>
        <div className="flex items-center gap-4">
          <span className="hover:text-slate-300 cursor-pointer" onClick={() => navTo('about')}>Privacy Policy</span>
          <span>•</span>
          <span className="hover:text-slate-300 cursor-pointer" onClick={() => navTo('about')}>Escrow Terms</span>
          <span>•</span>
          <span className="hover:text-slate-300 cursor-pointer" onClick={() => navTo('contact')}>Dispute Guidelines</span>
        </div>
      </div>
    </footer>
  );
}
