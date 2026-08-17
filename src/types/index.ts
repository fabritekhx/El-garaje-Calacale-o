export type DaySpecial = 'viernes' | 'sabado' | 'domingo' | 'todos';

export type MenuCategory = 
  | 'todos'
  | 'especiales-semana'
  | 'platos-fuertes'
  | 'pescados-mariscos'
  | 'sopas-caldos'
  | 'tradicion-leña'
  | 'bebidas'
  | 'postres';

export interface MenuItem {
  id: string;
  name: string;
  description: string;
  price: number;
  category: MenuCategory;
  daySpecial?: DaySpecial;
  specialBadge?: string;
  image: string;
  rating: number;
  reviewsCount: number;
  isWoodFired?: boolean;
  isPopular?: boolean;
  prepTimeMinutes: number;
  ingredients: string[];
  pairing?: string;
  portion: string;
  culturalOrigin: string;
}

export interface CartItem {
  menuItem: MenuItem;
  quantity: number;
  notes?: string;
  extraSides: string[];
}

export interface ReservationData {
  name: string;
  phone: string;
  email: string;
  date: string;
  time: string;
  guests: number;
  area: 'salon-rustico' | 'terraza-campestre' | 'area-fogata';
  occasion: 'almuerzo-familiar' | 'cumpleanos' | 'paseo-turistico' | 'reunion-amigos' | 'otro';
  notes?: string;
}

export interface EventItem {
  id: string;
  title: string;
  subtitle: string;
  dateText: string;
  timeText: string;
  category: 'Rodeo Chagra' | 'Música en Vivo' | 'Festival Gastronómico' | 'Cabalgata';
  description: string;
  fullStory: string;
  image: string;
  isUpcoming: boolean;
  spotsLeft: number;
  priceTag: string;
  activities: string[];
}

export interface TestimonialItem {
  id: string;
  author: string;
  location: string;
  rating: number;
  date: string;
  dishFavorite: string;
  comment: string;
  verifiedVisit: boolean;
  avatarUrl?: string;
}

export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  content: string[];
  readTime: string;
  date: string;
  category: string;
  image: string;
  author: string;
}
