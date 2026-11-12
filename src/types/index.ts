export type Language = 'it' | 'en' | 'de' | 'fr';

export type ServiceCategory = 'all' | 'cut' | 'color' | 'treatment' | 'special';

export interface ServiceItem {
  id: string;
  category: 'cut' | 'color' | 'treatment' | 'special';
  name: Record<Language, string>;
  description: Record<Language, string>;
  priceRange: string;
  duration: Record<Language, string>;
  target: 'all' | 'women' | 'men' | 'kids';
  popular?: boolean;
}

export interface ReviewItem {
  id: string;
  author: string;
  date: Record<Language, string>;
  rating: number;
  service: Record<Language, string>;
  category: 'cut' | 'color' | 'men';
  comment: Record<Language, string>;
  verified: boolean;
}

export interface OpeningHour {
  dayId: number; // 0 = Sunday, 1 = Monday, 2 = Tuesday, ...
  dayName: Record<Language, string>;
  morning?: string;
  afternoon?: string;
  fullDay?: string;
  isClosed: boolean;
}
