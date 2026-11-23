// REUBEN TECH - Homepage Layout (Sections B through J in exact required order)
import { renderHero } from '../components/hero.js';
import { renderTrending } from '../components/trending.js';
import { renderNewsGrid } from '../components/newsGrid.js';
import { renderAiSection } from '../components/aiSection.js';
import { renderGadgetDeck } from '../components/gadgetDeck.js';
import { renderReviewsSection } from '../components/reviewsSection.js';
import { renderTutorials } from '../components/tutorials.js';
import { renderEditorsPick } from '../components/editorsPick.js';
import { renderNewsletter } from '../components/newsletter.js';

export function renderHomePage() {
  return `
    <main id="mainHome" class="space-y-0">
      <!-- B. HERO SECTION -->
      ${renderHero()}

      <!-- C. TRENDING NOW -->
      ${renderTrending()}

      <!-- D. LATEST TECHNOLOGY NEWS -->
      ${renderNewsGrid()}

      <!-- E. AI & FUTURE INNOVATION -->
      ${renderAiSection()}

      <!-- F. GADGET DISCOVERY -->
      ${renderGadgetDeck()}

      <!-- G. REVIEWS & COMPARISONS -->
      ${renderReviewsSection()}

      <!-- H. TECH TUTORIALS -->
      ${renderTutorials()}

      <!-- I. EDITOR'S PICK -->
      ${renderEditorsPick()}

      <!-- J. NEWSLETTER -->
      ${renderNewsletter()}
    </main>
  `;
}

