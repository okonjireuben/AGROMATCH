import React, { createContext, useContext, useState, useEffect } from 'react';
import { PRODUCTS, CLUBS_AND_NATIONS } from '../data/footballData';

const AppContext = createContext();

const STORAGE_KEYS = {
  CART: 'reuben_football_cart',
  WISHLIST: 'reuben_football_wishlist',
  USER: 'reuben_football_user'
};

export function AppProvider({ children }) {
  // Navigation / active tab
  const [activeTab, setActiveTab] = useState('home'); // 'home', 'jerseys', 'boots', 'equipment', 'customizer', 'about', 'cart', 'checkout'
  const [selectedLeague, setSelectedLeague] = useState('All Leagues');
  const [selectedCategory, setSelectedCategory] = useState('All Categories');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedProductId, setSelectedProductId] = useState(null);

  // Cart
  const [cart, setCart] = useState(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEYS.CART);
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });

  // Wishlist
  const [wishlist, setWishlist] = useState(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEYS.WISHLIST);
      return saved ? JSON.parse(saved) : ['rfs-j01', 'rfs-j23', 'rfs-b01'];
    } catch {
      return ['rfs-j01', 'rfs-j23', 'rfs-b01'];
    }
  });

  // Currency
  const [currency, setCurrency] = useState('NGN'); // 'NGN', 'USD', 'GBP'
  const currencyRates = { NGN: 1, USD: 1 / 1650, GBP: 1 / 2100 };
  const currencySymbols = { NGN: '₦', USD: '$', GBP: '£' };

  // Promo Code
  const [appliedPromo, setAppliedPromo] = useState(null); // { code: 'KICKOFF20', discount: 0.20 }
  const [notification, setNotification] = useState(null);

  // Sync to local storage
  useEffect(() => {
    try { localStorage.setItem(STORAGE_KEYS.CART, JSON.stringify(cart)); } catch {}
  }, [cart]);

  useEffect(() => {
    try { localStorage.setItem(STORAGE_KEYS.WISHLIST, JSON.stringify(wishlist)); } catch {}
  }, [wishlist]);

  const showNotification = (message, type = 'success') => {
    setNotification({ message, type });
    setTimeout(() => {
      setNotification(null);
    }, 4000);
  };

  // Cart Functions
  const addToCart = (product, quantity = 1, options = {}) => {
    setCart(prev => {
      const existing = prev.find(item => item.id === product.id && JSON.stringify(item.customDetails) === JSON.stringify(product.customDetails));
      if (existing) {
        showNotification(`Updated quantity for ${product.name}`);
        return prev.map(item => item === existing ? { ...item, quantity: item.quantity + quantity } : item);
      }
      showNotification(`Added ${product.name} to cart!`);
      return [...prev, { ...product, quantity, options: options || {} }];
    });
  };

  const removeFromCart = (id) => {
    setCart(prev => prev.filter(item => item.id !== id));
    showNotification('Item removed from cart', 'info');
  };

  const updateCartQuantity = (id, quantity) => {
    if (quantity <= 0) {
      removeFromCart(id);
      return;
    }
    setCart(prev => prev.map(item => item.id === id ? { ...item, quantity } : item));
  };

  const clearCart = () => {
    setCart([]);
  };

  const toggleWishlist = (productId) => {
    setWishlist(prev => {
      if (prev.includes(productId)) {
        showNotification('Removed from wishlist', 'info');
        return prev.filter(id => id !== productId);
      } else {
        showNotification('Saved to your wishlist');
        return [...prev, productId];
      }
    });
  };

  const applyPromoCode = (code) => {
    if (code.trim().toUpperCase() === 'KICKOFF20') {
      setAppliedPromo({ code: 'KICKOFF20', discount: 0.20, label: '20% Season Kickoff Discount' });
      showNotification('Promo code applied: 20% OFF your entire order!');
      return true;
    }
    showNotification('Invalid promo code. Try KICKOFF20', 'error');
    return false;
  };

  const removePromoCode = () => {
    setAppliedPromo(null);
    showNotification('Promo code removed', 'info');
  };

  // Price calculations
  const cartSubtotal = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  const discountAmount = appliedPromo ? Math.round(cartSubtotal * appliedPromo.discount) : 0;
  const shippingFee = cartSubtotal >= 70000 || cartSubtotal === 0 ? 0 : 5000;
  const cartTotal = Math.max(0, cartSubtotal - discountAmount + shippingFee);
  const cartCount = cart.reduce((sum, item) => sum + item.quantity, 0);

  const formatPrice = (nairaAmount) => {
    const rate = currencyRates[currency] || 1;
    const symbol = currencySymbols[currency] || '₦';
    const converted = Math.round(nairaAmount * rate);
    return `${symbol}${converted.toLocaleString()}`;
  };

  const navigateToProduct = (id) => {
    setSelectedProductId(id);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <AppContext.Provider
      value={{
        activeTab,
        setActiveTab,
        selectedLeague,
        setSelectedLeague,
        selectedCategory,
        setSelectedCategory,
        searchQuery,
        setSearchQuery,
        selectedProductId,
        setSelectedProductId,
        products: PRODUCTS,
        cart,
        cartCount,
        cartSubtotal,
        discountAmount,
        shippingFee,
        cartTotal,
        wishlist,
        currency,
        setCurrency,
        appliedPromo,
        notification,
        addToCart,
        removeFromCart,
        updateCartQuantity,
        clearCart,
        toggleWishlist,
        applyPromoCode,
        removePromoCode,
        formatPrice,
        navigateToProduct,
        showNotification
      }}
    >
      {children}
    </AppContext.Provider>
  );
}

export function useApp() {
  const context = useContext(AppContext);
  if (!context) throw new Error('useApp must be used within an AppProvider');
  return context;
}
