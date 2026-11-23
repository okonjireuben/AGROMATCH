// REUBEN TECH - Main Application Controller, Router & Reactive State Engine
import { ARTICLES, GADGETS, AI_TOOLS, TUTORIALS, EXPLAINERS, QUIZ_QUESTIONS, TRENDING_TOPICS, BRAND } from './data.js';
import { renderNavbar } from './components/navbar.js';
import { renderFooter } from './components/footer.js';
import { renderSearchModal } from './components/searchModal.js';
import { renderReadingListModal } from './components/readingListModal.js';
import { renderTechFinderModal } from './components/techFinderModal.js';
import { renderCompareModal } from './components/compareModal.js';
import { renderAiDirectoryModal } from './components/aiDirectory.js';
import { renderQuizModal } from './components/quizModal.js';
import { renderExplainerModal } from './components/explainerModal.js';
import { renderArticleModal } from './components/articleModal.js';

// Dedicated Pages
import { renderHomePage } from './pages/homePage.js';
import { renderNewsPage } from './pages/newsPage.js';
import { renderAiPage } from './pages/aiPage.js';
import { renderGadgetsPage } from './pages/gadgetsPage.js';
import { renderSmartphonesPage } from './pages/smartphonesPage.js';
import { renderLaptopsPage } from './pages/laptopsPage.js';
import { renderComparisonsPage } from './pages/comparisonsPage.js';
import { renderTutorialsPage } from './pages/tutorialsPage.js';
import { renderFuturePage } from './pages/futurePage.js';
import { renderGamingPage } from './pages/gamingPage.js';
import { renderAboutPage } from './pages/aboutPage.js';
import { renderContactPage } from './pages/contactPage.js';

// Global Reactive State
const state = {
  theme: localStorage.getItem('reuben_theme') || 'dark',
  savedArticleIds: JSON.parse(localStorage.getItem('reuben_saved_articles') || '[]'),
  comparedGadgetIds: JSON.parse(localStorage.getItem('reuben_compared_gadgets') || '["gadget-1", "gadget-2"]'),
  activeArticleId: null,
  activeGadgetId: null,
  isPlayingAudio: false,
  audioInterval: null,
  quizCurrentIndex: 0,
  quizScore: 0,
  quizAnswers: [],
  searchFilter: 'all'
};

// Initialize Application
export function initApp() {
  applyTheme(state.theme);
  mountAppShell();
  setupGlobalEventListeners();
  handleRouting();
  window.addEventListener('hashchange', handleRouting);
}

// Apply Theme (Dark / Light)
function applyTheme(theme) {
  state.theme = theme;
  localStorage.setItem('reuben_theme', theme);
  const root = document.documentElement;
  const sunIcon = document.getElementById('themeIconSun');
  const moonIcon = document.getElementById('themeIconMoon');

  if (theme === 'light') {
    root.classList.add('light');
    if (sunIcon) sunIcon.classList.remove('hidden');
    if (moonIcon) moonIcon.classList.add('hidden');
  } else {
    root.classList.remove('light');
    if (sunIcon) sunIcon.classList.add('hidden');
    if (moonIcon) moonIcon.classList.remove('hidden');
  }
}

// Mount Master Layout Shell
function mountAppShell() {
  const appContainer = document.getElementById('app');
  if (!appContainer) return;

  appContainer.innerHTML = `
    <div class="flex flex-col min-h-screen">
      <!-- Sticky Navigation Bar -->
      <div id="navbarContainer">${renderNavbar(state.savedArticleIds.length)}</div>

      <!-- Main Page View Target -->
      <div id="pageView" class="flex-grow"></div>

      <!-- Global Master Footer -->
      <div id="footerContainer">${renderFooter()}</div>

      <!-- Global Modals & Drawers -->
      <div id="modalsContainer">
        ${renderSearchModal()}
        ${renderReadingListModal()}
        ${renderTechFinderModal()}
        ${renderCompareModal()}
        ${renderAiDirectoryModal()}
        ${renderQuizModal()}
        ${renderExplainerModal()}
        ${renderArticleModal()}
        ${renderGadgetDetailsModal()}
        ${renderPolicyModals()}
      </div>

      <!-- Floating Toast Container -->
      <div id="toastContainer" class="fixed bottom-6 right-6 z-50 flex flex-col gap-2 pointer-events-none"></div>
    </div>
  `;
}

// Router
function handleRouting() {
  const hash = window.location.hash || '#/home';
  const pageView = document.getElementById('pageView');
  if (!pageView) return;

  window.scrollTo({ top: 0, behavior: 'smooth' });

  // Update active state on nav links
  document.querySelectorAll('.nav-link, .mobile-nav-link').forEach(link => {
    if (link.getAttribute('href') === hash) {
      link.classList.add('text-[#00D9FF]', 'bg-white/5');
      link.classList.remove('text-slate-300');
    } else {
      link.classList.remove('text-[#00D9FF]', 'bg-white/5');
      link.classList.add('text-slate-300');
    }
  });

  // Close mobile drawer on route change
  const drawer = document.getElementById('mobileNavDrawer');
  if (drawer) drawer.classList.add('hidden');

  switch (hash) {
    case '#/home':
      pageView.innerHTML = renderHomePage();
      initHeroPlexusCanvas();
      break;
    case '#/news':
      pageView.innerHTML = renderNewsPage();
      break;
    case '#/ai':
      pageView.innerHTML = renderAiPage();
      break;
    case '#/gadgets':
      pageView.innerHTML = renderGadgetsPage();
      break;
    case '#/smartphones':
      pageView.innerHTML = renderSmartphonesPage();
      break;
    case '#/laptops':
      pageView.innerHTML = renderLaptopsPage();
      break;
    case '#/comparisons':
      pageView.innerHTML = renderComparisonsPage();
      break;
    case '#/tutorials':
      pageView.innerHTML = renderTutorialsPage();
      break;
    case '#/future':
      pageView.innerHTML = renderFuturePage();
      break;
    case '#/gaming':
      pageView.innerHTML = renderGamingPage();
      break;
    case '#/about':
      pageView.innerHTML = renderAboutPage();
      break;
    case '#/contact':
      pageView.innerHTML = renderContactPage();
      break;
    default:
      pageView.innerHTML = renderHomePage();
      initHeroPlexusCanvas();
      break;
  }
}

