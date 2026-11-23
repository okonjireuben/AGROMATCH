// REUBEN TECH - Technology News Dedicated Page (Page 2)
import { ARTICLES, TRENDING_TOPICS } from '../data.js';

export function renderNewsPage() {
  return `
    <div class="py-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
      
      <!-- Newsroom Hero Header -->
      <div class="rounded-3xl glass-panel p-8 sm:p-12 border border-white/10 relative overflow-hidden bg-gradient-to-br from-[#12182E] to-[#101426]">
        <div class="orb w-96 h-96 bg-[#287BFF]/20 -top-20 -right-20"></div>

        <div class="relative z-10 max-w-3xl space-y-4">
          <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#287BFF]/20 text-[#00D9FF] text-xs font-mono font-bold uppercase tracking-wider">
            <span class="w-2 h-2 rounded-full bg-[#00D9FF] animate-ping"></span>
            GLOBAL WIRE • 24/7 COVERAGE
          </div>
          <h1 class="text-3xl sm:text-5xl font-black text-white tracking-tight">
            Technology <span class="gradient-text">Newsroom</span>
          </h1>
          <p class="text-slate-300 text-base sm:text-lg">
            Independent dispatches on semiconductor manufacturing, frontier AI algorithms, space exploration, and consumer technology.
          </p>
        </div>
      </div>

      <!-- Live Wire Ticker -->
      <div class="p-4 rounded-2xl bg-white/5 border border-white/10 flex items-center gap-4 overflow-hidden">
        <span class="px-2.5 py-1 rounded-md bg-[#FF7138] text-white text-[11px] font-bold font-mono uppercase whitespace-nowrap">FLASH</span>
        <div class="flex items-center gap-8 animate-marquee text-xs font-mono text-slate-300">
          ${TRENDING_TOPICS.map(t => `<span>• ${t.tag}: ${t.label} (${t.growth})</span>`).join('')}
        </div>
      </div>

      <!-- News Article Directory Grid -->
      <div class="space-y-6">
        <div class="flex items-center justify-between pb-4 border-b border-white/10">
          <h2 class="text-xl font-bold text-white">All Dispatches (${ARTICLES.length})</h2>
          <span class="text-xs font-mono text-slate-400">Chronological Archive</span>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          ${ARTICLES.map(art => `
            <div class="rounded-3xl glass-panel p-5 border border-white/10 hover-card flex flex-col justify-between group">
              <div>
                <div class="relative w-full h-48 rounded-2xl overflow-hidden mb-4">
                  <img src="${art.image}" alt="${art.title}" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500">
                  <span class="absolute top-3 left-3 badge-pill bg-[#287BFF] text-white text-[10px]">
                    ${art.category}
                  </span>
                  <span class="absolute bottom-3 right-3 px-2 py-0.5 rounded bg-black/70 text-[10px] font-mono text-white backdrop-blur">
                    ${art.readTime}
                  </span>
                </div>

                <div class="flex items-center gap-2 text-[10px] font-mono text-slate-400 mb-1">
                  <span>${art.date}</span>
                  <span>•</span>
                  <span>${art.views.toLocaleString()} reads</span>
                </div>

                <h3 class="text-base font-bold text-white group-hover:text-[#00D9FF] transition-colors line-clamp-2 mb-2 leading-snug">
                  ${art.title}
                </h3>

                <p class="text-xs text-slate-300 line-clamp-3 leading-relaxed mb-4">
                  ${art.summary}
                </p>
              </div>

              <div class="pt-4 border-t border-white/10 flex items-center justify-between">
                <div class="flex items-center gap-2">
                  <img src="${art.author.avatar}" alt="${art.author.name}" class="w-6 h-6 rounded-full object-cover">
                  <span class="text-xs text-slate-300">${art.author.name}</span>
                </div>

                <button data-article-id="${art.id}" class="btn-open-article text-xs font-bold text-[#00D9FF] hover:text-white flex items-center gap-1 transition-colors">
                  <span>Read</span>
                  <svg class="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
                </button>
              </div>
            </div>
          `).join('')}
        </div>
      </div>

    </div>
  `;
}

