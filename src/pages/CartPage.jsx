import React from 'react';
import { useApp } from '../context/AppContext';
import {
  Trash2,
  Plus,
  Minus,
  ArrowRight,
  ShoppingBag,
  ArrowLeft,
  ShieldCheck,
  Truck,
  RotateCcw
} from 'lucide-react';

export default function CartPage() {
  const {
    cart,
    removeFromCart,
    updateCartQuantity,
    cartSubtotal,
    setActiveTab,
    clearCart
  } = useApp();

  const deliveryFee = cart.length > 0 ? 15000 : 0;
  const escrowFee = cart.length > 0 ? Math.round(cartSubtotal * 0.015) : 0;
  const total = cartSubtotal + deliveryFee + escrowFee;

  if (cart.length === 0) {
    return (
      <div className="max-w-4xl mx-auto px-4 py-16 text-center">
        <div className="w-20 h-20 bg-emerald-50 text-agro-green rounded-full flex items-center justify-center mx-auto mb-6">
          <ShoppingBag className="w-10 h-10" />
        </div>
        <h2 className="text-3xl font-black text-slate-900 mb-2">Your Cart is Empty</h2>
        <p className="text-slate-600 mb-8 max-w-md mx-auto">
          Explore fresh produce directly from verified Nigerian farmers and add items to your wholesale or retail order.
        </p>
        <button
          onClick={() => {
            setActiveTab('marketplace');
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
          className="px-8 py-3.5 bg-agro-green hover:bg-emerald-700 text-white font-bold rounded-2xl shadow-lg shadow-agro-green/20 transition flex items-center gap-2 mx-auto"
        >
          <span>Browse Marketplace</span>
          <ArrowRight className="w-4 h-4" />
        </button>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
      <div className="flex items-center justify-between mb-8">
        <div>
          <button
            onClick={() => setActiveTab('marketplace')}
            className="inline-flex items-center gap-2 text-sm font-bold text-slate-600 hover:text-agro-forest transition mb-2"
          >
            <ArrowLeft className="w-4 h-4" />
            Continue Sourcing
          </button>
          <h1 className="text-3xl font-black text-slate-900 tracking-tight">Your Farm Cart</h1>
        </div>
        <button
          onClick={clearCart}
          className="text-xs font-bold text-rose-600 hover:text-rose-700 underline"
        >
          Clear All Items
        </button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Cart Items List (8 cols) */}
        <div className="lg:col-span-8 space-y-4">
          {cart.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-2xl p-4 sm:p-5 border border-slate-200/80 shadow-soft flex flex-col sm:flex-row items-center gap-4 sm:gap-6"
            >
              <img
                src={item.image}
                alt={item.name}
                className="w-24 h-24 sm:w-28 sm:h-28 rounded-xl object-cover ring-1 ring-slate-100 shrink-0"
              />

              <div className="flex-1 w-full text-center sm:text-left">
                <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-1">
                  <div>
                    <span className="text-[11px] font-bold text-agro-green uppercase tracking-wide">
                      {item.category}
                    </span>
                    <h3 className="font-bold text-slate-900 text-base leading-snug">{item.name}</h3>
                    <p className="text-xs text-slate-500 mt-0.5">
                      Farmer: <span className="font-semibold text-slate-700">{item.farmerName}</span> ({item.location} State)
                    </p>
                  </div>
                  <div className="text-right sm:text-right mt-2 sm:mt-0">
                    <span className="text-lg font-black text-agro-forest block">
                      ₦{(item.price * item.quantity).toLocaleString()}
                    </span>
                    <span className="text-xs text-slate-400">₦{item.price.toLocaleString()} / {item.unit}</span>
                  </div>
                </div>

                <div className="flex items-center justify-between mt-4 pt-3 border-t border-slate-100">
                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => updateCartQuantity(item.id, item.quantity - 1)}
                      className="w-8 h-8 rounded-lg border border-slate-200 hover:bg-slate-100 flex items-center justify-center text-slate-600 transition"
                      aria-label="Decrease quantity"
                    >
                      <Minus className="w-3.5 h-3.5" />
                    </button>
                    <span className="w-10 text-center font-bold text-sm text-slate-800">
                      {item.quantity}
                    </span>
                    <button
                      onClick={() => updateCartQuantity(item.id, item.quantity + 1)}
                      className="w-8 h-8 rounded-lg border border-slate-200 hover:bg-slate-100 flex items-center justify-center text-slate-600 transition"
                      aria-label="Increase quantity"
                    >
                      <Plus className="w-3.5 h-3.5" />
                    </button>
                  </div>

                  <button
                    onClick={() => removeFromCart(item.id)}
                    className="text-xs text-slate-400 hover:text-rose-600 flex items-center gap-1 font-medium transition"
                  >
                    <Trash2 className="w-3.5 h-3.5" />
                    <span>Remove</span>
                  </button>
                </div>
              </div>
            </div>
          ))}

          {/* Logistics Information Banner */}
          <div className="bg-emerald-50/80 rounded-2xl p-4 border border-emerald-200/60 flex items-start gap-3">
            <Truck className="w-5 h-5 text-agro-green shrink-0 mt-0.5" />
            <div className="text-xs text-slate-700 leading-relaxed">
              <span className="font-bold text-agro-forest block mb-0.5">Cold-Chain Haulage Guaranteed</span>
              Fresh produce is loaded directly into temperature-controlled vans and haulage trucks from partner farm estates, ensuring peak shelf freshness upon dock delivery.
            </div>
          </div>
        </div>

        {/* Order Summary Sidebar (4 cols) */}
        <div className="lg:col-span-4">
          <div className="bg-white rounded-3xl p-6 border border-slate-200/80 shadow-soft sticky top-24 space-y-5">
            <h2 className="font-black text-slate-900 text-lg">Order Summary</h2>

            <div className="space-y-3 text-sm">
              <div className="flex justify-between text-slate-600">
                <span>Subtotal ({cart.reduce((s, i) => s + i.quantity, 0)} items)</span>
                <span className="font-bold text-slate-900">₦{cartSubtotal.toLocaleString()}</span>
              </div>
              <div className="flex justify-between text-slate-600">
                <span>Estimated Haulage Fee</span>
                <span className="font-bold text-slate-900">₦{deliveryFee.toLocaleString()}</span>
              </div>
              <div className="flex justify-between text-slate-600">
                <span>Escrow Trust Protection (1.5%)</span>
                <span className="font-bold text-slate-900">₦{escrowFee.toLocaleString()}</span>
              </div>
              <div className="pt-3 border-t border-slate-200 flex justify-between items-baseline">
                <span className="font-black text-slate-900 text-base">Grand Total</span>
                <span className="text-2xl font-black text-agro-forest">₦{total.toLocaleString()}</span>
              </div>
            </div>

            <button
              onClick={() => {
                setActiveTab('checkout');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="w-full py-4 bg-agro-green hover:bg-emerald-700 text-white font-extrabold rounded-2xl shadow-lg shadow-agro-green/20 hover:shadow-xl transition flex items-center justify-center gap-2"
            >
              <span>Proceed to Checkout</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            <div className="pt-4 border-t border-slate-100 space-y-2.5 text-xs text-slate-500">
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-agro-green shrink-0" />
                <span>100% Escrow Protected — Funds held until delivery sign-off</span>
              </div>
              <div className="flex items-center gap-2">
                <RotateCcw className="w-4 h-4 text-agro-green shrink-0" />
                <span>Damaged produce replacement guarantee</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

