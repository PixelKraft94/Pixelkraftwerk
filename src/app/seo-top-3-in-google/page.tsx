import type { Metadata } from 'next';
import SeoTop3 from '@/pages/services/SeoTop3';

export const metadata: Metadata = {
  title: 'Top 3 in Google in 90 Tagen – lokales SEO-Angebot | Pixel Kraftwerk',
  description:
    'Lokales SEO-Angebot für Unternehmen aus Leipzig, Groitzsch und Region: Top-3-Positionen für die Suchbegriffe, die wirklich Kunden bringen – mit klarer Strategie und transparenten Ergebnissen.',
  alternates: { canonical: 'https://pixelkraftwerk-ai.com/seo-top-3-in-google' },
};

export default function Page() {
  return <SeoTop3 />;
}

