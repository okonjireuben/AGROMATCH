// REUBEN TECH - Latest Technology News (Section D)
import { ARTICLES } from '../data.js';

export function renderNewsGrid(activeCategory = 'All') {
  const filteredArticles = activeCategory === 'All' 
    ? ARTICLES 
    : ARTICLES.filter(a => a.category.toLowerCase().includes(activeCategory.toLowerCase()));

  const mainArticle = filteredArticles[0] || ARTICLES[0];
  const supportingArticles = filteredArticles.slice(1, 5);

  const categories = ['All', 'AI & Innovation', 'Gadgets', 'Reviews', 'Tutorials'];

  return `
    <section id="sectionNewsGrid" class="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      
      <!-- Section Header & Category Filters -->
      <div class="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-8 border-b border-white/10">
        <div>
          <div class="flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-widest text-[#00D9FF] mb-2">
            <span class="w-2 h-2 rounded-full bg-[#00D9FF]"></span>
            EDITORIAL DISPATCHES
          </div>
          <h2 class="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Latest Technology News
          </h2>
          <p class="text-slate-400 text-sm mt-1">Rigorous journalism, investigative tech reviews, and breakthrough reports.</p>
        </div>

        <!-- Interactive Category Filters -->
        <div class="flex flex-wrap items-center gap-2">
          ${categories.map(cat => `
            <button class="news-category-filter px-4 py-2 rounded-xl text-xs font-semibold transition-all ${activeCategory === cat ? 'bg-gradient-to-r from-[#287BFF] to-[#873CFF] text-white shadow-lg shadow-[#287BFF]/30' : 'bg-white/5 hover:bg-white/10 text-slate-300 border border-white/10'}" data-category="${cat}">
              ${cat}
            </button>
          `).join('')}
        </div>
      </div>

      <!-- News Grid: 1 Big Featured + Supporting List/Cards -->
      <div class="grid grid-cols-1 lg:grid-cols-12 gap-8 mt-8">
        
        <!-- Large Featured Main Article (7 cols) -->
        <div class="lg:col-span-7">
          <div class="group rounded-3xl glass-panel p-6 border border-white/10 hover-card flex flex-col h-full justify-between">
            <div>
              <div class="relative w-full h-80 rounded-2xl overflow-hidden mb-6">
                <img src="${mainArticle.image}" alt="${mainArticle.title}" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700">
                <div class="absolute inset-0 bg-gradient-to-t from-[#101426] via-transparent to-transparent"></div>
                
                <div class="absolute top-4 left-4 flex gap-2">
                  <span class="badge-pill bg-[#287BFF] text-white font-mono text-[11px]">
                    ${mainArticle.category}
                  </span>
                  <span class="badge-pill bg-white/10 text-white backdrop-blur text-[11px]">
                    LEAD STORY
                  </span>
                </div>

                <div class="absolute bottom-4 left-4 right-4 flex items-center justify-between text-xs text-slate-300 font-mono">
                  <div class="flex items-center gap-2">
                    <img src="${mainArticle.author.avatar}" alt="${mainArticle.author.name}" class="w-6 h-6 rounded-full object-cover">
                    <span>${mainArticle.author.name}</span>
                  </div>
                  <span>${mainArticle.date} • ${mainArticle.readTime}</span>
                </div>
              </div>

              <h3 class="text-2xl sm:text-3xl font-bold text-white group-hover:text-[#00D9FF] transition-colors leading-tight mb-3">
                ${mainArticle.title}
              </h3>

              <p class="text-slate-300 text-sm leading-relaxed mb-6">
                ${mainArticle.summary}
              </p>
            </div>

            <!-- Card Bottom Row -->
            <div class="pt-4 border-t border-white/10 flex items-center justify-between">
              <div class="flex items-center gap-2">
                ${mainArticle.tags.map(t => `<span class="text-[11px] font-mono text-slate-400 bg-white/5 px-2.5 py-1 rounded-md">#${t}</span>`).join('')}
              </div>

              <button data-article-id="${mainArticle.id}" class="btn-open-article inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-bold text-white bg-white/10 hover:bg-[#287BFF] transition-all">
                <span>Read Full Article</span>
                <svg class="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
              </button>
            </div>

          </div>
        </div>

        <!-- Smaller Supporting Articles Grid (5 cols) -->
        <div class="lg:col-span-5 flex flex-col gap-4">
          ${supportingArticles.map(art => `
            <div class="group rounded-2xl glass-panel p-4 border border-white/10 hover-card flex gap-4 items-center">
              <div class="w-28 h-28 sm:w-32 sm:h-32 rounded-xl overflow-hidden flex-shrink-0 relative">
                <img src="${art.image}" alt="${art.title}" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500">
                <span class="absolute bottom-1.5 left-1.5 text-[9px] font-mono text-white/90 bg-black/60 px-1.5 py-0.5 rounded backdrop-blur">
                  ${art.readTime}
                </span>
              </div>

              <div class="flex flex-col justify-between flex-grow">
                <div>
                  <div class="flex items-center gap-2 text-[10px] font-mono text-slate-400 mb-1">
                    <span class="text-[#00D9FF] font-semibold">${art.category}</span>
                    <span>•</span>
                    <span>${art.date}</span>
                  </div>

                  <h4 class="text-sm sm:text-base font-bold text-white group-hover:text-[#00D9FF] transition-colors line-clamp-2 leading-snug mb-1">
                    ${art.title}
                  </h4>

                  <p class="text-xs text-slate-400 line-clamp-2 leading-relaxed hidden sm:block">
                    ${art.summary}
                  </p>
                </div>

                <div class="pt-2 mt-1 border-t border-white/5 flex items-center justify-between">
                  <span class="text-[11px] text-slate-400">${art.author.name}</span>
                  <button data-article-id="${art.id}" class="btn-open-article text-xs font-semibold text-[#00D9FF] hover:text-white flex items-center gap-1 transition-colors">
                    Read Story →
                  </button>
                </div>
              </div>
            </div>
          `).join('')}
        </div>

      </div>

    </section>
  `;
}

