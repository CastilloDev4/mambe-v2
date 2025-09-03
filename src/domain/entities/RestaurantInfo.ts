export interface RestaurantInfo {
  id: string;
  name: string;
  description: string;
  address: string;
  phone: string;
  email: string;
  openingHours: OpeningHours;
  socialMedia: SocialMedia;
  logo?: string;
  heroImage?: string;
}

export interface OpeningHours {
  monday: DaySchedule;
  tuesday: DaySchedule;
  wednesday: DaySchedule;
  thursday: DaySchedule;
  friday: DaySchedule;
  saturday: DaySchedule;
  sunday: DaySchedule;
}

export interface DaySchedule {
  isOpen: boolean;
  openTime?: string;
  closeTime?: string;
}

export interface SocialMedia {
  facebook?: string;
  instagram?: string;
  twitter?: string;
  whatsapp?: string;
}
