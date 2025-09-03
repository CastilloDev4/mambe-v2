import type { ContactService, ValidationResult, ValidationError } from '../../domain/ports/ContactService';
import type { ContactForm } from '../../domain/entities/ContactForm';

export class EmailContactService implements ContactService {
  async sendContactForm(form: ContactForm): Promise<boolean> {
    // Simulación de envío de email
    console.log('Enviando formulario de contacto:', form);
    
    // Simular delay de red
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    // Simular éxito del 90% del tiempo
    return Math.random() > 0.1;
  }

  validateContactForm(form: Partial<ContactForm>): ValidationResult {
    const errors: ValidationError[] = [];

    if (!form.name || form.name.trim().length < 2) {
      errors.push({
        field: 'name',
        message: 'El nombre debe tener al menos 2 caracteres'
      });
    }

    if (!form.email || !this.isValidEmail(form.email)) {
      errors.push({
        field: 'email',
        message: 'Debe proporcionar un email válido'
      });
    }

    if (!form.message || form.message.trim().length < 10) {
      errors.push({
        field: 'message',
        message: 'El mensaje debe tener al menos 10 caracteres'
      });
    }

    if (!form.subject) {
      errors.push({
        field: 'subject',
        message: 'Debe seleccionar un asunto'
      });
    }

    return {
      isValid: errors.length === 0,
      errors
    };
  }

  private isValidEmail(email: string): boolean {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }
}
