import React from 'react';
import { Flame, PackageCheck, MapPin } from 'lucide-react';
import { NAV_LINKS } from '../data/mockData';

export const Navigation = ({ activeTab, onSelectTab, onOpenTracker }) => {
  return (
    <nav className="w-full bg-white border-b border-slate-100 hidden md:block">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-11 text-xs font-bold tracking-wider">
          
          {/* Main Navigation Links */}
          <ul className="flex items-center space-x-7">
            {NAV_LINKS.map((link) => {
              const isActive = (activeTab || 'HOME') === link.name;
              return (
                <li key={link.name}>
                  <button
                    onClick={() => onSelectTab(link.name)}
                    className={`relative py-3 transition-colors uppercase tracking-widest ${
                      isActive 
                        ? 'text-sky-600 font-extrabold' 
                        : 'text-slate-600 hover:text-sky-600 font-bold'
                    }`}
                  >
                    {link.name}
                    {isActive && (
                      <span className="absolute bottom-0 left-0 w-full h-[2.5px] bg-sky-500 rounded-t-full" />
                    )}
                  </button>
                </li>
              );
            })}
          </ul>

          {/* Right Promotional & Utility Badges */}
          <div className="flex items-center space-x-6 text-slate-600">
            {/* Hot Deals */}
            <button 
              onClick={() => onSelectTab('HOT DEALS')}
              className="flex items-center gap-1.5 text-slate-700 hover:text-red-500 transition-colors group"
            >
              <Flame className="w-3.5 h-3.5 text-orange-500 group-hover:scale-110 transition-transform animate-pulse" />
              <span className="text-[11px] font-bold">Hot Deals</span>
            </button>

            {/* Track Your Order */}
            <button 
              onClick={onOpenTracker}
              className="flex items-center gap-1.5 text-slate-700 hover:text-sky-600 transition-colors group"
            >
              <PackageCheck className="w-3.5 h-3.5 text-slate-500 group-hover:text-sky-500 transition-colors" />
              <span className="text-[11px] font-bold">Track Your Order</span>
            </button>

            {/* Store Locator */}
            <a 
              href="#store-locator"
              className="flex items-center gap-1.5 text-slate-700 hover:text-sky-600 transition-colors group"
            >
              <MapPin className="w-3.5 h-3.5 text-slate-500 group-hover:text-sky-500 transition-colors" />
              <span className="text-[11px] font-bold">Store Locator</span>
            </a>
          </div>

        </div>
      </div>
    </nav>
  );
};
