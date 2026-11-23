// REUBEN TECH - Feature 4: Tech Quiz Component
import { QUIZ_QUESTIONS } from '../data.js';

export function renderQuizModal() {
  return `
    <div id="quizModal" class="fixed inset-0 z-50 hidden flex items-center justify-center p-3 sm:p-6 bg-black/85 backdrop-blur-md">
      <div class="relative w-full max-w-2xl max-h-[92vh] rounded-3xl glass-panel p-6 sm:p-8 border border-white/20 shadow-2xl overflow-y-auto modal-enter flex flex-col">
        
        <!-- Header -->
        <div class="flex items-center justify-between pb-6 border-b border-white/10">
          <div class="flex items-center gap-3">
            <div class="w-10 h-10 rounded-xl bg-gradient-to-tr from-[#FF7138] to-[#873CFF] flex items-center justify-center text-white shadow-lg shadow-[#FF7138]/25">
              <svg class="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2"><circle cx="12" cy="12" r="10"/><path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"/><path d="M12 17h.01"/></svg>
            </div>
            <div>
              <h3 class="text-xl sm:text-2xl font-black text-white">REUBEN TECH IQ BENCHMARK</h3>
              <p class="text-xs text-slate-400">Test your mastery of photonics, quantum computing, and frontier AI.</p>
            </div>
          </div>

          <button id="btnCloseQuizModal" class="p-2 rounded-xl text-slate-400 hover:text-white hover:bg-white/10">
            <svg class="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg>
          </button>
        </div>

        <!-- Progress Bar -->
        <div class="py-4 border-b border-white/10">
          <div class="flex items-center justify-between text-xs font-mono text-slate-400 mb-2">
            <span id="quizQuestionTracker">Question 1 of ${QUIZ_QUESTIONS.length}</span>
            <span id="quizScoreTracker">Score: 0 / ${QUIZ_QUESTIONS.length}</span>
          </div>
          <div class="w-full h-1.5 bg-white/10 rounded-full overflow-hidden">
            <div id="quizProgressBar" class="h-full bg-gradient-to-r from-[#287BFF] to-[#00D9FF] w-[20%] transition-all duration-300"></div>
          </div>
        </div>

        <!-- Question Body Area -->
        <div id="quizContentArea" class="py-6 flex-grow">
          <!-- Dynamically swapped questions & results -->
        </div>

      </div>
    </div>
  `;
}

