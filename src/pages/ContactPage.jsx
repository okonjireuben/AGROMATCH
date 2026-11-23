import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import {
  Mail,
  Phone,
  MapPin,
  Send,
  MessageSquare,
  Building,
  CheckCircle2
} from 'lucide-react';

export default function ContactPage() {
  const { showNotification } = useApp();
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    role: 'Buyer / Commercial Kitchen',
    subject: '',
    message: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    showNotification('Thank you! Your inquiry has been dispatched to our Nigerian support team.');
    setFormData({
      fullName: '',
      email: '',
      phone: '',
      role: 'Buyer / Commercial Kitchen',
      subject: '',
      message: ''
    });
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-12">
      {/* Header */}
      <div className="text-center max-w-2xl mx-auto space-y-3">
        <span className="text-xs font-bold text-agro-green uppercase tracking-wider">
          Direct Assistance Across Nigeria
        </span>
        <h1 className="text-4xl font-black text-agro-forest tracking-tight">Contact AGROMATCH</h1>
        <p className="text-slate-600 text-sm">
          Have questions about onboarding your farm cooperative, scheduling cold-chain line-haul, or setting up corporate procurement? We are here to help.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Contact Info (5 cols) */}
        <div className="lg:col-span-5 space-y-6">
          <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200/80 shadow-soft space-y-6">
            <h2 className="text-xl font-black text-slate-900">Headquarters & Hubs</h2>

            <div className="space-y-4">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-green-50 text-agro-green flex items-center justify-center shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-bold text-slate-800 text-sm">Lagos Central Logistics Hub</h4>
                  <p className="text-xs text-slate-500 mt-0.5">
                    Plot 14 Commercial Agro Corridor, Ikeja GRA, Lagos State
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-green-50 text-agro-green flex items-center justify-center shrink-0">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-bold text-slate-800 text-sm">Direct Phone & WhatsApp</h4>
                  <p className="text-xs text-slate-500 mt-0.5">+234 (0) 800 247 6628 (Toll Free)</p>
                  <p className="text-xs text-slate-500">+234 812 900 4812 (Direct WhatsApp)</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-green-50 text-agro-green flex items-center justify-center shrink-0">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-bold text-slate-800 text-sm">Official Email</h4>
                  <p className="text-xs text-slate-500 mt-0.5">support@agromatch.ng</p>
                  <p className="text-xs text-slate-500">partnerships@agromatch.ng</p>
                </div>
              </div>
            </div>

            <div className="pt-4 border-t border-slate-100">
              <span className="text-xs font-bold text-slate-700 block mb-2">Regional Offices:</span>
              <div className="text-xs text-slate-500 space-y-1">
                <p>• <strong>Kano:</strong> Bompai Industrial Estate, Kano</p>
                <p>• <strong>Benue:</strong> Zaki-Biam Produce Route, Benue</p>
                <p>• <strong>Port Harcourt:</strong> Trans-Amadi Hub, Rivers</p>
              </div>
            </div>
          </div>
        </div>

        {/* Contact Form (7 cols) */}
        <div className="lg:col-span-7">
          <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200/80 shadow-soft">
            <h2 className="text-xl font-black text-slate-900 mb-6 flex items-center gap-2">
              <MessageSquare className="w-5 h-5 text-agro-green" />
              Send Us a Message
            </h2>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">Your Full Name</label>
                  <input
                    type="text"
                    required
                    value={formData.fullName}
                    onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl border border-slate-200 focus:border-agro-green focus:ring-2 focus:ring-agro-green/20 outline-none text-sm"
                    placeholder="e.g. Aliko Mohammed"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">Your Email</label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl border border-slate-200 focus:border-agro-green focus:ring-2 focus:ring-agro-green/20 outline-none text-sm"
                    placeholder="name@company.com"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">Phone Number</label>
                  <input
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl border border-slate-200 focus:border-agro-green focus:ring-2 focus:ring-agro-green/20 outline-none text-sm"
                    placeholder="+234 800 000 0000"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">I am a...</label>
                  <select
                    value={formData.role}
                    onChange={(e) => setFormData({ ...formData, role: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl border border-slate-200 focus:border-agro-green focus:ring-2 focus:ring-agro-green/20 outline-none text-sm bg-white"
                  >
                    <option>Buyer / Commercial Kitchen</option>
                    <option>Farmer / Producer Cooperative</option>
                    <option>Logistics Haulage Partner</option>
                    <option>Supermarket / Retail Chain</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">Subject</label>
                <input
                  type="text"
                  required
                  value={formData.subject}
                  onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                  className="w-full px-4 py-2.5 rounded-xl border border-slate-200 focus:border-agro-green focus:ring-2 focus:ring-agro-green/20 outline-none text-sm"
                  placeholder="e.g. Weekly Standing Order for Restaurant Chain"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">Your Message</label>
                <textarea
                  required
                  rows={4}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full px-4 py-2.5 rounded-xl border border-slate-200 focus:border-agro-green focus:ring-2 focus:ring-agro-green/20 outline-none text-sm resize-none"
                  placeholder="Describe your produce requirements, quantity, or query..."
                />
              </div>

              <button
                type="submit"
                className="w-full py-3.5 bg-agro-green hover:bg-emerald-700 text-white font-bold rounded-2xl shadow-lg shadow-agro-green/20 transition flex items-center justify-center gap-2 text-sm"
              >
                <Send className="w-4 h-4" />
                <span>Submit Message</span>
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

