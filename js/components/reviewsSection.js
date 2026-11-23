// REUBEN TECH - Reviews & Comparisons (Section G)
import { GADGETS } from '../data.js';

export function renderReviewsSection() {
  const topReviews = GADGETS.slice(0, 3); // iPhone 16 Pro Max, S25 Ultra, Pixel 9 Pro or M4 Max

  return `
    <section class="py-20 bg-[#0C101E] border-y border-white/10 relative overflow-hidden">
      
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <!-- Header -->
        <div class="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-12 border-b border-white/10">
          <div>
            <div class="flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-widest text-[#873CFF] mb-2">
              <span class="w-2 h-2 rounded-full bg-[#873CFF]"></span>
              LAB BENCHMARKS & VERDICTS
            </div>
            <h2 class="text-3xl sm:text-5xl font-black text-white tracking-tight">
              Reviews & <span class="gradient-text">Comparisons</span>
            </h2>
            <p class="text-slate-400 text-sm mt-2 max-w-xl">
              Objective measurements, deep pros and cons analysis, and uncompromising verdicts from our senior hardware editors.
            </p>
          </div>

          <!-- Direct button to launch comparison tool -->
          <div class="flex items-center gap-3">
            <button id="btnLaunchCompareModal" class="px-5 py-3 rounded-2xl text-xs font-bold text-white bg-gradient-to-r from-[#873CFF] to-[#287BFF] hover:opacity-95 shadow-xl shadow-[#873CFF]/25 flex items-center gap-2 btn-shimmer">
              <svg class="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2"><path d="m16 3 4 4-4 4"/><path d="M20 7H4"/><path d="m8 21-4-4 4-4"/><path d="M4 17h16"/></svg>
              <span>Side-by-Side Comparison Lab</span>
            </button>
          </div>
        </div>

        <!-- Detailed Review Cards (Featuring Pros, Cons, Performance Verdict) -->
        <div class="grid grid-cols-1 lg:grid-cols-3 gap-8 mt-12">
          ${topReviews.map(item => `
            <div class="rounded-3xl glass-panel p-6 border border-white/10 hover-card flex flex-col justify-between">
              
              <div>
                <!-- Rating Dial Header -->
                <div class="flex items-start justify-between gap-4 mb-4">
                  <div>
                    <span class="text-xs font-mono text-[#00D9FF] uppercase tracking-wider">${item.category}</span>
                    <h3 class="text-xl font-bold text-white mt-1 leading-snug">${item.name}</h3>
                    <div class="text-xs text-slate-400 font-mono mt-0.5">${item.price} • ${item.brand}</div>
                  </div>

                  <!-- Score Badge -->
                  <div class="flex flex-col items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-[#287BFF] to-[#873CFF] p-[2px] shadow-lg shadow-[#287BFF]/30 flex-shrink-0">
                    <div class="w-full h-full bg-[#101426] rounded-[14px] flex flex-col items-center justify-center">
                      <span class="text-base font-black text-white font-mono">${item.rating}</span>
                      <span class="text-[9px] uppercase tracking-widest text-[#00D9FF] font-mono">VERDICT</span>
                    </div>
                  </div>
                </div>

                <!-- Product Thumbnail -->
                <div class="w-full h-44 rounded-2xl overflow-hidden mb-5 bg-black/30">
                  <img src="${item.image}" alt="${item.name}" class="w-full h-full object-cover">
                </div>

                <!-- Expert Verdict Quote -->
                <div class="p-3.5 rounded-2xl bg-white/5 border border-white/5 mb-5 text-xs text-slate-200 italic leading-relaxed">
                  "${item.verdict}"
                </div>

                <!-- Pros and Cons Section -->
                <div class="space-y-4">
                  <!-- Pros -->
                  <div>
                    <h4 class="text-xs font-mono font-bold text-emerald-400 uppercase tracking-wider flex items-center gap-1.5 mb-2">
                      <svg class="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="20 6 9 17 4 12"/></svg>
                      Key Strengths
                    </h4>
                    <ul class="space-y-1.5">
                      ${item.pros.slice(0, 2).map(pro => `
                        <li class="text-xs text-slate-300 flex items-start gap-2">
                          <span class="text-emerald-400 font-bold mt-0.5">•</span>
                          <span>${pro}</span>
                        </li>
                      `).join('')}
                    </ul>
                  </div>

                  <!-- Cons -->
                  <div>
                    <h4 class="text-xs font-mono font-bold text-rose-400 uppercase tracking-wider flex items-center gap-1.5 mb-2">
                      <svg class="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
                      Drawbacks
                    </h4>
                    <ul class="space-y-1.5">
                      ${item.cons.slice(0, 2).map(con => `
                        <li class="text-xs text-slate-400 flex items-start gap-2">
                          <span class="text-rose-400 font-bold mt-0.5">•</span>
                          <span>${con}</span>
                        </li>
                      `).join('')}
                    </ul>
                  </div>
                </div>

              </div>

              <!-- Action Card Bottom -->
              <div class="pt-6 mt-6 border-t border-white/10 flex items-center gap-2">
                <button data-gadget-id="${item.id}" class="btn-open-gadget flex-1 py-2.5 rounded-xl text-xs font-bold text-white bg-white/10 hover:bg-[#287BFF] transition-all">
                  Full Lab Analysis
                </button>
                <button data-gadget-id="${item.id}" class="btn-add-compare px-3 py-2.5 rounded-xl bg-white/5 hover:bg-white/15 text-slate-300 border border-white/10 text-xs font-mono" title="Add to comparison slot">
                  + Compare
                </button>
              </div>

            </div>
          `).join('')}
        </div>

      </div>
    </section>
  `;
}

