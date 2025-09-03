export interface ContactForm {
  name: string;
  email: string;
  phone?: string;
  message: string;
  subject: ContactSubject;
  submittedAt: Date;
}

export type ContactSubject = 
  | 'general'
  | 'reservation'
  | 'catering'
  | 'complaint'
  | 'suggestion';

export const ContactSubject = {
  GENERAL_INQUIRY: 'general' as const,
  RESERVATION: 'reservation' as const,
  CATERING: 'catering' as const,
  COMPLAINT: 'complaint' as const,
  SUGGESTION: 'suggestion' as const,
} as const;
