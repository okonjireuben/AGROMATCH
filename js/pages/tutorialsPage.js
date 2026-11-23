// REUBEN TECH - Technology Tutorials Dedicated Page (Page 8)
import { TUTORIALS } from '../data.js';

export function renderTutorialsPage() {
  return `
    <div class="py-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
      
      <!-- Tutorials Hero Header -->
      <div class="rounded-3xl glass-panel p-8 sm:p-12 border border-white/10 relative overflow-hidden bg-gradient-to-br from-[#102333] via-[#101426] to-[#0D111D]">
        <div class="orb w-96 h-96 bg-[#00D9FF]/20 -top-20 -left-20"></div>

        <div class="relative z-10 max-w-3xl space-y-4">
          <span class="badge-pill bg-[#00D9FF] text-[#101426] font-bold text-xs">PRACTICAL ENGINEERING</span>
          <h1 class="text-3xl sm:text-5xl font-black text-white tracking-tight">
            Technology <span class="gradient-text-cyan">Tutorials</span> & Manuals
          </h1>
          <p class="text-slate-300 text-base sm:text-lg">
            Tested blueprints for deploying offline AI models, tuning Wi-Fi 7 home meshes, optimizing GPU drivers, and securing digital identities.
          </p>
        </div>
      </div>

      <!-- Tutorial Cards Grid with Interactive Steps -->
      <div class="space-y-8">
        ${TUTORIALS.map(t => `
          <div class="rounded-3xl glass-panel p-6 sm:p-8 border border-white/10 space-y-6">
            <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-white/10">
              <div>
                <div class="flex items-center gap-2 mb-2">
                  <span class="badge-pill bg-[#00D9FF]/20 text-[#00D9FF] text-xs font-mono">${t.category}</span>
                  <span class="badge-pill bg-white/10 text-white text-xs">${t.difficulty}</span>
                </div>
                <h2 class="text-xl sm:text-2xl font-bold text-white">${t.title}</h2>
                <div class="text-xs text-slate-400 font-mono mt-1">${t.readTime} • Author: ${t.author} • Updated: ${t.date}</div>
              </div>
            </div>

            <p class="text-sm text-slate-300 leading-relaxed">${t.overview}</p>

            <!-- Steps Accordion / Breakdown -->
            <div class="space-y-4">
              <h3 class="text-xs font-mono font-bold uppercase tracking-wider text-[#00D9FF]">Implementation Walkthrough:</h3>
              ${t.steps.map(step => `
                <div class="p-4 rounded-2xl bg-white/5 border border-white/5 space-y-2">
                  <div class="flex items-center gap-2 font-bold text-sm text-white">
                    <span class="w-6 h-6 rounded-full bg-[#287BFF] text-white text-xs flex items-center justify-center font-mono">${step.stepNumber}</span>
                    <span>${step.title}</span>
                  </div>
                  <p class="text-xs text-slate-300 ml-8 leading-relaxed">${step.detail}</p>
                  ${step.code ? `
                    <div class="ml-8 mt-2 p-3 rounded-xl bg-black/60 border border-white/10 font-mono text-xs text-[#00D9FF] overflow-x-auto">
                      <code>${step.code.replace(/</g, '&lt;').replace(/>/g, '&gt;')}</code>
                    </div>
                  ` : ''}
                </div>
              `).join('')}
            </div>

          </div>
        `).join('')}
      </div>

    </div>
  `;
}

