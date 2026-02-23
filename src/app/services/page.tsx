import type { Metadata } from 'next';
import Services from '@/pages/Services';

export const metadata: Metadata = {
  title: 'Leistungen – KI-Automatisierung, Chatbots & SEO in Leipzig und Sachsen | Pixel Kraftwerk',
  description: 'KI-Chatbots, Telefonassistenten, Terminbuchung, CRM, Websites & SEO, Content & KI-Videos. Digitale Lösungen aus Groitzsch für Leipzig und Sachsen.',
  alternates: { canonical: 'https://pixelkraftwerk-ai.com/services' },
};

export default function Page() {
  return <Services />;
}