// Particle Constellation Plexus in Hero
function initHeroPlexusCanvas() {
  const canvas = document.getElementById('heroPlexusCanvas');
  if (!canvas) return;

  const ctx = canvas.getContext('2d');
  let width = (canvas.width = canvas.parentElement.offsetWidth || window.innerWidth);
  let height = (canvas.height = canvas.parentElement.offsetHeight || 600);

  const particles = [];
  const particleCount = Math.min(Math.floor(width / 25), 45);

  for (let i = 0; i < particleCount; i++) {
    particles.push({
      x: Math.random() * width,
      y: Math.random() * height,
      vx: (Math.random() - 0.5) * 0.7,
      vy: (Math.random() - 0.5) * 0.7,
      radius: Math.random() * 2 + 1,
      color: i % 2 === 0 ? '#00D9FF' : '#873CFF'
    });
  }

  let animationFrameId;

  function render() {
    ctx.clearRect(0, 0, width, height);

    for (let i = 0; i < particles.length; i++) {
      const p = particles[i];
      p.x += p.vx;
      p.y += p.vy;

      if (p.x < 0 || p.x > width) p.vx *= -1;
      if (p.y < 0 || p.y > height) p.vy *= -1;

      ctx.beginPath();
      ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
      ctx.fillStyle = p.color;
      ctx.fill();

      for (let j = i + 1; j < particles.length; j++) {
        const p2 = particles[j];
        const dx = p.x - p2.x;
        const dy = p.y - p2.y;
        const dist = Math.sqrt(dx * dx + dy * dy);

        if (dist < 120) {
          ctx.beginPath();
          ctx.moveTo(p.x, p.y);
          ctx.lineTo(p2.x, p2.y);
          ctx.strokeStyle = `rgba(0, 217, 255, ${0.2 * (1 - dist / 120)})`;
          ctx.lineWidth = 0.75;
          ctx.stroke();
        }
      }
    }

    animationFrameId = requestAnimationFrame(render);
  }

  render();

  window.addEventListener('resize', () => {
    if (!canvas || !canvas.parentElement) return;
    width = canvas.width = canvas.parentElement.offsetWidth;
    height = canvas.height = canvas.parentElement.offsetHeight;
  }, { once: true });
}

// Global Event Listeners Setup
function setupGlobalEventListeners() {
  document.addEventListener('click', handleGlobalClicks);
  document.addEventListener('submit', handleGlobalSubmits);
  document.addEventListener('keydown', handleGlobalKeydown);
  document.addEventListener('input', handleGlobalInputs);
}

// Global Click Handlers
function handleGlobalClicks(e) {
  const target = e.target;

  // Theme Toggle
  if (target.closest('#btnToggleTheme')) {
    applyTheme(state.theme === 'dark' ? 'light' : 'dark');
    showToast(`Switched to ${state.theme.toUpperCase()} mode`);
    return;
  }

  // Mobile Menu Toggle
  if (target.closest('#btnMobileMenuToggle')) {
    const drawer = document.getElementById('mobileNavDrawer');
    if (drawer) drawer.classList.toggle('hidden');
    return;
  }

  // Open Search Modal
  if (target.closest('#btnOpenSearch')) {
    openSearchModal();
    return;
  }
  if (target.closest('#btnCloseSearchModal') || (target.id === 'searchModal' && target === e.target)) {
    closeSearchModal();
    return;
  }

  // Open Reading List Drawer
  if (target.closest('#btnOpenReadingList')) {
    openReadingListDrawer();
    return;
  }
  if (target.closest('#btnCloseReadingList') || (target.id === 'readingListDrawer' && target === e.target)) {
    closeReadingListDrawer();
    return;
  }

  // Clear Reading List
  if (target.closest('#btnClearReadingList')) {
    state.savedArticleIds = [];
    localStorage.setItem('reuben_saved_articles', '[]');
    updateReadingListUI();
    showToast('Saved reading list cleared');
    return;
  }

  // Open Article Modal
  const articleBtn = target.closest('.btn-open-article');
  if (articleBtn) {
    const articleId = articleBtn.getAttribute('data-article-id');
    if (articleId) openArticleModal(articleId);
    return;
  }
  if (target.closest('#btnCloseArticleModal') || (target.id === 'articleModal' && target === e.target)) {
    closeArticleModal();
    return;
  }

  // Bookmark in Article Modal
  if (target.closest('#btnArticleBookmark')) {
    toggleSaveArticle(state.activeArticleId);
    return;
  }

  // Share Article Link
  if (target.closest('#btnArticleShare')) {
    navigator.clipboard?.writeText(window.location.href);
    showToast('Link copied to clipboard!');
    return;
  }

  // Toggle Article Audio Player
  if (target.closest('#btnToggleAudioArticle')) {
    toggleAudioArticle();
    return;
  }

  // Like Article
  if (target.closest('#btnLikeArticle')) {
    const likesEl = document.getElementById('articleLikesCount');
    if (likesEl) {
      const current = parseInt(likesEl.textContent.replace(/,/g, ''), 10) || 0;
      likesEl.textContent = (current + 1).toLocaleString();
      showToast('Thank you for rating this dispatch!');
    }
    return;
  }

  // Open Gadget Details Modal
  const gadgetBtn = target.closest('.btn-open-gadget');
  if (gadgetBtn) {
    const gadgetId = gadgetBtn.getAttribute('data-gadget-id');
    if (gadgetId) openGadgetDetailsModal(gadgetId);
    return;
  }
  if (target.closest('#btnCloseGadgetModal') || (target.id === 'gadgetDetailsModal' && target === e.target)) {
    closeGadgetDetailsModal();
    return;
  }

  // Add to Compare
  const compareBtn = target.closest('.btn-add-compare');
  if (compareBtn) {
    const gadgetId = compareBtn.getAttribute('data-gadget-id');
    addGadgetToCompare(gadgetId);
    return;
  }

  // Open Comparison Modal
  if (target.closest('#btnLaunchCompareModal') || target.closest('#btnOpenCompareFromGadgets') || target.closest('#btnLaunchComparisonToolDirect')) {
    openCompareModal();
    return;
  }
  if (target.closest('#btnCloseCompareModal') || (target.id === 'compareModal' && target === e.target)) {
    closeCompareModal();
    return;
  }
  if (target.closest('#btnResetCompare')) {
    state.comparedGadgetIds = ['gadget-1', 'gadget-2'];
    localStorage.setItem('reuben_compared_gadgets', JSON.stringify(state.comparedGadgetIds));
    renderCompareMatrix();
    showToast('Comparison slots reset');
    return;
  }

  // Preset Comparison Buttons
  const presetBtn = target.closest('.btn-preset-compare');
  if (presetBtn) {
    const id1 = presetBtn.getAttribute('data-id1');
    const id2 = presetBtn.getAttribute('data-id2');
    state.comparedGadgetIds = [id1, id2];
    openCompareModal();
    return;
  }

  // Open Tech Finder Modal
  if (target.closest('#btnOpenDiscover') || target.closest('#btnBannerTechFinder') || target.closest('#btnMobileTechFinder') || target.closest('#btnFooterTechFinder') || target.closest('#btnOpenTechFinderFromGadgets')) {
    openTechFinderModal();
    return;
  }
  if (target.closest('#btnCloseTechFinder') || (target.id === 'techFinderModal' && target === e.target)) {
    closeTechFinderModal();
    return;
  }

  // Open AI Tool Directory
  if (target.closest('#btnFooterAiDirectory') || target.closest('#btnAiPageOpenDirectory')) {
    openAiDirectoryModal();
    return;
  }
  if (target.closest('#btnCloseAiDirectory') || (target.id === 'aiDirectoryModal' && target === e.target)) {
    closeAiDirectoryModal();
    return;
  }

  // Open Tech Quiz
  if (target.closest('#btnMobileQuiz') || target.closest('#btnFooterQuiz')) {
    openQuizModal();
    return;
  }
  if (target.closest('#btnCloseQuizModal') || (target.id === 'quizModal' && target === e.target)) {
    closeQuizModal();
    return;
  }

  // Open Tech Explainer Flashcards
  if (target.closest('#btnFooterExplainer') || target.closest('#btnAiPageOpenExplainer') || target.closest('#btnOpenGamingExplainer')) {
    openExplainerModal();
    return;
  }
  if (target.closest('#btnCloseExplainerModal') || (target.id === 'explainerModal' && target === e.target)) {
    closeExplainerModal();
    return;
  }

  // Explainer Mode Switcher (ELI5 vs Deep Dive)
  const modeBtn = target.closest('.explainer-mode-toggle');
  if (modeBtn) {
    const expId = modeBtn.getAttribute('data-id');
    const mode = modeBtn.getAttribute('data-mode');
    const exp = EXPLAINERS.find(e => e.id === expId);
    const bodyEl = document.getElementById(`explainer-body-${expId}`);
    const parent = modeBtn.parentElement;

    if (exp && bodyEl) {
      bodyEl.textContent = mode === 'eli5' ? exp.eli5 : exp.deepDive;
      parent.querySelectorAll('.explainer-mode-toggle').forEach(b => {
        b.classList.remove('active', 'bg-[#287BFF]', 'text-white');
        b.classList.add('text-slate-400');
      });
      modeBtn.classList.add('active', 'bg-[#287BFF]', 'text-white');
      modeBtn.classList.remove('text-slate-400');
    }
    return;
  }

  // News Grid Category Filter Pill
  const newsCatBtn = target.closest('.news-category-filter');
  if (newsCatBtn) {
    const cat = newsCatBtn.getAttribute('data-category');
    document.querySelectorAll('.news-category-filter').forEach(b => {
      b.classList.remove('bg-gradient-to-r', 'from-[#287BFF]', 'to-[#873CFF]', 'text-white', 'shadow-lg');
      b.classList.add('bg-white/5', 'text-slate-300');
    });
    newsCatBtn.classList.add('bg-gradient-to-r', 'from-[#287BFF]', 'to-[#873CFF]', 'text-white', 'shadow-lg');
    newsCatBtn.classList.remove('bg-white/5', 'text-slate-300');

    // Re-render section news grid with that filter
    const section = document.getElementById('sectionNewsGrid');
    if (section) {
      const container = document.createElement('div');
      container.innerHTML = renderNewsGrid(cat);
      section.replaceWith(container.firstElementChild);
    }
    return;
  }

  // Gadget Deck Category Filter Pill
  const gadgetCatBtn = target.closest('.gadget-cat-pill');
  if (gadgetCatBtn) {
    const cat = gadgetCatBtn.getAttribute('data-cat');
    const section = document.getElementById('sectionGadgetDeck');
    if (section) {
      const container = document.createElement('div');
      container.innerHTML = renderGadgetDeck(cat);
      section.replaceWith(container.firstElementChild);
    }
    return;
  }

  // Neural Sandbox Run Simulator Button
  if (target.closest('#btnRunNeuralSim')) {
    runNeuralSimulation();
    return;
  }
  const presetNeural = target.closest('.btn-neural-preset');
  if (presetNeural) {
    const pInput = document.getElementById('neuralPromptInput');
    if (pInput) {
      pInput.value = presetNeural.getAttribute('data-prompt');
      runNeuralSimulation();
    }
    return;
  }

  // Policy Modals Triggers
  if (target.closest('#btnOpenEditorialPolicy')) {
    openModal('modalEditorialPolicy');
    return;
  }
  if (target.closest('#btnOpenPrivacyPolicy')) {
    openModal('modalPrivacyPolicy');
    return;
  }
  if (target.closest('#btnOpenTerms')) {
    openModal('modalTerms');
    return;
  }
  if (target.closest('.btn-close-policy-modal')) {
    closeAllModals();
    return;
  }

  // Newsletter Header CTA
  if (target.closest('#btnHeaderNewsletter')) {
    const nlSection = document.getElementById('newsletterForm');
    if (nlSection) {
      nlSection.scrollIntoView({ behavior: 'smooth' });
      document.getElementById('newsletterEmail')?.focus();
    } else {
      window.location.hash = '#/home';
      setTimeout(() => {
        document.getElementById('newsletterForm')?.scrollIntoView({ behavior: 'smooth' });
        document.getElementById('newsletterEmail')?.focus();
      }, 200);
    }
    return;
  }
}

