import React, { useState, useMemo } from 'react';
import { useApp } from '../context/AppContext';
import ProductCard from '../components/ProductCard';
import { CATEGORIES, NIGERIAN_STATES } from '../data/mockData';
import {
  Search,
  Filter,
  SlidersHorizontal,
  X,
  RotateCcw,
  Sparkles,
  TrendingDown,
  ChevronDown,
  Layers
} from 'lucide-react';

export default function MarketplacePage() {
  const { products } = useApp();

  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All Categories');
  const [selectedState, setSelectedState] = useState('All States');
  const [selectedQuality, setSelectedQuality] = useState('All');
  const [minPrice, setMinPrice] = useState('');
  const [maxPrice, setMaxPrice] = useState('');
  const [onlyInSeason, setOnlyInSeason] = useState(false);
  const [onlyInStock, setOnlyInStock] = useState(false);
  const [sortBy, setSortBy] = useState('featured'); // 'featured', 'price-low', 'price-high', 'rating', 'newest'
  const [mobileFilterOpen, setMobileFilterOpen] = useState(false);

  // Filter and sort products
  const filteredProducts = useMemo(() => {
    return products.filter(product => {
      // Keyword search
      if (searchTerm) {
        const query = searchTerm.toLowerCase();
        const matchName = product.name.toLowerCase().includes(query);
        const matchFarmer = product.farmerName.toLowerCase().includes(query);
        const matchLocation = (product.location + ' ' + (product.town || '')).toLowerCase().includes(query);
        const matchDesc = product.description.toLowerCase().includes(query);
        if (!matchName && !matchFarmer && !matchLocation && !matchDesc) return false;
      }

      // Category
      if (selectedCategory !== 'All Categories' && product.category !== selectedCategory) {
        return false;
      }

      // State
      if (selectedState !== 'All States' && product.location !== selectedState) {
        return false;
      }

      // Quality grade
      if (selectedQuality !== 'All') {
        if (!product.qualityGrade.includes(selectedQuality)) return false;
      }

      // Price range
      if (minPrice && product.price < Number(minPrice)) return false;
      if (maxPrice && product.price > Number(maxPrice)) return false;

      // In Season
      if (onlyInSeason && !product.inSeason) return false;

      // In Stock
      if (onlyInStock && product.stock <= 0) return false;

      return true;
    }).sort((a, b) => {
      if (sortBy === 'price-low') return a.price - b.price;
      if (sortBy === 'price-high') return b.price - a.price;
      if (sortBy === 'rating') return b.rating - a.rating;
      if (sortBy === 'newest') return (b.reviewsCount || 0) - (a.reviewsCount || 0);
      return 0; // default featured
    });
  }, [products, searchTerm, selectedCategory, selectedState, selectedQuality, minPrice, maxPrice, onlyInSeason, onlyInStock, sortBy]);

  const handleResetFilters = () => {
    setSearchTerm('');
    setSelectedCategory('All Categories');
    setSelectedState('All States');
    setSelectedQuality('All');
    setMinPrice('');
    setMaxPrice('');
    setOnlyInSeason(false);
    setOnlyInStock(false);
    setSortBy('featured');
  };

  const hasActiveFilters =
    searchTerm ||
    selectedCategory !== 'All Categories' ||
    selectedState !== 'All States' ||
    selectedQuality !== 'All' ||
    minPrice ||
    maxPrice ||
    onlyInSeason ||
    onlyInStock;

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 animate-in fade-in space-y-8">
      {/* Page Header */}
      <div className="bg-gradient-to-r from-agro-forest via-emerald-950 to-agro-forest rounded-3xl p-8 text-white shadow-xl relative overflow-hidden">
        <div className="relative z-10 max-w-2xl">
          <div className="inline-flex items-center gap-1.5 bg-lime-400 text-agro-forest text-xs font-black px-3 py-1 rounded-full mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>DIRECT FARM SOURCING PLATFORM</span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-black tracking-tight">
            Agricultural Marketplace
          </h1>
          <p className="text-xs sm:text-sm text-slate-300 mt-2 leading-relaxed">
            Source fresh, verified agricultural commodities directly from Nigerian growers. Real-time pricing, certified quality grades, and guaranteed escrow protection.
          </p>
        </div>
      </div>

      {/* Category Pills Navigation */}
      <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none">
        {CATEGORIES.map(category => (
          <button
            key={category}
            onClick={() => setSelectedCategory(category)}
            className={`px-4 py-2.5 rounded-2xl text-xs font-bold whitespace-nowrap transition-all shadow-sm ${
              selectedCategory === category
                ? 'bg-agro-forest text-white shadow-md shadow-emerald-950/20'
                : 'bg-white text-slate-700 hover:bg-slate-100 border border-slate-200'
            }`}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Main Filter & Grid Container */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Desktop Filter Sidebar (3 cols) */}
        <aside className="hidden lg:block lg:col-span-3 bg-white p-6 rounded-3xl border border-slate-200/80 shadow-soft space-y-6">
          <div className="flex items-center justify-between pb-4 border-b border-slate-100">
            <div className="flex items-center gap-2 text-sm font-bold text-slate-900">
              <Filter className="w-4 h-4 text-agro-green" />
              <span>Filters</span>
            </div>
            {hasActiveFilters && (
              <button
                onClick={handleResetFilters}
                className="text-xs text-rose-600 hover:underline flex items-center gap-1 font-semibold"
              >
                <RotateCcw className="w-3 h-3" />
                <span>Reset</span>
              </button>
            )}
          </div>

          {/* Search by Keyword */}
          <div>
            <label className="block text-xs font-bold text-slate-700 mb-1.5">Search Produce</label>
            <div className="relative">
              <Search className="w-4 h-4 text-slate-400 absolute left-3 top-3" />
              <input
                type="text"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                placeholder="Name, region, or crop..."
                className="w-full text-xs pl-9 pr-3 py-2.5 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-agro-green"
              />
            </div>
          </div>

          {/* Nigerian State Location */}
          <div>
            <label className="block text-xs font-bold text-slate-700 mb-1.5">Farm Origin State</label>
            <select
              value={selectedState}
              onChange={(e) => setSelectedState(e.target.value)}
              className="w-full text-xs px-3 py-2.5 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-agro-green bg-white text-slate-700"
            >
              {NIGERIAN_STATES.map(state => (
                <option key={state} value={state}>
                  {state === 'All States' ? 'All Nigerian States' : `${state} State`}
                </option>
              ))}
            </select>
          </div>

          {/* Quality Grade Filter */}
          <div>
            <label className="block text-xs font-bold text-slate-700 mb-1.5">Quality Grading</label>
            <select
              value={selectedQuality}
              onChange={(e) => setSelectedQuality(e.target.value)}
              className="w-full text-xs px-3 py-2.5 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-agro-green bg-white text-slate-700"
            >
              <option value="All">All Quality Grades</option>
              <option value="Export">Grade A Export (Optically Sorted)</option>
              <option value="Premium">Grade A Premium</option>
            </select>
          </div>

          {/* Price Range */}
          <div>
            <label className="block text-xs font-bold text-slate-700 mb-1.5">Price Range (₦)</label>
            <div className="grid grid-cols-2 gap-2">
              <input
                type="number"
                placeholder="Min ₦"
                value={minPrice}
                onChange={(e) => setMinPrice(e.target.value)}
                className="w-full text-xs px-3 py-2 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-agro-green"
              />
              <input
                type="number"
                placeholder="Max ₦"
                value={maxPrice}
                onChange={(e) => setMaxPrice(e.target.value)}
                className="w-full text-xs px-3 py-2 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-agro-green"
              />
            </div>
          </div>

          {/* Toggles */}
          <div className="space-y-3 pt-2 border-t border-slate-100">
            <label className="flex items-center gap-2.5 cursor-pointer text-xs font-semibold text-slate-700">
              <input
                type="checkbox"
                checked={onlyInSeason}
                onChange={(e) => setOnlyInSeason(e.target.checked)}
                className="rounded text-agro-green focus:ring-agro-green w-4 h-4"
              />
              <span>In-Season Harvest Only</span>
            </label>

            <label className="flex items-center gap-2.5 cursor-pointer text-xs font-semibold text-slate-700">
              <input
                type="checkbox"
                checked={onlyInStock}
                onChange={(e) => setOnlyInStock(e.target.checked)}
                className="rounded text-agro-green focus:ring-agro-green w-4 h-4"
              />
              <span>Available in Stock Only</span>
            </label>
          </div>

          {/* Bulk Notice Banner */}
          <div className="p-4 bg-emerald-50 rounded-2xl border border-emerald-200/80 text-xs text-agro-forest">
            <div className="font-bold flex items-center gap-1.5 mb-1">
              <TrendingDown className="w-4 h-4 text-agro-green" />
              <span>Commercial Bulk Orders</span>
            </div>
            <p className="text-[11px] text-slate-600 leading-relaxed">
              Procuring 5+ metric tons? Use our RFQ portal to receive pooled bids from regional cooperatives.
            </p>
          </div>
        </aside>

        {/* Product Cards and Controls (9 cols) */}
        <div className="lg:col-span-9 space-y-6">
          {/* Top Bar: Results Count & Sorting */}
          <div className="bg-white p-4 rounded-2xl border border-slate-200/80 shadow-soft flex flex-wrap items-center justify-between gap-4">
            <div className="text-xs font-bold text-slate-700">
              Showing <span className="text-agro-forest text-sm font-black">{filteredProducts.length}</span> verified produce listings
            </div>

            <div className="flex items-center gap-3">
              {/* Mobile Filter Trigger */}
              <button
                onClick={() => setMobileFilterOpen(!mobileFilterOpen)}
                className="lg:hidden px-3 py-1.5 bg-slate-100 rounded-xl text-xs font-bold text-slate-700 flex items-center gap-1.5"
              >
                <SlidersHorizontal className="w-3.5 h-3.5" />
                <span>Filters</span>
              </button>

              <div className="flex items-center gap-2 text-xs">
                <span className="text-slate-500 font-medium">Sort by:</span>
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="bg-slate-50 font-bold text-slate-800 py-1.5 px-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-1 focus:ring-agro-green text-xs"
                >
                  <option value="featured">Featured Listings</option>
                  <option value="price-low">Price: Low to High</option>
                  <option value="price-high">Price: High to Low</option>
                  <option value="rating">Highest Rated (★ 5.0)</option>
                  <option value="newest">Most Reviewed</option>
                </select>
              </div>
            </div>
          </div>

          {/* Mobile Filter Drawer */}
          {mobileFilterOpen && (
            <div className="lg:hidden bg-white p-5 rounded-2xl border border-slate-200 shadow-xl space-y-4 animate-in slide-in-from-top-2">
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold text-slate-900">Filter Products</span>
                <button
                  onClick={() => setMobileFilterOpen(false)}
                  className="text-xs text-slate-400 hover:text-slate-600"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>

              <input
                type="text"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                placeholder="Search..."
                className="w-full text-xs p-2.5 rounded-xl border border-slate-200"
              />

              <select
                value={selectedState}
                onChange={(e) => setSelectedState(e.target.value)}
                className="w-full text-xs p-2.5 rounded-xl border border-slate-200 bg-white"
              >
                {NIGERIAN_STATES.map(state => (
                  <option key={state} value={state}>{state}</option>
                ))}
              </select>

              <div className="flex gap-2">
                <button
                  onClick={handleResetFilters}
                  className="flex-1 py-2 text-xs font-bold bg-slate-100 text-slate-700 rounded-xl"
                >
                  Reset
                </button>
                <button
                  onClick={() => setMobileFilterOpen(false)}
                  className="flex-1 py-2 text-xs font-bold bg-agro-green text-white rounded-xl"
                >
                  Apply Filters
                </button>
              </div>
            </div>
          )}

          {/* Products Grid */}
          {filteredProducts.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          ) : (
            <div className="bg-white rounded-3xl p-12 text-center border border-slate-200 shadow-soft max-w-lg mx-auto space-y-4">
              <div className="w-16 h-16 rounded-full bg-slate-100 flex items-center justify-center text-slate-400 mx-auto">
                <Search className="w-8 h-8" />
              </div>
              <h3 className="text-lg font-bold text-slate-800">No agricultural produce found</h3>
              <p className="text-xs text-slate-500 max-w-sm mx-auto">
                No active listings match your selected search criteria. Try clearing some filters or searching a broader term.
              </p>
              <button
                onClick={handleResetFilters}
                className="px-6 py-2.5 bg-agro-forest text-white text-xs font-bold rounded-xl shadow-md transition hover:bg-emerald-950"
              >
                Reset All Filters
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
