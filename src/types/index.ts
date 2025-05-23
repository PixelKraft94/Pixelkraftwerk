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
  | 'Sonstiges';

export type AutomationInterest = 
  | 'KI-Chatbot'
  | 'CRM-Integration'
  | 'Social Media'
  | 'Terminplanung'
  | 'Telefon-Agenten'
  | 'Website-Entwicklung'
  | 'Individuelle Lösung';

export interface ContactFormData {
  name: string;
  email: string;
  phone: string;
  businessType: BusinessType;
  automationInterests: AutomationInterest[];
}

export type CookieType = 'necessary' | 'analytics' | 'marketing' | 'preferences';