// Global Keydown (Ctrl+K for Search, Escape to Close)
function handleGlobalKeydown(e) {
  if ((e.ctrlKey || e.metaKey) && (e.key === 'k' || e.key === 'K')) {
    e.preventDefault();
    openSearchModal();
  }
  if (e.key === 'Escape') {
    closeAllModals();
  }
}

// Global Inputs
function handleGlobalInputs(e) {
  if (e.target.id === 'searchInputField') {
    runSearch(e.target.value);
  }
  if (e.target.id === 'tfFilterCategory' || e.target.id === 'tfFilterBrand' || e.target.id === 'tfFilterScore') {
    filterTechFinder();
  }
  if (e.target.id === 'aiDirectorySearch') {
    filterAiDirectory(e.target.value);
  }
}

// Global Submits (Forms)
function handleGlobalSubmits(e) {
  e.preventDefault();

  // Newsletter Form
  if (e.target.id === 'newsletterForm') {
    const emailInput = document.getElementById('newsletterEmail');
    const feedback = document.getElementById('newsletterFeedback');
    const email = emailInput?.value.trim();

    if (!email || !/\S+@\S+\.\S+/.test(email)) {
      if (feedback) {
        feedback.className = 'text-xs py-2 px-4 rounded-xl bg-rose-500/20 text-rose-300 border border-rose-500/30';
        feedback.textContent = 'Please provide a valid corporate or personal email address.';
        feedback.classList.remove('hidden');
      }
      return;
    }

    // Persist newsletter subscriber
    const subs = JSON.parse(localStorage.getItem('reuben_newsletter_subscribers') || '[]');
    if (!subs.includes(email)) subs.push(email);
    localStorage.setItem('reuben_newsletter_subscribers', JSON.stringify(subs));

    if (feedback) {
      feedback.className = 'text-xs py-2 px-4 rounded-xl bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 font-bold';
      feedback.textContent = `✓ Access granted! Welcome to Reuben Tech Frontier Dispatch, ${email}.`;
      feedback.classList.remove('hidden');
    }
    emailInput.value = '';
    showToast('Subscribed to Frontier Dispatch!');
    return;
  }

  // Contact Form
  if (e.target.id === 'contactForm') {
    const name = document.getElementById('contactName')?.value.trim();
    const email = document.getElementById('contactEmail')?.value.trim();
    const message = document.getElementById('contactMessage')?.value.trim();
    const feedback = document.getElementById('contactFormFeedback');

    if (!name || !email || !message) {
      if (feedback) {
        feedback.className = 'text-xs py-2.5 px-4 rounded-xl bg-rose-500/20 text-rose-300 border border-rose-500/30';
        feedback.textContent = 'All fields are required to route your message to our editors.';
        feedback.classList.remove('hidden');
      }
      return;
    }

    if (feedback) {
      feedback.className = 'text-xs py-2.5 px-4 rounded-xl bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 font-bold';
      feedback.textContent = `✓ Transmission received. PGP confirmation sent to ${email}. Our newsroom will respond within 4 hours.`;
      feedback.classList.remove('hidden');
    }
    e.target.reset();
    showToast('Secure transmission sent to newsroom');
    return;
  }

  // Article Comment Form
  if (e.target.id === 'commentForm') {
    const input = document.getElementById('commentInput');
    const list = document.getElementById('commentsList');
    const comment = input?.value.trim();

    if (!comment) return;

    if (list) {
      const newComment = document.createElement('div');
      newComment.className = 'p-4 rounded-2xl bg-white/5 border border-white/5 space-y-2';
      newComment.innerHTML = `
        <div class="flex items-center justify-between text-xs">
          <span class="font-bold text-[#00D9FF]">You (Verified Reader)</span>
          <span class="text-slate-400 font-mono">Just now</span>
        </div>
        <p class="text-xs text-slate-200">${comment.replace(/</g, '&lt;').replace(/>/g, '&gt;')}</p>
      `;
      list.prepend(newComment);
    }
    input.value = '';
    showToast('Comment published to discussion');
    return;
  }
}

