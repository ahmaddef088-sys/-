'use client';

import React, { useState, useMemo } from 'react';
import Image from 'next/image';
import { useLanguage } from '@/context/LanguageContext';
import { menuItems } from '@/data/menuData';
import { MenuCategory } from '@/types';
import { AlertCircle, Tag } from 'lucide-react';

export default function MenuSection() {
  const { t, language } = useLanguage();
  const [selectedCategory, setSelectedCategory] = useState<MenuCategory | 'all'>('all');

  const categories = [
    { id: 'all', label: language === 'ar' ? 'الكل' : 'All' },
    { id: 'hot_coffee', label: language === 'ar' ? 'قهوة ساخنة' : 'Hot Coffee' },
    { id: 'cold_coffee', label: language === 'ar' ? 'قهوة باردة' : 'Cold Coffee' },
    { id: 'specialty', label: language === 'ar' ? 'مشروبات مميزة' : 'Specialty Drinks' },
    { id: 'tea', label: language === 'ar' ? 'شاي' : 'Tea' },
    { id: 'desserts', label: language === 'ar' ? 'حلويات' : 'Desserts' },
    { id: 'food', label: language === 'ar' ? 'توست وطعام' : 'Food' },
  ];

  const filteredItems = useMemo(() => {
    if (selectedCategory === 'all') return menuItems;
    return menuItems.filter(item => item.category === selectedCategory);
  }, [selectedCategory]);

  return (
    <section id="menu" className="py-20 lg:py-24 bg-cream-100 relative border-t border-cream-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Header: Title on Left, Filter Pills on Right (Exact Match with Reference Image) */}
        <div className="flex flex-col lg:flex-row items-start lg:items-end justify-between gap-6 mb-12">
          
          {/* Left Title & Description */}
          <div className="max-w-xl">
            <span className="text-xs font-bold tracking-[0.2em] uppercase text-caramel-600 block mb-2 font-sans">
              {language === 'ar' ? 'قائمتنا' : 'OUR MENU'}
            </span>
            <h2 className="text-3xl sm:text-4xl font-serif font-black text-espresso-950 tracking-tight mb-3">
              {language === 'ar' ? 'اكتشف قائمتنا المختارة' : 'Discover Our Menu'}
            </h2>
            <p className="text-sm sm:text-base text-espresso-800/80 leading-relaxed font-normal">
              {language === 'ar'
                ? 'من الإسبريسو الغني إلى القهوة الباردة المنعشة، وساندويتشات التوست الذهبية اللذيذة — خيارات تلبي كل ذوق.'
                : 'From rich espresso to refreshing cold brews, and delicious bites — there\'s something for everyone.'}
            </p>
          </div>

          {/* Right Filter Pills */}
          <div className="flex items-center gap-2 overflow-x-auto pb-2 w-full lg:w-auto scrollbar-none">
            {categories.map((cat) => {
              const isActive = selectedCategory === cat.id;
              return (
                <button
                  key={cat.id}
                  onClick={() => setSelectedCategory(cat.id as any)}
                  className={`px-4 py-2 rounded-full text-xs font-bold whitespace-nowrap transition-all duration-200 cursor-pointer ${
                    isActive
                      ? 'bg-caramel-500 text-white shadow-md shadow-caramel-500/25'
                      : 'bg-cream-50 hover:bg-cream-200 text-espresso-800 border border-cream-300'
                  }`}
                >
                  {cat.label}
                </button>
              );
            })}
          </div>

        </div>

        {/* Demo Disclaimer Banner */}
        <div className="mb-8 p-3.5 rounded-2xl bg-cream-200/60 border border-caramel-500/30 text-espresso-900 text-xs sm:text-sm flex items-center gap-2.5">
          <AlertCircle className="w-4 h-4 text-caramel-600 shrink-0" />
          <span>
            {language === 'ar'
              ? 'تنويه: القائمة نموذج تجريبي (Demo)؛ تخضع الأصناف والأسعار للمراجعة والاعتماد النهائي من إدارة الكافيه.'
              : 'Notice: This menu is a demonstration prototype. Items and prices are subject to official verification by cafe management.'}
          </span>
        </div>

        {/* Menu Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 gap-5">
          {filteredItems.map((item) => {
            const name = language === 'ar' ? item.nameAr : item.nameEn;
            const desc = language === 'ar' ? item.descriptionAr : item.descriptionEn;

            return (
              <div
                key={item.id}
                className="bg-cream-50 rounded-2xl overflow-hidden border border-cream-200/90 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300 flex flex-col group"
              >
                {/* Image Container with Real Photo */}
                <div className="relative h-44 w-full bg-cream-200 overflow-hidden">
                  <Image
                    src={item.image}
                    alt={name}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 20vw"
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  
                  {/* Demo Badge */}
                  <div className="absolute top-2.5 start-2.5">
                    <span className="px-2 py-0.5 rounded-md bg-espresso-950/75 backdrop-blur-sm text-cream-100 text-[10px] font-bold tracking-wider">
                      Demo
                    </span>
                  </div>

                  {item.isPopular && (
                    <div className="absolute top-2.5 end-2.5">
                      <span className="px-2 py-0.5 rounded-md bg-caramel-500 text-white text-[10px] font-bold shadow-sm">
                        {language === 'ar' ? 'مميز' : 'Popular'}
                      </span>
                    </div>
                  )}
                </div>

                {/* Card Content */}
                <div className="p-4 flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="font-bold text-espresso-950 text-sm mb-1 line-clamp-1 group-hover:text-caramel-600 transition-colors">
                      {name}
                    </h3>
                    <p className="text-xs text-espresso-800/70 line-clamp-2 leading-relaxed mb-3">
                      {desc}
                    </p>
                  </div>

                  <div className="pt-2 border-t border-cream-200/80 flex items-center justify-between">
                    <span className="text-xs font-semibold text-espresso-700/70">
                      {language === 'ar' ? 'السعر التقديري:' : 'Est. Price:'}
                    </span>
                    <span className="text-sm font-extrabold text-espresso-950">
                      {item.price} <span className="text-xs font-normal text-espresso-700">{language === 'ar' ? 'ج.م' : 'EGP'}</span>
                    </span>
                  </div>
                </div>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
