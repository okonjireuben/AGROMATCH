// REUBEN TECH - Newsletter Component (Section J)

export function renderNewsletter() {
  return `
    <section class="py-20 relative overflow-hidden bg-[#101426]">
      
      <!-- High-tech mesh background glow -->
      <div class="orb w-[500px] h-[500px] bg-[#287BFF]/20 -bottom-20 -left-20"></div>
      <div class="orb w-[500px] h-[500px] bg-[#00D9FF]/20 -top-20 -right-20"></div>

      <div class="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div class="rounded-3xl glass-panel p-8 sm:p-14 border border-white/15 relative overflow-hidden text-center shadow-2xl">
          
          <!-- Holographic Decorative Grid Accent -->
          <div class="w-16 h-16 mx-auto mb-6 rounded-2xl bg-gradient-to-tr from-[#287BFF] via-[#873CFF] to-[#00D9FF] p-[2px] shadow-lg shadow-[#00D9FF]/30">
            <div class="w-full h-full bg-[#101426] rounded-[14px] flex items-center justify-center">
              <svg class="w-8 h-8 text-[#00D9FF]" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>
              </svg>
            </div>
          </div>

          <!-- Main Headlines -->
          <div class="inline-block px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-mono text-[#00D9FF] uppercase tracking-wider mb-3">
            DAILY FRONTIER DISPATCH
          </div>
          
          <h2 class="text-3xl sm:text-5xl font-black text-white tracking-tight leading-tight">
            STAY AHEAD OF <span class="gradient-text">THE FUTURE.</span>
          </h2>

          <p class="text-slate-300 text-base sm:text-lg max-w-2xl mx-auto mt-4 leading-relaxed">
            Get the latest technology news, discoveries and innovations delivered straight to your inbox. Curated by senior editors, read by 240,000+ tech leaders daily.
          </p>

          <!-- Interactive Subscription Form -->
          <form id="newsletterForm" class="max-w-xl mx-auto mt-8 space-y-4">
            
            <div class="flex flex-col sm:flex-row gap-3">
              <div class="relative flex-grow">
                <input 
                  id="newsletterEmail" 
                  type="email" 
                  required 
                  placeholder="Enter your executive email address..." 
                  class="w-full px-5 py-4 rounded-2xl bg-white/5 border border-white/15 text-white placeholder-slate-400 focus:outline-none focus:border-[#00D9FF] focus:ring-2 focus:ring-[#00D9FF]/20 text-sm transition-all"
                >
              </div>

              <button 
                type="submit" 
                class="px-8 py-4 rounded-2xl font-bold text-sm text-white bg-gradient-to-r from-[#287BFF] via-[#873CFF] to-[#00D9FF] hover:opacity-95 shadow-xl shadow-[#287BFF]/30 btn-shimmer whitespace-nowrap transition-all focus:outline-none"
              >
                Join Dispatch
              </button>
            </div>

            <!-- Topic Preferences Checkboxes -->
            <div class="flex flex-wrap items-center justify-center gap-4 pt-3 text-xs text-slate-300">
              <label class="flex items-center gap-1.5 cursor-pointer">
                <input type="checkbox" checked class="rounded border-white/20 bg-white/5 text-[#287BFF] focus:ring-0">
                <span>Artificial Intelligence</span>
              </label>
              <label class="flex items-center gap-1.5 cursor-pointer">
                <input type="checkbox" checked class="rounded border-white/20 bg-white/5 text-[#287BFF] focus:ring-0">
                <span>Silicon & Hardware</span>
              </label>
              <label class="flex items-center gap-1.5 cursor-pointer">
                <input type="checkbox" checked class="rounded border-white/20 bg-white/5 text-[#287BFF] focus:ring-0">
                <span>Deep Tech & Space</span>
              </label>
            </div>

            <!-- Form Validation Messages & Feedback -->
            <div id="newsletterFeedback" class="hidden text-xs py-2 px-4 rounded-xl"></div>

            <div class="text-[11px] text-slate-400 font-mono pt-2">
              🔒 Zero spam. Unsubscribe anytime with 1 click. GDPR & CCPA compliant.
            </div>

          </form>

        </div>

      </div>
    </section>
  `;
}

