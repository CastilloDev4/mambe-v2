export interface MenuItem {
  id: string;
  name: string;
  description: string;
  price: number;
  category: MenuCategory;
  imageUrl?: string;
  ingredients: string[];
  allergens?: string[];
  isAvailable: boolean;
  isPopular?: boolean;
}

export type MenuCategory = 
  | 'burgers'
  | 'appetizers'
  | 'drinks'
  | 'desserts'
  | 'combos';

export const MenuCategory = {
  BURGERS: 'burgers' as const,
  APPETIZERS: 'appetizers' as const,
  DRINKS: 'drinks' as const,
  DESSERTS: 'desserts' as const,
  COMBOS: 'combos' as const,
} as const;
