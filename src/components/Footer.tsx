'use client';

import React from 'react';
import { useLanguage } from '@/context/LanguageContext';
import { cafeConfig } from '@/data/cafeConfig';
import { 
  Coffee, 
  MapPin, 
  Phone, 
  MessageCircle, 
  Instagram, 
  ArrowUp,
  Sparkles
} from 'lucide-react';

export default function Footer() {
  const { language } = useLanguage();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer id="contact" className="bg-espresso-950 text-cream-100 pt-16 pb-12 border-t border-espresso-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          
          {/* Col 1: Brand Info */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-espresso-800 to-espresso-900 border border-caramel-500/40 flex items-center justify-center">
                <Coffee className="w-5 h-5 text-caramel-400" />
              </div>
              <div className="flex flex-col">
                <span className="font-serif font-black text-lg tracking-wider text-cream-50 leading-tight">
                  ROAST N&apos; TOAST
                </span>
                <span className="text-[10px] tracking-[0.2em] uppercase text-caramel-400 font-semibold">
                  SPECIALTY COFFEE
                </span>
              </div>
            </div>

            <p className="text-xs text-cream-300/80 leading-relaxed font-light">
              {language === 'ar'
                ? 'كافيه القهوة المختصة والتوست المحمص الفاخر بالإسماعيلية (حي الشيخ زايد). نجمع بين أصالة التحميص، دقة الاستخلاص، والأجواء الدافئة.'
                : 'Specialty coffee and artisanal toasted delicacies in El Sheikh Zayed, Ismailia. Where great taste meets good vibes.'}
            </p>

            {/* Social Icons */}
            <div className="flex items-center gap-3 pt-2">
              <a
                href={cafeConfig.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-full bg-espresso-900 hover:bg-caramel-500 hover:text-white border border-espresso-800 flex items-center justify-center text-cream-200 transition-colors"
                aria-label="Instagram @roastntoast.official"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href="https://wa.me/201503001914"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-full bg-espresso-900 hover:bg-[#25D366] hover:text-white border border-espresso-800 flex items-center justify-center text-cream-200 transition-colors"
                aria-label="WhatsApp"
              >
                <MessageCircle className="w-4 h-4" />
              </a>
              <a
                href={cafeConfig.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-full bg-espresso-900 hover:bg-caramel-500 hover:text-white border border-espresso-800 flex items-center justify-center text-cream-200 transition-colors"
                aria-label="Google Maps"
              >
                <MapPin className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Col 2: Navigation Links */}
          <div>
            <h4 className="font-bold text-cream-100 text-xs tracking-wider uppercase mb-4 font-sans text-caramel-400">
              {language === 'ar' ? 'أقسام الموقع' : 'Navigation'}
            </h4>
            <ul className="space-y-2 text-xs text-cream-300/80">
              <li><a href="#home" className="hover:text-caramel-400 transition-colors">{language === 'ar' ? 'الرئيسية' : 'Home'}</a></li>
              <li><a href="#about" className="hover:text-caramel-400 transition-colors">{language === 'ar' ? 'من نحن' : 'About Us'}</a></li>
              <li><a href="#menu" className="hover:text-caramel-400 transition-colors">{language === 'ar' ? 'القائمة' : 'Menu'}</a></li>
              <li><a href="#gallery" className="hover:text-caramel-400 transition-colors">{language === 'ar' ? 'معرض الصور' : 'Gallery'}</a></li>
              <li><a href="#reservation" className="hover:text-caramel-400 transition-colors">{language === 'ar' ? 'طلب الحجز' : 'Reservation'}</a></li>
              <li><a href="#hours" className="hover:text-caramel-400 transition-colors">{language === 'ar' ? 'مواعيد العمل' : 'Hours'}</a></li>
            </ul>
          </div>

          {/* Col 3: Contact Info */}
          <div>
            <h4 className="font-bold text-cream-100 text-xs tracking-wider uppercase mb-4 font-sans text-caramel-400">
              {language === 'ar' ? 'التواصل والفرع' : 'Contact Us'}
            </h4>
            <ul className="space-y-2.5 text-xs text-cream-300/80">
              <li className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-caramel-400 shrink-0 mt-0.5" />
                <span>{language === 'ar' ? cafeConfig.addressAr : cafeConfig.addressEn}</span>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-caramel-400 shrink-0" />
                <a href={`tel:${cafeConfig.phone}`} dir="ltr" className="hover:text-caramel-400 transition-colors">
                  {cafeConfig.phone}
                </a>
              </li>
              <li className="flex items-center gap-2">
                <MessageCircle className="w-4 h-4 text-[#25D366] shrink-0" />
                <a href="https://wa.me/201503001914" target="_blank" rel="noopener noreferrer" dir="ltr" className="hover:text-caramel-400 transition-colors">
                  +201503001914
                </a>
              </li>
            </ul>
          </div>

          {/* Col 4: Pitch Demo Note */}
          <div className="p-4 rounded-2xl bg-espresso-900/60 border border-espresso-800 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-1.5 text-xs font-bold text-caramel-400 mb-2">
                <Sparkles className="w-3.5 h-3.5" />
                <span>{language === 'ar' ? 'نموذج عرض احترافي (Demo)' : 'Professional Demo Pitch'}</span>
              </div>
              <p className="text-[11px] text-cream-300/70 leading-relaxed mb-3">
                {language === 'ar'
                  ? 'تم إعداد وتطوير هذا الموقع خصيصاً كنموذج استعراضي فاخر لإدارة Roast N\' Toast Specialty Coffee لبدء التعاقد والتدشين الرسمي.'
                  : 'Custom designed as a premium demonstration prototype for Roast N\' Toast management for official deployment.'}
              </p>
            </div>
            <a
              href="#reservation"
              className="w-full py-2 rounded-full bg-caramel-500 hover:bg-caramel-600 text-white font-bold text-[11px] text-center shadow transition-colors block"
            >
              {language === 'ar' ? 'تجربة حجز طاولة' : 'Try Demo Booking'}
            </a>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-espresso-900 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-cream-300/60">
          <div>
            {language === 'ar'
              ? 'جميع الحقوق محفوظة © Roast N\' Toast Specialty Coffee — الإسماعيلية'
              : 'All Rights Reserved © Roast N\' Toast Specialty Coffee — Ismailia'}
          </div>

          <button
            onClick={scrollToTop}
            className="flex items-center gap-1 hover:text-caramel-400 transition-colors cursor-pointer"
          >
            <span>{language === 'ar' ? 'للأعلى' : 'Back to Top'}</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>

      </div>
    </footer>
  );
}
