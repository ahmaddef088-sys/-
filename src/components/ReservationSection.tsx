'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { useLanguage } from '@/context/LanguageContext';
import { 
  Calendar, 
  Clock, 
  Users, 
  User, 
  Phone, 
  FileText, 
  MessageCircle, 
  AlertTriangle,
  CheckCircle2
} from 'lucide-react';

export default function ReservationSection() {
  const { t, language } = useLanguage();

  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    guests: 'شخصان',
    date: '',
    time: '',
    notes: '',
  });

  const [error, setError] = useState<string | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
    if (error) setError(null);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.fullName.trim() || !formData.phone.trim() || !formData.date || !formData.time) {
      setError(language === 'ar' ? 'يرجى تعبئة جميع الحقول المطلوبة.' : 'Please fill in all required fields.');
      return;
    }

    const notesValue = formData.notes.trim() ? formData.notes.trim() : 'لا يوجد';
    
    // Exact requested message format
    const message = `مرحباً Roast N' Toast،
أرغب في حجز طاولة.

الاسم: ${formData.fullName.trim()}
رقم الهاتف: ${formData.phone.trim()}
عدد الأشخاص: ${formData.guests}
التاريخ: ${formData.date}
الوقت: ${formData.time}
ملاحظات: ${notesValue}

أرجو تأكيد الحجز.`;

    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/201503001914?text=${encodedMessage}`;

    window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
  };

  return (
    <section id="reservation" className="py-20 lg:py-24 bg-cream-50 relative border-t border-cream-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-xs font-bold tracking-[0.2em] uppercase text-caramel-600 block mb-2 font-sans">
            {language === 'ar' ? 'طلب الحجز' : 'RESERVATION'}
          </span>
          <h2 className="text-3xl sm:text-4xl font-serif font-black text-espresso-950 tracking-tight mb-3">
            {language === 'ar' ? 'احجز طاولتك المفضلة' : 'Book Your Table'}
          </h2>
          <p className="text-sm text-espresso-800/80">
            {language === 'ar'
              ? 'أرسل تفاصيل حجزك مباشرة لفريق العمل عبر واتساب للتأكيد الفوري.'
              : 'Dispatch your booking request directly to our team on WhatsApp for confirmation.'}
          </p>
        </div>

        {/* Split Grid: Real Photo on one side + Form on the other side */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Real Photo Side (5 cols) */}
          <div className="lg:col-span-5 relative min-h-[350px] lg:min-h-full rounded-3xl overflow-hidden shadow-xl border-4 border-white bg-espresso-950">
            <Image
              src="/images/cafe/interior/interior-2.jpg"
              alt="Roast N' Toast Bar & Seating Ismailia"
              fill
              sizes="(max-width: 1024px) 100vw, 40vw"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-espresso-950/80 via-transparent to-transparent flex flex-col justify-end p-6 text-white">
              <span className="text-xs font-bold tracking-wider uppercase text-caramel-300 mb-1">
                Roast N&apos; Toast Ismailia
              </span>
              <h3 className="font-serif text-xl font-bold">
                {language === 'ar' ? 'أجواء صُممت لتناسب لحظاتك' : 'Designed for memorable moments'}
              </h3>
            </div>
          </div>

          {/* Form Side (7 cols) */}
          <div className="lg:col-span-7 bg-cream-100 rounded-3xl p-6 sm:p-8 border border-cream-200/90 shadow-sm flex flex-col justify-between">
            
            {/* Disclaimer */}
            <div className="mb-6 p-3.5 rounded-2xl bg-cream-200/60 border border-caramel-500/30 text-espresso-900 text-xs flex items-start gap-2.5">
              <AlertTriangle className="w-4 h-4 text-caramel-600 shrink-0 mt-0.5" />
              <span>
                {language === 'ar'
                  ? 'تنبيه: هذا الإجراء يقوم بإرسال طلب حجز إلى موظفي Roast N\' Toast عبر واتساب. يتم التأكيد يدوياً من قِبل الفريق بعد مراجعة التوافر.'
                  : 'Notice: This form prepares a reservation inquiry sent via WhatsApp. Staff manually confirms availability.'}
              </span>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                
                {/* Name */}
                <div>
                  <label className="block text-xs font-bold text-espresso-900 mb-1.5 flex items-center gap-1.5">
                    <User className="w-3.5 h-3.5 text-caramel-600" />
                    <span>{language === 'ar' ? 'الاسم الكامل' : 'Full Name'} *</span>
                  </label>
                  <input
                    type="text"
                    name="fullName"
                    required
                    value={formData.fullName}
                    onChange={handleChange}
                    placeholder={language === 'ar' ? 'مثال: أحمد محمد' : 'e.g. John Doe'}
                    className="w-full px-4 py-2.5 rounded-xl bg-white border border-cream-300 focus:border-caramel-500 focus:outline-none text-espresso-900 text-xs sm:text-sm"
                  />
                </div>

                {/* Phone */}
                <div>
                  <label className="block text-xs font-bold text-espresso-900 mb-1.5 flex items-center gap-1.5">
                    <Phone className="w-3.5 h-3.5 text-caramel-600" />
                    <span>{language === 'ar' ? 'رقم الهاتف' : 'Phone Number'} *</span>
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    required
                    dir="ltr"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="010xxxxxxxx"
                    className="w-full px-4 py-2.5 rounded-xl bg-white border border-cream-300 focus:border-caramel-500 focus:outline-none text-espresso-900 text-xs sm:text-sm text-start"
                  />
                </div>

                {/* Guests */}
                <div>
                  <label className="block text-xs font-bold text-espresso-900 mb-1.5 flex items-center gap-1.5">
                    <Users className="w-3.5 h-3.5 text-caramel-600" />
                    <span>{language === 'ar' ? 'عدد الأشخاص' : 'Guests'} *</span>
                  </label>
                  <select
                    name="guests"
                    value={formData.guests}
                    onChange={handleChange}
                    className="w-full px-4 py-2.5 rounded-xl bg-white border border-cream-300 focus:border-caramel-500 focus:outline-none text-espresso-900 text-xs sm:text-sm cursor-pointer"
                  >
                    <option value="شخص واحد">شخص واحد (1 Person)</option>
                    <option value="شخصان">شخصان (2 People)</option>
                    <option value="3 - 4 أشخاص">3 - 4 أشخاص (3 - 4 People)</option>
                    <option value="5 - 6 أشخاص">5 - 6 أشخاص (5 - 6 People)</option>
                    <option value="7 أشخاص فأكثر">7 أشخاص فأكثر (Large Group)</option>
                  </select>
                </div>

                {/* Date */}
                <div>
                  <label className="block text-xs font-bold text-espresso-900 mb-1.5 flex items-center gap-1.5">
                    <Calendar className="w-3.5 h-3.5 text-caramel-600" />
                    <span>{language === 'ar' ? 'التاريخ' : 'Date'} *</span>
                  </label>
                  <input
                    type="date"
                    name="date"
                    required
                    value={formData.date}
                    onChange={handleChange}
                    className="w-full px-4 py-2.5 rounded-xl bg-white border border-cream-300 focus:border-caramel-500 focus:outline-none text-espresso-900 text-xs sm:text-sm"
                  />
                </div>

                {/* Time */}
                <div className="sm:col-span-2">
                  <label className="block text-xs font-bold text-espresso-900 mb-1.5 flex items-center gap-1.5">
                    <Clock className="w-3.5 h-3.5 text-caramel-600" />
                    <span>{language === 'ar' ? 'الوقت المفضل' : 'Preferred Time'} *</span>
                  </label>
                  <input
                    type="time"
                    name="time"
                    required
                    value={formData.time}
                    onChange={handleChange}
                    className="w-full px-4 py-2.5 rounded-xl bg-white border border-cream-300 focus:border-caramel-500 focus:outline-none text-espresso-900 text-xs sm:text-sm"
                  />
                </div>

                {/* Notes */}
                <div className="sm:col-span-2">
                  <label className="block text-xs font-bold text-espresso-900 mb-1.5 flex items-center gap-1.5">
                    <FileText className="w-3.5 h-3.5 text-caramel-600" />
                    <span>{language === 'ar' ? 'ملاحظات إضافية (اختياري)' : 'Special Requests (Optional)'}</span>
                  </label>
                  <textarea
                    name="notes"
                    rows={2}
                    value={formData.notes}
                    onChange={handleChange}
                    placeholder={language === 'ar' ? 'طاولة هادئة، جلسة عمل...' : 'Quiet booth, business meeting...'}
                    className="w-full px-4 py-2 rounded-xl bg-white border border-cream-300 focus:border-caramel-500 focus:outline-none text-espresso-900 text-xs sm:text-sm resize-none"
                  />
                </div>

              </div>

              {error && (
                <div className="text-xs text-rose-600 font-bold">
                  {error}
                </div>
              )}

              {/* Submit CTA */}
              <button
                type="submit"
                className="w-full flex items-center justify-center gap-2 py-3.5 rounded-full bg-espresso-900 hover:bg-espresso-950 text-white font-bold text-sm shadow-md transition-all cursor-pointer mt-2"
              >
                <MessageCircle className="w-4 h-4 text-[#25D366] fill-[#25D366]" />
                <span>{language === 'ar' ? 'إرسال طلب الحجز عبر واتساب' : 'Send Booking via WhatsApp'}</span>
              </button>

            </form>

          </div>

        </div>

      </div>
    </section>
  );
}
