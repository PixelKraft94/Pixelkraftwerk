import type { Metadata } from 'next';
import Faq from '@/pages/Faq';

export const metadata: Metadata = {
  title: 'FAQ',
  description: 'Häufige Fragen zu KI-Automatisierung, Chatbots und unseren Leistungen – Pixel Kraftwerk Leipzig & Sachsen.',
  alternates: { canonical: 'https://pixelkraftwerk-ai.com/faq' },
};

export default function Page() {
  return <Faq />;
}
