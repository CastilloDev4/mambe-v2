import type { MenuRepository } from '../../domain/ports/MenuRepository';
import type { MenuItem, MenuCategory } from '../../domain/entities/MenuItem';

export class GetMenuItemsUseCase {
  private menuRepository: MenuRepository;

  constructor(menuRepository: MenuRepository) {
    this.menuRepository = menuRepository;
  }

  async execute(): Promise<MenuItem[]> {
    return await this.menuRepository.getAllMenuItems();
  }
}

export class GetMenuItemsByCategoryUseCase {
  private menuRepository: MenuRepository;

  constructor(menuRepository: MenuRepository) {
    this.menuRepository = menuRepository;
  }

  async execute(category: MenuCategory): Promise<MenuItem[]> {
    return await this.menuRepository.getMenuItemsByCategory(category);
  }
}

export class GetPopularItemsUseCase {
  private menuRepository: MenuRepository;

  constructor(menuRepository: MenuRepository) {
    this.menuRepository = menuRepository;
  }

  async execute(): Promise<MenuItem[]> {
    return await this.menuRepository.getPopularItems();
  }
}
