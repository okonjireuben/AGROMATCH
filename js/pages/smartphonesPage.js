// REUBEN TECH - Smartphone Reviews Dedicated Page (Page 5)
import { GADGETS } from '../data.js';

export function renderSmartphonesPage() {
  const phones = GADGETS.filter(g => g.category === 'Smartphones');

  return `
    <div class="py-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
      
      <!-- Smartphones Hero -->
      <div class="rounded-3xl glass-panel p-8 sm:p-12 border border-white/10 relative overflow-hidden bg-gradient-to-br from-[#151B38] to-[#101426]">
        <div class="orb w-96 h-96 bg-[#287BFF]/20 -top-20 -left-20"></div>

        <div class="relative z-10 max-w-3xl space-y-4">
          <span class="badge-pill bg-[#287BFF] text-white text-xs">MOBILE LABORATORY</span>
          <h1 class="text-3xl sm:text-5xl font-black text-white tracking-tight">
            Smartphone <span class="gradient-text">Reviews</span> & Shootouts
          </h1>
          <p class="text-slate-300 text-base sm:text-lg">
            Blind camera shootouts, battery drain run-downs, display colorimeters, and on-device NPU inference benchmarks.
          </p>
        </div>
      </div>

      <!-- Battery & Geekbench Comparison Chart -->
      <div class="rounded-3xl glass-panel p-6 sm:p-8 border border-white/10 space-y-6">
        <div>
          <h2 class="text-xl font-bold text-white">2026 Flagship Benchmark Showdown</h2>
          <p class="text-xs text-slate-400">Continuous 120Hz web browsing battery test & Geekbench 6 CPU performance.</p>
        </div>

        <div class="space-y-4">
          <!-- Item 1: iPhone 16 Pro Max -->
          <div class="space-y-1.5">
            <div class="flex items-center justify-between text-xs font-mono text-slate-300">
              <span class="font-bold text-white">Apple iPhone 16 Pro Max (A18 Pro)</span>
              <span class="text-emerald-400 font-bold">18h 45m battery • 8,920 Multi-Core</span>
            </div>
            <div class="w-full h-3 bg-white/10 rounded-full overflow-hidden flex">
              <div class="bg-gradient-to-r from-[#287BFF] to-[#00D9FF] h-full" style="width: 96%;"></div>
            </div>
          </div>

          <!-- Item 2: Galaxy S25 Ultra -->
          <div class="space-y-1.5">
            <div class="flex items-center justify-between text-xs font-mono text-slate-300">
              <span class="font-bold text-white">Samsung Galaxy S25 Ultra (Snapdragon 8 Elite)</span>
              <span class="text-emerald-400 font-bold">17h 52m battery • 9,410 Multi-Core</span>
            </div>
            <div class="w-full h-3 bg-white/10 rounded-full overflow-hidden flex">
              <div class="bg-gradient-to-r from-[#873CFF] to-[#287BFF] h-full" style="width: 93%;"></div>
            </div>
          </div>

          <!-- Item 3: Pixel 9 Pro -->
          <div class="space-y-1.5">
            <div class="flex items-center justify-between text-xs font-mono text-slate-300">
              <span class="font-bold text-white">Google Pixel 9 Pro (Tensor G4)</span>
              <span class="text-emerald-400 font-bold">15h 10m battery • 6,240 Multi-Core (Gemini Optimized)</span>
            </div>
            <div class="w-full h-3 bg-white/10 rounded-full overflow-hidden flex">
              <div class="bg-gradient-to-r from-[#FF7138] to-[#873CFF] h-full" style="width: 82%;"></div>
            </div>
          </div>
        </div>
      </div>

      <!-- Smartphone Cards -->
      <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
        ${phones.map(p => `
          <div class="rounded-3xl glass-panel p-6 border border-white/10 hover-card flex flex-col justify-between">
            <div>
              <div class="w-full h-52 rounded-2xl overflow-hidden mb-4 bg-black/40 relative">
                <img src="${p.image}" alt="${p.name}" class="w-full h-full object-cover">
                <span class="absolute top-3 left-3 badge-pill bg-[#287BFF] text-white text-[10px]">${p.highlightBadge}</span>
                <span class="absolute bottom-3 right-3 px-2 py-0.5 rounded bg-black/70 font-mono text-xs font-bold text-[#00D9FF]">${p.rating} / 10</span>
              </div>
              <h3 class="text-lg font-bold text-white mb-1">${p.name}</h3>
              <p class="text-xs text-slate-400 font-mono mb-3">${p.price} • ${p.brand}</p>
              <p class="text-xs text-slate-300 line-clamp-3 mb-4 leading-relaxed">${p.verdict}</p>
              
              <div class="space-y-1.5 py-3 border-t border-white/10 text-xs text-slate-300">
                <div class="text-[11px] font-mono text-emerald-400">✓ ${p.pros[0]}</div>
                <div class="text-[11px] font-mono text-rose-400">✕ ${p.cons[0]}</div>
              </div>
            </div>

            <div class="pt-4 border-t border-white/10 flex items-center gap-2">
              <button data-gadget-id="${p.id}" class="btn-open-gadget flex-1 py-2.5 rounded-xl bg-white/10 hover:bg-[#287BFF] text-xs font-bold text-white transition-all">
                Read Full Lab Review
              </button>
            </div>
          </div>
        `).join('')}
      </div>

    </div>
  `;
}

