// REUBEN TECH - Hero Component (Section B)
import { ARTICLES, TRENDING_TOPICS } from '../data.js';

export function renderHero() {
  const heroArticle = ARTICLES.find(a => a.isHero) || ARTICLES[0];

  return `
    <section class="relative min-h-[92vh] flex items-center justify-center overflow-hidden cyber-grid pt-12 pb-20">
      
      <!-- Ambient Aurora Glow Spheres -->
      <div class="orb w-[500px] h-[500px] bg-[#287BFF]/20 -top-24 -left-20"></div>
      <div class="orb w-[600px] h-[600px] bg-[#873CFF]/20 -bottom-32 -right-20"></div>
      <div class="orb w-[350px] h-[350px] bg-[#00D9FF]/15 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"></div>

      <!-- Canvas for dynamic background particle plexus -->
      <canvas id="heroPlexusCanvas" class="absolute inset-0 pointer-events-none opacity-40"></canvas>

      <div class="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full z-10">
        
        <!-- Live Status Ticker Pill -->
        <div class="flex items-center justify-center sm:justify-start mb-6">
          <div class="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 backdrop-blur-xl shadow-lg">
            <span class="flex h-2 w-2 relative">
              <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#00D9FF] opacity-75"></span>
              <span class="relative inline-flex rounded-full h-2 w-2 bg-[#00D9FF]"></span>
            </span>
            <span class="text-xs font-mono font-semibold tracking-wider uppercase text-slate-300">
              REUBEN TECH INTEL FEED • NOV 2026 EDITION
            </span>
            <span class="text-xs font-bold text-[#FF7138] hidden sm:inline">LIVE</span>
          </div>
        </div>

        <div class="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          <!-- Left Column: Master Headline & CTAs -->
          <div class="lg:col-span-7 space-y-6 text-center sm:text-left">
            
            <h1 class="text-4xl sm:text-6xl xl:text-7xl font-black tracking-tight leading-[1.08] text-white">
              THE FUTURE IS <br class="hidden sm:inline" />
              <span class="gradient-text">HAPPENING NOW.</span>
            </h1>

            <p class="text-lg sm:text-xl text-slate-300 max-w-2xl font-normal leading-relaxed">
              Explore the innovations, technologies and ideas transforming the world around us — from room-temperature silicon photonics to autonomous multi-agent intelligence.
            </p>

            <!-- Buttons: Read More & Explore Technology -->
            <div class="flex flex-wrap items-center justify-center sm:justify-start gap-4 pt-2">
              <button data-article-id="${heroArticle.id}" class="btn-open-article inline-flex items-center gap-2.5 px-7 py-4 rounded-2xl text-base font-bold text-white bg-gradient-to-r from-[#287BFF] via-[#873CFF] to-[#00D9FF] shadow-xl shadow-[#287BFF]/30 hover:shadow-[#00D9FF]/40 btn-shimmer transition-all transform hover:-translate-y-0.5 focus:outline-none">
                <span>Read Featured Story</span>
                <svg class="w-5 h-5 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
              </button>

              <a href="#/gadgets" class="inline-flex items-center gap-2.5 px-7 py-4 rounded-2xl text-base font-bold text-white bg-white/5 hover:bg-white/10 border border-white/15 hover:border-[#00D9FF]/50 transition-all transform hover:-translate-y-0.5 backdrop-blur-md">
                <svg class="w-5 h-5 text-[#00D9FF]" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2"><rect width="16" height="20" x="4" y="2" rx="2"/><path d="M12 18h.01"/></svg>
                <span>Explore Technology</span>
              </a>
            </div>

            <!-- Small Trending Topic Indicators -->
            <div class="pt-6 border-t border-white/10">
              <div class="flex items-center gap-2 mb-3">
                <span class="text-xs font-mono font-bold uppercase tracking-wider text-slate-400">Trending Now:</span>
                <span class="inline-block w-1.5 h-1.5 rounded-full bg-[#00D9FF]"></span>
              </div>
              <div class="flex flex-wrap items-center justify-center sm:justify-start gap-2">
                ${TRENDING_TOPICS.slice(0, 5).map(topic => `
                  <a href="#/news" class="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium bg-white/5 hover:bg-[#287BFF]/20 border border-white/10 hover:border-[#287BFF]/50 text-slate-300 hover:text-white transition-all">
                    <span class="text-[#00D9FF] font-mono">${topic.tag}</span>
                    <span class="text-[10px] text-slate-400">(${topic.growth})</span>
                  </a>
                `).join('')}
              </div>
            </div>

          </div>

          <!-- Right Column: Featured Technology Story Holographic Card -->
          <div class="lg:col-span-5">
            <div class="relative group">
              <!-- Animated Glowing Backdrop Edge -->
              <div class="absolute -inset-1 rounded-3xl bg-gradient-to-r from-[#287BFF] via-[#873CFF] to-[#00D9FF] opacity-50 blur-xl group-hover:opacity-80 transition duration-1000 group-hover:duration-200 animate-pulse"></div>

              <div class="relative rounded-3xl glass-panel p-6 overflow-hidden border border-white/15">
                
                <!-- Story Hero Image -->
                <div class="relative w-full h-64 sm:h-72 rounded-2xl overflow-hidden mb-5">
                  <img src="${heroArticle.image}" alt="${heroArticle.title}" class="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700">
                  <div class="absolute inset-0 bg-gradient-to-t from-[#101426] via-transparent to-transparent opacity-85"></div>
                  
                  <!-- Category & Exclusive Pill -->
                  <div class="absolute top-4 left-4 flex items-center gap-2">
                    <span class="badge-pill bg-[#287BFF] text-white shadow-lg shadow-[#287BFF]/40">
                      ${heroArticle.category}
                    </span>
                    <span class="badge-pill bg-[#FF7138] text-white">
                      WORLD EXCLUSIVE
                    </span>
                  </div>

                  <!-- Read Time Floating Badge -->
                  <div class="absolute bottom-4 right-4 px-3 py-1 rounded-lg bg-black/60 backdrop-blur-md text-xs font-mono text-white flex items-center gap-1.5 border border-white/10">
                    <svg class="w-3.5 h-3.5 text-[#00D9FF]" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2"><circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/></svg>
                    <span>${heroArticle.readTime}</span>
                  </div>
                </div>

                <!-- Story Metadata -->
                <div class="space-y-3">
                  <div class="flex items-center gap-3 text-xs text-slate-400 font-mono">
                    <span>${heroArticle.date}</span>
                    <span>•</span>
                    <span class="text-[#00D9FF]">${heroArticle.views.toLocaleString()} reads</span>
                  </div>

                  <h3 class="text-xl sm:text-2xl font-bold text-white group-hover:text-[#00D9FF] transition-colors leading-snug">
                    ${heroArticle.title}
                  </h3>

                  <p class="text-sm text-slate-300 line-clamp-2 leading-relaxed">
                    ${heroArticle.subtitle}
                  </p>

                  <!-- Author Row & Interactive Card Read CTA -->
                  <div class="pt-4 mt-2 border-t border-white/10 flex items-center justify-between">
                    <div class="flex items-center gap-2.5">
                      <img src="${heroArticle.author.avatar}" alt="${heroArticle.author.name}" class="w-9 h-9 rounded-full object-cover ring-2 ring-[#287BFF]">
                      <div>
                        <div class="text-xs font-bold text-white">${heroArticle.author.name}</div>
                        <div class="text-[10px] text-slate-400">${heroArticle.author.role}</div>
                      </div>
                    </div>

                    <button data-article-id="${heroArticle.id}" class="btn-open-article p-2.5 rounded-xl bg-white/5 hover:bg-[#287BFF] text-[#00D9FF] hover:text-white transition-all" title="Read Complete Story">
                      <svg class="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
                    </button>
                  </div>

                </div>

              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  `;
}

