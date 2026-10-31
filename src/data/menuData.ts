import { MenuItem } from '@/types';

/**
 * قائمة طعام Roast N' Toast Specialty Coffee
 * تنويه مهم: نظرًا لأن القوائم الرسمية تتغير دوريًا ولم يتم اعتماد الأسعار النهائية من المالك،
 * تم تمييز هذه الأصناف بأنها نموذج عرض تفاعلي (Demo Item) لتسهيل مراجعتها واعتمادها من صاحب الكافيه.
 */
export const menuItems: MenuItem[] = [
  // ===================== HOT COFFEE =====================
  {
    id: 'hot-v60',
    nameAr: 'قهوة مختصة مقطرة V60',
    nameEn: 'V60 Pour Over Specialty Coffee',
    descriptionAr: 'تحضير يدوي دقيق بأفخر حبوب البن المختص الإثيوبي / الكولومبي ذو الإيحاءات الزهرية والفاكهية المنعشة.',
    descriptionEn: 'Precision pour-over crafted with premium single-origin beans featuring vibrant floral and fruity notes.',
    price: 85,
    category: 'hot_coffee',
    image: '/images/cafe/drinks/specialty-v60.jpg',
    isSpecialty: true,
    isPopular: true,
    isDemoPrice: true,
    tags: [
      { ar: 'بن مختص أحادي المصدر', en: 'Single Origin' },
      { ar: 'الأكثر طلباً', en: 'Best Seller' }
    ]
  },
  {
    id: 'hot-flat-white',
    nameAr: 'فلات وايت Roast N\' Toast',
    nameEn: 'Signature Flat White',
    descriptionAr: 'دبل ريستريتو غني مع حليب مبخر بقوام مخملي حريري ورسمة لاتيه متقنة.',
    descriptionEn: 'Double ristretto espresso balanced with velvety microfoam texture and precise latte art.',
    price: 75,
    category: 'hot_coffee',
    image: '/images/cafe/drinks/hot-coffee.jpg',
    isSpecialty: true,
    isPopular: true,
    isDemoPrice: true,
    tags: [
      { ar: 'مخملي غني', en: 'Silky Texture' }
    ]
  },
  {
    id: 'hot-spanish-latte',
    nameAr: 'سبانش لاتيه ساخن',
    nameEn: 'Hot Spanish Latte',
    descriptionAr: 'مزيج الإسبريسو الكلاسيكي المتوازن مع الحليب المكثف المحلى بنكهة دافئة وناعمة.',
    descriptionEn: 'Classic espresso blend swirled with smooth sweetened condensed milk for a comforting cup.',
    price: 80,
    category: 'hot_coffee',
    image: '/images/cafe/drinks/hot-coffee.jpg',
    isPopular: true,
    isDemoPrice: true,
    tags: [
      { ar: 'مميز ومحبوب', en: 'Guest Favorite' }
    ]
  },
  {
    id: 'hot-cortado',
    nameAr: 'كورتادو',
    nameEn: 'Cortado',
    descriptionAr: 'تناغم متساوٍ بنسبة 1:1 بين الإسبريسو المركز والحليب المبخر الخفيف لنكهة قهوة قوية وواضحة.',
    descriptionEn: 'A balanced 1:1 cut of bold espresso and silky steamed milk that highlights coffee intensity.',
    price: 70,
    category: 'hot_coffee',
    image: '/images/cafe/drinks/hot-coffee.jpg',
    isDemoPrice: true,
    tags: [
      { ar: 'قهوة قوية', en: 'Bold' }
    ]
  },
  {
    id: 'hot-cappuccino',
    nameAr: 'كابتشينو كلاسيكي',
    nameEn: 'Classic Cappuccino',
    descriptionAr: 'إسبريسو إيطالي أصيل بطبقة رغوة حليب غنية ومرشوشة ببودرة الكاكاو الفاخر.',
    descriptionEn: 'Rich authentic espresso topped with a dense layer of microfoam and subtle cocoa dusting.',
    price: 70,
    category: 'hot_coffee',
    image: '/images/cafe/drinks/hot-coffee.jpg',
    isDemoPrice: true,
  },
  {
    id: 'hot-espresso',
    nameAr: 'إسبريسو سينجل / دبل',
    nameEn: 'Espresso (Single / Double)',
    descriptionAr: 'شوت إسبريسو خالص مستخلص بأحدث ماكينات القهوة مع كريما ذهبية كثيفة وإيحاءات الشوكولاتة الداكنة.',
    descriptionEn: 'Pure specialty espresso pulled with thick golden crema and dark cocoa tasting notes.',
    price: 55,
    category: 'hot_coffee',
    image: '/images/cafe/drinks/hot-coffee.jpg',
    isDemoPrice: true,
  },

  // ===================== COLD COFFEE =====================
  {
    id: 'cold-spanish-latte',
    nameAr: 'آيس سبانش لاتيه',
    nameEn: 'Iced Spanish Latte',
    descriptionAr: 'المشروب الأكثر انتعاشاً بخلطة الإسبريسو الخاصة مع الحليب المكثف ومكعبات الثلج النقية.',
    descriptionEn: 'Our most sought-after iced drink featuring signature espresso over chilled sweet milk and crystal ice.',
    price: 85,
    category: 'cold_coffee',
    image: '/images/cafe/drinks/iced-specialty.jpg',
    isSpecialty: true,
    isPopular: true,
    isDemoPrice: true,
    tags: [
      { ar: 'الأكثر مبيعاً صيفاً', en: 'Top Summer Seller' }
    ]
  },
  {
    id: 'cold-v60',
    nameAr: 'آيس V60 مقطرة',
    nameEn: 'Iced V60 Drip',
    descriptionAr: 'استخلاص بطيء على حبوب مختصة وتبريد فوري على الثلج لإبراز حمضية الفواكه الطبيعية والنقاء.',
    descriptionEn: 'Slow filtered single-origin coffee flash-chilled to amplify natural fruit acidity and clarity.',
    price: 90,
    category: 'cold_coffee',
    image: '/images/cafe/drinks/specialty-v60.jpg',
    isSpecialty: true,
    isDemoPrice: true,
    tags: [
      { ar: 'نقاء ونكهة فاكهية', en: 'Clean & Fruity' }
    ]
  },
  {
    id: 'cold-salted-caramel',
    nameAr: 'آيس سولتد كراميل لاتيه',
    nameEn: 'Iced Salted Caramel Latte',
    descriptionAr: 'كراميل مملح محضر يدويًا مع الإسبريسو والحليب البارد ولمسة من رقائق ملح البحر.',
    descriptionEn: 'Handmade salted caramel syrup blended with fresh espresso, milk, and sea salt flakes.',
    price: 90,
    category: 'cold_coffee',
    image: '/images/cafe/drinks/iced-specialty.jpg',
    isDemoPrice: true,
  },
  {
    id: 'cold-brew',
    nameAr: 'كولد برو منقوع 16 ساعة',
    nameEn: '16-Hour Cold Brew',
    descriptionAr: 'قهوة منقوعة بالماء البارد لمدة 16 ساعة لتجربة قهوة ناعمة منخفضة الحموضة وذات تركيز عميق.',
    descriptionEn: 'Slow cold-water steeped for 16 hours delivering an ultra-smooth, low-acidity coffee experience.',
    price: 85,
    category: 'cold_coffee',
    image: '/images/cafe/drinks/iced-specialty.jpg',
    isSpecialty: true,
    isDemoPrice: true,
  },

  // ===================== SPECIALTY DRINKS =====================
  {
    id: 'spec-matcha',
    nameAr: 'ماتشا لاتيه ياباني احتفالي',
    nameEn: 'Ceremonial Japanese Matcha Latte',
    descriptionAr: 'ماتشا عضوية مستوردة من كيوتو مخفوقة يدوياً مع حليب الشوفان أو الحليب الطازج.',
    descriptionEn: 'Authentic Kyoto ceremonial matcha whisked with your choice of oat milk or fresh dairy.',
    price: 95,
    category: 'specialty',
    image: '/images/cafe/drinks/iced-specialty.jpg',
    isSpecialty: true,
    isDemoPrice: true,
    tags: [
      { ar: 'ماتشا عضوية', en: 'Organic Matcha' }
    ]
  },
  {
    id: 'spec-passion-mojito',
    nameAr: 'موهيتو باشن فروت المنعش',
    nameEn: 'Passion Fruit Sparkling Refresher',
    descriptionAr: 'بيوريه باشن فروت طبيعي مع أوراق النعناع الطازج والليمون والصودا الفوارة المنعشة.',
    descriptionEn: 'Fresh passion fruit puree infused with garden mint, fresh lime wedges, and sparkling soda.',
    price: 75,
    category: 'specialty',
    image: '/images/cafe/drinks/iced-specialty.jpg',
    isDemoPrice: true,
  },

  // ===================== TEA =====================
  {
    id: 'tea-earl-grey',
    nameAr: 'شاي إيرل جراي ملكي فاخر',
    nameEn: 'Royal Specialty Earl Grey',
    descriptionAr: 'أوراق شاي أسود سيلاني منتقاة معززة بزيت البرغموت الطبيعي العطري.',
    descriptionEn: 'Carefully selected whole leaf Ceylon black tea scented with cold-pressed natural bergamot oil.',
    price: 50,
    category: 'tea',
    image: '/images/cafe/drinks/hot-coffee.jpg',
    isDemoPrice: true,
  },
  {
    id: 'tea-green-jasmine',
    nameAr: 'شاي أخضر بالياسمين العطري',
    nameEn: 'Jasmine Green Blossom',
    descriptionAr: 'شاي أخضر منتقى برائحة زهور الياسمين المنعشة والمهدئة للأعصاب.',
    descriptionEn: 'Delicate green tea leaves gently scented with sweet fragrant night-blooming jasmine flowers.',
    price: 50,
    category: 'tea',
    image: '/images/cafe/drinks/hot-coffee.jpg',
    isDemoPrice: true,
  },

  // ===================== FOOD / TOASTS =====================
  {
    id: 'food-roast-beef',
    nameAr: 'توست روست بيف بالجبن الذائب',
    nameEn: 'Signature Roast Beef & Melted Cheddar Toast',
    descriptionAr: 'شرائح روست بيف فاخرة مع جبن شيدر مسال وصوص الماسترد الخاص في خبز البريوش المحمص الذهبي.',
    descriptionEn: 'Premium sliced roast beef topped with aged melted cheddar and house herb mustard on toasted brioche.',
    price: 110,
    category: 'food',
    image: '/images/cafe/food/roast-toast-sandwich.jpg',
    isSpecialty: true,
    isPopular: true,
    isDemoPrice: true,
    tags: [
      { ar: 'طبق Roast N\' Toast الخاص', en: 'Signature Toast' },
      { ar: 'طازج ومحمص', en: 'Freshly Toasted' }
    ]
  },
  {
    id: 'food-turkey-mozzarella',
    nameAr: 'توست تركي مدخن وموزاريلا',
    nameEn: 'Smoked Turkey & Creamy Mozzarella Toast',
    descriptionAr: 'تركي مدخن مع طبقات موزاريلا ذايبة وصوص البيستو الإيطالي في خبز الساوردو المقرمش.',
    descriptionEn: 'Smoked turkey breast layers with stretchy melted mozzarella and basil pesto in crispy sourdough.',
    price: 95,
    category: 'food',
    image: '/images/cafe/food/toasted-meal.jpg',
    isDemoPrice: true,
    tags: [
      { ar: 'خفيف ولذيذ', en: 'Light & Crisp' }
    ]
  },
  {
    id: 'food-halloumi-pesto',
    nameAr: 'توست حلومي مشوي بالبيستو',
    nameEn: 'Grilled Halloumi & Sun-dried Tomato Toast',
    descriptionAr: 'جبن حلومي مشوي ذهبي مع طماطم مجففة وأوراق الجرجير وصلصة البيستو العطرية.',
    descriptionEn: 'Golden grilled halloumi cheese with sun-dried tomatoes, wild baby arugula, and basil pesto.',
    price: 90,
    category: 'food',
    image: '/images/cafe/food/roast-toast-sandwich.jpg',
    isDemoPrice: true,
  },

  // ===================== DESSERTS =====================
  {
    id: 'dessert-cheesecake',
    nameAr: 'تشيز كيك سان سيباستيان الفاخر',
    nameEn: 'San Sebastian Burnt Cheesecake',
    descriptionAr: 'التشيز كيك الإسباني المحروق بقوامه الكريمي الذائب، يقدم مع صوص الشوكولاتة البلجيكية الدافئة.',
    descriptionEn: 'Authentic Spanish burnt cheesecake with molten creamy center, served with warm Belgian chocolate ganache.',
    price: 95,
    category: 'desserts',
    image: '/images/cafe/food/cheesecake.jpg',
    isSpecialty: true,
    isPopular: true,
    isDemoPrice: true,
    tags: [
      { ar: 'صنع بحرفية', en: 'Artisanal' },
      { ar: 'الأكثر مبيعاً', en: 'Best Seller' }
    ]
  },
  {
    id: 'dessert-tiramisu',
    nameAr: 'تيراميسو Roast N\' Toast الكلاسيكي',
    nameEn: 'Classic Espresso Tiramisu',
    descriptionAr: 'بسكويت ليدي فينجر مشبع بإسبريسو Roast N\' Toast الخاص مع كريمة الماسكاربوني المخملية ورشة كاكاو داكن.',
    descriptionEn: 'Savoiardi ladyfingers infused with our house espresso, layered with rich mascarpone and dark cocoa.',
    price: 85,
    category: 'desserts',
    image: '/images/cafe/food/tiramisu.jpg',
    isPopular: true,
    isDemoPrice: true,
    tags: [
      { ar: 'بإسبريسو الكافيه الخاص', en: 'Made with House Espresso' }
    ]
  }
];

