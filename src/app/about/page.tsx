import type { Metadata } from 'next';
import About from '@/pages/About';

export const metadata: Metadata = {
  title: 'Über uns',
  description: 'Pixel Kraftwerk - Ihr Partner für KI-gestützte Automatisierung in Groitzsch und Leipzig. Effizienz neu gedacht mit maßgeschneiderten Lösungen.',
  keywords: ['Über Pixel Kraftwerk', 'KI Experten Leipzig', 'Automatisierung Sachsen'],
  alternates: { canonical: 'https://pixelkraftwerk-ai.com/about' },
};

export default function Page() {
  return <About />;
}