// Feature 7: Search Implementation
function openSearchModal() {
  const modal = document.getElementById('searchModal');
  if (modal) {
    modal.classList.remove('hidden');
    const input = document.getElementById('searchInputField');
    if (input) {
      input.focus();
      runSearch(input.value);
    }
  }
}
function closeSearchModal() {
  document.getElementById('searchModal')?.classList.add('hidden');
}

function runSearch(query) {
  const container = document.getElementById('searchResultsContainer');
  if (!container) return;

  const cleanQuery = query.toLowerCase().trim();

  if (!cleanQuery) {
    container.innerHTML = `
      <div class="text-xs text-slate-400 text-center py-8">
        Type a query above (e.g. "Silicon", "Photonics", "iPhone", "Quantum", "Wi-Fi 7", "Battery")
      </div>
    `;
    return;
  }

  const matchingArticles = ARTICLES.filter(a => 
    a.title.toLowerCase().includes(cleanQuery) ||
    a.summary.toLowerCase().includes(cleanQuery) ||
    a.category.toLowerCase().includes(cleanQuery) ||
    a.tags.some(t => t.toLowerCase().includes(cleanQuery))
  );

  const matchingGadgets = GADGETS.filter(g =>
    g.name.toLowerCase().includes(cleanQuery) ||
    g.brand.toLowerCase().includes(cleanQuery) ||
    g.category.toLowerCase().includes(cleanQuery) ||
    g.verdict.toLowerCase().includes(cleanQuery)
  );

  if (matchingArticles.length === 0 && matchingGadgets.length === 0) {
    container.innerHTML = `
      <div class="text-xs text-slate-400 text-center py-8 space-y-2">
        <div>No direct matches found for "<span class="text-white">${query}</span>"</div>
        <div class="text-[11px] text-slate-400">Try searching for "Quantum", "Photonics", "Flagship", or "OLED"</div>
      </div>
    `;
    return;
  }

  let html = '';

  if (matchingArticles.length > 0) {
    html += `<div class="text-[10px] font-mono font-bold uppercase tracking-wider text-[#00D9FF] px-2 pt-1">Articles & News (${matchingArticles.length})</div>`;
    matchingArticles.forEach(a => {
      html += `
        <div class="p-3 rounded-2xl bg-white/5 hover:bg-white/10 border border-white/5 flex items-center justify-between gap-4 cursor-pointer btn-open-article" data-article-id="${a.id}">
          <div class="flex items-center gap-3">
            <img src="${a.image}" alt="${a.title}" class="w-12 h-12 rounded-xl object-cover flex-shrink-0">
            <div>
              <div class="text-xs font-bold text-white line-clamp-1">${a.title}</div>
              <div class="text-[10px] text-slate-400 font-mono">${a.category} • ${a.readTime}</div>
            </div>
          </div>
          <span class="text-xs text-[#00D9FF] font-mono whitespace-nowrap">Open →</span>
        </div>
      `;
    });
  }

  if (matchingGadgets.length > 0) {
    html += `<div class="text-[10px] font-mono font-bold uppercase tracking-wider text-[#FF7138] px-2 pt-3">Hardware & Lab Reviews (${matchingGadgets.length})</div>`;
    matchingGadgets.forEach(g => {
      html += `
        <div class="p-3 rounded-2xl bg-white/5 hover:bg-white/10 border border-white/5 flex items-center justify-between gap-4 cursor-pointer btn-open-gadget" data-gadget-id="${g.id}">
          <div class="flex items-center gap-3">
            <img src="${g.image}" alt="${g.name}" class="w-12 h-12 rounded-xl object-cover flex-shrink-0">
            <div>
              <div class="text-xs font-bold text-white line-clamp-1">${g.name}</div>
              <div class="text-[10px] text-slate-400 font-mono">${g.brand} • ${g.price} • Rating: ${g.rating}/10</div>
            </div>
          </div>
          <span class="text-xs text-[#FF7138] font-mono whitespace-nowrap">Inspect →</span>
        </div>
      `;
    });
  }

  container.innerHTML = html;
}

// Feature 5: Reading List Drawer
function openReadingListDrawer() {
  updateReadingListUI();
  document.getElementById('readingListDrawer')?.classList.remove('translate-x-full');
}
function closeReadingListDrawer() {
  document.getElementById('readingListDrawer')?.classList.add('translate-x-full');
}

function toggleSaveArticle(articleId) {
  if (!articleId) return;
  const index = state.savedArticleIds.indexOf(articleId);
  if (index > -1) {
    state.savedArticleIds.splice(index, 1);
    showToast('Removed from reading list');
  } else {
    state.savedArticleIds.push(articleId);
    showToast('Saved to reading list!');
  }
  localStorage.setItem('reuben_saved_articles', JSON.stringify(state.savedArticleIds));
  updateReadingListBadge();
  updateReadingListUI();
  updateArticleBookmarkBtnState();
}

function updateReadingListBadge() {
  const badge = document.getElementById('savedCountBadge');
  if (badge) {
    const count = state.savedArticleIds.length;
    badge.textContent = count;
    if (count > 0) badge.classList.remove('hidden');
    else badge.classList.add('hidden');
  }
}

