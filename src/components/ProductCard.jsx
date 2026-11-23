import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import {
  MapPin,
  CheckCircle2,
  Star,
  ShoppingCart,
  Eye,
  Heart,
  TrendingDown,
  Sparkles,
  Layers,
  AlertTriangle,
  Sprout
} from 'lucide-react';

export default function ProductCard({ product }) {
  const { addToCart, navigateToProduct, navigateToFarmerProfile, favorites, toggleFavorite } = useApp();
  const [qty, setQty] = useState(1);
  const isFav = favorites.includes(product.id);

  const handleAdd = (e) => {
    e.stopPropagation();
    addToCart(product, qty);
  };

  const handleFav = (e) => {
    e.stopPropagation();
    toggleFavorite(product.id);
  };

  const isLowStock = product.stock <= 25;

  return (
    <div
      onClick={() => navigateToProduct(product.id)}
      className="group bg-white rounded-2xl border border-slate-200/80 hover:border-agro-green/50 shadow-soft hover:shadow-elevated transition-all duration-300 flex flex-col overflow-hidden cursor-pointer relative"
    >
      {/* Image Container */}
      <div className="relative h-52 w-full overflow-hidden bg-slate-100">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          loading="lazy"
        />

        {/* Gradient Overlay for legibility */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-80" />

        {/* Top Badges */}
        <div className="absolute top-3 left-3 flex flex-wrap gap-1.5 z-10">
          <span className="bg-agro-forest/90 backdrop-blur-md text-white text-[11px] font-bold px-2.5 py-1 rounded-lg flex items-center gap-1 shadow-sm">
            <Sparkles className="w-3 h-3 text-lime-400" />
            {product.qualityGrade}
          </span>
          {product.inSeason && (
            <span className="bg-lime-500/95 backdrop-blur-md text-agro-forest text-[11px] font-extrabold px-2 py-1 rounded-lg shadow-sm">
              In Season
            </span>
          )}
        </div>

        {/* Favorite Heart Button */}
        <button
          onClick={handleFav}
          aria-label={isFav ? "Remove from favorites" : "Add to favorites"}
          className={`absolute top-3 right-3 p-2 rounded-full backdrop-blur-md transition z-10 ${
            isFav
              ? 'bg-rose-500 text-white shadow-md'
              : 'bg-white/80 hover:bg-white text-slate-700 hover:text-rose-500'
          }`}
        >
          <Heart className={`w-4 h-4 ${isFav ? 'fill-current' : ''}`} />
        </button>

        {/* Farmer Name & State Pill on Bottom of Image */}
        <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-white text-xs z-10">
          <div className="flex items-center gap-1.5 truncate max-w-[80%]">
            <MapPin className="w-3.5 h-3.5 text-lime-400 shrink-0" />
            <span className="font-semibold truncate">{product.town || product.location}, {product.location} State</span>
          </div>
          {product.verified && (
            <span className="inline-flex items-center gap-1 text-[11px] bg-emerald-500/90 text-white px-1.5 py-0.5 rounded font-bold">
              <CheckCircle2 className="w-3 h-3" /> Verified
            </span>
          )}
        </div>
      </div>

      {/* Card Body */}
      <div className="p-4 flex-1 flex flex-col justify-between">
        <div>
          {/* Category & Rating */}
          <div className="flex items-center justify-between text-xs text-slate-500 mb-1.5">
            <span className="font-medium text-agro-green">{product.category}</span>
            <div className="flex items-center gap-1 text-slate-700 font-bold">
              <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
              <span>{product.rating}</span>
              <span className="text-slate-400 font-normal">({product.reviewsCount})</span>
            </div>
          </div>

          {/* Product Title */}
          <h3 className="font-bold text-slate-900 group-hover:text-agro-forest transition-colors text-base line-clamp-2 leading-snug">
            {product.name}
          </h3>

          {/* Farmer & Farm Information */}
          <p className="text-xs text-slate-500 mt-1 truncate">
            Grown by: <span className="font-semibold text-slate-700">{product.farmerName}</span>
          </p>

          {/* Wholesale Tier Hint */}
          {product.wholesaleTiers && product.wholesaleTiers.length > 0 && (
            <div className="mt-2 text-[11px] text-emerald-800 bg-emerald-50 border border-emerald-200/60 px-2 py-1 rounded-md flex items-center gap-1.5 font-medium">
              <TrendingDown className="w-3.5 h-3.5 text-agro-green shrink-0" />
              <span>Bulk pricing available: <strong>{product.wholesaleTiers[0].discount}</strong> from {product.wholesaleTiers[0].qty} units</span>
            </div>
          )}
        </div>

        {/* Pricing and Stock Info */}
        <div className="mt-4 pt-3 border-t border-slate-100">
          <div className="flex items-baseline justify-between mb-2">
            <div>
              <span className="text-xs text-slate-500 font-medium">Price</span>
              <div className="flex items-baseline gap-1">
                <span className="text-lg font-black text-agro-forest">₦{product.price.toLocaleString()}</span>
                <span className="text-xs text-slate-500 font-medium">/ {product.unit}</span>
              </div>
            </div>

            <div className="text-right">
              <span className="text-[11px] text-slate-400 block font-medium">Stock</span>
              {isLowStock ? (
                <span className="inline-flex items-center gap-1 text-[11px] font-bold text-amber-600 bg-amber-50 px-1.5 py-0.5 rounded">
                  <AlertTriangle className="w-3 h-3" /> Only {product.stock} left
                </span>
              ) : (
                <span className="text-xs font-bold text-slate-700">{product.stock} available</span>
              )}
            </div>
          </div>

          {/* Action Row: View Details, Visit Farm & Add to Cart */}
          <div className="flex items-center gap-2 mt-2">
            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                navigateToProduct(product.id);
              }}
              className="flex-1 py-2 px-2.5 rounded-xl border border-slate-200 hover:border-agro-green text-xs font-bold text-slate-700 hover:text-agro-forest hover:bg-green-50 transition flex items-center justify-center gap-1"
            >
              <Eye className="w-3.5 h-3.5" />
              <span>Details</span>
            </button>

            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                navigateToFarmerProfile(product.farmerId);
              }}
              className="py-2 px-2.5 rounded-xl border border-emerald-200 hover:border-agro-green bg-emerald-50 hover:bg-green-100 text-xs font-bold text-agro-forest transition flex items-center justify-center gap-1"
              title="Visit Farm"
            >
              <Sprout className="w-3.5 h-3.5" />
              <span>Farm</span>
            </button>

            <button
              type="button"
              onClick={handleAdd}
              className="flex-1 py-2 px-2.5 rounded-xl bg-agro-green hover:bg-emerald-700 text-white text-xs font-bold transition shadow-sm flex items-center justify-center gap-1.5 transform active:scale-95"
            >
              <ShoppingCart className="w-3.5 h-3.5" />
              <span>Cart</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
