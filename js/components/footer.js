// REUBEN TECH - Footer Component
import { BRAND } from '../data.js';

export function renderFooter() {
  return `
    <footer class="relative bg-[#0B0E1B] border-t border-white/10 pt-16 pb-12 overflow-hidden">
      <!-- Ambient Glow Orbs -->
      <div class="orb w-96 h-96 bg-[#287BFF]/10 top-0 left-10"></div>
      <div class="orb w-96 h-96 bg-[#873CFF]/10 bottom-0 right-10"></div>

      <div class="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-white/10">
          
          <!-- Brand Column -->
          <div class="lg:col-span-2 space-y-4">
            <div class="flex items-center gap-3">
              <div class="w-10 h-10 rounded-xl bg-gradient-to-tr from-[#287BFF] via-[#873CFF] to-[#00D9FF] p-[2px] shadow-lg shadow-[#287BFF]/20">
                <div class="w-full h-full bg-[#101426] rounded-[10px] flex items-center justify-center">
                  <svg class="w-5 h-5 text-[#00D9FF]" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2">
                    <path d="M4 4h7a4 4 0 0 1 4 4 4 4 0 0 1-4 4H4z" />
                    <path d="M4 12h8l5 8" />
                  </svg>
                </div>
              </div>
              <span class="font-display font-black text-2xl text-white tracking-tight">
                REUBEN<span class="text-[#00D9FF]">TECH</span>
              </span>
            </div>
            
            <p class="text-sm text-slate-400 max-w-sm leading-relaxed">
              ${BRAND.description}
            </p>

            <div class="text-xs font-mono text-[#00D9FF] flex items-center gap-2">
              <span class="inline-block w-2 h-2 rounded-full bg-[#00D9FF] animate-ping"></span>
              BROADCASTING FROM THE EDGE OF TOMORROW
            </div>

            <!-- Social Links -->
            <div class="flex items-center gap-3 pt-2">
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" class="w-9 h-9 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-slate-300 hover:text-[#00D9FF] hover:border-[#00D9FF]/40 transition-all" title="X / Twitter">
                <svg class="w-4 h-4" viewBox="0 0 24 24" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
              </a>
              <a href="https://github.com" target="_blank" rel="noopener noreferrer" class="w-9 h-9 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-slate-300 hover:text-white hover:border-white/40 transition-all" title="GitHub">
                <svg class="w-4 h-4" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/></svg>
              </a>
              <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" class="w-9 h-9 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-slate-300 hover:text-[#FF7138] hover:border-[#FF7138]/40 transition-all" title="YouTube">
                <svg class="w-4 h-4" viewBox="0 0 24 24" fill="currentColor"><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" class="w-9 h-9 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-slate-300 hover:text-[#287BFF] hover:border-[#287BFF]/40 transition-all" title="LinkedIn">
                <svg class="w-4 h-4" viewBox="0 0 24 24" fill="currentColor"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
              </a>
            </div>
          </div>

          <!-- Editorial Links -->
          <div class="space-y-3">
            <h4 class="text-xs font-mono uppercase tracking-widest text-slate-300 font-semibold">Editorial</h4>
            <ul class="space-y-2 text-sm text-slate-400">
              <li><a href="#/news" class="hover:text-[#00D9FF] transition-colors">Technology News</a></li>
              <li><a href="#/ai" class="hover:text-[#00D9FF] transition-colors">AI & Robotics</a></li>
              <li><a href="#/future" class="hover:text-[#00D9FF] transition-colors">Future Innovations</a></li>
              <li><a href="#/smartphones" class="hover:text-[#00D9FF] transition-colors">Smartphone Reviews</a></li>
              <li><a href="#/laptops" class="hover:text-[#00D9FF] transition-colors">Laptop Benchmarks</a></li>
              <li><a href="#/gaming" class="hover:text-[#00D9FF] transition-colors">Gaming Tech</a></li>
            </ul>
          </div>

          <!-- Interactive Discovery -->
          <div class="space-y-3">
            <h4 class="text-xs font-mono uppercase tracking-widest text-slate-300 font-semibold">Discovery Tools</h4>
            <ul class="space-y-2 text-sm text-slate-400">
              <li><a href="#/comparisons" class="hover:text-[#00D9FF] transition-colors">Product Comparison Tool</a></li>
              <li><a href="#/tutorials" class="hover:text-[#00D9FF] transition-colors">Tech Tutorials</a></li>
              <li><button id="btnFooterTechFinder" class="hover:text-[#00D9FF] text-left transition-colors">Interactive Tech Finder</button></li>
              <li><button id="btnFooterAiDirectory" class="hover:text-[#00D9FF] text-left transition-colors">AI Tool Directory</button></li>
              <li><button id="btnFooterQuiz" class="hover:text-[#00D9FF] text-left transition-colors">Tech IQ Quiz</button></li>
              <li><button id="btnFooterExplainer" class="hover:text-[#00D9FF] text-left transition-colors">Tech Explainer Flashcards</button></li>
            </ul>
          </div>

          <!-- Standards & Company -->
          <div class="space-y-3">
            <h4 class="text-xs font-mono uppercase tracking-widest text-slate-300 font-semibold">Transparency</h4>
            <ul class="space-y-2 text-sm text-slate-400">
              <li><a href="#/about" class="hover:text-[#00D9FF] transition-colors">About Us</a></li>
              <li><a href="#/contact" class="hover:text-[#00D9FF] transition-colors">Contact Our Newsroom</a></li>
              <li><button id="btnOpenEditorialPolicy" class="hover:text-[#00D9FF] text-left transition-colors">Editorial & Testing Policy</button></li>
              <li><button id="btnOpenPrivacyPolicy" class="hover:text-[#00D9FF] text-left transition-colors">Privacy Policy</button></li>
              <li><button id="btnOpenTerms" class="hover:text-[#00D9FF] text-left transition-colors">Terms of Service</button></li>
              <li><span class="inline-flex items-center gap-1.5 px-2 py-0.5 rounded text-[11px] bg-emerald-500/10 text-emerald-400 border border-emerald-500/30">Verified Independent</span></li>
            </ul>
          </div>
        </div>

        <!-- Bottom Copyright Row -->
        <div class="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <div class="flex items-center gap-2">
            <span>© 2026 ${BRAND.name}. All rights reserved.</span>
            <span>•</span>
            <span class="text-slate-300 font-medium">"${BRAND.tagline}"</span>
          </div>
          <div class="flex items-center gap-4">
            <span class="text-slate-400">Engineered with Precision & Passion</span>
            <div class="flex items-center gap-1.5 text-emerald-400 font-mono text-[11px]">
              <span class="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
              All Systems Operational
            </div>
          </div>
        </div>
      </div>
    </footer>
  `;
}

