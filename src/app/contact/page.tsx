import type { Metadata } from 'next';
import Contact from '@/pages/Contact';

export const metadata: Metadata = {
  title: 'Kontakt',
  description: 'Kontaktieren Sie Pixel Kraftwerk für KI-Automatisierungslösungen. Wir sind in Groitzsch, Leipzig und ganz Sachsen für Sie da.',
  keywords: ['Kontakt Pixel Kraftwerk', 'KI Beratung Leipzig', 'Automatisierung Groitzsch'],
  alternates: { canonical: 'https://pixelkraftwerk-ai.com/contact' },
};

export default function Page() {
  return <Contact />;
}
