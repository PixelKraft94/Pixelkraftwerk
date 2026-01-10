import React from 'react';
import { motion } from 'framer-motion';
import {
  Workflow,
  ArrowRight,
  CheckCircle,
  Link2,
  RefreshCw,
  Clock,
  AlertCircle,
  Database,
  Zap,
  Building2,
  ShoppingCart,
  Briefcase,
  Factory
} from 'lucide-react';
import ContactForm from '../../components/ContactForm';
import SEOHead from '../../components/SEOHead';
import RelatedServices from '../../components/RelatedServices';

const Automatisierungen: React.FC = () => {
  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  const problems = [
    'Sie übertragen Daten manuell zwischen verschiedenen Programmen?',
    'Informationen gehen verloren, weil Systeme nicht miteinander kommunizieren?',
    'Wiederkehrende Aufgaben fressen täglich wertvolle Arbeitszeit?',
    'Fehler durch manuelle Dateneingabe kosten Sie Geld und Nerven?'
  ];

  const processSteps = [
    {
      step: '01',
      title: 'Prozess-Analyse',
      description: 'Wir erfassen Ihre aktuellen Abläufe, identifizieren Medienbrüche und Automatisierungspotenziale.'
    },
    {
      step: '02',
      title: 'Automatisierungs-Konzept',
      description: 'Entwicklung einer Strategie, welche Prozesse wie verbunden und automatisiert werden.'
    },
    {
      step: '03',
      title: 'System-Integration',
      description: 'Technische Verbindung Ihrer bestehenden Tools und Systeme über APIs und Schnittstellen.'
    },
    {
      step: '04',
      title: 'Workflow-Aufbau',
      description: 'Einrichtung der automatischen Abläufe mit Triggern, Aktionen und Bedingungen.'
    },
    {
      step: '05',
      title: 'Test und Optimierung',
      description: 'Gründliche Tests aller Automatisierungen und Feinabstimmung für zuverlässigen Betrieb.'
    }
  ];

  const benefits = [
    { icon: <Clock size={24} />, title: 'Zeitersparnis', text: 'Automatisierte Prozesse arbeiten in Sekunden, wofür Menschen Stunden brauchen.' },
    { icon: <AlertCircle size={24} />, title: 'Weniger Fehler', text: 'Keine Tippfehler, keine vergessenen Schritte – Automatisierung ist zuverlässig.' },
    { icon: <Link2 size={24} />, title: 'Vernetzte Systeme', text: 'Alle Ihre Tools arbeiten zusammen und tauschen Daten automatisch aus.' },
    { icon: <RefreshCw size={24} />, title: 'Skalierbarkeit', text: 'Automatisierte Prozesse wachsen mit – ohne zusätzlichen Personalaufwand.' },
    { icon: <Database size={24} />, title: 'Datenkonsistenz', text: 'Informationen sind überall aktuell und identisch – keine Abweichungen mehr.' },
    { icon: <Zap size={24} />, title: 'Schnellere Reaktion', text: 'Automatische Benachrichtigungen und Aktionen in Echtzeit statt mit Verzögerung.' }
  ];

  const targetAudiences = [
    { icon: <Building2 size={28} />, title: 'Mittelständische Unternehmen', description: 'Abteilungsübergreifende Prozesse verbinden und Datensilos aufbrechen.' },
    { icon: <ShoppingCart size={28} />, title: 'E-Commerce & Online-Handel', description: 'Bestellungen, Lager, Versand und Kundenservice automatisch synchronisieren.' },
    { icon: <Briefcase size={28} />, title: 'Dienstleister & Agenturen', description: 'Projektmanagement, Zeiterfassung und Abrechnung automatisch verbinden.' },
    { icon: <Factory size={28} />, title: 'Produktion & Logistik', description: 'Lieferketten, Bestände und Aufträge nahtlos koordinieren.' }
  ];

  const automationExamples = [
    {
      title: 'Lead zu CRM',
      description: 'Neue Anfragen von der Website werden automatisch im CRM erfasst und dem Vertrieb zugewiesen.'
    },
    {
      title: 'Rechnungsversand',
      description: 'Nach Projektabschluss wird automatisch eine Rechnung erstellt und per E-Mail versendet.'
    },
    {
      title: 'Bestandswarnung',
      description: 'Bei niedrigem Lagerbestand wird automatisch eine Bestellung beim Lieferanten ausgelöst.'
    },
    {
      title: 'Onboarding-Prozess',
      description: 'Neue Kunden erhalten automatisch Willkommens-E-Mails, Zugangsdaten und Dokumentationen.'
    },
    {
      title: 'Report-Erstellung',
      description: 'Wöchentliche oder monatliche Reports werden automatisch generiert und verteilt.'
    },
    {
      title: 'Terminbestätigung',
      description: 'Gebuchte Termine lösen automatisch Kalendereinträge und Erinnerungen aus.'
    }
  ];

  const integrations = [
    'CRM-Systeme (HubSpot, Salesforce, Pipedrive)',
    'Buchhaltung (DATEV, Lexoffice, sevDesk)',
    'E-Mail-Marketing (Mailchimp, ActiveCampaign)',
    'Projektmanagement (Asana, Monday, Trello)',
    'Kommunikation (Slack, Teams, E-Mail)',
    'E-Commerce (Shopify, WooCommerce)',
    'Zahlungsanbieter (Stripe, PayPal)',
    'Cloud-Speicher (Google Drive, Dropbox)',
    'Terminplanung (Calendly, Google Calendar)',
    'Und viele weitere über APIs'
  ];

  return (
    <div className="bg-dark-500">
      <SEOHead
        title="Workflow-Automatisierung & Systemvernetzung"
        description="Prozessautomatisierung und Systemintegration für effizientere Abläufe. Wir verbinden Ihre Tools und automatisieren wiederkehrende Aufgaben."
        keywords={['Workflow Automatisierung', 'Prozessautomatisierung', 'Systemintegration', 'API Integration', 'Business Automatisierung']}
      />

      <section className="relative pt-32 pb-20 bg-dark-500 overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-20 left-10 w-72 h-72 bg-primary-500 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-primary-500 rounded-full blur-3xl"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              className="inline-flex items-center justify-center w-20 h-20 bg-primary-500/10 border border-primary-500/30 mb-8"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
            >
              <Workflow size={40} className="text-primary-500" strokeWidth={1.5} />
            </motion.div>

            <motion.h1
              className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-light-100 mb-6"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              Workflow-Automatisierung
              <span className="block text-primary-500 mt-2">& Systemvernetzung</span>
            </motion.h1>

            <motion.p
              className="text-xl text-light-200 mb-8 max-w-3xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Wir verbinden Ihre bestehenden Systeme zu durchgängigen Prozessen.
              Informationen fließen automatisch – ohne manuelle Übertragung, ohne Fehler.
            </motion.p>

            <motion.button
              onClick={scrollToContact}
              className="inline-flex items-center px-8 py-4 bg-primary-500 text-dark-500 font-heading font-bold text-lg hover:bg-primary-400 transition-colors duration-300"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <ArrowRight className="mr-2" size={24} />
              Automatisierungs-Beratung anfordern
            </motion.button>
          </div>
        </div>
      </section>

      <section className="py-20 bg-dark-400">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <motion.div
              className="text-center mb-12"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-2xl md:text-3xl font-heading font-bold text-light-100 mb-4">
                Kennen Sie <span className="text-primary-500">diese Probleme?</span>
              </h2>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {problems.map((problem, index) => (
                <motion.div
                  key={index}
                  className="flex items-start bg-dark-500 p-6 border border-dark-100"
                  initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <span className="text-primary-500 mr-4 mt-1 flex-shrink-0">?</span>
                  <p className="text-light-200">{problem}</p>
                </motion.div>
              ))}
            </div>

            <motion.p
              className="text-center text-light-100 mt-10 text-lg"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <strong>Workflow-Automatisierung löst diese Probleme dauerhaft.</strong>
            </motion.p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-dark-500">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <motion.div
              className="text-center mb-16"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-2xl md:text-3xl font-heading font-bold text-light-100 mb-4">
                Beispiele für <span className="text-primary-500">Automatisierungen</span>
              </h2>
              <p className="text-light-200 max-w-3xl mx-auto">
                Sehen Sie, welche Prozesse wir für unsere Kunden automatisiert haben.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {automationExamples.map((example, index) => (
                <motion.div
                  key={index}
                  className="bg-dark-400 p-6 border border-dark-100 hover:border-primary-500/50 transition-all duration-300"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <h3 className="text-lg font-heading font-bold text-primary-400 mb-3">{example.title}</h3>
                  <p className="text-light-300 text-sm">{example.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-dark-400">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <motion.div
              className="text-center mb-16"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-2xl md:text-3xl font-heading font-bold text-light-100 mb-4">
                So entstehen <span className="text-primary-500">Ihre Automatisierungen</span>
              </h2>
            </motion.div>

            <div className="space-y-6">
              {processSteps.map((step, index) => (
                <motion.div
                  key={index}
                  className="flex items-start bg-dark-500 p-6 border border-dark-100 hover:border-primary-500/50 transition-colors duration-300"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <span className="text-3xl font-heading font-bold text-primary-500 mr-6 flex-shrink-0">
                    {step.step}
                  </span>
                  <div>
                    <h3 className="text-lg font-heading font-bold text-light-100 mb-2">{step.title}</h3>
                    <p className="text-light-300">{step.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-dark-500">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <motion.div
              className="text-center mb-16"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-2xl md:text-3xl font-heading font-bold text-light-100 mb-4">
                Ihre <span className="text-primary-500">Vorteile</span>
              </h2>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={index}
                  className="bg-dark-400 p-6 border border-dark-100 hover:border-primary-500/50 transition-all duration-300"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -4 }}
                >
                  <div className="text-primary-500 mb-4">{benefit.icon}</div>
                  <h3 className="text-lg font-heading font-bold text-light-100 mb-2">{benefit.title}</h3>
                  <p className="text-light-300 text-sm">{benefit.text}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-dark-400">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <motion.div
              className="text-center mb-16"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-2xl md:text-3xl font-heading font-bold text-light-100 mb-4">
                Systeme, die wir <span className="text-primary-500">verbinden</span>
              </h2>
            </motion.div>

            <div className="bg-dark-500 p-8 border border-dark-100">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {integrations.map((integration, index) => (
                  <motion.div
                    key={index}
                    className="flex items-center"
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.05 }}
                    viewport={{ once: true }}
                  >
                    <CheckCircle className="text-primary-500 mr-3 flex-shrink-0" size={18} />
                    <span className="text-light-100">{integration}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-dark-500">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <motion.div
              className="text-center mb-16"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-2xl md:text-3xl font-heading font-bold text-light-100 mb-4">
                Ideal für <span className="text-primary-500">diese Unternehmen</span>
              </h2>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {targetAudiences.map((audience, index) => (
                <motion.div
                  key={index}
                  className="flex items-start bg-dark-400 p-6 border border-dark-100"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className="text-primary-500 mr-4 flex-shrink-0">{audience.icon}</div>
                  <div>
                    <h3 className="text-lg font-heading font-bold text-light-100 mb-2">{audience.title}</h3>
                    <p className="text-light-300 text-sm">{audience.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <RelatedServices
        currentSlug="automatisierungen"
        relatedSlugs={['ki-assistenten', 'crm-lead-management', 'termine-buchungen']}
      />

      <section className="py-20 bg-dark-500">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <motion.h2
              className="text-2xl md:text-3xl font-heading font-bold text-light-100 mb-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              Bereit für <span className="text-primary-500">automatisierte Prozesse?</span>
            </motion.h2>
            <motion.p
              className="text-light-200 mb-8"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
            >
              Lassen Sie uns gemeinsam herausfinden, welche Prozesse in Ihrem Unternehmen automatisiert werden können.
            </motion.p>
          </div>
        </div>
      </section>

      <ContactForm />
    </div>
  );
};

export default Automatisierungen;
