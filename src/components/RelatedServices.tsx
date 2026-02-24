import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, MessageSquare, Phone, Calendar, Target, Globe, Video, Search } from 'lucide-react';

interface ServiceInfo {
  slug: string;
  title: string;
  shortDescription: string;
  icon: React.ReactNode;
}

const allServices: ServiceInfo[] = [
  {
    slug: 'ki-chatbots',
    title: 'Digitale Kundenassistenz',
    shortDescription: 'Digitale Kundenassistenz für Ihre Website, die Besucher berät und Anfragen qualifiziert.',
    icon: <MessageSquare size={32} strokeWidth={1.5} />,
  },
  {
    slug: 'telefonassistenten',
    title: 'Telefonische Kundenassistenz',
    shortDescription: 'Telefonische Kundenassistenz, die Anrufe entgegennimmt und professionell bearbeitet.',
    icon: <Phone size={32} strokeWidth={1.5} />,
  },
  {
    slug: 'termine-buchungen',
    title: 'Terminplanung & Buchungssysteme',
    shortDescription: 'Intelligente Buchungssysteme, die Ihren Kalender automatisch organisieren.',
    icon: <Calendar size={32} strokeWidth={1.5} />,
  },
  {
    slug: 'crm-lead-management',
    title: 'Lead-Management & CRM',
    shortDescription: 'Strukturierte Kundenverwaltung und automatisierte Vertriebsprozesse.',
    icon: <Target size={32} strokeWidth={1.5} />,
  },
  {
    slug: 'webseite',
    title: 'Webseiten im Mietmodell',
    shortDescription: 'Moderne, schnelle Websites im Mietmodell – mit Rundum-Betreuung.',
    icon: <Globe size={32} strokeWidth={1.5} />,
  },
  {
    slug: 'seo-top-3-in-google',
    title: 'SEO: Top 3 in Google',
    shortDescription: 'Lokales SEO-Angebot mit Fokus auf Top-Platzierungen für Ihre wichtigsten Suchbegriffe.',
    icon: <Search size={32} strokeWidth={1.5} />,
  },
  {
    slug: 'content-video',
    title: 'Content-Produktion & KI-Videos',
    shortDescription: 'Professionelle Texte, Bilder und Videos mit moderner KI-Technologie.',
    icon: <Video size={32} strokeWidth={1.5} />,
  },
];

interface RelatedServicesProps {
  currentSlug: string;
  relatedSlugs: string[];
}

const RelatedServices: React.FC<RelatedServicesProps> = ({ currentSlug, relatedSlugs }) => {
  const relatedServices = allServices.filter(
    service => relatedSlugs.includes(service.slug) && service.slug !== currentSlug
  );

  if (relatedServices.length === 0) return null;

  return (
    <section className="py-24 bg-dark-400">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-2xl md:text-3xl font-heading font-bold text-light-100 mb-4">
              Das könnte Sie auch <span className="text-primary-500">interessieren</span>
            </h2>
            <p className="text-light-200">
              Entdecken Sie weitere Lösungen, die perfekt zu dieser Dienstleistung passen.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {relatedServices.map((service, index) => (
              <motion.a
                key={service.slug}
                href={`/${service.slug}`}
                className="group bg-dark-500 border border-dark-100 p-6 hover:border-primary-500/50 transition-all duration-300"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -4 }}
              >
                <div className="text-primary-500 mb-4">
                  {service.icon}
                </div>
                <h3 className="text-lg font-heading font-bold text-light-100 mb-3 group-hover:text-primary-400 transition-colors duration-200">
                  {service.title}
                </h3>
                <p className="text-light-300 text-sm mb-4 leading-relaxed">
                  {service.shortDescription}
                </p>
                <span className="inline-flex items-center text-primary-500 text-sm font-heading group-hover:translate-x-2 transition-transform duration-200">
                  Mehr erfahren
                  <ArrowRight size={16} className="ml-1" />
                </span>
              </motion.a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default RelatedServices;
