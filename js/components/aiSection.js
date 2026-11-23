// REUBEN TECH - AI & Future Innovation (Section E)
import { AI_TOOLS } from '../data.js';

export function renderAiSection() {
  const pillars = [
    {
      title: "Frontier Foundation Models",
      icon: `<svg class="w-6 h-6 text-[#00D9FF]" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 2a10 10 0 1 0 10 10H12V2z"/><path d="M12 12 2.1 12a10.1 10.1 0 0 0 1.9 4.3"/><path d="M12 12l4.3 7.9a10 10 0 0 0 4.3-1.9"/></svg>`,
      description: "Trillion-parameter multi-modal models running chain-of-thought verification and dynamic test-time compute scaling.",
      stat: "60+ TFLOPS/W",
      tag: "Deep Learning"
    },
    {
      title: "Bipedal Humanoid Robotics",
      icon: `<svg class="w-6 h-6 text-[#873CFF]" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="7" r="4"/><path d="M6 21v-2a4 4 0 0 1 4-4h4a4 4 0 0 1 4 4v2"/></svg>`,
      description: "Vision-Language-Action policies achieving zero-shot object manipulation in precision assembly and healthcare.",
      stat: "32 Degrees of Freedom",
      tag: "Physical AI"
    },
    {
      title: "Quantum Supremacy & Decoherence",
      icon: `<svg class="w-6 h-6 text-[#287BFF]" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="3"/><circle cx="19" cy="5" r="2"/><circle cx="5" cy="19" r="2"/><path d="M10.4 10.4 6.4 17.6"/><path d="m13.6 13.6 4-7.2"/></svg>`,
      description: "1,000+ error-corrected logical qubits operating in optical neutral-atom lattices for quantum chemistry breakthroughs.",
      stat: "99.95% Gate Fidelity",
      tag: "Quantum Systems"
    },
    {
      title: "Deep Space Propulsion & Science",
      icon: `<svg class="w-6 h-6 text-[#FF7138]" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z"/><path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z"/></svg>`,
      description: "Nuclear thermal propulsion, autonomous asteroid mineral extraction, and James Webb deep-field cosmic analysis.",
      stat: "Mach 35 Escape Velocity",
      tag: "Astrophysics"
    }
  ];

  return `
    <section class="py-20 bg-gradient-to-b from-[#101426] via-[#141A35] to-[#101426] relative overflow-hidden border-t border-white/10">
      
      <!-- Ambient Visual Elements -->
      <div class="orb w-[500px] h-[500px] bg-[#873CFF]/15 top-1/4 -right-40"></div>
      <div class="orb w-[400px] h-[400px] bg-[#00D9FF]/15 bottom-10 -left-20"></div>

      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <!-- Header -->
        <div class="text-center max-w-3xl mx-auto mb-16">
          <div class="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#873CFF]/20 border border-[#873CFF]/40 text-[#00D9FF] text-xs font-mono font-bold uppercase tracking-wider mb-4">
            <span class="w-2 h-2 rounded-full bg-[#00D9FF] animate-pulse"></span>
            FRONTIER HORIZONS
          </div>
          <h2 class="text-3xl sm:text-5xl font-black text-white tracking-tight leading-tight">
            AI & FUTURE <span class="gradient-text">INNOVATION</span>
          </h2>
          <p class="text-slate-300 text-base sm:text-lg mt-4">
            Autonomous cognition, neural robotics, and deep space breakthroughs. We track the seismic shifts reshaping reality.
          </p>
        </div>

        <!-- Four Tech Innovation Pillars -->
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          ${pillars.map(p => `
            <div class="rounded-3xl glass-panel p-6 border border-white/10 hover-card flex flex-col justify-between group">
              <div>
                <div class="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center mb-5 group-hover:scale-110 transition-transform">
                  ${p.icon}
                </div>
                <span class="badge-pill bg-white/5 text-[10px] text-slate-300 border border-white/10 mb-3">
                  ${p.tag}
                </span>
                <h3 class="text-lg font-bold text-white group-hover:text-[#00D9FF] transition-colors mb-2">
                  ${p.title}
                </h3>
                <p class="text-xs text-slate-400 leading-relaxed mb-4">
                  ${p.description}
                </p>
              </div>

              <div class="pt-4 border-t border-white/10 flex items-center justify-between">
                <span class="text-xs font-mono font-bold text-[#00D9FF]">${p.stat}</span>
                <a href="#/ai" class="text-xs font-semibold text-slate-300 group-hover:text-white flex items-center gap-1">
                  Explore →
                </a>
              </div>
            </div>
          `).join('')}
        </div>

        <!-- Interactive Live Neural Sandbox & Prompt Laboratory -->
        <div class="rounded-3xl glass-panel p-8 sm:p-10 border border-[#873CFF]/30 relative overflow-hidden shadow-2xl">
          <div class="absolute -top-24 -right-24 w-80 h-80 bg-[#287BFF]/20 rounded-full blur-3xl pointer-events-none"></div>

          <div class="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            <div class="lg:col-span-5 space-y-4">
              <span class="badge-pill bg-[#873CFF] text-white">INTERACTIVE LAB</span>
              <h3 class="text-2xl sm:text-3xl font-extrabold text-white">
                Live Neural Embedding Simulator
              </h3>
              <p class="text-sm text-slate-300 leading-relaxed">
                Experience how next-generation reasoning models map language to high-dimensional conceptual vectors in real-time.
              </p>

              <!-- Preset Query Prompts -->
              <div class="space-y-2 pt-2">
                <span class="text-xs font-mono text-slate-400">Try an architectural query:</span>
                <div class="flex flex-wrap gap-2">
                  <button class="btn-neural-preset px-3 py-1.5 rounded-lg text-xs bg-white/5 hover:bg-white/10 border border-white/10 text-slate-300 hover:text-white" data-prompt="Room-temperature quantum error correction">Quantum Error Correction</button>
                  <button class="btn-neural-preset px-3 py-1.5 rounded-lg text-xs bg-white/5 hover:bg-white/10 border border-white/10 text-slate-300 hover:text-white" data-prompt="End-to-end vision-language-action robotics">VLA Robotics</button>
                  <button class="btn-neural-preset px-3 py-1.5 rounded-lg text-xs bg-white/5 hover:bg-white/10 border border-white/10 text-slate-300 hover:text-white" data-prompt="Silicon photonic tensor calculation">Silicon Photonics</button>
                </div>
              </div>
            </div>

            <!-- Interactive Terminal & Neural Canvas Simulator -->
            <div class="lg:col-span-7 bg-[#0B0E1B] rounded-2xl border border-white/15 p-5 shadow-inner">
              <div class="flex items-center justify-between pb-3 mb-3 border-b border-white/10 text-xs font-mono text-slate-400">
                <div class="flex items-center gap-2">
                  <span class="w-3 h-3 rounded-full bg-rose-500/80 inline-block"></span>
                  <span class="w-3 h-3 rounded-full bg-amber-500/80 inline-block"></span>
                  <span class="w-3 h-3 rounded-full bg-emerald-500/80 inline-block"></span>
                  <span class="ml-2 text-slate-300">neural-core-v4.bin</span>
                </div>
                <span class="text-[#00D9FF]">DIM: 4096-D • LATENCY: 1.2ms</span>
              </div>

              <!-- Input Bar -->
              <div class="flex gap-2 mb-4">
                <input id="neuralPromptInput" type="text" value="Room-temperature quantum error correction" placeholder="Enter a concept to project..." class="flex-grow bg-white/5 border border-white/10 rounded-xl px-4 py-2.5 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-[#00D9FF]">
                <button id="btnRunNeuralSim" class="px-5 py-2.5 rounded-xl bg-gradient-to-r from-[#287BFF] to-[#873CFF] text-xs font-bold text-white hover:opacity-95 shadow-lg shadow-[#287BFF]/25">
                  Synthesize
                </button>
              </div>

              <!-- Output Vector Matrix Display -->
              <div id="neuralOutputArea" class="space-y-3 font-mono text-xs">
                <div class="p-3 rounded-xl bg-white/5 border border-white/5 text-slate-300 space-y-1">
                  <div class="text-[#00D9FF] flex justify-between">
                    <span>STATUS: ACTIVE INFERENCE</span>
                    <span id="neuralConfidence">CONFIDENCE: 99.4%</span>
                  </div>
                  <div id="neuralVectorDisplay" class="text-[11px] text-slate-400 truncate">
                    [0.8421, -0.3129, 0.9412, 0.1204, -0.6541, 0.7723, 0.0482, -0.1983...]
                  </div>
                  <div id="neuralSemanticMatch" class="text-xs text-white font-sans font-medium pt-1">
                    Semantic Clustering: <span class="text-emerald-400">Physics &gt; Quantum Mechanics &gt; Fault Tolerant Surface Codes</span>
                  </div>
                </div>
              </div>

            </div>

          </div>
        </div>

      </div>
    </section>
  `;
}

