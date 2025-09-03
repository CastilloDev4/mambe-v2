import type { MenuRepository } from '../../domain/ports/MenuRepository';
import type { MenuItem, MenuCategory } from '../../domain/entities/MenuItem';
import { MenuCategory as MenuCategoryConstants } from '../../domain/entities/MenuItem';

export class InMemoryMenuRepository implements MenuRepository {
  private menuItems: MenuItem[] = [
    {
      id: '1',
      name: 'Mambe Clásica',
      description: 'Nuestra hamburguesa insignia con carne angus, lechuga, tomate, queso cheddar y salsa especial',
      price: 28000,
      category: MenuCategoryConstants.BURGERS,
      imageUrl: '/images/mambe-clasica.jpg',
      ingredients: ['Carne Angus 150g', 'Pan brioche', 'Lechuga', 'Tomate', 'Queso cheddar', 'Salsa Mambe'],
      allergens: ['Gluten', 'Lácteos'],
      isAvailable: true,
      isPopular: true
    },
    {
      id: '2',
      name: 'Mambe BBQ',
      description: 'Hamburguesa con carne angus, cebolla caramelizada, queso provolone y salsa BBQ ahumada',
      price: 32000,
      category: MenuCategoryConstants.BURGERS,
      imageUrl: '/images/mambe-bbq.jpg',
      ingredients: ['Carne Angus 150g', 'Pan brioche', 'Cebolla caramelizada', 'Queso provolone', 'Salsa BBQ'],
      allergens: ['Gluten', 'Lácteos'],
      isAvailable: true,
      isPopular: true
    },
    {
      id: '3',
      name: 'Papas Mambe',
      description: 'Papas fritas artesanales con sal de mar y hierbas',
      price: 12000,
      category: MenuCategoryConstants.APPETIZERS,
      imageUrl: '/images/papas-mambe.jpg',
      ingredients: ['Papas criollas', 'Sal de mar', 'Hierbas frescas'],
      allergens: [],
      isAvailable: true
    },
    {
      id: '4',
      name: 'Limonada Natural',
      description: 'Refrescante limonada con limones frescos y menta',
      price: 8000,
      category: MenuCategoryConstants.DRINKS,
      imageUrl: '/images/limonada.jpg',
      ingredients: ['Limón', 'Agua', 'Azúcar', 'Menta'],
      allergens: [],
      isAvailable: true
    }
  ];

  async getAllMenuItems(): Promise<MenuItem[]> {
    return Promise.resolve([...this.menuItems]);
  }

  async getMenuItemsByCategory(category: MenuCategory): Promise<MenuItem[]> {
    return Promise.resolve(
      this.menuItems.filter(item => item.category === category)
    );
  }

  async getPopularItems(): Promise<MenuItem[]> {
    return Promise.resolve(
      this.menuItems.filter(item => item.isPopular === true)
    );
  }

  async getMenuItemById(id: string): Promise<MenuItem | null> {
    const item = this.menuItems.find(item => item.id === id);
    return Promise.resolve(item || null);
  }
}
