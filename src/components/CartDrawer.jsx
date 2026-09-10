import React from 'react';
import { X, Trash2, ShoppingBag, ArrowRight, ShieldCheck } from 'lucide-react';

export const CartDrawer = ({ isOpen, onClose, cartItems, onUpdateQuantity, onRemoveItem, onCheckout }) => {
  if (!isOpen) return null;

  const subtotal = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const shipping = subtotal > 200 || subtotal === 0 ? 0 : 9.99;
  const total = subtotal + shipping;

  return (
    <div className="fixed inset-0 z-50 flex justify-end bg-slate-900/50 backdrop-blur-sm animate-in fade-in">
      <div className="w-full max-w-md bg-white h-full shadow-2xl flex flex-col justify-between p-6 animate-in slide-in-from-right">
        
        {/* Header */}
        <div className="flex items-center justify-between pb-4 border-b border-slate-100">
          <div className="flex items-center gap-2">
            <ShoppingBag className="w-5 h-5 text-sky-600" />
            <h2 className="text-base font-extrabold text-slate-900">Your Shopping Cart ({cartItems.length})</h2>
          </div>
          <button onClick={onClose} className="p-2 text-slate-400 hover:text-slate-700">
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Cart Item List */}
        <div className="flex-1 overflow-y-auto py-4 space-y-4 divide-y divide-slate-100">
          {cartItems.length === 0 ? (
            <div className="text-center py-16">
              <ShoppingBag className="w-12 h-12 text-slate-300 mx-auto mb-3" />
              <p className="text-sm font-bold text-slate-700">Your cart is empty</p>
              <p className="text-xs text-slate-400 mt-1">Explore our latest gadgets and smart gear!</p>
            </div>
          ) : (
            cartItems.map((item) => (
              <div key={item.id} className="pt-4 first:pt-0 flex items-center justify-between gap-4">
                <div className="w-14 h-14 rounded-xl bg-slate-100 flex items-center justify-center font-black text-sky-600 text-xs shrink-0">
                  {item.imageType === 'controller' ? '🎮' : item.imageType === 'earbuds' ? '🎧' : '📱'}
                </div>

                <div className="flex-1 min-w-0">
                  <h4 className="text-xs font-bold text-slate-800 truncate">{item.name || item.title}</h4>
                  <span className="text-xs font-extrabold text-sky-600">${item.price.toFixed(2)}</span>
                  
                  {/* Quantity Controls */}
                  <div className="flex items-center gap-2 mt-1.5">
                    <button
                      onClick={() => onUpdateQuantity(item.id, Math.max(1, item.quantity - 1))}
                      className="w-5 h-5 rounded bg-slate-100 hover:bg-slate-200 text-xs font-bold"
                    >
                      -
                    </button>
                    <span className="text-xs font-bold text-slate-700">{item.quantity}</span>
                    <button
                      onClick={() => onUpdateQuantity(item.id, item.quantity + 1)}
                      className="w-5 h-5 rounded bg-slate-100 hover:bg-slate-200 text-xs font-bold"
                    >
                      +
                    </button>
                  </div>
                </div>

                <button
                  onClick={() => onRemoveItem(item.id)}
                  className="text-slate-400 hover:text-rose-500 p-1"
                >
                  <Trash2 className="w-4 h-4" />
                </button>
              </div>
            ))
          )}
        </div>

        {/* Footer Subtotal & Checkout */}
        {cartItems.length > 0 && (
          <div className="pt-4 border-t border-slate-100 space-y-3">
            <div className="flex justify-between text-xs font-medium text-slate-500">
              <span>Subtotal:</span>
              <span className="font-bold text-slate-800">${subtotal.toFixed(2)}</span>
            </div>
            <div className="flex justify-between text-xs font-medium text-slate-500">
              <span>Delivery:</span>
              <span className="font-bold text-emerald-600">{shipping === 0 ? 'FREE' : `$${shipping.toFixed(2)}`}</span>
            </div>
            <div className="flex justify-between text-sm font-extrabold text-slate-900 pt-2 border-t border-slate-100">
              <span>Total:</span>
              <span className="text-sky-600">${total.toFixed(2)}</span>
            </div>

            <button
              onClick={onCheckout}
              className="w-full py-3.5 bg-sky-600 hover:bg-sky-700 text-white font-bold text-xs rounded-full flex items-center justify-center gap-2 shadow-lg hover:shadow-xl transition-all active:scale-95"
            >
              <span>PROCEED TO CHECKOUT</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        )}

      </div>
    </div>
  );
};
