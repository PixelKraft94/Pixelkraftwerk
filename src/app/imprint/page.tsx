import type { Metadata } from 'next';
import Imprint from '@/pages/Imprint';

export const metadata: Metadata = {
  title: 'Impressum',
  description: 'Impressum und rechtliche Angaben – Pixel Kraftwerk.',
  alternates: { canonical: 'https://pixelkraftwerk-ai.com/imprint' },
};

export default function Page() {
  return <Imprint />;
}
