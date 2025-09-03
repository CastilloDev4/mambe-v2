import React, { useState } from 'react';
import { useContact } from '../hooks/useContact';
import { ContactSubject } from '../../domain/entities/ContactForm';
import type { ContactSubject as ContactSubjectType } from '../../domain/entities/ContactForm';
import './ContactSection.css';

export const ContactSection: React.FC = () => {
  const { loading, success, error, sendContactForm, validateForm, resetState } = useContact();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '' as ContactSubjectType | '',
    message: ''
  });
  const [formErrors, setFormErrors] = useState<Record<string, string>>({});

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    
    // Limpiar errores al escribir
    if (formErrors[name]) {
      setFormErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validar formulario
    const validation = validateForm({
      ...formData,
      subject: formData.subject as ContactSubjectType
    });
    if (!validation.isValid) {
      const errors: Record<string, string> = {};
      validation.errors.forEach(error => {
        errors[error.field] = error.message;
      });
      setFormErrors(errors);
      return;
    }

    // Enviar formulario
    const contactForm = {
      ...formData,
      subject: formData.subject as ContactSubjectType,
      submittedAt: new Date()
    };

    await sendContactForm(contactForm);
  };

  const handleReset = () => {
    setFormData({
      name: '',
      email: '',
      phone: '',
      subject: '',
      message: ''
    });
    setFormErrors({});
    resetState();
  };

  return (
    <section id="contact" className="contact-section">
      <div className="container">
        <h2 className="section-title">Contáctanos</h2>
        <p className="section-subtitle">
          ¿Tienes alguna pregunta o sugerencia? ¡Nos encantaría escucharte!
        </p>

        <div className="contact-content">
          <div className="contact-info">
            <h3>Información de contacto</h3>
            <div className="contact-item">
              <strong>Dirección:</strong>
              <p>Cra 13 #85-32, Bogotá, Colombia</p>
            </div>
            <div className="contact-item">
              <strong>Teléfono:</strong>
              <p>+57 1 555-0123</p>
            </div>
            <div className="contact-item">
              <strong>Email:</strong>
              <p>hola@mambe.com</p>
            </div>
            <div className="contact-item">
              <strong>WhatsApp:</strong>
              <p>+57 300 555 0123</p>
            </div>
          </div>

          <form className="contact-form" onSubmit={handleSubmit}>
            {success && (
              <div className="success-message">
                <p>¡Mensaje enviado exitosamente! Te contactaremos pronto.</p>
                <button type="button" onClick={handleReset} className="reset-button">
                  Enviar otro mensaje
                </button>
              </div>
            )}

            {!success && (
              <>
                <div className="form-group">
                  <label htmlFor="name">Nombre *</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    className={formErrors.name ? 'error' : ''}
                  />
                  {formErrors.name && <span className="error-text">{formErrors.name}</span>}
                </div>

                <div className="form-group">
                  <label htmlFor="email">Email *</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className={formErrors.email ? 'error' : ''}
                  />
                  {formErrors.email && <span className="error-text">{formErrors.email}</span>}
                </div>

                <div className="form-group">
                  <label htmlFor="phone">Teléfono</label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="subject">Asunto *</label>
                  <select
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    className={formErrors.subject ? 'error' : ''}
                  >
                    <option value="">Selecciona un asunto</option>
                    <option value={ContactSubject.GENERAL_INQUIRY}>Consulta general</option>
                    <option value={ContactSubject.RESERVATION}>Reservación</option>
                    <option value={ContactSubject.CATERING}>Catering</option>
                    <option value={ContactSubject.COMPLAINT}>Queja</option>
                    <option value={ContactSubject.SUGGESTION}>Sugerencia</option>
                  </select>
                  {formErrors.subject && <span className="error-text">{formErrors.subject}</span>}
                </div>

                <div className="form-group">
                  <label htmlFor="message">Mensaje *</label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    value={formData.message}
                    onChange={handleInputChange}
                    className={formErrors.message ? 'error' : ''}
                  ></textarea>
                  {formErrors.message && <span className="error-text">{formErrors.message}</span>}
                </div>

                {error && (
                  <div className="error-message">
                    <p>{error}</p>
                  </div>
                )}

                <button type="submit" className="submit-button" disabled={loading}>
                  {loading ? 'Enviando...' : 'Enviar mensaje'}
                </button>
              </>
            )}
          </form>
        </div>
      </div>
    </section>
  );
};
