import type { ContactService, ValidationResult } from '../../domain/ports/ContactService';
import type { ContactForm } from '../../domain/entities/ContactForm';

export class SendContactFormUseCase {
  private contactService: ContactService;

  constructor(contactService: ContactService) {
    this.contactService = contactService;
  }

  async execute(form: ContactForm): Promise<boolean> {
    const validation = this.contactService.validateContactForm(form);
    
    if (!validation.isValid) {
      throw new Error(`Validation failed: ${validation.errors.map(e => e.message).join(', ')}`);
    }

    return await this.contactService.sendContactForm(form);
  }
}

export class ValidateContactFormUseCase {
  private contactService: ContactService;

  constructor(contactService: ContactService) {
    this.contactService = contactService;
  }

  execute(form: Partial<ContactForm>): ValidationResult {
    return this.contactService.validateContactForm(form);
  }
}
