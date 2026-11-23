// REUBEN TECH - Editor's Pick (Section I)
import { ARTICLES } from '../data.js';

export function renderEditorsPick() {
  const picks = ARTICLES.filter(a => a.isEditorsPick);

  return `
    <section class="py-20 bg-gradient-to-br from-[#12182E] via-[#101426] to-[#0A0D18] border-t border-white/10 relative overflow-hidden">
      
      <!-- Subtle Decorative Elements -->
      <div class="orb w-96 h-96 bg-[#287BFF]/10 top-0 left-1/3"></div>
      
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <!-- Header -->
        <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-12">
          <div>
            <div class="flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-widest text-[#FF7138] mb-1">
              <span class="w-2 h-2 rounded-full bg-[#FF7138]"></span>
              CURATED EXCELLENCE
            </div>
            <h2 class="text-3xl sm:text-4xl font-black text-white tracking-tight">
              Editor's <span class="gradient-text-fire">Pick</span>
            </h2>
          </div>
          <p class="text-xs font-mono text-slate-400">HAND-SELECTED ESSAYS & PROLONGED INVESTIGATIONS</p>
        </div>

        <!-- Editorial Spotlight Cards -->
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          ${picks.slice(0, 3).map(article => `
            <div class="group rounded-3xl glass-panel p-6 border border-white/10 hover-card flex flex-col justify-between">
              <div>
                <div class="relative w-full h-48 rounded-2xl overflow-hidden mb-5">
                  <img src="${article.image}" alt="${article.title}" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700">
                  <div class="absolute inset-0 bg-gradient-to-t from-[#101426] via-transparent to-transparent opacity-80"></div>
                  
                  <span class="absolute top-3 left-3 badge-pill bg-[#FF7138] text-white text-[10px]">
                    CURATED PICK
                  </span>

                  <span class="absolute bottom-3 left-3 text-[10px] font-mono text-slate-300">
                    ${article.date} • ${article.readTime}
                  </span>
                </div>

                <div class="text-[11px] font-mono text-[#00D9FF] font-semibold uppercase mb-1">
                  ${article.category}
                </div>

                <h3 class="text-lg font-bold text-white group-hover:text-[#00D9FF] transition-colors leading-snug mb-3">
                  ${article.title}
                </h3>

                <p class="text-xs text-slate-300 line-clamp-3 leading-relaxed mb-4">
                  ${article.subtitle}
                </p>
              </div>

              <!-- Author & Action -->
              <div class="pt-4 border-t border-white/10 flex items-center justify-between">
                <div class="flex items-center gap-2">
                  <img src="${article.author.avatar}" alt="${article.author.name}" class="w-7 h-7 rounded-full object-cover ring-1 ring-white/20">
                  <span class="text-xs font-medium text-slate-300">${article.author.name}</span>
                </div>

                <button data-article-id="${article.id}" class="btn-open-article text-xs font-bold text-[#FF7138] hover:text-white transition-colors">
                  Read Essay →
                </button>
              </div>

            </div>
          `).join('')}
        </div>

      </div>
    </section>
  `;
}

