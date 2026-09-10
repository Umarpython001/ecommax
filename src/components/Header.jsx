import React, { useState } from 'react';
import { 
  Search, 
  Heart, 
  ShoppingBag, 
  Settings, 
  Menu, 
  X, 
  ChevronDown,
  Sparkles,
  ArrowRight
} from 'lucide-react';
import { TRENDING_SEARCHES } from '../data/mockData';

export const Header = ({ 
  cartCount, 
  cartTotal, 
  wishlistCount, 
  onOpenCart, 
  onOpenWishlist, 
  onSearch, 
  onSelectCategory 
}) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [isSearchFocused, setIsSearchFocused] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isCategoryDropdownOpen, setIsCategoryDropdownOpen] = useState(false);

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    if (onSearch) onSearch(searchTerm);
  };

  const handleTrendingClick = (term) => {
    setSearchTerm(term);
    if (onSearch) onSearch(term);
  };

  return (
    <header className="w-full bg-white border-b border-slate-100 sticky top-0 z-40">
      {/* Top Main Navigation Bar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3.5">
        <div className="flex items-center justify-between gap-4 lg:gap-8">
          
          {/* Brand Logo */}
          <div className="flex items-center gap-3 shrink-0">
            <a href="#" className="flex items-center gap-2 group">
              <div className="relative flex items-center">
                <span className="text-2xl lg:text-3xl font-extrabold tracking-tight text-slate-900 font-display">
                  <span className="text-sky-500 italic font-black text-3xl">e</span>Commax
                </span>
                <span className="w-2 h-2 rounded-full bg-sky-500 mb-2 ml-0.5 group-hover:scale-125 transition-transform" />
              </div>
            </a>

            {/* SHOP NOW Button Pill (Header Left Quick Action) */}
            <div className="relative hidden md:block">
              <button 
                onClick={() => setIsCategoryDropdownOpen(!isCategoryDropdownOpen)}
                className="flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-sky-200 bg-sky-50/70 text-sky-700 text-xs font-bold tracking-wide hover:bg-sky-100 hover:border-sky-300 transition-all active:scale-95"
                aria-label="Quick Category Selector"
              >
                <ShoppingBag className="w-3.5 h-3.5 text-sky-600" />
                <span>SHOP NOW</span>
                <ChevronDown className={`w-3 h-3 transition-transform ${isCategoryDropdownOpen ? 'rotate-180' : ''}`} />
              </button>

              {/* Quick Dropdown Menu */}
              {isCategoryDropdownOpen && (
                <div className="absolute left-0 mt-2 w-48 bg-white rounded-xl shadow-xl border border-slate-100 py-2 z-50 animate-in fade-in slide-in-from-top-2">
                  {['All Electronics', 'Smartphones', 'Laptops & Tablets', 'Gaming Gear', 'Audio & Speakers', 'Smart Home'].map((cat) => (
                    <button
                      key={cat}
                      onClick={() => {
                        if (onSelectCategory) onSelectCategory(cat);
                        setIsCategoryDropdownOpen(false);
                      }}
                      className="w-full text-left px-4 py-2 text-xs font-semibold text-slate-600 hover:text-sky-600 hover:bg-sky-50 flex items-center justify-between"
                    >
                      {cat}
                      <ArrowRight className="w-3 h-3 opacity-0 hover:opacity-100 text-sky-500" />
                    </button>
                  ))}
                </div>
              )}
            </div>
          </div>

          {/* Centered Search Bar with Instant Trending Underneath */}
          <div className="flex-1 max-w-2xl hidden md:block">
            <form onSubmit={handleSearchSubmit} className="relative">
              <div className="relative flex items-center">
                <input
                  type="text"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  onFocus={() => setIsSearchFocused(true)}
                  onBlur={() => setTimeout(() => setIsSearchFocused(false), 200)}
                  placeholder="ENTER YOUR KEY WORD..."
                  className="w-full pl-5 pr-11 py-2.5 bg-slate-50 hover:bg-slate-100/80 focus:bg-white text-xs font-semibold tracking-wider text-slate-800 placeholder-slate-400 border border-slate-200 rounded-full focus:outline-none focus:ring-2 focus:ring-sky-400 focus:border-transparent transition-all shadow-inner"
                  aria-label="Search electronics and gadgets"
                />
                <button
                  type="submit"
                  className="absolute right-1.5 p-1.5 rounded-full bg-transparent hover:bg-sky-50 text-slate-500 hover:text-sky-600 transition-colors"
                  aria-label="Submit search"
                >
                  <Search className="w-4 h-4" />
                </button>
              </div>

              {/* Autocomplete Dropdown preview */}
              {isSearchFocused && searchTerm.length > 0 && (
                <div className="absolute left-0 right-0 top-full mt-2 bg-white rounded-2xl shadow-2xl border border-slate-100 p-4 z-50">
                  <p className="text-[11px] font-bold text-slate-400 uppercase tracking-wider mb-2">Matching Suggestions</p>
                  <div className="space-y-1">
                    {['Sony Wireless Game Controller', 'BambooBuds Active Noise Cancelling', 'HomePod Pro Smart Speaker', 'Realme 11 Pro 5G', 'MacBook Pro 16 Touch']
                      .filter(item => item.toLowerCase().includes(searchTerm.toLowerCase()))
                      .map((item, idx) => (
                        <button
                          key={idx}
                          type="button"
                          onClick={() => handleTrendingClick(item)}
                          className="w-full text-left px-3 py-2 text-xs font-medium text-slate-700 hover:bg-sky-50 hover:text-sky-700 rounded-lg flex items-center justify-between"
                        >
                          <span>{item}</span>
                          <span className="text-[10px] text-sky-500 font-semibold">View</span>
                        </button>
                      ))}
                  </div>
                </div>
              )}
            </form>

            {/* Trending Keywords underneath Search Bar */}
            <div className="flex items-center gap-1.5 mt-1.5 px-2 text-[11px] text-slate-500 overflow-x-auto no-scrollbar whitespace-nowrap">
              <span className="font-bold text-slate-800 flex items-center gap-1 shrink-0 uppercase tracking-tight text-[10px]">
                <Sparkles className="w-2.5 h-2.5 text-sky-500" />
                SEARCH TRENDING :
              </span>
              {TRENDING_SEARCHES.map((item, idx) => (
                <button
                  key={idx}
                  onClick={() => handleTrendingClick(item)}
                  className="text-slate-500 hover:text-sky-600 hover:underline transition-colors px-1 shrink-0"
                >
                  {item}{idx < TRENDING_SEARCHES.length - 1 ? ',' : ''}
                </button>
              ))}
            </div>
          </div>

          {/* Right Action Icons: Wishlist, Cart, Settings */}
          <div className="flex items-center gap-3 lg:gap-4 shrink-0">
            {/* Wishlist Button */}
            <button
              onClick={onOpenWishlist}
              className="relative p-2 text-slate-700 hover:text-sky-600 hover:bg-slate-50 rounded-full transition-all group"
              aria-label={`Wishlist with ${wishlistCount} items`}
            >
              <Heart className="w-5 h-5 group-hover:scale-110 transition-transform" />
              <span className="absolute -top-0.5 -right-0.5 min-w-[18px] h-[18px] bg-sky-500 text-white text-[10px] font-bold rounded-full flex items-center justify-center px-1 shadow-sm">
                {wishlistCount}
              </span>
            </button>

            {/* Cart Button with Total */}
            <button
              onClick={onOpenCart}
              className="flex items-center gap-2 p-1.5 pl-2 pr-3 bg-slate-50 hover:bg-sky-50 border border-slate-200 hover:border-sky-200 rounded-full transition-all group active:scale-95"
              aria-label={`Shopping Cart with ${cartCount} items, total $${cartTotal.toFixed(2)}`}
            >
              <div className="relative">
                <ShoppingBag className="w-5 h-5 text-slate-700 group-hover:text-sky-600 group-hover:scale-110 transition-transform" />
                <span className="absolute -top-1 -right-1.5 w-4 h-4 bg-sky-500 text-white text-[9px] font-extrabold rounded-full flex items-center justify-center">
                  {cartCount}
                </span>
              </div>
              <span className="text-xs font-bold text-slate-800 group-hover:text-sky-700">
                ${cartTotal.toFixed(2)}
              </span>
            </button>

            {/* Settings / Account Icon */}
            <button
              className="p-2 text-slate-700 hover:text-sky-600 hover:bg-slate-50 rounded-full transition-all"
              aria-label="Account Settings"
            >
              <Settings className="w-5 h-5 hover:rotate-45 transition-transform" />
            </button>

            {/* Mobile Hamburger Toggle */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden p-2 text-slate-700 hover:text-sky-600 rounded-lg"
              aria-label="Toggle Navigation Menu"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>

        {/* Mobile Search Bar View */}
        <div className="md:hidden mt-3">
          <form onSubmit={handleSearchSubmit} className="relative">
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="SEARCH PRODUCTS..."
              className="w-full pl-4 pr-10 py-2 bg-slate-50 text-xs font-semibold rounded-full border border-slate-200 focus:outline-none focus:ring-2 focus:ring-sky-400"
            />
            <button type="submit" className="absolute right-3 top-2.5 text-slate-500">
              <Search className="w-4 h-4" />
            </button>
          </form>
        </div>
      </div>
    </header>
  );
};
