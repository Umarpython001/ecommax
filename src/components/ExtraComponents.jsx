import React, { useState } from 'react';
import { X, Search, CheckCircle2, Clock, Truck, Package } from 'lucide-react';

export const TrackOrderModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;
  const [orderId, setOrderId] = useState('ECM-84920');

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm">
      <div className="w-full max-w-lg bg-white rounded-3xl p-6 sm:p-8 shadow-2xl border border-slate-100">
        <div className="flex justify-between items-center mb-6">
          <h3 className="text-lg font-extrabold text-slate-900">Track Shipment Status</h3>
          <button onClick={onClose} className="p-2 text-slate-400 hover:text-slate-700">
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="flex items-center gap-2 mb-6">
          <input
            type="text"
            value={orderId}
            onChange={(e) => setOrderId(e.target.value)}
            className="flex-1 px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs font-bold text-slate-800 uppercase"
            placeholder="Order ID (e.g. ECM-84920)"
          />
          <button className="px-5 py-2.5 bg-sky-600 text-white rounded-xl text-xs font-bold">
            Track
          </button>
        </div>

        {/* Timeline */}
        <div className="space-y-4 pt-2">
          <div className="flex items-start gap-3">
            <CheckCircle2 className="w-5 h-5 text-emerald-500 shrink-0 mt-0.5" />
            <div>
              <p className="text-xs font-bold text-slate-800">Order Confirmed & Processed</p>
              <p className="text-[11px] text-slate-400">Warehouse fulfillment complete</p>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <Truck className="w-5 h-5 text-sky-500 shrink-0 mt-0.5" />
            <div>
              <p className="text-xs font-bold text-slate-800">In Transit with FedEx Express</p>
              <p className="text-[11px] text-slate-400">Departed San Jose Distribution Center</p>
            </div>
          </div>
          <div className="flex items-start gap-3 opacity-40">
            <Clock className="w-5 h-5 text-slate-400 shrink-0 mt-0.5" />
            <div>
              <p className="text-xs font-bold text-slate-800">Estimated Delivery: Tomorrow by 2:00 PM</p>
              <p className="text-[11px] text-slate-400">Signature required upon arrival</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export const Toast = ({ message, isVisible, onClose }) => {
  if (!isVisible) return null;
  return (
    <div className="fixed bottom-6 right-6 z-50 bg-slate-900 text-white px-5 py-3 rounded-2xl shadow-2xl flex items-center gap-3 border border-slate-800 animate-in slide-in-from-bottom-5">
      <div className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
      <span className="text-xs font-bold">{message}</span>
      <button onClick={onClose} className="text-slate-400 hover:text-white ml-2">
        <X className="w-3.5 h-3.5" />
      </button>
    </div>
  );
};

export const Footer = () => {
  return (
    <footer className="w-full bg-slate-900 text-white mt-16 pt-16 pb-12 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 pb-12 border-b border-slate-800">
          <div>
            <div className="flex items-center gap-2">
              <span className="text-2xl font-black text-white font-display">
                <span className="text-sky-400 italic">e</span>Commax
              </span>
            </div>
            <p className="text-xs text-slate-400 mt-3 leading-relaxed">
              Your premiere destination for high-performance gaming gear, next-gen smartphones, and premium acoustic sound engineering.
            </p>
          </div>

          <div>
            <h4 className="text-xs font-extrabold uppercase tracking-widest text-slate-200 mb-4 font-display">Quick Links</h4>
            <ul className="space-y-2 text-xs text-slate-400">
              <li><a href="#" className="hover:text-sky-400">Home Collections</a></li>
              <li><a href="#" className="hover:text-sky-400">Gaming Gear</a></li>
              <li><a href="#" className="hover:text-sky-400">Smart Speakers</a></li>
              <li><a href="#" className="hover:text-sky-400">Flagship Smartphones</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-xs font-extrabold uppercase tracking-widest text-slate-200 mb-4 font-display">Customer Service</h4>
            <ul className="space-y-2 text-xs text-slate-400">
              <li><a href="#" className="hover:text-sky-400">24/7 Dedicated Support</a></li>
              <li><a href="#" className="hover:text-sky-400">1 Year Official Warranty</a></li>
              <li><a href="#" className="hover:text-sky-400">Track Delivery</a></li>
              <li><a href="#" className="hover:text-sky-400">Privacy & Terms</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-xs font-extrabold uppercase tracking-widest text-slate-200 mb-4 font-display">Newsletter</h4>
            <p className="text-xs text-slate-400 mb-3">Get exclusive offers & discounts straight to your inbox.</p>
            <div className="flex items-center gap-2">
              <input
                type="email"
                placeholder="Enter email address..."
                className="bg-slate-800 text-xs px-3.5 py-2 rounded-xl text-white border border-slate-700 focus:outline-none focus:ring-1 focus:ring-sky-500 w-full"
              />
              <button className="px-4 py-2 bg-sky-500 hover:bg-sky-600 text-white text-xs font-bold rounded-xl shrink-0">
                Join
              </button>
            </div>
          </div>
        </div>

        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>© 2026 eCommax Technologies Inc. All rights reserved.</p>
          <div className="flex items-center gap-4">
            <span>Visa</span>
            <span>MasterCard</span>
            <span>PayPal</span>
            <span>Apple Pay</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
