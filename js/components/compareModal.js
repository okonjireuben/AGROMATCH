// REUBEN TECH - Feature 2: Side-by-Side Product Comparison Tool
import { GADGETS } from '../data.js';

export function renderCompareModal() {
  return `
    <div id="compareModal" class="fixed inset-0 z-50 hidden flex items-center justify-center p-3 sm:p-6 bg-black/85 backdrop-blur-md">
      <div class="relative w-full max-w-5xl max-h-[92vh] rounded-3xl glass-panel p-6 sm:p-8 border border-white/20 shadow-2xl overflow-y-auto modal-enter flex flex-col">
        
        <!-- Header -->
        <div class="flex items-center justify-between pb-6 border-b border-white/10">
          <div class="flex items-center gap-3">
            <div class="w-10 h-10 rounded-xl bg-gradient-to-tr from-[#873CFF] to-[#287BFF] flex items-center justify-center text-white shadow-lg shadow-[#873CFF]/25">
              <svg class="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2"><path d="m16 3 4 4-4 4"/><path d="M20 7H4"/><path d="m8 21-4-4 4-4"/><path d="M4 17h16"/></svg>
            </div>
            <div>
              <h3 class="text-xl sm:text-2xl font-black text-white">HARDWARE COMPARISON LAB</h3>
              <p class="text-xs text-slate-400">Side-by-side spec evaluation, pros & cons delta, and benchmark scores.</p>
            </div>
          </div>

          <button id="btnCloseCompareModal" class="p-2 rounded-xl text-slate-400 hover:text-white hover:bg-white/10">
            <svg class="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg>
          </button>
        </div>

        <!-- Slot Selector Bar -->
        <div class="py-4 border-b border-white/10 flex flex-wrap items-center justify-between gap-4">
          <div class="flex items-center gap-2">
            <span class="text-xs font-mono font-bold text-slate-300">Select Devices to Compare:</span>
            <span class="text-[11px] text-[#00D9FF] font-mono">(Choose up to 3)</span>
          </div>

          <div class="flex items-center gap-2">
            <button id="btnResetCompare" class="text-xs font-mono text-slate-400 hover:text-white px-3 py-1.5 rounded-lg bg-white/5 border border-white/10">
              Reset Slots
            </button>
          </div>
        </div>

        <!-- Comparison Table / Matrix View -->
        <div id="compareMatrixContent" class="py-6 overflow-x-auto flex-grow">
          <!-- Dynamic compare slots injected here -->
        </div>

      </div>
    </div>
  `;
}

