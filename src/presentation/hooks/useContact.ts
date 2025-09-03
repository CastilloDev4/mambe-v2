import { useState } from 'react';
import type { ContactForm } from '../../domain/entities/ContactForm';
import { sendContactFormUseCase, validateContactFormUseCase } from '../../shared/dependencies';

export const useContact = () => {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const sendContactForm = async (form: ContactForm) => {
    try {
      setLoading(true);
      setError(null);
      setSuccess(false);
      
      const result = await sendContactFormUseCase.execute(form);
      
      if (result) {
        setSuccess(true);
      } else {
        setError('No se pudo enviar el mensaje. Inténtalo nuevamente.');
      }
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Error enviando el mensaje');
    } finally {
      setLoading(false);
    }
  };

  const validateForm = (form: Partial<ContactForm>) => {
    return validateContactFormUseCase.execute(form);
  };

  const resetState = () => {
    setLoading(false);
    setSuccess(false);
    setError(null);
  };

  return {
    loading,
    success,
    error,
    sendContactForm,
    validateForm,
    resetState
  };
};
