// REUBEN TECH - Feature 3: AI Tool Directory Component & Modal
import { AI_TOOLS } from '../data.js';

export function renderAiDirectoryModal() {
  const categories = ['All', 'LLMs & Reasoning', 'Code Assistants', 'Image & Video', 'Audio & Voice', 'Productivity'];

  return `
    <div id="aiDirectoryModal" class="fixed inset-0 z-50 hidden flex items-center justify-center p-3 sm:p-6 bg-black/85 backdrop-blur-md">
      <div class="relative w-full max-w-5xl max-h-[92vh] rounded-3xl glass-panel p-6 sm:p-8 border border-[#873CFF]/30 shadow-2xl overflow-y-auto modal-enter flex flex-col">
        
        <!-- Header -->
        <div class="flex items-center justify-between pb-6 border-b border-white/10">
          <div class="flex items-center gap-3">
            <div class="w-10 h-10 rounded-xl bg-gradient-to-tr from-[#873CFF] to-[#00D9FF] flex items-center justify-center text-white shadow-lg shadow-[#873CFF]/25">
              <svg class="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2"><path d="M12 2a10 10 0 1 0 10 10H12V2z"/><path d="M12 12 2.1 12a10.1 10.1 0 0 0 1.9 4.3"/><path d="M12 12l4.3 7.9a10 10 0 0 0 4.3-1.9"/></svg>
            </div>
            <div>
              <h3 class="text-xl sm:text-2xl font-black text-white">FRONTIER AI TOOL DIRECTORY</h3>
              <p class="text-xs text-slate-400">Curated, tested, and vetted generative models, coding engines & multi-agent systems.</p>
            </div>
          </div>

          <button id="btnCloseAiDirectory" class="p-2 rounded-xl text-slate-400 hover:text-white hover:bg-white/10">
            <svg class="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg>
          </button>
        </div>

        <!-- Search & Category Filters -->
        <div class="py-5 border-b border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div class="relative w-full sm:w-72">
            <input 
              id="aiDirectorySearch" 
              type="text" 
              placeholder="Search AI tools (e.g. Claude, Cursor)..." 
              class="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-2 text-xs text-white placeholder-slate-400 focus:outline-none focus:border-[#00D9FF]"
            >
          </div>

          <div class="flex items-center gap-2 overflow-x-auto w-full sm:w-auto pb-1 sm:pb-0">
            ${categories.map(c => `
              <button class="ai-dir-cat-btn px-3 py-1.5 rounded-lg text-xs font-semibold whitespace-nowrap transition-all ${c === 'All' ? 'bg-[#873CFF] text-white' : 'bg-white/5 text-slate-300 hover:text-white'}" data-category="${c}">
                ${c}
              </button>
            `).join('')}
          </div>
        </div>

        <!-- Directory Cards Grid -->
        <div id="aiDirectoryGrid" class="grid grid-cols-1 md:grid-cols-2 gap-4 py-6 flex-grow">
          <!-- Dynamically populated -->
        </div>

      </div>
    </div>
  `;
}

