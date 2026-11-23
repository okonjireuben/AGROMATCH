// REUBEN TECH - Feature 8: Tech Explainer Flashcards
import { EXPLAINERS } from '../data.js';

export function renderExplainerModal() {
  return `
    <div id="explainerModal" class="fixed inset-0 z-50 hidden flex items-center justify-center p-3 sm:p-6 bg-black/85 backdrop-blur-md">
      <div class="relative w-full max-w-4xl max-h-[92vh] rounded-3xl glass-panel p-6 sm:p-8 border border-white/20 shadow-2xl overflow-y-auto modal-enter flex flex-col">
        
        <!-- Header -->
        <div class="flex items-center justify-between pb-6 border-b border-white/10">
          <div class="flex items-center gap-3">
            <div class="w-10 h-10 rounded-xl bg-gradient-to-tr from-[#00D9FF] to-[#287BFF] flex items-center justify-center text-white shadow-lg shadow-[#00D9FF]/20">
              <svg class="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2"><path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/></svg>
            </div>
            <div>
              <h3 class="text-xl sm:text-2xl font-black text-white">REUBEN TECH EXPLAINER</h3>
              <p class="text-xs text-slate-400">Complex innovations distilled into plain English — toggle between ELI5 and Engineering Deep Dive.</p>
            </div>
          </div>

          <button id="btnCloseExplainerModal" class="p-2 rounded-xl text-slate-400 hover:text-white hover:bg-white/10">
            <svg class="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg>
          </button>
        </div>

        <!-- Explainer Cards Carousel / Grid -->
        <div class="grid grid-cols-1 md:grid-cols-2 gap-6 py-6">
          ${EXPLAINERS.map((exp, idx) => `
            <div class="rounded-3xl glass-panel p-6 border border-white/10 flex flex-col justify-between" id="explainer-card-${exp.id}">
              <div>
                
                <!-- Topic Pill -->
                <div class="flex items-center justify-between mb-3">
                  <span class="badge-pill bg-white/5 text-[#00D9FF] border border-white/10 text-[10px]">
                    ${exp.badge}
                  </span>
                  
                  <!-- Mode Switcher (ELI5 vs Deep Dive) -->
                  <div class="flex items-center p-0.5 rounded-lg bg-black/40 border border-white/10 text-[11px] font-mono">
                    <button class="explainer-mode-toggle active px-2.5 py-1 rounded-md text-white bg-[#287BFF]" data-id="${exp.id}" data-mode="eli5">ELI5</button>
                    <button class="explainer-mode-toggle px-2.5 py-1 rounded-md text-slate-400 hover:text-white" data-id="${exp.id}" data-mode="deep">Deep Dive</button>
                  </div>
                </div>

                <h4 class="text-lg font-bold text-white mb-3">${exp.title}</h4>

                <!-- Text Content Area (Dynamic depending on mode) -->
                <div class="explainer-text-body text-xs text-slate-300 leading-relaxed mb-4 bg-white/5 p-4 rounded-2xl border border-white/5 min-h-[110px]" id="explainer-body-${exp.id}">
                  ${exp.eli5}
                </div>

                <!-- Key Takeaway Bullets -->
                <div class="space-y-1.5 pt-2">
                  <span class="text-[10px] font-mono uppercase tracking-wider text-slate-400 font-bold">Key Facts:</span>
                  ${exp.keyPoints.map(kp => `
                    <div class="text-[11px] text-slate-300 flex items-start gap-2">
                      <span class="text-[#00D9FF] font-bold mt-0.5">•</span>
                      <span>${kp}</span>
                    </div>
                  `).join('')}
                </div>

              </div>
            </div>
          `).join('')}
        </div>

      </div>
    </div>
  `;
}

