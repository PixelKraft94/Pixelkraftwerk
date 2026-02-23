import type { Metadata } from 'next';
import PrivacySettings from '@/pages/PrivacySettings';

export const metadata: Metadata = {
  title: 'Datenschutz-Einstellungen',
  description: 'Cookie- und Datenschutz-Einstellungen verwalten.',
  alternates: { canonical: 'https://pixelkraftwerk-ai.com/privacy-settings' },
  robots: { index: true, follow: true },
};

export default function Page() {
  return <PrivacySettings />;
}
