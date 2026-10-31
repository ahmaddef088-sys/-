'use client';

import React from 'react';
import { useLanguage } from '@/context/LanguageContext';
import { MessageCircle, MapPin, Clock } from 'lucide-react';

export default function FloatingWidgets() {
  const { language } = useLanguage();

  return (
    <>
      {/* Floating WhatsApp Button on Bottom Left (Matching Reference Image) */}
      <div className="fixed bottom-6 start-6 z-40">
        <a
          href="https://wa.me/201503001914"
          target="_blank"
          rel="noopener noreferrer"
          className="w-14 h-14 rounded-full bg-[#25D366] hover:bg-[#20ba5a] text-white flex items-center justify-center shadow-2xl hover:scale-110 transition-all cursor-pointer border-2 border-white"
          aria-label="Chat on WhatsApp"
        >
          <MessageCircle className="w-8 h-8 fill-white text-white" />
        </a>
      </div>

      {/* Floating Quick Action Pill on Right Edge (Matching Reference Image) */}
      <div className="fixed end-0 top-2/3 -translate-y-1/2 z-40 hidden md:flex flex-col bg-cream-50/95 backdrop-blur-md border border-cream-300 shadow-xl rounded-s-2xl overflow-hidden py-1">
        <a
          href="#location"
          className="px-3 py-2 flex items-center gap-2 text-xs font-bold text-espresso-900 hover:bg-cream-200/60 transition-colors"
          title={language === 'ar' ? 'موقعنا' : 'Find Us'}
        >
          <MapPin className="w-3.5 h-3.5 text-caramel-600" />
          <span className="text-[11px]">{language === 'ar' ? 'موقعنا' : 'Find Us'}</span>
        </a>
        <div className="h-px bg-cream-300 w-full" />
        <a
          href="#hours"
          className="px-3 py-2 flex items-center gap-2 text-xs font-bold text-espresso-900 hover:bg-cream-200/60 transition-colors"
          title={language === 'ar' ? 'مواعيد العمل' : 'Open Hours'}
        >
          <Clock className="w-3.5 h-3.5 text-caramel-600" />
          <span className="text-[11px]">{language === 'ar' ? 'المواعيد' : 'Open Hours'}</span>
        </a>
      </div>
    </>
  );
}

