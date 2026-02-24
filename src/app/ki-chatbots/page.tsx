import type { Metadata } from 'next';
import KiChatbots from '@/pages/services/KiChatbots';

export const metadata: Metadata = {
  title: 'BESTE KI-Chatbot Agentur Groitzsch – Pixel Kraftwerk – Digitale Kundenassistenz in meiner Nähe',
  description: 'Digitale Kundenassistenz für automatische Kundenbetreuung auf Ihrer Website. Beantworten Sie Anfragen rund um die Uhr und entlasten Sie Ihr Team.',
  alternates: { canonical: 'https://pixelkraftwerk-ai.com/ki-chatbots' },
};

export default function Page() {
  return <KiChatbots />;
}
