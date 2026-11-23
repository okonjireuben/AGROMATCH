// REUBEN TECH - Gadget Discovery (Section F)
import { GADGETS } from '../data.js';

export function renderGadgetDeck(selectedCategory = 'All') {
  const categories = ['All', 'Smartphones', 'Laptops', 'Gaming devices', 'Smartwatches', 'Cameras'];

  const filteredGadgets = selectedCategory === 'All' 
    ? GADGETS 
    : GADGETS.filter(g => g.category.toLowerCase() === selectedCategory.toLowerCase());

  return `
    <section id="sectionGadgetDeck" class="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      
      <!-- Header -->
      <div class="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-8 border-b border-white/10">
        <div>
          <div class="flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-widest text-[#00D9FF] mb-2">
            <span class="w-2 h-2 rounded-full bg-[#FF7138]"></span>
            HARDWARE LAB • DIRECTORY
          </div>
          <h2 class="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Gadget Discovery
          </h2>
          <p class="text-slate-400 text-sm mt-1">
            Engineered hardware tested to destruction in our independent benchmarking laboratory.
          </p>
        </div>

        <!-- Category Tabs -->
        <div class="flex flex-wrap items-center gap-2">
          ${categories.map(cat => `
            <button class="gadget-cat-pill px-4 py-2 rounded-xl text-xs font-semibold transition-all ${selectedCategory === cat ? 'bg-gradient-to-r from-[#287BFF] to-[#00D9FF] text-white shadow-lg shadow-[#287BFF]/30' : 'bg-white/5 hover:bg-white/10 text-slate-300 border border-white/10'}" data-cat="${cat}">
              ${cat}
            </button>
          `).join('')}
        </div>
      </div>

      <!-- Gadget Cards Grid -->
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-8">
        ${filteredGadgets.map(gadget => `
          <div class="rounded-3xl glass-panel p-5 border border-white/10 hover-card flex flex-col justify-between group">
            
            <div>
              <!-- Product Image & Badges -->
              <div class="relative w-full h-52 rounded-2xl overflow-hidden mb-4 bg-black/40">
                <img src="${gadget.image}" alt="${gadget.name}" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500">
                <div class="absolute inset-0 bg-gradient-to-t from-[#101426] via-transparent to-transparent opacity-70"></div>
                
                <span class="absolute top-3 left-3 badge-pill bg-[#287BFF]/90 text-white backdrop-blur text-[10px]">
                  ${gadget.highlightBadge}
                </span>

                <div class="absolute bottom-3 right-3 px-2.5 py-1 rounded-lg bg-black/75 backdrop-blur text-xs font-mono font-bold text-[#00D9FF] border border-white/10">
                  ${gadget.rating} / 10
                </div>
              </div>

              <!-- Brand & Category -->
              <div class="flex items-center justify-between text-[11px] font-mono text-slate-400 mb-1">
                <span>${gadget.brand}</span>
                <span class="text-slate-400 font-bold">${gadget.price}</span>
              </div>

              <!-- Product Name -->
              <h3 class="text-base font-bold text-white group-hover:text-[#00D9FF] transition-colors line-clamp-1 mb-2">
                ${gadget.name}
              </h3>

              <!-- Highlights / Verdict -->
              <p class="text-xs text-slate-300 line-clamp-2 leading-relaxed mb-4">
                ${gadget.verdict}
              </p>

              <!-- Quick Specs Chips -->
              <div class="space-y-1.5 py-3 border-t border-white/10 text-[11px] font-mono text-slate-300">
                <div class="flex items-center justify-between">
                  <span class="text-slate-400">Chip:</span>
                  <span class="truncate max-w-[170px] text-right font-medium text-white">${gadget.specs.processor.split('(')[0]}</span>
                </div>
                <div class="flex items-center justify-between">
                  <span class="text-slate-400">Display:</span>
                  <span class="truncate max-w-[170px] text-right">${gadget.specs.display.split(',')[0]}</span>
                </div>
              </div>
            </div>

            <!-- Action Buttons -->
            <div class="pt-4 border-t border-white/10 flex items-center gap-2">
              <button data-gadget-id="${gadget.id}" class="btn-open-gadget flex-1 py-2 rounded-xl text-xs font-bold text-white bg-white/10 hover:bg-[#287BFF] transition-all text-center">
                Details & Specs
              </button>

              <button data-gadget-id="${gadget.id}" class="btn-add-compare p-2 rounded-xl bg-white/5 hover:bg-[#873CFF] text-slate-300 hover:text-white border border-white/10 transition-all" title="Add to Product Comparison">
                <svg class="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2"><path d="m16 3 4 4-4 4"/><path d="M20 7H4"/><path d="m8 21-4-4 4-4"/><path d="M4 17h16"/></svg>
              </button>
            </div>

          </div>
        `).join('')}
      </div>

      <!-- Feature 1 Banner CTA: Tech Finder Tool -->
      <div class="mt-12 p-8 rounded-3xl bg-gradient-to-r from-[#287BFF]/20 via-[#873CFF]/20 to-[#00D9FF]/20 border border-white/15 flex flex-col md:flex-row items-center justify-between gap-6 backdrop-blur-xl">
        <div class="flex items-center gap-4 text-center md:text-left">
          <div class="w-14 h-14 rounded-2xl bg-gradient-to-br from-[#287BFF] to-[#00D9FF] flex items-center justify-center flex-shrink-0 shadow-lg shadow-[#00D9FF]/25">
            <svg class="w-7 h-7 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/></svg>
          </div>
          <div>
            <h4 class="text-xl font-bold text-white">Can't decide on the right machine?</h4>
            <p class="text-sm text-slate-300">Launch the Reuben Tech Finder to filter specs, price, and real benchmark scores in seconds.</p>
          </div>
        </div>

        <button id="btnBannerTechFinder" class="px-6 py-3.5 rounded-2xl text-xs font-bold text-white bg-gradient-to-r from-[#287BFF] to-[#873CFF] hover:opacity-95 shadow-lg shadow-[#287BFF]/30 whitespace-nowrap btn-shimmer">
          Launch Tech Finder →
        </button>
      </div>

    </section>
  `;
}