function updateReadingListUI() {
  updateReadingListBadge();
  const listEl = document.getElementById('savedArticlesList');
  if (!listEl) return;

  if (state.savedArticleIds.length === 0) {
    listEl.innerHTML = `
      <div class="text-center py-12 text-slate-400 space-y-3">
        <svg class="w-10 h-10 mx-auto text-slate-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="m19 21-7-4-7 4V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v16z"/></svg>
        <p class="text-xs">Your reading list is empty.</p>
        <p class="text-[11px] text-slate-400">Click the bookmark icon on any article to store it for offline reading.</p>
      </div>
    `;
    return;
  }

  const saved = ARTICLES.filter(a => state.savedArticleIds.includes(a.id));
  listEl.innerHTML = saved.map(item => `
    <div class="p-3.5 rounded-2xl glass-panel border border-white/10 flex items-center justify-between gap-3 group">
      <div class="flex items-center gap-3 cursor-pointer btn-open-article" data-article-id="${item.id}">
        <img src="${item.image}" alt="${item.title}" class="w-12 h-12 rounded-xl object-cover">
        <div>
          <h4 class="text-xs font-bold text-white group-hover:text-[#00D9FF] line-clamp-1">${item.title}</h4>
          <span class="text-[10px] font-mono text-slate-400">${item.readTime} • ${item.category}</span>
        </div>
      </div>
      <button class="p-1.5 rounded-lg text-slate-400 hover:text-rose-400 hover:bg-rose-500/10" onclick="window.removeSavedArticle('${item.id}')" title="Remove">
        <svg class="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg>
      </button>
    </div>
  `).join('');
}

window.removeSavedArticle = function(id) {
  toggleSaveArticle(id);
};

// Article Modal Implementation
function openArticleModal(articleId) {
  const article = ARTICLES.find(a => a.id === articleId);
  if (!article) return;

  state.activeArticleId = article.id;
  const modal = document.getElementById('articleModal');
  if (!modal) return;

  document.getElementById('articleFeaturedImg').src = article.image;
  document.getElementById('articleFeaturedImg').alt = article.title;
  document.getElementById('articleModalTitle').textContent = article.title;
  document.getElementById('articleModalSubtitle').textContent = article.subtitle;
  document.getElementById('articleAuthorImg').src = article.author.avatar;
  document.getElementById('articleAuthorName').textContent = article.author.name;
  document.getElementById('articleAuthorRole').textContent = `${article.author.role} • ${article.date}`;
  document.getElementById('articleViewsCount').textContent = article.views.toLocaleString();
  document.getElementById('articleLikesCount').textContent = article.likes.toLocaleString();

  // Takeaways
  const takeawaysList = document.getElementById('articleTakeawaysList');
  if (takeawaysList && article.takeaways) {
    takeawaysList.innerHTML = article.takeaways.map(t => `
      <li class="flex items-start gap-2"><span class="text-[#00D9FF] font-bold mt-0.5">▸</span><span>${t}</span></li>
    `).join('');
  }

  // Body HTML
  document.getElementById('articleHtmlBody').innerHTML = article.content;

  updateArticleBookmarkBtnState();
  modal.classList.remove('hidden');
}

function updateArticleBookmarkBtnState() {
  const btn = document.getElementById('btnArticleBookmark');
  if (!btn || !state.activeArticleId) return;

  const isSaved = state.savedArticleIds.includes(state.activeArticleId);
  if (isSaved) {
    btn.className = 'p-2 rounded-xl bg-[#287BFF] text-white border border-white/10 transition-all';
  } else {
    btn.className = 'p-2 rounded-xl bg-white/5 text-slate-300 hover:text-white border border-white/10 transition-all';
  }
}

function closeArticleModal() {
  document.getElementById('articleModal')?.classList.add('hidden');
  stopAudioArticle();
}

function toggleAudioArticle() {
  state.isPlayingAudio = !state.isPlayingAudio;
  const playIcon = document.getElementById('audioPlayIcon');
  const pauseIcon = document.getElementById('audioPauseIcon');
  const waveform = document.getElementById('audioWaveform');

  if (state.isPlayingAudio) {
    playIcon?.classList.add('hidden');
    pauseIcon?.classList.remove('hidden');
    waveform?.classList.remove('hidden');
    showToast('Audio narration playing (AI Speech)');
  } else {
    stopAudioArticle();
  }
}

function stopAudioArticle() {
  state.isPlayingAudio = false;
  document.getElementById('audioPlayIcon')?.classList.remove('hidden');
  document.getElementById('audioPauseIcon')?.classList.add('hidden');
  document.getElementById('audioWaveform')?.classList.add('hidden');
}

// Gadget Details Modal
function renderGadgetDetailsModal() {
  return `
    <div id="gadgetDetailsModal" class="fixed inset-0 z-50 hidden flex items-center justify-center p-3 sm:p-6 bg-black/85 backdrop-blur-md">
      <div class="relative w-full max-w-3xl max-h-[92vh] rounded-3xl glass-panel p-6 sm:p-8 border border-white/20 shadow-2xl overflow-y-auto modal-enter flex flex-col">
        
        <div class="flex items-center justify-between pb-6 border-b border-white/10">
          <div>
            <span id="gDetailBadge" class="badge-pill bg-[#287BFF] text-white text-[10px]">CATEGORY</span>
            <h3 id="gDetailTitle" class="text-xl sm:text-2xl font-bold text-white mt-1">Product Name</h3>
            <div id="gDetailSub" class="text-xs font-mono text-slate-400">Price • Brand</div>
          </div>
          <button id="btnCloseGadgetModal" class="p-2 rounded-xl text-slate-400 hover:text-white hover:bg-white/10">
            <svg class="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg>
          </button>
        </div>

        <div class="py-6 space-y-6">
          <div class="w-full h-64 rounded-2xl overflow-hidden bg-black/40">
            <img id="gDetailImage" src="" alt="" class="w-full h-full object-cover">
          </div>

          <!-- Verdict -->
          <div class="p-4 rounded-2xl bg-white/5 border border-white/5">
            <div class="text-xs font-mono font-bold text-[#00D9FF] mb-1">REUBEN TECH LAB VERDICT</div>
            <p id="gDetailVerdict" class="text-sm text-slate-200 leading-relaxed"></p>
          </div>

          <!-- Specs Breakdown -->
          <div class="space-y-3">
            <h4 class="text-xs font-mono font-bold uppercase tracking-wider text-slate-300">Laboratory Specifications Breakdown:</h4>
            <div id="gDetailSpecsList" class="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs font-mono"></div>
          </div>

          <!-- Pros and Cons -->
          <div class="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
            <div>
              <h5 class="text-xs font-bold text-emerald-400 font-mono mb-2">PROS</h5>
              <ul id="gDetailPros" class="space-y-1.5 text-xs text-slate-300"></ul>
            </div>
            <div>
              <h5 class="text-xs font-bold text-rose-400 font-mono mb-2">CONS</h5>
              <ul id="gDetailCons" class="space-y-1.5 text-xs text-slate-300"></ul>
            </div>
          </div>
        </div>

        <div class="pt-4 border-t border-white/10 flex justify-end">
          <button id="gDetailBtnAddCompare" class="px-5 py-2.5 rounded-xl bg-gradient-to-r from-[#287BFF] to-[#873CFF] text-xs font-bold text-white shadow-lg">
            + Add to Comparison Tool
          </button>
        </div>

      </div>
    </div>
  `;
}

