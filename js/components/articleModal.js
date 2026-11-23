// REUBEN TECH - Section 6: Article Reading Experience Modal
import { ARTICLES } from '../data.js';

export function renderArticleModal(articleId = null, isSaved = false) {
  const article = ARTICLES.find(a => a.id === articleId) || ARTICLES[0];
  const relatedArticles = ARTICLES.filter(a => a.id !== article.id).slice(0, 3);

  return `
    <div id="articleModal" class="fixed inset-0 z-50 hidden flex items-start justify-center p-0 sm:p-4 md:p-6 bg-black/90 backdrop-blur-xl overflow-y-auto">
      <div class="relative w-full max-w-4xl min-h-screen sm:min-h-0 sm:rounded-3xl glass-panel border border-white/20 shadow-2xl modal-enter overflow-hidden bg-[#101426] my-auto">
        
        <!-- Sticky Article Top Bar -->
        <div class="sticky top-0 z-30 flex items-center justify-between px-6 py-4 glass-nav border-b border-white/10">
          <div class="flex items-center gap-2">
            <span class="badge-pill bg-[#287BFF] text-white text-[10px] font-mono">
              ${article.category}
            </span>
            <span class="text-xs font-mono text-slate-400 hidden sm:inline">• ${article.readTime}</span>
          </div>

          <!-- Controls: Save, Share, Close -->
          <div class="flex items-center gap-2">
            <button id="btnArticleBookmark" class="p-2 rounded-xl ${isSaved ? 'bg-[#287BFF] text-white' : 'bg-white/5 text-slate-300 hover:text-white'} border border-white/10 transition-all" title="Save to Reading List">
              <svg class="w-4 h-4" viewBox="0 0 24 24" fill="${isSaved ? 'currentColor' : 'none'}" stroke="currentColor" stroke-width="2.2">
                <path d="m19 21-7-4-7 4V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v16z"/>
              </svg>
            </button>

            <button id="btnArticleShare" class="p-2 rounded-xl bg-white/5 text-slate-300 hover:text-white border border-white/10 transition-all" title="Share Article Link">
              <svg class="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2"><circle cx="18" cy="5" r="3"/><circle cx="6" cy="12" r="3"/><circle cx="18" cy="19" r="3"/><line x1="8.59" x2="15.42" y1="13.51" y2="17.49"/><line x1="15.41" x2="8.59" y1="6.51" y2="10.49"/></svg>
            </button>

            <button id="btnCloseArticleModal" class="p-2 rounded-xl text-slate-400 hover:text-white hover:bg-white/10 ml-2">
              <svg class="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg>
            </button>
          </div>
        </div>

        <!-- Article Content Hero Banner -->
        <div class="relative w-full h-72 sm:h-96 overflow-hidden">
          <img id="articleFeaturedImg" src="${article.image}" alt="${article.title}" class="w-full h-full object-cover">
          <div class="absolute inset-0 bg-gradient-to-t from-[#101426] via-[#101426]/40 to-transparent"></div>
          
          <div class="absolute bottom-6 left-6 right-6">
            <h1 id="articleModalTitle" class="text-2xl sm:text-4xl font-black text-white leading-tight mb-3">
              ${article.title}
            </h1>
            <p id="articleModalSubtitle" class="text-sm sm:text-base text-slate-300 line-clamp-2 max-w-3xl">
              ${article.subtitle}
            </p>
          </div>
        </div>

        <div class="p-6 sm:p-10 space-y-8 max-w-3xl mx-auto">
          
          <!-- Author Info Card -->
          <div class="flex flex-wrap items-center justify-between gap-4 py-4 border-y border-white/10">
            <div class="flex items-center gap-3">
              <img id="articleAuthorImg" src="${article.author.avatar}" alt="${article.author.name}" class="w-12 h-12 rounded-full object-cover ring-2 ring-[#287BFF]">
              <div>
                <div class="flex items-center gap-2">
                  <span id="articleAuthorName" class="text-sm font-bold text-white">${article.author.name}</span>
                  <span class="inline-flex items-center gap-1 text-[10px] text-emerald-400 font-mono bg-emerald-500/10 px-1.5 py-0.5 rounded border border-emerald-500/20">
                    <svg class="w-3 h-3" viewBox="0 0 24 24" fill="currentColor"><path d="M9 16.17 4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/></svg>
                    Verified Editor
                  </span>
                </div>
                <div id="articleAuthorRole" class="text-xs text-slate-400 font-mono">${article.author.role} • ${article.date}</div>
              </div>
            </div>

            <!-- Reading Stats -->
            <div class="flex items-center gap-3 text-xs font-mono text-slate-400">
              <span class="flex items-center gap-1 text-[#00D9FF]">
                <svg class="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z"/><circle cx="12" cy="12" r="3"/></svg>
                <span id="articleViewsCount">${article.views.toLocaleString()}</span> views
              </span>
              <span>•</span>
              <button id="btnLikeArticle" class="flex items-center gap-1 text-rose-400 hover:text-rose-300 transition-colors">
                <svg class="w-4 h-4" viewBox="0 0 24 24" fill="currentColor"><path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"/></svg>
                <span id="articleLikesCount">${article.likes.toLocaleString()}</span>
              </button>
            </div>
          </div>

          <!-- Audio Article Reader (TTS Simulation) -->
          <div class="p-4 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-between gap-4">
            <div class="flex items-center gap-3">
              <button id="btnToggleAudioArticle" class="w-10 h-10 rounded-xl bg-gradient-to-r from-[#287BFF] to-[#00D9FF] text-white flex items-center justify-center flex-shrink-0 shadow-md">
                <svg id="audioPlayIcon" class="w-5 h-5 ml-0.5" viewBox="0 0 24 24" fill="currentColor"><polygon points="5 3 19 12 5 21 5 3"/></svg>
                <svg id="audioPauseIcon" class="w-5 h-5 hidden" viewBox="0 0 24 24" fill="currentColor"><rect x="6" y="4" width="4" height="16"/><rect x="14" y="4" width="4" height="16"/></svg>
              </button>
              <div>
                <div class="text-xs font-bold text-white flex items-center gap-2">
                  <span>Listen to this Dispatch</span>
                  <span class="text-[10px] font-mono text-[#00D9FF] bg-[#00D9FF]/10 px-2 py-0.5 rounded">AI Audio</span>
                </div>
                <div class="text-[11px] text-slate-400 font-mono">Narrated by Reuben AI Synthesis Engine</div>
              </div>
            </div>

            <!-- Waveform Animation -->
            <div id="audioWaveform" class="hidden sm:flex items-center gap-1 h-6">
              <div class="audio-bar"></div>
              <div class="audio-bar"></div>
              <div class="audio-bar"></div>
              <div class="audio-bar"></div>
              <div class="audio-bar"></div>
            </div>
          </div>

          <!-- Key Takeaways Callout Box -->
          <div class="p-6 rounded-3xl bg-gradient-to-br from-[#287BFF]/10 via-[#873CFF]/10 to-transparent border border-[#287BFF]/30 space-y-3">
            <div class="flex items-center gap-2 text-xs font-mono font-bold text-[#00D9FF] uppercase tracking-wider">
              <svg class="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="20 6 9 17 4 12"/></svg>
              Executive Key Takeaways
            </div>
            <ul id="articleTakeawaysList" class="space-y-2 text-xs sm:text-sm text-slate-300">
              ${article.takeaways ? article.takeaways.map(t => `<li class="flex items-start gap-2"><span class="text-[#00D9FF] font-bold mt-1">▸</span><span>${t}</span></li>`).join('') : ''}
            </ul>
          </div>

          <!-- Main Article HTML Body -->
          <div id="articleHtmlBody" class="article-body">
            ${article.content}
          </div>

          <!-- Article Tags -->
          <div class="pt-6 border-t border-white/10 flex flex-wrap gap-2">
            ${article.tags.map(t => `<span class="badge-pill bg-white/5 border border-white/10 text-slate-300 text-xs">#${t}</span>`).join('')}
          </div>

          <!-- Interactive Comments Section -->
          <div class="pt-10 border-t border-white/10 space-y-6">
            <div class="flex items-center justify-between">
              <h3 class="text-xl font-bold text-white">Discussion & Community Analysis</h3>
              <span class="text-xs font-mono text-slate-400">3 Responses</span>
            </div>

            <!-- Add Comment Input Box -->
            <form id="commentForm" class="space-y-3">
              <textarea id="commentInput" rows="3" placeholder="Share your perspective on this architecture..." class="w-full p-4 rounded-2xl bg-white/5 border border-white/15 text-sm text-white placeholder-slate-400 focus:outline-none focus:border-[#00D9FF]"></textarea>
              <div class="flex justify-end">
                <button type="submit" class="px-5 py-2.5 rounded-xl bg-gradient-to-r from-[#287BFF] to-[#873CFF] text-xs font-bold text-white hover:opacity-95 shadow-lg shadow-[#287BFF]/25">
                  Publish Comment
                </button>
              </div>
            </form>

            <!-- Comments List -->
            <div id="commentsList" class="space-y-4">
              <div class="p-4 rounded-2xl bg-white/5 border border-white/5 space-y-2">
                <div class="flex items-center justify-between text-xs">
                  <span class="font-bold text-white">Dr. Sarah Vance (CERN Fellow)</span>
                  <span class="text-slate-400 font-mono">2h ago</span>
                </div>
                <p class="text-xs text-slate-300">
                  The waveguide attenuation measurements in this report are monumental. Overcoming sub-picosecond jitter with room-temperature lasers unlocks clustered compute topologies previously thought impossible.
                </p>
              </div>
            </div>
          </div>

          <!-- Related Articles Grid -->
          <div class="pt-10 border-t border-white/10">
            <h4 class="text-lg font-bold text-white mb-4">Related Intelligence Stories</h4>
            <div class="grid grid-cols-1 sm:grid-cols-3 gap-4">
              ${relatedArticles.map(rel => `
                <div class="rounded-2xl glass-panel p-3 border border-white/10 hover-card group cursor-pointer btn-open-article" data-article-id="${rel.id}">
                  <div class="w-full h-24 rounded-xl overflow-hidden mb-2">
                    <img src="${rel.image}" alt="${rel.title}" class="w-full h-full object-cover group-hover:scale-105 transition-transform">
                  </div>
                  <h5 class="text-xs font-bold text-white group-hover:text-[#00D9FF] line-clamp-2 leading-snug">
                    ${rel.title}
                  </h5>
                  <div class="text-[10px] text-slate-400 font-mono mt-1">${rel.readTime}</div>
                </div>
              `).join('')}
            </div>
          </div>

        </div>

      </div>
    </div>
  `;
}

