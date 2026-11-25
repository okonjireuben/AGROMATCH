import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import confetti from 'canvas-confetti';
import {
  ShieldCheck,
  Truck,
  CheckCircle2,
  Lock,
  ArrowLeft,
  Sparkles
} from 'lucide-react';

export default function CheckoutPage() {
  const {
    cart,
    cartSubtotal,
    discountAmount,
    shippingFee,
    cartTotal,
    formatPrice,
    clearCart,
    setActiveTab
  } = useApp();

  const [formData, setFormData] = useState({
    fullName: 'Reuben Okonji',
    email: 'okonjireuben9@gmail.com',
    phone: '+234 814 772 9010',
    address: 'Plot 18 Sports Boulevard, Victoria Island',
    state: 'Lagos State',
    country: 'Nigeria',
    deliveryNotes: 'Please ring bell upon doorstep delivery',
    paymentMethod: 'Instant Bank Transfer / Dedicated Virtual Account'
  });

  const [isCompleted, setIsCompleted] = useState(false);
  const [orderId, setOrderId] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    const newOrderId = `RFS-ORD-${Math.floor(100000 + Math.random() * 900000)}`;
    setOrderId(newOrderId);
    setIsCompleted(true);
    clearCart();

    // Trigger victory confetti
    try {
      confetti({
        particleCount: 120,
        spread: 80,
        origin: { y: 0.6 },
        colors: ['#00FF66', '#FFD700', '#107C41', '#FFFFFF']
      });
    } catch {}
  };

  if (isCompleted) {
    return (
      <div className="max-w-2xl mx-auto px-4 py-20 text-center space-y-6">
        <div className="w-20 h-20 rounded-3xl bg-rf-pitch border-2 border-rf-neon text-rf-neon flex items-center justify-center mx-auto shadow-neon-strong">
          <CheckCircle2 className="w-10 h-10" />
        </div>
        <div className="space-y-2">
          <span className="text-xs font-bold text-rf-gold uppercase tracking-wider">
            ORDER CONFIRMED & DISPATCH READY
          </span>
          <h2 className="text-3xl sm:text-4xl font-black text-white font-display uppercase tracking-tight">
            THANK YOU FOR YOUR ORDER!
          </h2>
          <p className="text-xs text-slate-400">Order ID: <strong className="text-white font-mono">{orderId}</strong></p>
        </div>

        <p className="text-sm text-slate-300 leading-relaxed max-w-lg mx-auto bg-[#121214] border border-[#27272A] p-6 rounded-2xl">
          We have dispatched your order details to <strong className="text-white">{formData.email}</strong>. Our custom printing specialists are preparing your kits and tracking information will be sent via SMS to <strong className="text-white">{formData.phone}</strong>.
        </p>

        <button
          onClick={() => {
            setActiveTab('home');
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
          className="px-8 py-3.5 bg-rf-neon hover:bg-rf-lime text-black font-black text-xs rounded-xl shadow-neon transition"
        >
          RETURN TO HOME STORE
        </button>
      </div>
    );
  }

  if (cart.length === 0) {
    return (
      <div className="max-w-2xl mx-auto px-4 py-20 text-center space-y-4">
        <h2 className="text-2xl font-black text-white">No items in cart to checkout</h2>
        <button
          onClick={() => setActiveTab('jerseys')}
          className="px-6 py-2.5 bg-rf-neon text-black font-bold text-xs rounded-xl"
        >
          Browse Kits
        </button>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-8">
      <button
        onClick={() => setActiveTab('cart')}
        className="inline-flex items-center gap-2 text-xs font-bold text-slate-400 hover:text-white transition"
      >
        <ArrowLeft className="w-4 h-4" />
        Back to Cart
      </button>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Checkout Form (7 cols) */}
        <div className="lg:col-span-7">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="bg-[#121214] border border-[#27272A] rounded-3xl p-6 sm:p-8 space-y-5">
              <h2 className="text-lg font-black text-white uppercase tracking-wider font-display flex items-center gap-2">
                <Truck className="w-5 h-5 text-rf-neon" />
                Shipping & Receiving Details
              </h2>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-slate-300 mb-1">Full Name</label>
                  <input
                    type="text"
                    required
                    value={formData.fullName}
                    onChange={e => setFormData({ ...formData, fullName: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl bg-[#18181B] border border-[#27272A] text-white text-xs font-bold focus:border-rf-neon outline-none"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-slate-300 mb-1">Email Address</label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={e => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl bg-[#18181B] border border-[#27272A] text-white text-xs font-bold focus:border-rf-neon outline-none"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-slate-300 mb-1">Phone Number (SMS Tracking)</label>
                  <input
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={e => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl bg-[#18181B] border border-[#27272A] text-white text-xs font-bold focus:border-rf-neon outline-none"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-slate-300 mb-1">State / Province</label>
                  <input
                    type="text"
                    required
                    value={formData.state}
                    onChange={e => setFormData({ ...formData, state: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl bg-[#18181B] border border-[#27272A] text-white text-xs font-bold focus:border-rf-neon outline-none"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-300 mb-1">Delivery Street Address</label>
                <textarea
                  required
                  rows={2}
                  value={formData.address}
                  onChange={e => setFormData({ ...formData, address: e.target.value })}
                  className="w-full px-4 py-2.5 rounded-xl bg-[#18181B] border border-[#27272A] text-white text-xs font-bold focus:border-rf-neon outline-none resize-none"
                />
              </div>
            </div>

            {/* Payment Method */}
            <div className="bg-[#121214] border border-[#27272A] rounded-3xl p-6 sm:p-8 space-y-4">
              <h2 className="text-lg font-black text-white uppercase tracking-wider font-display flex items-center gap-2">
                <Lock className="w-5 h-5 text-rf-neon" />
                Select Payment Mode
              </h2>

              <div className="space-y-3">
                <label className="flex items-center gap-3 p-4 rounded-2xl border-2 border-rf-neon bg-rf-pitch/30 cursor-pointer">
                  <input
                    type="radio"
                    name="pay"
                    checked={formData.paymentMethod.includes('Bank Transfer')}
                    onChange={() => setFormData({ ...formData, paymentMethod: 'Instant Bank Transfer / Dedicated Virtual Account' })}
                    className="text-rf-neon"
                  />
                  <div>
                    <span className="text-xs font-black text-white block">Dedicated Virtual Bank Transfer (Direct Escrow)</span>
                    <span className="text-[11px] text-slate-400">Instant confirmation via GTBank, Access, Zenith or Moniepoint.</span>
                  </div>
                </label>

                <label className="flex items-center gap-3 p-4 rounded-2xl border border-[#27272A] bg-[#18181B] cursor-pointer">
                  <input
                    type="radio"
                    name="pay"
                    checked={formData.paymentMethod.includes('Debit Card')}
                    onChange={() => setFormData({ ...formData, paymentMethod: 'Debit Card (Mastercard / Visa / Verve)' })}
                    className="text-rf-neon"
                  />
                  <div>
                    <span className="text-xs font-black text-white block">Nigerian & International Debit Card</span>
                    <span className="text-[11px] text-slate-400">Processed securely via 3D-Secure 256-bit encryption.</span>
                  </div>
                </label>
              </div>
            </div>

            <button
              type="submit"
              className="w-full py-4 bg-gradient-to-r from-rf-emerald via-rf-neon to-rf-emerald hover:brightness-110 text-black font-black text-sm rounded-2xl shadow-neon transition"
            >
              COMPLETE ORDER • {formatPrice(cartTotal)}
            </button>
          </form>
        </div>

        {/* Order review sidebar (5 cols) */}
        <div className="lg:col-span-5">
          <div className="bg-[#121214] border border-[#27272A] rounded-3xl p-6 space-y-5 sticky top-28">
            <h3 className="text-base font-black text-white uppercase tracking-wider font-display">
              Review Items ({cart.length})
            </h3>

            <div className="divide-y divide-[#1F1F23] max-h-80 overflow-y-auto pr-1">
              {cart.map((item, idx) => (
                <div key={idx} className="py-3 flex items-center gap-3">
                  <img src={item.image} alt={item.name} className="w-14 h-14 rounded-xl object-cover shrink-0" />
                  <div className="flex-1 min-w-0">
                    <h5 className="text-xs font-bold text-white truncate">{item.name}</h5>
                    <p className="text-[10px] text-slate-400">Qty: {item.quantity} × {formatPrice(item.price)}</p>
                    {item.customDetails && (
                      <span className="text-[10px] font-bold text-rf-neon block">
                        #{item.customDetails.number} {item.customDetails.name}
                      </span>
                    )}
                  </div>
                  <span className="text-xs font-black text-white">
                    {formatPrice(item.price * item.quantity)}
                  </span>
                </div>
              ))}
            </div>

            <div className="pt-3 border-t border-[#1F1F23] space-y-2 text-xs text-slate-300">
              <div className="flex justify-between">
                <span>Subtotal</span>
                <span>{formatPrice(cartSubtotal)}</span>
              </div>
              {discountAmount > 0 && (
                <div className="flex justify-between text-rf-neon font-bold">
                  <span>Promo Discount</span>
                  <span>-{formatPrice(discountAmount)}</span>
                </div>
              )}
              <div className="flex justify-between">
                <span>Delivery</span>
                <span>{shippingFee === 0 ? 'FREE' : formatPrice(shippingFee)}</span>
              </div>
              <div className="pt-2 border-t border-[#27272A] flex justify-between text-sm font-black text-white">
                <span>Total Amount Due</span>
                <span className="text-rf-neon text-xl">{formatPrice(cartTotal)}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
