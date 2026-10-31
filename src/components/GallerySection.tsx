'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { useLanguage } from '@/context/LanguageContext';
import { galleryItems } from '@/data/galleryData';
import { 
  Maximize2, 
  X, 
  ChevronLeft, 
  ChevronRight, 
  Camera 
} from 'lucide-react';

export default function GallerySection() {
  const { t, language } = useLanguage();
  const [selectedCategory, setSelectedCategory] = useState<'all' | 'interior' | 'coffee' | 'food' | 'vibe'>('all');
  const [activeLightboxIndex, setActiveLightboxIndex] = useState<number | null>(null);

  const categories = [
    { id: 'all', label: language === 'ar' ? 'جميع الصور' : 'All' },
    { id: 'interior', label: language === 'ar' ? 'الجلسات والديكور' : 'Interior' },
    { id: 'coffee', label: language === 'ar' ? 'القهوة والمشروبات' : 'Coffee & Drinks' },
    { id: 'food', label: language === 'ar' ? 'التوست والحلويات' : 'Food & Desserts' },
  ];

  const filteredItems = selectedCategory === 'all'
    ? galleryItems
    : galleryItems.filter(item => {
        if (selectedCategory === 'coffee') return item.category === 'coffee';
        if (selectedCategory === 'food') return item.category === 'food';
        if (selectedCategory === 'interior') return item.category === 'interior' || item.category === 'vibe';
        return true;
      });

  const openLightbox = (index: number) => {
    setActiveLightboxIndex(index);
    document.body.style.overflow = 'hidden';
  };

  const closeLightbox = () => {
    setActiveLightboxIndex(null);
    document.body.style.overflow = 'auto';
  };

  const nextImage = () => {
    if (activeLightboxIndex !== null) {
      setActiveLightboxIndex((activeLightboxIndex + 1) % filteredItems.length);
    }
  };

  const prevImage = () => {
    if (activeLightboxIndex !== null) {
      setActiveLightboxIndex((activeLightboxIndex - 1 + filteredItems.length) % filteredItems.length);
    }
  };

  const activeItem = activeLightboxIndex !== null ? filteredItems[activeLightboxIndex] : null;

  return (
    <section id="gallery" className="py-20 lg:py-24 bg-espresso-950 text-cream-100 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-10">
          <span className="text-xs font-bold tracking-[0.2em] uppercase text-caramel-400 block mb-2 font-sans">
            {language === 'ar' ? 'معرض الصور' : 'GALLERY'}
          </span>
          <h2 className="text-3xl sm:text-4xl font-serif font-black text-cream-50 tracking-tight mb-3">
            {language === 'ar' ? 'أجواء حقيقية من Roast N\' Toast' : 'Moments from Roast N\' Toast'}
          </h2>
          <p className="text-sm text-cream-300/80">
            {language === 'ar' 
              ? 'لقطات فوتوغرافية حقيقية توثق تفاصيل المكان، الجلسات، القهوة المختصة، والتوست الطازج في الإسماعيلية.'
              : 'Authentic photos capturing our space, cozy seating, specialty coffee, and artisan toasts in Ismailia.'}
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="flex items-center justify-center gap-2 overflow-x-auto pb-4 mb-10 scrollbar-none">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id as any)}
              className={`px-4 py-2 rounded-full text-xs font-bold whitespace-nowrap transition-all duration-200 cursor-pointer ${
                selectedCategory === cat.id
                  ? 'bg-caramel-500 text-white shadow-md shadow-caramel-500/25'
                  : 'bg-espresso-900 hover:bg-espresso-800 text-cream-200 border border-espresso-800'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {filteredItems.map((item, index) => {
            const title = language === 'ar' ? item.titleAr : item.titleEn;
            const caption = language === 'ar' ? item.captionAr : item.captionEn;

            return (
              <div
                key={item.id}
                onClick={() => openLightbox(index)}
                className="group relative h-64 sm:h-72 rounded-2xl overflow-hidden cursor-pointer border border-espresso-800/80 bg-espresso-900 shadow-lg"
              >
                <Image
                  src={item.image}
                  alt={title}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-cover object-center group-hover:scale-105 transition-transform duration-500"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-espresso-950/90 via-transparent to-transparent opacity-60 group-hover:opacity-85 transition-opacity" />

                <div className="absolute top-3 end-3 w-8 h-8 rounded-full bg-espresso-900/80 backdrop-blur-sm border border-caramel-500/30 flex items-center justify-center text-caramel-300 opacity-0 group-hover:opacity-100 transition-opacity">
                  <Maximize2 className="w-3.5 h-3.5" />
                </div>

                <div className="absolute bottom-0 left-0 right-0 p-4">
                  <h3 className="font-bold text-cream-100 text-sm mb-0.5 group-hover:text-caramel-300 transition-colors">
                    {title}
                  </h3>
                  {caption && (
                    <p className="text-xs text-cream-300/70 line-clamp-1">
                      {caption}
                    </p>
                  )}
                </div>
              </div>
            );
          })}
        </div>

      </div>

      {/* Lightbox Modal */}
      {activeItem && (
        <div 
          className="fixed inset-0 z-50 bg-black/95 backdrop-blur-xl flex items-center justify-center p-4 animate-fadeIn"
          onClick={closeLightbox}
        >
          <button
            onClick={closeLightbox}
            className="absolute top-5 end-5 w-10 h-10 rounded-full bg-espresso-900 border border-espresso-700 text-cream-100 hover:text-caramel-400 flex items-center justify-center cursor-pointer z-20"
            aria-label="Close"
          >
            <X className="w-5 h-5" />
          </button>

          <button
            onClick={(e) => { e.stopPropagation(); prevImage(); }}
            className="absolute start-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-espresso-900 border border-espresso-700 text-cream-100 hover:text-caramel-400 flex items-center justify-center cursor-pointer z-20"
            aria-label="Previous image"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>

          <button
            onClick={(e) => { e.stopPropagation(); nextImage(); }}
            className="absolute end-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-espresso-900 border border-espresso-700 text-cream-100 hover:text-caramel-400 flex items-center justify-center cursor-pointer z-20"
            aria-label="Next image"
          >
            <ChevronRight className="w-5 h-5" />
          </button>

          <div 
            className="relative max-w-4xl w-full max-h-[85vh] flex flex-col items-center justify-center"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative w-full h-[60vh] sm:h-[70vh] rounded-2xl overflow-hidden shadow-2xl border border-espresso-800">
              <Image
                src={activeItem.image}
                alt={language === 'ar' ? activeItem.titleAr : activeItem.titleEn}
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 1000px"
                className="object-contain"
              />
            </div>

            <div className="mt-3 text-center">
              <h3 className="text-base font-bold text-cream-100">
                {language === 'ar' ? activeItem.titleAr : activeItem.titleEn}
              </h3>
            </div>
          </div>
        </div>
      )}

    </section>
  );
}
