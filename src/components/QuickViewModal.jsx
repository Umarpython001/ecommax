import React, { useState } from 'react';
import { X, Star, ShoppingBag, Heart, Check, ShieldCheck, RotateCcw, Truck } from 'lucide-react';
import { SmartphoneCardArt, GameControllerArt } from './ProductIllustrations';

export const QuickViewModal = ({ product, isOpen, onClose, onAddToCart, onToggleWishlist, isWishlisted }) => {
  if (!isOpen || !product) return null;

  const [quantity, setQuantity] = useState(1);
  const [selectedColor, setSelectedColor] = useState('Standard');

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm animate-in fade-in">
      <div className="relative w-full max-w-3xl bg-white rounded-3xl shadow-2xl overflow-hidden border border-slate-100">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-20 p-2 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-600 transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="grid grid-cols-1 md:grid-cols-2">
          
          {/* Product Media Display */}
          <div className="p-8 bg-slate-50 flex items-center justify-center">
            {product.colorStyle ? (
              <SmartphoneCardArt styleType={product.colorStyle} className="h-64 scale-125" />
            ) : (
              <GameControllerArt className="w-full max-w-[280px]" />
            )}
          </div>

          {/* Product Details & Actions */}
          <div className="p-6 sm:p-8 flex flex-col justify-between">
            <div>
              <span className="text-xs font-bold text-sky-600 tracking-wider uppercase">
                {product.category || 'FEATURED PRODUCT'}
              </span>
              
              <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900 mt-1 font-display">
                {product.name || product.title}
              </h2>

              <div className="flex items-center gap-2 mt-2">
                <div className="flex items-center text-amber-400">
                  <Star className="w-4 h-4 fill-amber-400" />
                  <span className="text-slate-800 font-bold ml-1 text-xs">{product.rating || 4.9}</span>
                </div>
                <span className="text-slate-300">•</span>
                <span className="text-emerald-600 font-bold text-xs">In Stock & Ready to Ship</span>
              </div>

              <div className="mt-4 flex items-baseline gap-2">
                <span className="text-2xl font-black text-slate-900">
                  ${(product.price || 59.99).toFixed(2)}
                </span>
                {product.originalPrice && (
                  <span className="text-sm text-slate-400 line-through">
                    ${product.originalPrice.toFixed(2)}
                  </span>
                )}
              </div>

              <p className="text-xs text-slate-600 mt-3 leading-relaxed">
                {product.description || product.specs || 'Experience cutting-edge hardware design, precision crafted components, and seamless multi-device connectivity.'}
              </p>

              {/* Quantity Selector */}
              <div className="flex items-center gap-3 mt-6">
                <span className="text-xs font-bold text-slate-700">Quantity:</span>
                <div className="flex items-center border border-slate-200 rounded-lg overflow-hidden">
                  <button
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="px-3 py-1.5 bg-slate-50 hover:bg-slate-100 text-slate-700 font-bold"
                  >
                    -
                  </button>
                  <span className="px-4 py-1.5 text-xs font-bold text-slate-800">
                    {quantity}
                  </span>
                  <button
                    onClick={() => setQuantity(quantity + 1)}
                    className="px-3 py-1.5 bg-slate-50 hover:bg-slate-100 text-slate-700 font-bold"
                  >
                    +
                  </button>
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex items-center gap-3 mt-6 pt-4 border-t border-slate-100">
              <button
                onClick={() => {
                  onAddToCart({ ...product, quantity });
                  onClose();
                }}
                className="flex-1 py-3 bg-sky-600 hover:bg-sky-700 text-white text-xs font-extrabold rounded-full flex items-center justify-center gap-2 shadow-md hover:shadow-lg transition-all active:scale-95"
              >
                <ShoppingBag className="w-4 h-4" />
                <span>Add To Cart (${((product.price || 59.99) * quantity).toFixed(2)})</span>
              </button>

              <button
                onClick={() => onToggleWishlist(product)}
                className={`p-3 rounded-full border transition-all ${
                  isWishlisted
                    ? 'border-rose-200 bg-rose-50 text-rose-500'
                    : 'border-slate-200 hover:border-rose-200 text-slate-600 hover:text-rose-500'
                }`}
              >
                <Heart className={`w-5 h-5 ${isWishlisted ? 'fill-rose-500' : ''}`} />
              </button>
            </div>

          </div>

        </div>

      </div>
    </div>
  );
};
