// REUBEN TECH - Tech Tutorials (Section H)
import { TUTORIALS } from '../data.js';

export function renderTutorials() {
  return `
    <section class="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      
      <!-- Section Header -->
      <div class="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-10 border-b border-white/10">
        <div>
          <div class="flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-widest text-[#00D9FF] mb-2">
            <span class="w-2 h-2 rounded-full bg-[#00D9FF]"></span>
            MASTERCLASS & KNOWLEDGE BASE
          </div>
          <h2 class="text-3xl sm:text-5xl font-black text-white tracking-tight">
            Tech <span class="gradient-text-cyan">Tutorials</span>
          </h2>
          <p class="text-slate-400 text-sm mt-2 max-w-xl">
            Practical walkthroughs for power users, developers, and hardware enthusiasts. Fully tested step-by-step guides.
          </p>
        </div>

        <a href="#/tutorials" class="inline-flex items-center gap-2 text-xs font-bold text-[#00D9FF] hover:text-white transition-colors">
          <span>View All 40+ Guides</span>
          <svg class="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
        </a>
      </div>

      <!-- Tutorials Grid -->
      <div class="grid grid-cols-1 lg:grid-cols-3 gap-8 mt-10">
        ${TUTORIALS.map(tut => `
          <div class="rounded-3xl glass-panel p-6 border border-white/10 hover-card flex flex-col justify-between group">
            <div>
              
              <!-- Image & Badges -->
              <div class="relative w-full h-44 rounded-2xl overflow-hidden mb-5">
                <img src="${tut.image}" alt="${tut.title}" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500">
                <div class="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
                
                <span class="absolute top-3 left-3 badge-pill bg-[#00D9FF]/90 text-[#101426] font-bold text-[10px]">
                  ${tut.category}
                </span>

                <span class="absolute top-3 right-3 badge-pill ${tut.difficulty === 'Beginner' ? 'bg-emerald-500/80' : tut.difficulty === 'Intermediate' ? 'bg-amber-500/80' : 'bg-rose-500/80'} text-white text-[10px]">
                  ${tut.difficulty}
                </span>

                <div class="absolute bottom-3 left-3 right-3 flex items-center justify-between text-xs text-slate-300 font-mono">
                  <span>${tut.readTime}</span>
                  <span>By ${tut.author}</span>
                </div>
              </div>

              <!-- Title -->
              <h3 class="text-lg font-bold text-white group-hover:text-[#00D9FF] transition-colors leading-snug mb-3">
                ${tut.title}
              </h3>

              <p class="text-xs text-slate-300 line-clamp-2 leading-relaxed mb-6">
                ${tut.summary}
              </p>

              <!-- Step Preview Checklist -->
              <div class="space-y-2 mb-6">
                <span class="text-[11px] font-mono text-slate-400 uppercase tracking-wider block">Key Phases:</span>
                ${tut.steps.slice(0, 3).map(st => `
                  <div class="flex items-start gap-2.5 text-xs text-slate-300">
                    <span class="w-4 h-4 rounded-full bg-white/10 text-[10px] font-mono flex items-center justify-center flex-shrink-0 text-[#00D9FF] mt-0.5">${st.stepNumber}</span>
                    <span class="truncate">${st.title}</span>
                  </div>
                `).join('')}
              </div>

            </div>

            <!-- Footer Link -->
            <div class="pt-4 border-t border-white/10 flex items-center justify-between">
              <span class="text-xs font-mono text-slate-400">${tut.steps.length} Verified Steps</span>
              <button data-tutorial-id="${tut.id}" class="btn-open-tutorial text-xs font-bold text-[#00D9FF] hover:text-white flex items-center gap-1 transition-colors">
                <span>Start Tutorial</span>
                <svg class="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
              </button>
            </div>

          </div>
        `).join('')}
      </div>

    </section>
  `;
}

