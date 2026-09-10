import React, { useRef } from 'react';
import { 
  ChevronLeft, 
  ChevronRight, 
  Tablet, 
  Smartphone, 
  Gamepad2, 
  Camera, 
  Watch, 
  Plane, 
  Headphones, 
  Monitor 
} from 'lucide-react';
import { CATEGORIES } from '../data/mockData';

const iconMap = {
  tablet: Tablet,
  smartphone: Smartphone,
  gamepad: Gamepad2,
  camera: Camera,
  smartwatch: Watch,
  drone: Plane,
  headphones: Headphones,
  computer: Monitor
};

export const CategoryBar = ({ onSelectCategory, selectedCategory }) => {
  const scrollRef = useRef(null);

  const handleScroll = (direction) => {
    if (scrollRef.current) {
      const offset = direction === 'left' ? -260 : 260;
      scrollRef.current.scrollBy({ left: offset, behavior: 'smooth' });
    }
  };

  return (
    <section className="w-full py-4">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Pastel Iridescent Gradient Card Container */}
        <div className="relative rounded-3xl p-5 sm:p-7 bg-gradient-to-r from-[#bcf3fd] via-[#d5e6ff] via-[#e5dcfd] to-[#eed7f6] shadow-sm border border-white/60">
          
          {/* Scroll Left Button */}
          <button
            onClick={() => handleScroll('left')}
            className="absolute left-3 sm:left-4 top-1/2 -translate-y-1/2 z-20 w-8 h-8 rounded-full bg-white/90 hover:bg-white text-slate-700 shadow-md hover:shadow-lg flex items-center justify-center transition-all active:scale-95"
            aria-label="Scroll categories left"
          >
            <ChevronLeft className="w-4 h-4" />
          </button>

          {/* Scrollable Categories List */}
          <div 
            ref={scrollRef}
            className="flex items-center gap-4 sm:gap-6 lg:gap-8 overflow-x-auto no-scrollbar px-6 scroll-smooth"
          >
            {CATEGORIES.map((cat) => {
              const IconComponent = iconMap[cat.icon] || Smartphone;
              const isSelected = selectedCategory === cat.name;

              return (
                <button
                  key={cat.id}
                  onClick={() => onSelectCategory(cat.name)}
                  className="flex flex-col items-center group shrink-0 transition-transform active:scale-95"
                >
                  {/* Circular White Product Capsule */}
                  <div className={`w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-white flex items-center justify-center shadow-sm group-hover:shadow-lg group-hover:-translate-y-1 transition-all duration-300 border ${
                    isSelected ? 'border-sky-500 ring-4 ring-sky-300/40' : 'border-white/80'
                  }`}>
                    <IconComponent className="w-7 h-7 sm:w-8 sm:h-8 text-slate-700 group-hover:text-sky-600 group-hover:scale-110 transition-all duration-300" />
                  </div>

                  {/* Category Name */}
                  <span className="text-[11px] sm:text-xs font-bold text-slate-700 mt-2.5 tracking-tight group-hover:text-sky-700 transition-colors whitespace-nowrap">
                    {cat.name}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Scroll Right Button */}
          <button
            onClick={() => handleScroll('right')}
            className="absolute right-3 sm:right-4 top-1/2 -translate-y-1/2 z-20 w-8 h-8 rounded-full bg-white/90 hover:bg-white text-slate-700 shadow-md hover:shadow-lg flex items-center justify-center transition-all active:scale-95"
            aria-label="Scroll categories right"
          >
            <ChevronRight className="w-4 h-4" />
          </button>

        </div>
      </div>
    </section>
  );
};
