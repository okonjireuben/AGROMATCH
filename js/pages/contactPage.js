// REUBEN TECH - Contact Us Dedicated Page (Page 12)

export function renderContactPage() {
  return `
    <div class="py-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
      
      <!-- Contact Hero -->
      <div class="rounded-3xl glass-panel p-8 sm:p-12 border border-white/10 relative overflow-hidden bg-gradient-to-br from-[#121936] to-[#101426] text-center max-w-3xl mx-auto">
        <div class="orb w-96 h-96 bg-[#00D9FF]/15 -top-20 left-1/2 -translate-x-1/2"></div>

        <div class="relative z-10 space-y-3">
          <span class="badge-pill bg-[#00D9FF] text-[#101426] font-bold text-xs">NEWSROOM COMMUNICATIONS</span>
          <h1 class="text-3xl sm:text-5xl font-black text-white tracking-tight">
            Contact <span class="gradient-text-cyan">Reuben Tech</span>
          </h1>
          <p class="text-slate-300 text-sm sm:text-base">
            Have a confidential leak, research submission, hardware for lab benchmarking, or editorial inquiry? Reach our newsroom desk directly.
          </p>
        </div>
      </div>

      <div class="grid grid-cols-1 lg:grid-cols-12 gap-10">
        
        <!-- Left: Interactive Contact Form -->
        <div class="lg:col-span-7 rounded-3xl glass-panel p-6 sm:p-8 border border-white/10 space-y-6">
          <h2 class="text-xl font-bold text-white">Send a Dispatch to Our Editors</h2>

          <form id="contactForm" class="space-y-4">
            
            <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label class="block text-xs font-mono font-bold uppercase tracking-wider text-slate-400 mb-1.5">Your Name</label>
                <input id="contactName" type="text" required placeholder="Alex Mercer" class="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/15 text-white placeholder-slate-500 text-xs focus:outline-none focus:border-[#00D9FF]">
              </div>
              <div>
                <label class="block text-xs font-mono font-bold uppercase tracking-wider text-slate-400 mb-1.5">Email Address</label>
                <input id="contactEmail" type="email" required placeholder="alex@institute.org" class="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/15 text-white placeholder-slate-500 text-xs focus:outline-none focus:border-[#00D9FF]">
              </div>
            </div>

            <div>
              <label class="block text-xs font-mono font-bold uppercase tracking-wider text-slate-400 mb-1.5">Inquiry Department</label>
              <select id="contactDepartment" class="w-full px-4 py-3 rounded-xl bg-[#101426] border border-white/15 text-white text-xs focus:outline-none focus:border-[#00D9FF]">
                <option value="editorial">Editorial Desk & Breaking News Leaks</option>
                <option value="hardware-lab">Hardware Testing & Benchmark Submissions</option>
                <option value="press">Press & Media Inquiries</option>
                <option value="advertising">Corporate Partnerships</option>
              </select>
            </div>

            <div>
              <label class="block text-xs font-mono font-bold uppercase tracking-wider text-slate-400 mb-1.5">Message / Intelligence Summary</label>
              <textarea id="contactMessage" required rows="5" placeholder="Provide background, verifiable citations, or details on your inquiry..." class="w-full p-4 rounded-xl bg-white/5 border border-white/15 text-white placeholder-slate-500 text-xs focus:outline-none focus:border-[#00D9FF]"></textarea>
            </div>

            <div id="contactFormFeedback" class="hidden text-xs py-2.5 px-4 rounded-xl"></div>

            <button type="submit" class="w-full py-4 rounded-2xl bg-gradient-to-r from-[#287BFF] via-[#873CFF] to-[#00D9FF] text-xs font-bold text-white shadow-xl shadow-[#287BFF]/25 hover:opacity-95 btn-shimmer transition-all">
              Transmit Secure Message
            </button>
          </form>
        </div>

        <!-- Right: Office Hubs & Security Keys -->
        <div class="lg:col-span-5 space-y-6">
          
          <div class="rounded-3xl glass-panel p-6 border border-white/10 space-y-4">
            <h3 class="text-base font-bold text-white flex items-center gap-2">
              <svg class="w-4 h-4 text-[#00D9FF]" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/></svg>
              Newsroom Bureaus
            </h3>
            
            <div class="space-y-3 text-xs text-slate-300">
              <div class="p-3 rounded-xl bg-white/5 border border-white/5">
                <div class="font-bold text-white">San Francisco Bureau & AI Lab</div>
                <div class="text-slate-400">450 Mission Street, Floor 18, San Francisco, CA 94105</div>
              </div>
              <div class="p-3 rounded-xl bg-white/5 border border-white/5">
                <div class="font-bold text-white">London Semiconductor Desk</div>
                <div class="text-slate-400">100 Bishopsgate, London EC2N 4AG, United Kingdom</div>
              </div>
              <div class="p-3 rounded-xl bg-white/5 border border-white/5">
                <div class="font-bold text-white">Tokyo Robotics & Hardware Testing Lab</div>
                <div class="text-slate-400">Roppongi Hills Mori Tower, Minato City, Tokyo 106-6108</div>
              </div>
            </div>
          </div>

          <!-- Secure Whistleblower Box -->
          <div class="rounded-3xl glass-panel p-6 border border-emerald-500/20 bg-emerald-950/10 space-y-3">
            <div class="flex items-center gap-2 text-xs font-mono font-bold text-emerald-400">
              <svg class="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect width="18" height="11" x="3" y="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg>
              Encrypted Confidential Leaks
            </div>
            <p class="text-xs text-slate-300 leading-relaxed">
              We protect our confidential sources with air-gapped PGP public keys and onion routing. No telemetry or server IP addresses are retained.
            </p>
            <div class="p-2.5 rounded-lg bg-black/60 font-mono text-[10px] text-emerald-400 truncate">
              PGP: 4A7F 92B1 C048 55E2 893D 1109 FFA4 2026
            </div>
          </div>

        </div>

      </div>

    </div>
  `;
}

