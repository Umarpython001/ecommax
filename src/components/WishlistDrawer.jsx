import React from 'react';
import { X, Heart, ShoppingBag, Trash2 } from 'lucide-react';

export const WishlistDrawer = ({ isOpen, onClose, wishlistItems, onAddToCart, onRemoveWishlist }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex justify-end bg-slate-900/50 backdrop-blur-sm animate-in fade-in">
      <div className="w-full max-w-md bg-white h-full shadow-2xl flex flex-col justify-between p-6 animate-in slide-in-from-right">
        
        {/* Header */}
        <div className="flex items-center justify-between pb-4 border-b border-slate-100">
          <div className="flex items-center gap-2">
            <Heart className="w-5 h-5 text-rose-500 fill-rose-500" />
            <h2 className="text-base font-extrabold text-slate-900">Saved Wishlist ({wishlistItems.length})</h2>
          </div>
          <button onClick={onClose} className="p-2 text-slate-400 hover:text-slate-700">
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Items List */}
        <div className="flex-1 overflow-y-auto py-4 space-y-3">
          {wishlistItems.length === 0 ? (
            <div className="text-center py-16">
              <Heart className="w-12 h-12 text-slate-300 mx-auto mb-3" />
              <p className="text-sm font-bold text-slate-700">No items in your wishlist yet</p>
              <p className="text-xs text-slate-400 mt-1">Tap the heart on any product to save it here!</p>
            </div>
          ) : (
            wishlistItems.map((item) => (
              <div key={item.id} className="p-3 bg-slate-50 rounded-2xl flex items-center justify-between gap-3 border border-slate-100">
                <div className="flex-1 min-w-0">
                  <h4 className="text-xs font-bold text-slate-800 truncate">{item.name || item.title}</h4>
                  <span className="text-xs font-black text-sky-600">${item.price.toFixed(2)}</span>
                </div>

                <div className="flex items-center gap-2">
                  <button
                    onClick={() => {
                      onAddToCart(item);
                      onRemoveWishlist(item.id);
                    }}
                    className="p-2 bg-sky-600 hover:bg-sky-700 text-white rounded-xl text-xs font-bold flex items-center gap-1"
                    title="Move to Cart"
                  >
                    <ShoppingBag className="w-3.5 h-3.5" />
                  </button>
                  <button
                    onClick={() => onRemoveWishlist(item.id)}
                    className="p-2 text-slate-400 hover:text-rose-500"
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>
                </div>
              </div>
            ))
          )}
        </div>

      </div>
    </div>
  );
};
