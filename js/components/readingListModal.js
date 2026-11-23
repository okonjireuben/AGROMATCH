// REUBEN TECH - Feature 5: Personal Reading List Component
import { ARTICLES } from '../data.js';

export function renderReadingListModal() {
  return `
    <div id="readingListDrawer" class="fixed inset-y-0 right-0 z-50 w-full max-w-md bg-[#101426] border-l border-white/10 shadow-2xl transform translate-x-full transition-transform duration-300 flex flex-col">
      
      <!-- Drawer Header -->
      <div class="p-6 border-b border-white/10 flex items-center justify-between">
        <div class="flex items-center gap-2.5">
          <div class="w-8 h-8 rounded-lg bg-[#287BFF]/20 text-[#00D9FF] flex items-center justify-center">
            <svg class="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2"><path d="m19 21-7-4-7 4V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v16z"/></svg>
          </div>
          <div>
            <h3 class="text-base font-bold text-white">Personal Reading List</h3>
            <span class="text-xs text-slate-400 font-mono">Saved Articles for Offline Sync</span>
          </div>
        </div>

        <button id="btnCloseReadingList" class="p-2 rounded-xl text-slate-400 hover:text-white hover:bg-white/10">
          <svg class="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg>
        </button>
      </div>

      <!-- Drawer Body: Saved Articles -->
      <div id="savedArticlesList" class="flex-grow overflow-y-auto p-6 space-y-4">
        <!-- Rendered dynamically -->
      </div>

      <!-- Drawer Footer -->
      <div class="p-6 border-t border-white/10 bg-[#0B0E1B] flex items-center justify-between">
        <button id="btnClearReadingList" class="text-xs font-mono text-rose-400 hover:text-rose-300 transition-colors">
          Clear All Saved
        </button>
        <span class="text-xs font-mono text-slate-400">Auto-saved to device</span>
      </div>

    </div>
  `;
}

