import type { Metadata } from 'next';
import ContentVideo from '@/pages/services/ContentVideo';

export const metadata: Metadata = {
  title: 'Content-Produktion & KI-Videos',
  description: 'Professionelle Texte, Bilder und Videos. Bilder und Videos mit KI-Technologie, Texte von erfahrenen Redakteuren. Schnelle Content-Erstellung für Social Media und Marketing.',
  alternates: { canonical: 'https://pixelkraftwerk-ai.com/content-video' },
};

export default function Page() {
  return <ContentVideo />;
}
