import React from 'react';
import { AppProvider, useApp } from './context/AppContext';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import NotificationToast from './components/NotificationToast';
import ProductDetailModal from './components/ProductDetailModal';

// Pages
import HomePage from './pages/HomePage';
import JerseysPage from './pages/JerseysPage';
import BootsPage from './pages/BootsPage';
import EquipmentPage from './pages/EquipmentPage';
import CustomizerPage from './pages/CustomizerPage';
import CartPage from './pages/CartPage';
import CheckoutPage from './pages/CheckoutPage';
import AboutPage from './pages/AboutPage';

function MainContent() {
  const { activeTab, notification, selectedProductId } = useApp();

  return (
    <div className="min-h-screen bg-[#0A0A0A] font-sans text-slate-100 flex flex-col justify-between selection:bg-[#00FF66] selection:text-black">
      <Navbar />

      <main className="pt-24 flex-1">
        {/* Notification Toast */}
        {notification && (
          <NotificationToast
            message={notification.message}
            type={notification.type}
          />
        )}

        {/* Product Detail Modal */}
        {selectedProductId && <ProductDetailModal />}

        {/* Dynamic Route Pages */}
        {activeTab === 'home' && <HomePage />}
        {activeTab === 'jerseys' && <JerseysPage />}
        {activeTab === 'boots' && <BootsPage />}
        {activeTab === 'equipment' && <EquipmentPage />}
        {activeTab === 'customizer' && <CustomizerPage />}
        {activeTab === 'cart' && <CartPage />}
        {activeTab === 'checkout' && <CheckoutPage />}
        {activeTab === 'about' && <AboutPage />}
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
