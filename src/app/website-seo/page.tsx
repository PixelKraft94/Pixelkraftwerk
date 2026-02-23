import type { Metadata } from 'next';
import WebsiteSeo from '@/pages/services/WebsiteSeo';

export const metadata: Metadata = {
  title: 'Websites & SEO, die Ihnen Kunden bringen – nicht Ihrer Konkurrenz',
  description: 'Website & SEO im Mietmodell. Kostenlose Analyse · Top-5 bei Google in 90 Tagen – sonst Geld zurück. Keine hohen Startkosten, Full-Service inklusive.',
  alternates: { canonical: 'https://pixelkraftwerk-ai.com/website-seo' },
};

export default function Page() {
  return <WebsiteSeo />;
}
