import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import {
  ShoppingBag,
  Heart,
  Eye,
  Star,
  Sparkles,
  Flame,
  Check,
  Edit3
} from 'lucide-react';

export default function ProductCard({ product }) {
  const {
    addToCart,
    toggleWishlist,
    wishlist,
    formatPrice,
    navigateToProduct,
    setActiveTab
  } = useApp();

  const isWish = wishlist.includes(product.id);
  const [selectedSize, setSelectedSize] = useState(product.sizes ? product.sizes[1] || product.sizes[0] : null);

  const handleAdd = (e) => {
    e.stopPropagation();
    addToCart(product, 1, { size: selectedSize });
  };

  const handleCustom = (e) => {
    e.stopPropagation();
    setActiveTab('customizer');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div
      onClick={() => navigateToProduct(product.id)}
      className="group bg-[#121214] border border-[#27272A] hover:border-rf-neon/60 rounded-3xl p-4 transition-all duration-300 flex flex-col justify-between cursor-pointer hover:shadow-elevated relative overflow-hidden"
    >
      {/* Top badges & Wishlist */}
      <div className="relative aspect-[4/3] rounded-2xl overflow-hidden bg-[#18181B] mb-4">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
          loading="lazy"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/20" />

        {/* Top Badges */}
        <div className="absolute top-2.5 left-2.5 flex flex-wrap gap-1 z-10">
          {product.badge && (
            <span className="px-2.5 py-1 rounded-lg bg-rf-pitch/90 backdrop-blur-md text-rf-neon text-[10px] font-black border border-rf-neon/30 flex items-center gap-1 shadow-sm">
              <Sparkles className="w-2.5 h-2.5" />
              {product.badge}
            </span>
          )}
          {product.league && product.league !== 'Equipment' && (
            <span className="px-2 py-1 rounded-lg bg-black/70 backdrop-blur-md text-white text-[10px] font-bold">
              {product.league}
            </span>
          )}
        </div>

        {/* Wishlist Button */}
        <button
          onClick={(e) => {
            e.stopPropagation();
            toggleWishlist(product.id);
          }}
          className={`absolute top-2.5 right-2.5 p-2 rounded-full backdrop-blur-md transition z-10 ${
            isWish
              ? 'bg-rose-500 text-white shadow-md'
              : 'bg-black/50 text-slate-300 hover:text-rose-400 hover:bg-black/80'
          }`}
          title={isWish ? 'Remove from wishlist' : 'Save to wishlist'}
        >
          <Heart className={`w-3.5 h-3.5 ${isWish ? 'fill-current' : ''}`} />
        </button>

        {/* Brand Tag Bottom */}
        <div className="absolute bottom-2.5 left-2.5 text-[11px] font-black tracking-wider uppercase text-white/90 bg-black/60 backdrop-blur-sm px-2 py-0.5 rounded">
          {product.brand}
        </div>
      </div>

      {/* Product Information */}
      <div className="flex-1 flex flex-col justify-between">
        <div>
          <div className="flex items-center justify-between text-xs text-slate-400 mb-1">
            <span className="font-semibold text-rf-neon">{product.category}</span>
            <div className="flex items-center gap-1 font-bold text-slate-300">
              <Star className="w-3 h-3 fill-amber-400 text-amber-400" />
              <span>{product.rating}</span>
              <span className="text-slate-500 font-normal">({product.reviewsCount})</span>
            </div>
          </div>

          <h3 className="text-sm font-black text-white group-hover:text-rf-neon transition-colors line-clamp-2 leading-snug">
            {product.name}
          </h3>

          <p className="text-[11px] text-slate-400 mt-1 line-clamp-2">
            {product.description}
          </p>
        </div>

        {/* Pricing and Action Row */}
        <div className="mt-4 pt-3 border-t border-[#1F1F23]">
          <div className="flex items-baseline justify-between mb-3">
            <div>
              <div className="flex items-baseline gap-1.5">
                <span className="text-lg font-black text-white">{formatPrice(product.price)}</span>
                {product.originalPrice && (
                  <span className="text-xs text-slate-500 line-through">
                    {formatPrice(product.originalPrice)}
                  </span>
                )}
              </div>
            </div>

            <span className="text-[10px] font-bold text-emerald-400 bg-emerald-500/10 px-1.5 py-0.5 rounded border border-emerald-500/20">
              In Stock
            </span>
          </div>

          {/* Action Buttons */}
          <div className="flex gap-2">
            {product.category === 'Jerseys' ? (
              <>
                <button
                  type="button"
                  onClick={handleCustom}
                  className="flex-1 py-2 px-2 rounded-xl bg-rf-pitch/80 hover:bg-rf-pitch border border-rf-neon/40 text-rf-neon text-xs font-bold transition flex items-center justify-center gap-1"
                  title="Customize with player name and number"
                >
                  <Edit3 className="w-3.5 h-3.5" />
                  <span>Customize</span>
                </button>

                <button
                  type="button"
                  onClick={handleAdd}
                  className="flex-1 py-2 px-2 rounded-xl bg-rf-neon hover:bg-rf-lime text-black text-xs font-black transition flex items-center justify-center gap-1.5 shadow-neon"
                >
                  <ShoppingBag className="w-3.5 h-3.5" />
                  <span>Add</span>
                </button>
              </>
            ) : (
              <>
                <button
                  type="button"
                  onClick={(e) => {
                    e.stopPropagation();
                    navigateToProduct(product.id);
                  }}
                  className="flex-1 py-2 px-2 rounded-xl bg-[#18181B] hover:bg-[#27272A] border border-[#27272A] text-slate-200 text-xs font-bold transition flex items-center justify-center gap-1"
                >
                  <Eye className="w-3.5 h-3.5" />
                  <span>Details</span>
                </button>

                <button
                  type="button"
                  onClick={handleAdd}
                  className="flex-1 py-2 px-2 rounded-xl bg-rf-neon hover:bg-rf-lime text-black text-xs font-black transition flex items-center justify-center gap-1.5 shadow-neon"
                >
                  <ShoppingBag className="w-3.5 h-3.5" />
                  <span>Buy Now</span>
                </button>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
