// REUBEN TECH - Trending Section (Section C)
import { TRENDING_TOPICS, ARTICLES } from '../data.js';

export function renderTrending() {
  const trendingArticles = ARTICLES.filter(a => a.isTrending);

  return `
    <section class="py-12 bg-[#0E1222] border-y border-white/10 relative overflow-hidden">
      
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-6">
        <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          
          <div class="flex items-center gap-3">
            <div class="flex items-center justify-center w-8 h-8 rounded-lg bg-[#FF7138]/20 text-[#FF7138] border border-[#FF7138]/30">
              <svg class="w-4 h-4 animate-bounce" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">
                <path d="M8.5 14.5A2.5 2.5 0 0 0 11 12c0-1.38-.5-2-1-3-1.072-2.143-.224-4.054 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 1 1-14 0c0-1.153.433-2.294 1-3a2.5 2.5 0 0 0 2.5 2.5z"/>
              </svg>
            </div>
            <div>
              <h2 class="text-xl sm:text-2xl font-bold text-white tracking-tight flex items-center gap-2">
                TRENDING NOW <span class="text-xs font-mono font-normal text-slate-400">/ REAL-TIME VELOCITY RADAR</span>
              </h2>
              <p class="text-xs text-slate-400">Tracking viral breakthroughs, AI releases, silicon updates & community discussions.</p>
            </div>
          </div>

          <!-- Feature 6: Trending Radar Quick Filter pills -->
          <div class="flex items-center gap-2 overflow-x-auto pb-1 sm:pb-0">
            <button class="trending-filter-pill active px-3 py-1 rounded-full text-xs font-semibold bg-[#287BFF] text-white whitespace-nowrap" data-filter="all">All Trends</button>
            <button class="trending-filter-pill px-3 py-1 rounded-full text-xs font-semibold bg-white/5 hover:bg-white/10 text-slate-300 border border-white/10 whitespace-nowrap" data-filter="ai">AI Models</button>
            <button class="trending-filter-pill px-3 py-1 rounded-full text-xs font-semibold bg-white/5 hover:bg-white/10 text-slate-300 border border-white/10 whitespace-nowrap" data-filter="smartphones">Hardware</button>
            <button class="trending-filter-pill px-3 py-1 rounded-full text-xs font-semibold bg-white/5 hover:bg-white/10 text-slate-300 border border-white/10 whitespace-nowrap" data-filter="quantum">Deep Tech</button>
          </div>

        </div>
      </div>

      <!-- Horizontal Smooth Scrolling Feed Cards -->
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          ${trendingArticles.slice(0, 4).map((art, idx) => `
            <div class="relative group rounded-2xl glass-panel p-4 hover-card border border-white/10 flex flex-col justify-between">
              
              <div>
                <!-- Top Header: Rank & Growth Badge -->
                <div class="flex items-center justify-between mb-3">
                  <div class="flex items-center gap-2">
                    <span class="text-lg font-black font-mono text-[#00D9FF]">#0${idx + 1}</span>
                    <span class="badge-pill bg-white/5 text-[10px] text-slate-300 border border-white/10">
                      ${art.category}
                    </span>
                  </div>
                  <div class="flex items-center gap-1 text-xs font-mono font-bold text-emerald-400">
                    <svg class="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="22 7 13.5 15.5 8.5 10.5 2 17"/><polyline points="16 7 22 7 22 13"/></svg>
                    <span>+${78 + idx * 24}%</span>
                  </div>
                </div>

                <!-- Thumbnail -->
                <div class="w-full h-32 rounded-xl overflow-hidden mb-3 relative">
                  <img src="${art.image}" alt="${art.title}" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500">
                  <div class="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  <span class="absolute bottom-2 left-2 text-[10px] font-mono text-white/90 bg-black/60 px-2 py-0.5 rounded backdrop-blur">
                    ${art.readTime}
                  </span>
                </div>

                <!-- Title & Summary -->
                <h3 class="text-sm font-bold text-white group-hover:text-[#00D9FF] transition-colors line-clamp-2 mb-2 leading-snug">
                  ${art.title}
                </h3>
              </div>

              <!-- Action Footer -->
              <div class="pt-3 border-t border-white/10 flex items-center justify-between text-xs text-slate-400">
                <span class="font-mono text-[11px]">${art.views.toLocaleString()} active views</span>
                <button data-article-id="${art.id}" class="btn-open-article font-semibold text-[#00D9FF] hover:text-white flex items-center gap-1 transition-colors">
                  <span>Read</span>
                  <svg class="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
                </button>
              </div>

            </div>
          `).join('')}
        </div>
      </div>

    </section>
  `;
}

