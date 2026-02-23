import type { Metadata } from 'next';
import Leistungsgebiete from '@/pages/Leistungsgebiete';

export const metadata: Metadata = {
  title: 'Leistungsgebiete – KI-Agentur Leipzig, Markkleeberg, Zwenkau, Borna & Region | Pixel Kraftwerk',
  description: 'Pixel Kraftwerk betreut Unternehmen in Leipzig, Markkleeberg, Zwenkau, Borna, Böhlen, Rötha, Neukieritzsch, Pegau, Lucka, Meuselwitz, Regis-Breitingen, Elstertrebnitz und Groitzsch. KI-Chatbots, Telefonassistenten, Terminbuchung, CRM, Websites & SEO.',
  alternates: { canonical: 'https://pixelkraftwerk-ai.com/leistungsgebiete' },
};

export default function Page() {
  return <Leistungsgebiete />;
}
