import type { Metadata } from 'next';
import Leistungsgebiete from '@/pages/Leistungsgebiete';

export const metadata: Metadata = {
  title: 'Leistungsgebiete – KI-Automatisierung in Leipzig, Groitzsch & Sachsen | Pixel Kraftwerk',
  description: 'Pixel Kraftwerk betreut Unternehmen in Groitzsch, Leipzig und ganz Sachsen. KI-Chatbots, Telefonassistenten, Terminbuchung, CRM, Websites & SEO.',
  alternates: { canonical: 'https://pixelkraftwerk-ai.com/leistungsgebiete' },
};

export default function Page() {
  return <Leistungsgebiete />;
}
