import { useState, useEffect } from 'react';
import type { MenuItem, MenuCategory } from '../../domain/entities/MenuItem';
import { getMenuItemsUseCase, getMenuItemsByCategoryUseCase, getPopularItemsUseCase } from '../../shared/dependencies';

export const useMenu = () => {
  const [menuItems, setMenuItems] = useState<MenuItem[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const loadAllItems = async () => {
    try {
      setLoading(true);
      setError(null);
      const items = await getMenuItemsUseCase.execute();
      setMenuItems(items);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Error cargando el menú');
    } finally {
      setLoading(false);
    }
  };

  const loadItemsByCategory = async (category: MenuCategory) => {
    try {
      setLoading(true);
      setError(null);
      const items = await getMenuItemsByCategoryUseCase.execute(category);
      setMenuItems(items);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Error cargando el menú');
    } finally {
      setLoading(false);
    }
  };

  const loadPopularItems = async () => {
    try {
      setLoading(true);
      setError(null);
      const items = await getPopularItemsUseCase.execute();
      setMenuItems(items);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Error cargando los platos populares');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadAllItems();
  }, []);

  return {
    menuItems,
    loading,
    error,
    loadAllItems,
    loadItemsByCategory,
    loadPopularItems
  };
};
