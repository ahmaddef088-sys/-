import { CafeConfig } from '@/types';

/**
 * إعدادات وبيانات كافيه Roast N' Toast Specialty Coffee
 * تم استخراج هذه البيانات والتحقق منها من مصادر Google Maps وRestaurantGuru وLinktree
 * مواعيد العمل مدرجة حسب البيانات العامة وتتطلب المراجعة النهائية من المالك.
 */
export const cafeConfig: CafeConfig = {
  name: "Roast N' Toast Specialty Coffee",
  taglineAr: "تجربة القهوة المختصة الفاخرة والساندويتشات المحمصة في قلب الإسماعيلية",
  taglineEn: "Specialty Coffee Craftsmanship & Freshly Toasted Delights in Ismailia",
  
  // الموقع الفعلي
  addressAr: "حي الشيخ زايد، القسم الثالث، الإسماعيلية، مصر",
  addressEn: "El Sheikh Zayed, 3rd District, Ismailia, Egypt",
  plusCode: "J7CP+579 Ismailia",
  
  // الاتصال والواتساب
  phone: "01503001914",
  whatsapp: "+201503001914",
  
  // الخريطة والموقع الجغرافي
  googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=Roast+N%27+Toast+Specialty+Coffee+Ismailia",
  coordinates: {
    lat: 30.6203286,
    lng: 32.2854052,
  },

  // السوشيال ميديا
  instagram: "https://www.instagram.com/roastntoast.official",
  tiktok: "https://www.tiktok.com/@roastntoast.official",

  // التقييمات العامة
  rating: 4.8,
  reviewsCount: 204,
  googleRating: 4.6,

  // مواعيد العمل (مستخرجة من RestaurantGuru / Schema.org - غير رسمية وتحتاج لتأكيد من المالك)
  workingHours: [
    {
      dayAr: "السبت",
      dayEn: "Saturday",
      hoursAr: "07:00 ص - 01:00 ص (منتصف الليل)",
      hoursEn: "07:00 AM - 01:00 AM",
      isOpen: true,
      openTime24: 7,
      closeTime24: 25,
    },
    {
      dayAr: "الأحد",
      dayEn: "Sunday",
      hoursAr: "07:00 ص - 01:00 ص (منتصف الليل)",
      hoursEn: "07:00 AM - 01:00 AM",
      isOpen: true,
      openTime24: 7,
      closeTime24: 25,
    },
    {
      dayAr: "الإثنين",
      dayEn: "Monday",
      hoursAr: "07:00 ص - 01:00 ص (منتصف الليل)",
      hoursEn: "07:00 AM - 01:00 AM",
      isOpen: true,
      openTime24: 7,
      closeTime24: 25,
    },
    {
      dayAr: "الثلاثاء",
      dayEn: "Tuesday",
      hoursAr: "07:00 ص - 01:00 ص (منتصف الليل)",
      hoursEn: "07:00 AM - 01:00 AM",
      isOpen: true,
      openTime24: 7,
      closeTime24: 25,
    },
    {
      dayAr: "الأربعاء",
      dayEn: "Wednesday",
      hoursAr: "07:00 ص - 01:00 ص (منتصف الليل)",
      hoursEn: "07:00 AM - 01:00 AM",
      isOpen: true,
      openTime24: 7,
      closeTime24: 25,
    },
    {
      dayAr: "الخميس",
      dayEn: "Thursday",
      hoursAr: "07:00 ص - 03:00 ص (ساعات ممتدة)",
      hoursEn: "07:00 AM - 03:00 AM (Extended Hours)",
      isOpen: true,
      openTime24: 7,
      closeTime24: 27,
    },
    {
      dayAr: "الجمعة",
      dayEn: "Friday",
      hoursAr: "07:00 ص - 03:00 ص (ساعات ممتدة)",
      hoursEn: "07:00 AM - 03:00 AM (Extended Hours)",
      isOpen: true,
      openTime24: 7,
      closeTime24: 27,
    },
  ],

  // ملاحظة واضحة للمالك والزوار
  hoursNoteAr: "ملاحظة: مواعيد العمل مستخرجة من الدلائل العامة وتخضع لتأكيد إدارة Roast N' Toast.",
  hoursNoteEn: "Note: Operating hours are sourced from public directories and subject to confirmation by Roast N' Toast management.",
};

