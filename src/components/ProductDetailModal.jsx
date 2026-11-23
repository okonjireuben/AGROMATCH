import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import { INITIAL_FARMERS } from '../data/mockData';
import {
  MapPin,
  CheckCircle2,
  Star,
  ShoppingCart,
  Heart,
  Truck,
  ShieldCheck,
  Calendar,
  Layers,
  ArrowLeft,
  MessageSquare,
  Sparkles,
  Info,
  Scale,
  Award,
  Clock,
  Send
} from 'lucide-react';

export default function ProductDetailModal() {
  const {
    products,
    selectedProductId,
    addToCart,
    setActiveTab,
    toggleFavorite,
    favorites,
    sendMessage,
    showNotification,
    navigateToFarmerProfile,
    user
  } = useApp();

  const [quantity, setQuantity] = useState(1);
  const [activeTabSub, setActiveTabSub] = useState('specs'); // 'specs', 'wholesale', 'reviews'
  const [messageOpen, setMessageOpen] = useState(false);
  const [customMessage, setCustomMessage] = useState('');
  const [newReviewText, setNewReviewText] = useState('');
  const [newReviewRating, setNewReviewRating] = useState(5);
  const [localReviews, setLocalReviews] = useState([
    {
      id: 'r1',
      author: 'Chef Deji Balogun',
      role: 'Executive Head Chef, Terra Kulture',
      rating: 5,
      date: '3 days ago',
      comment: 'Exceptional freshness and uniform grading. Exactly as described. Zero spoilages upon arrival in Victoria Island.'
    },
    {
      id: 'r2',
      author: 'Hadiza Bello',
      role: 'Procurement Specialist, FreshNest Abuja',
      rating: 5,
      date: '1 week ago',
      comment: 'Milled cleanly with zero stone contaminants. The packaging sacks were durable and properly tagged with harvest dates.'
    }
  ]);

  const product = products.find(p => p.id === selectedProductId) || products[0];
  const isFav = favorites.includes(product?.id);

  if (!product) return null;

  // Calculate bulk discount
  let appliedDiscount = 0;
  let discountLabel = '';
  if (product.wholesaleTiers && product.wholesaleTiers.length > 0) {
    const sortedTiers = [...product.wholesaleTiers].sort((a, b) => b.qty - a.qty);
    for (const tier of sortedTiers) {
      if (quantity >= tier.qty) {
        appliedDiscount = parseInt(tier.discount) || 0;
        discountLabel = tier.discount;
        break;
      }
    }
  }

  const baseTotal = product.price * quantity;
  const discountedTotal = appliedDiscount > 0 ? baseTotal * (1 - appliedDiscount / 100) : baseTotal;
  const savings = baseTotal - discountedTotal;

  const handleAddToCart = () => {
    addToCart(product, quantity);
  };

  const handleInstantBuy = () => {
    addToCart(product, quantity);
    setActiveTab('checkout');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleSendMessageToFarmer = (e) => {
    e.preventDefault();
    if (!customMessage.trim()) return;
    sendMessage(product.farmerId, customMessage, `Inquiry: ${product.name}`);
    setCustomMessage('');
    setMessageOpen(false);
  };

  const handleAddReview = (e) => {
    e.preventDefault();
    if (!newReviewText.trim()) return;
    const rev = {
      id: `r-${Date.now()}`,
      author: user?.name || 'Verified Buyer',
      role: user?.businessName || (user?.role === 'restaurant' ? 'Restaurant Chef' : 'Verified Buyer'),
      rating: newReviewRating,
      date: 'Just now',
      comment: newReviewText
    };
    setLocalReviews([rev, ...localReviews]);
    setNewReviewText('');
    showNotification('Thank you for rating this verified farm produce!');
  };

  // Recommended products
  const relatedProducts = products
    .filter(p => p.id !== product.id && (p.category === product.category || p.location === product.location))
    .slice(0, 3);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 animate-in fade-in">
      {/* Back Button */}
      <button
        onClick={() => {
          setActiveTab('marketplace');
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }}
        className="inline-flex items-center gap-2 text-sm font-bold text-agro-forest hover:text-agro-green mb-6 transition group"
      >
        <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
        <span>Back to Agricultural Marketplace</span>
      </button>

      {/* Main Grid: Gallery & Info */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 bg-white rounded-3xl p-6 sm:p-8 border border-slate-200/80 shadow-soft">
        {/* Left Column: Image & Highlights (5 cols) */}
        <div className="lg:col-span-5 space-y-4">
          <div className="relative rounded-2xl overflow-hidden bg-slate-100 aspect-square max-h-[460px] w-full border border-slate-100">
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-full object-cover"
            />
            {/* Badges */}
            <div className="absolute top-4 left-4 flex flex-col gap-2">
              <span className="bg-agro-forest/90 backdrop-blur-md text-white text-xs font-bold px-3 py-1.5 rounded-xl shadow-md flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5 text-lime-400" />
                {product.qualityGrade}
              </span>
              {product.inSeason && (
                <span className="bg-lime-500 text-agro-forest text-xs font-black px-3 py-1 rounded-xl shadow-md">
                  In Peak Harvest
                </span>
              )}
            </div>

            <button
              onClick={() => toggleFavorite(product.id)}
              className={`absolute top-4 right-4 p-3 rounded-2xl backdrop-blur-md transition ${
                isFav ? 'bg-rose-500 text-white shadow-lg' : 'bg-white/80 hover:bg-white text-slate-700'
              }`}
            >
              <Heart className={`w-5 h-5 ${isFav ? 'fill-current' : ''}`} />
            </button>
          </div>

          {/* Quick Value Points */}
          <div className="grid grid-cols-3 gap-2 text-center text-xs">
            <div className="p-3 bg-green-50/70 border border-green-200/50 rounded-xl">
              <ShieldCheck className="w-5 h-5 text-agro-green mx-auto mb-1" />
              <div className="font-bold text-agro-forest">Escrow Safe</div>
              <div className="text-[11px] text-slate-500">Pay on delivery</div>
            </div>
            <div className="p-3 bg-green-50/70 border border-green-200/50 rounded-xl">
              <Truck className="w-5 h-5 text-agro-green mx-auto mb-1" />
              <div className="font-bold text-agro-forest">Cold-Chain</div>
              <div className="text-[11px] text-slate-500">Fast transit</div>
            </div>
            <div className="p-3 bg-green-50/70 border border-green-200/50 rounded-xl">
              <Scale className="w-5 h-5 text-agro-green mx-auto mb-1" />
              <div className="font-bold text-agro-forest">Direct Price</div>
              <div className="text-[11px] text-slate-500">Zero middleman</div>
            </div>
          </div>
        </div>

        {/* Right Column: Pricing, Specs & Actions (7 cols) */}
        <div className="lg:col-span-7 flex flex-col justify-between">
          <div>
            {/* Category and Rating */}
            <div className="flex flex-wrap items-center justify-between gap-2 text-sm mb-2">
              <span className="bg-emerald-100 text-agro-forest font-bold text-xs px-3 py-1 rounded-full uppercase tracking-wider">
                {product.category}
              </span>

              <div className="flex items-center gap-1.5">
                <div className="flex items-center text-amber-400">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`w-4 h-4 ${i < Math.floor(product.rating) ? 'fill-amber-400' : 'text-slate-300'}`}
                    />
                  ))}
                </div>
                <span className="font-bold text-slate-800 text-sm">{product.rating}</span>
                <span className="text-slate-400 text-xs">({product.reviewsCount} verified reviews)</span>
              </div>
            </div>

            {/* Product Title */}
            <h1 className="text-2xl sm:text-3xl font-black text-slate-900 leading-tight">
              {product.name}
            </h1>

            {/* Location & Farmer info */}
            <div className="flex flex-wrap items-center gap-3 mt-3 text-sm text-slate-600">
              <div className="flex items-center gap-1.5 text-agro-forest font-semibold">
                <MapPin className="w-4 h-4 text-agro-green shrink-0" />
                <span>{product.town || product.location}, {product.location} State, Nigeria</span>
              </div>
              <span>•</span>
              <div className="flex items-center gap-1.5">
                <Calendar className="w-4 h-4 text-slate-400" />
                <span>Harvest: {product.harvestDate}</span>
              </div>
            </div>

            {/* Price Box */}
            <div className="mt-5 p-5 bg-gradient-to-r from-green-50/80 via-emerald-50/40 to-transparent rounded-2xl border border-green-200/60 flex flex-wrap items-center justify-between gap-4">
              <div>
                <span className="text-xs font-semibold text-slate-500 uppercase tracking-wide">Farm-Gate Unit Price</span>
                <div className="flex items-baseline gap-2">
                  <span className="text-3xl sm:text-4xl font-black text-agro-forest">
                    ₦{product.price.toLocaleString()}
                  </span>
                  <span className="text-sm font-semibold text-slate-600">/ {product.unit}</span>
                </div>
                <span className="text-[11px] text-agro-green font-medium">
                  Direct from grower • Recommended retail markup: ₦{(product.price * 1.35).toLocaleString()}
                </span>
              </div>

              <div className="text-right">
                <span className="text-xs text-slate-500 font-medium block">Current Harvest Stock</span>
                <div className="text-lg font-black text-slate-800">{product.stock} units</div>
                <span className="text-xs text-slate-500">Min. Order: {product.minOrder || 1} {product.unit}</span>
              </div>
            </div>

            {/* Description */}
            <p className="mt-4 text-sm text-slate-700 leading-relaxed">
              {product.description}
            </p>

            {/* Wholesale Tier Notice */}
            {product.wholesaleTiers && product.wholesaleTiers.length > 0 && (
              <div className="mt-4 p-3.5 bg-lime-50/70 border border-lime-200 rounded-xl">
                <div className="text-xs font-bold text-agro-forest flex items-center gap-1.5 mb-1.5">
                  <Layers className="w-4 h-4 text-lime-600" />
                  <span>Wholesale & Commercial Volume Discounts Available:</span>
                </div>
                <div className="flex flex-wrap gap-2">
                  {product.wholesaleTiers.map((tier, idx) => (
                    <span
                      key={idx}
                      className={`text-xs px-2.5 py-1 rounded-lg font-semibold transition ${
                        quantity >= tier.qty
                          ? 'bg-agro-forest text-white shadow-sm'
                          : 'bg-white border border-lime-300 text-agro-forest'
                      }`}
                    >
                      {tier.qty}+ {product.unit} → <span className="text-lime-600 font-black">{tier.discount}</span>
                    </span>
                  ))}
                </div>
              </div>
            )}

            {/* Quantity Selector & Price Computation */}
            <div className="mt-6 pt-5 border-t border-slate-100 space-y-4">
              <div className="flex flex-wrap items-center justify-between gap-4">
                <div className="flex items-center gap-3">
                  <span className="text-xs font-bold text-slate-700 uppercase tracking-wide">Quantity:</span>
                  <div className="flex items-center border border-slate-300 rounded-xl overflow-hidden bg-white shadow-sm">
                    <button
                      type="button"
                      onClick={() => setQuantity(Math.max(product.minOrder || 1, quantity - 1))}
                      className="px-3.5 py-2 text-slate-600 hover:bg-slate-100 font-bold transition"
                    >
                      -
                    </button>
                    <input
                      type="number"
                      min={product.minOrder || 1}
                      max={product.stock}
                      value={quantity}
                      onChange={(e) => setQuantity(Math.max(1, parseInt(e.target.value) || 1))}
                      className="w-14 text-center font-bold text-slate-800 text-sm focus:outline-none"
                    />
                    <button
                      type="button"
                      onClick={() => setQuantity(Math.min(product.stock, quantity + 1))}
                      className="px-3.5 py-2 text-slate-600 hover:bg-slate-100 font-bold transition"
                    >
                      +
                    </button>
                  </div>
                  <span className="text-xs text-slate-500 font-medium">({product.unit})</span>
                </div>

                {/* Subtotal Calculation */}
                <div className="text-right">
                  <span className="text-xs text-slate-400">Total Price:</span>
                  <div className="flex items-baseline gap-2">
                    {appliedDiscount > 0 && (
                      <span className="text-xs text-slate-400 line-through">
                        ₦{baseTotal.toLocaleString()}
                      </span>
                    )}
                    <span className="text-2xl font-black text-agro-forest">
                      ₦{discountedTotal.toLocaleString()}
                    </span>
                  </div>
                  {appliedDiscount > 0 && (
                    <span className="text-xs font-bold text-agro-green block">
                      Saved ₦{savings.toLocaleString()} ({discountLabel})!
                    </span>
                  )}
                </div>
              </div>

              {/* Action Buttons: Add to Cart, Buy Now, Message Farmer */}
              <div className="flex flex-col sm:flex-row items-center gap-3 pt-2">
                <button
                  type="button"
                  onClick={handleAddToCart}
                  className="w-full sm:flex-1 py-3.5 px-6 rounded-2xl bg-white border-2 border-agro-green text-agro-forest font-bold text-sm hover:bg-green-50 transition shadow-sm flex items-center justify-center gap-2"
                >
                  <ShoppingCart className="w-4 h-4 text-agro-green" />
                  <span>Add to Cart ({quantity})</span>
                </button>

                <button
                  type="button"
                  onClick={handleInstantBuy}
                  className="w-full sm:flex-1 py-3.5 px-6 rounded-2xl bg-agro-green hover:bg-emerald-700 text-white font-black text-sm transition shadow-lg shadow-agro-green/30 flex items-center justify-center gap-2 transform active:scale-98"
                >
                  <span>Order Now & Escrow Checkout</span>
                </button>

                <button
                  type="button"
                  onClick={() => setMessageOpen(!messageOpen)}
                  className="w-full sm:w-auto p-3.5 rounded-2xl border border-slate-300 hover:border-agro-green text-slate-700 hover:text-agro-forest hover:bg-green-50 transition flex items-center justify-center"
                  title="Direct Message Farmer"
                >
                  <MessageSquare className="w-5 h-5 text-agro-green" />
                  <span className="sm:hidden ml-2 text-xs font-bold">Inquire Farmer</span>
                </button>
              </div>

              {/* Farmer Quick Inquiry Dropdown */}
              {messageOpen && (
                <div className="p-4 bg-slate-50 border border-slate-200 rounded-2xl animate-in fade-in space-y-3">
                  <div className="flex items-center justify-between text-xs font-bold text-slate-800">
                    <span>Direct Inquiry to {product.farmerName}</span>
                    <span className="text-[11px] text-agro-green">Typically replies in 15 mins</span>
                  </div>
                  <form onSubmit={handleSendMessageToFarmer} className="space-y-2">
                    <textarea
                      rows={2}
                      value={customMessage}
                      onChange={(e) => setCustomMessage(e.target.value)}
                      placeholder={`Hello ${product.farmerName}, I want to confirm harvest quality and dispatch timeline for ${product.name}...`}
                      className="w-full text-xs p-3 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-agro-green bg-white"
                      required
                    />
                    <div className="flex justify-end gap-2">
                      <button
                        type="button"
                        onClick={() => setMessageOpen(false)}
                        className="px-3 py-1.5 text-xs text-slate-500 hover:text-slate-700"
                      >
                        Cancel
                      </button>
                      <button
                        type="submit"
                        className="px-4 py-1.5 bg-agro-green hover:bg-emerald-700 text-white rounded-xl text-xs font-bold flex items-center gap-1.5 shadow-sm"
                      >
                        <Send className="w-3.5 h-3.5" />
                        <span>Send Message</span>
                      </button>
                    </div>
                  </form>
                </div>
              )}
            </div>
          </div>

          {/* Farmer Profile Card Footer */}
          <div className="mt-8 pt-5 border-t border-slate-100 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-full overflow-hidden bg-slate-100 ring-2 ring-agro-green/30">
                <img
                  src={INITIAL_FARMERS.find(f => f.id === product.farmerId)?.avatar || "https://images.unsplash.com/photo-1595152772835-219674b2a163?auto=format&fit=crop&w=200&q=80"}
                  alt={product.farmerName}
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <div className="flex items-center gap-1.5">
                  <h4 className="font-bold text-slate-900 text-sm">{product.farmerName}</h4>
                  <CheckCircle2 className="w-4 h-4 text-agro-green" />
                </div>
                <p className="text-xs text-slate-500">{product.farmName || 'Verified Agricultural Co-operative'}</p>
                <div className="flex items-center gap-2 text-[11px] text-agro-green font-medium mt-0.5">
                  <span>★ 4.9 Rating</span>
                  <span>•</span>
                  <span>100% On-Time Delivery</span>
                </div>
              </div>
            </div>

            <button
              onClick={() => navigateToFarmerProfile(product.farmerId)}
              className="text-xs font-bold text-agro-forest hover:text-agro-green underline hidden sm:inline"
            >
              Visit Farm Profile →
            </button>
          </div>
        </div>
      </div>

      {/* Tabs Section: Specifications, Wholesale Terms, Customer Reviews */}
      <div className="mt-10 bg-white rounded-3xl p-6 sm:p-8 border border-slate-200/80 shadow-soft">
        <div className="flex border-b border-slate-100 gap-6 text-sm font-bold">
          <button
            onClick={() => setActiveTabSub('specs')}
            className={`pb-3 transition relative ${
              activeTabSub === 'specs'
                ? 'text-agro-forest border-b-2 border-agro-green'
                : 'text-slate-400 hover:text-slate-600'
            }`}
          >
            Produce Specifications
          </button>
          <button
            onClick={() => setActiveTabSub('wholesale')}
            className={`pb-3 transition relative ${
              activeTabSub === 'wholesale'
                ? 'text-agro-forest border-b-2 border-agro-green'
                : 'text-slate-400 hover:text-slate-600'
            }`}
          >
            Wholesale Logistics & Transport
          </button>
          <button
            onClick={() => setActiveTabSub('reviews')}
            className={`pb-3 transition relative ${
              activeTabSub === 'reviews'
                ? 'text-agro-forest border-b-2 border-agro-green'
                : 'text-slate-400 hover:text-slate-600'
            }`}
          >
            Verified Buyer Reviews ({localReviews.length})
          </button>
        </div>

        {/* Tab 1: Specs */}
        {activeTabSub === 'specs' && (
          <div className="pt-6 grid grid-cols-1 md:grid-cols-2 gap-6 text-sm">
            <div className="space-y-3">
              <div className="flex justify-between py-2 border-b border-slate-100">
                <span className="text-slate-500">Quality Classification</span>
                <span className="font-bold text-slate-800">{product.qualityGrade}</span>
              </div>
              <div className="flex justify-between py-2 border-b border-slate-100">
                <span className="text-slate-500">Harvest Origin</span>
                <span className="font-bold text-slate-800">{product.town || product.location}, {product.location} State</span>
              </div>
              <div className="flex justify-between py-2 border-b border-slate-100">
                <span className="text-slate-500">Packaging Type</span>
                <span className="font-bold text-slate-800">Breathable Ventilated Crate / Hessian Bag</span>
              </div>
              <div className="flex justify-between py-2 border-b border-slate-100">
                <span className="text-slate-500">Farming Method</span>
                <span className="font-bold text-slate-800">{product.organic ? 'Certified Organic / Natural Manure' : 'Good Agricultural Practices (GAP)'}</span>
              </div>
            </div>

            <div className="space-y-3">
              <div className="flex justify-between py-2 border-b border-slate-100">
                <span className="text-slate-500">Typical Shelf Life</span>
                <span className="font-bold text-slate-800">14-21 Days in Ambient / 60+ Days in Cold Room</span>
              </div>
              <div className="flex justify-between py-2 border-b border-slate-100">
                <span className="text-slate-500">Inspection Protocol</span>
                <span className="font-bold text-slate-800">Optically Sorted, Stone-free, Zero-Bruise Verified</span>
              </div>
              <div className="flex justify-between py-2 border-b border-slate-100">
                <span className="text-slate-500">Minimum Order</span>
                <span className="font-bold text-slate-800">{product.minOrder || 1} {product.unit}</span>
              </div>
              <div className="flex justify-between py-2 border-b border-slate-100">
                <span className="text-slate-500">Seasonal Availability</span>
                <span className="font-bold text-emerald-600">{product.inSeason ? 'Currently in Peak Harvest' : 'Controlled Climate Storage'}</span>
              </div>
            </div>
          </div>
        )}

        {/* Tab 2: Wholesale & Logistics */}
        {activeTabSub === 'wholesale' && (
          <div className="pt-6 space-y-4 text-sm text-slate-700">
            <div className="p-4 bg-emerald-50/70 border border-emerald-200 rounded-2xl">
              <h4 className="font-bold text-agro-forest mb-1">Interstate Direct Haulage Available</h4>
              <p className="text-xs text-slate-600 leading-relaxed">
                AGROMATCH operates temperature-controlled freight routes from Northern and Middle-Belt farming clusters into Lagos, Abuja, Port Harcourt, and Ibadan daily. Bulk orders over 5 metric tons qualify for dedicated farm-to-warehouse charter trucks.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs pt-2">
              <div className="p-4 border border-slate-200 rounded-xl">
                <h5 className="font-bold text-slate-900 mb-1">Lagos Metro Delivery</h5>
                <p className="text-slate-500">24-36 Hours from Harvest Gate. Morning kitchen dock delivery.</p>
              </div>
              <div className="p-4 border border-slate-200 rounded-xl">
                <h5 className="font-bold text-slate-900 mb-1">Abuja FCT Delivery</h5>
                <p className="text-slate-500">12-24 Hours via Northern and Middle-Belt express corridors.</p>
              </div>
              <div className="p-4 border border-slate-200 rounded-xl">
                <h5 className="font-bold text-slate-900 mb-1">Cold-Chain Assurance</h5>
                <p className="text-slate-500">Refrigerated trucks maintain 8°C - 12°C for delicate fruits and tomatoes.</p>
              </div>
            </div>
          </div>
        )}

        {/* Tab 3: Reviews */}
        {activeTabSub === 'reviews' && (
          <div className="pt-6 space-y-6">
            {/* Review Form */}
            <form onSubmit={handleAddReview} className="p-4 bg-slate-50 rounded-2xl border border-slate-200 space-y-3">
              <h4 className="text-xs font-bold text-slate-800 uppercase tracking-wide">Write a Review for this Produce</h4>
              <div className="flex items-center gap-2">
                <span className="text-xs text-slate-600">Your Rating:</span>
                <div className="flex items-center gap-1">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <button
                      type="button"
                      key={star}
                      onClick={() => setNewReviewRating(star)}
                      className={`w-5 h-5 ${star <= newReviewRating ? 'text-amber-400 fill-amber-400' : 'text-slate-300'}`}
                    >
                      <Star className="w-4 h-4 fill-current" />
                    </button>
                  ))}
                </div>
              </div>
              <textarea
                rows={2}
                value={newReviewText}
                onChange={(e) => setNewReviewText(e.target.value)}
                placeholder="Share your kitchen test, produce freshness, shelf-life, or supplier experience..."
                className="w-full text-xs p-3 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-agro-green bg-white"
                required
              />
              <div className="flex justify-end">
                <button
                  type="submit"
                  className="px-4 py-2 bg-agro-green hover:bg-emerald-700 text-white font-bold text-xs rounded-xl shadow-sm transition"
                >
                  Submit Verified Review
                </button>
              </div>
            </form>

            {/* Existing Reviews */}
            <div className="space-y-4">
              {localReviews.map((rev) => (
                <div key={rev.id} className="p-4 border border-slate-100 rounded-2xl hover:border-slate-200 transition">
                  <div className="flex items-center justify-between mb-1.5">
                    <div>
                      <span className="font-bold text-slate-900 text-sm">{rev.author}</span>
                      <span className="text-xs text-slate-400 ml-2">({rev.role})</span>
                    </div>
                    <span className="text-[11px] text-slate-400">{rev.date}</span>
                  </div>
                  <div className="flex items-center text-amber-400 mb-2">
                    {[...Array(rev.rating)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-current" />
                    ))}
                  </div>
                  <p className="text-xs text-slate-700 leading-relaxed">{rev.comment}</p>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Suggested / Related Products */}
      {relatedProducts.length > 0 && (
        <div className="mt-12">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-xl font-black text-slate-900">
              Frequently Sourced Together
            </h3>
            <button
              onClick={() => setActiveTab('marketplace')}
              className="text-xs font-bold text-agro-forest hover:text-agro-green"
            >
              View More in Marketplace →
            </button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {relatedProducts.map(p => (
              <div
                key={p.id}
                onClick={() => {
                  useApp().setSelectedProductId(p.id);
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className="bg-white p-4 rounded-2xl border border-slate-200/80 hover:border-agro-green/50 shadow-soft hover:shadow-elevated transition cursor-pointer flex gap-4"
              >
                <img
                  src={p.image}
                  alt={p.name}
                  className="w-20 h-20 rounded-xl object-cover shrink-0"
                />
                <div className="flex-1 min-w-0">
                  <span className="text-[10px] text-agro-green font-bold uppercase">{p.category}</span>
                  <h4 className="font-bold text-slate-800 text-xs truncate mt-0.5">{p.name}</h4>
                  <div className="text-xs font-black text-agro-forest mt-1">₦{p.price.toLocaleString()} <span className="text-[10px] text-slate-500 font-normal">/ {p.unit}</span></div>
                  <span className="text-[11px] text-slate-400">{p.location} State</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
