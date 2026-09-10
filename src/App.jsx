import React, { useState } from 'react';
import { Header } from './components/Header';
import { Navigation } from './components/Navigation';
import { HeroSection } from './components/HeroSection';
import { CategoryBar } from './components/CategoryBar';
import { FeaturesBar } from './components/FeaturesBar';
import { PromoCards } from './components/PromoCards';
import { SmartphoneTrends } from './components/SmartphoneTrends';
import { QuickViewModal } from './components/QuickViewModal';
import { CartDrawer } from './components/CartDrawer';
import { WishlistDrawer } from './components/WishlistDrawer';
import { TrackOrderModal, Toast, Footer } from './components/ExtraComponents';

export default function App() {
  const [activeTab, setActiveTab] = useState('HOME');
  const [selectedCategory, setSelectedCategory] = useState(null);
  
  // Cart state - initialized with 1 item for $56.00 matching design
  const [cartItems, setCartItems] = useState([
    {
      id: 'initial-gamepad',
      name: 'DualSense Wireless Controller - Jet Black',
      price: 56.00,
      quantity: 1,
      imageType: 'controller',
      category: 'GAMING GEAR'
    }
  ]);

  // Wishlist state - initialized with items matching count 10
  const [wishlistItems, setWishlistItems] = useState([
    { id: 'phone-1', name: 'Realme 11 Pro 5G - Sunrise Orange', price: 329.00 },
    { id: 'phone-2', name: 'Xiaomi 13 Pro Flagship - Mint', price: 649.00 },
    { id: 'phone-3', name: 'OnePlus Nord CE 3 - Emerald', price: 299.00 },
    { id: 'phone-4', name: 'Vivo X90 Pro+ Midnight', price: 799.00 },
    { id: 'phone-5', name: 'Galaxy Z Flip 5 - Lavender', price: 999.00 },
    { id: 'item-6', name: 'BambooBuds ANC Earphones', price: 89.00 },
    { id: 'item-7', name: 'HomePod Pro Smart Speaker', price: 199.00 },
    { id: 'item-8', name: 'MacBook Pro 16 2K Fullview', price: 1299.00 },
    { id: 'item-9', name: 'Bamboo Transparent Speaker', price: 89.00 },
    { id: 'item-10', name: '4K Flycam Pro Drone Quadcopter', price: 450.00 },
  ]);

  // Modal & Drawer visibility states
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isWishlistOpen, setIsWishlistOpen] = useState(false);
  const [isTrackModalOpen, setIsTrackModalOpen] = useState(false);
  const [quickViewProduct, setQuickViewProduct] = useState(null);

  // Toast Notification state
  const [toastMessage, setToastMessage] = useState('');
  const [showToast, setShowToast] = useState(false);

  const triggerToast = (msg) => {
    setToastMessage(msg);
    setShowToast(true);
    setTimeout(() => setShowToast(false), 3000);
  };

  const handleAddToCart = (product) => {
    setCartItems(prev => {
      const existing = prev.find(item => item.id === product.id);
      if (existing) {
        return prev.map(item =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + (product.quantity || 1) }
            : item
        );
      }
      return [...prev, { ...product, quantity: product.quantity || 1 }];
    });
    triggerToast(`Added "${product.name || product.title}" to cart!`);
  };

  const handleUpdateCartQuantity = (id, newQty) => {
    setCartItems(prev =>
      prev.map(item => (item.id === id ? { ...item, quantity: newQty } : item))
    );
  };

  const handleRemoveCartItem = (id) => {
    setCartItems(prev => prev.filter(item => item.id !== id));
    triggerToast('Item removed from cart');
  };

  const handleToggleWishlist = (product) => {
    setWishlistItems(prev => {
      const exists = prev.some(item => item.id === product.id);
      if (exists) {
        triggerToast(`Removed "${product.name || product.title}" from wishlist`);
        return prev.filter(item => item.id !== product.id);
      } else {
        triggerToast(`Saved "${product.name || product.title}" to wishlist!`);
        return [...prev, product];
      }
    });
  };

  const handleRemoveWishlist = (id) => {
    setWishlistItems(prev => prev.filter(item => item.id !== id));
    triggerToast('Item removed from wishlist');
  };

  const cartTotal = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const cartCount = cartItems.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <div className="min-h-screen bg-[#F8FAFC] text-slate-900 font-sans flex flex-col justify-between">
      
      {/* 1. Header & Quick Actions */}
      <Header
        cartCount={cartCount}
        cartTotal={cartTotal}
        wishlistCount={wishlistItems.length}
        onOpenCart={() => setIsCartOpen(true)}
        onOpenWishlist={() => setIsWishlistOpen(true)}
        onSearch={(query) => triggerToast(`Searching for "${query}"...`)}
        onSelectCategory={(cat) => {
          setSelectedCategory(cat);
          triggerToast(`Filtered by: ${cat}`);
        }}
      />

      {/* 2. Navigation Tab Bar */}
      <Navigation
        activeTab={activeTab}
        onSelectTab={(tab) => {
          setActiveTab(tab);
          triggerToast(`Viewing ${tab}`);
        }}
        onOpenTracker={() => setIsTrackModalOpen(true)}
      />

      {/* Main Page Body */}
      <main className="flex-1 max-w-7xl mx-auto px-2 sm:px-4 lg:px-6 w-full space-y-6">
        
        {/* 3. Hero Showcase Grid (Game Controller + BamboodBuds + HomePod Pro) */}
        <HeroSection
          onQuickView={(prod) => setQuickViewProduct(prod)}
          onAddToCart={handleAddToCart}
        />

        {/* 4. Pastel Category Carousel */}
        <CategoryBar
          selectedCategory={selectedCategory}
          onSelectCategory={(cat) => {
            setSelectedCategory(cat);
            triggerToast(`Selected category: ${cat}`);
          }}
        />

        {/* 5. Four Value Propositions & Warranties */}
        <FeaturesBar />

        {/* 6. Curated 3-Column Promo Cards (MacBook Pro 16, Smart Speaker, Bamboo Speaker) */}
        <PromoCards
          onAddToCart={handleAddToCart}
          onQuickView={(prod) => setQuickViewProduct(prod)}
        />

        {/* 7. Top Smartphone Trends 5-Card Showcase */}
        <SmartphoneTrends
          wishlistItems={wishlistItems}
          onAddToCart={handleAddToCart}
          onToggleWishlist={handleToggleWishlist}
          onQuickView={(prod) => setQuickViewProduct(prod)}
        />

      </main>

      {/* 8. Modern Footer */}
      <Footer />

      {/* Interactive Drawers & Modals */}
      <QuickViewModal
        isOpen={!!quickViewProduct}
        product={quickViewProduct}
        onClose={() => setQuickViewProduct(null)}
        onAddToCart={handleAddToCart}
        onToggleWishlist={handleToggleWishlist}
        isWishlisted={wishlistItems.some(i => i.id === quickViewProduct?.id)}
      />

      <CartDrawer
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        cartItems={cartItems}
        onUpdateQuantity={handleUpdateCartQuantity}
        onRemoveItem={handleRemoveCartItem}
        onCheckout={() => {
          setIsCartOpen(false);
          triggerToast('Redirecting to Secure Checkout...');
        }}
      />

      <WishlistDrawer
        isOpen={isWishlistOpen}
        onClose={() => setIsWishlistOpen(false)}
        wishlistItems={wishlistItems}
        onAddToCart={handleAddToCart}
        onRemoveWishlist={handleRemoveWishlist}
      />

      <TrackOrderModal
        isOpen={isTrackModalOpen}
        onClose={() => setIsTrackModalOpen(false)}
      />

      {/* Toast Feedback */}
      <Toast
        isVisible={showToast}
        message={toastMessage}
        onClose={() => setShowToast(false)}
      />

    </div>
  );
}
