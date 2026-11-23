// REUBEN TECH - Navigation Bar Component
import { BRAND } from '../data.js';

export function renderNavbar(savedCount = 0) {
  return `
    <header class="sticky top-0 z-40 w-full glass-nav transition-all duration-300">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex items-center justify-between h-20">
          
          <!-- Logo -->
          <a href="#/home" class="flex items-center gap-3 group focus:outline-none" aria-label="REUBEN TECH Home">
            <div class="relative flex items-center justify-center w-11 h-11 rounded-xl bg-gradient-to-tr from-[#287BFF] via-[#873CFF] to-[#00D9FF] p-[2px] shadow-lg shadow-[#287BFF]/25 group-hover:shadow-[#00D9FF]/40 transition-all duration-300">
              <div class="w-full h-full bg-[#101426] rounded-[10px] flex items-center justify-center relative overflow-hidden">
                <!-- Futuristic Monogram Glyph -->
                <svg class="w-6 h-6 text-[#00D9FF] transform group-hover:scale-110 transition-transform duration-300" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round">
                  <path d="M4 4h7a4 4 0 0 1 4 4 4 4 0 0 1-4 4H4z" />
                  <path d="M4 12h8l5 8" />
                  <circle cx="17" cy="6" r="2" fill="#FF7138" stroke="none" />
                </svg>
                <div class="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700"></div>
              </div>
            </div>
            
            <div class="flex flex-col">
              <div class="flex items-center gap-1.5">
                <span class="font-display font-black text-xl tracking-tight text-white group-hover:text-[#00D9FF] transition-colors">
                  REUBEN<span class="text-[#00D9FF]">TECH</span>
                </span>
                <span class="inline-block w-1.5 h-1.5 rounded-full bg-[#FF7138] animate-pulse"></span>
              </div>
              <span class="text-[9px] font-mono tracking-widest uppercase text-slate-400 group-hover:text-slate-300 transition-colors">
                ${BRAND.tagline}
              </span>
            </div>
          </a>

          <!-- Desktop Navigation Links -->
          <nav class="hidden lg:flex items-center gap-1 xl:gap-2 text-sm font-medium">
            <a href="#/home" class="nav-link px-3 py-2 rounded-lg text-slate-300 hover:text-white hover:bg-white/5 transition-all">Home</a>
            <a href="#/news" class="nav-link px-3 py-2 rounded-lg text-slate-300 hover:text-white hover:bg-white/5 transition-all">Technology News</a>
            <a href="#/ai" class="nav-link px-3 py-2 rounded-lg text-slate-300 hover:text-white hover:bg-white/5 transition-all flex items-center gap-1">
              AI & Innovation
              <span class="px-1.5 py-0.5 text-[10px] font-semibold bg-[#873CFF]/20 text-[#00D9FF] border border-[#873CFF]/40 rounded-full">HOT</span>
            </a>
            <a href="#/gadgets" class="nav-link px-3 py-2 rounded-lg text-slate-300 hover:text-white hover:bg-white/5 transition-all">Gadgets</a>
            <a href="#/smartphones" class="nav-link px-3 py-2 rounded-lg text-slate-300 hover:text-white hover:bg-white/5 transition-all">Reviews</a>
            <a href="#/tutorials" class="nav-link px-3 py-2 rounded-lg text-slate-300 hover:text-white hover:bg-white/5 transition-all">Tutorials</a>
            <button id="btnOpenDiscover" class="nav-link px-3 py-2 rounded-lg text-slate-300 hover:text-[#00D9FF] hover:bg-white/5 transition-all flex items-center gap-1.5 focus:outline-none">
              <span>Discover</span>
              <svg class="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="m6 9 6 6 6-6"/></svg>
            </button>
          </nav>

          <!-- Right Action Controls -->
          <div class="flex items-center gap-2 sm:gap-3">
            
            <!-- Quick Search Button -->
            <button id="btnOpenSearch" class="flex items-center gap-2 px-3 py-2 rounded-xl bg-white/5 border border-white/10 text-slate-300 hover:text-white hover:border-[#00D9FF]/50 hover:bg-[#00D9FF]/5 transition-all group focus:outline-none" title="Search articles and gadgets (Ctrl+K)">
              <svg class="w-4 h-4 text-slate-400 group-hover:text-[#00D9FF] transition-colors" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round">
                <circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/>
              </svg>
              <span class="hidden sm:inline text-xs text-slate-400 group-hover:text-slate-200">Search</span>
              <kbd class="hidden md:inline-flex items-center px-1.5 py-0.5 text-[10px] font-mono font-medium text-slate-400 bg-black/40 border border-white/10 rounded">⌘K</kbd>
            </button>

            <!-- Reading List / Bookmarks Button -->
            <button id="btnOpenReadingList" class="relative p-2.5 rounded-xl bg-white/5 border border-white/10 text-slate-300 hover:text-white hover:border-[#287BFF]/50 transition-all focus:outline-none" title="Saved Articles & Reading List">
              <svg class="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round">
                <path d="m19 21-7-4-7 4V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v16z"/>
              </svg>
              <span id="savedCountBadge" class="${savedCount > 0 ? '' : 'hidden'} absolute -top-1 -right-1 w-5 h-5 flex items-center justify-center text-[10px] font-bold text-white bg-gradient-to-r from-[#287BFF] to-[#873CFF] rounded-full border border-[#101426]">
                ${savedCount}
              </span>
            </button>

            <!-- Theme Toggle -->
            <button id="btnToggleTheme" class="p-2.5 rounded-xl bg-white/5 border border-white/10 text-slate-300 hover:text-[#00D9FF] hover:border-[#00D9FF]/50 transition-all focus:outline-none" title="Switch Theme (Dark / Light)">
              <!-- Sun / Moon dynamic icon -->
              <svg id="themeIconSun" class="hidden w-4 h-4 text-amber-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2">
                <circle cx="12" cy="12" r="4"/><path d="M12 2v2"/><path d="M12 20v2"/><path d="m4.93 4.93 1.41 1.41"/><path d="m17.66 17.66 1.41 1.41"/><path d="M2 12h2"/><path d="M20 12h2"/><path d="m6.34 17.66-1.41 1.41"/><path d="m19.07 4.93-1.41 1.41"/>
              </svg>
              <svg id="themeIconMoon" class="w-4 h-4 text-[#00D9FF]" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2">
                <path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"/>
              </svg>
            </button>

            <!-- Newsletter CTA Button -->
            <button id="btnHeaderNewsletter" class="hidden sm:inline-flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-semibold text-white bg-gradient-to-r from-[#287BFF] via-[#873CFF] to-[#00D9FF] hover:opacity-95 shadow-lg shadow-[#287BFF]/25 hover:shadow-[#00D9FF]/35 btn-shimmer transition-all focus:outline-none">
              <svg class="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2"><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>
              <span>Stay Ahead</span>
            </button>

            <!-- Mobile Menu Toggle Button -->
            <button id="btnMobileMenuToggle" class="lg:hidden p-2.5 rounded-xl bg-white/5 border border-white/10 text-slate-300 hover:text-white focus:outline-none" aria-label="Toggle Navigation Menu">
              <svg class="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2">
                <line x1="4" x2="20" y1="12" y2="12"/><line x1="4" x2="20" y1="6" y2="6"/><line x1="4" x2="20" y1="18" y2="18"/>
              </svg>
            </button>
          </div>
        </div>
      </div>

      <!-- Mobile Navigation Drawer -->
      <div id="mobileNavDrawer" class="hidden lg:hidden border-t border-white/10 bg-[#101426]/98 backdrop-blur-2xl px-6 py-6 space-y-3">
        <a href="#/home" class="mobile-nav-link block py-2 text-base font-medium text-slate-200 hover:text-[#00D9FF]">Home</a>
        <a href="#/news" class="mobile-nav-link block py-2 text-base font-medium text-slate-200 hover:text-[#00D9FF]">Technology News</a>
        <a href="#/ai" class="mobile-nav-link block py-2 text-base font-medium text-slate-200 hover:text-[#00D9FF]">AI & Future Innovation</a>
        <a href="#/gadgets" class="mobile-nav-link block py-2 text-base font-medium text-slate-200 hover:text-[#00D9FF]">Gadgets & Devices</a>
        <a href="#/smartphones" class="mobile-nav-link block py-2 text-base font-medium text-slate-200 hover:text-[#00D9FF]">Smartphone Reviews</a>
        <a href="#/laptops" class="mobile-nav-link block py-2 text-base font-medium text-slate-200 hover:text-[#00D9FF]">Laptop Reviews</a>
        <a href="#/comparisons" class="mobile-nav-link block py-2 text-base font-medium text-slate-200 hover:text-[#00D9FF]">Product Comparisons</a>
        <a href="#/tutorials" class="mobile-nav-link block py-2 text-base font-medium text-slate-200 hover:text-[#00D9FF]">Technology Tutorials</a>
        <a href="#/future" class="mobile-nav-link block py-2 text-base font-medium text-slate-200 hover:text-[#00D9FF]">Future Innovations</a>
        <a href="#/gaming" class="mobile-nav-link block py-2 text-base font-medium text-slate-200 hover:text-[#00D9FF]">Gaming Technology</a>
        <a href="#/about" class="mobile-nav-link block py-2 text-base font-medium text-slate-200 hover:text-[#00D9FF]">About Us</a>
        <a href="#/contact" class="mobile-nav-link block py-2 text-base font-medium text-slate-200 hover:text-[#00D9FF]">Contact Us</a>
        
        <div class="pt-4 border-t border-white/10 flex flex-col gap-2">
          <button id="btnMobileTechFinder" class="w-full py-2.5 rounded-xl bg-white/5 border border-white/10 text-sm font-semibold text-white flex items-center justify-center gap-2">
            <svg class="w-4 h-4 text-[#00D9FF]" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><path d="m4.93 4.93 4.24 4.24"/><path d="m14.83 9.17 4.24-4.24"/><path d="m14.83 14.83 4.24 4.24"/><path d="m9.17 14.83-4.24 4.24"/></svg>
            Launch Tech Finder
          </button>
          <button id="btnMobileQuiz" class="w-full py-2.5 rounded-xl bg-gradient-to-r from-[#873CFF]/30 to-[#00D9FF]/30 border border-[#00D9FF]/30 text-sm font-semibold text-white flex items-center justify-center gap-2">
            <svg class="w-4 h-4 text-[#FF7138]" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"/><path d="M12 17h.01"/></svg>
            Take Tech Quiz
          </button>
        </div>
      </div>
    </header>
  `;
}

