import React from 'react';
import { AppProvider, useApp } from './context/AppContext';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import NotificationToast from './components/NotificationToast';
import AuthModal from './components/AuthModal';
import ProductDetailModal from './components/ProductDetailModal';

// Pages
import HomePage from './pages/HomePage';
import MarketplacePage from './pages/MarketplacePage';
import FarmerDashboard from './pages/FarmerDashboard';
import BuyerDashboard from './pages/BuyerDashboard';
import BulkProcurementPage from './pages/BulkProcurementPage';
import PriceComparisonPage from './pages/PriceComparisonPage';
import SeasonalCalendarPage from './pages/SeasonalCalendarPage';
import CartPage from './pages/CartPage';
import CheckoutPage from './pages/CheckoutPage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import FarmerProfilePage from './pages/FarmerProfilePage';

function MainContent() {
  const {
    activeTab,
    notification,
    isAuthModalOpen,
    selectedProductId
  } = useApp();

  return (
    <div className="min-h-screen bg-agro-cream font-sans text-agro-text">
      <Navbar />

      <main className="pt-16">
        {/* Auth Modal (overlay) */}
        {isAuthModalOpen && <AuthModal />}

        {/* Notification Toast */}
        {notification && (
          <NotificationToast
            message={notification.message}
            type={notification.type}
          />
        )}

        {/* Product Detail Modal (overlay) */}
        {activeTab === 'product-detail' && selectedProductId && (
          <ProductDetailModal />
        )}

        {/* Page Routes */}
        {activeTab === 'home' && <HomePage />}
        {activeTab === 'marketplace' && <MarketplacePage />}
        {activeTab === 'farmer-dashboard' && <FarmerDashboard />}
        {activeTab === 'buyer-dashboard' && <BuyerDashboard />}
        {activeTab === 'bulk-procurement' && <BulkProcurementPage />}
        {activeTab === 'price-comparison' && <PriceComparisonPage />}
        {activeTab === 'seasonal-calendar' && <SeasonalCalendarPage />}
        {activeTab === 'cart' && <CartPage />}
        {activeTab === 'checkout' && <CheckoutPage />}
        {activeTab === 'about' && <AboutPage />}
        {activeTab === 'contact' && <ContactPage />}
        {activeTab === 'farmer-profile' && <FarmerProfilePage />}
        {activeTab === 'order-tracking' && <BuyerDashboard />}
      </main>

      <Footer />
    </div>
  );
}

export default function App() {
  return (
    <AppProvider>
      <MainContent />
    </AppProvider>
  );
}

