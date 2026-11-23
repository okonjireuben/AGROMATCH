// REUBEN TECH - About Us Dedicated Page (Page 11)
import { BRAND } from '../data.js';

export function renderAboutPage() {
  const team = [
    {
      name: "Dr. Elena Vance",
      role: "Editor-in-Chief & Semiconductor Fellow",
      avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=400&q=80",
      bio: "Former lithography researcher at IMEC; 14 years leading hardware journalism and investigating atomic-scale transistor scaling."
    },
    {
      name: "Julian Rivera",
      role: "Executive Director, Robotics & Physical AI",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=400&q=80",
      bio: "Mechanical robotics engineer turned technology analyst. Specialized in humanoid kinematics, vision-language-action policies and industrial automation."
    },
    {
      name: "Maya Lin",
      role: "Head of Mobile & Consumer Systems Lab",
      avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=400&q=80",
      bio: "Hardware tester of over 800 flagship smartphones and tablets with custom spectroradiometer and thermal sensor rigs."
    },
    {
      name: "Karan Patel",
      role: "Principal Infrastructure Architect",
      avatar: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=400&q=80",
      bio: "Network engineering specialist covering enterprise cloud computing, post-quantum cryptography, and high-frequency wireless communications."
    }
  ];

  return `
    <div class="py-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
      
      <!-- About Hero -->
      <div class="rounded-3xl glass-panel p-8 sm:p-14 border border-white/10 relative overflow-hidden bg-gradient-to-br from-[#121936] to-[#101426] text-center max-w-4xl mx-auto">
        <div class="orb w-96 h-96 bg-[#287BFF]/20 -top-20 left-1/2 -translate-x-1/2"></div>

        <div class="relative z-10 space-y-4">
          <span class="badge-pill bg-[#287BFF] text-white text-xs">ABOUT REUBEN TECH</span>
          <h1 class="text-3xl sm:text-5xl font-black text-white tracking-tight">
            Discover What's <span class="gradient-text">Next.</span>
          </h1>
          <p class="text-slate-300 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
            ${BRAND.description}
          </p>
        </div>
      </div>

      <!-- Core Editorial Principles -->
      <div class="space-y-6">
        <div class="text-center max-w-2xl mx-auto">
          <h2 class="text-2xl sm:text-3xl font-extrabold text-white">Our Editorial & Scientific Charter</h2>
          <p class="text-slate-400 text-sm mt-1">We adhere to the most uncompromising testing standards in digital journalism.</p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div class="rounded-3xl glass-panel p-6 border border-white/10 space-y-3">
            <div class="w-10 h-10 rounded-xl bg-emerald-500/10 text-emerald-400 flex items-center justify-center font-bold">01</div>
            <h3 class="text-lg font-bold text-white">100% Independent Lab Testing</h3>
            <p class="text-xs text-slate-300 leading-relaxed">
              We never accept paid reviews or early-access editorial approval from hardware vendors. All devices are tested in-house with calibrated oscilloscopes, colorimeters, and thermal cameras.
            </p>
          </div>

          <div class="rounded-3xl glass-panel p-6 border border-white/10 space-y-3">
            <div class="w-10 h-10 rounded-xl bg-[#287BFF]/10 text-[#00D9FF] flex items-center justify-center font-bold">02</div>
            <h3 class="text-lg font-bold text-white">First-Principles Technical Depth</h3>
            <p class="text-xs text-slate-300 leading-relaxed">
              We reject clickbait hype. Every article investigates the underlying physics, algorithmic mathematics, and supply chain realities behind emerging breakthroughs.
            </p>
          </div>

          <div class="rounded-3xl glass-panel p-6 border border-white/10 space-y-3">
            <div class="w-10 h-10 rounded-xl bg-[#873CFF]/10 text-[#873CFF] flex items-center justify-center font-bold">03</div>
            <h3 class="text-lg font-bold text-white">Open Scientific Reproducibility</h3>
            <p class="text-xs text-slate-300 leading-relaxed">
              Our benchmark suites, scripts, and testing criteria are published openly so that engineers, researchers, and consumers can verify our results independently.
            </p>
          </div>
        </div>
      </div>

      <!-- Leadership Team -->
      <div class="space-y-6">
        <div class="text-center max-w-2xl mx-auto">
          <h2 class="text-2xl sm:text-3xl font-extrabold text-white">Newsroom & Laboratory Leadership</h2>
          <p class="text-slate-400 text-sm mt-1">Guided by experienced engineers, investigative journalists, and domain scientists.</p>
        </div>

        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          ${team.map(member => `
            <div class="rounded-3xl glass-panel p-5 border border-white/10 hover-card text-center space-y-3">
              <img src="${member.avatar}" alt="${member.name}" class="w-24 h-24 rounded-2xl object-cover mx-auto ring-2 ring-[#287BFF]/40">
              <div>
                <h4 class="text-base font-bold text-white">${member.name}</h4>
                <div class="text-[11px] font-mono text-[#00D9FF]">${member.role}</div>
              </div>
              <p class="text-xs text-slate-400 leading-relaxed">${member.bio}</p>
            </div>
          `).join('')}
        </div>
      </div>

    </div>
  `;
}

