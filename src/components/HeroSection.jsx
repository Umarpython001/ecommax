import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, ArrowRight } from 'lucide-react';
import { HERO_SLIDES, HERO_SIDE_CARDS } from '../data/mockData';
import { GameControllerArt, BambooBudsArt, HomepodProArt } from './ProductIllustrations';

export const HeroSection = ({ onQuickView, onAddToCart }) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  // Auto carousel rotation
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % HERO_SLIDES.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  const slide = HERO_SLIDES[currentSlide];

  return (
    <section className="w-full pt-4 pb-4">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-4">
          
          {/* LEFT LARGE HERO BANNER (Game Controller) - 8 cols */}
          <div className="lg:col-span-8 relative rounded-3xl overflow-hidden bg-gradient-to-b from-[#0b1329] via-[#0d162d] to-[#070b16] text-white p-6 sm:p-10 flex flex-col justify-between min-h-[460px] shadow-2xl border border-slate-800 group">
            
            {/* Subtle Grid Background Pattern */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b12_1px,transparent_1px),linear-gradient(to_bottom,#1e293b12_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none" />

            {/* Top Info Header */}
            <div className="relative z-10 max-w-md">
              <span className="text-[11px] sm:text-xs font-extrabold tracking-widest text-sky-400 uppercase drop-shadow">
                {slide.badge}
              </span>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white mt-1.5 font-display">
                {slide.title}
              </h1>
              <p className="text-xs sm:text-sm text-slate-300 font-medium mt-2">
                {slide.subtitle}
              </p>
              
              {/* SHOP NOW Button */}
              <div className="mt-5 sm:mt-6">
                <button
                  onClick={() => onAddToCart({
                    id: slide.id,
                    name: slide.title,
                    price: slide.price,
                    imageType: slide.imageType,
                    category: slide.badge
                  })}
                  className="px-6 py-2.5 bg-white hover:bg-slate-100 text-slate-900 text-xs font-extrabold rounded-full tracking-wider uppercase transition-all shadow-lg hover:shadow-xl hover:scale-105 active:scale-95 flex items-center gap-2"
                >
                  <span>SHOP NOW</span>
                </button>
              </div>
            </div>

            {/* Central Main 3D Artwork */}
            <div className="relative z-10 my-auto py-2 flex items-center justify-center">
              <div className="w-full max-w-md transform group-hover:scale-105 transition-transform duration-500 ease-out">
                <GameControllerArt className="w-full h-auto max-h-72" />
              </div>
            </div>

            {/* Bottom Carousel Indicator Pill Controls: < • • • > */}
            <div className="relative z-20 flex justify-center items-center mt-4">
              <div className="inline-flex items-center gap-2.5 bg-white/10 backdrop-blur-md px-3.5 py-1.5 rounded-full border border-white/15 shadow-inner">
                {/* Prev Slide */}
                <button
                  onClick={() => setCurrentSlide((prev) => (prev - 1 + HERO_SLIDES.length) % HERO_SLIDES.length)}
                  className="text-white/70 hover:text-white transition-colors"
                  aria-label="Previous hero slide"
                >
                  <ChevronLeft className="w-4 h-4" />
                </button>

                {/* Dots */}
                <div className="flex items-center gap-1.5 px-1">
                  {HERO_SLIDES.map((_, idx) => (
                    <button
                      key={idx}
                      onClick={() => setCurrentSlide(idx)}
                      className={`transition-all ${
                        currentSlide === idx
                          ? 'w-4 h-1.5 bg-white rounded-full'
                          : 'w-1.5 h-1.5 bg-white/40 hover:bg-white/70 rounded-full'
                      }`}
                      aria-label={`Go to slide ${idx + 1}`}
                    />
                  ))}
                </div>

                {/* Next Slide */}
                <button
                  onClick={() => setCurrentSlide((prev) => (prev + 1) % HERO_SLIDES.length)}
                  className="text-white/70 hover:text-white transition-colors"
                  aria-label="Next hero slide"
                >
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </div>

          </div>

          {/* RIGHT STACKED 2 BANNERS - 4 cols */}
          <div className="lg:col-span-4 flex flex-col gap-4">
            
            {/* 1. BambooBuds Banner (Top Right) */}
            <div className="relative rounded-3xl overflow-hidden bg-gradient-to-br from-[#7e22ce] via-[#9333ea] to-[#a855f7] text-white p-6 sm:p-7 flex flex-col justify-between flex-1 min-h-[220px] shadow-xl group border border-purple-400/20">
              
              {/* Foreground content */}
              <div className="relative z-10 max-w-[55%]">
                <span className="text-[10px] font-extrabold tracking-wider text-emerald-300 uppercase">
                  {HERO_SIDE_CARDS.top.tag}
                </span>
                <h3 className="text-xl sm:text-2xl font-black text-white mt-1 tracking-tight font-display">
                  {HERO_SIDE_CARDS.top.title}
                </h3>
                <button 
                  onClick={() => onAddToCart({
                    id: HERO_SIDE_CARDS.top.id,
                    name: HERO_SIDE_CARDS.top.title,
                    price: HERO_SIDE_CARDS.top.price,
                    imageType: 'earbuds',
                    category: 'AUDIO'
                  })}
                  className="inline-flex items-center gap-1 text-xs font-bold text-white/90 hover:text-white mt-4 group/btn"
                >
                  <span>{HERO_SIDE_CARDS.top.linkText}</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover/btn:translate-x-1 transition-transform" />
                </button>
              </div>

              {/* Model & Earbuds Art */}
              <div className="absolute right-0 top-0 bottom-0 w-1/2 flex items-center justify-end group-hover:scale-105 transition-transform duration-500">
                <BambooBudsArt className="w-full h-full" />
              </div>
            </div>

            {/* 2. HomePod Pro Banner (Bottom Right) */}
            <div className="relative rounded-3xl overflow-hidden bg-gradient-to-br from-[#090d16] via-[#101426] to-[#1e1b4b] text-white p-6 sm:p-7 flex flex-col justify-between flex-1 min-h-[220px] shadow-xl group border border-slate-800">
              
              {/* Foreground content */}
              <div className="relative z-10 max-w-[55%]">
                <span className="text-[10px] font-extrabold tracking-wider text-emerald-400 uppercase">
                  {HERO_SIDE_CARDS.bottom.tag}
                </span>
                <h3 className="text-xl sm:text-2xl font-black text-white mt-1 tracking-tight font-display">
                  {HERO_SIDE_CARDS.bottom.title}
                </h3>
                <button 
                  onClick={() => onAddToCart({
                    id: HERO_SIDE_CARDS.bottom.id,
                    name: HERO_SIDE_CARDS.bottom.title,
                    price: HERO_SIDE_CARDS.bottom.price,
                    imageType: 'speaker',
                    category: 'AUDIO'
                  })}
                  className="inline-flex items-center gap-1 text-xs font-bold text-white/90 hover:text-white mt-4 group/btn"
                >
                  <span>{HERO_SIDE_CARDS.bottom.linkText}</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover/btn:translate-x-1 transition-transform" />
                </button>
              </div>

              {/* Glowing HomePod Art */}
              <div className="absolute right-2 top-0 bottom-0 w-1/2 flex items-center justify-center group-hover:scale-105 transition-transform duration-500">
                <HomepodProArt className="w-full h-full" />
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};
