import type { Metadata } from 'next';
import Privacy from '@/pages/Privacy';

export const metadata: Metadata = {
  title: 'Datenschutzerklärung',
  description: 'Datenschutzerklärung von Pixel Kraftwerk.',
  alternates: { canonical: 'https://pixelkraftwerk-ai.com/privacy' },
  robots: { index: true, follow: true },
};

export default function Page() {
  return <Privacy />;
}
