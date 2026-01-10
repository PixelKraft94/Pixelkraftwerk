import React from 'react';
import { motion } from 'framer-motion';
import {
  MessageSquare,
  ArrowRight,
  CheckCircle,
  Clock,
  Users,
  Zap,
  Shield,
  HeadphonesIcon,
  Building2,
  Stethoscope,
  ShoppingBag,
  Briefcase,
  Phone
} from 'lucide-react';
import ContactForm from '../../components/ContactForm';
import SEOHead from '../../components/SEOHead';
import RelatedServices from '../../components/RelatedServices';

const KiChatbots: React.FC = () => {
  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  const problems = [
    'Website-Besucher verlassen Ihre Seite, ohne Kontakt aufzunehmen?',
    'Ihr Team beantwortet immer wieder dieselben Fragen per E-Mail oder Telefon?',
    'Potenzielle Kunden warten zu lange auf eine Antwort und wenden sich an die Konkurrenz?',
    'Ausserhalb der Geschaeftszeiten gehen wertvolle Anfragen verloren?'
  ];

  const processSteps = [
    {
      step: '01',
      title: 'Analyse Ihrer Kommunikation',
      description: 'Wir analysieren Ihre haeufigsten Kundenanfragen, Ihre Branche und Ihre spezifischen Anforderungen.'
    },
    {
      step: '02',
      title: 'Training des Chatbots',
      description: 'Der Chatbot wird mit Ihren Inhalten, FAQs und Unternehmensinfos trainiert und lernt Ihre Sprache.'
    },
    {
      step: '03',
      title: 'Integration in Ihre Website',
      description: 'Nahtlose Einbindung in Ihre Website mit passendem Design und optimaler Platzierung.'
    },
    {
      step: '04',
      title: 'Test und Optimierung',
      description: 'Gemeinsame Testphase mit kontinuierlicher Verbesserung basierend auf echten Gespraechen.'
    },
    {
      step: '05',
      title: 'Dauerhafter Betrieb',
      description: 'Ihr Chatbot arbeitet zuverlaessig rund um die Uhr - wir ueberwachen und optimieren fortlaufend.'
    }
  ];

  const benefits = [
    { icon: <Clock size={24} />, title: '24/7 Erreichbarkeit', text: 'Ihr Chatbot ist jederzeit ansprechbar - auch nachts, am Wochenende und an Feiertagen.' },
    { icon: <Zap size={24} />, title: 'Sofortige Reaktion', text: 'Besucher erhalten innerhalb von Sekunden qualifizierte Antworten auf ihre Fragen.' },
    { icon: <Users size={24} />, title: 'Entlastung des Teams', text: 'Bis zu 80% weniger Routineanfragen, die Ihr Team beantworten muss.' },
    { icon: <Shield size={24} />, title: 'Gleichbleibende Qualitaet', text: 'Jeder Besucher erhaelt dieselbe professionelle Betreuung - unabhaengig von Tageszeit oder Auslastung.' },
    { icon: <HeadphonesIcon size={24} />, title: 'Mehrsprachig moeglich', text: 'Bedienen Sie internationale Kunden in ihrer Muttersprache ohne zusaetzliches Personal.' },
    { icon: <MessageSquare size={24} />, title: 'Lernfaehiges System', text: 'Der Chatbot wird mit jeder Interaktion besser und passt sich Ihren Beduerfnissen an.' }
  ];

  const targetAudiences = [
    { icon: <Building2 size={28} />, title: 'Dienstleister & Agenturen', description: 'Fuer alle, die viele gleichartige Anfragen erhalten und schnelle Reaktionszeiten benoetigen.' },
    { icon: <Stethoscope size={28} />, title: 'Praxen & Kanzleien', description: 'Entlasten Sie Ihr Empfangsteam und bieten Sie Patienten/Mandanten rund um die Uhr Service.' },
    { icon: <ShoppingBag size={28} />, title: 'E-Commerce & Handel', description: 'Beantworten Sie Produktfragen, Lieferstatus und Rueckgabeanfragen automatisch.' },
    { icon: <Briefcase size={28} />, title: 'Handwerk & lokale Betriebe', description: 'Verpassen Sie keine Anfrage mehr und qualifizieren Sie Leads automatisch vor.' }
  ];

  const features = [
    'Automatische Begruessung von Website-Besuchern',
    'Beantwortung haeufiger Fragen (FAQs)',
    'Qualifizierung von Leads und Interessenten',
    'Direkte Terminbuchung im Chat',
    'Weiterleitung komplexer Anfragen an Ihr Team',
    'Erfassung von Kontaktdaten und Anliegen',
    'Integration mit Ihrem CRM-System',
    'Anpassbares Design passend zu Ihrer Marke',
    'Detaillierte Auswertungen und Chat-Protokolle',
    'Mehrsprachige Unterstuetzung'
  ];

  return (
    <div className="bg-dark-500">
      <SEOHead
        title="KI-Chatbots fuer Ihre Website"
        description="Intelligente Website-Chatbots fuer automatische Kundenbetreuung. Beantworten Sie Anfragen rund um die Uhr und entlasten Sie Ihr Team."
        keywords={['KI-Chatbot', 'Website Chatbot', 'Chatbot Unternehmen', 'Kundenservice Automatisierung', 'Live Chat KI']}
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
              <MessageSquare size={40} className="text-primary-500" strokeWidth={1.5} />
            </motion.div>

            <motion.h1
              className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-light-100 mb-6"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              KI-Chatbots
              <span className="block text-primary-500 mt-2">fuer Ihre Website</span>
            </motion.h1>

            <motion.p
              className="text-xl text-light-200 mb-8 max-w-3xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Digitale Assistenten, die Ihre Website-Besucher begruessen, Fragen beantworten
              und Leads qualifizieren - professionell, rund um die Uhr und ohne Ihr Team zu belasten.
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
              <strong>Dann ist ein KI-Chatbot genau die richtige Loesung fuer Sie.</strong>
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
                Was Ihr <span className="text-primary-500">Chatbot leistet</span>
              </h2>
              <p className="text-light-200 max-w-3xl mx-auto">
                Ein KI-Chatbot ist ein intelligentes System, das natuerliche Sprache versteht und
                Kundenanfragen selbststaendig beantwortet - direkt auf Ihrer Website.
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
                So entsteht <span className="text-primary-500">Ihr KI-Chatbot</span>
              </h2>
              <p className="text-light-200">
                Von der ersten Analyse bis zum laufenden Betrieb - unser bewaehrter Prozess.
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
                Ideal fuer <span className="text-primary-500">diese Branchen</span>
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
                <Phone size={24} className="text-primary-500 mr-4 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="text-lg font-heading font-bold text-light-100 mb-2">
                    Sie moechten auch telefonisch erreichbar sein?
                  </h3>
                  <p className="text-light-300 mb-4">
                    Ergaenzen Sie Ihren Website-Chatbot mit einem KI-Telefonassistenten und bieten Sie
                    Ihren Kunden auf allen Kanaelen professionellen Service.
                  </p>
                  <a
                    href="/telefonassistenten"
                    className="inline-flex items-center text-primary-500 font-heading font-bold hover:text-primary-400 transition-colors duration-200"
                  >
                    Mehr zu Telefonassistenten
                    <ArrowRight size={18} className="ml-2" />
                  </a>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <RelatedServices
        currentSlug="ki-chatbots"
        relatedSlugs={['telefonassistenten', 'termine-buchungen', 'crm-lead-management']}
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
              Bereit fuer <span className="text-primary-500">bessere Kundenbetreuung?</span>
            </motion.h2>
            <motion.p
              className="text-light-200 mb-8"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
            >
              Lassen Sie uns gemeinsam herausfinden, wie ein KI-Chatbot Ihr Unternehmen entlasten kann.
            </motion.p>
          </div>
        </div>
      </section>

      <ContactForm />
    </div>
  );
};

export default KiChatbots;
