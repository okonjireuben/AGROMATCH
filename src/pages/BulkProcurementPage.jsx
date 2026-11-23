import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import { NIGERIAN_STATES, CATEGORIES } from '../data/mockData';
import {
  Building2,
  Layers,
  Repeat,
  FileText,
  TrendingDown,
  CheckCircle2,
  Clock,
  Send,
  PlusCircle,
  Truck,
  ShieldCheck,
  Scale,
  Sparkles,
  ArrowRight
} from 'lucide-react';

export default function BulkProcurementPage() {
  const {
    bulkRequests,
    createBulkRequest,
    user,
    products,
    addToCart,
    showNotification
  } = useApp();

  const [rfqModalOpen, setRfqModalOpen] = useState(false);
  const [crop, setCrop] = useState('Abakaliki Parboiled Rice (50kg)');
  const [quantity, setQuantity] = useState('100 Bags');
  const [targetState, setTargetState] = useState('Lagos State');
  const [budget, setBudget] = useState('₦64,000 per bag');
  const [frequency, setFrequency] = useState('Weekly Standing Order');
  const [notes, setNotes] = useState('Requires stone-free optical sort certification and morning kitchen dock drop-off.');

  const handleCreateRfq = (e) => {
    e.preventDefault();
    createBulkRequest({
      crop,
      requiredQuantity: `${quantity} (${frequency})`,
      targetDeliveryState: targetState,
      budgetPerUnit: budget,
      notes
    });
    setRfqModalOpen(false);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 animate-in fade-in space-y-10">
      {/* Page Hero */}
      <div className="bg-gradient-to-r from-agro-forest via-emerald-950 to-agro-forest rounded-3xl p-8 sm:p-12 text-white shadow-xl relative overflow-hidden">
        <div className="relative z-10 max-w-2xl">
          <div className="inline-flex items-center gap-1.5 bg-lime-400 text-agro-forest text-xs font-black px-3 py-1 rounded-full mb-3">
            <Layers className="w-3.5 h-3.5" />
            <span>COMMERCIAL PROCUREMENT DESK</span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-black tracking-tight leading-tight">
            Bulk Procurement for Restaurants & Supermarkets
          </h1>
          <p className="text-xs sm:text-sm text-slate-300 mt-2 leading-relaxed">
            Eliminate open-market volatility. Lock in direct farm contracts, set up recurring weekly produce deliveries, and submit multi-ton RFQs to vetted agricultural cooperatives.
          </p>

          <div className="flex flex-wrap gap-3 mt-6">
            <button
              onClick={() => setRfqModalOpen(true)}
              className="px-6 py-3.5 bg-lime-400 hover:bg-lime-300 text-agro-forest font-black text-xs rounded-2xl shadow-lg transition flex items-center gap-2"
            >
              <FileText className="w-4 h-4" />
              <span>Create Request for Quotation (RFQ)</span>
            </button>
          </div>
        </div>
      </div>

      {/* Two Specialized Personas: Restaurants vs Retailers */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* For Restaurant Chefs & Caterers */}
        <div className="bg-white rounded-3xl p-8 border border-slate-200/90 shadow-soft space-y-6">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-2xl bg-amber-100 text-amber-700 flex items-center justify-center font-bold">
              👨‍🍳
            </div>
            <div>
              <h3 className="text-lg font-black text-slate-900">Hospitality & Restaurant Solutions</h3>
              <p className="text-xs text-slate-500">Fine dining, industrial catering, and hotel kitchens</p>
            </div>
          </div>

          <ul className="space-y-3 text-xs text-slate-700">
            <li className="flex items-start gap-2.5">
              <CheckCircle2 className="w-4 h-4 text-agro-green shrink-0 mt-0.5" />
              <span><strong>Pre-dawn Kitchen Delivery:</strong> Sourced crops delivered between 5:00 AM - 8:30 AM before daily food prep begins.</span>
            </li>
            <li className="flex items-start gap-2.5">
              <CheckCircle2 className="w-4 h-4 text-agro-green shrink-0 mt-0.5" />
              <span><strong>Recurring Standing Orders:</strong> Automatic weekly baskets of Kano tomatoes, fresh rodo peppers, and live catfish.</span>
            </li>
            <li className="flex items-start gap-2.5">
              <CheckCircle2 className="w-4 h-4 text-agro-green shrink-0 mt-0.5" />
              <span><strong>Uniform Culinary Grading:</strong> Strict sorting on produce size, moisture, and zero-bruise parameters.</span>
            </li>
          </ul>

          <div className="p-4 bg-amber-50/70 border border-amber-200/80 rounded-2xl text-xs text-amber-900 font-medium">
            💡 Restaurants using AGROMATCH save an average of ₦340,000 monthly compared to spot market purchases in Lagos & Abuja.
          </div>
        </div>

        {/* For Supermarkets & Retailers */}
        <div className="bg-white rounded-3xl p-8 border border-slate-200/90 shadow-soft space-y-6">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-2xl bg-emerald-100 text-agro-forest flex items-center justify-center font-bold">
              🛒
            </div>
            <div>
              <h3 className="text-lg font-black text-slate-900">Supermarket & Retail Chain Solutions</h3>
              <p className="text-xs text-slate-500">Retail grocery chains, FMCG repackagers, and wholesalers</p>
            </div>
          </div>

          <ul className="space-y-3 text-xs text-slate-700">
            <li className="flex items-start gap-2.5">
              <CheckCircle2 className="w-4 h-4 text-agro-green shrink-0 mt-0.5" />
              <span><strong>Multi-Ton Line-Haul:</strong> Direct trailer-loads of 500+ bags of Abakaliki rice and Benue yams straight to distribution centers.</span>
            </li>
            <li className="flex items-start gap-2.5">
              <CheckCircle2 className="w-4 h-4 text-agro-green shrink-0 mt-0.5" />
              <span><strong>Wholesale Volume Tier Discounts:</strong> Up to 15% discount for recurring standing contracts with guaranteed supply.</span>
            </li>
            <li className="flex items-start gap-2.5">
              <CheckCircle2 className="w-4 h-4 text-agro-green shrink-0 mt-0.5" />
              <span><strong>Verified Traceability:</strong> Every batch carries farm origin state, harvest lot number, and safety verification.</span>
            </li>
          </ul>

          <div className="p-4 bg-emerald-50/70 border border-emerald-200/80 rounded-2xl text-xs text-agro-forest font-medium">
            🌾 Protect your retail shelf margins with locked wholesale commodity contracts during festive seasonal spikes.
          </div>
        </div>
      </div>

      {/* Active RFQs Table */}
      <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-soft space-y-6">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div>
            <h2 className="text-xl font-black text-slate-900">Commercial Requests for Quotation (RFQs)</h2>
            <p className="text-xs text-slate-500">Live tenders submitted by corporate buyers receiving pooled bids from cooperatives</p>
          </div>

          <button
            onClick={() => setRfqModalOpen(true)}
            className="px-4 py-2 bg-agro-green hover:bg-emerald-700 text-white font-bold text-xs rounded-xl shadow-sm transition flex items-center gap-1.5"
          >
            <PlusCircle className="w-4 h-4" />
            <span>Submit New RFQ</span>
          </button>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs">
            <thead>
              <tr className="border-b border-slate-100 text-slate-400 font-semibold">
                <th className="pb-3">RFQ ID</th>
                <th className="pb-3">Buyer / Company</th>
                <th className="pb-3">Required Produce & Quantity</th>
                <th className="pb-3">Target Destination</th>
                <th className="pb-3">Target Unit Budget</th>
                <th className="pb-3">Quotes Received</th>
                <th className="pb-3">Status</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {bulkRequests.map(rfq => (
                <tr key={rfq.id} className="hover:bg-slate-50/80">
                  <td className="py-4 font-bold text-slate-900">{rfq.id}</td>
                  <td className="py-4">
                    <div className="font-bold text-slate-800">{rfq.buyerName}</div>
                    <div className="text-[11px] text-slate-400">{rfq.buyerType}</div>
                  </td>
                  <td className="py-4">
                    <div className="font-bold text-agro-forest">{rfq.crop}</div>
                    <div className="text-[11px] text-slate-500">{rfq.requiredQuantity}</div>
                  </td>
                  <td className="py-4 font-medium text-slate-600">{rfq.targetDeliveryState}</td>
                  <td className="py-4 font-black text-slate-800">{rfq.budgetPerUnit}</td>
                  <td className="py-4">
                    <span className="font-bold text-agro-green bg-green-50 px-2 py-0.5 rounded">
                      {rfq.quotesReceived} Bids In
                    </span>
                  </td>
                  <td className="py-4">
                    <span className="bg-emerald-100 text-agro-forest px-2.5 py-1 rounded-full text-[10px] font-bold">
                      {rfq.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* RFQ Creation Modal */}
      {rfqModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-in fade-in">
          <div className="bg-white rounded-3xl p-6 sm:p-8 max-w-xl w-full max-h-[90vh] overflow-y-auto border border-slate-100 shadow-2xl space-y-6">
            <div className="flex items-center justify-between pb-4 border-b border-slate-100">
              <div>
                <h3 className="text-lg font-black text-slate-900">Publish Commercial RFQ</h3>
                <p className="text-xs text-slate-500">Notify 1,200+ verified cooperatives and receive competitive pricing.</p>
              </div>
              <button
                onClick={() => setRfqModalOpen(false)}
                className="text-slate-400 hover:text-slate-600"
              >
                ✕
              </button>
            </div>

            <form onSubmit={handleCreateRfq} className="space-y-4">
              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">Produce / Crop Required</label>
                <input
                  type="text"
                  value={crop}
                  onChange={(e) => setCrop(e.target.value)}
                  placeholder="e.g. Kano Red Tomatoes or Ebonyi Rice"
                  className="w-full text-xs p-2.5 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-agro-green"
                  required
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">Required Volume / Tonnage</label>
                  <input
                    type="text"
                    value={quantity}
                    onChange={(e) => setQuantity(e.target.value)}
                    placeholder="e.g. 50 Baskets or 20 Metric Tons"
                    className="w-full text-xs p-2.5 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-agro-green"
                    required
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">Delivery Frequency</label>
                  <select
                    value={frequency}
                    onChange={(e) => setFrequency(e.target.value)}
                    className="w-full text-xs p-2.5 rounded-xl border border-slate-200 bg-white"
                  >
                    <option value="One-Time Bulk Purchase">One-Time Bulk Purchase</option>
                    <option value="Weekly Standing Order">Weekly Recurring Supply</option>
                    <option value="Bi-Weekly Supply">Bi-Weekly Supply</option>
                    <option value="Monthly Standing Order">Monthly Standing Order</option>
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">Target Delivery State</label>
                  <select
                    value={targetState}
                    onChange={(e) => setTargetState(e.target.value)}
                    className="w-full text-xs p-2.5 rounded-xl border border-slate-200 bg-white"
                  >
                    {NIGERIAN_STATES.filter(s => s !== 'All States').map(s => (
                      <option key={s} value={`${s} State`}>{s} State</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">Target Budget per Unit (₦)</label>
                  <input
                    type="text"
                    value={budget}
                    onChange={(e) => setBudget(e.target.value)}
                    placeholder="e.g. ₦30,000 per basket"
                    className="w-full text-xs p-2.5 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-agro-green"
                    required
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">Quality Specifications & Instructions</label>
                <textarea
                  rows={3}
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                  placeholder="Specify sorting requirements, maximum moisture, packaging, and dock delivery window..."
                  className="w-full text-xs p-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-agro-green"
                />
              </div>

              <div className="flex justify-end gap-2 pt-4 border-t border-slate-100">
                <button
                  type="button"
                  onClick={() => setRfqModalOpen(false)}
                  className="px-4 py-2 text-xs font-bold text-slate-600 hover:text-slate-800"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-6 py-2.5 bg-agro-green hover:bg-emerald-700 text-white font-black text-xs rounded-xl shadow-md transition"
                >
                  Publish RFQ to Cooperatives
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
