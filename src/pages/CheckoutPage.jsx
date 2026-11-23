import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import {
  ShieldCheck,
  Truck,
  CheckCircle2,
  Building,
  CreditCard,
  Lock,
  ArrowLeft
} from 'lucide-react';

export default function CheckoutPage() {
  const { cart, cartSubtotal, placeOrder, setActiveTab, user } = useApp();

  const [formData, setFormData] = useState({
    businessName: user?.businessName || '',
    buyerName: user?.name || '',
    email: user?.email || '',
    phone: user?.phone || '',
    deliveryAddress: 'Plot 1376 Savage Street, Victoria Island, Lagos State',
    state: 'Lagos State',
    deliveryInstructions: 'Deliver to rear kitchen loading bay before 10:00 AM',
    paymentMethod: 'Bank Transfer (Dedicated Virtual Escrow Account)'
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const deliveryFee = cart.length > 0 ? 15000 : 0;
  const escrowFee = cart.length > 0 ? Math.round(cartSubtotal * 0.015) : 0;
  const total = cartSubtotal + deliveryFee + escrowFee;

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    setTimeout(() => {
      const order = placeOrder({
        buyerName: formData.buyerName,
        businessName: formData.businessName,
        deliveryAddress: `${formData.deliveryAddress}, ${formData.state}`,
        deliveryFee,
        paymentMethod: formData.paymentMethod
      });
      setIsSubmitting(false);
      setActiveTab('order-tracking');
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }, 1000);
  };

  if (cart.length === 0) {
    return (
      <div className="max-w-3xl mx-auto px-4 py-16 text-center">
        <h2 className="text-2xl font-black text-slate-900 mb-4">No Items to Checkout</h2>
        <button
          onClick={() => setActiveTab('marketplace')}
          className="px-6 py-3 bg-agro-green text-white font-bold rounded-xl"
        >
          Return to Marketplace
        </button>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
      <button
        onClick={() => setActiveTab('cart')}
        className="inline-flex items-center gap-2 text-sm font-bold text-slate-600 hover:text-agro-forest transition mb-6"
      >
        <ArrowLeft className="w-4 h-4" />
        Back to Cart
      </button>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Checkout Form (7 cols) */}
        <div className="lg:col-span-7 space-y-6">
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Delivery Address Section */}
            <div className="bg-white rounded-3xl p-6 border border-slate-200/80 shadow-soft space-y-4">
              <h2 className="text-lg font-black text-slate-900 flex items-center gap-2">
                <Truck className="w-5 h-5 text-agro-green" />
                Delivery & Receiving Information
              </h2>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">Business / Company Name</label>
                  <input
                    type="text"
                    required
                    value={formData.businessName}
                    onChange={(e) => setFormData({ ...formData, businessName: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl border border-slate-200 focus:border-agro-green focus:ring-2 focus:ring-agro-green/20 outline-none text-sm"
                    placeholder="e.g. Terra Kulture Lagos"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">Receiving Contact Name</label>
                  <input
                    type="text"
                    required
                    value={formData.buyerName}
                    onChange={(e) => setFormData({ ...formData, buyerName: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl border border-slate-200 focus:border-agro-green focus:ring-2 focus:ring-agro-green/20 outline-none text-sm"
                    placeholder="e.g. Chef Deji Balogun"
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
                  <label className="block text-xs font-bold text-slate-700 mb-1">Email Address</label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl border border-slate-200 focus:border-agro-green focus:ring-2 focus:ring-agro-green/20 outline-none text-sm"
                    placeholder="buyer@domain.com"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">Delivery Street Address</label>
                <textarea
                  required
                  rows={2}
                  value={formData.deliveryAddress}
                  onChange={(e) => setFormData({ ...formData, deliveryAddress: e.target.value })}
                  className="w-full px-4 py-2.5 rounded-xl border border-slate-200 focus:border-agro-green focus:ring-2 focus:ring-agro-green/20 outline-none text-sm resize-none"
                  placeholder="Kitchen dock, warehouse entrance or home address"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">Special Handling Instructions</label>
                <input
                  type="text"
                  value={formData.deliveryInstructions}
                  onChange={(e) => setFormData({ ...formData, deliveryInstructions: e.target.value })}
                  className="w-full px-4 py-2.5 rounded-xl border border-slate-200 focus:border-agro-green focus:ring-2 focus:ring-agro-green/20 outline-none text-sm"
                  placeholder="e.g. Inspect temperature log on arrival"
                />
              </div>
            </div>

            {/* Escrow Payment Method */}
            <div className="bg-white rounded-3xl p-6 border border-slate-200/80 shadow-soft space-y-4">
              <h2 className="text-lg font-black text-slate-900 flex items-center gap-2">
                <Lock className="w-5 h-5 text-agro-green" />
                Agromatch Escrow Payment Selection
              </h2>

              <p className="text-xs text-slate-600 leading-relaxed">
                All marketplace transactions are secured with AGROMATCH Escrow. Funds are safely held in trust and only released to the farmer after you inspect and sign off on produce quality.
              </p>

              <div className="space-y-3">
                <label className="flex items-center gap-3 p-4 rounded-2xl border-2 border-agro-green bg-green-50/50 cursor-pointer">
                  <input
                    type="radio"
                    name="payment"
                    checked={formData.paymentMethod.includes('Bank Transfer')}
                    onChange={() => setFormData({ ...formData, paymentMethod: 'Bank Transfer (Dedicated Virtual Escrow Account)' })}
                    className="text-agro-green focus:ring-agro-green h-4 w-4"
                  />
                  <div>
                    <span className="font-bold text-slate-900 text-sm block">Instant Bank Transfer (Dedicated Virtual Account)</span>
                    <span className="text-xs text-slate-500">Fastest confirmation for commercial food buyers & hotels across Nigeria.</span>
                  </div>
                </label>

                <label className="flex items-center gap-3 p-4 rounded-2xl border border-slate-200 hover:border-slate-300 cursor-pointer">
                  <input
                    type="radio"
                    name="payment"
                    checked={formData.paymentMethod.includes('Debit Card')}
                    onChange={() => setFormData({ ...formData, paymentMethod: 'Debit Card (Mastercard / Visa / Verve)' })}
                    className="text-agro-green focus:ring-agro-green h-4 w-4"
                  />
                  <div>
                    <span className="font-bold text-slate-900 text-sm block">Nigerian Debit Card (Mastercard / Visa / Verve)</span>
                    <span className="text-xs text-slate-500">Processed securely with 3D-Secure 2-factor OTP verification.</span>
                  </div>
                </label>
              </div>
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full py-4 bg-agro-green hover:bg-emerald-700 text-white font-extrabold rounded-2xl shadow-xl shadow-agro-green/25 transition flex items-center justify-center gap-2 text-base"
            >
              {isSubmitting ? (
                <span>Locking Escrow & Placing Order...</span>
              ) : (
                <>
                  <ShieldCheck className="w-5 h-5" />
                  <span>Confirm Order & Pay ₦{total.toLocaleString()}</span>
                </>
              )}
            </button>
          </form>
        </div>

        {/* Order Details Column (5 cols) */}
        <div className="lg:col-span-5">
          <div className="bg-white rounded-3xl p-6 border border-slate-200/80 shadow-soft sticky top-24 space-y-5">
            <h2 className="font-black text-slate-900 text-lg">Order Items ({cart.length})</h2>

            <div className="divide-y divide-slate-100 max-h-72 overflow-y-auto pr-1">
              {cart.map((item) => (
                <div key={item.id} className="py-3 flex items-center gap-3">
                  <img src={item.image} alt={item.name} className="w-14 h-14 rounded-xl object-cover shrink-0" />
                  <div className="flex-1 min-w-0">
                    <h4 className="text-xs font-bold text-slate-800 truncate">{item.name}</h4>
                    <span className="text-[11px] text-slate-500 block">Qty: {item.quantity} × ₦{item.price.toLocaleString()}</span>
                    <span className="text-[10px] text-agro-green font-medium">From: {item.farmerName}</span>
                  </div>
                  <span className="text-xs font-bold text-slate-900 shrink-0">
                    ₦{(item.price * item.quantity).toLocaleString()}
                  </span>
                </div>
              ))}
            </div>

            <div className="pt-3 border-t border-slate-200 space-y-2.5 text-xs text-slate-600">
              <div className="flex justify-between">
                <span>Produce Total</span>
                <span className="font-bold text-slate-800">₦{cartSubtotal.toLocaleString()}</span>
              </div>
              <div className="flex justify-between">
                <span>Haulage Transit</span>
                <span className="font-bold text-slate-800">₦{deliveryFee.toLocaleString()}</span>
              </div>
              <div className="flex justify-between">
                <span>Escrow Trust Protection (1.5%)</span>
                <span className="font-bold text-slate-800">₦{escrowFee.toLocaleString()}</span>
              </div>
              <div className="pt-2 border-t border-slate-200 flex justify-between items-baseline text-sm">
                <span className="font-black text-slate-900">Total Payable</span>
                <span className="text-xl font-black text-agro-forest">₦{total.toLocaleString()}</span>
              </div>
            </div>

            <div className="p-4 bg-emerald-50 rounded-2xl border border-emerald-200/60 text-xs text-slate-700 space-y-2">
              <div className="flex items-center gap-2 font-bold text-agro-forest">
                <CheckCircle2 className="w-4 h-4 text-agro-green" />
                <span>Nigerian Escrow Guarantee</span>
              </div>
              <p className="text-[11px] text-slate-600 leading-relaxed">
                Money stays safely secured with AGROMATCH. If items arrive damaged or sub-grade, dispute resolution initiates immediately with full refund protection.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

