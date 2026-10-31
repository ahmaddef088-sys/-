'use client';

import React from 'react';
import Image from 'next/image';
import { useLanguage } from '@/context/LanguageContext';
import { 
  Coffee, 
  UtensilsCrossed, 
  Armchair, 
  Users,
  Sparkles
} from 'lucide-react';

export default function About() {
  const { t, language } = useLanguage();

  const features = [
    {
      icon: Coffee,
      titleEn: 'Premium Coffee Beans',
      titleAr: 'حبوب بن مختصة منتقاة',
    },
    {
      icon: UtensilsCrossed,
      titleEn: 'Freshly Made Food & Desserts',
      titleAr: 'توست وحلويات طازجة يومياً',
    },
    {
      icon: Armchair,
      titleEn: 'Relaxing Atmosphere',
      titleAr: 'أجواء هادئة ومريحة',
    },
    {
      icon: Users,
      titleEn: 'A Place for Good People',
      titleAr: 'مساحة لأصحاب الذوق الرفيع',
    },
  ];

  return (
    <section id="about" className="py-20 lg:py-24 bg-cream-50 relative overflow-hidden border-t border-cream-200/80">
      
      {/* Subtle Botanical / Doodles Background Watermarks */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          
          {/* Left Column: Wide Landscape Photo of Interior Seating (5 cols) */}
          <div className="lg:col-span-5 relative">
            <div className="relative h-[320px] sm:h-[400px] w-full rounded-3xl overflow-hidden shadow-xl border-4 border-white bg-espresso-950 group">
              <Image
                src="/images/cafe/interior/interior-1.jpg"
                alt="Roast N' Toast Specialty Coffee Interior Seating Ismailia"
                fill
                sizes="(max-width: 1024px) 100vw, 40vw"
                className="object-cover object-center group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-espresso-950/40 via-transparent to-transparent pointer-events-none" />
            </div>
          </div>

          {/* Right Column: About Details + Circular Latte Art Cutout (7 cols) */}
          <div className="lg:col-span-7 flex flex-col justify-between">
            
            <div className="flex flex-col sm:flex-row items-start justify-between gap-6 mb-6">
              
              {/* Text Content */}
              <div className="flex-1">
                <span className="text-xs font-bold tracking-[0.2em] uppercase text-caramel-600 block mb-2 font-sans">
                  {language === 'ar' ? 'من نحن' : 'ABOUT US'}
                </span>
                <h2 className="text-3xl sm:text-4xl font-serif font-black text-espresso-950 tracking-tight mb-4">
                  {language === 'ar' ? 'أكثر من مجرد مقهى... مساحة تلهمك' : 'More Than Just a Coffee Shop'}
                </h2>
                <p className="text-sm sm:text-base text-espresso-800/80 leading-relaxed font-normal">
                  {language === 'ar'
                    ? 'في Roast N\' Toast، نؤمن بأن فنجان القهوة الرائع يجمع الناس معاً. نقدم قهوة مختصة محضرة بعناية يدوية، مع تشكيلة من أشهى أطباق التوست الذهبي والحلويات المبتكرة، في أجواء دافئة ومرحبة سواء كنت هنا للعمل أو للقاء الأصدقاء أو ببساطة للاستمتاع بفنجان قهوة استثنائي.'
                    : 'At Roast N\' Toast, we believe that great coffee brings people together. We serve carefully crafted specialty coffee, along with a selection of delicious food and desserts, all in a warm and inviting atmosphere. Whether you\'re here to work, catch up with friends, or simply enjoy a great cup of coffee — you\'re always welcome.'}
                </p>
              </div>

              {/* Circular Latte Art Cutout with Handwritten Script Doodle (Matching Reference Image) */}
              <div className="shrink-0 flex flex-col items-center relative sm:self-center">
                
                {/* Handwritten Doodle Script */}
                <div className="text-caramel-600 font-serif italic text-sm sm:text-base tracking-wide text-center -rotate-6 mb-2 flex items-center gap-1 font-bold">
                  <span>Good Coffee</span>
                  <span className="text-espresso-800/60 font-sans text-xs">/</span>
                  <br />
                  <span>Better Days !</span>
                </div>

                {/* Sunburst Doodle Lines around circle */}
                <div className="relative w-28 h-28 sm:w-32 sm:h-32 rounded-full p-1 bg-gradient-to-tr from-caramel-500 to-cream-200 shadow-xl group">
                  <div className="relative w-full h-full rounded-full overflow-hidden border-2 border-white">
                    <Image
                      src="/images/cafe/drinks/hot-coffee.jpg"
                      alt="Roast N' Toast Latte Art"
                      fill
                      sizes="128px"
                      className="object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                  </div>
                </div>

              </div>

            </div>

            {/* 4 Feature Badges (Matching Reference Image) */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-6 border-t border-cream-300">
              {features.map((feat, idx) => {
                const Icon = feat.icon;
                return (
                  <div key={idx} className="flex flex-col items-start gap-2">
                    <div className="w-10 h-10 rounded-xl bg-cream-200/80 border border-cream-300 flex items-center justify-center text-caramel-600">
                      <Icon className="w-5 h-5" />
                    </div>
                    <span className="text-xs font-bold text-espresso-900 leading-tight">
                      {language === 'ar' ? feat.titleAr : feat.titleEn}
                    </span>
                  </div>
                );
              })}
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
