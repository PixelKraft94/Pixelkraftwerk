/**
 * Zentrale Service-Daten für URLs, Breadcrumbs und Verlinkung.
 * Single Source of Truth für /leistungsgebiete/[region]/[service] und globale Service-Routen.
 */
export const SERVICE_SLUGS = [
  'ki-chatbots',
  'telefonassistenten',
  'termine-buchungen',
  'crm-lead-management',
  'website-seo',
  'content-video',
] as const;

export type ServiceSlug = (typeof SERVICE_SLUGS)[number];

export interface ServiceInfo {
  slug: ServiceSlug;
  /** Kurzlabel für Breadcrumbs und Listen (z. B. „KI-Chatbots“, „Telefonassistenten“) */
  label: string;
  /** Varianten für Linktext „[X] in [Stadt]“ / „[X] für [Stadt]“ – rotieren für Vielfalt */
  linkTextVariants: string[];
}

export const SERVICES: ServiceInfo[] = [
  {
    slug: 'ki-chatbots',
    label: 'KI-Chatbots',
    linkTextVariants: ['KI-Chatbots in', 'Digitale Kundenassistenz für', 'KI-Chatbots für'],
  },
  {
    slug: 'telefonassistenten',
    label: 'Telefonassistenten',
    linkTextVariants: ['Telefonassistenten in', 'Telefonische Kundenassistenz für', 'Telefonassistenten für'],
  },
  {
    slug: 'termine-buchungen',
    label: 'Terminbuchung',
    linkTextVariants: ['Terminbuchung in', 'Terminplanung in', 'Buchungssysteme für'],
  },
  {
    slug: 'crm-lead-management',
    label: 'CRM & Lead-Management',
    linkTextVariants: ['CRM & Lead-Management in', 'Lead-Management in', 'CRM für'],
  },
  {
    slug: 'website-seo',
    label: 'Websites & SEO',
    linkTextVariants: ['Websites & SEO in', 'SEO in', 'Websites & SEO für'],
  },
  {
    slug: 'content-video',
    label: 'Content & KI-Videos',
    linkTextVariants: ['Content & KI-Videos in', 'KI-Videos in', 'Content & KI-Videos für'],
  },
];

const slugToService = new Map(SERVICES.map((s) => [s.slug, s]));

export function getServiceBySlug(slug: string): ServiceInfo | undefined {
  return slugToService.get(slug as ServiceSlug);
}

export function isValidServiceSlug(slug: string): slug is ServiceSlug {
  return SERVICE_SLUGS.includes(slug as ServiceSlug);
}

/** Linktext für „[Service] in [Stadt]“ mit Variation (z. B. für Index 0: „KI-Chatbots in Leipzig“) */
export function getRegionServiceLinkText(
  serviceSlug: ServiceSlug,
  cityName: string,
  variantIndex: number = 0
): string {
  const service = getServiceBySlug(serviceSlug);
  if (!service) return `${serviceSlug} in ${cityName}`;
  const variant = service.linkTextVariants[variantIndex % service.linkTextVariants.length];
  return `${variant} ${cityName}`;
}
