import type { RestaurantInfo } from '../entities/RestaurantInfo';

export interface RestaurantRepository {
  getRestaurantInfo(): Promise<RestaurantInfo>;
  updateRestaurantInfo(info: RestaurantInfo): Promise<void>;
}
