import type { Metadata } from 'next';
import CrmLeadManagement from '@/pages/services/CrmLeadManagement';

export const metadata: Metadata = {
  title: 'Lead-Management & CRM-Automatisierung',
  description: 'Intelligentes CRM-System für strukturierte Kundenverwaltung. Automatische Lead-Erfassung, Qualifizierung und Follow-ups für mehr Abschlüsse.',
  alternates: { canonical: 'https://pixelkraftwerk-ai.com/crm-lead-management' },
};

export default function Page() {
  return <CrmLeadManagement />;
}
