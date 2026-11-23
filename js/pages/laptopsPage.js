// REUBEN TECH - Laptop Reviews Dedicated Page (Page 6)
import { GADGETS } from '../data.js';

export function renderLaptopsPage() {
  const laptops = GADGETS.filter(g => g.category === 'Laptops');

  return `
    <div class="py-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
      
      <!-- Laptops Hero -->
      <div class="rounded-3xl glass-panel p-8 sm:p-12 border border-white/10 relative overflow-hidden bg-gradient-to-br from-[#121938] to-[#101426]">
        <div class="orb w-96 h-96 bg-[#873CFF]/20 -bottom-20 -right-20"></div>

        <div class="relative z-10 max-w-3xl space-y-4">
          <span class="badge-pill bg-[#873CFF] text-white text-xs">WORKSTATION & SILICON LAB</span>
          <h1 class="text-3xl sm:text-5xl font-black text-white tracking-tight">
            Laptop <span class="gradient-text">Reviews</span> & Thermal Tests
          </h1>
          <p class="text-slate-300 text-base sm:text-lg">
            Thermal dissipation imaging, Cinebench 2024 rendering loops, keyboard ergonomics, and display delta-E color testing.
          </p>
        </div>
      </div>

      <!-- Laptop Benchmark Table -->
      <div class="rounded-3xl glass-panel p-6 sm:p-8 border border-white/10 space-y-4">
        <h2 class="text-xl font-bold text-white">Cinebench 2024 Multi-Core & Sustained Acoustic Noise</h2>
        <div class="overflow-x-auto">
          <table class="w-full text-left text-xs font-mono">
            <thead>
              <tr class="border-b border-white/10 text-slate-400">
                <th class="py-3 px-4">Laptop & Architecture</th>
                <th class="py-3 px-4">Cinebench 2024 (Multi)</th>
                <th class="py-3 px-4">Battery Compiling Loop</th>
                <th class="py-3 px-4">Full Load Acoustics</th>
                <th class="py-3 px-4">Weight</th>
              </tr>
            </thead>
            <tbody class="divide-y divide-white/5 text-slate-200">
              <tr>
                <td class="py-3.5 px-4 font-bold text-white">Apple MacBook Pro 16" (M4 Max)</td>
                <td class="py-3.5 px-4 text-emerald-400 font-bold">2,410 pts</td>
                <td class="py-3.5 px-4 text-emerald-400 font-bold">14h 20m</td>
                <td class="py-3.5 px-4 text-emerald-400 font-bold">28 dB (Whisper Silent)</td>
                <td class="py-3.5 px-4">2.16 kg</td>
              </tr>
              <tr>
                <td class="py-3.5 px-4 font-bold text-white">ASUS ROG Zephyrus G16 (RTX 4080)</td>
                <td class="py-3.5 px-4">1,940 pts</td>
                <td class="py-3.5 px-4">5h 45m</td>
                <td class="py-3.5 px-4 text-amber-400">46 dB (Audible Turbo)</td>
                <td class="py-3.5 px-4">1.85 kg</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <!-- Laptop Review Cards -->
      <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
        ${laptops.map(l => `
          <div class="rounded-3xl glass-panel p-6 border border-white/10 hover-card flex flex-col justify-between">
            <div>
              <div class="w-full h-64 rounded-2xl overflow-hidden mb-5 bg-black/40 relative">
                <img src="${l.image}" alt="${l.name}" class="w-full h-full object-cover">
                <span class="absolute top-4 left-4 badge-pill bg-[#873CFF] text-white text-[10px]">${l.highlightBadge}</span>
                <span class="absolute bottom-4 right-4 px-3 py-1 rounded-xl bg-black/80 font-mono text-sm font-bold text-[#00D9FF]">${l.rating} / 10</span>
              </div>
              <h3 class="text-xl font-bold text-white mb-1">${l.name}</h3>
              <p class="text-xs text-slate-400 font-mono mb-3">${l.price} • ${l.brand}</p>
              <p class="text-sm text-slate-300 leading-relaxed mb-6">${l.verdict}</p>

              <div class="p-4 rounded-2xl bg-white/5 space-y-2 text-xs font-mono mb-6">
                <div class="flex justify-between"><span class="text-slate-400">Display:</span> <span class="text-white">${l.specs.display.split(',')[0]}</span></div>
                <div class="flex justify-between"><span class="text-slate-400">Memory:</span> <span class="text-white">${l.specs.ram}</span></div>
                <div class="flex justify-between"><span class="text-slate-400">Weight:</span> <span class="text-white">${l.specs.weight}</span></div>
              </div>
            </div>

            <div class="pt-4 border-t border-white/10">
              <button data-gadget-id="${l.id}" class="btn-open-gadget w-full py-3 rounded-xl bg-gradient-to-r from-[#287BFF] to-[#873CFF] text-xs font-bold text-white shadow-lg shadow-[#287BFF]/25">
                Read Complete In-Depth Review
              </button>
            </div>
          </div>
        `).join('')}
      </div>

    </div>
  `;
}

