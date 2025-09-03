import type { ContactForm } from '../entities/ContactForm';

export interface ContactService {
  sendContactForm(form: ContactForm): Promise<boolean>;
  validateContactForm(form: Partial<ContactForm>): ValidationResult;
}

export interface ValidationResult {
  isValid: boolean;
  errors: ValidationError[];
}

export interface ValidationError {
  field: string;
  message: string;
}
