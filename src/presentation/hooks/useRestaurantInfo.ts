import { useState, useEffect } from 'react';
import type { RestaurantInfo } from '../../domain/entities/RestaurantInfo';
import { restaurantRepository } from '../../shared/dependencies';

export const useRestaurantInfo = () => {
  const [restaurantInfo, setRestaurantInfo] = useState<RestaurantInfo | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const loadRestaurantInfo = async () => {
    try {
      setLoading(true);
      setError(null);
      const info = await restaurantRepository.getRestaurantInfo();
      setRestaurantInfo(info);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Error cargando información del restaurante');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadRestaurantInfo();
  }, []);

  return {
    restaurantInfo,
    loading,
    error,
    reload: loadRestaurantInfo
  };
};
