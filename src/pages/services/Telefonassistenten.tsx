import React from 'react';
import { motion } from 'framer-motion';
import {
  Phone,
  ArrowRight,
  CheckCircle,
  Clock,
  Users,
  Shield,
  HeadphonesIcon,
  Building2,
  Stethoscope,
  ShoppingBag,
  Briefcase,
  MessageSquare,
  PhoneCall,
  PhoneForwarded
} from 'lucide-react';
import ContactForm from '../../components/ContactForm';
import GoogleMapsSection from '../../components/GoogleMapsSection';
import SEOHead from '../../components/SEOHead';
import RelatedServices from '../../components/RelatedServices';
import BreadcrumbSchema from '../../components/BreadcrumbSchema';

const Telefonassistenten: React.FC = () => {
  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  const problems = [
    'Verpasste Anrufe kosten Sie regelmäßig potenzielle Aufträge?',
    'Ihr Team wird ständig durch Telefonanrufe bei der Arbeit unterbrochen?',
    'Außerhalb der Geschäftszeiten sind Sie telefonisch nicht erreichbar?',
    'Die Qualität der Anrufannahme schwankt je nach Auslastung?'
  ];

  const processSteps = [
    {
      step: '01',
      title: 'Analyse Ihrer Telefonie',
      description: 'Wir analysieren Ihre häufigsten Anrufgründe, Ihre Branche und Ihre spezifischen Anforderungen.'
    },
    {
      step: '02',
      title: 'Training des Assistenten',
      description: 'Der Telefonassistent wird mit Ihren Inhalten, FAQs und Unternehmensinfos trainiert.'
    },
    {
      step: '03',
      title: 'Eigene Rufnummer einrichten',
      description: 'Sie erhalten eine dedizierte Telefonnummer für Ihren Assistenten, die Sie flexibel einsetzen können.'
    },
    {
      step: '04',
      title: 'Test und Optimierung',
      description: 'Gemeinsame Testphase mit kontinuierlicher Verbesserung basierend auf echten Gesprächen.'
    },
    {
      step: '05',
      title: 'Dauerhafter Betrieb',
      description: 'Ihr Telefonassistent arbeitet zuverlässig rund um die Uhr – wir überwachen und optimieren fortlaufend.'
    }
  ];

  const benefits = [
    { icon: <Clock size={24} />, title: '24/7 Erreichbarkeit', text: 'Ihr Unternehmen ist jederzeit telefonisch erreichbar – auch nachts, am Wochenende und an Feiertagen.' },
    { icon: <PhoneCall size={24} />, title: 'Keine verpassten Anrufe', text: 'Jeder Anruf wird angenommen und professionell bearbeitet – kein Kunde hört mehr das Besetztzeichen.' },
    { icon: <Users size={24} />, title: 'Entlastung des Teams', text: 'Ihr Team kann konzentriert arbeiten, während der Assistent Routineanrufe bearbeitet.' },
    { icon: <Shield size={24} />, title: 'Gleichbleibende Qualität', text: 'Jeder Anrufer erhält dieselbe professionelle Betreuung – unabhängig von Tageszeit oder Auslastung.' },
    { icon: <PhoneForwarded size={24} />, title: 'Intelligente Weiterleitung', text: 'Dringende Anrufe werden sofort an die richtige Person weitergeleitet.' },
    { icon: <HeadphonesIcon size={24} />, title: 'Natürliche Gespräche', text: 'Moderne Sprachverarbeitung ermöglicht natürliche, flüssige Gespräche.' }
  ];

  const targetAudiences = [
    { icon: <Building2 size={28} />, title: 'Dienstleister & Agenturen', description: 'Für alle, die viele gleichartige Anrufe erhalten und schnelle Reaktionszeiten benötigen.' },
    { icon: <Stethoscope size={28} />, title: 'Praxen & Kanzleien', description: 'Entlasten Sie Ihr Empfangsteam und bieten Sie Patienten/Mandanten rund um die Uhr Service.' },
    { icon: <ShoppingBag size={28} />, title: 'E-Commerce & Handel', description: 'Beantworten Sie Bestellstatus, Lieferfragen und Reklamationen automatisch.' },
    { icon: <Briefcase size={28} />, title: 'Handwerk & lokale Betriebe', description: 'Verpassen Sie keine Anfrage mehr und qualifizieren Sie Leads automatisch vor.' }
  ];

  const features = [
    'Eingehende Anrufe annehmen',
    'Ausgehende Anrufe tätigen',
    'Natürliche Sprachverarbeitung und Sprachausgabe',
    'Beantwortung häufiger Fragen',
    'Terminvereinbarung und Kalenderintegration',
    'Erfassung von Rückrufwünschen',
    'Mehrsprachige Unterstützung',
    'Integration mit Ihrem CRM-System'
  ];

  return (
    <div className="bg-dark-500">
      <SEOHead
        title="KI-Telefonassistenten"
        description="Intelligente Telefonassistenten für automatische Anrufannahme. Nie wieder verpasste Anrufe – professioneller Service rund um die Uhr."
        keywords={['Telefonassistent KI', 'Automatische Anrufannahme', 'KI Telefon', 'Virtuelle Telefonzentrale', 'Telefon Automatisierung']}
      />
      <BreadcrumbSchema serviceName="KI-Telefonassistenten" serviceUrl="https://pixelkraftwerk-ai.com/telefonassistenten" />

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
              <Phone size={40} className="text-primary-500" strokeWidth={1.5} />
            </motion.div>

            <motion.h1
              className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-light-100 mb-6"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              KI-Telefonassistenten
              <span className="block text-primary-500 mt-2">für Ihr Unternehmen</span>
            </motion.h1>

            <motion.p
              className="text-xl text-light-200 mb-8 max-w-3xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              KI-Systeme, die Anrufe entgegennehmen und tätigen, Anliegen verstehen und professionell bearbeiten – Dank künstlicher Intelligenz mit natürlicher Sprachausgabe und rund um die Uhr verfügbar.
            </motion.p>

            <motion.button
              onClick={scrollToContact}
              className="inline-flex items-center px-8 py-4 bg-primary-500 text-dark-500 font-heading font-bold text-lg hover:bg-primary-400 transition-colors duration-300"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <ArrowRight className="mr-2" size={24} />
              Kostenlose Beratung anfordern
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
                Kennen Sie <span className="text-primary-500">diese Situation?</span>
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
              <strong>Dann ist ein KI-Telefonassistent genau die richtige Lösung für Sie.</strong>
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
                Was Ihr <span className="text-primary-500">Telefonassistent leistet</span>
              </h2>
              <p className="text-light-200 max-w-3xl mx-auto">
                Ein KI-Telefonassistent ist ein intelligentes System, das natürliche Sprache versteht,
                Kundenanfragen selbstständig beantwortet und auch ausgehende Anrufe für Sie tätigt.
              </p>
            </motion.div>

            <div className="bg-dark-400 p-8 border border-dark-100">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {features.map((feature, index) => (
                  <motion.div
                    key={index}
                    className="flex items-center"
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.05 }}
                    viewport={{ once: true }}
                  >
                    <CheckCircle className="text-primary-500 mr-3 flex-shrink-0" size={18} />
                    <span className="text-light-100">{feature}</span>
                  </motion.div>
                ))}
              </div>
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
                So entsteht <span className="text-primary-500">Ihr Telefonassistent</span>
              </h2>
              <p className="text-light-200">
                Von der ersten Analyse bis zum laufenden Betrieb – unser bewährter Prozess.
              </p>
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
                Ideal für <span className="text-primary-500">diese Branchen</span>
              </h2>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {targetAudiences.map((audience, index) => (
                <motion.div
                  key={index}
                  className="flex items-start bg-dark-500 p-6 border border-dark-100"
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

      <section className="py-16 bg-dark-500">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <motion.div
              className="bg-dark-400 border border-primary-500/30 p-8"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="flex items-start">
                <MessageSquare size={24} className="text-primary-500 mr-4 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="text-lg font-heading font-bold text-light-100 mb-2">
                    Sie möchten auch auf Ihrer Website erreichbar sein?
                  </h3>
                  <p className="text-light-300 mb-4">
                    Ergänzen Sie Ihren Telefonassistenten mit einem KI-Chatbot und bieten Sie
                    Ihren Kunden auf allen Kanälen professionellen Service.
                  </p>
                  <a
                    href="/ki-chatbots"
                    className="inline-flex items-center text-primary-500 font-heading font-bold hover:text-primary-400 transition-colors duration-200"
                  >
                    Mehr zu KI-Chatbots
                    <ArrowRight size={18} className="ml-2" />
                  </a>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <RelatedServices
        currentSlug="telefonassistenten"
        relatedSlugs={['ki-chatbots', 'termine-buchungen', 'crm-lead-management']}
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
              Bereit für <span className="text-primary-500">professionelle Anrufannahme?</span>
            </motion.h2>
            <motion.p
              className="text-light-200 mb-8"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
            >
              Lassen Sie uns gemeinsam herausfinden, wie ein Telefonassistent Ihr Unternehmen entlasten kann.
            </motion.p>
          </div>
        </div>
      </section>

      <ContactForm />

      <GoogleMapsSection />
    </div>
  );
};

export default Telefonassistenten;
