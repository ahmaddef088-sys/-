'use client';

import React, { useState, useEffect } from 'react';
import { useLanguage } from '@/context/LanguageContext';
import { cafeConfig } from '@/data/cafeConfig';
import { Clock, AlertCircle, CalendarCheck } from 'lucide-react';

export default function HoursSection() {
  const { language } = useLanguage();
  const [isOpenNow, setIsOpenNow] = useState<boolean>(true);

  useEffect(() => {
    try {
      const now = new Date();
      const currentHour = now.getHours();
      // Most days 07:00 to 01:00 (next day), Thu-Fri till 03:00 AM
      const isMorningClosed = currentHour >= 3 && currentHour < 7;
      setIsOpenNow(!isMorningClosed);
    } catch {
      setIsOpenNow(true);
    }
  }, []);

  return (
    <section id="hours" className="py-20 lg:py-24 bg-cream-50 relative border-t border-cream-200">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-10">
          <span className="text-xs font-bold tracking-[0.2em] uppercase text-caramel-600 block mb-2 font-sans">
            {language === 'ar' ? 'ساعات العمل' : 'OPENING HOURS'}
          </span>
          <h2 className="text-3xl sm:text-4xl font-serif font-black text-espresso-950 tracking-tight mb-3">
            {language === 'ar' ? 'أوقات الترحيب بكم' : 'Weekly Schedule'}
          </h2>
          <p className="text-sm text-espresso-800/80">
            {language === 'ar'
              ? 'نستقبلكم طوال أيام الأسبوع لتقديم أفضل تجربة قهوة وتوست.'
              : 'Serving you fresh brews and artisan toasts every day of the week.'}
          </p>
        </div>

        {/* Live Status Pill & Notice */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-3 p-4 rounded-2xl bg-cream-100 border border-cream-300 mb-6">
          <div className="flex items-center gap-2.5">
            <div className={`w-3 h-3 rounded-full ${isOpenNow ? 'bg-emerald-500 animate-pulse' : 'bg-rose-500'}`} />
            <span className="font-bold text-xs sm:text-sm text-espresso-950">
              {isOpenNow 
                ? (language === 'ar' ? 'مفتوح الآن — أهلاً بكم!' : 'Open Now — Welcome!') 
                : (language === 'ar' ? 'مغلق حالياً' : 'Currently Closed')}
            </span>
          </div>

          <div className="flex items-center gap-1.5 text-xs text-caramel-700 font-medium">
            <AlertCircle className="w-4 h-4 shrink-0 text-caramel-600" />
            <span>
              {language === 'ar'
                ? 'مواعيد العمل مستخرجة من الدلائل العامة وتخضع لتأكيد المالك.'
                : 'Hours are based on public listings and subject to owner confirmation.'}
            </span>
          </div>
        </div>

        {/* Schedule Table */}
        <div className="bg-cream-100 rounded-2xl overflow-hidden border border-cream-300 shadow-sm divide-y divide-cream-200">
          {cafeConfig.workingHours.map((schedule, i) => {
            const dayName = language === 'ar' ? schedule.dayAr : schedule.dayEn;
            const hours = language === 'ar' ? schedule.hoursAr : schedule.hoursEn;
            const isWeekendSpecial = schedule.dayEn === 'Thursday' || schedule.dayEn === 'Friday';

            return (
              <div 
                key={i}
                className={`p-4 flex items-center justify-between gap-4 transition-colors hover:bg-cream-200/50 ${
                  isWeekendSpecial ? 'bg-caramel-500/5' : ''
                }`}
              >
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-cream-200 flex items-center justify-center text-caramel-600">
                    <CalendarCheck className="w-4 h-4" />
                  </div>
                  <span className="font-bold text-xs sm:text-sm text-espresso-950">
                    {dayName}
                  </span>
                </div>

                <div className="text-end">
                  <span className="font-semibold text-xs sm:text-sm text-espresso-800">
                    {hours}
                  </span>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
