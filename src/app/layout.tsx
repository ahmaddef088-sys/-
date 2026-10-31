import type { Metadata } from 'next';
import './globals.css';
import { LanguageProvider } from '@/context/LanguageContext';
import { cafeConfig } from '@/data/cafeConfig';

export const metadata: Metadata = {
  metadataBase: new URL('https://roast-n-toast-ismailia.com'),
  title: "Roast N' Toast Specialty Coffee | Ismailia",
  description: "الوجهة الأولى للقهوة المختصة والتوست المحمص الفاخر في الشيخ زايد، الإسماعيلية. استمتع بأجود محاصيل البن والتحضير اليدوي والأجواء العصرية.",
  keywords: [
    "Roast N Toast",
    "قهوة مختصة اسماعيلية",
    "كافيهات الاسماعيلية",
    "Specialty Coffee Ismailia",
    "V60 Ismailia",
    "الشيخ زايد اسماعيلية",
    "كافيهات الشيخ زايد",
    "أفضل قهوة في الإسماعيلية"
  ],
  authors: [{ name: "Roast N' Toast" }],
  openGraph: {
    title: "Roast N' Toast Specialty Coffee | كافيه ومحمصة متخصصة في الإسماعيلية",
    description: "أجواء فاخرة، قهوة مختصة أحادية المصدر، وساندويتشات توست طازجة في الشيخ زايد، الإسماعيلية.",
    url: "https://roast-n-toast-ismailia.com",
    siteName: "Roast N' Toast Specialty Coffee",
    images: [
      {
        url: '/images/cafe/hero/hero-main.jpg',
        width: 1200,
        height: 630,
        alt: "Roast N' Toast Specialty Coffee Ismailia",
      },
    ],
    locale: 'ar_EG',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: "Roast N' Toast Specialty Coffee | Ismailia",
    description: "Specialty coffee craftsmanship & freshly toasted bites in Ismailia.",
    images: ['/images/cafe/hero/hero-main.jpg'],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'CoffeeShop',
    name: cafeConfig.name,
    image: 'https://img4.restaurantguru.com/r1b4-Roast-N-Toast-Specialty-Coffee-design.jpg',
    telephone: cafeConfig.phone,
    url: cafeConfig.googleMapsUrl,
    address: {
      '@type': 'PostalAddress',
      streetAddress: cafeConfig.plusCode,
      addressLocality: 'Ismailia',
      addressRegion: 'Ismailia Governorate',
      addressCountry: 'EG',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: cafeConfig.coordinates.lat,
      longitude: cafeConfig.coordinates.lng,
    },
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: cafeConfig.rating.toString(),
      reviewCount: cafeConfig.reviewsCount.toString(),
      bestRating: '5',
      worstRating: '1',
    },
    servesCuisine: ['Specialty Coffee', 'Sandwiches', 'Desserts'],
    priceRange: '$$',
  };

  return (
    <html lang="ar" dir="rtl" className="scroll-smooth">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="bg-cream-100 text-espresso-900 antialiased selection:bg-caramel-500 selection:text-white">
        <LanguageProvider>
          {children}
        </LanguageProvider>
      </body>
    </html>
  );
}
