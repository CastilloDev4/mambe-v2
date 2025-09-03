import type { MenuItem, MenuCategory } from '../entities/MenuItem';

export interface MenuRepository {
  getAllMenuItems(): Promise<MenuItem[]>;
  getMenuItemsByCategory(category: MenuCategory): Promise<MenuItem[]>;
  getPopularItems(): Promise<MenuItem[]>;
  getMenuItemById(id: string): Promise<MenuItem | null>;
}
