'use client';

import React from 'react';
import Image from 'next/image';
import { useLanguage } from '@/context/LanguageContext';
import { 
  Coffee, 
  Utensils, 
  Leaf, 
  ArrowRight, 
  ArrowLeft,
  CalendarDays,
  ArrowDown
} from 'lucide-react';

export default function Hero() {
  const { t, language, direction } = useLanguage();
  const Arrow = direction === 'rtl' ? ArrowLeft : ArrowRight;

  return (
    <section id="home" className="relative min-h-[90vh] flex items-center justify-center bg-cream-100 overflow-hidden pt-28 pb-16">
      
      {/* Decorative Botanical Illustrations on Far Left / Background */}
      <div className="absolute top-1/4 -left-12 w-48 h-48 opacity-15 pointer-events-none select-none">
        <svg viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M50 150 C70 90, 140 70, 180 50 C150 90, 110 140, 50 150 Z" fill="#C88647" />
          <path d="M70 140 C100 110, 140 90, 170 70" stroke="#23140E" strokeWidth="2" strokeLinecap="round" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center">
          
          {/* Left Column: Text & CTAs (5 cols / 45%) */}
          <div className="lg:col-span-5 text-start flex flex-col justify-center">
            
            {/* Eyebrow */}
            <div className="text-xs font-bold tracking-[0.2em] uppercase text-caramel-600 mb-3 font-sans">
              ROAST N&apos; TOAST <br className="hidden sm:inline" />
              <span className="text-espresso-800/80">SPECIALTY COFFEE</span>
            </div>

            {/* Display Headline (Exact Match with Reference Image) */}
            <h1 className="text-4xl sm:text-5xl lg:text-[54px] font-serif font-black text-espresso-950 leading-[1.15] tracking-tight mb-4">
              <span>More Than Coffee.</span>
              <br />
              <span className="text-caramel-600 font-serif italic font-normal">
                It&apos;s an Experience.
              </span>
            </h1>

            {/* Arabic Signature Tagline */}
            <div className="text-xl sm:text-2xl font-bold text-espresso-900 mb-5 font-arabic">
              مش مجرد قهوة... دي تجربة مختلفة.
            </div>

            {/* Subtitle Description */}
            <p className="text-sm sm:text-base text-espresso-800/80 leading-relaxed mb-8 max-w-lg font-normal">
              {language === 'ar'
                ? 'قهوة مختصة، أطباق توست شهية، وأجواء مريحة حيث يلتقي المذاق الرائع مع اللحظات الدافئة في قلب الإسماعيلية.'
                : 'Specialty coffee, delicious food and a cozy atmosphere where great taste meets good vibes.'}
            </p>

            {/* Buttons (Matching Reference Image) */}
            <div className="flex flex-wrap items-center gap-4 mb-10">
              
              {/* Primary Button (Caramel pill) */}
              <a
                href="#menu"
                className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-full bg-caramel-500 hover:bg-caramel-600 text-white font-bold text-sm shadow-md shadow-caramel-500/25 hover:scale-105 transition-all cursor-pointer group"
              >
                <span>{language === 'ar' ? 'استكشف القائمة' : 'Explore Menu'}</span>
                <Arrow className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </a>

              {/* Secondary Button (Outlined light pill) */}
              <a
                href="#reservation"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-cream-50 hover:bg-cream-200/60 border border-espresso-900/25 hover:border-espresso-900 text-espresso-900 font-bold text-sm transition-all cursor-pointer"
              >
                <CalendarDays className="w-4 h-4 text-caramel-600" />
                <span>{language === 'ar' ? 'حجز طاولة' : 'Reserve Your Table'}</span>
              </a>
            </div>

            {/* 3 Inline Features (Matching Reference Image) */}
            <div className="flex flex-wrap items-center gap-6 pt-6 border-t border-cream-300 text-xs font-bold text-espresso-900">
              <div className="flex items-center gap-2">
                <Coffee className="w-4 h-4 text-caramel-600" />
                <span>{language === 'ar' ? 'قهوة مختصة' : 'Specialty Coffee'}</span>
              </div>
              <div className="flex items-center gap-2">
                <Utensils className="w-4 h-4 text-caramel-600" />
                <span>{language === 'ar' ? 'طعام طازج' : 'Fresh Food'}</span>
              </div>
              <div className="flex items-center gap-2">
                <Leaf className="w-4 h-4 text-caramel-600" />
                <span>{language === 'ar' ? 'أجواء مريحة' : 'Cozy Atmosphere'}</span>
              </div>
            </div>

          </div>

          {/* Right Column: Large Cafe Real Storefront Image (7 cols / 55%) */}
          <div className="lg:col-span-7 relative">
            <div className="relative h-[380px] sm:h-[480px] lg:h-[520px] w-full rounded-3xl overflow-hidden shadow-2xl border-4 border-white/80 bg-espresso-950 group">
              
              {/* Real Cafe Image */}
              <Image
                src="/images/cafe/exterior/facade-main.jpg"
                alt="Roast N' Toast Specialty Coffee Ismailia Exterior & Facade"
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 60vw"
                className="object-cover object-center group-hover:scale-105 transition-transform duration-700"
              />

              {/* Subtle Ambient Vignette */}
              <div className="absolute inset-0 bg-gradient-to-t from-espresso-950/40 via-transparent to-transparent pointer-events-none" />

              {/* Vertical Pagination Dots on the right edge (Matching Reference Image) */}
              <div className="absolute end-4 top-1/2 -translate-y-1/2 flex flex-col gap-2.5 z-10">
                <div className="w-2 h-2 rounded-full bg-white shadow" />
                <div className="w-2 h-2 rounded-full bg-white/40" />
                <div className="w-2 h-2 rounded-full bg-white/40" />
                <div className="w-2 h-2 rounded-full bg-white/40" />
              </div>

              {/* Scroll Down Pill at bottom right (Matching Reference Image) */}
              <a
                href="#about"
                className="absolute bottom-5 end-5 px-3.5 py-1.5 rounded-full bg-espresso-950/70 hover:bg-espresso-950/90 backdrop-blur-md text-white text-[11px] font-semibold flex items-center gap-1.5 transition-all cursor-pointer z-10 border border-white/20"
              >
                <span>Scroll Down</span>
                <ArrowDown className="w-3.5 h-3.5 text-caramel-400 animate-bounce" />
              </a>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
