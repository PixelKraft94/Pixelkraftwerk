import type { Metadata } from 'next';
import SeoTop3 from '@/pages/services/SeoTop3';

export const metadata: Metadata = {
  title: 'BESTE SEO Agentur Groitzsch – Pixel Kraftwerk – Top 3 in Google in meiner Nähe',
  description:
    'Lokales SEO-Angebot für Unternehmen aus Leipzig, Groitzsch und Region: Top-3-Positionen für die Suchbegriffe, die wirklich Kunden bringen – mit klarer Strategie und transparenten Ergebnissen.',
  alternates: { canonical: 'https://pixelkraftwerk-ai.com/seo-top-3-in-google' },
};

export default function Page() {
  return <SeoTop3 />;
}

