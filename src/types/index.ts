export interface NavItem {
  title: string;
  path: string;
}

export interface SocialLink {
  platform: string;
  url: string;
  icon: string;
}

export type BusinessType = 
  | 'E-Commerce'
  | 'Gastronomie'
  | 'SaaS'
  | 'Gesundheitswesen'
  | 'Finanzen'
  | 'Produktion'
  | 'Einzelhandel'
  | 'Beratung / Agentur'
  | 'SaaS / IT'
  | 'Sonstiges';

export type HowFoundUs = 
  | 'Empfehlung'
  | 'Google'
  | 'LinkedIn'
  | 'Instagram'
  | 'Facebook'
  | 'Sonstiges';

export interface ContactFormData {
  name: string;
  email: string;
  phone: string;
  company: string;
  website: string;
  howFoundUs: HowFoundUs;
  timeConsumingTasks: string;
  tasksToAutomate: string;
  industry: BusinessType;
}

export type CookieType = 'necessary' | 'analytics' | 'marketing' | 'preferences';