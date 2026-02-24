import type { Metadata } from 'next';
import Telefonassistenten from '@/pages/services/Telefonassistenten';

export const metadata: Metadata = {
  title: 'BESTE KI-Telefonassistenten Groitzsch – Pixel Kraftwerk – Telefonische Kundenassistenz in meiner Nähe',
  description: 'Telefonische Kundenassistenz für automatische Anrufannahme. Nie wieder verpasste Anrufe – professioneller Service rund um die Uhr.',
  alternates: { canonical: 'https://pixelkraftwerk-ai.com/telefonassistenten' },
};

export default function Page() {
  return <Telefonassistenten />;
}
