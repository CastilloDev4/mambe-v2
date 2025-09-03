import type { RestaurantRepository } from '../../domain/ports/RestaurantRepository';
import type { RestaurantInfo } from '../../domain/entities/RestaurantInfo';

export class InMemoryRestaurantRepository implements RestaurantRepository {
  private restaurantData: RestaurantInfo = {
    id: '1',
    name: 'Mambe',
    description: 'La mejor hamburguesería artesanal de la ciudad. Creamos experiencias gastronómicas únicas con ingredientes frescos y de la más alta calidad.',
    address: 'Cra 13 #85-32, Bogotá, Colombia',
    phone: '+57 1 555-0123',
    email: 'hola@mambe.com',
    logo: '/images/logo-mambe.png',
    heroImage: '/images/hero-mambe.jpg',
    openingHours: {
      monday: { isOpen: true, openTime: '11:00', closeTime: '22:00' },
      tuesday: { isOpen: true, openTime: '11:00', closeTime: '22:00' },
      wednesday: { isOpen: true, openTime: '11:00', closeTime: '22:00' },
      thursday: { isOpen: true, openTime: '11:00', closeTime: '22:00' },
      friday: { isOpen: true, openTime: '11:00', closeTime: '23:00' },
      saturday: { isOpen: true, openTime: '11:00', closeTime: '23:00' },
      sunday: { isOpen: true, openTime: '12:00', closeTime: '21:00' }
    },
    socialMedia: {
      facebook: 'https://facebook.com/mambeburgers',
      instagram: 'https://instagram.com/mambeburgers',
      whatsapp: '+57 300 555 0123'
    }
  };

  async getRestaurantInfo(): Promise<RestaurantInfo> {
    return Promise.resolve({ ...this.restaurantData });
  }

  async updateRestaurantInfo(info: RestaurantInfo): Promise<void> {
    this.restaurantData = { ...info };
    return Promise.resolve();
  }
}
