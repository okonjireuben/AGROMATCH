// REUBEN TECH - Future Innovations Dedicated Page (Page 9)
import { ARTICLES } from '../data.js';

export function renderFuturePage() {
  const futureArticles = ARTICLES.filter(a => a.category.includes('AI & Innovation') || a.tags.includes('Deep Tech') || a.tags.includes('Quantum') || a.tags.includes('CleanTech'));

  return `
    <div class="py-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
      
      <!-- Future Hero -->
      <div class="rounded-3xl glass-panel p-8 sm:p-12 border border-[#00D9FF]/30 relative overflow-hidden bg-gradient-to-br from-[#0F1E38] via-[#101426] to-[#0A0D18]">
        <div class="orb w-96 h-96 bg-[#00D9FF]/20 -top-20 -right-20"></div>

        <div class="relative z-10 max-w-3xl space-y-4">
          <span class="badge-pill bg-[#00D9FF] text-[#101426] font-bold text-xs">SPECULATIVE & DEEP TECH</span>
          <h1 class="text-3xl sm:text-5xl font-black text-white tracking-tight">
            Future <span class="gradient-text-cyan">Innovations</span> & Horizons
          </h1>
          <p class="text-slate-300 text-base sm:text-lg">
            Investigating the technologies that seem impossible today: room-temperature optical computing, solid-state battery grids, neural interfaces, and beyond.
          </p>
        </div>
      </div>

      <!-- Frontier Timeline Matrix -->
      <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
        
        <div class="rounded-3xl glass-panel p-6 border border-white/10 space-y-3">
          <span class="text-xs font-mono font-bold text-[#00D9FF]">2026 - 2028</span>
          <h3 class="text-lg font-bold text-white">Silicon Photonics Integration</h3>
          <p class="text-xs text-slate-300 leading-relaxed">
            Standard CMOS foundries replace copper trace signaling with optical waveguides, collapsing data center electrical draw by 80%.
          </p>
          <div class="text-[11px] font-mono text-emerald-400">Status: Active Production Validation</div>
        </div>

        <div class="rounded-3xl glass-panel p-6 border border-white/10 space-y-3">
          <span class="text-xs font-mono font-bold text-[#873CFF]">2028 - 2030</span>
          <h3 class="text-lg font-bold text-white">Solid-State 1000Wh/L Batteries</h3>
          <p class="text-xs text-slate-300 leading-relaxed">
            Lithium-metal anodes and ceramic separators eliminate liquid electrolyte thermal runaway, delivering 1,000 km range in 10-minute charges.
          </p>
          <div class="text-[11px] font-mono text-[#00D9FF]">Status: Pilot Gigafactories Online</div>
        </div>

        <div class="rounded-3xl glass-panel p-6 border border-white/10 space-y-3">
          <span class="text-xs font-mono font-bold text-[#FF7138]">2030 - 2035</span>
          <h3 class="text-lg font-bold text-white">Fault-Tolerant Quantum Chemistry</h3>
          <p class="text-xs text-slate-300 leading-relaxed">
            Surface code error correction allows 10,000 logical qubits to simulate room-temperature superconductors and enzymatic catalysts.
          </p>
          <div class="text-[11px] font-mono text-amber-400">Status: Optical Lattice Prototypes</div>
        </div>

      </div>

      <!-- In-Depth Future Articles -->
      <div class="space-y-6">
        <h2 class="text-xl font-bold text-white">Deep Tech Investigations</h2>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          ${futureArticles.map(art => `
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
                <button data-article-id="${art.id}" class="btn-open-article text-xs font-bold text-[#00D9FF] hover:text-white">Read Investigation →</button>
              </div>
            </div>
          `).join('')}
        </div>
      </div>

    </div>
  `;
}

