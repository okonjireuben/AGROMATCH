// REUBEN TECH - Product Comparisons Dedicated Page (Page 7)
import { GADGETS } from '../data.js';

export function renderComparisonsPage() {
  return `
    <div class="py-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
      
      <!-- Comparison Page Hero -->
      <div class="rounded-3xl glass-panel p-8 sm:p-12 border border-white/10 relative overflow-hidden bg-gradient-to-br from-[#1A1838] to-[#101426]">
        <div class="orb w-96 h-96 bg-[#287BFF]/20 -top-20 -right-20"></div>

        <div class="relative z-10 max-w-3xl space-y-4">
          <span class="badge-pill bg-[#287BFF] text-white text-xs">HARDWARE MATRIX</span>
          <h1 class="text-3xl sm:text-5xl font-black text-white tracking-tight">
            Product <span class="gradient-text">Comparison Lab</span>
          </h1>
          <p class="text-slate-300 text-base sm:text-lg">
            Inspect technical specifications, physical dimensions, battery curves, and benchmark scores across leading technology hardware.
          </p>

          <div class="pt-2">
            <button id="btnLaunchComparisonToolDirect" class="px-6 py-3.5 rounded-2xl bg-gradient-to-r from-[#287BFF] via-[#873CFF] to-[#00D9FF] text-xs font-bold text-white shadow-xl shadow-[#287BFF]/30 btn-shimmer">
              Launch Interactive Comparison Matrix →
            </button>
          </div>
        </div>
      </div>

      <!-- Quick Comparison Presets -->
      <div class="space-y-6">
        <h2 class="text-xl font-bold text-white">Popular Community Matchups</h2>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
          
          <!-- Matchup 1: Flagship Phones -->
          <div class="rounded-3xl glass-panel p-6 border border-white/10 space-y-4">
            <div class="flex items-center justify-between">
              <span class="badge-pill bg-[#287BFF] text-white text-[10px]">ULTIMATE SMARTPHONE DUEL</span>
              <span class="text-xs font-mono text-emerald-400">Score Tie: 9.6 vs 9.5</span>
            </div>
            
            <h3 class="text-lg font-bold text-white">Apple iPhone 16 Pro Max vs Samsung Galaxy S25 Ultra</h3>
            <p class="text-xs text-slate-300 leading-relaxed">
              Titanium frame and ProRes 4K 120fps video against Gorilla Armor anti-reflective glass, 200MP sensor, and S-Pen.
            </p>

            <div class="flex items-center gap-3 pt-2">
              <button class="btn-preset-compare px-4 py-2 rounded-xl bg-white/10 hover:bg-[#287BFF] text-xs font-bold text-white transition-all" data-id1="gadget-1" data-id2="gadget-2">
                Compare These Devices
              </button>
            </div>
          </div>

          <!-- Matchup 2: Creator Workstation vs Gaming Beast -->
          <div class="rounded-3xl glass-panel p-6 border border-white/10 space-y-4">
            <div class="flex items-center justify-between">
              <span class="badge-pill bg-[#873CFF] text-white text-[10px]">PORTABLE COMPUTING TITANS</span>
              <span class="text-xs font-mono text-[#00D9FF]">Battery King vs High Refresh OLED</span>
            </div>
            
            <h3 class="text-lg font-bold text-white">MacBook Pro 16" (M4 Max) vs ASUS Zephyrus G16 (RTX 4080)</h3>
            <p class="text-xs text-slate-300 leading-relaxed">
              22-hour battery life and 546 GB/s unified memory bandwidth versus 240Hz OLED gaming speed and Windows DLSS 3.5.
            </p>

            <div class="flex items-center gap-3 pt-2">
              <button class="btn-preset-compare px-4 py-2 rounded-xl bg-white/10 hover:bg-[#873CFF] text-xs font-bold text-white transition-all" data-id1="gadget-4" data-id2="gadget-5">
                Compare These Devices
              </button>
            </div>
          </div>

        </div>
      </div>

    </div>
  `;
}

