// REUBEN TECH - Gaming Technology Dedicated Page (Page 10)
import { GADGETS, ARTICLES } from '../data.js';

export function renderGamingPage() {
  const gamingGadgets = GADGETS.filter(g => g.category.includes('Gaming') || g.id === 'gadget-5');
  const gamingArticles = ARTICLES.filter(a => a.tags.includes('Gaming'));

  return `
    <div class="py-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
      
      <!-- Gaming Hero -->
      <div class="rounded-3xl glass-panel p-8 sm:p-12 border border-[#FF7138]/30 relative overflow-hidden bg-gradient-to-br from-[#23142B] via-[#101426] to-[#0A0D18]">
        <div class="orb w-96 h-96 bg-[#FF7138]/20 -top-20 -right-20"></div>

        <div class="relative z-10 max-w-3xl space-y-4">
          <span class="badge-pill bg-[#FF7138] text-white text-xs">INTERACTIVE GRAPHICS LAB</span>
          <h1 class="text-3xl sm:text-5xl font-black text-white tracking-tight">
            Gaming <span class="gradient-text-fire">Technology</span> & Handheld PCs
          </h1>
          <p class="text-slate-300 text-base sm:text-lg">
            Hardware acceleration, path tracing ray reconstruction, variable refresh rate OLEDs, and custom monolithic APUs.
          </p>

          <div class="pt-2">
            <button id="btnOpenGamingExplainer" class="px-5 py-3 rounded-xl bg-gradient-to-r from-[#FF7138] to-[#873CFF] text-xs font-bold text-white shadow-lg shadow-[#FF7138]/25 btn-shimmer">
              Ray Tracing vs Path Tracing Explainer →
            </button>
          </div>
        </div>
      </div>

      <!-- Gaming Hardware Grid -->
      <div class="space-y-6">
        <h2 class="text-xl font-bold text-white">Tested Gaming Systems</h2>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
          ${gamingGadgets.map(g => `
            <div class="rounded-3xl glass-panel p-6 border border-white/10 hover-card flex flex-col justify-between">
              <div>
                <div class="w-full h-64 rounded-2xl overflow-hidden mb-5 bg-black/40 relative">
                  <img src="${g.image}" alt="${g.name}" class="w-full h-full object-cover">
                  <span class="absolute top-4 left-4 badge-pill bg-[#FF7138] text-white text-[10px]">${g.highlightBadge}</span>
                  <span class="absolute bottom-4 right-4 px-3 py-1 rounded-xl bg-black/80 font-mono text-sm font-bold text-[#00D9FF]">${g.rating} / 10</span>
                </div>
                <h3 class="text-xl font-bold text-white mb-1">${g.name}</h3>
                <p class="text-xs text-slate-400 font-mono mb-3">${g.price} • ${g.brand}</p>
                <p class="text-sm text-slate-300 leading-relaxed mb-6">${g.verdict}</p>
              </div>

              <div class="pt-4 border-t border-white/10 flex items-center gap-2">
                <button data-gadget-id="${g.id}" class="btn-open-gadget flex-1 py-3 rounded-xl bg-gradient-to-r from-[#FF7138] to-[#873CFF] text-xs font-bold text-white shadow-lg text-center">
                  Full Gaming Analysis
                </button>
              </div>
            </div>
          `).join('')}
        </div>
      </div>

      <!-- Gaming Articles -->
      <div class="space-y-6">
        <h3 class="text-xl font-bold text-white">Gaming Architecture Analysis</h3>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
          ${gamingArticles.map(art => `
            <div class="rounded-3xl glass-panel p-5 border border-white/10 hover-card flex flex-col justify-between">
              <div>
                <div class="w-full h-44 rounded-2xl overflow-hidden mb-4">
                  <img src="${art.image}" alt="${art.title}" class="w-full h-full object-cover">
                </div>
                <div class="text-[10px] font-mono text-[#00D9FF] mb-1">${art.category} • ${art.readTime}</div>
                <h4 class="text-base font-bold text-white mb-2 leading-snug">${art.title}</h4>
                <p class="text-xs text-slate-300 line-clamp-3 mb-4 leading-relaxed">${art.summary}</p>
              </div>
              <div class="pt-3 border-t border-white/10 flex items-center justify-between">
                <span class="text-xs text-slate-400">${art.author.name}</span>
                <button data-article-id="${art.id}" class="btn-open-article text-xs font-bold text-[#FF7138] hover:text-white">Read Article →</button>
              </div>
            </div>
          `).join('')}
        </div>
      </div>

    </div>
  `;
}

