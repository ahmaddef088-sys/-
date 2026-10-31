'use client';

import React, { useState } from 'react';
import { useLanguage } from '@/context/LanguageContext';
import { Sparkles, X, CheckCircle, ExternalLink } from 'lucide-react';

export default function OwnerNoticeBanner() {
  const { language } = useLanguage();
  const [isVisible, setIsVisible] = useState(true);

  if (!isVisible) return null;

  return (
    <div className="bg-gradient-to-r from-espresso-900 via-caramel-600 to-espresso-900 text-cream-50 text-xs py-2 px-4 shadow-lg border-b border-caramel-400/30 relative z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between gap-3">
        <div className="flex items-center gap-2 font-medium">
          <Sparkles className="w-4 h-4 text-caramel-300 shrink-0" />
          <span>
            {language === 'ar' ? (
              <>
                <strong className="font-bold text-cream-100">نموذج تجريبي خاص (Demo Pitch):</strong> صُمم هذا الموقع خصيصاً لعرضه على إدارة <span className="underline decoration-caramel-300">Roast N&apos; Toast Specialty Coffee</span>. كافة البيانات والأسعار والصور جاهزة للاعتماد الرسمي.
              </>
            ) : (
              <>
                <strong className="font-bold text-cream-100">Demo Prototype:</strong> Custom designed for presentation to <span className="underline decoration-caramel-300">Roast N&apos; Toast Specialty Coffee</span> management. Ready for official launch.
              </>
            )}
          </span>
        </div>

        <button
          onClick={() => setIsVisible(false)}
          className="p-1 rounded-md hover:bg-espresso-950/40 text-cream-200 hover:text-white transition-colors cursor-pointer shrink-0"
          aria-label="Dismiss banner"
        >
          <X className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
}

