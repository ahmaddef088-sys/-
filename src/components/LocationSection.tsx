'use client';

import React from 'react';
import { useLanguage } from '@/context/LanguageContext';
import { cafeConfig } from '@/data/cafeConfig';
import { 
  MapPin, 
  Phone, 
  MessageCircle, 
  Navigation, 
  Clock, 
  ExternalLink 
} from 'lucide-react';

export default function LocationSection() {
  const { language } = useLanguage();

  return (
    <section id="location" className="py-20 lg:py-24 bg-cream-100 relative border-t border-cream-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-xs font-bold tracking-[0.2em] uppercase text-caramel-600 block mb-2 font-sans">
            {language === 'ar' ? 'الموقع والتواصل' : 'LOCATION & CONTACT'}
          </span>
          <h2 className="text-3xl sm:text-4xl font-serif font-black text-espresso-950 tracking-tight mb-3">
            {language === 'ar' ? 'زيارتكم تسعدنا في الإسماعيلية' : 'Visit Us in Ismailia'}
          </h2>
          <p className="text-sm text-espresso-800/80">
            {language === 'ar'
              ? 'موقعنا في قلب حي الشيخ زايد (القسم الثالث)، الإسماعيلية.'
              : 'Conveniently located in the heart of El Sheikh Zayed, 3rd District, Ismailia.'}
          </p>
        </div>

        {/* Content Grid: Map + Contact Info Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Info Details (5 cols) */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-4">
            
            {/* Address Card */}
            <div className="p-6 rounded-2xl bg-cream-50 border border-cream-200/90 shadow-sm">
              <div className="w-10 h-10 rounded-xl bg-cream-200/80 border border-cream-300 flex items-center justify-center mb-3 text-caramel-600">
                <MapPin className="w-5 h-5" />
              </div>
              <h3 className="font-bold text-espresso-950 text-base mb-1">
                {language === 'ar' ? 'العنوان' : 'Address'}
              </h3>
              <p className="text-sm text-espresso-800/80 leading-relaxed mb-2">
                {language === 'ar' ? cafeConfig.addressAr : cafeConfig.addressEn}
              </p>
              <span className="inline-block px-2.5 py-1 rounded-md bg-cream-200 text-xs font-mono text-espresso-800">
                Plus Code: {cafeConfig.plusCode}
              </span>
            </div>

            {/* Direct Phone & WhatsApp Card */}
            <div className="p-6 rounded-2xl bg-cream-50 border border-cream-200/90 shadow-sm">
              <div className="flex items-center justify-between gap-4 mb-3">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-cream-200/80 border border-cream-300 flex items-center justify-center text-caramel-600">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-bold text-espresso-950 text-xs">
                      {language === 'ar' ? 'الهاتف المباشر' : 'Direct Line'}
                    </h4>
                    <a href={`tel:${cafeConfig.phone}`} dir="ltr" className="text-sm font-bold text-espresso-900 hover:text-caramel-600 transition-colors">
                      {cafeConfig.phone}
                    </a>
                  </div>
                </div>
                <a
                  href={`tel:${cafeConfig.phone}`}
                  className="px-3 py-1.5 rounded-full border border-espresso-900/20 text-xs font-bold text-espresso-900 hover:bg-cream-200 transition-colors"
                >
                  {language === 'ar' ? 'اتصال' : 'Call'}
                </a>
              </div>

              <div className="flex items-center justify-between gap-4 pt-3 border-t border-cream-200/80">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-[#25D366]/10 border border-[#25D366]/20 flex items-center justify-center text-[#25D366]">
                    <MessageCircle className="w-5 h-5 fill-[#25D366]" />
                  </div>
                  <div>
                    <h4 className="font-bold text-espresso-950 text-xs">
                      {language === 'ar' ? 'خدمة واتساب' : 'WhatsApp'}
                    </h4>
                    <span dir="ltr" className="text-xs font-mono text-espresso-800">
                      +201503001914
                    </span>
                  </div>
                </div>
                <a
                  href="https://wa.me/201503001914"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-3 py-1.5 rounded-full bg-[#25D366] text-white text-xs font-bold hover:bg-[#20ba5a] transition-colors"
                >
                  {language === 'ar' ? 'محادثة' : 'Chat'}
                </a>
              </div>
            </div>

            {/* Directions Action */}
            <a
              href={cafeConfig.googleMapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 w-full py-3.5 rounded-full bg-caramel-500 hover:bg-caramel-600 text-white font-bold text-sm shadow-md transition-all cursor-pointer"
            >
              <Navigation className="w-4 h-4" />
              <span>{language === 'ar' ? 'الحصول على الاتجاهات (Google Maps)' : 'Open in Google Maps'}</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>

          </div>

          {/* Interactive Google Map Embed (7 cols) */}
          <div className="lg:col-span-7 h-[360px] lg:h-auto rounded-3xl overflow-hidden border-4 border-white shadow-xl relative bg-cream-200">
            <iframe
              title="Roast N' Toast Specialty Coffee Ismailia Map"
              src="https://maps.google.com/maps?q=30.62032860,32.28540520&t=&z=16&ie=UTF8&iwloc=&output=embed"
              className="w-full h-full border-0"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
            <div className="absolute top-4 start-4 px-3 py-1 rounded-full bg-white/90 backdrop-blur-md shadow text-xs font-bold text-espresso-900 border border-cream-200 flex items-center gap-1.5">
              <MapPin className="w-3.5 h-3.5 text-caramel-600" />
              <span>Roast N&apos; Toast — El Sheikh Zayed</span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
