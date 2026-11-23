// REUBEN TECH - Artificial Intelligence Dedicated Page (Page 3)
import { AI_TOOLS, ARTICLES } from '../data.js';

export function renderAiPage() {
  const aiArticles = ARTICLES.filter(a => a.category.includes('AI') || a.tags.includes('Robotics') || a.tags.includes('Quantum'));

  return `
    <div class="py-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
      
      <!-- AI Page Hero -->
      <div class="rounded-3xl glass-panel p-8 sm:p-12 border border-[#873CFF]/30 relative overflow-hidden bg-gradient-to-br from-[#1A1333] via-[#101426] to-[#0A0E1A]">
        <div class="orb w-96 h-96 bg-[#873CFF]/25 -top-20 -right-20"></div>

        <div class="relative z-10 max-w-3xl space-y-4">
          <span class="badge-pill bg-[#873CFF] text-white text-xs">SYNTHETIC COGNITION DIVISION</span>
          <h1 class="text-3xl sm:text-5xl font-black text-white tracking-tight">
            Artificial <span class="gradient-text">Intelligence</span> & Autonomous Agents
          </h1>
          <p class="text-slate-300 text-base sm:text-lg">
            Frontier reasoning models, neural robotics, vision-language-action architectures, and AI alignment research.
          </p>

          <div class="pt-2 flex flex-wrap gap-3">
            <button id="btnAiPageOpenDirectory" class="px-5 py-3 rounded-xl bg-gradient-to-r from-[#287BFF] to-[#873CFF] text-xs font-bold text-white shadow-lg shadow-[#873CFF]/30 btn-shimmer">
              Open 2026 AI Tool Directory →
            </button>
            <button id="btnAiPageOpenExplainer" class="px-5 py-3 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-xs font-bold text-white">
              Transformer & Neural Explainers
            </button>
          </div>
        </div>
      </div>

      <!-- Frontier Model Benchmark Matrix -->
      <div class="rounded-3xl glass-panel p-6 sm:p-8 border border-white/10 space-y-4">
        <div class="flex items-center justify-between pb-4 border-b border-white/10">
          <div>
            <h2 class="text-xl font-bold text-white">2026 Frontier Model Benchmarks</h2>
            <p class="text-xs text-slate-400">Independent evaluations conducted across coding, multi-step math, and long-context retrieval.</p>
          </div>
          <span class="text-xs font-mono text-emerald-400 bg-emerald-500/10 px-2 py-1 rounded border border-emerald-500/20">Updated Weekly</span>
        </div>

        <div class="overflow-x-auto">
          <table class="w-full text-left text-xs font-mono">
            <thead>
              <tr class="border-b border-white/10 text-slate-400">
                <th class="py-3 px-4">Model & Lab</th>
                <th class="py-3 px-4">Context Window</th>
                <th class="py-3 px-4">MMLU-Pro</th>
                <th class="py-3 px-4">HumanEval (Code)</th>
                <th class="py-3 px-4">MATH 500</th>
                <th class="py-3 px-4">Cost / 1M Tokens</th>
              </tr>
            </thead>
            <tbody class="divide-y divide-white/5 text-slate-200">
              <tr>
                <td class="py-3.5 px-4 font-bold text-white flex items-center gap-2">
                  <span class="w-2 h-2 rounded-full bg-[#00D9FF]"></span>
                  Claude 3.5 Sonnet (Anthropic)
                </td>
                <td class="py-3.5 px-4">200k Tokens</td>
                <td class="py-3.5 px-4 text-emerald-400 font-bold">78.0%</td>
                <td class="py-3.5 px-4 text-emerald-400 font-bold">93.7%</td>
                <td class="py-3.5 px-4 text-emerald-400 font-bold">78.3%</td>
                <td class="py-3.5 px-4">$3.00 / $15.00</td>
              </tr>
              <tr>
                <td class="py-3.5 px-4 font-bold text-white flex items-center gap-2">
                  <span class="w-2 h-2 rounded-full bg-[#287BFF]"></span>
                  GPT-4o (OpenAI)
                </td>
                <td class="py-3.5 px-4">128k Tokens</td>
                <td class="py-3.5 px-4">72.6%</td>
                <td class="py-3.5 px-4">90.2%</td>
                <td class="py-3.5 px-4">76.6%</td>
                <td class="py-3.5 px-4">$2.50 / $10.00</td>
              </tr>
              <tr>
                <td class="py-3.5 px-4 font-bold text-white flex items-center gap-2">
                  <span class="w-2 h-2 rounded-full bg-[#873CFF]"></span>
                  Gemini 1.5 Pro (Google DeepMind)
                </td>
                <td class="py-3.5 px-4 text-[#00D9FF] font-bold">2,000k Tokens</td>
                <td class="py-3.5 px-4">73.2%</td>
                <td class="py-3.5 px-4">84.1%</td>
                <td class="py-3.5 px-4">67.7%</td>
                <td class="py-3.5 px-4">$1.25 / $5.00</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <!-- AI Articles Grid -->
      <div class="space-y-6">
        <h3 class="text-xl font-bold text-white">AI Deep Dives & Field Reports</h3>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          ${aiArticles.map(art => `
            <div class="rounded-3xl glass-panel p-5 border border-white/10 hover-card flex flex-col justify-between group">
              <div>
                <div class="w-full h-44 rounded-2xl overflow-hidden mb-4">
                  <img src="${art.image}" alt="${art.title}" class="w-full h-full object-cover group-hover:scale-105 transition-transform">
                </div>
                <div class="text-[10px] font-mono text-[#00D9FF] mb-1">${art.category} • ${art.readTime}</div>
                <h4 class="text-base font-bold text-white group-hover:text-[#00D9FF] mb-2 leading-snug">${art.title}</h4>
                <p class="text-xs text-slate-300 line-clamp-3 leading-relaxed mb-4">${art.summary}</p>
              </div>
              <div class="pt-3 border-t border-white/10 flex items-center justify-between">
                <span class="text-xs text-slate-400">${art.author.name}</span>
                <button data-article-id="${art.id}" class="btn-open-article text-xs font-bold text-[#00D9FF] hover:text-white">Read Report →</button>
              </div>
            </div>
          `).join('')}
        </div>
      </div>

    </div>
  `;
}

