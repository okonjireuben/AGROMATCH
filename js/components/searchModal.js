// REUBEN TECH - Feature 7: Article Search Modal
import { ARTICLES, GADGETS } from '../data.js';

export function renderSearchModal() {
  return `
    <div id="searchModal" class="fixed inset-0 z-50 hidden flex items-start justify-center pt-16 sm:pt-24 px-4 bg-black/80 backdrop-blur-md transition-opacity">
      <div class="relative w-full max-w-2xl rounded-3xl glass-panel p-6 border border-white/20 shadow-2xl modal-enter overflow-hidden">
        
        <!-- Search Input Bar -->
        <div class="flex items-center gap-3 pb-4 border-b border-white/10">
          <svg class="w-5 h-5 text-[#00D9FF] flex-shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">
            <circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/>
          </svg>
          <input 
            id="searchInputField" 
            type="text" 
            placeholder="Search news, hardware, AI models, specs, tutorials..." 
            class="w-full bg-transparent text-white placeholder-slate-400 text-base focus:outline-none"
            autocomplete="off"
          >
          <button id="btnCloseSearchModal" class="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-white/10">
            <svg class="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg>
          </button>
        </div>

        <!-- Filter Chips -->
        <div class="flex items-center gap-2 py-3 border-b border-white/5 overflow-x-auto text-xs">
          <span class="text-slate-400 font-mono text-[11px]">Filter:</span>
          <button class="search-type-chip px-2.5 py-1 rounded-lg bg-[#287BFF] text-white active" data-type="all">All</button>
          <button class="search-type-chip px-2.5 py-1 rounded-lg bg-white/5 text-slate-300 hover:text-white" data-type="articles">Articles</button>
          <button class="search-type-chip px-2.5 py-1 rounded-lg bg-white/5 text-slate-300 hover:text-white" data-type="gadgets">Gadgets</button>
        </div>

        <!-- Dynamic Search Results Container -->
        <div id="searchResultsContainer" class="max-h-[60vh] overflow-y-auto py-3 space-y-3">
          <div class="text-xs text-slate-400 text-center py-8">
            Type a search term above (e.g. "Silicon", "iPhone", "Quantum", "Wi-Fi 7")
          </div>
        </div>

        <!-- Keyboard Hints Footer -->
        <div class="pt-3 border-t border-white/10 flex items-center justify-between text-[11px] font-mono text-slate-400">
          <span>Navigate with mouse or keyboard</span>
          <span>ESC to close</span>
        </div>

      </div>
    </div>
  `;
}

