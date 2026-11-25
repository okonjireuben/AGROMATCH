import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import {
  X,
  Star,
  ShoppingBag,
  Heart,
  ShieldCheck,
  Truck,
  RotateCcw,
  Sparkles,
  CheckCircle2,
  Edit3
} from 'lucide-react';

export default function ProductDetailModal() {
  const {
    products,
    selectedProductId,
    setSelectedProductId,
    addToCart,
    toggleWishlist,
    wishlist,
    formatPrice,
    setActiveTab
  } = useApp();

  const product = products.find(p => p.id === selectedProductId);

  if (!product) return null;

  const [selectedSize, setSelectedSize] = useState(product.sizes ? product.sizes[0] : 'Standard');
  const [selectedKit, setSelectedKit] = useState(product.kitsAvailable ? product.kitsAvailable[0] : null);
  const [quantity, setQuantity] = useState(1);

  const isWish = wishlist.includes(product.id);

  const handleAdd = () => {
    addToCart(product, quantity, { size: selectedSize, kit: selectedKit });
    setSelectedProductId(null);
  };

  const handleGoCustomizer = () => {
    setSelectedProductId(null);
    setActiveTab('customizer');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md overflow-y-auto">
      <div className="relative w-full max-w-4xl bg-[#121214] border border-[#27272A] rounded-3xl overflow-hidden shadow-2xl my-8">
        {/* Close Button */}
        <button
          onClick={() => setSelectedProductId(null)}
          className="absolute top-4 right-4 z-20 p-2.5 rounded-full bg-black/60 hover:bg-white/20 text-white transition backdrop-blur-md"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 p-6 sm:p-8">
          {/* Left: Product Image */}
          <div className="space-y-4">
            <div className="relative aspect-square rounded-2xl overflow-hidden bg-[#18181B] border border-[#27272A]">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-full object-cover"
              />
              {product.badge && (
                <span className="absolute top-3 left-3 bg-rf-pitch/90 border border-rf-neon/40 text-rf-neon text-xs font-black px-3 py-1 rounded-full">
                  {product.badge}
                </span>
              )}
            </div>

            <div className="grid grid-cols-3 gap-3">
              <div className="p-3 bg-[#18181B] rounded-xl border border-[#27272A] text-center">
                <ShieldCheck className="w-5 h-5 text-rf-neon mx-auto mb-1" />
                <span className="text-[10px] font-bold text-slate-300 block">100% Genuine</span>
              </div>
              <div className="p-3 bg-[#18181B] rounded-xl border border-[#27272A] text-center">
                <Truck className="w-5 h-5 text-rf-neon mx-auto mb-1" />
                <span className="text-[10px] font-bold text-slate-300 block">Fast Dispatch</span>
              </div>
              <div className="p-3 bg-[#18181B] rounded-xl border border-[#27272A] text-center">
                <RotateCcw className="w-5 h-5 text-rf-neon mx-auto mb-1" />
                <span className="text-[10px] font-bold text-slate-300 block">Easy Returns</span>
              </div>
            </div>
          </div>

          {/* Right: Product Details */}
          <div className="flex flex-col justify-between space-y-6">
            <div>
              <div className="flex items-center justify-between text-xs text-slate-400 mb-1">
                <span className="font-bold text-rf-neon uppercase tracking-wider">{product.category} • {product.brand}</span>
                <div className="flex items-center gap-1 font-bold text-slate-300">
                  <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                  <span>{product.rating}</span>
                  <span className="text-slate-500">({product.reviewsCount} reviews)</span>
                </div>
              </div>

              <h2 className="text-2xl font-black text-white leading-tight mt-1">
                {product.name}
              </h2>

              <div className="flex items-baseline gap-3 mt-3">
                <span className="text-3xl font-black text-rf-neon">{formatPrice(product.price)}</span>
                {product.originalPrice && (
                  <span className="text-base text-slate-500 line-through">
                    {formatPrice(product.originalPrice)}
                  </span>
                )}
                <span className="text-xs font-bold text-rf-gold bg-rf-gold/10 px-2 py-0.5 rounded">
                  Authentic Official
                </span>
              </div>

              <p className="text-sm text-slate-300 leading-relaxed mt-4">
                {product.description}
              </p>

              {/* Kit Variation Options */}
              {product.kitsAvailable && (
                <div className="mt-4">
                  <label className="text-xs font-bold text-slate-400 uppercase tracking-wider block mb-2">
                    Kit Palette Selection
                  </label>
                  <div className="flex flex-wrap gap-2">
                    {product.kitsAvailable.map(k => (
                      <button
                        key={k}
                        onClick={() => setSelectedKit(k)}
                        className={`px-3 py-1.5 rounded-xl text-xs font-bold border transition ${
                          selectedKit === k
                            ? 'bg-rf-pitch border-rf-neon text-rf-neon'
                            : 'bg-[#18181B] border-[#27272A] text-slate-300 hover:text-white'
                        }`}
                      >
                        {k}
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* Sizes */}
              {product.sizes && (
                <div className="mt-4">
                  <div className="flex items-center justify-between mb-2">
                    <label className="text-xs font-bold text-slate-400 uppercase tracking-wider">
                      Select Size
                    </label>
                    <span className="text-[11px] text-rf-neon cursor-pointer hover:underline">
                      Size Guide
                    </span>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {product.sizes.map(s => (
                      <button
                        key={s}
                        onClick={() => setSelectedSize(s)}
                        className={`min-w-[42px] py-2 px-3 rounded-xl text-xs font-bold border transition ${
                          selectedSize === s
                            ? 'bg-rf-neon text-black border-rf-neon font-black shadow-neon'
                            : 'bg-[#18181B] border-[#27272A] text-slate-300 hover:text-white'
                        }`}
                      >
                        {s}
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* Quantity */}
              <div className="mt-4 flex items-center gap-4">
                <label className="text-xs font-bold text-slate-400 uppercase tracking-wider">
                  Quantity:
                </label>
                <div className="flex items-center border border-[#27272A] rounded-xl bg-[#18181B]">
                  <button
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="px-3 py-1 text-slate-400 hover:text-white"
                  >
                    -
                  </button>
                  <span className="px-3 py-1 font-bold text-sm text-white">{quantity}</span>
                  <button
                    onClick={() => setQuantity(quantity + 1)}
                    className="px-3 py-1 text-slate-400 hover:text-white"
                  >
                    +
                  </button>
                </div>
              </div>
            </div>

            {/* Actions */}
            <div className="space-y-3 pt-4 border-t border-[#1F1F23]">
              <div className="flex gap-3">
                <button
                  onClick={handleAdd}
                  className="flex-1 py-3.5 px-6 rounded-2xl bg-rf-neon hover:bg-rf-lime text-black font-black text-sm transition flex items-center justify-center gap-2 shadow-neon"
                >
                  <ShoppingBag className="w-4 h-4" />
                  <span>Add to Cart • {formatPrice(product.price * quantity)}</span>
                </button>

                <button
                  onClick={() => toggleWishlist(product.id)}
                  className={`p-3.5 rounded-2xl border transition ${
                    isWish
                      ? 'bg-rose-500 border-rose-500 text-white'
                      : 'bg-[#18181B] border-[#27272A] text-slate-300 hover:text-rose-400'
                  }`}
                >
                  <Heart className={`w-5 h-5 ${isWish ? 'fill-current' : ''}`} />
                </button>
              </div>

              {product.category === 'Jerseys' && (
                <button
                  onClick={handleGoCustomizer}
                  className="w-full py-2.5 rounded-xl bg-rf-pitch/80 hover:bg-rf-pitch border border-rf-neon/40 text-rf-neon text-xs font-bold transition flex items-center justify-center gap-1.5"
                >
                  <Edit3 className="w-3.5 h-3.5" />
                  <span>Want custom name & number printing? Open Jersey Studio →</span>
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
