import type { Metadata } from 'next';
import Features from '@/pages/Features';

export const metadata: Metadata = {
  title: 'Features',
  description: 'KI-Lösungen und Automatisierung – Features und Leistungen von Pixel Kraftwerk.',
  alternates: { canonical: 'https://pixelkraftwerk-ai.com/features' },
};

export default function Page() {
  return <Features />;
}