function openGadgetDetailsModal(gadgetId) {
  const gadget = GADGETS.find(g => g.id === gadgetId);
  if (!gadget) return;

  state.activeGadgetId = gadget.id;
  document.getElementById('gDetailBadge').textContent = gadget.category;
  document.getElementById('gDetailTitle').textContent = gadget.name;
  document.getElementById('gDetailSub').textContent = `${gadget.brand} • ${gadget.price} • Score: ${gadget.rating}/10`;
  document.getElementById('gDetailImage').src = gadget.image;
  document.getElementById('gDetailVerdict').textContent = `"${gadget.verdict}"`;

  // Specs
  const specsList = document.getElementById('gDetailSpecsList');
  if (specsList) {
    specsList.innerHTML = Object.entries(gadget.specs).map(([key, value]) => `
      <div class="p-2.5 rounded-xl bg-white/5 border border-white/5">
        <span class="text-slate-400 uppercase text-[10px] block">${key}</span>
        <span class="text-white">${value}</span>
      </div>
    `).join('');
  }

  // Pros & Cons
  document.getElementById('gDetailPros').innerHTML = gadget.pros.map(p => `<li>• ${p}</li>`).join('');
  document.getElementById('gDetailCons').innerHTML = gadget.cons.map(c => `<li>• ${c}</li>`).join('');

  document.getElementById('gDetailBtnAddCompare').onclick = () => {
    addGadgetToCompare(gadget.id);
  };

  document.getElementById('gadgetDetailsModal')?.classList.remove('hidden');
}

function closeGadgetDetailsModal() {
  document.getElementById('gadgetDetailsModal')?.classList.add('hidden');
}

// Feature 2: Product Comparison Tool Implementation
function addGadgetToCompare(gadgetId) {
  if (!gadgetId) return;
  if (!state.comparedGadgetIds.includes(gadgetId)) {
    if (state.comparedGadgetIds.length >= 3) {
      state.comparedGadgetIds.shift(); // keep max 3
    }
    state.comparedGadgetIds.push(gadgetId);
    localStorage.setItem('reuben_compared_gadgets', JSON.stringify(state.comparedGadgetIds));
  }
  openCompareModal();
  showToast('Device added to comparison matrix');
}

function openCompareModal() {
  renderCompareMatrix();
  document.getElementById('compareModal')?.classList.remove('hidden');
}
function closeCompareModal() {
  document.getElementById('compareModal')?.classList.add('hidden');
}

function renderCompareMatrix() {
  const container = document.getElementById('compareMatrixContent');
  if (!container) return;

  const devices = state.comparedGadgetIds.map(id => GADGETS.find(g => g.id === id)).filter(Boolean);

  if (devices.length === 0) {
    container.innerHTML = `<div class="text-center py-12 text-slate-400">Select devices from the catalog to compare.</div>`;
    return;
  }

  const specKeys = ['processor', 'display', 'ram', 'storage', 'battery', 'camera', 'weight', 'os'];

  container.innerHTML = `
    <table class="w-full text-left text-xs font-mono">
      <thead>
        <tr class="border-b border-white/10">
          <th class="py-4 px-4 text-slate-400 w-36">Metric / Spec</th>
          ${devices.map(d => `
            <th class="py-4 px-4 min-w-[200px]">
              <div class="space-y-2">
                <img src="${d.image}" alt="${d.name}" class="w-full h-28 rounded-xl object-cover">
                <div class="font-bold text-white text-sm font-sans">${d.name}</div>
                <div class="text-xs text-[#00D9FF]">${d.price} • ${d.brand}</div>
                <div class="px-2 py-1 rounded bg-[#287BFF]/20 text-[#00D9FF] inline-block font-bold">
                  Score: ${d.rating} / 10
                </div>
              </div>
            </th>
          `).join('')}
        </tr>
      </thead>
      <tbody class="divide-y divide-white/10 text-slate-200">
        ${specKeys.map(key => `
          <tr>
            <td class="py-3 px-4 font-bold text-slate-400 uppercase text-[10px]">${key}</td>
            ${devices.map(d => `<td class="py-3 px-4 text-white">${d.specs[key] || '—'}</td>`).join('')}
          </tr>
        `).join('')}
        <tr>
          <td class="py-3 px-4 font-bold text-emerald-400 uppercase text-[10px]">Top Strength</td>
          ${devices.map(d => `<td class="py-3 px-4 text-emerald-300 font-sans">${d.pros[0]}</td>`).join('')}
        </tr>
      </tbody>
    </table>
  `;
}

// Feature 1: Tech Finder
function openTechFinderModal() {
  filterTechFinder();
  document.getElementById('techFinderModal')?.classList.remove('hidden');
}
function closeTechFinderModal() {
  document.getElementById('techFinderModal')?.classList.add('hidden');
}

function filterTechFinder() {
  const cat = document.getElementById('tfFilterCategory')?.value || 'All';
  const brand = document.getElementById('tfFilterBrand')?.value || 'All';
  const minScore = parseFloat(document.getElementById('tfFilterScore')?.value || '0');

  const matches = GADGETS.filter(g => {
    const matchCat = cat === 'All' || g.category.toLowerCase() === cat.toLowerCase();
    const matchBrand = brand === 'All' || g.brand.toLowerCase() === brand.toLowerCase();
    const matchScore = g.rating >= minScore;
    return matchCat && matchBrand && matchScore;
  });

  const countEl = document.getElementById('tfMatchCount');
  if (countEl) countEl.textContent = `Found ${matches.length} matching devices`;

  const grid = document.getElementById('tfResultsGrid');
  if (grid) {
    if (matches.length === 0) {
      grid.innerHTML = `<div class="col-span-3 text-center py-12 text-slate-400">No hardware matches those precise criteria. Try broadening filters.</div>`;
      return;
    }
    grid.innerHTML = matches.map(m => `
      <div class="rounded-2xl glass-panel p-4 border border-white/10 hover-card flex flex-col justify-between">
        <div>
          <div class="w-full h-32 rounded-xl overflow-hidden mb-3 bg-black/40 relative">
            <img src="${m.image}" alt="${m.name}" class="w-full h-full object-cover">
            <span class="absolute top-2 left-2 badge-pill bg-[#287BFF] text-white text-[9px]">${m.category}</span>
            <span class="absolute bottom-2 right-2 px-1.5 py-0.5 rounded bg-black/75 text-[10px] font-mono font-bold text-[#00D9FF]">${m.rating}</span>
          </div>
          <h4 class="text-sm font-bold text-white line-clamp-1">${m.name}</h4>
          <div class="text-[11px] font-mono text-slate-400 mb-2">${m.brand} • ${m.price}</div>
          <p class="text-[11px] text-slate-300 line-clamp-2 leading-relaxed mb-3">${m.verdict}</p>
        </div>
        <button data-gadget-id="${m.id}" class="btn-open-gadget w-full py-2 rounded-lg bg-white/10 hover:bg-[#287BFF] text-xs font-bold text-white transition-all">
          Inspect Specs
        </button>
      </div>
    `).join('');
  }
}

