export type Language = 'ar' | 'en';
export type Direction = 'rtl' | 'ltr';

export type MenuCategory = 
  | 'hot_coffee' 
  | 'cold_coffee' 
  | 'specialty' 
  | 'tea' 
  | 'food' 
  | 'desserts';

export interface MenuItem {
  id: string;
  nameEn: string;
  nameAr: string;
  descriptionEn: string;
  descriptionAr: string;
  price: number | null; // EGP
  category: MenuCategory;
  image: string;
  isPopular?: boolean;
  isSpecialty?: boolean;
  isDemoPrice: boolean;
  calories?: string;
  tags?: {
    ar: string;
    en: string;
  }[];
}

export interface GalleryItem {
  id: string;
  titleEn: string;
  titleAr: string;
  category: 'all' | 'interior' | 'coffee' | 'food' | 'vibe';
  image: string;
  captionEn?: string;
  captionAr?: string;
}

export interface WorkingDay {
  dayEn: string;
  dayAr: string;
  hoursEn: string;
  hoursAr: string;
  isOpen: boolean;
  openTime24: number; // e.g. 7 for 07:00
  closeTime24: number; // e.g. 25 for 01:00 next day
}

export interface CafeConfig {
  name: string;
  taglineEn: string;
  taglineAr: string;
  addressEn: string;
  addressAr: string;
  plusCode: string;
  phone: string;
  whatsapp: string;
  googleMapsUrl: string;
  instagram: string;
  tiktok: string;
  rating: number;
  reviewsCount: number;
  googleRating: number;
  coordinates: {
    lat: number;
    lng: number;
  };
  workingHours: WorkingDay[];
  hoursNoteAr: string;
  hoursNoteEn: string;
}

