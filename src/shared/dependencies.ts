// Dependency Injection Container
import { InMemoryMenuRepository } from '../infrastructure/repositories/InMemoryMenuRepository';
import { InMemoryRestaurantRepository } from '../infrastructure/repositories/InMemoryRestaurantRepository';
import { EmailContactService } from '../infrastructure/adapters/EmailContactService';
import { GetMenuItemsUseCase, GetMenuItemsByCategoryUseCase, GetPopularItemsUseCase } from '../application/usecases/MenuUseCases';
import { SendContactFormUseCase, ValidateContactFormUseCase } from '../application/usecases/ContactUseCases';

// Repositories
export const menuRepository = new InMemoryMenuRepository();
export const restaurantRepository = new InMemoryRestaurantRepository();

// Services
export const contactService = new EmailContactService();

// Use Cases
export const getMenuItemsUseCase = new GetMenuItemsUseCase(menuRepository);
export const getMenuItemsByCategoryUseCase = new GetMenuItemsByCategoryUseCase(menuRepository);
export const getPopularItemsUseCase = new GetPopularItemsUseCase(menuRepository);
export const sendContactFormUseCase = new SendContactFormUseCase(contactService);
export const validateContactFormUseCase = new ValidateContactFormUseCase(contactService);
