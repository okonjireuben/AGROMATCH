import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import {
  Building2,
  ShoppingBag,
  Truck,
  Heart,
  MessageSquare,
  Settings,
  DollarSign,
  TrendingDown,
  CheckCircle2,
  Clock,
  ShieldCheck,
  MapPin,
  ExternalLink,
  ChevronRight,
  Send,
  Download,
  AlertCircle,
  Thermometer,
  RotateCcw
} from 'lucide-react';

export default function BuyerDashboard() {
  const {
    user,
    orders,
    favorites,
    products,
    messages,
    sendMessage,
    updateOrderStatus,
    setActiveTab,
    setSelectedOrderId,
    selectedOrderId,
    addToCart,
    showNotification
  } = useApp();

  const [activeSubTab, setActiveSubTab] = useState(selectedOrderId ? 'tracking' : 'overview');
  const [activeMessageIndex, setActiveMessageIndex] = useState(0);
  const [buyerReplyText, setBuyerReplyText] = useState('');

  // Selected Order for Tracking
  const currentTrackingOrder = orders.find(o => o.id === selectedOrderId) || orders[0];

  const totalSpent = orders.reduce((sum, ord) => sum + ord.total, 0);
  const activeDeliveriesCount = orders.filter(o => o.status !== 'Delivered' && o.status !== 'Cancelled').length;

  const favoriteProducts = products.filter(p => favorites.includes(p.id));

  const handleConfirmDelivery = (orderId) => {
    updateOrderStatus(orderId, 'Delivered', 'Buyer inspected and verified produce freshness at kitchen dock');
    showNotification(`Delivery confirmed! Escrow funds released to farmer.`, 'success');
  };

  const handleSendBuyerReply = (e) => {
    e.preventDefault();
    if (!buyerReplyText.trim()) return;
    const thread = messages[activeMessageIndex];
    if (thread) {
      sendMessage(thread.recipientId, buyerReplyText, thread.cropSubject);
      setBuyerReplyText('');
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 animate-in fade-in space-y-8">
      {/* Buyer Header */}
      <div className="bg-gradient-to-r from-agro-forest via-emerald-950 to-agro-forest rounded-3xl p-6 sm:p-8 text-white shadow-xl flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
        <div className="flex items-center gap-4">
          <img
            src={user?.avatar || 'https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?auto=format&fit=crop&w=200&q=80'}
            alt={user?.name}
            className="w-16 h-16 rounded-2xl object-cover ring-4 ring-agro-green/40 shadow-md"
          />
          <div>
            <div className="flex items-center gap-2">
              <h1 className="text-2xl sm:text-3xl font-black">{user?.name || 'Chef Deji Balogun'}</h1>
              <span className="bg-lime-400 text-agro-forest text-[11px] font-black px-2 py-0.5 rounded-full capitalize">
                {user?.role || 'restaurant'} Account
              </span>
            </div>
            <p className="text-xs text-slate-300 font-medium mt-0.5">
              {user?.businessName || 'Terra Kulture & Lounge'} • {user?.location || 'Victoria Island, Lagos'}
            </p>
            <div className="flex items-center gap-3 text-[11px] text-emerald-300 mt-1">
              <span>Direct Commercial Procurement</span>
              <span>•</span>
              <span>Verified Food Safety Escrow</span>
            </div>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <button
            onClick={() => {
              setActiveTab('marketplace');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className="px-5 py-3 rounded-2xl bg-agro-green hover:bg-emerald-600 text-white font-black text-xs shadow-lg transition flex items-center gap-2"
          >
            <ShoppingBag className="w-4 h-4" />
            <span>Browse Fresh Harvests</span>
          </button>
        </div>
      </div>

      {/* Navigation Sub-Tabs */}
      <div className="flex items-center gap-2 overflow-x-auto pb-2 border-b border-slate-200">
        {[
          { id: 'overview', label: 'Procurement Overview', icon: Building2 },
          { id: 'orders', label: `My Orders (${orders.length})`, icon: ShoppingBag },
          { id: 'tracking', label: 'Live Order Tracking', icon: Truck },
          { id: 'favorites', label: `Saved Produce & Farms (${favorites.length})`, icon: Heart },
          { id: 'messages', label: `Farmer Messages (${messages.length})`, icon: MessageSquare },
          { id: 'settings', label: 'Delivery & Account Settings', icon: Settings }
        ].map(tab => {
          const Icon = tab.icon;
          const isActive = activeSubTab === tab.id;
          return (
            <button
              key={tab.id}
              onClick={() => setActiveSubTab(tab.id)}
              className={`px-4 py-2.5 rounded-xl text-xs font-bold whitespace-nowrap transition flex items-center gap-2 ${
                isActive
                  ? 'bg-agro-forest text-white shadow-sm'
                  : 'bg-white text-slate-600 hover:text-agro-forest hover:bg-slate-50 border border-slate-200/60'
              }`}
            >
              <Icon className={`w-4 h-4 ${isActive ? 'text-lime-400' : 'text-slate-400'}`} />
              <span>{tab.label}</span>
            </button>
          );
        })}
      </div>

      {/* SUB-TAB 1: OVERVIEW */}
      {activeSubTab === 'overview' && (
        <div className="space-y-8 animate-in fade-in">
          {/* Key Metrics */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white p-6 rounded-3xl border border-slate-200 shadow-soft">
              <div className="flex items-center justify-between text-slate-500 mb-2">
                <span className="text-xs font-bold uppercase tracking-wider">Total Procurement</span>
                <DollarSign className="w-5 h-5 text-agro-green" />
              </div>
              <div className="text-2xl sm:text-3xl font-black text-agro-forest">
                ₦{totalSpent.toLocaleString()}
              </div>
              <span className="text-[11px] text-emerald-600 font-semibold mt-1 block">
                Direct farm-gate spend
              </span>
            </div>

            <div className="bg-white p-6 rounded-3xl border border-slate-200 shadow-soft">
              <div className="flex items-center justify-between text-slate-500 mb-2">
                <span className="text-xs font-bold uppercase tracking-wider">Active Deliveries</span>
                <Truck className="w-5 h-5 text-lime-600" />
              </div>
              <div className="text-2xl sm:text-3xl font-black text-slate-800">
                {activeDeliveriesCount} En Route
              </div>
              <span className="text-[11px] text-slate-500 mt-1 block">
                Cold-chain haulage active
              </span>
            </div>

            <div className="bg-white p-6 rounded-3xl border border-slate-200 shadow-soft">
              <div className="flex items-center justify-between text-slate-500 mb-2">
                <span className="text-xs font-bold uppercase tracking-wider">Estimated Savings</span>
                <TrendingDown className="w-5 h-5 text-agro-green" />
              </div>
              <div className="text-2xl sm:text-3xl font-black text-agro-forest">
                29.4%
              </div>
              <span className="text-[11px] text-emerald-600 font-semibold mt-1 block">
                Saved vs open market rates
              </span>
            </div>

            <div className="bg-white p-6 rounded-3xl border border-slate-200 shadow-soft">
              <div className="flex items-center justify-between text-slate-500 mb-2">
                <span className="text-xs font-bold uppercase tracking-wider">Escrow Protection</span>
                <ShieldCheck className="w-5 h-5 text-agro-green" />
              </div>
              <div className="text-xl sm:text-2xl font-black text-slate-800">
                100% Protected
              </div>
              <span className="text-[11px] text-slate-500 mt-1 block">
                Sign-off at kitchen dock
              </span>
            </div>
          </div>

          {/* Quick Reorder Grid */}
          <div className="bg-white p-6 sm:p-8 rounded-3xl border border-slate-200 shadow-soft">
            <div className="flex items-center justify-between mb-6">
              <div>
                <h3 className="text-base font-bold text-slate-900">Frequently Procured Kitchen Supplies</h3>
                <p className="text-xs text-slate-500">Re-order your kitchen staples in one click at locked supplier rates</p>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {products.slice(0, 3).map(p => (
                <div key={p.id} className="p-4 rounded-2xl border border-slate-200/90 flex gap-4 items-center">
                  <img src={p.image} alt={p.name} className="w-16 h-16 rounded-xl object-cover shrink-0" />
                  <div className="flex-1 min-w-0">
                    <h4 className="font-bold text-slate-900 text-xs truncate">{p.name}</h4>
                    <div className="text-xs font-black text-agro-forest mt-0.5">
                      ₦{p.price.toLocaleString()} <span className="text-[10px] text-slate-500 font-normal">/ {p.unit}</span>
                    </div>
                    <button
                      onClick={() => addToCart(p, 2)}
                      className="mt-2 text-[11px] font-bold text-agro-green hover:underline flex items-center gap-1"
                    >
                      <RotateCcw className="w-3 h-3" />
                      <span>Reorder 2 Units</span>
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Recent Orders Snapshot */}
          <div className="bg-white p-6 sm:p-8 rounded-3xl border border-slate-200 shadow-soft">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-base font-bold text-slate-900">Recent Sourcing Orders</h3>
              <button
                onClick={() => setActiveSubTab('orders')}
                className="text-xs font-bold text-agro-forest hover:text-agro-green"
              >
                View Full History →
              </button>
            </div>

            <div className="space-y-4">
              {orders.map(ord => (
                <div key={ord.id} className="p-4 rounded-2xl border border-slate-100 bg-slate-50/60 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                  <div>
                    <div className="flex items-center gap-2">
                      <span className="font-bold text-slate-900 text-xs">{ord.id}</span>
                      <span className="text-[11px] text-slate-400">• {ord.date}</span>
                      <span className="bg-green-100 text-green-800 font-bold px-2 py-0.5 rounded text-[10px]">
                        {ord.status}
                      </span>
                    </div>
                    <div className="text-xs text-slate-600 mt-1">
                      {ord.items.map(i => `${i.quantity}x ${i.name}`).join(', ')}
                    </div>
                  </div>

                  <div className="flex items-center gap-4">
                    <div className="text-right">
                      <span className="text-xs font-black text-agro-forest">₦{ord.total.toLocaleString()}</span>
                      <div className="text-[10px] text-slate-400">{ord.paymentMethod}</div>
                    </div>

                    <button
                      onClick={() => {
                        setSelectedOrderId(ord.id);
                        setActiveSubTab('tracking');
                      }}
                      className="px-3.5 py-1.5 bg-agro-forest text-white rounded-xl text-xs font-bold hover:bg-emerald-950 transition"
                    >
                      Track Shipment
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* SUB-TAB 2: MY ORDERS */}
      {activeSubTab === 'orders' && (
        <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-soft space-y-6 animate-in fade-in">
          <div>
            <h2 className="text-xl font-black text-slate-900">Order History & Invoices</h2>
            <p className="text-xs text-slate-500">Every order is protected by AGROMATCH Escrow until you inspect produce at delivery.</p>
          </div>

          <div className="space-y-6">
            {orders.map(ord => (
              <div key={ord.id} className="border border-slate-200 rounded-3xl p-6 space-y-4">
                <div className="flex flex-wrap items-center justify-between gap-3 pb-3 border-b border-slate-100">
                  <div>
                    <span className="text-base font-black text-slate-900">{ord.id}</span>
                    <span className="text-xs text-slate-400 ml-2">Placed: {ord.date}</span>
                  </div>

                  <div className="flex items-center gap-2">
                    <span className={`px-3 py-1 rounded-full text-xs font-bold ${
                      ord.status === 'Delivered'
                        ? 'bg-green-100 text-green-800'
                        : 'bg-emerald-100 text-agro-forest'
                    }`}>
                      Status: {ord.status}
                    </span>
                    <button
                      onClick={() => {
                        setSelectedOrderId(ord.id);
                        setActiveSubTab('tracking');
                      }}
                      className="px-3 py-1 bg-agro-green text-white text-xs font-bold rounded-xl"
                    >
                      Live Tracking
                    </button>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-12 gap-4">
                  <div className="md:col-span-8 space-y-2">
                    <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">Produce Items</span>
                    {ord.items.map((item, idx) => (
                      <div key={idx} className="flex justify-between items-center text-xs p-2.5 bg-slate-50 rounded-xl">
                        <div>
                          <span className="font-bold text-slate-800">{item.quantity}x {item.name}</span>
                          <span className="text-slate-500 block text-[11px]">Supplier: {item.farmerName}</span>
                        </div>
                        <span className="font-black text-agro-forest">₦{(item.price * item.quantity).toLocaleString()}</span>
                      </div>
                    ))}
                  </div>

                  <div className="md:col-span-4 p-4 bg-emerald-50/70 border border-emerald-200/60 rounded-2xl text-xs space-y-2">
                    <div className="flex justify-between">
                      <span className="text-slate-500">Subtotal</span>
                      <span className="font-bold text-slate-800">₦{ord.subtotal.toLocaleString()}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-slate-500">Interstate Cold-Chain</span>
                      <span className="font-bold text-slate-800">₦{ord.deliveryFee.toLocaleString()}</span>
                    </div>
                    <div className="flex justify-between pt-2 border-t border-emerald-200 text-sm font-black text-agro-forest">
                      <span>Total Paid</span>
                      <span>₦{ord.total.toLocaleString()}</span>
                    </div>
                    <div className="text-[11px] text-agro-green font-semibold pt-1">
                      ✓ {ord.paymentStatus}
                    </div>
                  </div>
                </div>

                {ord.status !== 'Delivered' && (
                  <div className="pt-2 flex justify-end">
                    <button
                      onClick={() => handleConfirmDelivery(ord.id)}
                      className="px-5 py-2.5 bg-agro-forest hover:bg-emerald-950 text-white font-bold text-xs rounded-xl shadow-md transition flex items-center gap-1.5"
                    >
                      <CheckCircle2 className="w-4 h-4 text-lime-400" />
                      <span>Confirm Produce Inspection & Release Escrow</span>
                    </button>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      )}

      {/* SUB-TAB 3: LIVE ORDER TRACKING */}
      {activeSubTab === 'tracking' && currentTrackingOrder && (
        <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-soft space-y-8 animate-in fade-in">
          <div className="flex flex-wrap items-center justify-between gap-4 pb-4 border-b border-slate-100">
            <div>
              <div className="flex items-center gap-2">
                <h2 className="text-xl font-black text-slate-900">Live Farm-to-Buyer Tracker</h2>
                <span className="bg-lime-400 text-agro-forest font-black text-xs px-2.5 py-0.5 rounded-full">
                  GPS Active
                </span>
              </div>
              <p className="text-xs text-slate-500 mt-1">
                Tracking Order #{currentTrackingOrder.id} • Carrier Code: {currentTrackingOrder.trackingCode}
              </p>
            </div>

            <div className="text-right">
              <span className="text-xs text-slate-400 block font-medium">Estimated Kitchen Arrival</span>
              <span className="text-sm font-black text-agro-forest">Tomorrow, 08:30 AM (Morning Dispatch)</span>
            </div>
          </div>

          {/* Interactive Route Timeline */}
          <div className="relative py-6">
            <div className="grid grid-cols-1 sm:grid-cols-5 gap-4">
              {currentTrackingOrder.timeline.map((step, idx) => (
                <div key={idx} className="relative flex sm:flex-col items-start gap-3 sm:gap-2">
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center font-bold text-xs shrink-0 shadow-sm ${
                    step.done
                      ? 'bg-agro-green text-white ring-4 ring-green-100'
                      : 'bg-slate-200 text-slate-500'
                  }`}>
                    {step.done ? <CheckCircle2 className="w-4 h-4" /> : idx + 1}
                  </div>
                  <div>
                    <h4 className={`text-xs font-bold ${step.done ? 'text-slate-900' : 'text-slate-400'}`}>
                      {step.stage}
                    </h4>
                    <span className="text-[10px] text-agro-green font-semibold block">{step.time}</span>
                    <p className="text-[11px] text-slate-500 leading-tight mt-0.5">{step.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Route Map Simulation & Driver Details */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 bg-slate-50 p-6 rounded-3xl border border-slate-200">
            <div className="lg:col-span-8 space-y-4">
              <h3 className="text-xs font-bold text-slate-700 uppercase tracking-wider">Logistics Transit Status</h3>
              <div className="p-4 bg-white rounded-2xl border border-slate-200 space-y-3">
                <div className="flex items-center justify-between text-xs">
                  <div className="flex items-center gap-2">
                    <MapPin className="w-4 h-4 text-agro-green" />
                    <span className="font-bold text-slate-800">Farm Gate: Kano / Benue Agro Hub</span>
                  </div>
                  <span className="text-slate-400">Departed: 04:30 AM</span>
                </div>

                <div className="w-full bg-slate-100 rounded-full h-3 overflow-hidden">
                  <div className="bg-gradient-to-r from-agro-forest to-agro-green h-full w-3/4 rounded-full relative">
                    <div className="absolute right-0 top-0 bottom-0 w-3 bg-white/40 animate-pulse" />
                  </div>
                </div>

                <div className="flex items-center justify-between text-xs">
                  <div className="flex items-center gap-2">
                    <MapPin className="w-4 h-4 text-rose-500" />
                    <span className="font-bold text-slate-800">Destination: {currentTrackingOrder.deliveryAddress}</span>
                  </div>
                  <span className="font-bold text-agro-green">75% Complete</span>
                </div>
              </div>
            </div>

            <div className="lg:col-span-4 p-4 bg-white rounded-2xl border border-slate-200 text-xs space-y-3">
              <h3 className="font-bold text-slate-800">Hauler Telematics</h3>
              <div className="space-y-2 text-slate-600">
                <div className="flex justify-between">
                  <span>Driver:</span>
                  <span className="font-bold text-slate-800">Malam Bello Garba</span>
                </div>
                <div className="flex justify-between">
                  <span>Vehicle:</span>
                  <span className="font-bold text-slate-800">DAF Reefer (KKY-491-XA)</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="flex items-center gap-1">
                    <Thermometer className="w-3.5 h-3.5 text-blue-500" />
                    <span>Cargo Temp:</span>
                  </span>
                  <span className="font-black text-blue-600 bg-blue-50 px-2 py-0.5 rounded">
                    9.4°C Chilled
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* SUB-TAB 4: SAVED SUPPLIERS */}
      {activeSubTab === 'favorites' && (
        <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-soft space-y-6 animate-in fade-in">
          <div>
            <h2 className="text-xl font-black text-slate-900">Your Saved Produce & Trusted Farms</h2>
            <p className="text-xs text-slate-500">Quick access to suppliers you regularly rely on for your business.</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {favoriteProducts.map(p => (
              <div key={p.id} className="p-4 rounded-2xl border border-slate-200 hover:border-agro-green/50 transition flex gap-4">
                <img src={p.image} alt={p.name} className="w-20 h-20 rounded-xl object-cover shrink-0" />
                <div className="flex-1 min-w-0">
                  <h4 className="font-bold text-slate-900 text-xs truncate">{p.name}</h4>
                  <div className="text-xs font-black text-agro-forest mt-0.5">₦{p.price.toLocaleString()}</div>
                  <span className="text-[11px] text-slate-500 block truncate">{p.farmerName} • {p.location}</span>
                  <button
                    onClick={() => addToCart(p, 1)}
                    className="mt-2 text-xs font-bold text-agro-green hover:underline"
                  >
                    Add to Cart
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* SUB-TAB 5: MESSAGES */}
      {activeSubTab === 'messages' && (
        <div className="bg-white rounded-3xl border border-slate-200 shadow-soft grid grid-cols-1 md:grid-cols-12 min-h-[500px] overflow-hidden animate-in fade-in">
          <div className="md:col-span-4 border-r border-slate-200 p-4 space-y-2">
            <h3 className="text-xs font-bold text-slate-400 uppercase tracking-wider px-2 mb-2">Farmer Conversations</h3>
            {messages.map((thread, idx) => (
              <div
                key={thread.id}
                onClick={() => setActiveMessageIndex(idx)}
                className={`p-3 rounded-2xl cursor-pointer transition ${
                  activeMessageIndex === idx
                    ? 'bg-green-50 border border-green-200 shadow-sm'
                    : 'hover:bg-slate-50'
                }`}
              >
                <div className="flex justify-between items-start">
                  <span className="font-bold text-slate-900 text-xs">{thread.farmerName}</span>
                  <span className="text-[10px] text-slate-400">{thread.timestamp}</span>
                </div>
                <div className="text-[11px] font-semibold text-agro-forest mt-0.5">{thread.cropSubject}</div>
                <p className="text-[11px] text-slate-500 truncate mt-1">
                  {thread.messages[thread.messages.length - 1]?.text}
                </p>
              </div>
            ))}
          </div>

          <div className="md:col-span-8 flex flex-col justify-between p-6">
            {messages[activeMessageIndex] ? (
              <>
                <div className="pb-4 border-b border-slate-100 flex items-center justify-between">
                  <div>
                    <h3 className="font-bold text-slate-900 text-sm">{messages[activeMessageIndex].farmerName}</h3>
                    <p className="text-xs text-agro-green font-medium">{messages[activeMessageIndex].cropSubject}</p>
                  </div>
                  <span className="text-[11px] bg-green-100 text-green-800 px-2.5 py-0.5 rounded-full font-bold">
                    Verified Grower
                  </span>
                </div>

                <div className="flex-1 py-4 space-y-3 overflow-y-auto max-h-[350px]">
                  {messages[activeMessageIndex].messages.map((msg) => {
                    const isMe = msg.sender === 'buyer';
                    return (
                      <div
                        key={msg.id}
                        className={`flex flex-col ${isMe ? 'items-end' : 'items-start'}`}
                      >
                        <div
                          className={`max-w-md p-3.5 rounded-2xl text-xs leading-relaxed ${
                            isMe
                              ? 'bg-agro-forest text-white rounded-br-none shadow-sm'
                              : 'bg-slate-100 text-slate-800 rounded-bl-none'
                          }`}
                        >
                          {msg.text}
                        </div>
                        <span className="text-[10px] text-slate-400 mt-1 px-1">{msg.time}</span>
                      </div>
                    );
                  })}
                </div>

                <form onSubmit={handleSendBuyerReply} className="pt-3 border-t border-slate-100 flex gap-2">
                  <input
                    type="text"
                    value={buyerReplyText}
                    onChange={(e) => setBuyerReplyText(e.target.value)}
                    placeholder="Inquire about delivery schedule or volume discounts..."
                    className="flex-1 text-xs px-3.5 py-2.5 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-agro-green"
                  />
                  <button
                    type="submit"
                    className="px-4 py-2.5 bg-agro-green hover:bg-emerald-700 text-white rounded-xl text-xs font-bold flex items-center gap-1.5 shadow-sm"
                  >
                    <Send className="w-3.5 h-3.5" />
                    <span>Send</span>
                  </button>
                </form>
              </>
            ) : (
              <div className="text-center text-slate-400 py-12">No active conversation</div>
            )}
          </div>
        </div>
      )}

      {/* SUB-TAB 6: SETTINGS */}
      {activeSubTab === 'settings' && (
        <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-soft max-w-2xl mx-auto space-y-6 animate-in fade-in">
          <h2 className="text-xl font-black text-slate-900">Kitchen & Delivery Dock Address</h2>

          <div className="space-y-4 text-xs">
            <div>
              <label className="block font-bold text-slate-700 mb-1">Business Name</label>
              <input
                type="text"
                defaultValue={user?.businessName || 'Terra Kulture & Lounge'}
                className="w-full p-2.5 rounded-xl border border-slate-200"
              />
            </div>

            <div>
              <label className="block font-bold text-slate-700 mb-1">Delivery Receiving Address</label>
              <textarea
                rows={2}
                defaultValue="Plot 1376 Savage Street, Off Tiamiyu Savage, Victoria Island, Lagos"
                className="w-full p-2.5 rounded-xl border border-slate-200"
              />
            </div>

            <div>
              <label className="block font-bold text-slate-700 mb-1">Receiving Window</label>
              <input
                type="text"
                defaultValue="05:30 AM - 09:00 AM (Before Kitchen Prep)"
                className="w-full p-2.5 rounded-xl border border-slate-200"
              />
            </div>

            <button
              onClick={() => showNotification('Buyer delivery preferences saved!')}
              className="px-6 py-2.5 bg-agro-green text-white font-bold rounded-xl shadow-md transition"
            >
              Save Delivery Details
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