// Feature 3: AI Directory
function openAiDirectoryModal() {
  filterAiDirectory('');
  document.getElementById('aiDirectoryModal')?.classList.remove('hidden');
}
function closeAiDirectoryModal() {
  document.getElementById('aiDirectoryModal')?.classList.add('hidden');
}

function filterAiDirectory(query = '', activeCategory = 'All') {
  const grid = document.getElementById('aiDirectoryGrid');
  if (!grid) return;

  const cleanQuery = query.toLowerCase().trim();
  const filtered = AI_TOOLS.filter(t => {
    const matchCat = activeCategory === 'All' || t.category === activeCategory;
    const matchSearch = !cleanQuery || t.name.toLowerCase().includes(cleanQuery) || t.description.toLowerCase().includes(cleanQuery) || t.maker.toLowerCase().includes(cleanQuery);
    return matchCat && matchSearch;
  });

  if (filtered.length === 0) {
    grid.innerHTML = `<div class="col-span-2 text-center py-12 text-slate-400">No AI tools matched your search query.</div>`;
    return;
  }

  grid.innerHTML = filtered.map(tool => `
    <div class="rounded-2xl glass-panel p-5 border border-white/10 hover-card flex flex-col justify-between group">
      <div>
        <div class="flex items-center justify-between mb-3">
          <span class="badge-pill bg-[#873CFF]/20 text-[#00D9FF] border border-[#873CFF]/30 text-[10px]">${tool.category}</span>
          <span class="badge-pill bg-white/5 text-slate-300 font-mono text-[10px]">${tool.badge}</span>
        </div>
        <div class="flex items-center justify-between">
          <h4 class="text-base font-bold text-white group-hover:text-[#00D9FF] transition-colors">${tool.name}</h4>
          <span class="text-xs font-mono text-emerald-400">${tool.rating} ★</span>
        </div>
        <div class="text-[11px] font-mono text-slate-400 mb-2">By ${tool.maker} • ${tool.pricing}</div>
        <p class="text-xs text-slate-300 leading-relaxed mb-3">${tool.description}</p>
        <div class="text-[11px] text-slate-400 bg-white/5 p-2 rounded-xl border border-white/5 mb-4">
          <span class="text-[#00D9FF] font-semibold">Primary Use Case:</span> ${tool.useCase}
        </div>
      </div>
      <a href="${tool.link}" target="_blank" rel="noopener noreferrer" class="w-full py-2.5 rounded-xl bg-gradient-to-r from-[#287BFF] to-[#873CFF] text-xs font-bold text-white text-center shadow-md flex items-center justify-center gap-1.5 hover:opacity-95">
        <span>Launch Official Site</span>
        <svg class="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/></svg>
      </a>
    </div>
  `).join('');
}

// Feature 4: Tech Quiz
function openQuizModal() {
  state.quizCurrentIndex = 0;
  state.quizScore = 0;
  state.quizAnswers = [];
  renderQuizQuestion();
  document.getElementById('quizModal')?.classList.remove('hidden');
}
function closeQuizModal() {
  document.getElementById('quizModal')?.classList.add('hidden');
}

function renderQuizQuestion() {
  const content = document.getElementById('quizContentArea');
  const tracker = document.getElementById('quizQuestionTracker');
  const scoreTracker = document.getElementById('quizScoreTracker');
  const progressBar = document.getElementById('quizProgressBar');

  if (!content) return;

  const total = QUIZ_QUESTIONS.length;
  const curr = state.quizCurrentIndex;

  if (curr >= total) {
    // Show Final Results Screen
    const percentage = Math.round((state.quizScore / total) * 100);
    let title = "Junior Tech Observer";
    let badgeColor = "from-amber-500 to-rose-500";
    if (percentage >= 80) {
      title = "Distinguished Hardware & AI Fellow";
      badgeColor = "from-[#00D9FF] to-[#873CFF]";
    } else if (percentage >= 60) {
      title = "Senior Systems Architect";
      badgeColor = "from-[#287BFF] to-[#00D9FF]";
    }

    content.innerHTML = `
      <div class="text-center py-6 space-y-6">
        <div class="w-20 h-20 mx-auto rounded-3xl bg-gradient-to-tr ${badgeColor} p-[2px] shadow-2xl">
          <div class="w-full h-full bg-[#101426] rounded-[22px] flex items-center justify-center">
            <span class="text-3xl font-black text-white font-mono">${percentage}%</span>
          </div>
        </div>

        <div>
          <span class="badge-pill bg-[#00D9FF]/20 text-[#00D9FF] text-xs font-mono uppercase mb-2">BENCHMARK RESULT</span>
          <h4 class="text-2xl font-black text-white">${title}</h4>
          <p class="text-xs text-slate-300 max-w-md mx-auto mt-2">
            You scored ${state.quizScore} out of ${total} on the Reuben Tech Frontier IQ examination.
          </p>
        </div>

        <div class="pt-4 flex justify-center gap-3">
          <button onclick="window.restartTechQuiz()" class="px-6 py-3 rounded-xl bg-gradient-to-r from-[#287BFF] to-[#873CFF] text-xs font-bold text-white shadow-lg">
            Retake Exam
          </button>
          <button onclick="window.closeQuizModal()" class="px-6 py-3 rounded-xl bg-white/10 hover:bg-white/15 text-xs font-bold text-white">
            Close Benchmark
          </button>
        </div>
      </div>
    `;
    return;
  }

  const q = QUIZ_QUESTIONS[curr];
  if (tracker) tracker.textContent = `Question ${curr + 1} of ${total}`;
  if (scoreTracker) scoreTracker.textContent = `Score: ${state.quizScore} / ${total}`;
  if (progressBar) progressBar.style.width = `${((curr + 1) / total) * 100}%`;

  content.innerHTML = `
    <div class="space-y-6">
      <h4 class="text-base sm:text-lg font-bold text-white leading-snug">
        ${q.question}
      </h4>

      <div class="space-y-3">
        ${q.options.map((opt, idx) => `
          <button class="quiz-option-btn w-full p-4 rounded-2xl bg-white/5 hover:bg-white/10 border border-white/10 text-left text-xs font-medium text-slate-200 transition-all flex items-start gap-3" onclick="window.submitQuizAnswer(${idx})">
            <span class="w-5 h-5 rounded-full bg-white/10 flex items-center justify-center text-[10px] font-mono flex-shrink-0 text-[#00D9FF]">${String.fromCharCode(65 + idx)}</span>
            <span>${opt}</span>
          </button>
        `).join('')}
      </div>

      <div id="quizExplanationBox" class="hidden p-4 rounded-2xl border text-xs leading-relaxed"></div>
    </div>
  `;
}

