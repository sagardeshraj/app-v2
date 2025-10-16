export interface User {
  uid: string;
  email: string;
  displayName?: string;
  photoURL?: string;
  username?: string;
  preferences?: Preferences;
  reviewPass?: { active: boolean; expiry: Date | null; plan: string };
}

export interface Preferences {
  budget: [number, number];
  focusArea: 'build-quality' | 'features' | 'look-feel' | 'performance';
  releasedWithin: '1-year' | '2-years' | '3-years';
}

export interface Product {
  id: string;
  name: string;
  price: number;
  image: string;
  brandLogo: string;
  details?: string;
  features?: string[];
  available: boolean;
  rating?: number;
  specs?: Spec[];
}

export interface Spec {
  category: string;
  attribute: string;
  value: string;
}

export interface Recommendation {
  type: 'prime' | 'budget' | 'popular';
  product: Product;
}

export interface Notification {
  id: string;
  message: string;
  date: string;
  type: 'trend' | 'review' | 'article' | 'reaction' | 'follower';
}

export interface ReviewPassPlan {
  id: string;
  price: number;
  currency: string;
  durationDays: number;
  description: string;
}