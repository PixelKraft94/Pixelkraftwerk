import type { Metadata } from 'next';
import TermineBuchungen from '@/pages/services/TermineBuchungen';

export const metadata: Metadata = {
  title: 'Terminplanung & Buchungssysteme',
  description: 'Intelligente Online-Terminbuchung für Ihr Unternehmen. Automatische Kalenderplanung, Erinnerungen und Kundenverwaltung – ohne Telefonmarathon.',
  alternates: { canonical: 'https://pixelkraftwerk-ai.com/termine-buchungen' },
};

export default function Page() {
  return <TermineBuchungen />;
}
