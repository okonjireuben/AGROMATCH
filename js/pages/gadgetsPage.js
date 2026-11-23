// REUBEN TECH - Gadgets & Devices Dedicated Page (Page 4)
import { GADGETS } from '../data.js';

export function renderGadgetsPage() {
  return `
    <div class="py-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
      
      <!-- Gadgets Hero Header -->
      <div class="rounded-3xl glass-panel p-8 sm:p-12 border border-white/10 relative overflow-hidden bg-gradient-to-br from-[#121933] to-[#101426]">
        <div class="orb w-96 h-96 bg-[#00D9FF]/15 -bottom-20 -right-20"></div>

        <div class="relative z-10 max-w-3xl space-y-4">
          <span class="badge-pill bg-[#287BFF] text-white text-xs">HARDWARE ARCHIVE</span>
          <h1 class="text-3xl sm:text-5xl font-black text-white tracking-tight">
            Gadgets & <span class="gradient-text-cyan">Devices</span>
          </h1>
          <p class="text-slate-300 text-base sm:text-lg">
            Every smartphone, ultraportable laptop, handheld console, and creative camera rigorously stress-tested in our hardware labs.
          </p>

          <div class="pt-2 flex flex-wrap gap-3">
            <button id="btnOpenCompareFromGadgets" class="px-5 py-3 rounded-xl bg-gradient-to-r from-[#873CFF] to-[#287BFF] text-xs font-bold text-white shadow-lg shadow-[#873CFF]/30 btn-shimmer">
              Open Product Comparison Tool →
            </button>
            <button id="btnOpenTechFinderFromGadgets" class="px-5 py-3 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-xs font-bold text-white">
              Launch Tech Finder Filter
            </button>
          </div>
        </div>
      </div>

      <!-- Gadget Catalog Grid -->
      <div class="space-y-6">
        <div class="flex items-center justify-between pb-4 border-b border-white/10">
          <h2 class="text-xl font-bold text-white">All Benchmarked Devices (${GADGETS.length})</h2>
          <span class="text-xs font-mono text-slate-400">Sorted by Reuben Lab Rating</span>
        </div>

        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          ${GADGETS.map(g => `
            <div class="rounded-3xl glass-panel p-5 border border-white/10 hover-card flex flex-col justify-between group">
              <div>
                <div class="relative w-full h-48 rounded-2xl overflow-hidden mb-4 bg-black/40">
                  <img src="${g.image}" alt="${g.name}" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500">
                  <span class="absolute top-3 left-3 badge-pill bg-[#287BFF]/90 text-white backdrop-blur text-[10px]">
                    ${g.category}
                  </span>
                  <span class="absolute bottom-3 right-3 px-2 py-1 rounded bg-black/75 backdrop-blur text-xs font-mono font-bold text-[#00D9FF]">
                    ${g.rating} / 10
                  </span>
                </div>

                <div class="flex items-center justify-between text-[11px] font-mono text-slate-400 mb-1">
                  <span>${g.brand}</span>
                  <span class="text-white font-bold">${g.price}</span>
                </div>

                <h3 class="text-base font-bold text-white group-hover:text-[#00D9FF] transition-colors line-clamp-1 mb-2">
                  ${g.name}
                </h3>

                <p class="text-xs text-slate-300 line-clamp-2 leading-relaxed mb-4">
                  ${g.verdict}
                </p>

                <!-- Spec Details -->
                <div class="text-[11px] font-mono text-slate-400 space-y-1 py-2 border-t border-white/10">
                  <div class="truncate"><span class="text-slate-500">CPU:</span> ${g.specs.processor.split('(')[0]}</div>
                  <div class="truncate"><span class="text-slate-500">OS:</span> ${g.specs.os}</div>
                </div>
              </div>

              <div class="pt-4 border-t border-white/10 flex items-center gap-2">
                <button data-gadget-id="${g.id}" class="btn-open-gadget flex-1 py-2 rounded-xl text-xs font-bold text-white bg-white/10 hover:bg-[#287BFF] transition-all text-center">
                  Full Specs
                </button>
                <button data-gadget-id="${g.id}" class="btn-add-compare p-2 rounded-xl bg-white/5 hover:bg-[#873CFF] text-slate-300 hover:text-white border border-white/10 transition-all" title="Add to comparison">
                  <svg class="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2"><path d="m16 3 4 4-4 4"/><path d="M20 7H4"/><path d="m8 21-4-4 4-4"/><path d="M4 17h16"/></svg>
                </button>
              </div>
            </div>
          `).join('')}
        </div>
      </div>

    </div>
  `;
}

