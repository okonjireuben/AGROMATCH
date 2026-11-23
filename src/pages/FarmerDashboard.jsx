import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import { CATEGORIES, NIGERIAN_STATES } from '../data/mockData';
import {
  Wheat,
  PlusCircle,
  Package,
  ShoppingBag,
  DollarSign,
  MessageSquare,
  UserCheck,
  Settings,
  TrendingUp,
  AlertTriangle,
  CheckCircle2,
  Clock,
  Truck,
  Edit,
  Trash2,
  ExternalLink,
  Send,
  Building,
  ShieldCheck,
  Layers,
  ArrowUpRight
} from 'lucide-react';

const PRESET_IMAGES = [
  { name: 'Tomatoes', url: 'https://images.unsplash.com/photo-1592924357228-91a4daadcfea?auto=format&fit=crop&w=800&q=80' },
  { name: 'Rice Grain', url: 'https://images.unsplash.com/photo-1586201375761-83865001e31c?auto=format&fit=crop&w=800&q=80' },
  { name: 'White Yams', url: 'https://images.unsplash.com/photo-1596040033229-a9821ebd058d?auto=format&fit=crop&w=800&q=80' },
  { name: 'Palm Oil', url: 'https://images.unsplash.com/photo-1474979266404-7eaacbcd87c5?auto=format&fit=crop&w=800&q=80' },
  { name: 'Live Catfish', url: 'https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&w=800&q=80' },
  { name: 'Poultry Eggs', url: 'https://images.unsplash.com/photo-1506976785307-8732e854ad03?auto=format&fit=crop&w=800&q=80' },
  { name: 'Plantains', url: 'https://images.unsplash.com/photo-1528825871115-3581a5387919?auto=format&fit=crop&w=800&q=80' },
  { name: 'Hot Peppers', url: 'https://images.unsplash.com/photo-1588252303782-cb80119abd6d?auto=format&fit=crop&w=800&q=80' }
];

