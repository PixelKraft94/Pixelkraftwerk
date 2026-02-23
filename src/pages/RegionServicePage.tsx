'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, CheckCircle } from 'lucide-react';
import { LEISTUNGSGEBIETE_CITIES } from '@/data/leistungsgebiete';
import {
  getServiceBySlug,
  getRegionServiceLinkText,
  type ServiceSlug,
} from '@/data/services';
import BreadcrumbSchemaRegionService from '@/components/BreadcrumbSchemaRegionService';
import ContactForm from '@/components/ContactForm';
import GoogleMapsSection from '@/components/GoogleMapsSection';

const baseUrl = 'https://pixelkraftwerk-ai.com';

/** Kurze Service-Beschreibungen für Region-Service-Seiten (1–2 Sätze). */
const SERVICE_INTROS: Record<ServiceSlug, string> = {
  'ki-chatbots':
    'Unsere digitale Kundenassistenz beantwortet Anfragen auf Ihrer Website und in Messengern – automatisch, zuverlässig und rund um die Uhr.',
  telefonassistenten:
    'Die telefonische Kundenassistenz nimmt Anrufe entgegen, beantwortet häufige Fragen und erfasst Anliegen professionell.',
  'termine-buchungen':
    'Intelligente Buchungssysteme verwalten Ihre Verfügbarkeiten, koordinieren Termine und bestätigen Kunden automatisch.',
  'crm-lead-management':
    'CRM und Lead-Management erfassen Anfragen, bewerten sie und leiten sie an die richtigen Ansprechpartner weiter.',
  'website-seo':
    'Moderne Websites mit SEO und optionaler Automatisierung – für mehr Sichtbarkeit und klare Außenwirkung.',
  'content-video':
    'Texte, Bilder und Videos mit KI – individuell auf Ihre Marke abgestimmt und schnell einsatzbereit.',
};

interface RegionServicePageProps {
  regionSlug: string;
  regionName: string;
  serviceSlug: ServiceSlug;
  serviceLabel: string;
}

/** Anzahl anderer Region-Service-Links (gleicher Service) auf der Seite – Plan: 4–6. */
const OTHER_REGION_SERVICE_LINKS = 6;

export default function RegionServicePage({
  regionSlug,
  regionName,
  serviceSlug,
  serviceLabel,
}: RegionServicePageProps) {
  const service = getServiceBySlug(serviceSlug);
  const globalServiceUrl = `/${serviceSlug}`;
  const regionUrl = `/leistungsgebiete/${regionSlug}`;
  const currentPageUrl = `${baseUrl}/leistungsgebiete/${regionSlug}/${serviceSlug}`;

  const otherRegions = LEISTUNGSGEBIETE_CITIES.filter((c) => c.slug !== regionSlug);
  const linksToShow = otherRegions.slice(0, OTHER_REGION_SERVICE_LINKS);

  return (
    <div className="bg-dark-500">
      <BreadcrumbSchemaRegionService
        regionName={regionName}
        regionUrl={regionUrl}
        serviceName={serviceLabel}
        serviceUrl={currentPageUrl}
      />

      <section className="relative pt-32 pb-24 bg-dark-500 overflow-hidden">
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto">
            <motion.p
              className="text-primary-500 font-heading font-bold text-sm mb-2"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
            >
              <a href="/leistungsgebiete" className="hover:underline">
                Leistungsgebiete
              </a>
              {' / '}
              <a href={regionUrl} className="hover:underline">
                {regionName}
              </a>
              {' / '}
              <span className="text-light-200">{serviceLabel}</span>
            </motion.p>
            <motion.h1
              className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-light-100 mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              {serviceLabel} in {regionName}
            </motion.h1>
            <motion.p
              className="text-xl text-light-200"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              Für Unternehmen in {regionName} und Umgebung: {SERVICE_INTROS[serviceSlug]}
            </motion.p>
          </div>
        </div>
      </section>

      <section className="py-16 bg-dark-400">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto prose prose-invert">
            <motion.p
              className="text-light-200 text-lg leading-relaxed mb-6"
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              Von unserem Sitz in Groitzsch aus betreuen wir Kunden in {regionName} und der gesamten Region – mit kurzen Wegen und individueller Beratung. Ob KI-Chatbots, Telefonassistenten, Terminbuchung, CRM, Websites oder Content: Wir passen die Lösung an Ihre Prozesse an.
            </motion.p>
            <ul className="space-y-2 text-light-200">
              <li className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-primary-500 flex-shrink-0" />
                Persönliche Beratung vor Ort oder per Video
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-primary-500 flex-shrink-0" />
                Individuelle Einrichtung auf Ihr Unternehmen
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-primary-500 flex-shrink-0" />
                Laufende Betreuung und Optimierung
              </li>
            </ul>
          </div>
        </div>
      </section>

      <section className="py-16 bg-dark-500">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl font-heading font-bold text-light-100 mb-6">
              Mehr zu {serviceLabel} und Leistungen in der Region
            </h2>
            <p className="text-light-200 mb-4">
              <a href={globalServiceUrl} className="text-primary-400 hover:underline font-heading font-bold">
                Mehr zu {serviceLabel} im Überblick
              </a>
              {' – '}
              alle Details zur Leistung auf unserer Service-Seite.
            </p>
            <p className="text-light-200 mb-4">
              <a href={regionUrl} className="text-primary-400 hover:underline">
                Alle Leistungen in {regionName}
              </a>
              {' – '}
              Übersicht unserer Angebote in Ihrer Region.
            </p>
            <p className="text-light-300 text-sm mb-4">
              {serviceLabel} in anderen Gebieten:
            </p>
            <ul className="flex flex-wrap gap-x-4 gap-y-2 text-sm">
              {linksToShow.map((city, i) => (
                <li key={city.slug}>
                  <a
                    href={`/leistungsgebiete/${city.slug}/${serviceSlug}`}
                    className="text-primary-400 hover:underline"
                  >
                    {getRegionServiceLinkText(serviceSlug, city.name, i)}
                  </a>
                </li>
              ))}
            </ul>
            <p className="mt-6">
              <a href="/leistungsgebiete" className="text-primary-400 hover:underline font-heading font-bold">
                Alle Leistungsgebiete
              </a>
              {' · '}
              <a href="/contact" className="text-primary-400 hover:underline">
                Kontakt
              </a>
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 bg-dark-400">
        <div className="container mx-auto px-4 text-center">
          <motion.p
            className="text-light-200 mb-6"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            <a href={regionUrl} className="text-primary-400 hover:underline">
              Leistungen in {regionName}
            </a>
            {' · '}
            <a href="/leistungsgebiete" className="text-primary-400 hover:underline">
              Alle Leistungsgebiete
            </a>
            {' · '}
            <a href="/contact" className="text-primary-400 hover:underline">
              Kontakt
            </a>
          </motion.p>
          <a
            href="/contact"
            className="inline-flex items-center px-8 py-4 bg-primary-500 text-dark-500 font-heading font-bold text-lg hover:bg-primary-400 transition-colors duration-300"
          >
            Kostenloses Erstgespräch anfragen
            <ArrowRight size={20} className="ml-2" />
          </a>
        </div>
      </section>

      <ContactForm />
      <GoogleMapsSection />
    </div>
  );
}
