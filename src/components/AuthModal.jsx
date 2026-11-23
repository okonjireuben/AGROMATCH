import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import {
  X,
  Sprout,
  ShieldCheck,
  CheckCircle2,
  Wheat,
  UtensilsCrossed,
  Store,
  Layers,
  User,
  ArrowRight,
  Lock,
  Mail,
  MapPin,
  Phone,
  Briefcase
} from 'lucide-react';
import { NIGERIAN_STATES } from '../data/mockData';

export default function AuthModal() {
  const {
    isAuthModalOpen,
    setIsAuthModalOpen,
    authMode,
    setAuthMode,
    login,
    register,
    showNotification
  } = useApp();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [fullName, setFullName] = useState('');
  const [phone, setPhone] = useState('');
  const [businessName, setBusinessName] = useState('');
  const [selectedRole, setSelectedRole] = useState('farmer'); // 'farmer', 'restaurant', 'retailer', 'wholesaler', 'individual'
  const [state, setState] = useState('Lagos');

  if (!isAuthModalOpen) return null;

  const handleLoginSubmit = (e) => {
    e.preventDefault();
    if (!email || !password) {
      showNotification('Please fill in both email and password', 'error');
      return;
    }
    // Simulate login
    login('restaurant', {
      id: `usr-${Date.now()}`,
      name: email.split('@')[0].toUpperCase(),
      email,
      role: 'restaurant',
      businessName: 'Gourmet Kitchens Ltd',
      location: 'Lagos State, Nigeria',
      phone: '+234 803 000 1234',
      avatar: 'https://images.unsplash.com/photo-1566753323558-f4e0952af115?auto=format&fit=crop&w=200&q=80',
      verified: true
    });
  };

  const handleRegisterSubmit = (e) => {
    e.preventDefault();
    if (!fullName || !email || !password) {
      showNotification('Please fill in required fields', 'error');
      return;
    }
    register({
      fullName,
      email,
      phone,
      businessName,
      role: selectedRole,
      state
    });
  };

  const roles = [
    { id: 'farmer', title: 'Farmer / Producer', desc: 'I cultivate crops, livestock or aquaculture', icon: Wheat },
    { id: 'restaurant', title: 'Restaurant / Chef', desc: 'I source fresh ingredients for hospitality', icon: UtensilsCrossed },
    { id: 'retailer', title: 'Supermarket / Retailer', desc: 'I buy retail-packaged produce', icon: Store },
    { id: 'wholesaler', title: 'Wholesaler / Trader', desc: 'I procure multi-ton bulk truckloads', icon: Layers },
    { id: 'individual', title: 'Individual Buyer', desc: 'Direct farm produce for my household', icon: User }
  ];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-in fade-in">
      <div className="bg-white rounded-3xl shadow-2xl max-w-lg w-full max-h-[90vh] overflow-y-auto border border-slate-100 relative">
        {/* Close Button */}
        <button
          onClick={() => setIsAuthModalOpen(false)}
          className="absolute top-5 right-5 p-2 rounded-full text-slate-400 hover:text-slate-700 hover:bg-slate-100 transition z-10"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Header */}
        <div className="p-6 sm:p-8 pb-4 border-b border-slate-100">
          <div className="flex items-center gap-2 mb-2">
            <div className="w-8 h-8 rounded-xl bg-agro-green flex items-center justify-center text-white">
              <Sprout className="w-5 h-5" />
            </div>
            <span className="text-xl font-black text-agro-forest">AGRO<span className="text-agro-green">MATCH</span></span>
          </div>

          <div className="flex border-b border-slate-200 mt-4">
            <button
              onClick={() => setAuthMode('login')}
              className={`pb-3 font-bold text-sm flex-1 text-center transition ${
                authMode === 'login'
                  ? 'text-agro-forest border-b-2 border-agro-green'
                  : 'text-slate-400 hover:text-slate-600'
              }`}
            >
              Sign In to Account
            </button>
            <button
              onClick={() => setAuthMode('register')}
              className={`pb-3 font-bold text-sm flex-1 text-center transition ${
                authMode === 'register'
                  ? 'text-agro-forest border-b-2 border-agro-green'
                  : 'text-slate-400 hover:text-slate-600'
              }`}
            >
              Create Account
            </button>
          </div>
        </div>

        {/* Modal Body */}
        <div className="p-6 sm:p-8 pt-4">
          {/* Quick Demo Accounts Banner */}
          <div className="mb-6 p-3 bg-emerald-50/80 rounded-2xl border border-emerald-200/70">
            <div className="text-[11px] font-bold text-agro-forest uppercase tracking-wider mb-1.5 flex items-center gap-1">
              <ShieldCheck className="w-3.5 h-3.5 text-agro-green" />
              <span>Instant One-Click Demo Access:</span>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-1.5">
              <button
                type="button"
                onClick={() => login('farmer')}
                className="py-1.5 px-2 bg-white hover:bg-green-100/60 text-[11px] font-bold text-agro-forest rounded-lg border border-green-200 transition text-left truncate"
              >
                🌾 Verified Farmer
              </button>
              <button
                type="button"
                onClick={() => login('restaurant')}
                className="py-1.5 px-2 bg-white hover:bg-green-100/60 text-[11px] font-bold text-agro-forest rounded-lg border border-green-200 transition text-left truncate"
              >
                👨‍🍳 Restaurant Chef
              </button>
              <button
                type="button"
                onClick={() => login('supermarket')}
                className="py-1.5 px-2 bg-white hover:bg-green-100/60 text-[11px] font-bold text-agro-forest rounded-lg border border-green-200 transition text-left truncate"
              >
                🛒 Supermarket Buyer
              </button>
            </div>
          </div>

          {authMode === 'login' ? (
            <form onSubmit={handleLoginSubmit} className="space-y-4">
              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">Email Address</label>
                <div className="relative">
                  <Mail className="w-4 h-4 text-slate-400 absolute left-3.5 top-3.5" />
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="e.g. chef@terrakulture.com"
                    className="w-full text-xs pl-10 pr-3.5 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-agro-green"
                    required
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">Password</label>
                <div className="relative">
                  <Lock className="w-4 h-4 text-slate-400 absolute left-3.5 top-3.5" />
                  <input
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="••••••••"
                    className="w-full text-xs pl-10 pr-3.5 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-agro-green"
                    required
                  />
                </div>
              </div>

              <div className="flex items-center justify-between text-xs">
                <label className="flex items-center gap-2 cursor-pointer text-slate-600">
                  <input type="checkbox" defaultChecked className="rounded text-agro-green focus:ring-agro-green" />
                  <span>Remember me</span>
                </label>
                <span className="text-agro-green hover:underline cursor-pointer">Forgot password?</span>
              </div>

              <button
                type="submit"
                className="w-full py-3.5 rounded-xl bg-agro-green hover:bg-emerald-700 text-white font-black text-sm shadow-md transition transform active:scale-98 flex items-center justify-center gap-2"
              >
                <span>Sign In to Dashboard</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </form>
          ) : (
            <form onSubmit={handleRegisterSubmit} className="space-y-4">
              {/* Account Type Selector */}
              <div>
                <label className="block text-xs font-bold text-slate-700 mb-2">Select Your Role</label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {roles.map((r) => {
                    const IconComponent = r.icon;
                    const isSelected = selectedRole === r.id;
                    return (
                      <div
                        key={r.id}
                        onClick={() => setSelectedRole(r.id)}
                        className={`p-3 rounded-xl border cursor-pointer transition flex items-start gap-2.5 ${
                          isSelected
                            ? 'bg-green-50/90 border-agro-green ring-1 ring-agro-green'
                            : 'border-slate-200 hover:border-slate-300'
                        }`}
                      >
                        <IconComponent className={`w-4 h-4 mt-0.5 shrink-0 ${isSelected ? 'text-agro-forest' : 'text-slate-400'}`} />
                        <div>
                          <div className={`text-xs font-bold ${isSelected ? 'text-agro-forest' : 'text-slate-800'}`}>
                            {r.title}
                          </div>
                          <div className="text-[10px] text-slate-500 leading-tight">
                            {r.desc}
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">Full Name</label>
                  <input
                    type="text"
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                    placeholder="e.g. Alhaji Ibrahim Garba"
                    className="w-full text-xs px-3.5 py-2.5 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-agro-green"
                    required
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">Phone Number</label>
                  <input
                    type="tel"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="+234 803 000 0000"
                    className="w-full text-xs px-3.5 py-2.5 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-agro-green"
                    required
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">Business / Farm Name</label>
                  <input
                    type="text"
                    value={businessName}
                    onChange={(e) => setBusinessName(e.target.value)}
                    placeholder="e.g. Dan-Kano Agro or Terra Kulture"
                    className="w-full text-xs px-3.5 py-2.5 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-agro-green"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">Primary State</label>
                  <select
                    value={state}
                    onChange={(e) => setState(e.target.value)}
                    className="w-full text-xs px-3.5 py-2.5 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-agro-green bg-white"
                  >
                    {NIGERIAN_STATES.filter(s => s !== 'All States').map(s => (
                      <option key={s} value={s}>{s} State</option>
                    ))}
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">Email Address</label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="name@business.com"
                  className="w-full text-xs px-3.5 py-2.5 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-agro-green"
                  required
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">Create Password</label>
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Min. 8 characters"
                  className="w-full text-xs px-3.5 py-2.5 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-agro-green"
                  required
                />
              </div>

              <button
                type="submit"
                className="w-full py-3.5 rounded-xl bg-agro-green hover:bg-emerald-700 text-white font-black text-sm shadow-md transition transform active:scale-98 flex items-center justify-center gap-2"
              >
                <span>Register & Open Dashboard</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </form>
          )}

          <div className="mt-4 pt-4 border-t border-slate-100 text-center text-xs text-slate-500">
            By continuing, you agree to AGROMATCH's <span className="text-agro-green font-medium underline">Escrow Protocol</span> and <span className="text-agro-green font-medium underline">Privacy Policy</span>.
          </div>
        </div>
      </div>
    </div>
  );
}
