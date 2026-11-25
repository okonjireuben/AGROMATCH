import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import {
  ShoppingBag,
  Trash2,
  Plus,
  Minus,
  ArrowRight,
  ArrowLeft,
  Sparkles,
  ShieldCheck,
  Tag
} from 'lucide-react';

export default function CartPage() {
  const {
    cart,
    removeFromCart,
    updateCartQuantity,
    cartSubtotal,
    discountAmount,
    shippingFee,
    cartTotal,
    appliedPromo,
    applyPromoCode,
    removePromoCode,
    formatPrice,
    setActiveTab,
    clearCart
  } = useApp();

  const [promoInput, setPromoInput] = useState('');

  if (cart.length === 0) {
    return (
      <div className="max-w-4xl mx-auto px-4 py-20 text-center space-y-6">
        <div className="w-20 h-20 rounded-3xl bg-[#18181B] border border-[#27272A] text-rf-neon flex items-center justify-center mx-auto shadow-neon">
          <ShoppingBag className="w-10 h-10" />
        </div>
        <h2 className="text-3xl font-black text-white font-display uppercase tracking-wide">
          YOUR KIT BAG IS EMPTY
        </h2>
        <p className="text-sm text-slate-400 max-w-md mx-auto">
          Explore authentic jerseys from the Premier League, La Liga, Super Eagles, or build your own custom shirt.
        </p>
        <button
          onClick={() => {
            setActiveTab('jerseys');
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
          className="px-8 py-3.5 bg-rf-neon hover:bg-rf-lime text-black font-black text-xs rounded-xl shadow-neon transition inline-flex items-center gap-2"
        >
          <span>EXPLORE JERSEYS NOW</span>
          <ArrowRight className="w-4 h-4" />
        </button>
      </div>
    );
  }

  const handleApplyPromo = (e) => {
    e.preventDefault();
    if (promoInput.trim()) {
      applyPromoCode(promoInput);
      setPromoInput('');
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-8">
      <div className="flex items-center justify-between">
        <button
          onClick={() => setActiveTab('jerseys')}
          className="inline-flex items-center gap-2 text-xs font-bold text-slate-400 hover:text-white transition"
        >
          <ArrowLeft className="w-4 h-4" />
          Continue Shopping
        </button>
        <button
          onClick={clearCart}
          className="text-xs font-bold text-rose-400 hover:underline"
        >
          Clear Kit Bag
        </button>
      </div>

      <h1 className="text-3xl font-black text-white font-display uppercase tracking-tight">
        YOUR SHOPPING CART ({cart.reduce((s, i) => s + i.quantity, 0)} ITEMS)
      </h1>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Cart items list (8 cols) */}
        <div className="lg:col-span-8 space-y-4">
          {cart.map((item) => (
            <div
              key={`${item.id}-${JSON.stringify(item.customDetails)}`}
              className="bg-[#121214] border border-[#27272A] rounded-2xl p-4 sm:p-5 flex flex-col sm:flex-row items-center gap-4 sm:gap-6"
            >
              <img
                src={item.image}
                alt={item.name}
                className="w-24 h-24 sm:w-28 sm:h-28 rounded-xl object-cover ring-1 ring-white/10 shrink-0"
              />

              <div className="flex-1 w-full">
                <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-1">
                  <div>
                    <span className="text-[10px] font-bold text-rf-neon uppercase tracking-wider block">
                      {item.category} {item.brand ? `• ${item.brand}` : ''}
                    </span>
                    <h3 className="font-bold text-white text-base leading-snug">{item.name}</h3>

                    {/* Custom details display */}
                    {item.customDetails && (
                      <div className="mt-2 text-[11px] text-slate-300 bg-[#18181B] p-2.5 rounded-xl border border-[#27272A] space-y-0.5">
                        <div className="font-bold text-rf-gold">
                          CUSTOM: {item.customDetails.name} #{item.customDetails.number}
                        </div>
                        <div className="text-slate-400">
                          {item.customDetails.kit} Kit • {item.customDetails.size} • {item.customDetails.badge}
                        </div>
                      </div>
                    )}

                    {item.options?.size && !item.customDetails && (
                      <p className="text-xs text-slate-400 mt-1">
                        Size: <strong className="text-white">{item.options.size}</strong>
                      </p>
                    )}
                  </div>

                  <div className="text-right mt-2 sm:mt-0">
                    <span className="text-lg font-black text-rf-neon block">
                      {formatPrice(item.price * item.quantity)}
                    </span>
                    <span className="text-xs text-slate-500">
                      {formatPrice(item.price)} each
                    </span>
                  </div>
                </div>

                <div className="flex items-center justify-between mt-4 pt-3 border-t border-[#1F1F23]">
                  <div className="flex items-center border border-[#27272A] rounded-xl bg-[#18181B]">
                    <button
                      onClick={() => updateCartQuantity(item.id, item.quantity - 1)}
                      className="px-2.5 py-1 text-slate-400 hover:text-white"
                    >
                      <Minus className="w-3.5 h-3.5" />
                    </button>
                    <span className="px-3 py-1 font-bold text-sm text-white">{item.quantity}</span>
                    <button
                      onClick={() => updateCartQuantity(item.id, item.quantity + 1)}
                      className="px-2.5 py-1 text-slate-400 hover:text-white"
                    >
                      <Plus className="w-3.5 h-3.5" />
                    </button>
                  </div>

                  <button
                    onClick={() => removeFromCart(item.id)}
                    className="text-xs text-slate-400 hover:text-rose-400 flex items-center gap-1 transition"
                  >
                    <Trash2 className="w-3.5 h-3.5" />
                    <span>Remove</span>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Order Summary (4 cols) */}
        <div className="lg:col-span-4 space-y-6">
          <div className="bg-[#121214] border border-[#27272A] rounded-3xl p-6 space-y-5 sticky top-28 shadow-elevated">
            <h2 className="text-lg font-black text-white uppercase tracking-wider font-display">
              ORDER SUMMARY
            </h2>

            {/* Promo Code Input */}
            <form onSubmit={handleApplyPromo} className="space-y-2">
              <label className="text-xs font-bold text-slate-400">Promo Code</label>
              <div className="flex gap-2">
                <input
                  type="text"
                  value={promoInput}
                  onChange={(e) => setPromoInput(e.target.value.toUpperCase())}
                  placeholder="KICKOFF20"
                  className="flex-1 px-3 py-2 rounded-xl bg-[#18181B] border border-[#27272A] text-xs text-white uppercase font-bold focus:border-rf-neon outline-none"
                />
                <button
                  type="submit"
                  className="px-4 py-2 bg-rf-pitch text-rf-neon border border-rf-neon/40 hover:bg-rf-neon hover:text-black font-black text-xs rounded-xl transition"
                >
                  Apply
                </button>
              </div>
              {appliedPromo && (
                <div className="text-[11px] text-rf-neon flex items-center justify-between pt-1">
                  <span>✓ {appliedPromo.label} applied</span>
                  <button onClick={removePromoCode} className="text-slate-500 hover:underline">
                    Remove
                  </button>
                </div>
              )}
            </form>

            <div className="space-y-2.5 text-xs text-slate-300 pt-3 border-t border-[#1F1F23]">
              <div className="flex justify-between">
                <span>Produce & Kit Subtotal</span>
                <span className="font-bold text-white">{formatPrice(cartSubtotal)}</span>
              </div>

              {discountAmount > 0 && (
                <div className="flex justify-between text-rf-neon font-bold">
                  <span>Special Discount (20%)</span>
                  <span>-{formatPrice(discountAmount)}</span>
                </div>
              )}

              <div className="flex justify-between">
                <span>Express Doorstep Delivery</span>
                <span className="font-bold text-white">
                  {shippingFee === 0 ? 'FREE (Orders ₦70,000+)' : formatPrice(shippingFee)}
                </span>
              </div>

              <div className="pt-3 border-t border-[#27272A] flex justify-between items-baseline text-sm">
                <span className="font-black text-white">Grand Total</span>
                <span className="text-2xl font-black text-rf-neon">{formatPrice(cartTotal)}</span>
              </div>
            </div>

            <button
              onClick={() => {
                setActiveTab('checkout');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="w-full py-4 bg-gradient-to-r from-rf-emerald via-rf-neon to-rf-emerald hover:brightness-110 text-black font-black text-sm rounded-2xl shadow-neon transition flex items-center justify-center gap-2"
            >
              <span>PROCEED TO CHECKOUT</span>
              <ArrowRight className="w-4 h-4 text-black" />
            </button>

            <div className="text-[11px] text-slate-400 space-y-1.5 pt-2 border-t border-[#1F1F23]">
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-rf-neon shrink-0" />
                <span>100% Authentic Product Guarantee</span>
              </div>
              <div className="flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-rf-neon shrink-0" />
                <span>Official League Numbers & Flock Letters</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
