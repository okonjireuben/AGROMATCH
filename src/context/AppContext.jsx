import React, { createContext, useContext, useState, useEffect } from 'react';
import {
  INITIAL_PRODUCTS,
  INITIAL_FARMERS,
  INITIAL_ORDERS,
  INITIAL_MESSAGES,
  INITIAL_BULK_REQUESTS
} from '../data/mockData';

const AppContext = createContext();

const STORAGE_KEYS = {
  USER: 'agromatch_user',
  PRODUCTS: 'agromatch_products',
  ORDERS: 'agromatch_orders',
  CART: 'agromatch_cart',
  MESSAGES: 'agromatch_messages',
  BULK_REQUESTS: 'agromatch_bulk_requests',
  FAVORITES: 'agromatch_favorites'
};

export function AppProvider({ children }) {
  // Current user state
  const [user, setUser] = useState(() => {
    const saved = localStorage.getItem(STORAGE_KEYS.USER);
    if (saved) {
      try { return JSON.parse(saved); } catch (e) { }
    }
    // Default demo user: Restaurant Buyer
    return {
      id: 'buyer-001',
      name: 'Chef Deji Balogun',
      email: 'chef.deji@terrakulture.com',
      role: 'restaurant', // 'farmer', 'restaurant', 'retailer', 'wholesaler', 'individual'
      businessName: 'Terra Kulture & Lounge',
      location: 'Victoria Island, Lagos State',
      phone: '+234 802 991 3820',
      avatar: 'https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?auto=format&fit=crop&w=300&q=80',
      verified: true
    };
  });

  // Products
  const [products, setProducts] = useState(() => {
    const saved = localStorage.getItem(STORAGE_KEYS.PRODUCTS);
    if (saved) {
      try { return JSON.parse(saved); } catch (e) { }
    }
    return INITIAL_PRODUCTS;
  });

  // Orders
  const [orders, setOrders] = useState(() => {
    const saved = localStorage.getItem(STORAGE_KEYS.ORDERS);
    if (saved) {
      try { return JSON.parse(saved); } catch (e) { }
    }
    return INITIAL_ORDERS;
  });

  // Cart
  const [cart, setCart] = useState(() => {
    const saved = localStorage.getItem(STORAGE_KEYS.CART);
    if (saved) {
      try { return JSON.parse(saved); } catch (e) { }
    }
    return [];
  });

  // Messages
  const [messages, setMessages] = useState(() => {
    const saved = localStorage.getItem(STORAGE_KEYS.MESSAGES);
    if (saved) {
      try { return JSON.parse(saved); } catch (e) { }
    }
    return INITIAL_MESSAGES;
  });

  // Bulk RFQ Requests
  const [bulkRequests, setBulkRequests] = useState(() => {
    const saved = localStorage.getItem(STORAGE_KEYS.BULK_REQUESTS);
    if (saved) {
      try { return JSON.parse(saved); } catch (e) { }
    }
    return INITIAL_BULK_REQUESTS;
  });

  // Favorites
  const [favorites, setFavorites] = useState(() => {
    const saved = localStorage.getItem(STORAGE_KEYS.FAVORITES);
    if (saved) {
      try { return JSON.parse(saved); } catch (e) { }
    }
    return ['agm-prod-001', 'agm-prod-002', 'agm-prod-004'];
  });

  // UI state
  const [activeTab, setActiveTab] = useState('home'); // 'home', 'marketplace', 'farmer-dashboard', 'buyer-dashboard', 'bulk-procurement', 'seasonal-calendar', 'price-comparison', 'about', 'contact', 'cart', 'checkout', 'product-detail', 'order-tracking', 'farmer-profile'
  const [selectedProductId, setSelectedProductId] = useState(null);
  const [selectedOrderId, setSelectedOrderId] = useState(null);
  const [selectedFarmerId, setSelectedFarmerId] = useState(null);
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);
  const [authMode, setAuthMode] = useState('login'); // 'login' or 'register'
  const [notification, setNotification] = useState(null);

  // Sync to localStorage
  useEffect(() => {
    localStorage.setItem(STORAGE_KEYS.USER, JSON.stringify(user));
  }, [user]);

  useEffect(() => {
    localStorage.setItem(STORAGE_KEYS.PRODUCTS, JSON.stringify(products));
  }, [products]);

  useEffect(() => {
    localStorage.setItem(STORAGE_KEYS.ORDERS, JSON.stringify(orders));
  }, [orders]);

  useEffect(() => {
    localStorage.setItem(STORAGE_KEYS.CART, JSON.stringify(cart));
  }, [cart]);

  useEffect(() => {
    localStorage.setItem(STORAGE_KEYS.MESSAGES, JSON.stringify(messages));
  }, [messages]);

  useEffect(() => {
    localStorage.setItem(STORAGE_KEYS.BULK_REQUESTS, JSON.stringify(bulkRequests));
  }, [bulkRequests]);

  useEffect(() => {
    localStorage.setItem(STORAGE_KEYS.FAVORITES, JSON.stringify(favorites));
  }, [favorites]);

  const showNotification = (message, type = 'success') => {
    setNotification({ message, type });
    setTimeout(() => {
      setNotification(null);
    }, 4000);
  };

  // Cart operations
  const addToCart = (product, quantity = 1) => {
    setCart(prev => {
      const existing = prev.find(item => item.id === product.id);
      if (existing) {
        showNotification(`Updated quantity of ${product.name} in cart`);
        return prev.map(item =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + quantity }
            : item
        );
      } else {
        showNotification(`Added ${product.name} to cart`);
        return [...prev, { ...product, quantity }];
      }
    });
  };

  const removeFromCart = (productId) => {
    setCart(prev => prev.filter(item => item.id !== productId));
    showNotification('Item removed from cart', 'info');
  };

  const updateCartQuantity = (productId, quantity) => {
    if (quantity <= 0) {
      removeFromCart(productId);
      return;
    }
    setCart(prev =>
      prev.map(item =>
        item.id === productId ? { ...item, quantity } : item
      )
    );
  };

  const clearCart = () => {
    setCart([]);
  };

  const cartSubtotal = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  const cartItemCount = cart.reduce((sum, item) => sum + item.quantity, 0);

  // Products operations
  const addProduct = (newProduct) => {
    const productWithId = {
      ...newProduct,
      id: `agm-prod-${Date.now().toString().slice(-4)}`,
      rating: 5.0,
      reviewsCount: 1,
      farmerId: user?.id || 'farm-001',
      farmerName: user?.name || 'Verified Farmer',
      verified: true
    };
    setProducts(prev => [productWithId, ...prev]);
    showNotification(`New produce "${productWithId.name}" listed successfully!`);
    return productWithId;
  };

  const updateProduct = (id, updatedFields) => {
    setProducts(prev =>
      prev.map(item => (item.id === id ? { ...item, ...updatedFields } : item))
    );
    showNotification('Product details updated successfully');
  };

  const deleteProduct = (id) => {
    setProducts(prev => prev.filter(item => item.id !== id));
    showNotification('Product listing removed from marketplace', 'info');
  };

  // Order operations
  const placeOrder = (orderData) => {
    const orderId = `AGM-ORD-${Math.floor(1000 + Math.random() * 9000)}`;
    const newOrder = {
      id: orderId,
      date: new Date().toISOString().split('T')[0],
      buyerName: user?.name || orderData.buyerName || 'Valued Buyer',
      buyerType: user?.role || 'individual',
      businessName: user?.businessName || orderData.businessName || '',
      deliveryAddress: orderData.deliveryAddress,
      items: [...cart],
      subtotal: cartSubtotal,
      deliveryFee: orderData.deliveryFee || 15000,
      total: cartSubtotal + (orderData.deliveryFee || 15000),
      paymentMethod: orderData.paymentMethod || 'Bank Transfer (Virtual Account)',
      paymentStatus: 'Paid (Escrow Secured)',
      status: 'Confirmed',
      trackingCode: `TRK-NG-${Math.floor(10000 + Math.random() * 90000)}`,
      timeline: [
        { stage: 'Pending', time: 'Just now', done: true, desc: 'Payment verified & held in Agromatch Escrow' },
        { stage: 'Confirmed', time: 'Just now', done: true, desc: 'Farmer notified for immediate harvest packing' },
        { stage: 'Processing', time: 'Pending dispatch', done: false, desc: 'Quality inspection & temperature check' },
        { stage: 'Shipped', time: 'Pending line-haul', done: false, desc: 'En route with partner logistics' },
        { stage: 'Delivered', time: 'Estimated 24-48 hrs', done: false, desc: 'Direct delivery at doorstep' }
      ]
    };

    // Decrement product stocks
    setProducts(prev =>
      prev.map(prod => {
        const cartItem = cart.find(ci => ci.id === prod.id);
        if (cartItem) {
          const newStock = Math.max(0, prod.stock - cartItem.quantity);
          return { ...prod, stock: newStock };
        }
        return prod;
      })
    );

    setOrders(prev => [newOrder, ...prev]);
    clearCart();
    setSelectedOrderId(newOrder.id);
    showNotification(`Order ${orderId} placed successfully!`);
    return newOrder;
  };

  const updateOrderStatus = (orderId, newStatus, note = '') => {
    setOrders(prev =>
      prev.map(ord => {
        if (ord.id === orderId) {
          const updatedTimeline = ord.timeline.map(step => {
            if (step.stage.toLowerCase() === newStatus.toLowerCase()) {
              return { ...step, done: true, time: 'Updated today', desc: note || step.desc };
            }
            return step;
          });
          return { ...ord, status: newStatus, timeline: updatedTimeline };
        }
        return ord;
      })
    );
    showNotification(`Order ${orderId} status updated to ${newStatus}`);
  };

  // Messages
  const sendMessage = (recipientId, text, cropSubject = 'Produce Inquiry') => {
    setMessages(prev => {
      const existingThreadIndex = prev.findIndex(t => t.recipientId === recipientId || t.senderId === recipientId);
      const newMsgObj = {
        id: `m-${Date.now()}`,
        sender: user?.role === 'farmer' ? 'farmer' : 'buyer',
        text,
        time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
      };

      if (existingThreadIndex >= 0) {
        const updated = [...prev];
        updated[existingThreadIndex] = {
          ...updated[existingThreadIndex],
          messages: [...updated[existingThreadIndex].messages, newMsgObj],
          timestamp: 'Just now'
        };
        return updated;
      } else {
        const targetFarmer = INITIAL_FARMERS.find(f => f.id === recipientId) || { name: 'Agricultural Supplier' };
        const newThread = {
          id: `msg-${Date.now()}`,
          senderId: user?.id || 'buyer-001',
          senderName: user?.name || 'Buyer',
          recipientId,
          farmerName: targetFarmer.name,
          cropSubject,
          timestamp: 'Just now',
          messages: [newMsgObj]
        };
        return [newThread, ...prev];
      }
    });
    showNotification('Message sent to farmer');
  };

  // Bulk RFQ Requests
  const createBulkRequest = (requestData) => {
    const newRequest = {
      id: `RFQ-2026-${Math.floor(100 + Math.random() * 900)}`,
      buyerName: user?.businessName || user?.name || requestData.buyerName,
      buyerType: user?.role === 'restaurant' ? 'Restaurant & Hospitality' : 'Supermarket / Retailer',
      crop: requestData.crop,
      requiredQuantity: requestData.requiredQuantity,
      targetDeliveryState: requestData.targetDeliveryState || 'Lagos State',
      budgetPerUnit: requestData.budgetPerUnit,
      status: 'Active / Receiving Quotes',
      dateSubmitted: new Date().toISOString().split('T')[0],
      quotesReceived: 0,
      notes: requestData.notes || ''
    };
    setBulkRequests(prev => [newRequest, ...prev]);
    showNotification(`Bulk RFQ for ${newRequest.crop} published to farmers!`);
    return newRequest;
  };

  // Favorites
  const toggleFavorite = (productId) => {
    setFavorites(prev => {
      if (prev.includes(productId)) {
        showNotification('Removed from saved items', 'info');
        return prev.filter(id => id !== productId);
      } else {
        showNotification('Saved to your favorites');
        return [...prev, productId];
      }
    });
  };

  // Auth
  const login = (role = 'restaurant', customUser = null) => {
    if (customUser) {
      setUser(customUser);
      showNotification(`Welcome back, ${customUser.name}!`);
      setIsAuthModalOpen(false);
      return;
    }

    if (role === 'farmer') {
      const farmerUser = {
        id: 'farm-001',
        name: 'Alh. Ibrahim Garba',
        email: 'garba@dankanoagro.ng',
        role: 'farmer',
        farmName: 'Dan-Kano Irrigation Agro-Estate',
        location: 'Kano State',
        phone: '+234 803 412 8901',
        avatar: 'https://images.unsplash.com/photo-1595152772835-219674b2a163?auto=format&fit=crop&w=300&q=80',
        verified: true,
        cacNumber: 'RC-2849102'
      };
      setUser(farmerUser);
      setActiveTab('farmer-dashboard');
      showNotification('Logged in as Verified Farmer Alh. Ibrahim Garba');
    } else if (role === 'supermarket' || role === 'retailer') {
      const retailerUser = {
        id: 'buyer-002',
        name: 'Ngozi Obi',
        email: 'procurement@hubmartstores.ng',
        role: 'retailer',
        businessName: 'Hubmart Stores & Supermarkets',
        location: 'Ikeja GRA, Lagos State',
        phone: '+234 818 200 1199',
        avatar: 'https://images.unsplash.com/photo-1531123897727-8f129e1688ce?auto=format&fit=crop&w=300&q=80',
        verified: true
      };
      setUser(retailerUser);
      setActiveTab('bulk-procurement');
      showNotification('Logged in as Hubmart Supermarket Procurement');
    } else {
      const restaurantUser = {
        id: 'buyer-001',
        name: 'Chef Deji Balogun',
        email: 'chef.deji@terrakulture.com',
        role: 'restaurant',
        businessName: 'Terra Kulture & Lounge',
        location: 'Victoria Island, Lagos State',
        phone: '+234 802 991 3820',
        avatar: 'https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?auto=format&fit=crop&w=300&q=80',
        verified: true
      };
      setUser(restaurantUser);
      setActiveTab('buyer-dashboard');
      showNotification('Logged in as Chef Deji Balogun (Restaurant Buyer)');
    }
    setIsAuthModalOpen(false);
  };

  const register = (data) => {
    const newUser = {
      id: `usr-${Date.now()}`,
      name: data.fullName,
      email: data.email,
      role: data.role || 'individual',
      businessName: data.businessName || `${data.fullName}'s Farm/Kitchen`,
      location: `${data.state}, Nigeria`,
      phone: data.phone || '+234 800 000 0000',
      avatar: 'https://images.unsplash.com/photo-1566753323558-f4e0952af115?auto=format&fit=crop&w=300&q=80',
      verified: data.role === 'farmer' ? false : true
    };
    setUser(newUser);
    setIsAuthModalOpen(false);
    if (newUser.role === 'farmer') {
      setActiveTab('farmer-dashboard');
      showNotification(`Welcome to AGROMATCH, ${newUser.name}! Your farmer dashboard is ready.`);
    } else {
      setActiveTab('marketplace');
      showNotification(`Welcome, ${newUser.name}! Start exploring direct farm supplies.`);
    }
  };

  const logout = () => {
    setUser(null);
    setActiveTab('home');
    showNotification('Logged out successfully', 'info');
  };

  // Low stock products alert calculation
  const lowStockProducts = products.filter(p => p.stock <= 25);

  const navigateToProduct = (id) => {
    setSelectedProductId(id);
    setActiveTab('product-detail');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navigateToOrder = (id) => {
    setSelectedOrderId(id);
    setActiveTab('order-tracking');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navigateToFarmerProfile = (farmerId) => {
    setSelectedFarmerId(farmerId);
    setActiveTab('farmer-profile');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <AppContext.Provider
      value={{
        user,
        products,
        orders,
        cart,
        messages,
        bulkRequests,
        favorites,
        activeTab,
        selectedProductId,
        selectedOrderId,
        isAuthModalOpen,
        authMode,
        notification,
        cartSubtotal,
        cartItemCount,
        lowStockProducts,
        setActiveTab,
        setSelectedProductId,
        setSelectedOrderId,
        setIsAuthModalOpen,
        setAuthMode,
        addToCart,
        removeFromCart,
        updateCartQuantity,
        clearCart,
        addProduct,
        updateProduct,
        deleteProduct,
        placeOrder,
        updateOrderStatus,
        sendMessage,
        createBulkRequest,
        toggleFavorite,
        login,
        register,
        logout,
        navigateToProduct,
        navigateToOrder,
        selectedFarmerId,
        setSelectedFarmerId,
        navigateToFarmerProfile,
        showNotification
      }}
    >
      {children}
    </AppContext.Provider>
  );
}

export function useApp() {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error('useApp must be used within an AppProvider');
  }
  return context;
}
