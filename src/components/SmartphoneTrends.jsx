import React, { useState } from 'react';
import { Heart, ShoppingBag, Eye, Star } from 'lucide-react';
import { SMARTPHONE_TRENDS } from '../data/mockData';
import { SmartphoneCardArt } from './ProductIllustrations';

export const SmartphoneTrends = ({ onAddToCart, onToggleWishlist, onQuickView, wishlistItems }) => {
  const [activeFilter, setActiveFilter] = useState('ALL');

  const filteredPhones = SMARTPHONE_TRENDS.filter(phone => {
    if (activeFilter === 'ALL') return true;
    if (activeFilter === 'FLAGSHIP') return phone.category.includes('FLAGSHIP');
    if (activeFilter === 'FOLDABLE') return phone.category.includes('FOLDABLE');
    return true;
  });

  return (
    <section className="w-full py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
          <div>
            <h2 className="text-lg sm:text-xl font-extrabold text-slate-800 tracking-wider uppercase font-display">
              TOP SMARTPHONE TRENDS
            </h2>
            <p className="text-xs text-slate-500 mt-1 font-medium">
              Discover the latest flagship smartphones, foldable designs, and mobile innovations
            </p>
          </div>

          {/* Filter Pills */}
          <div className="flex items-center gap-2 overflow-x-auto no-scrollbar pb-1">
            {['ALL', 'FLAGSHIP', 'FOLDABLE'].map((filter) => (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className={`px-3.5 py-1.5 rounded-full text-xs font-bold tracking-wide transition-all ${
                  activeFilter === filter
                    ? 'bg-slate-900 text-white shadow-sm'
                    : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                }`}
              >
                {filter === 'ALL' ? 'All Models' : filter}
              </button>
            ))}
          </div>
        </div>

        {/* 5-Column Responsive Product Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 sm:gap-6">
          {filteredPhones.map((phone) => {
            const isWishlisted = wishlistItems?.some(item => item.id === phone.id);

            return (
              <div
                key={phone.id}
                className="bg-white rounded-2xl p-4 flex flex-col justify-between border border-slate-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group relative"
              >
                {/* Wishlist Quick Toggle */}
                <button
                  onClick={() => onToggleWishlist(phone)}
                  className={`absolute top-3 right-3 z-20 p-2 rounded-full backdrop-blur-md transition-all ${
                    isWishlisted 
                      ? 'bg-rose-50 text-rose-500 shadow-sm' 
                      : 'bg-white/80 text-slate-400 hover:text-rose-500 hover:bg-white shadow-sm'
                  }`}
                  aria-label="Add to Wishlist"
                >
                  <Heart className={`w-4 h-4 ${isWishlisted ? 'fill-rose-500' : ''}`} />
                </button>

                {/* Smartphone Visual Container */}
                <div className="relative py-4 my-2 flex items-center justify-center bg-slate-50/50 rounded-xl group-hover:bg-sky-50/30 transition-colors">
                  <SmartphoneCardArt styleType={phone.colorStyle} className="transform group-hover:scale-105 transition-transform duration-300" />
                  
                  {/* Quick View Button on Hover */}
                  <div className="absolute inset-0 flex items-center justify-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity bg-slate-900/10 backdrop-blur-[2px] rounded-xl">
                    <button
                      onClick={() => onQuickView(phone)}
                      className="p-2.5 rounded-full bg-white text-slate-800 hover:text-sky-600 shadow-lg hover:scale-110 active:scale-95 transition-all"
                      title="Quick Preview"
                    >
                      <Eye className="w-4 h-4" />
                    </button>
                    <button
                      onClick={() => onAddToCart(phone)}
                      className="p-2.5 rounded-full bg-sky-600 text-white hover:bg-sky-700 shadow-lg hover:scale-110 active:scale-95 transition-all"
                      title="Add to Cart"
                    >
                      <ShoppingBag className="w-4 h-4" />
                    </button>
                  </div>
                </div>

                {/* Product Details */}
                <div className="mt-2">
                  <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">
                    {phone.category}
                  </span>
                  
                  <h3 className="text-xs font-bold text-slate-800 mt-1 line-clamp-1 group-hover:text-sky-600 transition-colors">
                    {phone.name}
                  </h3>

                  {/* Specs & Rating */}
                  <div className="flex items-center gap-1.5 mt-1.5 text-[11px] text-slate-500">
                    <div className="flex items-center text-amber-400">
                      <Star className="w-3 h-3 fill-amber-400" />
                      <span className="text-slate-700 font-bold ml-1 text-[11px]">{phone.rating}</span>
                    </div>
                    <span className="text-slate-300">•</span>
                    <span className="text-slate-400 text-[10px]">({phone.reviews})</span>
                  </div>

                  {/* Price & Add button */}
                  <div className="flex items-center justify-between mt-3 pt-2 border-t border-slate-50">
                    <div className="flex items-baseline gap-1.5">
                      <span className="text-sm font-extrabold text-slate-900">
                        ${phone.price.toFixed(2)}
                      </span>
                      {phone.originalPrice && (
                        <span className="text-[10px] text-slate-400 line-through">
                          ${phone.originalPrice.toFixed(2)}
                        </span>
                      )}
                    </div>

                    <button
                      onClick={() => onAddToCart(phone)}
                      className="p-1.5 rounded-lg bg-slate-100 hover:bg-sky-500 hover:text-white text-slate-700 transition-colors"
                      aria-label="Add to cart"
                    >
                      <ShoppingBag className="w-3.5 h-3.5" />
                    </button>
                  </div>

                </div>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
