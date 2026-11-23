import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import ProductCard from '../components/ProductCard';
import {
  CATEGORIES,
  NIGERIAN_STATES,
  INITIAL_FARMERS,
  TESTIMONIALS,
  SEASONAL_CALENDAR
} from '../data/mockData';
import {
  Sprout,
  ArrowRight,
  ShieldCheck,
  Truck,
  TrendingDown,
  Users,
  Wheat,
  Search,
  CheckCircle2,
  Calendar,
  Layers,
  Star,
  Sparkles,
  PhoneCall,
  Store,
  Building2,
  ChevronRight
} from 'lucide-react';

export default function HomePage() {
  const {
    products,
    setActiveTab,
    setIsAuthModalOpen,
    setAuthMode,
    login,
    navigateToFarmerProfile
  } = useApp();

  const [searchKeyword, setSearchKeyword] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All Categories');
  const [selectedState, setSelectedState] = useState('All States');
  const [activeStep, setActiveStep] = useState(1);

  // Filter featured products
  const featuredProducts = products.slice(0, 6);

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    setActiveTab('marketplace');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const currentMonthData = SEASONAL_CALENDAR.find(m => m.month === 'November') || SEASONAL_CALENDAR[10];

  return (
    <div className="space-y-20 pb-16">
      {/* 1. HERO SECTION */}
      <section className="relative overflow-hidden bg-gradient-to-b from-agro-cream via-white to-agro-cream pt-10 pb-20 border-b border-emerald-900/10">
        {/* Decorative background blurs */}
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-agro-green/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-10 w-80 h-80 bg-lime-400/10 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Content (7 cols) */}
            <div className="lg:col-span-7 space-y-6">
              {/* Badge */}
              <div className="inline-flex items-center gap-2 bg-emerald-100/80 border border-emerald-300 text-agro-forest px-4 py-1.5 rounded-full text-xs font-black shadow-sm">
                <span className="w-2 h-2 rounded-full bg-agro-green animate-pulse" />
                <span>NIGERIA'S PREMIER DIRECT AGRICULTURAL MARKETPLACE</span>
              </div>

              {/* Main Headline */}
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-agro-forest tracking-tight leading-[1.12]">
                Connecting Farms to Markets.{' '}
                <span className="text-agro-green">Growing Opportunities.</span>
              </h1>

              {/* Supporting Description */}
              <p className="text-base sm:text-lg text-slate-700 font-normal leading-relaxed max-w-2xl">
                Eliminate greedy middlemen. AGROMATCH connects verified farmers directly with restaurants, supermarkets, hotels, and wholesalers. Farmers earn up to 40% more while buyers enjoy farm-fresh produce with guaranteed escrow security.
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-wrap items-center gap-4 pt-2">
                <button
                  onClick={() => {
                    setActiveTab('marketplace');
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className="px-7 py-4 rounded-2xl bg-agro-green hover:bg-emerald-700 text-white font-extrabold text-sm shadow-xl shadow-agro-green/25 hover:shadow-2xl transition transform hover:-translate-y-0.5 flex items-center gap-2"
                >
                  <span>Explore Marketplace</span>
                  <ArrowRight className="w-4 h-4" />
                </button>

                <button
                  onClick={() => {
                    login('farmer');
                  }}
                  className="px-7 py-4 rounded-2xl bg-white border-2 border-agro-forest text-agro-forest hover:bg-green-50 font-extrabold text-sm shadow-md transition transform hover:-translate-y-0.5 flex items-center gap-2"
                >
                  <Wheat className="w-4 h-4 text-agro-green" />
                  <span>Start Selling as Farmer</span>
                </button>
              </div>

              {/* Search Bar Widget */}
              <div className="mt-8 pt-4">
                <form
                  onSubmit={handleSearchSubmit}
                  className="bg-white p-3 rounded-3xl border border-slate-200/90 shadow-elevated grid grid-cols-1 sm:grid-cols-12 gap-2"
                >
                  <div className="sm:col-span-5 relative flex items-center">
                    <Search className="w-4 h-4 text-slate-400 absolute left-3.5" />
                    <input
                      type="text"
                      value={searchKeyword}
                      onChange={(e) => setSearchKeyword(e.target.value)}
                      placeholder="Search tomatoes, Benue yams, rice..."
                      className="w-full text-xs font-semibold pl-10 pr-3 py-3 rounded-2xl border-none focus:outline-none focus:ring-1 focus:ring-agro-green text-slate-800 placeholder-slate-400"
                    />
                  </div>

                  <div className="sm:col-span-4 border-t sm:border-t-0 sm:border-l border-slate-200 pl-0 sm:pl-2 flex items-center">
                    <select
                      value={selectedCategory}
                      onChange={(e) => setSelectedCategory(e.target.value)}
                      className="w-full text-xs font-semibold py-3 px-2 rounded-2xl border-none focus:outline-none focus:ring-1 focus:ring-agro-green text-slate-700 bg-transparent"
                    >
                      {CATEGORIES.map(c => (
                        <option key={c} value={c}>{c}</option>
                      ))}
                    </select>
                  </div>

                  <div className="sm:col-span-3">
                    <button
                      type="submit"
                      className="w-full h-full py-3 px-4 bg-agro-forest hover:bg-emerald-950 text-white rounded-2xl font-bold text-xs flex items-center justify-center gap-2 shadow-sm transition"
                    >
                      <span>Find Produce</span>
                    </button>
                  </div>
                </form>
              </div>

              {/* Trust Badges */}
              <div className="flex flex-wrap items-center gap-6 pt-2 text-xs font-semibold text-slate-600">
                <div className="flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-agro-green" />
                  <span>Verified Farm Quality</span>
                </div>
                <div className="flex items-center gap-2">
                  <Truck className="w-4 h-4 text-agro-green" />
                  <span>Interstate Cold-Chain</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-agro-green" />
                  <span>Escrow Payment Safety</span>
                </div>
              </div>
            </div>

            {/* Right Hero Visual (5 cols) */}
            <div className="lg:col-span-5 relative">
              <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white aspect-[4/5] max-h-[560px] w-full">
                <img
                  src="https://images.unsplash.com/photo-1595974482597-4b8da8879bc5?auto=format&fit=crop&w=1000&q=80"
                  alt="Nigerian farmer in lush green farm"
                  className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-agro-forest/90 via-black/20 to-transparent" />

                {/* Floating Farm Origin Card */}
                <div className="absolute top-6 right-6 bg-white/95 backdrop-blur-md p-3.5 rounded-2xl shadow-xl border border-slate-100 max-w-[210px] animate-in fade-in">
                  <div className="flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-emerald-500" />
                    <span className="text-[11px] font-bold text-slate-500 uppercase tracking-wider">Live Harvest</span>
                  </div>
                  <div className="text-xs font-bold text-slate-800 mt-1">Zaki-Biam Tubers</div>
                  <div className="text-[11px] text-agro-green font-semibold">12 Trailer-loads loading today</div>
                </div>

                {/* Bottom Floating Stats */}
                <div className="absolute bottom-6 left-6 right-6 bg-white/95 backdrop-blur-md p-4 rounded-2xl shadow-xl border border-slate-100">
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="text-xs text-slate-500 font-semibold">Average Middleman Savings</div>
                      <div className="text-xl font-black text-agro-forest">28.4% Direct Cost Saving</div>
                    </div>
                    <div className="w-10 h-10 rounded-xl bg-green-100 flex items-center justify-center text-agro-green">
                      <TrendingDown className="w-6 h-6" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. PLATFORM STATISTICS COUNTER */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-10 relative z-20">
        <div className="bg-agro-forest rounded-3xl p-8 sm:p-10 shadow-2xl text-white border border-emerald-800/60">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center divide-y lg:divide-y-0 lg:divide-x divide-emerald-800/60">
            <div className="pt-4 lg:pt-0">
              <div className="text-3xl sm:text-4xl lg:text-5xl font-black text-lime-400">1,280+</div>
              <div className="text-xs sm:text-sm text-slate-200 font-semibold mt-1">Registered Verified Farmers</div>
              <div className="text-[11px] text-emerald-300 mt-0.5">Across 18 agricultural states</div>
            </div>

            <div className="pt-4 lg:pt-0">
              <div className="text-3xl sm:text-4xl lg:text-5xl font-black text-lime-400">8,450 MT</div>
              <div className="text-xs sm:text-sm text-slate-200 font-semibold mt-1">Fresh Produce Listed</div>
              <div className="text-[11px] text-emerald-300 mt-0.5">Updated every morning</div>
            </div>

            <div className="pt-4 lg:pt-0">
              <div className="text-3xl sm:text-4xl lg:text-5xl font-black text-lime-400">480+</div>
              <div className="text-xs sm:text-sm text-slate-200 font-semibold mt-1">Restaurants & Supermarkets</div>
              <div className="text-[11px] text-emerald-300 mt-0.5">Lagos, Abuja & Port Harcourt</div>
            </div>

            <div className="pt-4 lg:pt-0">
              <div className="text-3xl sm:text-4xl lg:text-5xl font-black text-lime-400">₦620M+</div>
              <div className="text-xs sm:text-sm text-slate-200 font-semibold mt-1">Farmer Earnings Transacted</div>
              <div className="text-[11px] text-emerald-300 mt-0.5">100% Escrow secured</div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. FEATURED AGRICULTURAL PRODUCE */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row items-start sm:items-end justify-between gap-4 mb-10">
          <div>
            <div className="inline-flex items-center gap-1.5 text-xs font-bold text-agro-green uppercase tracking-wider mb-2">
              <Sparkles className="w-4 h-4" />
              <span>Farm-Fresh Harvest</span>
            </div>
            <h2 className="text-3xl font-black text-slate-900 tracking-tight">
              Featured Agricultural Products
            </h2>
            <p className="text-sm text-slate-600 mt-1 max-w-xl">
              Inspected, graded, and ready for immediate interstate dispatch from verified cooperatives.
            </p>
          </div>

          <button
            onClick={() => {
              setActiveTab('marketplace');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className="inline-flex items-center gap-2 text-sm font-bold text-agro-forest hover:text-agro-green transition group"
          >
            <span>Explore All 8 Categories</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>

        {/* Product Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>

      {/* 4. HOW IT WORKS (3 SIMPLE STEPS) */}
      <section className="bg-white py-20 border-y border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-xs font-bold text-agro-green uppercase tracking-wider">
              Seamless Farm-to-Business Trade
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight mt-2">
              How AGROMATCH Works in 3 Simple Steps
            </h2>
            <p className="text-sm text-slate-600 mt-2">
              We replace opaque open-market markups with transparent digital trading and escrow safety.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
            {/* Step 1 */}
            <div
              onClick={() => setActiveStep(1)}
              className={`p-8 rounded-3xl border transition-all cursor-pointer ${
                activeStep === 1
                  ? 'bg-green-50/80 border-agro-green shadow-elevated'
                  : 'bg-white border-slate-200 hover:border-slate-300'
              }`}
            >
              <div className="w-14 h-14 rounded-2xl bg-agro-forest text-lime-400 flex items-center justify-center font-black text-xl mb-6 shadow-md">
                01
              </div>
              <h3 className="text-xl font-black text-slate-900 mb-2">
                Farmers List Verified Harvest
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                Registered farmers upload photos, set direct farm-gate prices, declare available harvest tonnages, and specify optical sorting grades.
              </p>
              <div className="mt-4 pt-4 border-t border-slate-100 flex items-center gap-2 text-xs font-bold text-agro-forest">
                <CheckCircle2 className="w-4 h-4 text-agro-green" />
                <span>CAC and Farm Inspection Certified</span>
              </div>
            </div>

            {/* Step 2 */}
            <div
              onClick={() => setActiveStep(2)}
              className={`p-8 rounded-3xl border transition-all cursor-pointer ${
                activeStep === 2
                  ? 'bg-green-50/80 border-agro-green shadow-elevated'
                  : 'bg-white border-slate-200 hover:border-slate-300'
              }`}
            >
              <div className="w-14 h-14 rounded-2xl bg-agro-green text-white flex items-center justify-center font-black text-xl mb-6 shadow-md">
                02
              </div>
              <h3 className="text-xl font-black text-slate-900 mb-2">
                Buyers Order & Escrow Locks Funds
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                Restaurants and supermarkets order bulk ingredients and pay via Nigerian instant bank transfer. Payment is securely held in escrow until goods arrive safely.
              </p>
              <div className="mt-4 pt-4 border-t border-slate-100 flex items-center gap-2 text-xs font-bold text-agro-forest">
                <ShieldCheck className="w-4 h-4 text-agro-green" />
                <span>Zero Risk: 100% Escrow Protection</span>
              </div>
            </div>

            {/* Step 3 */}
            <div
              onClick={() => setActiveStep(3)}
              className={`p-8 rounded-3xl border transition-all cursor-pointer ${
                activeStep === 3
                  ? 'bg-green-50/80 border-agro-green shadow-elevated'
                  : 'bg-white border-slate-200 hover:border-slate-300'
              }`}
            >
              <div className="w-14 h-14 rounded-2xl bg-lime-500 text-agro-forest flex items-center justify-center font-black text-xl mb-6 shadow-md">
                03
              </div>
              <h3 className="text-xl font-black text-slate-900 mb-2">
                Cold-Chain Haulage & Final Sign-Off
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                Temperature-controlled logistics partners pick up produce at farm gate and deliver to kitchen docks. The buyer inspects quality, signs off, and funds release to farmer.
              </p>
              <div className="mt-4 pt-4 border-t border-slate-100 flex items-center gap-2 text-xs font-bold text-agro-forest">
                <Truck className="w-4 h-4 text-agro-green" />
                <span>Live GPS Tracking from Farm to Kitchen</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. VERIFIED FARMERS SPOTLIGHT */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row items-start sm:items-end justify-between gap-4 mb-10">
          <div>
            <span className="text-xs font-bold text-agro-green uppercase tracking-wider">
              Meet Nigeria's Master Growers
            </span>
            <h2 className="text-3xl font-black text-slate-900 tracking-tight mt-1">
              Featured Verified Farmers
            </h2>
            <p className="text-sm text-slate-600 mt-1 max-w-xl">
              Identity-vetted, farm-visited, and certified agricultural producers supplying the nation.
            </p>
          </div>

          <button
            onClick={() => {
              setActiveTab('marketplace');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className="text-xs font-bold text-agro-forest hover:text-agro-green"
          >
            View All Verified Producers →
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {INITIAL_FARMERS.slice(0, 3).map((farmer) => (
            <div
              key={farmer.id}
              className="bg-white rounded-3xl p-6 border border-slate-200/80 shadow-soft hover:shadow-elevated transition-all flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center gap-4 mb-4">
                  <img
                    src={farmer.avatar}
                    alt={farmer.name}
                    className="w-16 h-16 rounded-2xl object-cover ring-2 ring-agro-green/30 shrink-0"
                  />
                  <div>
                    <div className="flex items-center gap-1.5">
                      <h3 className="font-bold text-slate-900 text-base">{farmer.name}</h3>
                      <CheckCircle2 className="w-4 h-4 text-agro-green" />
                    </div>
                    <p className="text-xs font-semibold text-agro-forest">{farmer.farmName}</p>
                    <span className="text-[11px] text-slate-500">{farmer.location} • CAC: {farmer.cacNumber}</span>
                  </div>
                </div>

                <p className="text-xs text-slate-600 leading-relaxed mb-4">
                  {farmer.bio}
                </p>

                <div className="p-3 bg-slate-50 rounded-2xl text-xs space-y-1.5 mb-4">
                  <div className="flex justify-between">
                    <span className="text-slate-500">Specialty Crops:</span>
                    <span className="font-bold text-slate-800 truncate max-w-[170px]">{farmer.specialty}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-500">Farm Scale:</span>
                    <span className="font-bold text-slate-800">{farmer.farmSize}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-500">Completed Orders:</span>
                    <span className="font-bold text-agro-green">{farmer.ordersCompleted} orders (★ {farmer.rating})</span>
                  </div>
                </div>
              </div>

              <button
                onClick={() => navigateToFarmerProfile(farmer.id)}
                className="w-full py-2.5 rounded-xl bg-green-50 hover:bg-green-100 text-agro-forest text-xs font-bold transition flex items-center justify-center gap-1.5"
              >
                <Sprout className="w-3.5 h-3.5" />
                <span>Visit Farm Profile</span>
                <ChevronRight className="w-3.5 h-3.5" />
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* 6. SEASONAL PRODUCE CALENDAR BANNER */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-r from-emerald-950 via-agro-forest to-emerald-900 rounded-3xl p-8 sm:p-10 text-white relative overflow-hidden shadow-2xl">
          <div className="absolute right-0 top-0 bottom-0 w-1/3 bg-lime-400/10 blur-3xl pointer-events-none" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
            <div className="lg:col-span-8 space-y-4">
              <div className="inline-flex items-center gap-2 bg-lime-400 text-agro-forest px-3 py-1 rounded-full text-xs font-black">
                <Calendar className="w-3.5 h-3.5" />
                <span>NIGERIAN HARVEST CALENDAR • NOVEMBER HARVEST</span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-black">
                What's in Season This Month in Nigeria?
              </h3>

              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed max-w-xl">
                Buying in peak harvest drops commodity procurement costs by up to 35%. Current peak crops:
              </p>

              <div className="flex flex-wrap gap-2 pt-2">
                {currentMonthData.inSeason.map((crop, i) => (
                  <span
                    key={i}
                    className="bg-white/10 hover:bg-white/20 text-white text-xs font-bold px-3 py-1.5 rounded-xl border border-white/20 transition"
                  >
                    🌱 {crop}
                  </span>
                ))}
              </div>
            </div>

            <div className="lg:col-span-4 flex flex-col sm:flex-row lg:flex-col gap-3">
              <button
                onClick={() => {
                  setActiveTab('seasonal-calendar');
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className="w-full py-3.5 px-6 rounded-2xl bg-lime-400 hover:bg-lime-300 text-agro-forest font-black text-xs text-center shadow-lg transition"
              >
                Open Full 12-Month Calendar
              </button>
              <button
                onClick={() => {
                  setActiveTab('price-comparison');
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className="w-full py-3.5 px-6 rounded-2xl bg-white/10 hover:bg-white/20 text-white font-bold text-xs text-center border border-white/30 transition"
              >
                Check Farm-Gate Price Drops
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* 7. TESTIMONIALS */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="text-xs font-bold text-agro-green uppercase tracking-wider">
            Real Stories, Real Prosperity
          </span>
          <h2 className="text-3xl font-black text-slate-900 tracking-tight mt-1">
            Trusted by Farmers and Hospitality Brands
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {TESTIMONIALS.map((t) => (
            <div
              key={t.id}
              className="bg-white p-8 rounded-3xl border border-slate-200/80 shadow-soft flex flex-col justify-between"
            >
              <p className="text-sm text-slate-700 leading-relaxed italic mb-6">
                "{t.quote}"
              </p>

              <div className="flex items-center gap-4 pt-4 border-t border-slate-100">
                <img
                  src={t.image}
                  alt={t.name}
                  className="w-12 h-12 rounded-full object-cover ring-2 ring-agro-green/30"
                />
                <div>
                  <h4 className="font-bold text-slate-900 text-sm">{t.name}</h4>
                  <p className="text-xs text-slate-500">{t.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 8. CALL TO ACTION FOR BOTH SIDES */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Farmer Card */}
          <div className="bg-gradient-to-br from-green-900 to-agro-forest rounded-3xl p-8 sm:p-10 text-white flex flex-col justify-between shadow-xl">
            <div className="space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-lime-400 text-agro-forest flex items-center justify-center">
                <Wheat className="w-6 h-6" />
              </div>
              <h3 className="text-2xl font-black">Are You a Nigerian Farmer?</h3>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                Stop selling to opportunistic middlemen at ridiculous discounts. List your harvest on AGROMATCH, reach premium restaurant buyers in Lagos and Abuja, and receive guaranteed escrow payouts.
              </p>
            </div>
            <div className="pt-6">
              <button
                onClick={() => login('farmer')}
                className="w-full sm:w-auto px-6 py-3.5 bg-lime-400 hover:bg-lime-300 text-agro-forest font-black text-xs rounded-2xl transition shadow-md"
              >
                Register Farm & Start Selling
              </button>
            </div>
          </div>

          {/* Buyer Card */}
          <div className="bg-gradient-to-br from-slate-900 to-emerald-950 rounded-3xl p-8 sm:p-10 text-white flex flex-col justify-between shadow-xl">
            <div className="space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-agro-green text-white flex items-center justify-center">
                <Building2 className="w-6 h-6" />
              </div>
              <h3 className="text-2xl font-black">Restaurants & Supermarkets</h3>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                Streamline commercial food ingredient procurement. Set up recurring weekly deliveries, submit multi-ton RFQs, and secure wholesale volume discounts with complete traceability.
              </p>
            </div>
            <div className="pt-6">
              <button
                onClick={() => {
                  login('restaurant');
                  setActiveTab('bulk-procurement');
                }}
                className="w-full sm:w-auto px-6 py-3.5 bg-agro-green hover:bg-emerald-600 text-white font-black text-xs rounded-2xl transition shadow-md"
              >
                Access Bulk Procurement Portal
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
