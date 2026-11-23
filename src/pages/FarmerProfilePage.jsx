import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import { INITIAL_FARMERS } from '../data/mockData';
import {
  MapPin,
  CheckCircle2,
  Star,
  ShoppingCart,
  Eye,
  Phone,
  Mail,
  ArrowLeft,
  MessageSquare,
  Wheat,
  Layers,
  Shield,
  TrendingDown,
  Sprout,
  Award,
  Users,
  Package
} from 'lucide-react';

export default function FarmerProfilePage() {
  const {
    selectedFarmerId,
    products,
    setActiveTab,
    addToCart,
    navigateToProduct,
    sendMessage,
    showNotification,
    user
  } = useApp();

  const [messageText, setMessageText] = useState('');
  const [showContactForm, setShowContactForm] = useState(false);

  const farmer = INITIAL_FARMERS.find(f => f.id === selectedFarmerId);

  if (!farmer) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center space-y-4">
          <Sprout className="w-16 h-16 text-agro-green mx-auto" />
          <h2 className="text-2xl font-black text-slate-900">Farmer Not Found</h2>
          <p className="text-slate-500">This farm profile is not available.</p>
          <button
            onClick={() => setActiveTab('marketplace')}
            className="px-6 py-3 bg-agro-green text-white font-bold rounded-xl"
          >
            Back to Marketplace
          </button>
        </div>
      </div>
    );
  }

  const farmerProducts = products.filter(p => p.farmerId === selectedFarmerId);

  const handleSendMessage = (e) => {
    e.preventDefault();
    if (!messageText.trim()) return;
    sendMessage(farmer.id, messageText, `Enquiry to ${farmer.name}`);
    setMessageText('');
    setShowContactForm(false);
    showNotification(`Message sent to ${farmer.name}!`);
  };

  return (
    <div className="min-h-screen bg-agro-cream pb-20">
      {/* Back Button */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6 pb-2">
        <button
          onClick={() => setActiveTab('marketplace')}
          className="inline-flex items-center gap-2 text-sm font-bold text-agro-forest hover:text-agro-green transition"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Marketplace
        </button>
      </div>

      {/* Hero Banner */}
      <div className="bg-gradient-to-r from-agro-forest via-emerald-800 to-agro-green py-10 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-black/10 to-transparent pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6">
            <img
              src={farmer.avatar}
              alt={farmer.name}
              className="w-24 h-24 sm:w-32 sm:h-32 rounded-3xl object-cover ring-4 ring-white/40 shadow-2xl shrink-0"
            />
            <div className="text-white">
              <div className="flex flex-wrap items-center gap-2 mb-1">
                <h1 className="text-2xl sm:text-3xl font-black">{farmer.name}</h1>
                {farmer.verified && (
                  <span className="inline-flex items-center gap-1 bg-emerald-500/90 backdrop-blur-sm text-white text-xs font-bold px-2.5 py-1 rounded-full">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                    Verified Producer
                  </span>
                )}
              </div>
              <p className="text-lime-300 font-bold text-base">{farmer.farmName}</p>
              <div className="flex flex-wrap items-center gap-3 text-sm text-white/80 mt-2">
                <span className="flex items-center gap-1">
                  <MapPin className="w-3.5 h-3.5 text-lime-400" />
                  {farmer.location}
                </span>
                <span className="flex items-center gap-1">
                  <Star className="w-3.5 h-3.5 text-amber-400 fill-amber-400" />
                  <strong className="text-white">{farmer.rating}</strong> Rating
                </span>
                <span className="flex items-center gap-1">
                  <Package className="w-3.5 h-3.5 text-lime-400" />
                  <strong className="text-white">{farmer.ordersCompleted}</strong> Orders Completed
                </span>
              </div>
              <div className="mt-3 inline-flex items-center gap-1.5 bg-lime-400/20 border border-lime-400/30 text-lime-200 text-xs font-bold px-3 py-1 rounded-full">
                <Award className="w-3.5 h-3.5" />
                {farmer.badge}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">

          {/* LEFT COLUMN: Farmer Info */}
          <div className="lg:col-span-1 space-y-5">

            {/* About the Farm */}
            <div className="bg-white rounded-3xl p-6 border border-slate-200/80 shadow-soft">
              <h2 className="font-black text-slate-900 text-lg mb-3 flex items-center gap-2">
                <Sprout className="w-5 h-5 text-agro-green" />
                About This Farm
              </h2>
              <p className="text-sm text-slate-600 leading-relaxed">{farmer.bio}</p>

              <div className="mt-5 space-y-2.5">
                <div className="flex justify-between text-sm py-2 border-b border-slate-100">
                  <span className="text-slate-500 flex items-center gap-1.5">
                    <Wheat className="w-3.5 h-3.5 text-agro-green" />
                    Specialty
                  </span>
                  <span className="font-bold text-slate-800 text-right max-w-[180px] leading-snug">{farmer.specialty}</span>
                </div>
                <div className="flex justify-between text-sm py-2 border-b border-slate-100">
                  <span className="text-slate-500 flex items-center gap-1.5">
                    <Layers className="w-3.5 h-3.5 text-agro-green" />
                    Farm Scale
                  </span>
                  <span className="font-bold text-slate-800">{farmer.farmSize}</span>
                </div>
                <div className="flex justify-between text-sm py-2 border-b border-slate-100">
                  <span className="text-slate-500 flex items-center gap-1.5">
                    <Shield className="w-3.5 h-3.5 text-agro-green" />
                    CAC Registration
                  </span>
                  <span className="font-bold text-slate-800 font-mono">{farmer.cacNumber}</span>
                </div>
                <div className="flex justify-between text-sm py-2">
                  <span className="text-slate-500 flex items-center gap-1.5">
                    <Users className="w-3.5 h-3.5 text-agro-green" />
                    Orders Done
                  </span>
                  <span className="font-bold text-agro-green">{farmer.ordersCompleted} orders</span>
                </div>
              </div>
            </div>

            {/* Contact Information */}
            <div className="bg-white rounded-3xl p-6 border border-slate-200/80 shadow-soft">
              <h2 className="font-black text-slate-900 text-lg mb-4 flex items-center gap-2">
                <Phone className="w-5 h-5 text-agro-green" />
                Contact Farmer
              </h2>

              <div className="space-y-3 mb-5">
                <a
                  href={`tel:${farmer.phone}`}
                  className="flex items-center gap-3 p-3 bg-green-50 rounded-xl hover:bg-green-100 transition group"
                >
                  <div className="w-8 h-8 bg-agro-green rounded-lg flex items-center justify-center">
                    <Phone className="w-4 h-4 text-white" />
                  </div>
                  <div>
                    <p className="text-[11px] text-slate-500 font-medium">Phone</p>
                    <p className="text-sm font-bold text-slate-800 group-hover:text-agro-forest">{farmer.phone}</p>
                  </div>
                </a>

                <a
                  href={`mailto:${farmer.email}`}
                  className="flex items-center gap-3 p-3 bg-blue-50 rounded-xl hover:bg-blue-100 transition group"
                >
                  <div className="w-8 h-8 bg-blue-500 rounded-lg flex items-center justify-center">
                    <Mail className="w-4 h-4 text-white" />
                  </div>
                  <div>
                    <p className="text-[11px] text-slate-500 font-medium">Email</p>
                    <p className="text-sm font-bold text-slate-800 group-hover:text-blue-700 truncate">{farmer.email}</p>
                  </div>
                </a>
              </div>

              {/* Send Message Form */}
              <button
                onClick={() => setShowContactForm(!showContactForm)}
                className="w-full py-2.5 rounded-xl bg-agro-forest hover:bg-agro-green text-white text-sm font-bold transition flex items-center justify-center gap-2"
              >
                <MessageSquare className="w-4 h-4" />
                {showContactForm ? 'Cancel Message' : 'Send Direct Message'}
              </button>

              {showContactForm && (
                <form onSubmit={handleSendMessage} className="mt-4 space-y-3">
                  <textarea
                    value={messageText}
                    onChange={e => setMessageText(e.target.value)}
                    placeholder={`Write your message to ${farmer.name}...`}
                    rows={4}
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-agro-green focus:ring-2 focus:ring-agro-green/20 outline-none resize-none text-sm"
                    required
                  />
                  <button
                    type="submit"
                    className="w-full py-2.5 bg-agro-green hover:bg-emerald-700 text-white font-bold text-sm rounded-xl transition"
                  >
                    Send Message
                  </button>
                </form>
              )}
            </div>

            {/* Request Bulk Quote */}
            <div className="bg-gradient-to-br from-agro-forest to-emerald-900 rounded-3xl p-6 text-white">
              <TrendingDown className="w-8 h-8 text-lime-400 mb-3" />
              <h3 className="font-black text-lg mb-2">Need Bulk Supply?</h3>
              <p className="text-sm text-white/80 mb-4 leading-relaxed">
                Submit a Request for Quotation and get competitive pricing directly from {farmer.name}.
              </p>
              <button
                onClick={() => setActiveTab('bulk-procurement')}
                className="w-full py-2.5 bg-lime-400 hover:bg-lime-300 text-agro-forest font-bold text-sm rounded-xl transition"
              >
                Request Bulk Quote
              </button>
            </div>
          </div>

          {/* RIGHT COLUMN: Products */}
          <div className="lg:col-span-2">
            <div className="mb-6">
              <h2 className="text-2xl font-black text-slate-900 tracking-tight">
                Available Products from This Farm
              </h2>
              <p className="text-sm text-slate-500 mt-1">
                {farmerProducts.length} product{farmerProducts.length !== 1 ? 's' : ''} listed by {farmer.name}
              </p>
            </div>

            {farmerProducts.length === 0 ? (
              <div className="bg-white rounded-3xl p-10 text-center border border-slate-200/80 shadow-soft">
                <Wheat className="w-12 h-12 text-slate-300 mx-auto mb-3" />
                <p className="text-slate-500 font-medium">No products currently listed by this farmer.</p>
                <button
                  onClick={() => setActiveTab('marketplace')}
                  className="mt-4 px-6 py-2.5 bg-agro-green text-white font-bold rounded-xl text-sm"
                >
                  Explore Marketplace
                </button>
              </div>
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                {farmerProducts.map(product => (
                  <div
                    key={product.id}
                    className="bg-white rounded-2xl border border-slate-200/80 hover:border-agro-green/50 shadow-soft hover:shadow-elevated transition-all duration-300 overflow-hidden flex flex-col"
                  >
                    {/* Product Image */}
                    <div className="relative h-44 overflow-hidden bg-slate-100">
                      <img
                        src={product.image}
                        alt={product.name}
                        className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                        loading="lazy"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
                      <div className="absolute top-3 left-3 flex gap-1.5">
                        <span className="bg-agro-forest/90 backdrop-blur-md text-white text-[11px] font-bold px-2.5 py-1 rounded-lg">
                          {product.qualityGrade}
                        </span>
                        {product.inSeason && (
                          <span className="bg-lime-500/95 text-agro-forest text-[11px] font-extrabold px-2 py-1 rounded-lg">
                            In Season
                          </span>
                        )}
                      </div>
                    </div>

                    {/* Product Body */}
                    <div className="p-4 flex-1 flex flex-col justify-between">
                      <div>
                        <span className="text-[11px] font-bold text-agro-green uppercase tracking-wide">{product.category}</span>
                        <h3 className="font-bold text-slate-900 text-sm leading-snug mt-0.5 line-clamp-2">{product.name}</h3>
                        <div className="flex items-center gap-1 mt-1">
                          <Star className="w-3 h-3 fill-amber-400 text-amber-400" />
                          <span className="text-xs font-bold text-slate-700">{product.rating}</span>
                          <span className="text-xs text-slate-400">({product.reviewsCount} reviews)</span>
                        </div>
                      </div>

                      <div className="mt-3 pt-3 border-t border-slate-100">
                        <div className="flex items-baseline justify-between mb-3">
                          <div>
                            <span className="text-lg font-black text-agro-forest">₦{product.price.toLocaleString()}</span>
                            <span className="text-xs text-slate-500 ml-1">/ {product.unit}</span>
                          </div>
                          <span className="text-xs font-bold text-slate-500">{product.stock} in stock</span>
                        </div>

                        <div className="flex gap-2">
                          <button
                            onClick={() => navigateToProduct(product.id)}
                            className="flex-1 py-2 px-2.5 rounded-xl border border-slate-200 hover:border-agro-green text-xs font-bold text-slate-700 hover:text-agro-forest hover:bg-green-50 transition flex items-center justify-center gap-1"
                          >
                            <Eye className="w-3.5 h-3.5" />
                            Details
                          </button>
                          <button
                            onClick={() => addToCart(product, 1)}
                            className="flex-1 py-2 px-2.5 rounded-xl bg-agro-green hover:bg-emerald-700 text-white text-xs font-bold transition flex items-center justify-center gap-1.5"
                          >
                            <ShoppingCart className="w-3.5 h-3.5" />
                            Add to Cart
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
