import React from 'react';
import { ArrowRight, ShoppingBag } from 'lucide-react';
import { PROMO_CARDS } from '../data/mockData';
import { 
  MacbookProPromoArt, 
  DualSpeakerArt, 
  BambooSpeakerArt 
} from './ProductIllustrations';

export const PromoCards = ({ onAddToCart, onQuickView }) => {
  return (
    <section className="w-full py-4">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {PROMO_CARDS.map((card) => {
            return (
              <div
                key={card.id}
                className="relative rounded-3xl p-6 sm:p-8 flex flex-col justify-between min-h-[360px] overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-1 group"
                style={{ backgroundColor: card.bgColor }}
              >
                {/* Visual Product Showcase Art */}
                <div className="relative my-auto py-4 flex items-center justify-center transform group-hover:scale-105 transition-transform duration-500">
                  {card.type === 'laptop' && <MacbookProPromoArt className="w-full max-w-[260px]" />}
                  {card.type === 'duo-speaker' && <DualSpeakerArt className="w-full max-w-[240px]" />}
                  {card.type === 'clear-speaker' && <BambooSpeakerArt className="w-full max-w-[260px]" />}
                </div>

                {/* Bottom Card Title & Subtitle */}
                <div className="relative z-10 text-center mt-4">
                  <h3 className="text-sm sm:text-base font-extrabold text-slate-800 tracking-wider uppercase font-display">
                    {card.title}
                  </h3>
                  <p className="text-xs text-slate-500 font-medium mt-1">
                    {card.subtitle}
                  </p>
                  
                  {/* Quick Action Pill Button on Hover */}
                  <div className="mt-4 opacity-90 group-hover:opacity-100 transition-opacity">
                    <button
                      onClick={() => onAddToCart({
                        id: card.id,
                        name: card.title,
                        price: card.price,
                        category: 'ELECTRONICS'
                      })}
                      className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-slate-900/90 hover:bg-slate-900 text-white text-[11px] font-bold tracking-wide transition-all active:scale-95 shadow-md"
                    >
                      <ShoppingBag className="w-3 h-3 text-sky-400" />
                      <span>Buy Now • ${card.price}</span>
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
