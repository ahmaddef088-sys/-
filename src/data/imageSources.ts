export interface ImageSourceItem {
  id: string;
  name: string;
  path: string;
  originalSource: string;
  category: 'exterior' | 'interior' | 'drinks' | 'food' | 'gallery';
  isVerifiedReal: boolean;
  verificationNotes: string;
  requiresCommercialApproval: boolean;
  aspectRatio?: string;
  description: string;
}

/**
 * توثيق شامل للصور الفوتوغرافية الحقيقية المستخدمة في موقع Roast N' Toast Specialty Coffee
 * تنبيه قانوني ومهني: جميع الصور مأخوذة من التغطيات والتقييمات الموثقة للكافيه على Restaurant Guru
 * ويتطلب استخدامها تجارياً في الإطلاق الرسمي الحصول على موافقة صاحب الكافيه أو تصوير صور حصرية بدقة 4K.
 */
export const verifiedImageSources: ImageSourceItem[] = [
  {
    id: 'exterior-facade',
    name: 'واجهة وتصميم Roast N\' Toast الخارجي',
    path: '/images/cafe/exterior/facade-main.jpg',
    originalSource: 'https://img4.restaurantguru.com/r1b4-Roast-N-Toast-Specialty-Coffee-design.jpg',
    category: 'exterior',
    isVerifiedReal: true,
    verificationNotes: 'صورة الواجهة والتصميم المعماري المسجلة رسمياً على Restaurant Guru لفرع الإسماعيلية (الشيخ زايد).',
    requiresCommercialApproval: true,
    description: 'واجهة الكافيه وعلامته التجارية وإضاءته الدافئة.'
  },
  {
    id: 'interior-seating',
    name: 'الجلسات الداخلية والديكور الخشبي',
    path: '/images/cafe/interior/interior-1.jpg',
    originalSource: 'https://img02.restaurantguru.com/c862-Restaurant-Roast-N-Toast-Specialty-Coffee-interior.jpg',
    category: 'interior',
    isVerifiedReal: true,
    verificationNotes: 'توثيق فوتوغرافي حقيقي لصالة الجلوس الداخلية والطاولات الخشبية في كافيه Roast N\' Toast.',
    requiresCommercialApproval: true,
    description: 'صالة الجلوس المريحة مع الإضاءة الهادئة للعمل والدراسة.'
  },
  {
    id: 'interior-bar',
    name: 'بار الإسبريسو ومحطة التحضير',
    path: '/images/cafe/interior/interior-2.jpg',
    originalSource: 'https://img02.restaurantguru.com/cab5-Restaurant-Roast-N-Toast-Specialty-Coffee-design.jpg',
    category: 'interior',
    isVerifiedReal: true,
    verificationNotes: 'صورة بار تحضير القهوة المختصة وماكينة الإسبريسو داخل الفرع.',
    requiresCommercialApproval: true,
    description: 'محطة الباريستا المصممة بعناية لتقديم القهوة بأعلى معايير الجودة.'
  },
  {
    id: 'drinks-latte',
    name: 'فن اللاتيه والرسم على القهوة',
    path: '/images/cafe/drinks/hot-coffee.jpg',
    originalSource: 'https://img02.restaurantguru.com/c76b-Restaurant-Roast-N-Toast-Specialty-Coffee-coffee.jpg',
    category: 'drinks',
    isVerifiedReal: true,
    verificationNotes: 'صورة حقيقية لكوب قهوة لاتيه مع رسمة لاتيه آرت متقنة بكافيه Roast N\' Toast.',
    requiresCommercialApproval: true,
    description: 'فلات وايت / لاتيه ساخن برغوة مخملية.'
  },
  {
    id: 'drinks-v60',
    name: 'تقطير القهوة المختصة V60',
    path: '/images/cafe/drinks/specialty-v60.jpg',
    originalSource: 'https://img02.restaurantguru.com/c6aa-Roast-N-Toast-Specialty-Coffee-Ismailia-coffee.jpg',
    category: 'drinks',
    isVerifiedReal: true,
    verificationNotes: 'صورة موثقة صراحة باسم "Roast-N-Toast-Specialty-Coffee-Ismailia-coffee" لتحضير القهوة المقطرة.',
    requiresCommercialApproval: true,
    description: 'استخلاص يدوي دقيق V60 لحبوب البن المختص الإثيوبي والكولومبي.'
  },
  {
    id: 'drinks-iced',
    name: 'مشروب مثلج منعش خاص بالكافيه',
    path: '/images/cafe/drinks/iced-specialty.jpg',
    originalSource: 'https://img02.restaurantguru.com/c7ea-Restaurant-Roast-N-Toast-Specialty-Coffee-drink.jpg',
    category: 'drinks',
    isVerifiedReal: true,
    verificationNotes: 'صورة مشروب بارد صيفي مقدم داخل الكافيه.',
    requiresCommercialApproval: true,
    description: 'آيس كوفي منعش ومشروبات مميزة.'
  },
  {
    id: 'food-toast',
    name: 'ساندويتش التوست المحمص الخاص (Toast)',
    path: '/images/cafe/food/roast-toast-sandwich.jpg',
    originalSource: 'https://img02.restaurantguru.com/c442-Restaurant-Roast-N-Toast-Specialty-Coffee-food.jpg',
    category: 'food',
    isVerifiedReal: true,
    verificationNotes: 'صورة حقيقية لساندويتش التوست الذهبي الذي يمثل نصف هوية الكافيه (Toast).',
    requiresCommercialApproval: true,
    description: 'توست بريوش/ساوردو محمص طازج مع حشوات شهية.'
  },
  {
    id: 'food-meal',
    name: 'وجبة خفيفة ومقرمشة',
    path: '/images/cafe/food/toasted-meal.jpg',
    originalSource: 'https://img02.restaurantguru.com/cc38-Restaurant-Roast-N-Toast-Specialty-Coffee-meals.jpg',
    category: 'food',
    isVerifiedReal: true,
    verificationNotes: 'طبق برانش خفيف مسجل لـ Roast N\' Toast.',
    requiresCommercialApproval: true,
    description: 'ساندويتشات مقرمشة ووجبات خفيفة تناسب القهوة.'
  },
  {
    id: 'food-cheesecake',
    name: 'تشيز كيك سان سيباستيان',
    path: '/images/cafe/food/cheesecake.jpg',
    originalSource: 'https://img02.restaurantguru.com/c40b-Restaurant-Roast-N-Toast-Specialty-Coffee-cheesecake.jpg',
    category: 'food',
    isVerifiedReal: true,
    verificationNotes: 'صورة طبق تشيز كيك سان سيباستيان الفاخر الملتقط داخل الكافيه.',
    requiresCommercialApproval: true,
    description: 'تشيز كيك إسباني محروق بقوام ذائب.'
  },
  {
    id: 'food-tiramisu',
    name: 'تيراميسو الإسبريسو',
    path: '/images/cafe/food/tiramisu.jpg',
    originalSource: 'https://img02.restaurantguru.com/cf13-Restaurant-Roast-N-Toast-Specialty-Coffee-tiramisu.jpg',
    category: 'food',
    isVerifiedReal: true,
    verificationNotes: 'صورة طبق التيراميسو الكلاسيكي المحضر بإسبريسو الكافيه.',
    requiresCommercialApproval: true,
    description: 'حلوى التيراميسو الإيطالية الكلاسيكية.'
  }
];

