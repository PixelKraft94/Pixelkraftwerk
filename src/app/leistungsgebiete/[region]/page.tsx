import type { Metadata } from 'next';
import RegionPage from '@/pages/RegionPage';

const REGIONS: Record<string, { title: string; description: string }> = {
  leipzig: {
    title: 'KI-Automatisierung & Chatbots in Leipzig',
    description: 'KI-Automatisierung und Chatbots für Unternehmen in Leipzig. Pixel Kraftwerk – Ihr Partner für digitale Prozesse.',
  },
  groitzsch: {
    title: 'KI-Automatisierung & Chatbots in Groitzsch – Ihr Partner vor Ort',
    description: 'KI-Lösungen aus Groitzsch für die Region. Pixel Kraftwerk – Automatisierung, Chatbots und SEO.',
  },
  sachsen: {
    title: 'KI-Automatisierung & Chatbots in Sachsen',
    description: 'KI-Automatisierung für Unternehmen in Sachsen. Pixel Kraftwerk – Leipzig, Dresden, Chemnitz und Umgebung.',
  },
};

type Props = { params: Promise<{ region: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { region } = await params;
  const content = REGIONS[region];
  if (!content) {
    return { title: 'Leistungsgebiete' };
  }
  return {
    title: content.title,
    description: content.description,
    alternates: { canonical: `https://pixelkraftwerk-ai.com/leistungsgebiete/${region}` },
  };
}

export async function generateStaticParams() {
  return [{ region: 'leipzig' }, { region: 'groitzsch' }, { region: 'sachsen' }];
}

export default async function Page({ params }: Props) {
  const { region } = await params;
  return <RegionPage region={region} />;
}