window.submitQuizAnswer = function(chosenIdx) {
  const curr = state.quizCurrentIndex;
  const q = QUIZ_QUESTIONS[curr];
  const box = document.getElementById('quizExplanationBox');
  const btns = document.querySelectorAll('.quiz-option-btn');

  btns.forEach(b => b.disabled = true);

  if (chosenIdx === q.correctAnswer) {
    state.quizScore++;
    btns[chosenIdx].classList.add('bg-emerald-500/20', 'border-emerald-500/40', 'text-emerald-300');
    if (box) {
      box.className = 'p-4 rounded-2xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-300 block space-y-1';
      box.innerHTML = `<div class="font-bold">✓ Correct!</div><p>${q.explanation}</p>`;
    }
  } else {
    btns[chosenIdx].classList.add('bg-rose-500/20', 'border-rose-500/40', 'text-rose-300');
    btns[q.correctAnswer].classList.add('bg-emerald-500/20', 'border-emerald-500/40', 'text-emerald-300');
    if (box) {
      box.className = 'p-4 rounded-2xl bg-rose-500/10 border border-rose-500/30 text-rose-300 block space-y-1';
      box.innerHTML = `<div class="font-bold">✕ Incorrect</div><p>${q.explanation}</p>`;
    }
  }

  setTimeout(() => {
    state.quizCurrentIndex++;
    renderQuizQuestion();
  }, 2200);
};

window.restartTechQuiz = function() {
  state.quizCurrentIndex = 0;
  state.quizScore = 0;
  renderQuizQuestion();
};

window.closeQuizModal = closeQuizModal;

// Feature 8: Explainer Modal
function openExplainerModal() {
  document.getElementById('explainerModal')?.classList.remove('hidden');
}
function closeExplainerModal() {
  document.getElementById('explainerModal')?.classList.add('hidden');
}

// Neural Simulator Function
function runNeuralSimulation() {
  const input = document.getElementById('neuralPromptInput');
  const prompt = input?.value.trim() || 'Silicon photonics';
  const display = document.getElementById('neuralVectorDisplay');
  const conf = document.getElementById('neuralConfidence');
  const match = document.getElementById('neuralSemanticMatch');

  if (conf) conf.textContent = `CONFIDENCE: ${(98 + Math.random() * 1.9).toFixed(2)}%`;

  // Generate pseudo-random vector
  const vec = Array.from({ length: 8 }, () => (Math.random() * 2 - 1).toFixed(4));
  if (display) display.textContent = `[${vec.join(', ')}...]`;

  if (match) {
    match.innerHTML = `Semantic Clustering: <span class="text-emerald-400">Embedding verified for "${prompt}" (Cos-Sim: 0.941)</span>`;
  }

  showToast('Synthesized tensor embeddings in 1.2ms');
}

// Policy Modals HTML
function renderPolicyModals() {
  return `
    <div id="modalEditorialPolicy" class="fixed inset-0 z-50 hidden flex items-center justify-center p-4 bg-black/80 backdrop-blur-md">
      <div class="relative w-full max-w-2xl max-h-[85vh] rounded-3xl glass-panel p-6 sm:p-8 border border-white/20 shadow-2xl overflow-y-auto">
        <div class="flex items-center justify-between pb-4 border-b border-white/10">
          <h3 class="text-xl font-bold text-white">Editorial & Testing Charter</h3>
          <button class="btn-close-policy-modal p-2 rounded-xl text-slate-400 hover:text-white">✕</button>
        </div>
        <div class="py-4 space-y-3 text-xs text-slate-300 leading-relaxed">
          <p>REUBEN TECH operates under strict independence. Our journalists and lab analysts are prohibited from owning single-stock equities in companies they evaluate.</p>
          <p>Hardware testing protocols are completely deterministic: thermal profiling requires standardized 22°C ambient temperatures, and battery drain loops run with calibrated 150-nit display outputs.</p>
        </div>
      </div>
    </div>

    <div id="modalPrivacyPolicy" class="fixed inset-0 z-50 hidden flex items-center justify-center p-4 bg-black/80 backdrop-blur-md">
      <div class="relative w-full max-w-2xl max-h-[85vh] rounded-3xl glass-panel p-6 sm:p-8 border border-white/20 shadow-2xl overflow-y-auto">
        <div class="flex items-center justify-between pb-4 border-b border-white/10">
          <h3 class="text-xl font-bold text-white">Privacy & Data Governance</h3>
          <button class="btn-close-policy-modal p-2 rounded-xl text-slate-400 hover:text-white">✕</button>
        </div>
        <div class="py-4 space-y-3 text-xs text-slate-300 leading-relaxed">
          <p>We do not track visitors across third-party networks or sell reader behavioral data. Reading list items and theme preferences reside purely within your local browser storage (localStorage).</p>
        </div>
      </div>
    </div>

    <div id="modalTerms" class="fixed inset-0 z-50 hidden flex items-center justify-center p-4 bg-black/80 backdrop-blur-md">
      <div class="relative w-full max-w-2xl max-h-[85vh] rounded-3xl glass-panel p-6 sm:p-8 border border-white/20 shadow-2xl overflow-y-auto">
        <div class="flex items-center justify-between pb-4 border-b border-white/10">
          <h3 class="text-xl font-bold text-white">Terms of Service</h3>
          <button class="btn-close-policy-modal p-2 rounded-xl text-slate-400 hover:text-white">✕</button>
        </div>
        <div class="py-4 space-y-3 text-xs text-slate-300 leading-relaxed">
          <p>All editorial dispatches, benchmarking data, and proprietary photography are copyright © 2026 REUBEN TECH. Academic and research citations are permitted with attribution.</p>
        </div>
      </div>
    </div>
  `;
}

function openModal(modalId) {
  document.getElementById(modalId)?.classList.remove('hidden');
}
function closeAllModals() {
  document.querySelectorAll('#modalsContainer > div').forEach(m => m.classList.add('hidden'));
  document.getElementById('readingListDrawer')?.classList.add('translate-x-full');
  stopAudioArticle();
}

// Toast Notifications
function showToast(message) {
  const container = document.getElementById('toastContainer');
  if (!container) return;

  const toast = document.createElement('div');
  toast.className = 'px-4 py-2.5 rounded-xl bg-[#151B33] text-white border border-[#00D9FF]/40 text-xs font-mono shadow-2xl flex items-center gap-2 transform translate-y-4 opacity-0 transition-all duration-300';
  toast.innerHTML = `<span class="w-1.5 h-1.5 rounded-full bg-[#00D9FF]"></span><span>${message}</span>`;
  container.appendChild(toast);

  requestAnimationFrame(() => {
    toast.classList.remove('translate-y-4', 'opacity-0');
  });

  setTimeout(() => {
    toast.classList.add('opacity-0', 'translate-y-2');
    setTimeout(() => toast.remove(), 300);
  }, 2800);
}

