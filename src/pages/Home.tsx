import React from 'react';
import { motion } from 'framer-motion';
import { ChevronDown, CheckCircle, ArrowRight, Calendar, MessageCircle, Target, Workflow, Globe, Video } from 'lucide-react';
import { BackgroundPaths } from '../components/ui/background-paths';
import ContactForm from '../components/ContactForm';
import GoogleMapsSection from '../components/GoogleMapsSection';
import LocalBusinessSchema from '../components/LocalBusinessSchema';
import WebSiteSchema from '../components/WebSiteSchema';
import SEOHead from '../components/SEOHead';

const Home: React.FC = () => {
  const [openExample, setOpenExample] = React.useState<number | null>(null);

  const toggleExample = (index: number) => {
    setOpenExample(openExample === index ? null : index);
  };

  const scrollToContactForm = () => {
    const contactForm = document.getElementById('contact');
    if (contactForm) {
      contactForm.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToNextSection = () => {
    const nextSection = document.getElementById('problem-section');
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const practiceExamples = [
    {
      icon: <Calendar size={32} strokeWidth={1.5} />,
      title: "Termin-Handling",
      vorher: "E-Mail-Chaos, Doppelbuchungen, ständiges Nachfragen. Termine mussten manuell koordiniert werden, Erinnerungen wurden vergessen.",
      nachher: "Ein automatisiertes System erkennt freie Zeiten in Echtzeit, vergibt Termine selbstständig und versendet Bestätigungen sowie Erinnerungen per E-Mail oder SMS.",
      ergebnis: "Kein Koordinationsstress mehr. Keine verpassten Termine. Im Schnitt 10 Stunden Zeitersparnis pro Woche und ein deutlich ruhigerer Arbeitsalltag."
    },
    {
      icon: <MessageCircle size={32} strokeWidth={1.5} />,
      title: "Kundenkommunikation",
      vorher: "Täglich dieselben Fragen per Telefon, E-Mail oder vor Ort. Hoher Zeitverlust durch einfache, wiederkehrende Anfragen.",
      nachher: "Ein KI-gestützter Chatbot und Telefonassistent beantwortet bis zu 80 % aller Anfragen automatisch – 24/7.",
      ergebnis: "Ihr Team wird spürbar entlastet. Kunden erhalten sofort Antworten – ohne Wartezeit."
    },
    {
      icon: <Target size={32} strokeWidth={1.5} />,
      title: "Lead-Qualifizierung",
      vorher: "Jede Anfrage musste manuell geprüft werden. Wertvolle Kontakte gingen verloren oder wurden zu spät bearbeitet.",
      nachher: "Das System analysiert automatisch jede Anfrage und leitet nur qualifizierte Interessenten an den Vertrieb weiter.",
      ergebnis: "Der Vertrieb arbeitet effizienter. Mehr Abschlüsse bei weniger Zeitaufwand."
    },
    {
      icon: <Workflow size={32} strokeWidth={1.5} />,
      title: "Interne Abläufe",
      vorher: "Mehrfache Dateneingaben, Fehler, unnötige Doppelarbeit, unklare Zuständigkeiten.",
      nachher: "Alle Systeme sind intelligent miteinander verbunden. Informationen werden einmal erfasst und überall automatisch bereitgestellt.",
      ergebnis: "Reibungslose Abläufe, weniger Fehler, volle Transparenz."
    },
    {
      icon: <Globe size={32} strokeWidth={1.5} />,
      title: "Website-Erstellung",
      vorher: "Langsame Agenturprozesse, Wochen bis zur fertigen Website, keine Integration in bestehende Abläufe.",
      nachher: "Moderne, blitzschnelle Websites mit integrierten Chatbots, Terminbuchung, CRM-Anbindung und On-Site-SEO.",
      ergebnis: "Mehr Sichtbarkeit, mehr Anfragen, weniger Aufwand."
    },
    {
      icon: <Video size={32} strokeWidth={1.5} />,
      title: "KI-Videogenerierung",
      vorher: "Teure Produktionen, lange Wartezeiten, hoher Abstimmungsaufwand.",
      nachher: "Automatisierte Erstellung hochwertiger KI-Videos in Minuten – perfekt auf Marke und Zielgruppe abgestimmt.",
      ergebnis: "Mehr Reichweite, starke Markenwirkung, deutlich geringere Kosten."
    }
  ];

  const services = [
    "KI-Automatisierung von Geschäftsprozessen",
    "Automatisierte Kundenkommunikation",
    "Terminplanung & Buchungssysteme",
    "Lead-Management & CRM-Automatisierung",
    "Websites mit integrierter Automatisierung & SEO",
    "Content-Produktion & KI-Videos"
  ];

  return (
    <div className="bg-dark-500">
      <SEOHead
        title="KI-Automatisierung für Unternehmen"
        description="Wir automatisieren Unternehmen in Groitzsch, Leipzig und ganz Sachsen mit intelligenten KI-Systemen. Mehr Anfragen, klare Abläufe, weniger Stress."
        keywords={['KI Automatisierung', 'Prozessautomatisierung Leipzig', 'Chatbot', 'Terminbuchung automatisch', 'Lead Management']}
      />
      <LocalBusinessSchema pageType="homepage" />
      <WebSiteSchema />

      {/* HERO SECTION */}
      <section className="relative min-h-screen flex items-center justify-center bg-dark-500 overflow-hidden">
        <BackgroundPaths />

        <div className="container mx-auto px-4 z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="space-y-2 mb-8 -mt-8">
              <motion.span
                className="block text-3xl md:text-4xl lg:text-5xl text-light-100 font-heading"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1.2, ease: "easeOut", delay: 0.3 }}
              >
                Mehr Anfragen.
              </motion.span>
              <motion.span
                className="block text-3xl md:text-4xl lg:text-5xl text-light-100 font-heading"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1.2, ease: "easeOut", delay: 0.8 }}
              >
                Klare Abläufe.
              </motion.span>
              <motion.span
                className="block text-3xl md:text-4xl lg:text-5xl text-light-100 font-heading"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1.2, ease: "easeOut", delay: 1.3 }}
              >
                Weniger Stress.
              </motion.span>
            </h1>

            <motion.p
              className="block md:hidden text-lg text-light-200 mb-8 max-w-3xl mx-auto"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1.0, ease: "easeOut", delay: 2.2 }}
            >
              Wir automatisieren Unternehmen in <strong>Groitzsch</strong>, <strong>Leipzig</strong> und ganz <strong>Sachsen</strong> mit intelligenten KI-Systemen, die Kundenanfragen, Terminplanung und interne Prozesse selbstständig steuern.
            </motion.p>

            <motion.p
              className="hidden md:block text-xl text-light-200 mb-8 max-w-3xl mx-auto"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1.0, ease: "easeOut", delay: 2.2 }}
            >
              Wir automatisieren Unternehmen in <strong>Groitzsch</strong>, <strong>Leipzig</strong> und ganz <strong>Sachsen</strong> mit intelligenten KI-Systemen, die Kundenanfragen automatisch bearbeiten, Termine selbstständig koordinieren und interne Abläufe spürbar vereinfachen.
            </motion.p>

            <motion.div
              className="mt-6"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1.0, ease: "easeOut", delay: 2.2 }}
            >
              <button
                onClick={scrollToContactForm}
                className="inline-flex items-center px-8 py-3 bg-primary-500 text-dark-500 font-heading font-bold hover:bg-primary-400 transition-colors duration-300"
              >
                <ArrowRight className="mr-2" size={20} />
                Kostenloses Erstgespräch sichern
              </button>
            </motion.div>
          </div>
        </div>

        <motion.button
          onClick={scrollToNextSection}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-primary-500 hover:text-primary-400 transition-colors duration-300 animate-bounce"
          aria-label="Nach unten scrollen"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 2.8 }}
        >
          <ChevronDown size={32} />
        </motion.button>
      </section>

      {/* SERVICES HUB SECTION */}
      <section className="py-24 bg-dark-400">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <motion.div
              className="text-center mb-16"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-light-100 mb-4">
                Unsere <span className="text-primary-500">Leistungen</span>
              </h2>
              <p className="text-lg text-light-200 max-w-3xl mx-auto">
                Digitale Lösungen, die Ihr Unternehmen entlasten und Ihre Prozesse automatisieren.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
              <motion.a
                href="/ki-chatbots"
                className="group bg-dark-500 p-6 border border-dark-100 hover:border-primary-500/50 transition-all duration-300"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -4 }}
              >
                <div className="text-primary-500 mb-4">
                  <MessageCircle size={32} strokeWidth={1.5} />
                </div>
                <h3 className="text-xl font-heading font-bold text-light-100 mb-2 group-hover:text-primary-400 transition-colors duration-200">
                  KI-Chatbots
                </h3>
                <p className="text-light-300 text-sm mb-4">
                  Intelligente Chatbots für Ihre Website. Automatische Kundenbetreuung rund um die Uhr.
                </p>
                <div className="flex items-center text-primary-500 text-sm font-heading font-bold group-hover:text-primary-400 transition-colors duration-200">
                  Mehr erfahren
                  <ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform duration-200" />
                </div>
              </motion.a>

              <motion.a
                href="/telefonassistenten"
                className="group bg-dark-500 p-6 border border-dark-100 hover:border-primary-500/50 transition-all duration-300"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                viewport={{ once: true }}
                whileHover={{ y: -4 }}
              >
                <div className="text-primary-500 mb-4">
                  <Workflow size={32} strokeWidth={1.5} />
                </div>
                <h3 className="text-xl font-heading font-bold text-light-100 mb-2 group-hover:text-primary-400 transition-colors duration-200">
                  KI-Telefonassistenten
                </h3>
                <p className="text-light-300 text-sm mb-4">
                  Automatische Anrufannahme und professionelle Kundenbetreuung am Telefon.
                </p>
                <div className="flex items-center text-primary-500 text-sm font-heading font-bold group-hover:text-primary-400 transition-colors duration-200">
                  Mehr erfahren
                  <ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform duration-200" />
                </div>
              </motion.a>

              <motion.a
                href="/termine-buchungen"
                className="group bg-dark-500 p-6 border border-dark-100 hover:border-primary-500/50 transition-all duration-300"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                viewport={{ once: true }}
                whileHover={{ y: -4 }}
              >
                <div className="text-primary-500 mb-4">
                  <Calendar size={32} strokeWidth={1.5} />
                </div>
                <h3 className="text-xl font-heading font-bold text-light-100 mb-2 group-hover:text-primary-400 transition-colors duration-200">
                  Terminplanung & Buchungen
                </h3>
                <p className="text-light-300 text-sm mb-4">
                  Online-Terminbuchung mit automatischer Kalenderplanung und Erinnerungen.
                </p>
                <div className="flex items-center text-primary-500 text-sm font-heading font-bold group-hover:text-primary-400 transition-colors duration-200">
                  Mehr erfahren
                  <ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform duration-200" />
                </div>
              </motion.a>

              <motion.a
                href="/crm-lead-management"
                className="group bg-dark-500 p-6 border border-dark-100 hover:border-primary-500/50 transition-all duration-300"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                viewport={{ once: true }}
                whileHover={{ y: -4 }}
              >
                <div className="text-primary-500 mb-4">
                  <Target size={32} strokeWidth={1.5} />
                </div>
                <h3 className="text-xl font-heading font-bold text-light-100 mb-2 group-hover:text-primary-400 transition-colors duration-200">
                  CRM & Lead-Management
                </h3>
                <p className="text-light-300 text-sm mb-4">
                  Strukturierte Kundenverwaltung mit automatischer Lead-Erfassung und Follow-ups.
                </p>
                <div className="flex items-center text-primary-500 text-sm font-heading font-bold group-hover:text-primary-400 transition-colors duration-200">
                  Mehr erfahren
                  <ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform duration-200" />
                </div>
              </motion.a>

              <motion.a
                href="/website-seo"
                className="group bg-dark-500 p-6 border border-dark-100 hover:border-primary-500/50 transition-all duration-300"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.5 }}
                viewport={{ once: true }}
                whileHover={{ y: -4 }}
              >
                <div className="text-primary-500 mb-4">
                  <Globe size={32} strokeWidth={1.5} />
                </div>
                <h3 className="text-xl font-heading font-bold text-light-100 mb-2 group-hover:text-primary-400 transition-colors duration-200">
                  Website & SEO
                </h3>
                <p className="text-light-300 text-sm mb-4">
                  Moderne Websites mit Suchmaschinenoptimierung für mehr Sichtbarkeit.
                </p>
                <div className="flex items-center text-primary-500 text-sm font-heading font-bold group-hover:text-primary-400 transition-colors duration-200">
                  Mehr erfahren
                  <ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform duration-200" />
                </div>
              </motion.a>

              <motion.a
                href="/content-video"
                className="group bg-dark-500 p-6 border border-dark-100 hover:border-primary-500/50 transition-all duration-300"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.6 }}
                viewport={{ once: true }}
                whileHover={{ y: -4 }}
              >
                <div className="text-primary-500 mb-4">
                  <Video size={32} strokeWidth={1.5} />
                </div>
                <h3 className="text-xl font-heading font-bold text-light-100 mb-2 group-hover:text-primary-400 transition-colors duration-200">
                  Content & KI-Videos
                </h3>
                <p className="text-light-300 text-sm mb-4">
                  Professionelle Content-Produktion mit moderner KI-Technologie.
                </p>
                <div className="flex items-center text-primary-500 text-sm font-heading font-bold group-hover:text-primary-400 transition-colors duration-200">
                  Mehr erfahren
                  <ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform duration-200" />
                </div>
              </motion.a>
            </div>

            <motion.div
              className="text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.7 }}
              viewport={{ once: true }}
            >
              <a
                href="/services"
                className="inline-flex items-center px-8 py-4 bg-dark-500 border-2 border-primary-500 text-primary-500 font-heading font-bold text-lg hover:bg-primary-500 hover:text-dark-500 transition-all duration-300"
              >
                Alle Leistungen im Detail
                <ArrowRight className="ml-2" size={24} />
              </a>
            </motion.div>
          </div>
        </div>
      </section>

      {/* PROBLEM SECTION */}
      <section id="problem-section" className="py-32 bg-dark-400">
        <div className="container mx-auto px-6 md:px-12">
          <div className="max-w-4xl mx-auto">
            <motion.div
              className="text-center"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-heading font-bold mb-12 text-light-100">
                Der Alltag vieler Unternehmen sieht <span className="text-primary-500">heute so aus:</span>
              </h2>

              <div className="space-y-4 text-left max-w-2xl mx-auto mb-12">
                {[
                  "Unregelmäßige Kundenanfragen.",
                  "Ständiges Hin- und Her bei der Terminabstimmung.",
                  "E-Mails, Telefon und Rückfragen unterbrechen permanent den Arbeitsfluss.",
                  "Zu viele Aufgaben hängen direkt am Inhaber.",
                  "Marketing und Organisation fühlen sich chaotisch und unübersichtlich an."
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    className="flex items-start"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <span className="text-red-400 mr-3 mt-1 flex-shrink-0">-</span>
                    <p className="text-light-200 text-lg">{item}</p>
                  </motion.div>
                ))}
              </div>

              <motion.p
                className="text-xl md:text-2xl text-light-100 font-bold"
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.5 }}
                viewport={{ once: true }}
              >
                Das kostet <span className="text-red-400">Zeit, Geld und Nerven.</span>
              </motion.p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FUTURE SECTION */}
      <section className="py-32 bg-dark-500">
        <div className="container mx-auto px-6 md:px-12">
          <div className="max-w-4xl mx-auto">
            <motion.div
              className="text-center"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-heading font-bold mb-12 text-light-100">
                So arbeitet ein <span className="text-primary-500">sauber automatisierter</span> Betrieb:
              </h2>

              <div className="space-y-4 text-left max-w-2xl mx-auto">
                {[
                  "Kundenanfragen werden automatisch entgegengenommen und beantwortet.",
                  "Termine werden ohne manuelles Eingreifen gebucht, bestätigt und erinnert.",
                  "Mitarbeiter arbeiten mit klaren, verlässlichen Abläufen.",
                  "Der Betrieb läuft ruhiger, strukturierter und planbarer.",
                  "Der Inhaber gewinnt Zeit, Kontrolle und Fokus auf das Kerngeschäft zurück."
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    className="flex items-start"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <CheckCircle className="text-primary-500 mr-3 mt-1 flex-shrink-0" size={20} />
                    <p className="text-light-200 text-lg">{item}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* POSITIONING SECTION */}
      <section className="py-32 bg-dark-400">
        <div className="container mx-auto px-6 md:px-12">
          <div className="max-w-3xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <p className="text-lg md:text-xl text-light-200 leading-relaxed mb-6">
                Wir entwickeln individuelle KI-Automatisierungssysteme, die exakt an die Abläufe Ihres Unternehmens angepasst werden.
              </p>
              <p className="text-lg md:text-xl text-light-100 font-bold leading-relaxed">
                Nicht theoretisch – sondern so, dass sie im Alltag funktionieren, entlasten und messbare Ergebnisse liefern.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* PRACTICE EXAMPLES SECTION */}
      <section className="py-32 bg-dark-500">
        <div className="container mx-auto px-6 md:px-12">
          <div className="max-w-4xl mx-auto">
            <motion.h2
              className="text-3xl md:text-4xl font-heading font-bold mb-16 text-light-100 text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <span className="text-primary-500">Praxisbeispiele</span>
            </motion.h2>

            <div className="space-y-3">
              {practiceExamples.map((example, index) => (
                <motion.div
                  key={index}
                  className="group"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.05 }}
                  viewport={{ once: true }}
                >
                  <motion.button
                    onClick={() => toggleExample(index)}
                    className="w-full flex items-center justify-between py-5 text-left border-b border-dark-100 hover:border-primary-500/50 transition-all duration-300"
                    whileHover={{ x: 8 }}
                  >
                    <span className="text-lg font-heading font-bold text-light-100 flex items-center">
                      <motion.div
                        animate={{ rotate: openExample === index ? 180 : 0 }}
                        transition={{ duration: 0.3 }}
                        className="mr-4"
                      >
                        <ChevronDown className="text-primary-500" size={24} />
                      </motion.div>
                      <span className="text-primary-500 mr-3">{example.icon}</span>
                      {example.title}
                    </span>
                  </motion.button>
                  <motion.div
                    initial={false}
                    animate={{
                      height: openExample === index ? 'auto' : 0,
                      opacity: openExample === index ? 1 : 0
                    }}
                    transition={{ duration: 0.3, ease: 'easeInOut' }}
                    className="overflow-hidden"
                  >
                    <div className="py-6 pl-12 space-y-6">
                      <div>
                        <p className="text-light-100 font-bold mb-2 text-base">Vorher:</p>
                        <p className="text-light-200 text-sm leading-relaxed">{example.vorher}</p>
                      </div>
                      <div>
                        <p className="text-light-100 font-bold mb-2 text-base">Nachher:</p>
                        <p className="text-light-200 text-sm leading-relaxed">{example.nachher}</p>
                      </div>
                      <div>
                        <p className="text-light-100 font-bold mb-2 text-base">Ergebnis:</p>
                        <p className="text-light-100 font-bold border-l-4 border-primary-500 pl-3 text-sm leading-relaxed">{example.ergebnis}</p>
                      </div>
                    </div>
                  </motion.div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES SECTION */}
      <section className="py-32 bg-dark-400">
        <div className="container mx-auto px-6 md:px-12">
          <div className="max-w-4xl mx-auto">
            <motion.h2
              className="text-3xl md:text-4xl font-heading font-bold mb-16 text-light-100 text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              Was wir <span className="text-primary-500">konkret umsetzen</span>
            </motion.h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {services.map((service, index) => (
                <motion.div
                  key={index}
                  className="flex items-center bg-dark-500 p-5 border border-dark-100 hover:border-primary-500/50 transition-all duration-300"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ x: 8 }}
                >
                  <CheckCircle className="text-primary-500 mr-4 flex-shrink-0" size={24} />
                  <p className="text-light-100 font-heading font-bold">{service}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* REGION SEO SECTION */}
      <section className="py-32 bg-dark-500">
        <div className="container mx-auto px-6 md:px-12">
          <div className="max-w-4xl mx-auto text-center">
            <motion.h2
              className="text-3xl md:text-4xl font-heading font-bold mb-10 text-light-100"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <span className="text-primary-500">KI-Automatisierung</span> aus Groitzsch – für Unternehmen in <span className="text-primary-500">Leipzig</span>, <span className="text-primary-500">Sachsen</span> & ganz <span className="text-primary-500">Deutschland</span>
            </motion.h2>

            <motion.p
              className="text-lg text-light-200 leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              Von unserem Standort in Groitzsch betreuen wir Unternehmen in Leipzig, ganz Sachsen und deutschlandweit. Wir verbinden regionale Nähe mit moderner KI-Technologie und entwickeln individuelle Automatisierungslösungen für nachhaltiges Wachstum.
            </motion.p>

            <motion.div
              className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-12"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <div className="bg-dark-400 p-5 border border-dark-100">
                <p className="text-primary-500 font-bold mb-1">Groitzsch</p>
                <p className="text-light-300 text-sm">Hauptsitz</p>
              </div>
              <div className="bg-dark-400 p-5 border border-dark-100">
                <p className="text-primary-500 font-bold mb-1">Leipzig</p>
                <p className="text-light-300 text-sm">Metropolregion</p>
              </div>
              <div className="bg-dark-400 p-5 border border-dark-100">
                <p className="text-primary-500 font-bold mb-1">Sachsen</p>
                <p className="text-light-300 text-sm">Regional</p>
              </div>
              <div className="bg-dark-400 p-5 border border-dark-100">
                <p className="text-primary-500 font-bold mb-1">Deutschland</p>
                <p className="text-light-300 text-sm">Bundesweit</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* PROCESS SECTION */}
      <section className="py-32 bg-dark-400">
        <div className="container mx-auto px-6 md:px-12">
          <div className="max-w-4xl mx-auto">
            <motion.h2
              className="text-3xl md:text-4xl font-heading font-bold mb-20 text-light-100 text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              Unser <span className="text-primary-500">Prozess</span>
            </motion.h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
              {[
                { num: "01", title: "Erstgespräch", desc: "Ziele & Potenziale klären" },
                { num: "02", title: "Planung", desc: "Individuelles Konzept entwickeln" },
                { num: "03", title: "Umsetzung", desc: "Saubere technische Integration" },
                { num: "04", title: "Support", desc: "Langfristige Betreuung" }
              ].map((step, index) => (
                <motion.div
                  key={index}
                  className="group"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <motion.div
                    whileHover={{ y: -8 }}
                    transition={{ duration: 0.3 }}
                    className="h-full"
                  >
                    <div className="text-primary-500 mb-5 group-hover:scale-110 transition-transform duration-300">
                      <div className="text-5xl font-heading font-bold mb-2">{step.num}</div>
                      <div className="h-1 w-16 bg-primary-500"></div>
                    </div>
                    <h3 className="text-xl font-heading font-bold text-light-100 mb-3">
                      {step.title}
                    </h3>
                    <p className="text-light-200 text-base leading-relaxed">
                      {step.desc}
                    </p>
                  </motion.div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* SOCIAL PROOF SECTION */}
      <section className="py-32 bg-dark-500">
        <div className="container mx-auto px-6 md:px-12">
          <div className="max-w-4xl mx-auto">
            <motion.h2
              className="text-3xl md:text-4xl font-heading font-bold mb-16 text-light-100 text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <span className="text-primary-500">Das sagen unsere Kunden</span>
            </motion.h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                `„Seit der Automatisierung sparen wir jede Woche mehrere Stunden Zeit."`,
                `„Die Terminplanung läuft jetzt vollständig ohne Chaos."`,
                `„Unser Team ist deutlich entlastet."`
              ].map((quote, index) => (
                <motion.blockquote
                  key={index}
                  className="border-l-4 border-primary-500 pl-6 py-4"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ x: 8 }}
                >
                  <p className="text-light-200 text-base italic leading-relaxed">{quote}</p>
                </motion.blockquote>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FINAL CTA SECTION */}
      <section className="py-32 bg-dark-400">
        <div className="container mx-auto px-6 md:px-12">
          <div className="max-w-3xl mx-auto text-center">
            <motion.h2
              className="text-3xl md:text-4xl font-heading font-bold mb-10 text-light-100"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              Lassen Sie uns Ihren Betrieb <span className="text-primary-500">automatisieren.</span>
            </motion.h2>

            <motion.button
              onClick={scrollToContactForm}
              className="inline-flex items-center px-10 py-4 bg-primary-500 text-dark-500 font-heading font-bold text-lg hover:bg-primary-400 hover:scale-105 transition-all duration-300"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05 }}
            >
              <ArrowRight className="mr-2" size={24} />
              Kostenloses Erstgespräch
            </motion.button>
          </div>
        </div>
      </section>

      {/* CONTACT FORM */}
      <ContactForm />

      {/* GOOGLE MAPS */}
      <GoogleMapsSection />
    </div>
  );
};

export default Home;
