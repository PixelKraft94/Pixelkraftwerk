import type { Metadata } from 'next';
import Website from '@/pages/services/Website';

export const metadata: Metadata = {
  title: 'BESTE Webdesign Agentur Groitzsch – Pixel Kraftwerk – Webseiten im Mietmodell in meiner Nähe',
  description:
    'Moderne, schnelle Webseiten im Mietmodell – ohne hohe Startkosten, mit Full-Service-Betreuung und schnellen Anpassungen. Ideal für lokale Unternehmen rund um Leipzig.',
  alternates: { canonical: 'https://pixelkraftwerk-ai.com/webseite' },
};

export default function Page() {
  return <Website />;
}

