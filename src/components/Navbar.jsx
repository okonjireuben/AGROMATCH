import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import {
  Sprout,
  ShoppingCart,
  User,
  Menu,
  X,
  Search,
  MessageSquare,
  ShieldCheck,
  ChevronDown,
  LogOut,
  SlidersHorizontal,
  Calendar,
  Layers,
  Store,
  Truck,
  TrendingDown,
  HelpCircle,
  Building2,
  Wheat
} from 'lucide-react';

export default function Navbar() {
  const {
    user,
    cartItemCount,
    cartSubtotal,
    activeTab,
    setActiveTab,
    setIsAuthModalOpen,
    setAuthMode,
    login,
    logout,
    messages
  } = useApp();

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [profileDropdownOpen, setProfileDropdownOpen] = useState(false);
  const [roleSwitcherOpen, setRoleSwitcherOpen] = useState(false);

  // Unread messages count
  const unreadCount = messages.length > 0 ? messages.length : 0;

  const handleNavClick = (tabId) => {
    setActiveTab(tabId);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-agro-forest/10 shadow-sm transition-all">
      {/* Top Banner Notice */}
      <div className="bg-agro-forest text-white text-xs py-1.5 px-4">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="inline-flex items-center gap-1 bg-agro-green/30 text-emerald-300 px-2 py-0.5 rounded-full font-medium text-[11px]">
              <ShieldCheck className="w-3.5 h-3.5" /> 100% Escrow Protected
            </span>
            <span className="hidden sm:inline text-slate-200">
              Direct-from-farm produce sourced across 18 Nigerian agricultural states. Zero middleman markup.
            </span>
          </div>

          <div className="flex items-center gap-3">
            {/* Quick Demo Switcher */}
            <div className="relative">
              <button
                onClick={() => setRoleSwitcherOpen(!roleSwitcherOpen)}
                className="flex items-center gap-1.5 text-xs text-emerald-200 hover:text-white bg-white/10 px-2.5 py-0.5 rounded-md transition"
              >
                <span>Demo Switcher: <strong className="capitalize text-white font-semibold">{user ? user.role : 'Guest'}</strong></span>
                <ChevronDown className="w-3 h-3" />
              </button>

              {roleSwitcherOpen && (
                <div
                  className="absolute right-0 mt-2 w-64 bg-white text-slate-800 rounded-xl shadow-xl border border-slate-200 p-2 z-50 animate-in fade-in zoom-in-95"
                  onMouseLeave={() => setRoleSwitcherOpen(false)}
                >
                  <p className="text-[11px] font-semibold text-slate-400 px-3 py-1.5 uppercase tracking-wider">
                    Switch Test Persona
                  </p>
                  <button
                    onClick={() => { login('restaurant'); setRoleSwitcherOpen(false); }}
                    className="w-full text-left px-3 py-2 rounded-lg text-xs hover:bg-emerald-50 flex items-center justify-between group transition"
                  >
                    <div>
                      <div className="font-semibold text-slate-800 group-hover:text-agro-forest">Chef Deji Balogun</div>
                      <div className="text-[11px] text-slate-500">Restaurant Buyer (Terra Kulture)</div>
                    </div>
                    <span className="text-[10px] bg-emerald-100 text-emerald-800 px-1.5 py-0.5 rounded">Buyer</span>
                  </button>
                  <button
                    onClick={() => { login('farmer'); setRoleSwitcherOpen(false); }}
                    className="w-full text-left px-3 py-2 rounded-lg text-xs hover:bg-emerald-50 flex items-center justify-between group transition"
                  >
                    <div>
                      <div className="font-semibold text-slate-800 group-hover:text-agro-forest">Alh. Ibrahim Garba</div>
                      <div className="text-[11px] text-slate-500">Verified Farmer (Kano State)</div>
                    </div>
                    <span className="text-[10px] bg-green-100 text-green-800 px-1.5 py-0.5 rounded">Farmer</span>
                  </button>
                  <button
                    onClick={() => { login('supermarket'); setRoleSwitcherOpen(false); }}
                    className="w-full text-left px-3 py-2 rounded-lg text-xs hover:bg-emerald-50 flex items-center justify-between group transition"
                  >
                    <div>
                      <div className="font-semibold text-slate-800 group-hover:text-agro-forest">Ngozi Obi</div>
                      <div className="text-[11px] text-slate-500">Procurement (Hubmart Stores)</div>
                    </div>
                    <span className="text-[10px] bg-blue-100 text-blue-800 px-1.5 py-0.5 rounded">Retailer</span>
                  </button>
                </div>
              )}
            </div>

            <button
              onClick={() => handleNavClick('contact')}
              className="text-xs text-slate-300 hover:text-white hidden md:inline"
            >
              Support: +234 800-AGROMATCH
            </button>
          </div>
        </div>
      </div>

      {/* Main Header Container */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex items-center gap-3 cursor-pointer" onClick={() => handleNavClick('home')}>
            <div className="w-11 h-11 rounded-2xl bg-gradient-to-br from-agro-forest to-agro-green flex items-center justify-center shadow-md shadow-agro-green/20 text-white transform transition hover:scale-105">
              <Sprout className="w-6 h-6 text-lime-300" />
            </div>
            <div>
              <div className="flex items-center gap-1.5">
                <span className="text-2xl font-black tracking-tight text-agro-forest">AGRO<span className="text-agro-green">MATCH</span></span>
                <span className="bg-lime-400 text-agro-forest text-[10px] font-bold px-1.5 py-0.5 rounded tracking-wide">B2B</span>
              </div>
              <p className="text-[11px] text-agro-muted font-medium tracking-tight -mt-1 hidden sm:block">
                Direct Farm-to-Business Marketplace
              </p>
            </div>
          </div>

          {/* Desktop Nav Links */}
          <nav className="hidden lg:flex items-center gap-1">
            <button
              onClick={() => handleNavClick('home')}
              className={`px-3.5 py-2 rounded-lg text-sm font-semibold transition ${
                activeTab === 'home'
                  ? 'text-agro-forest bg-green-50'
                  : 'text-slate-600 hover:text-agro-forest hover:bg-slate-50'
              }`}
            >
              Home
            </button>

            <button
              onClick={() => handleNavClick('marketplace')}
              className={`px-3.5 py-2 rounded-lg text-sm font-semibold transition flex items-center gap-1.5 ${
                activeTab === 'marketplace'
                  ? 'text-agro-forest bg-green-50'
                  : 'text-slate-600 hover:text-agro-forest hover:bg-slate-50'
              }`}
            >
              <Store className="w-4 h-4 text-agro-green" />
              Marketplace
            </button>

            <button
              onClick={() => handleNavClick('bulk-procurement')}
              className={`px-3.5 py-2 rounded-lg text-sm font-semibold transition flex items-center gap-1.5 ${
                activeTab === 'bulk-procurement'
                  ? 'text-agro-forest bg-green-50'
                  : 'text-slate-600 hover:text-agro-forest hover:bg-slate-50'
              }`}
            >
              <Building2 className="w-4 h-4 text-emerald-600" />
              For Buyers & Bulk
            </button>

            <button
              onClick={() => {
                if (user?.role === 'farmer') {
                  handleNavClick('farmer-dashboard');
                } else {
                  handleNavClick('farmer-dashboard');
                }
              }}
              className={`px-3.5 py-2 rounded-lg text-sm font-semibold transition flex items-center gap-1.5 ${
                activeTab === 'farmer-dashboard'
                  ? 'text-agro-forest bg-green-50'
                  : 'text-slate-600 hover:text-agro-forest hover:bg-slate-50'
              }`}
            >
              <Wheat className="w-4 h-4 text-lime-600" />
              For Farmers
            </button>

            <button
              onClick={() => handleNavClick('seasonal-calendar')}
              className={`px-3.5 py-2 rounded-lg text-sm font-semibold transition flex items-center gap-1.5 ${
                activeTab === 'seasonal-calendar'
                  ? 'text-agro-forest bg-green-50'
                  : 'text-slate-600 hover:text-agro-forest hover:bg-slate-50'
              }`}
            >
              <Calendar className="w-4 h-4 text-agro-muted" />
              Seasonal Guide
            </button>

            <button
              onClick={() => handleNavClick('price-comparison')}
              className={`px-3.5 py-2 rounded-lg text-sm font-semibold transition flex items-center gap-1.5 ${
                activeTab === 'price-comparison'
                  ? 'text-agro-forest bg-green-50'
                  : 'text-slate-600 hover:text-agro-forest hover:bg-slate-50'
              }`}
            >
              <TrendingDown className="w-4 h-4 text-agro-green" />
              Price Compare
            </button>

            <button
              onClick={() => handleNavClick('about')}
              className={`px-3.5 py-2 rounded-lg text-sm font-semibold transition ${
                activeTab === 'about'
                  ? 'text-agro-forest bg-green-50'
                  : 'text-slate-600 hover:text-agro-forest hover:bg-slate-50'
              }`}
            >
              About
            </button>
          </nav>

          {/* Action Buttons */}
          <div className="flex items-center gap-3">
            {/* Search Trigger for Mobile/Tablet */}
            <button
              onClick={() => handleNavClick('marketplace')}
              aria-label="Search produce"
              className="p-2.5 text-slate-600 hover:text-agro-forest hover:bg-slate-100 rounded-full transition"
            >
              <Search className="w-5 h-5" />
            </button>

            {/* Direct Messages */}
            <button
              onClick={() => {
                if (user?.role === 'farmer') {
                  handleNavClick('farmer-dashboard');
                } else {
                  handleNavClick('buyer-dashboard');
                }
              }}
              aria-label="Messages"
              className="relative p-2.5 text-slate-600 hover:text-agro-forest hover:bg-slate-100 rounded-full transition"
            >
              <MessageSquare className="w-5 h-5" />
              {unreadCount > 0 && (
                <span className="absolute top-1 right-1 w-4 h-4 bg-agro-green text-white text-[10px] font-bold rounded-full flex items-center justify-center">
                  {unreadCount}
                </span>
              )}
            </button>

            {/* Cart Button */}
            <button
              onClick={() => handleNavClick('cart')}
              aria-label="Cart"
              className="relative flex items-center gap-2 bg-emerald-50 hover:bg-emerald-100 text-agro-forest border border-emerald-200 px-3.5 py-2 rounded-xl font-semibold text-sm transition shadow-sm"
            >
              <ShoppingCart className="w-5 h-5 text-agro-green" />
              <span className="hidden sm:inline font-bold">
                {cartSubtotal > 0 ? `₦${cartSubtotal.toLocaleString()}` : 'Cart'}
              </span>
              {cartItemCount > 0 && (
                <span className="w-5 h-5 bg-agro-forest text-white text-xs font-bold rounded-full flex items-center justify-center">
                  {cartItemCount}
                </span>
              )}
            </button>

            {/* User Profile or Login */}
            {user ? (
              <div className="relative">
                <button
                  onClick={() => setProfileDropdownOpen(!profileDropdownOpen)}
                  className="flex items-center gap-2 pl-2 pr-3 py-1.5 rounded-full border border-slate-200 hover:border-agro-green transition bg-white shadow-sm"
                >
                  <img
                    src={user.avatar || 'https://images.unsplash.com/photo-1566753323558-f4e0952af115?auto=format&fit=crop&w=100&q=80'}
                    alt={user.name}
                    className="w-8 h-8 rounded-full object-cover ring-2 ring-agro-green/30"
                  />
                  <div className="hidden md:block text-left text-xs leading-tight">
                    <div className="font-bold text-slate-800 truncate max-w-[120px]">{user.name.split(' ')[0]}</div>
                    <div className="text-[10px] font-medium text-agro-green capitalize">{user.role}</div>
                  </div>
                  <ChevronDown className="w-3.5 h-3.5 text-slate-400" />
                </button>

                {profileDropdownOpen && (
                  <div
                    className="absolute right-0 mt-2 w-56 bg-white rounded-2xl shadow-2xl border border-slate-100 p-2 z-50 animate-in fade-in zoom-in-95"
                    onMouseLeave={() => setProfileDropdownOpen(false)}
                  >
                    <div className="px-3 py-2 border-b border-slate-100">
                      <div className="text-xs font-bold text-slate-800">{user.name}</div>
                      <div className="text-[11px] text-slate-400 truncate">{user.email}</div>
                      <span className="inline-block mt-1 text-[10px] font-semibold bg-green-100 text-green-800 px-2 py-0.5 rounded-full capitalize">
                        {user.role} Account
                      </span>
                    </div>

                    <div className="py-1">
                      {user.role === 'farmer' ? (
                        <button
                          onClick={() => { handleNavClick('farmer-dashboard'); setProfileDropdownOpen(false); }}
                          className="w-full text-left px-3 py-2 rounded-xl text-xs font-semibold text-slate-700 hover:bg-green-50 hover:text-agro-forest flex items-center gap-2 transition"
                        >
                          <Wheat className="w-4 h-4 text-agro-green" />
                          Farmer Dashboard
                        </button>
                      ) : (
                        <button
                          onClick={() => { handleNavClick('buyer-dashboard'); setProfileDropdownOpen(false); }}
                          className="w-full text-left px-3 py-2 rounded-xl text-xs font-semibold text-slate-700 hover:bg-green-50 hover:text-agro-forest flex items-center gap-2 transition"
                        >
                          <Building2 className="w-4 h-4 text-agro-green" />
                          Buyer Dashboard
                        </button>
                      )}

                      <button
                        onClick={() => { handleNavClick('bulk-procurement'); setProfileDropdownOpen(false); }}
                        className="w-full text-left px-3 py-2 rounded-xl text-xs font-semibold text-slate-700 hover:bg-green-50 hover:text-agro-forest flex items-center gap-2 transition"
                      >
                        <Layers className="w-4 h-4 text-agro-green" />
                        Bulk Requests & RFQs
                      </button>

                      <button
                        onClick={() => { handleNavClick('cart'); setProfileDropdownOpen(false); }}
                        className="w-full text-left px-3 py-2 rounded-xl text-xs font-semibold text-slate-700 hover:bg-green-50 hover:text-agro-forest flex items-center gap-2 transition"
                      >
                        <ShoppingCart className="w-4 h-4 text-agro-green" />
                        Shopping Cart ({cartItemCount})
                      </button>
                    </div>

                    <div className="pt-1 border-t border-slate-100">
                      <button
                        onClick={() => { logout(); setProfileDropdownOpen(false); }}
                        className="w-full text-left px-3 py-2 rounded-xl text-xs font-semibold text-rose-600 hover:bg-rose-50 flex items-center gap-2 transition"
                      >
                        <LogOut className="w-4 h-4" />
                        Log Out
                      </button>
                    </div>
                  </div>
                )}
              </div>
            ) : (
              <div className="flex items-center gap-2">
                <button
                  onClick={() => {
                    setAuthMode('login');
                    setIsAuthModalOpen(true);
                  }}
                  className="px-4 py-2 text-xs font-bold text-agro-forest hover:bg-green-50 rounded-xl transition"
                >
                  Sign In
                </button>
                <button
                  onClick={() => {
                    setAuthMode('register');
                    setIsAuthModalOpen(true);
                  }}
                  className="px-4 py-2 text-xs font-bold bg-agro-green hover:bg-emerald-700 text-white rounded-xl shadow-md shadow-agro-green/20 transition transform hover:-translate-y-0.5"
                >
                  Register
                </button>
              </div>
            )}

            {/* Mobile Menu Toggle */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 text-slate-600 hover:text-agro-forest hover:bg-slate-100 rounded-xl transition"
              aria-label="Toggle navigation"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-t border-slate-100 px-4 pt-3 pb-6 shadow-xl animate-in slide-in-from-top-4">
          <div className="space-y-1">
            <button
              onClick={() => handleNavClick('home')}
              className={`w-full text-left px-4 py-3 rounded-xl text-sm font-semibold transition ${
                activeTab === 'home' ? 'bg-green-50 text-agro-forest' : 'text-slate-700'
              }`}
            >
              Home
            </button>
            <button
              onClick={() => handleNavClick('marketplace')}
              className={`w-full text-left px-4 py-3 rounded-xl text-sm font-semibold transition flex items-center gap-2 ${
                activeTab === 'marketplace' ? 'bg-green-50 text-agro-forest' : 'text-slate-700'
              }`}
            >
              <Store className="w-4 h-4 text-agro-green" />
              Agricultural Marketplace
            </button>
            <button
              onClick={() => handleNavClick('bulk-procurement')}
              className={`w-full text-left px-4 py-3 rounded-xl text-sm font-semibold transition flex items-center gap-2 ${
                activeTab === 'bulk-procurement' ? 'bg-green-50 text-agro-forest' : 'text-slate-700'
              }`}
            >
              <Building2 className="w-4 h-4 text-agro-green" />
              For Restaurants & Wholesalers
            </button>
            <button
              onClick={() => handleNavClick('farmer-dashboard')}
              className={`w-full text-left px-4 py-3 rounded-xl text-sm font-semibold transition flex items-center gap-2 ${
                activeTab === 'farmer-dashboard' ? 'bg-green-50 text-agro-forest' : 'text-slate-700'
              }`}
            >
              <Wheat className="w-4 h-4 text-lime-600" />
              Farmer Dashboard & Sell Produce
            </button>
            <button
              onClick={() => handleNavClick('buyer-dashboard')}
              className={`w-full text-left px-4 py-3 rounded-xl text-sm font-semibold transition flex items-center gap-2 ${
                activeTab === 'buyer-dashboard' ? 'bg-green-50 text-agro-forest' : 'text-slate-700'
              }`}
            >
              <Truck className="w-4 h-4 text-agro-green" />
              Buyer Orders & Live Tracking
            </button>
            <button
              onClick={() => handleNavClick('seasonal-calendar')}
              className={`w-full text-left px-4 py-3 rounded-xl text-sm font-semibold transition flex items-center gap-2 ${
                activeTab === 'seasonal-calendar' ? 'bg-green-50 text-agro-forest' : 'text-slate-700'
              }`}
            >
              <Calendar className="w-4 h-4 text-agro-green" />
              Seasonal Harvest Calendar
            </button>
            <button
              onClick={() => handleNavClick('price-comparison')}
              className={`w-full text-left px-4 py-3 rounded-xl text-sm font-semibold transition flex items-center gap-2 ${
                activeTab === 'price-comparison' ? 'bg-green-50 text-agro-forest' : 'text-slate-700'
              }`}
            >
              <TrendingDown className="w-4 h-4 text-agro-green" />
              Smart Price Comparison
            </button>
            <button
              onClick={() => handleNavClick('about')}
              className="w-full text-left px-4 py-3 rounded-xl text-sm font-semibold text-slate-700"
            >
              About AGROMATCH
            </button>
            <button
              onClick={() => handleNavClick('contact')}
              className="w-full text-left px-4 py-3 rounded-xl text-sm font-semibold text-slate-700"
            >
              Contact & Support Desk
            </button>
          </div>

          <div className="mt-4 pt-4 border-t border-slate-100 flex items-center gap-3">
            <button
              onClick={() => { login('farmer'); setMobileMenuOpen(false); }}
              className="flex-1 py-2.5 px-3 text-xs font-bold bg-green-50 text-agro-forest rounded-xl border border-green-200"
            >
              Test as Farmer
            </button>
            <button
              onClick={() => { login('restaurant'); setMobileMenuOpen(false); }}
              className="flex-1 py-2.5 px-3 text-xs font-bold bg-agro-green text-white rounded-xl"
            >
              Test as Buyer
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