export default function FarmerDashboard() {
  const {
    user,
    products,
    orders,
    messages,
    addProduct,
    updateProduct,
    deleteProduct,
    updateOrderStatus,
    sendMessage,
    showNotification,
    setActiveTab,
    setSelectedOrderId
  } = useApp();

  const [activeSubTab, setActiveSubTab] = useState('overview'); // 'overview', 'add-product', 'products', 'orders', 'sales', 'messages', 'profile', 'settings'

  // New Product Form State
  const [newProductName, setNewProductName] = useState('');
  const [newProductCategory, setNewProductCategory] = useState('Vegetables');
  const [newProductPrice, setNewProductPrice] = useState('');
  const [newProductUnit, setNewProductUnit] = useState('50kg bag');
  const [newProductStock, setNewProductStock] = useState('');
  const [newProductLocation, setNewProductLocation] = useState('Kano');
  const [newProductTown, setNewProductTown] = useState('');
  const [newProductQuality, setNewProductQuality] = useState('Grade A Export');
  const [newProductHarvest, setNewProductHarvest] = useState('November 2026');
  const [newProductImage, setNewProductImage] = useState(PRESET_IMAGES[0].url);
  const [newProductDesc, setNewProductDesc] = useState('');

  // Messages thread state
  const [activeMessageIndex, setActiveMessageIndex] = useState(0);
  const [replyText, setReplyText] = useState('');

  // Payout bank state
  const [payoutBank, setPayoutBank] = useState('Access Bank');
  const [payoutAccountNum, setPayoutAccountNum] = useState('0128491029');
  const [payoutAmount, setPayoutAmount] = useState('250000');

  // Filter products belonging to this farmer (or show default ones if generic)
  const myProducts = products.filter(p => p.farmerId === user?.id || p.farmerName.includes(user?.name?.split(' ')[0] || 'Ibrahim'));
  const myOrders = orders; // Show platform orders for interaction

  // Total sales calculation
  const totalSales = myOrders.reduce((sum, ord) => sum + ord.subtotal, 0);
  const pendingOrdersCount = myOrders.filter(o => o.status !== 'Delivered' && o.status !== 'Cancelled').length;
  const lowStockCount = myProducts.filter(p => p.stock <= 25).length;

  const handleCreateProduct = (e) => {
    e.preventDefault();
    if (!newProductName || !newProductPrice || !newProductStock) {
      showNotification('Please fill in product name, price, and stock', 'error');
      return;
    }

    addProduct({
      name: newProductName,
      category: newProductCategory,
      price: Number(newProductPrice),
      unit: newProductUnit,
      stock: Number(newProductStock),
      location: newProductLocation,
      town: newProductTown || `${newProductLocation} Central Farm Hub`,
      qualityGrade: newProductQuality,
      harvestDate: newProductHarvest,
      image: newProductImage,
      description: newProductDesc || 'Farm-fresh Nigerian agricultural produce harvested with high grading standards.',
      organic: true,
      inSeason: true,
      wholesaleTiers: [
        { qty: 10, discount: '5% off' },
        { qty: 30, discount: '10% off' }
      ]
    });

    // Reset Form
    setNewProductName('');
    setNewProductPrice('');
    setNewProductStock('');
    setNewProductTown('');
    setNewProductDesc('');
    setActiveSubTab('products');
  };

  const handleSendReply = (e) => {
    e.preventDefault();
    if (!replyText.trim()) return;
    const currentThread = messages[activeMessageIndex];
    if (currentThread) {
      sendMessage(currentThread.senderId, replyText, currentThread.cropSubject);
      setReplyText('');
    }
  };

  const handleRequestPayout = (e) => {
    e.preventDefault();
    showNotification(`Payout request of ₦${Number(payoutAmount).toLocaleString()} dispatched to ${payoutBank} account (${payoutAccountNum}). Funds arrive in 2-4 hours.`);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 animate-in fade-in space-y-8">
      {/* Farmer Dashboard Header */}
      <div className="bg-gradient-to-r from-agro-forest via-emerald-950 to-agro-forest rounded-3xl p-6 sm:p-8 text-white shadow-xl flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
        <div className="flex items-center gap-4">
          <img
            src={user?.avatar || 'https://images.unsplash.com/photo-1595152772835-219674b2a163?auto=format&fit=crop&w=200&q=80'}
            alt={user?.name}
            className="w-16 h-16 rounded-2xl object-cover ring-4 ring-agro-green/40 shadow-md"
          />
          <div>
            <div className="flex items-center gap-2">
              <h1 className="text-2xl sm:text-3xl font-black">{user?.name || 'Alh. Ibrahim Garba'}</h1>
              <span className="bg-lime-400 text-agro-forest text-[11px] font-black px-2 py-0.5 rounded-full flex items-center gap-1">
                <CheckCircle2 className="w-3 h-3" /> CAC Verified
              </span>
            </div>
            <p className="text-xs text-slate-300 font-medium mt-0.5">
              {user?.farmName || 'Dan-Kano Irrigation Agro-Estate'} • {user?.location || 'Kano State'}
            </p>
            <div className="flex items-center gap-3 text-[11px] text-emerald-300 mt-1">
              <span>Farm Gate Escrow Active</span>
              <span>•</span>
              <span>Member: Zaki-Biam & Kano Farmers Union</span>
            </div>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <button
            onClick={() => setActiveSubTab('add-product')}
            className="px-5 py-3 rounded-2xl bg-agro-green hover:bg-emerald-600 text-white font-black text-xs shadow-lg transition flex items-center gap-2"
          >
            <PlusCircle className="w-4 h-4" />
            <span>Add New Harvest</span>
          </button>
        </div>
      </div>

      {/* Navigation Sub-Tabs */}
      <div className="flex items-center gap-2 overflow-x-auto pb-2 border-b border-slate-200">
        {[
          { id: 'overview', label: 'Dashboard Overview', icon: TrendingUp },
          { id: 'add-product', label: 'Add New Product', icon: PlusCircle },
          { id: 'products', label: `Manage Products (${myProducts.length})`, icon: Package },
          { id: 'orders', label: `Manage Orders (${myOrders.length})`, icon: ShoppingBag },
          { id: 'sales', label: 'Sales & Earnings', icon: DollarSign },
          { id: 'messages', label: `Customer Messages (${messages.length})`, icon: MessageSquare },
          { id: 'profile', label: 'Farm Profile & Verification', icon: UserCheck },
          { id: 'settings', label: 'Account Settings', icon: Settings }
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
          {/* Key Metrics Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white p-6 rounded-3xl border border-slate-200 shadow-soft">
              <div className="flex items-center justify-between text-slate-500 mb-2">
                <span className="text-xs font-bold uppercase tracking-wider">Gross Sales</span>
                <DollarSign className="w-5 h-5 text-agro-green" />
              </div>
              <div className="text-2xl sm:text-3xl font-black text-agro-forest">
                ₦{totalSales.toLocaleString()}
              </div>
              <span className="text-[11px] text-emerald-600 font-semibold flex items-center gap-1 mt-1">
                <ArrowUpRight className="w-3.5 h-3.5" /> +28% vs last month harvest
              </span>
            </div>

            <div className="bg-white p-6 rounded-3xl border border-slate-200 shadow-soft">
              <div className="flex items-center justify-between text-slate-500 mb-2">
                <span className="text-xs font-bold uppercase tracking-wider">Active Produce</span>
                <Package className="w-5 h-5 text-lime-600" />
              </div>
              <div className="text-2xl sm:text-3xl font-black text-slate-800">
                {myProducts.length} Listings
              </div>
              <span className="text-[11px] text-slate-500 mt-1 block">
                Across 4 food categories
              </span>
            </div>

            <div className="bg-white p-6 rounded-3xl border border-slate-200 shadow-soft">
              <div className="flex items-center justify-between text-slate-500 mb-2">
                <span className="text-xs font-bold uppercase tracking-wider">Pending Orders</span>
                <ShoppingBag className="w-5 h-5 text-amber-500" />
              </div>
              <div className="text-2xl sm:text-3xl font-black text-slate-800">
                {pendingOrdersCount} In Progress
              </div>
              <span className="text-[11px] text-amber-600 font-semibold mt-1 block">
                Requires warehouse dispatch
              </span>
            </div>

            <div className="bg-white p-6 rounded-3xl border border-slate-200 shadow-soft">
              <div className="flex items-center justify-between text-slate-500 mb-2">
                <span className="text-xs font-bold uppercase tracking-wider">Low Stock Alert</span>
                <AlertTriangle className="w-5 h-5 text-rose-500" />
              </div>
              <div className="text-2xl sm:text-3xl font-black text-slate-800">
                {lowStockCount} Products
              </div>
              <span className="text-[11px] text-rose-600 font-semibold mt-1 block">
                Below 25 units remaining
              </span>
            </div>
          </div>

          {/* Quick Sales Bar Chart Simulation */}
          <div className="bg-white p-6 sm:p-8 rounded-3xl border border-slate-200 shadow-soft">
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-6">
              <div>
                <h3 className="text-base font-bold text-slate-900">2026 Harvest Revenue Trends</h3>
                <p className="text-xs text-slate-500">Monthly direct sales through AGROMATCH escrow platform (in ₦ thousands)</p>
              </div>
              <span className="text-xs font-bold bg-green-50 text-agro-forest px-3 py-1 rounded-full border border-green-200">
                Total 2026 Earnings: ₦18.4 Million
              </span>
            </div>

            {/* Simulated Clean Chart Bars */}
            <div className="grid grid-cols-6 sm:grid-cols-12 gap-2 h-44 items-end pt-8 pb-2 border-b border-slate-100">
              {[
                { m: 'Jan', v: 45 },
                { m: 'Feb', v: 52 },
                { m: 'Mar', v: 60 },
                { m: 'Apr', v: 58 },
                { m: 'May', v: 75 },
                { m: 'Jun', v: 80 },
                { m: 'Jul', v: 65 },
                { m: 'Aug', v: 90 },
                { m: 'Sep', v: 95 },
                { m: 'Oct', v: 110 },
                { m: 'Nov', v: 125, active: true },
                { m: 'Dec', v: 140 }
              ].map((bar, i) => (
                <div key={i} className="flex flex-col items-center gap-1.5 h-full justify-end group">
                  <div
                    style={{ height: `${(bar.v / 140) * 100}%` }}
                    className={`w-full rounded-t-xl transition-all duration-500 ${
                      bar.active
                        ? 'bg-agro-green shadow-lg shadow-agro-green/30'
                        : 'bg-emerald-100 group-hover:bg-emerald-200'
                    }`}
                  />
                  <span className="text-[10px] font-bold text-slate-500">{bar.m}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Recent Orders Overview */}
          <div className="bg-white p-6 rounded-3xl border border-slate-200 shadow-soft">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-base font-bold text-slate-900">Recent Customer Orders</h3>
              <button
                onClick={() => setActiveSubTab('orders')}
                className="text-xs font-bold text-agro-forest hover:text-agro-green"
              >
                View All Orders →
              </button>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs">
                <thead>
                  <tr className="border-b border-slate-100 text-slate-400 font-semibold">
                    <th className="pb-3">Order ID</th>
                    <th className="pb-3">Customer</th>
                    <th className="pb-3">Items</th>
                    <th className="pb-3">Subtotal</th>
                    <th className="pb-3">Status</th>
                    <th className="pb-3 text-right">Action</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  {myOrders.map(ord => (
                    <tr key={ord.id} className="hover:bg-slate-50/80">
                      <td className="py-3 font-bold text-slate-800">{ord.id}</td>
                      <td className="py-3">
                        <div className="font-semibold text-slate-800">{ord.buyerName}</div>
                        <div className="text-[11px] text-slate-400">{ord.businessName}</div>
                      </td>
                      <td className="py-3 text-slate-600">{ord.items.length} items</td>
                      <td className="py-3 font-bold text-agro-forest">₦{ord.subtotal.toLocaleString()}</td>
                      <td className="py-3">
                        <span className={`px-2.5 py-1 rounded-full text-[10px] font-bold ${
                          ord.status === 'Delivered'
                            ? 'bg-green-100 text-green-800'
                            : ord.status === 'Shipped' || ord.status === 'In Transit'
                              ? 'bg-blue-100 text-blue-800'
                              : 'bg-amber-100 text-amber-800'
                        }`}>
                          {ord.status}
                        </span>
                      </td>
                      <td className="py-3 text-right">
                        <button
                          onClick={() => {
                            setSelectedOrderId(ord.id);
                            setActiveTab('order-tracking');
                          }}
                          className="text-xs font-bold text-agro-green hover:underline"
                        >
                          Track / Update
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      )}

      {/* SUB-TAB 2: ADD NEW PRODUCT */}
      {activeSubTab === 'add-product' && (
        <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-soft max-w-4xl mx-auto animate-in fade-in">
          <div className="mb-6 pb-4 border-b border-slate-100">
            <h2 className="text-xl font-black text-slate-900">List New Agricultural Produce</h2>
            <p className="text-xs text-slate-500 mt-1">
              Provide accurate crop details, packaging unit, optical grading, and farm-gate pricing.
            </p>
          </div>

          <form onSubmit={handleCreateProduct} className="space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">Product Title</label>
                <input
                  type="text"
                  value={newProductName}
                  onChange={(e) => setNewProductName(e.target.value)}
                  placeholder="e.g. Kano Red Roma Tomatoes (Raffia Basket)"
                  className="w-full text-xs px-3.5 py-2.5 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-agro-green"
                  required
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">Category</label>
                <select
                  value={newProductCategory}
                  onChange={(e) => setNewProductCategory(e.target.value)}
                  className="w-full text-xs px-3.5 py-2.5 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-agro-green bg-white"
                >
                  {CATEGORIES.filter(c => c !== 'All Categories').map(c => (
                    <option key={c} value={c}>{c}</option>
                  ))}
                </select>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">Price per Unit (₦)</label>
                <input
                  type="number"
                  value={newProductPrice}
                  onChange={(e) => setNewProductPrice(e.target.value)}
                  placeholder="34000"
                  className="w-full text-xs px-3.5 py-2.5 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-agro-green"
                  required
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">Measurement Unit</label>
                <input
                  type="text"
                  value={newProductUnit}
                  onChange={(e) => setNewProductUnit(e.target.value)}
                  placeholder="e.g. 50kg bag or Raffia basket"
                  className="w-full text-xs px-3.5 py-2.5 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-agro-green"
                  required
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">Available Quantity / Stock</label>
                <input
                  type="number"
                  value={newProductStock}
                  onChange={(e) => setNewProductStock(e.target.value)}
                  placeholder="120"
                  className="w-full text-xs px-3.5 py-2.5 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-agro-green"
                  required
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">Farm State</label>
                <select
                  value={newProductLocation}
                  onChange={(e) => setNewProductLocation(e.target.value)}
                  className="w-full text-xs px-3.5 py-2.5 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-agro-green bg-white"
                >
                  {NIGERIAN_STATES.filter(s => s !== 'All States').map(s => (
                    <option key={s} value={s}>{s} State</option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">Farm LGA / Town</label>
                <input
                  type="text"
                  value={newProductTown}
                  onChange={(e) => setNewProductTown(e.target.value)}
                  placeholder="e.g. Kura Irrigation Basin"
                  className="w-full text-xs px-3.5 py-2.5 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-agro-green"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">Quality Grade</label>
                <select
                  value={newProductQuality}
                  onChange={(e) => setNewProductQuality(e.target.value)}
                  className="w-full text-xs px-3.5 py-2.5 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-agro-green bg-white"
                >
                  <option value="Grade A Export">Grade A Export (Optical Sorted)</option>
                  <option value="Grade A Premium">Grade A Premium</option>
                  <option value="Standard Market">Standard Fresh Market</option>
                </select>
              </div>
            </div>

            {/* Produce Photo Presets */}
            <div>
              <label className="block text-xs font-bold text-slate-700 mb-2">Select High-Resolution Photo</label>
              <div className="grid grid-cols-4 sm:grid-cols-8 gap-2">
                {PRESET_IMAGES.map((preset, idx) => (
                  <div
                    key={idx}
                    onClick={() => setNewProductImage(preset.url)}
                    className={`relative rounded-xl overflow-hidden aspect-square border-2 cursor-pointer transition ${
                      newProductImage === preset.url
                        ? 'border-agro-green ring-2 ring-agro-green/50 scale-105'
                        : 'border-slate-200 hover:border-slate-300'
                    }`}
                  >
                    <img src={preset.url} alt={preset.name} className="w-full h-full object-cover" />
                    <span className="absolute bottom-0 inset-x-0 bg-black/60 text-white text-[9px] text-center font-bold py-0.5 truncate">
                      {preset.name}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-700 mb-1">Product Description & Specs</label>
              <textarea
                rows={3}
                value={newProductDesc}
                onChange={(e) => setNewProductDesc(e.target.value)}
                placeholder="Describe moisture level, shelf-life, pesticide-free methods, and handling..."
                className="w-full text-xs p-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-agro-green"
              />
            </div>

            <div className="flex justify-end gap-3 pt-4 border-t border-slate-100">
              <button
                type="button"
                onClick={() => setActiveSubTab('products')}
                className="px-5 py-2.5 text-xs font-bold text-slate-600 hover:text-slate-800"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="px-6 py-2.5 bg-agro-green hover:bg-emerald-700 text-white font-black text-xs rounded-xl shadow-md transition"
              >
                Publish Harvest to Marketplace
              </button>
            </div>
          </form>
        </div>
      )}

      {/* SUB-TAB 3: MANAGE PRODUCTS */}
      {activeSubTab === 'products' && (
        <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-soft space-y-6 animate-in fade-in">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div>
              <h2 className="text-xl font-black text-slate-900">Your Active Produce Listings</h2>
              <p className="text-xs text-slate-500">Live prices and inventory synced across the agricultural marketplace</p>
            </div>
            <button
              onClick={() => setActiveSubTab('add-product')}
              className="px-4 py-2 bg-agro-green text-white rounded-xl text-xs font-bold flex items-center gap-1.5 shadow-sm"
            >
              <PlusCircle className="w-4 h-4" />
              <span>Add Produce</span>
            </button>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs">
              <thead>
                <tr className="border-b border-slate-100 text-slate-400 font-semibold">
                  <th className="pb-3">Produce</th>
                  <th className="pb-3">Category</th>
                  <th className="pb-3">Unit Price</th>
                  <th className="pb-3">Stock Level</th>
                  <th className="pb-3">Quality Grade</th>
                  <th className="pb-3 text-right">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {myProducts.map(p => {
                  const isLow = p.stock <= 25;
                  return (
                    <tr key={p.id} className="hover:bg-slate-50/80">
                      <td className="py-4">
                        <div className="flex items-center gap-3">
                          <img src={p.image} alt={p.name} className="w-12 h-12 rounded-xl object-cover" />
                          <div>
                            <div className="font-bold text-slate-900">{p.name}</div>
                            <div className="text-[11px] text-slate-400">{p.location} State • ID: {p.id}</div>
                          </div>
                        </div>
                      </td>
                      <td className="py-4 font-semibold text-slate-600">{p.category}</td>
                      <td className="py-4">
                        <div className="font-black text-agro-forest">₦{p.price.toLocaleString()}</div>
                        <div className="text-[11px] text-slate-400">/ {p.unit}</div>
                      </td>
                      <td className="py-4">
                        {isLow ? (
                          <div className="flex items-center gap-1 text-amber-600 font-bold">
                            <AlertTriangle className="w-3.5 h-3.5" />
                            <span>{p.stock} units (Low)</span>
                          </div>
                        ) : (
                          <span className="font-bold text-slate-700">{p.stock} units</span>
                        )}
                      </td>
                      <td className="py-4">
                        <span className="bg-slate-100 text-slate-700 px-2 py-0.5 rounded font-medium text-[11px]">
                          {p.qualityGrade}
                        </span>
                      </td>
                      <td className="py-4 text-right">
                        <div className="flex items-center justify-end gap-2">
                          <button
                            onClick={() => {
                              const newPrice = prompt(`Enter new price for ${p.name}:`, p.price);
                              if (newPrice && !isNaN(Number(newPrice))) {
                                updateProduct(p.id, { price: Number(newPrice) });
                              }
                            }}
                            className="p-1.5 text-slate-500 hover:text-agro-green rounded-lg hover:bg-slate-100"
                            title="Quick Edit Price"
                          >
                            <Edit className="w-4 h-4" />
                          </button>
                          <button
                            onClick={() => {
                              if (confirm(`Remove ${p.name} listing from marketplace?`)) {
                                deleteProduct(p.id);
                              }
                            }}
                            className="p-1.5 text-slate-500 hover:text-rose-600 rounded-lg hover:bg-rose-50"
                            title="Delete Listing"
                          >
                            <Trash2 className="w-4 h-4" />
                          </button>
                        </div>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      )}

      {/* SUB-TAB 4: MANAGE ORDERS */}
      {activeSubTab === 'orders' && (
        <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-soft space-y-6 animate-in fade-in">
          <div>
            <h2 className="text-xl font-black text-slate-900">Manage Buyer Orders & Dispatch</h2>
            <p className="text-xs text-slate-500">Update transit status, confirm warehouse packaging, and release delivery manifests.</p>
          </div>

          <div className="space-y-4">
            {myOrders.map(ord => (
              <div key={ord.id} className="p-5 border border-slate-200 rounded-2xl space-y-4">
                <div className="flex flex-wrap items-center justify-between gap-2 pb-3 border-b border-slate-100">
                  <div>
                    <span className="font-bold text-slate-900 text-sm">{ord.id}</span>
                    <span className="text-xs text-slate-400 ml-2">Placed: {ord.date}</span>
                  </div>

                  <div className="flex items-center gap-2">
                    <span className="text-xs text-slate-500 font-medium">Status:</span>
                    <select
                      value={ord.status}
                      onChange={(e) => updateOrderStatus(ord.id, e.target.value)}
                      className="text-xs font-bold py-1 px-3 rounded-xl border border-slate-300 bg-emerald-50 text-agro-forest focus:outline-none"
                    >
                      <option value="Pending">Pending</option>
                      <option value="Confirmed">Confirmed</option>
                      <option value="Processing">Processing / Crating</option>
                      <option value="Shipped">Shipped (In Transit)</option>
                      <option value="Delivered">Delivered (Completed)</option>
                      <option value="Cancelled">Cancelled</option>
                    </select>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
                  <div>
                    <span className="text-slate-400 block">Buyer Details:</span>
                    <div className="font-bold text-slate-800">{ord.buyerName}</div>
                    <div className="text-slate-600">{ord.businessName}</div>
                    <div className="text-slate-500 mt-1">{ord.deliveryAddress}</div>
                  </div>

                  <div>
                    <span className="text-slate-400 block">Ordered Produce:</span>
                    {ord.items.map((item, i) => (
                      <div key={i} className="font-semibold text-slate-800">
                        {item.quantity}x {item.name} (₦{item.price.toLocaleString()})
                      </div>
                    ))}
                    <div className="mt-2 text-sm font-black text-agro-forest">
                      Subtotal: ₦{ord.subtotal.toLocaleString()} • <span className="text-xs text-emerald-600 font-semibold">{ord.paymentStatus}</span>
                    </div>
                  </div>
                </div>

                <div className="pt-2 flex justify-end gap-2 border-t border-slate-100">
                  <button
                    onClick={() => {
                      setSelectedOrderId(ord.id);
                      setActiveTab('order-tracking');
                    }}
                    className="px-4 py-2 bg-agro-forest text-white rounded-xl text-xs font-bold flex items-center gap-1.5"
                  >
                    <Truck className="w-3.5 h-3.5" />
                    <span>View Interactive Route Tracker</span>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* SUB-TAB 5: SALES & EARNINGS */}
      {activeSubTab === 'sales' && (
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 animate-in fade-in">
          {/* Payout Summary (7 cols) */}
          <div className="lg:col-span-7 bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-soft space-y-6">
            <h2 className="text-xl font-black text-slate-900">Earnings & Escrow Balances</h2>

            <div className="grid grid-cols-2 gap-4">
              <div className="p-5 bg-green-50 rounded-2xl border border-green-200">
                <span className="text-xs text-slate-500 font-semibold">Available for Payout</span>
                <div className="text-3xl font-black text-agro-forest mt-1">₦840,000</div>
                <span className="text-[11px] text-agro-green font-medium">Ready for instant bank settlement</span>
              </div>

              <div className="p-5 bg-amber-50 rounded-2xl border border-amber-200">
                <span className="text-xs text-slate-500 font-semibold">In Transit (Escrow Locked)</span>
                <div className="text-3xl font-black text-amber-900 mt-1">₦175,000</div>
                <span className="text-[11px] text-amber-700 font-medium">Released once buyer inspects harvest</span>
              </div>
            </div>

            <div className="pt-4 border-t border-slate-100">
              <h3 className="text-sm font-bold text-slate-800 mb-3">Settlement Bank Account</h3>
              <div className="p-4 bg-slate-50 rounded-2xl border border-slate-200 flex items-center justify-between text-xs">
                <div>
                  <div className="font-bold text-slate-900">Access Bank PLC</div>
                  <div className="text-slate-500">Account: 0128491029 • Dan-Kano Agro Ventures</div>
                </div>
                <span className="bg-green-100 text-green-800 font-bold px-2.5 py-1 rounded-full text-[10px]">
                  Verified for NIP Instant
                </span>
              </div>
            </div>
          </div>

          {/* Request Payout Form (5 cols) */}
          <div className="lg:col-span-5 bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-soft space-y-4">
            <h3 className="text-lg font-black text-slate-900">Request Bank Payout</h3>
            <p className="text-xs text-slate-500">Direct NIP settlement to verified Nigerian agricultural account.</p>

            <form onSubmit={handleRequestPayout} className="space-y-4 pt-2">
              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">Destination Bank</label>
                <select
                  value={payoutBank}
                  onChange={(e) => setPayoutBank(e.target.value)}
                  className="w-full text-xs p-2.5 rounded-xl border border-slate-200 bg-white"
                >
                  <option value="Access Bank">Access Bank</option>
                  <option value="GTBank">Guaranty Trust Bank (GTBank)</option>
                  <option value="Zenith Bank">Zenith Bank</option>
                  <option value="First Bank">First Bank of Nigeria</option>
                  <option value="Kuda Bank">Kuda Microfinance Bank</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">NUBAN Account Number</label>
                <input
                  type="text"
                  value={payoutAccountNum}
                  onChange={(e) => setPayoutAccountNum(e.target.value)}
                  className="w-full text-xs p-2.5 rounded-xl border border-slate-200 font-mono"
                  required
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">Amount to Withdraw (₦)</label>
                <input
                  type="number"
                  value={payoutAmount}
                  onChange={(e) => setPayoutAmount(e.target.value)}
                  max={840000}
                  className="w-full text-xs p-2.5 rounded-xl border border-slate-200 font-black text-agro-forest"
                  required
                />
              </div>

              <button
                type="submit"
                className="w-full py-3 bg-agro-green hover:bg-emerald-700 text-white font-black text-xs rounded-xl shadow-md transition"
              >
                Withdraw Funds to Bank Account
              </button>
            </form>
          </div>
        </div>
      )}

      {/* SUB-TAB 6: CUSTOMER MESSAGES */}
      {activeSubTab === 'messages' && (
        <div className="bg-white rounded-3xl border border-slate-200 shadow-soft grid grid-cols-1 md:grid-cols-12 min-h-[500px] overflow-hidden animate-in fade-in">
          {/* Threads List (4 cols) */}
          <div className="md:col-span-4 border-r border-slate-200 p-4 space-y-2">
            <h3 className="text-xs font-bold text-slate-400 uppercase tracking-wider px-2 mb-2">Inquiries</h3>
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
                  <span className="font-bold text-slate-900 text-xs">{thread.senderName}</span>
                  <span className="text-[10px] text-slate-400">{thread.timestamp}</span>
                </div>
                <div className="text-[11px] font-semibold text-agro-forest mt-0.5">{thread.cropSubject}</div>
                <p className="text-[11px] text-slate-500 truncate mt-1">
                  {thread.messages[thread.messages.length - 1]?.text}
                </p>
              </div>
            ))}
          </div>

          {/* Conversation Window (8 cols) */}
          <div className="md:col-span-8 flex flex-col justify-between p-6">
            {messages[activeMessageIndex] ? (
              <>
                <div className="pb-4 border-b border-slate-100 flex items-center justify-between">
                  <div>
                    <h3 className="font-bold text-slate-900 text-sm">{messages[activeMessageIndex].senderName}</h3>
                    <p className="text-xs text-agro-green font-medium">{messages[activeMessageIndex].cropSubject}</p>
                  </div>
                  <span className="text-[11px] bg-green-100 text-green-800 px-2 py-0.5 rounded-full font-bold">
                    Direct Inquiry
                  </span>
                </div>

                <div className="flex-1 py-4 space-y-3 overflow-y-auto max-h-[350px]">
                  {messages[activeMessageIndex].messages.map((msg) => {
                    const isMe = msg.sender === 'farmer';
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

                <form onSubmit={handleSendReply} className="pt-3 border-t border-slate-100 flex gap-2">
                  <input
                    type="text"
                    value={replyText}
                    onChange={(e) => setReplyText(e.target.value)}
                    placeholder="Type your price quote or harvest dispatch schedule..."
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
              <div className="text-center text-slate-400 py-12">No active message thread selected</div>
            )}
          </div>
        </div>
      )}

      {/* SUB-TAB 7: FARM PROFILE */}
      {activeSubTab === 'profile' && (
        <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-soft max-w-4xl mx-auto space-y-6 animate-in fade-in">
          <div className="flex items-center justify-between pb-4 border-b border-slate-100">
            <div>
              <h2 className="text-xl font-black text-slate-900">Verified Farm Profile & Credentials</h2>
              <p className="text-xs text-slate-500">Displayed to buyers and institutional restaurant procurement desks.</p>
            </div>
            <span className="px-3 py-1 bg-green-100 text-agro-forest font-black text-xs rounded-full flex items-center gap-1">
              <ShieldCheck className="w-4 h-4 text-agro-green" /> Verified Tier 1
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
            <div className="p-4 bg-slate-50 rounded-2xl space-y-1">
              <span className="text-slate-400 block">CAC Registration</span>
              <div className="font-bold text-slate-800 text-sm">RC-2849102 (Federal Ministry of Agriculture)</div>
            </div>

            <div className="p-4 bg-slate-50 rounded-2xl space-y-1">
              <span className="text-slate-400 block">Land Size & Assets</span>
              <div className="font-bold text-slate-800 text-sm">85 Hectares Drip Irrigated Land + Solar Storage</div>
            </div>

            <div className="p-4 bg-slate-50 rounded-2xl space-y-1">
              <span className="text-slate-400 block">Cooperative Union</span>
              <div className="font-bold text-slate-800 text-sm">Zaki-Biam & Kano Irrigation Farmers Alliance</div>
            </div>

            <div className="p-4 bg-slate-50 rounded-2xl space-y-1">
              <span className="text-slate-400 block">Completed Trades</span>
              <div className="font-bold text-slate-800 text-sm">342 Wholesale Contracts (★ 4.9 Rating)</div>
            </div>
          </div>
        </div>
      )}

      {/* SUB-TAB 8: ACCOUNT SETTINGS */}
      {activeSubTab === 'settings' && (
        <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-soft max-w-2xl mx-auto space-y-6 animate-in fade-in">
          <h2 className="text-xl font-black text-slate-900">Farmer Account Settings</h2>

          <div className="space-y-4 text-xs">
            <div>
              <label className="block font-bold text-slate-700 mb-1">Registered Phone (SMS Dispatch Alerts)</label>
              <input
                type="text"
                defaultValue="+234 803 412 8901"
                className="w-full p-2.5 rounded-xl border border-slate-200"
              />
            </div>

            <div>
              <label className="block font-bold text-slate-700 mb-1">Dispatch Hub Location</label>
              <input
                type="text"
                defaultValue="Kura Irrigation Gate Hub, Kano State"
                className="w-full p-2.5 rounded-xl border border-slate-200"
              />
            </div>

            <div className="pt-2">
              <label className="flex items-center gap-2 cursor-pointer">
                <input type="checkbox" defaultChecked className="rounded text-agro-green" />
                <span>Receive instant SMS when buyer locks payment in escrow</span>
              </label>
            </div>

            <button
              onClick={() => showNotification('Farmer preferences updated!')}
              className="px-6 py-2.5 bg-agro-green text-white font-bold rounded-xl shadow-md transition"
            >
              Save Settings
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
