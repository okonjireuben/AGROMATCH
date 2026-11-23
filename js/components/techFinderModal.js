// REUBEN TECH - Feature 1: Tech Finder Interactive Exploration Tool
import { GADGETS } from '../data.js';

export function renderTechFinderModal() {
  const brands = ['All', 'Apple', 'Samsung', 'Google', 'ASUS', 'Valve', 'Sony'];
  const categories = ['All', 'Smartphones', 'Laptops', 'Gaming devices', 'Smartwatches', 'Cameras'];

  return `
    <div id="techFinderModal" class="fixed inset-0 z-50 hidden flex items-center justify-center p-4 bg-black/80 backdrop-blur-md">
      <div class="relative w-full max-w-4xl max-h-[90vh] rounded-3xl glass-panel p-6 sm:p-8 border border-white/20 shadow-2xl overflow-y-auto modal-enter">
        
        <!-- Header -->
        <div class="flex items-center justify-between pb-6 border-b border-white/10">
          <div class="flex items-center gap-3">
            <div class="w-10 h-10 rounded-xl bg-gradient-to-tr from-[#287BFF] to-[#00D9FF] flex items-center justify-center text-white shadow-lg shadow-[#00D9FF]/20">
              <svg class="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/></svg>
            </div>
            <div>
              <h3 class="text-xl sm:text-2xl font-black text-white">REUBEN TECH FINDER</h3>
              <p class="text-xs text-slate-400">Filter hardware across verified lab scores, manufacturers & categories.</p>
            </div>
          </div>

          <button id="btnCloseTechFinder" class="p-2 rounded-xl text-slate-400 hover:text-white hover:bg-white/10">
            <svg class="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg>
          </button>
        </div>

        <!-- Filter Controls -->
        <div class="grid grid-cols-1 sm:grid-cols-3 gap-4 py-6 border-b border-white/10">
          
          <!-- Category Select -->
          <div>
            <label class="block text-xs font-mono font-bold uppercase tracking-wider text-slate-400 mb-2">Device Category</label>
            <select id="tfFilterCategory" class="w-full bg-[#101426] border border-white/15 rounded-xl px-3 py-2.5 text-xs text-white focus:outline-none focus:border-[#00D9FF]">
              ${categories.map(c => `<option value="${c}">${c}</option>`).join('')}
            </select>
          </div>

          <!-- Brand Select -->
          <div>
            <label class="block text-xs font-mono font-bold uppercase tracking-wider text-slate-400 mb-2">Manufacturer / Brand</label>
            <select id="tfFilterBrand" class="w-full bg-[#101426] border border-white/15 rounded-xl px-3 py-2.5 text-xs text-white focus:outline-none focus:border-[#00D9FF]">
              ${brands.map(b => `<option value="${b}">${b}</option>`).join('')}
            </select>
          </div>

          <!-- Minimum Score Select -->
          <div>
            <label class="block text-xs font-mono font-bold uppercase tracking-wider text-slate-400 mb-2">Minimum Lab Score</label>
            <select id="tfFilterScore" class="w-full bg-[#101426] border border-white/15 rounded-xl px-3 py-2.5 text-xs text-white focus:outline-none focus:border-[#00D9FF]">
              <option value="0">Any Score</option>
              <option value="9.4">9.4+ (Top Tier)</option>
              <option value="9.6">9.6+ (Near Perfection)</option>
            </select>
          </div>

        </div>

        <!-- Live Results Count -->
        <div class="flex items-center justify-between py-4 text-xs font-mono text-slate-400">
          <span id="tfMatchCount">Showing all hardware</span>
          <span>Click any product for full laboratory specifications</span>
        </div>

        <!-- Matching Gadget Results Grid -->
        <div id="tfResultsGrid" class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          <!-- Injected via JavaScript -->
        </div>

      </div>
    </div>
  `;
}

