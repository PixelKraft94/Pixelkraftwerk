import React from 'react';
import { motion } from 'framer-motion';
import { ChevronDown, Clock, CheckCircle, Users, Globe, ArrowRight, MessageCircle, Calendar, BarChart, Target, Phone, Workflow, TrendingUp, Video } from 'lucide-react';
import { BackgroundPaths } from '../components/ui/background-paths';
import ContactForm from '../components/ContactForm';

const Home: React.FC = () => {
  const [openAccordion, setOpenAccordion] = React.useState<number | null>(null);

  const toggleAccordion = (index: number) => {
    setOpenAccordion(openAccordion === index ? null : index);
  };

  const scrollToContactForm = () => {
    const contactForm = document.getElementById('contact');
    if (contactForm) {
      contactForm.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToNextSection = () => {
    const nextSection = document.getElementById('problems-section');
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="bg-dark-500">
      {/* HERO SECTION */}
      <section className="relative min-h-screen flex items-center justify-center bg-dark-500 overflow-hidden">
        <BackgroundPaths />
        
        <div className="container mx-auto px-4 z-10">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div className="space-y-2 mb-8 -mt-8">
              <motion.h1
                className="text-3xl md:text-4xl lg:text-5xl text-light-100 font-heading"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1.2, ease: "easeOut", delay: 0.3 }}
              >
                Abläufe automatisieren.
              </motion.h1>
              <motion.h1
                className="text-3xl md:text-4xl lg:text-5xl text-light-100 font-heading"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1.2, ease: "easeOut", delay: 0.8 }}
              >
                Prozesse vereinfachen.
              </motion.h1>
              <motion.h1
                className="text-3xl md:text-4xl lg:text-5xl text-light-100 font-heading"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1.2, ease: "easeOut", delay: 1.3 }}
              >
                Zeit gewinnen.
              </motion.h1>
            </motion.div>

            <motion.p
              className="text-lg md:text-xl text-light-200 mb-8"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1.0, ease: "easeOut", delay: 2.2 }}
            >
              Pixel Kraftwerk automatisiert Ihre Abläufe – damit Sie mehr Zeit fürs Wesentliche haben.
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
      </section>

      {/* PROBLEMS SECTION */}
      <section id="problems-section" className="py-40 bg-dark-500">
        <div className="container mx-auto px-6 md:px-12">
          <div className="max-w-4xl mx-auto">
            <motion.div
              className="text-center mb-28"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-heading font-bold mb-8 text-light-100">
                Jeden Tag dieselben Aufgaben.<br />
                Jeden Tag <span className="text-primary-500">verlorene Zeit.</span>
              </h2>

              <p className="text-lg text-light-200 leading-relaxed max-w-2xl mx-auto">
                Viele Unternehmen verschwenden wertvolle Stunden mit Routinearbeit –
                E-Mails beantworten, Termine abgleichen, Leads prüfen oder Tabellen pflegen.
              </p>
            </motion.div>

            <motion.div
              className="grid grid-cols-1 md:grid-cols-3 gap-16 mb-28"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <motion.div
                className="text-center"
                whileHover={{ y: -8 }}
                transition={{ duration: 0.3 }}
              >
                <div className="inline-flex items-center justify-center w-16 h-16 mb-6 text-red-400">
                  <Clock size={42} />
                </div>
                <h3 className="text-xl font-heading font-bold text-light-100 mb-3">Stress</h3>
                <p className="text-light-200 text-sm">Ständige Unterbrechungen und Zeitdruck</p>
              </motion.div>

              <motion.div
                className="text-center"
                whileHover={{ y: -8 }}
                transition={{ duration: 0.3 }}
              >
                <div className="inline-flex items-center justify-center w-16 h-16 mb-6 text-red-400">
                  <Target size={42} />
                </div>
                <h3 className="text-xl font-heading font-bold text-light-100 mb-3">Fehler</h3>
                <p className="text-light-200 text-sm">Manuelle Prozesse führen zu Problemen</p>
              </motion.div>

              <motion.div
                className="text-center"
                whileHover={{ y: -8 }}
                transition={{ duration: 0.3 }}
              >
                <div className="inline-flex items-center justify-center w-16 h-16 mb-6 text-red-400">
                  <TrendingUp size={42} className="rotate-180" />
                </div>
                <h3 className="text-xl font-heading font-bold text-light-100 mb-3">Zeitverlust</h3>
                <p className="text-light-200 text-sm">Weniger Fokus auf das Wesentliche</p>
              </motion.div>
            </motion.div>

            <motion.div
              className="text-center"
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <p className="text-xl text-light-100 font-bold mb-4">
                Das Ergebnis?
              </p>
              <p className="text-lg text-light-200 max-w-xl mx-auto">
                Weniger Fokus auf das, was Ihr Geschäft wirklich voranbringt.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* UNSERE LÖSUNGEN SECTION */}
      <section className="py-40 bg-dark-400">
        <div className="container mx-auto px-6 md:px-12">
          <div className="max-w-5xl mx-auto">
            <motion.div
              className="text-center mb-32"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-heading font-bold mb-10 text-light-100">
                Unsere <span className="text-primary-500">Lösungen</span>
              </h2>

              <div className="space-y-5 max-w-2xl mx-auto">
                <p className="text-lg text-light-200 leading-relaxed">
                  Wie viele Aufgaben werden in Ihrem Unternehmen noch per Hand erledigt?
                </p>
                <p className="text-lg text-light-200 leading-relaxed">
                  Viele Teams verschwenden täglich Stunden mit Routinearbeiten – weil Terminbuchung, Kommunikation und interne Abläufe noch manuell laufen.
                </p>
                <p className="text-xl text-light-100 font-bold mt-8">
                  Wir ändern das.
                </p>
              </div>
            </motion.div>

            <motion.h3
              className="text-2xl md:text-3xl font-heading font-bold mb-20 text-light-100 text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
            >
              Was wir <span className="text-primary-500">automatisieren</span>
            </motion.h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-20 gap-y-24">
              <motion.div
                className="group"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                viewport={{ once: true }}
              >
                <motion.div
                  className="flex flex-col items-start"
                  whileHover={{ x: 8 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="mb-5 text-primary-500 group-hover:scale-110 transition-transform duration-300">
                    <MessageCircle size={48} strokeWidth={1.5} />
                  </div>
                  <h4 className="text-xl font-heading font-bold text-light-100 mb-3">Kundenkommunikation</h4>
                    <p className="text-base text-light-100 mb-3 font-semibold">
                      Nie wieder dieselben Fragen 20 × beantworten.
                    </p>
                    <p className="text-sm text-light-200 mb-4 leading-relaxed">
                      Wir richten intelligente Chatbots und Telefonassistenten ein, die:
                    </p>
                    <ul className="space-y-2 text-light-200 mb-5 text-sm">
                      <li className="flex items-start">
                        <CheckCircle size={16} className="text-primary-500 mr-2 mt-0.5 flex-shrink-0" />
                        <span>Kundenanfragen automatisch verstehen und beantworten</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle size={16} className="text-primary-500 mr-2 mt-0.5 flex-shrink-0" />
                        <span>Termine oder Rückrufe direkt buchen</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle size={16} className="text-primary-500 mr-2 mt-0.5 flex-shrink-0" />
                        <span>E-Mails oder Website-Chats mit Ihrem CRM verbinden</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle size={16} className="text-primary-500 mr-2 mt-0.5 flex-shrink-0" />
                        <span>bei Bedarf an Ihr Team übergeben</span>
                      </li>
                    </ul>
                    <p className="text-sm text-light-100 font-bold border-l-4 border-primary-500 pl-3">
                      Ihr Team wird entlastet – Kunden erhalten sofort Antworten, 24/7.
                    </p>
                  </motion.div>
                </motion.div>

                <motion.div
                  className="group"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  viewport={{ once: true }}
                >
                  <motion.div
                    className="flex flex-col items-start"
                    whileHover={{ x: 8 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="mb-5 text-primary-500 group-hover:scale-110 transition-transform duration-300">
                      <Calendar size={48} strokeWidth={1.5} />
                    </div>
                    <h4 className="text-xl font-heading font-bold text-light-100 mb-3">Terminplanung & Buchung</h4>
                    <p className="text-base text-light-100 mb-3 font-semibold">
                      Schluss mit E-Mail-Pingpong und Doppelbuchungen.
                    </p>
                    <p className="text-sm text-light-200 mb-4 leading-relaxed">
                      Wir automatisieren die gesamte Terminvergabe:
                    </p>
                    <ul className="space-y-2 text-light-200 mb-5 text-sm">
                      <li className="flex items-start">
                        <CheckCircle size={16} className="text-primary-500 mr-2 mt-0.5 flex-shrink-0" />
                        <span>Synchronisation mit Google, Outlook oder iCloud-Kalendern</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle size={16} className="text-primary-500 mr-2 mt-0.5 flex-shrink-0" />
                        <span>Automatische Erinnerung per E-Mail oder SMS</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle size={16} className="text-primary-500 mr-2 mt-0.5 flex-shrink-0" />
                        <span>Weiterleitung an das passende Teammitglied</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle size={16} className="text-primary-500 mr-2 mt-0.5 flex-shrink-0" />
                        <span>Stornierungen & Nachfasslogik inklusive</span>
                      </li>
                    </ul>
                    <p className="text-sm text-light-100 font-bold border-l-4 border-primary-500 pl-3">
                      Bis zu 10 Stunden pro Woche gespart – keine vergessenen Termine mehr.
                    </p>
                  </motion.div>
                </motion.div>

              <motion.div
                className="group"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                viewport={{ once: true }}
              >
                <motion.div
                  className="flex flex-col items-start"
                  whileHover={{ x: 8 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="mb-5 text-primary-500 group-hover:scale-110 transition-transform duration-300">
                    <Workflow size={48} strokeWidth={1.5} />
                  </div>
                  <h4 className="text-xl font-heading font-bold text-light-100 mb-3">Interne Prozesse & Workflows</h4>
                  <p className="text-base text-light-100 mb-3 font-semibold">
                    Täglich wiederkehrende Aufgaben rauben wertvolle Zeit – das muss nicht sein.
                  </p>
                  <p className="text-sm text-light-200 mb-4 leading-relaxed">
                    Wir automatisieren interne Abläufe so, dass Informationen einmal erfasst und überall genutzt werden können.
                  </p>
                  <ul className="space-y-2 text-light-200 mb-5 text-sm">
                    <li className="flex items-start">
                      <CheckCircle size={16} className="text-primary-500 mr-2 mt-0.5 flex-shrink-0" />
                      <span>Kundenanfragen werden automatisch an die richtige Stelle weitergeleitet</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle size={16} className="text-primary-500 mr-2 mt-0.5 flex-shrink-0" />
                      <span>Wichtige Daten fließen ohne manuelle Eingabe in alle relevanten Systeme</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle size={16} className="text-primary-500 mr-2 mt-0.5 flex-shrink-0" />
                      <span>Mitarbeiter erhalten automatische Benachrichtigungen bei neuen Aufgaben</span>
                    </li>
                  </ul>
                  <p className="text-sm text-light-100 font-bold border-l-4 border-primary-500 pl-3">
                    Weniger Handarbeit, weniger Fehler – und mehr Zeit für Ihre Kunden.
                  </p>
                </motion.div>
              </motion.div>

              <motion.div
                className="group"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                viewport={{ once: true }}
              >
                <motion.div
                  className="flex flex-col items-start"
                  whileHover={{ x: 8 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="mb-5 text-primary-500 group-hover:scale-110 transition-transform duration-300">
                    <TrendingUp size={48} strokeWidth={1.5} />
                  </div>
                  <h4 className="text-xl font-heading font-bold text-light-100 mb-4">Lead-Management & Vertrieb</h4>
                    <ul className="space-y-2 text-light-200 mb-5 text-sm">
                      <li className="flex items-start">
                        <CheckCircle size={16} className="text-primary-500 mr-2 mt-0.5 flex-shrink-0" />
                        <span>Leads automatisch qualifizieren und priorisieren</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle size={16} className="text-primary-500 mr-2 mt-0.5 flex-shrink-0" />
                        <span>CRM-Einträge automatisch erzeugen</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle size={16} className="text-primary-500 mr-2 mt-0.5 flex-shrink-0" />
                        <span>Vertriebsmitarbeiter werden nur bei echten Interessenten informiert</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle size={16} className="text-primary-500 mr-2 mt-0.5 flex-shrink-0" />
                        <span>Automatisches Nachfassen und Angebote senden</span>
                      </li>
                    </ul>
                    <p className="text-sm text-light-100 font-bold border-l-4 border-primary-500 pl-3">
                      Ihr Vertrieb konzentriert sich nur auf wertvolle Kontakte.
                    </p>
                  </motion.div>
                </motion.div>

              <motion.div
                className="group"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.5 }}
                viewport={{ once: true }}
              >
                <motion.div
                  className="flex flex-col items-start"
                  whileHover={{ x: 8 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="mb-5 text-primary-500 group-hover:scale-110 transition-transform duration-300">
                    <Globe size={48} strokeWidth={1.5} />
                  </div>
                  <h4 className="text-xl font-heading font-bold text-light-100 mb-4">Websites mit integrierten Automatisierungen</h4>
                  <ul className="space-y-2 text-light-200 mb-5 text-sm">
                    <li className="flex items-start">
                      <CheckCircle size={16} className="text-primary-500 mr-2 mt-0.5 flex-shrink-0" />
                      <span>Blitzschnell und modern erstellt</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle size={16} className="text-primary-500 mr-2 mt-0.5 flex-shrink-0" />
                      <span>Integrierte Chatbots, Terminbuchung & CRM-Anbindung</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle size={16} className="text-primary-500 mr-2 mt-0.5 flex-shrink-0" />
                      <span>SEO-optimiert und responsive</span>
                    </li>
                  </ul>
                  <p className="text-sm text-light-100 font-bold border-l-4 border-primary-500 pl-3">
                    Digitaler Auftritt arbeitet aktiv für Sie – nicht umgekehrt.
                  </p>
                </motion.div>
              </motion.div>

              <motion.div
                className="group"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                viewport={{ once: true }}
              >
                <motion.div
                  className="flex flex-col items-start"
                  whileHover={{ x: 8 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="mb-5 text-primary-500 group-hover:scale-110 transition-transform duration-300">
                    <Video size={48} strokeWidth={1.5} />
                  </div>
                  <h4 className="text-xl font-heading font-bold text-light-100 mb-3">Content Creation & KI-Videos</h4>
                  <p className="text-base text-light-100 mb-3 font-semibold">
                    Content, der Aufmerksamkeit garantiert – erstellt mit modernster KI-Technologie.
                  </p>
                  <p className="text-sm text-light-200 mb-4 leading-relaxed">
                    Wir produzieren automatisiert hochwertige Inhalte für Social Media, Websites und Werbung:
                  </p>
                  <ul className="space-y-2 text-light-200 mb-5 text-sm">
                    <li className="flex items-start">
                      <CheckCircle size={16} className="text-primary-500 mr-2 mt-0.5 flex-shrink-0" />
                      <span>KI-generierte Videos, Reels & Shorts (auch mit Sprache und Charakteren)</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle size={16} className="text-primary-500 mr-2 mt-0.5 flex-shrink-0" />
                      <span>Automatische Themenfindung & Skripterstellung</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle size={16} className="text-primary-500 mr-2 mt-0.5 flex-shrink-0" />
                      <span>Optimierung für Reichweite, Engagement und Branding</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle size={16} className="text-primary-500 mr-2 mt-0.5 flex-shrink-0" />
                      <span>Integration in bestehende Marketing-Automationen</span>
                    </li>
                  </ul>
                  <p className="text-sm text-light-100 font-bold border-l-4 border-primary-500 pl-3">
                    So entsteht in Minuten, was früher Tage dauerte – kreativer, effizienter und auf Ihre Marke abgestimmt.
                  </p>
                </motion.div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* SO FUNKTIONIERT AUTOMATISIERUNG IN DER PRAXIS - ACCORDION */}
      <section className="py-40 bg-dark-500">
        <div className="container mx-auto px-6 md:px-12">
          <div className="max-w-4xl mx-auto">
            <motion.h2
              className="text-3xl md:text-4xl font-heading font-bold mb-24 text-light-100 text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              So funktioniert <span className="text-primary-500">Automatisierung in der Praxis</span>
            </motion.h2>

            <div className="space-y-2">
              {[
                {
                  title: "Termin-Handling",
                  vorher: "E-Mail-Chaos, Doppelbuchungen, ständiges Hin und Her",
                  nachher: "Automatische Terminabstimmung mit Erinnerungen",
                  ergebnis: "10 Stunden pro Woche gespart"
                },
                {
                  title: "Kundenkommunikation",
                  vorher: "Immer dieselben Fragen am Empfang oder in Nachrichten",
                  nachher: "Chatbot beantwortet bis zu 80 % aller Anfragen automatisch",
                  ergebnis: "Entlastetes Team, zufriedenere Kunden"
                },
                {
                  title: "Lead-Qualifizierung",
                  vorher: "Jeder Kontakt musste manuell geprüft werden",
                  nachher: "System filtert automatisch echte Interessenten heraus",
                  ergebnis: "Fokus auf wertvolle Leads"
                },
                {
                  title: "Interne Abläufe",
                  vorher: "Daten mehrfach eingeben, Informationen manuell weiterleiten",
                  nachher: "Automatische Synchronisierung zwischen Formularen, Tabellen und CRM-Systemen",
                  ergebnis: "Weniger Klicks, keine Doppeleingaben, mehr Überblick"
                },
                {
                  title: "Website-Erstellung",
                  vorher: "Lange Wartezeiten, hoher Aufwand",
                  nachher: "Moderne Website mit integrierten Chatbots und Terminbuchung",
                  ergebnis: "Schnell online, professioneller Auftritt, mehr Kundenanfragen"
                },
                {
                  title: "KI-Videogenerierung",
                  vorher: "Teure Videoproduktion, lange Abstimmung",
                  nachher: "Individuelle KI-Videos automatisch generiert",
                  ergebnis: "Spart Zeit und Kosten, stärkt Markenauftritt"
                }
              ].map((item, index) => (
                <motion.div
                  key={index}
                  className="group"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.05 }}
                  viewport={{ once: true }}
                >
                  <motion.button
                    onClick={() => toggleAccordion(index)}
                    className="w-full flex items-center justify-between py-5 text-left border-b border-dark-100 hover:border-primary-500/50 transition-all duration-300"
                    whileHover={{ x: 8 }}
                  >
                    <span className="text-lg font-heading font-bold text-light-100 flex items-center">
                      <motion.div
                        animate={{ rotate: openAccordion === index ? 180 : 0 }}
                        transition={{ duration: 0.3 }}
                        className="mr-4"
                      >
                        <ChevronDown
                          className="text-primary-500"
                          size={24}
                        />
                      </motion.div>
                      {index + 1}. {item.title}
                    </span>
                  </motion.button>
                  <motion.div
                    initial={false}
                    animate={{
                      height: openAccordion === index ? 'auto' : 0,
                      opacity: openAccordion === index ? 1 : 0
                    }}
                    transition={{ duration: 0.3, ease: 'easeInOut' }}
                    className="overflow-hidden"
                  >
                    <div className="py-6 pl-12 space-y-5">
                      <div>
                        <p className="text-light-100 font-bold mb-2 text-base">Vorher:</p>
                        <p className="text-light-200 text-sm">{item.vorher}</p>
                      </div>
                      <div>
                        <p className="text-light-100 font-bold mb-2 text-base">Nachher:</p>
                        <p className="text-light-200 text-sm">{item.nachher}</p>
                      </div>
                      <div>
                        <p className="text-light-100 font-bold mb-2 text-base">Ergebnis:</p>
                        <p className="text-light-100 font-bold border-l-4 border-primary-500 pl-3 text-sm">{item.ergebnis}</p>
                      </div>
                    </div>
                  </motion.div>
                </motion.div>
              ))}
            </div>

            <motion.div
              className="mt-12 text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              viewport={{ once: true }}
            >
              <p className="text-base text-light-200 mb-8">
                3 Minuten Formular ausfüllen – wir zeigen Ihnen konkret, wie Ihre Abläufe effizienter laufen.
              </p>
              <button
                onClick={scrollToContactForm}
                className="inline-flex items-center px-8 py-3 bg-primary-500 text-dark-500 font-heading font-bold hover:bg-primary-400 hover:scale-105 transition-all duration-300"
              >
                <ArrowRight className="mr-2" size={20} />
                Jetzt starten
              </button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* PROCESS SECTION */}
      <section className="py-40 bg-dark-400">
        <div className="container mx-auto px-6 md:px-12">
          <div className="max-w-4xl mx-auto">
            <motion.h2
              className="text-3xl md:text-4xl font-heading font-bold mb-24 text-light-100 text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              In vier Schritten zur eigenen <span className="text-primary-500">KI-Automatisierung</span>
            </motion.h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-20">
              <motion.div
                className="group"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                viewport={{ once: true }}
              >
                <motion.div
                  whileHover={{ y: -8 }}
                  transition={{ duration: 0.3 }}
                  className="h-full"
                >
                  <div className="text-primary-500 mb-5 group-hover:scale-110 transition-transform duration-300">
                    <div className="text-5xl font-heading font-bold mb-2">01</div>
                    <div className="h-1 w-16 bg-primary-500"></div>
                  </div>
                  <h3 className="text-xl font-heading font-bold text-light-100 mb-3">
                    Erstgespräch
                  </h3>
                  <p className="text-light-200 text-base leading-relaxed">
                    Wir klären Ihre Ziele und Potenziale.
                  </p>
                </motion.div>
              </motion.div>

              <motion.div
                className="group"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
              >
                <motion.div
                  whileHover={{ y: -8 }}
                  transition={{ duration: 0.3 }}
                  className="h-full"
                >
                  <div className="text-primary-500 mb-5 group-hover:scale-110 transition-transform duration-300">
                    <div className="text-5xl font-heading font-bold mb-2">02</div>
                    <div className="h-1 w-16 bg-primary-500"></div>
                  </div>
                  <h3 className="text-xl font-heading font-bold text-light-100 mb-3">
                    Planung
                  </h3>
                  <p className="text-light-200 text-base leading-relaxed">
                    Wir entwickeln das passende Konzept.
                  </p>
                </motion.div>
              </motion.div>

              <motion.div
                className="group"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                viewport={{ once: true }}
              >
                <motion.div
                  whileHover={{ y: -8 }}
                  transition={{ duration: 0.3 }}
                  className="h-full"
                >
                  <div className="text-primary-500 mb-5 group-hover:scale-110 transition-transform duration-300">
                    <div className="text-5xl font-heading font-bold mb-2">03</div>
                    <div className="h-1 w-16 bg-primary-500"></div>
                  </div>
                  <h3 className="text-xl font-heading font-bold text-light-100 mb-3">
                    Umsetzung
                  </h3>
                  <p className="text-light-200 text-base leading-relaxed">
                    Schnelle, saubere Integration.
                  </p>
                </motion.div>
              </motion.div>

              <motion.div
                className="group"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                viewport={{ once: true }}
              >
                <motion.div
                  whileHover={{ y: -8 }}
                  transition={{ duration: 0.3 }}
                  className="h-full"
                >
                  <div className="text-primary-500 mb-5 group-hover:scale-110 transition-transform duration-300">
                    <div className="text-5xl font-heading font-bold mb-2">04</div>
                    <div className="h-1 w-16 bg-primary-500"></div>
                  </div>
                  <h3 className="text-xl font-heading font-bold text-light-100 mb-3">
                    Support
                  </h3>
                  <p className="text-light-200 text-base leading-relaxed">
                    Wir bleiben an Ihrer Seite, auch nach dem Go-Live.
                  </p>
                </motion.div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* TESTIMONIALS SECTION */}
      <section className="py-40 bg-dark-500">
        <div className="container mx-auto px-6 md:px-12">
          <div className="max-w-5xl mx-auto">
            <motion.h2
              className="text-3xl md:text-4xl font-heading font-bold mb-24 text-light-100 text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <span className="text-primary-500">Kundenstimmen</span>
            </motion.h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
              <motion.div
                className="group"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                viewport={{ once: true }}
              >
                <motion.blockquote
                  className="border-l-4 border-primary-500 pl-6 py-2"
                  whileHover={{ x: 8 }}
                  transition={{ duration: 0.3 }}
                >
                  <p className="text-light-200 text-base italic leading-relaxed">
                    „Endlich Schluss mit Doppelbuchungen – das spart jede Woche rund 10 Stunden."
                  </p>
                </motion.blockquote>
              </motion.div>

              <motion.div
                className="group"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
              >
                <motion.blockquote
                  className="border-l-4 border-primary-500 pl-6 py-2"
                  whileHover={{ x: 8 }}
                  transition={{ duration: 0.3 }}
                >
                  <p className="text-light-200 text-base italic leading-relaxed">
                    „Seit dem Chatbot haben wir wieder Zeit für die wirklich wichtigen Dinge."
                  </p>
                </motion.blockquote>
              </motion.div>

              <motion.div
                className="group"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                viewport={{ once: true }}
              >
                <motion.blockquote
                  className="border-l-4 border-primary-500 pl-6 py-2"
                  whileHover={{ x: 8 }}
                  transition={{ duration: 0.3 }}
                >
                  <p className="text-light-200 text-base italic leading-relaxed">
                    „Unsere Terminplanung läuft jetzt vollautomatisch – kein Stress mehr am Empfang."
                  </p>
                </motion.blockquote>
              </motion.div>

              <motion.div
                className="group"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                viewport={{ once: true }}
              >
                <motion.blockquote
                  className="border-l-4 border-primary-500 pl-6 py-2"
                  whileHover={{ x: 8 }}
                  transition={{ duration: 0.3 }}
                >
                  <p className="text-light-200 text-base italic leading-relaxed">
                    „Die KI beantwortet fast alle Kundenfragen sofort – unsere Mitarbeiter sind spürbar entlastet."
                  </p>
                </motion.blockquote>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* FINAL CTA SECTION */}
      <section className="py-40 bg-dark-400">
        <div className="container mx-auto px-6 md:px-12">
          <div className="max-w-3xl mx-auto text-center">
            <motion.h2
              className="text-3xl md:text-4xl font-heading font-bold mb-10 text-light-100"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              Lassen Sie uns über Ihre <span className="text-primary-500">Prozesse sprechen.</span>
            </motion.h2>

            <motion.p
              className="text-lg text-light-200 mb-12 leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              Ein kostenloses Erstgespräch zeigt, wie viel Zeit Sie durch Automatisierung ab morgen sparen können.
            </motion.p>

            <motion.button
              onClick={scrollToContactForm}
              className="inline-flex items-center px-10 py-4 bg-primary-500 text-dark-500 font-heading font-bold text-lg hover:bg-primary-400 hover:scale-105 transition-all duration-300"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05 }}
            >
              <ArrowRight className="mr-2" size={24} />
              Kostenloses Erstgespräch sichern
            </motion.button>
          </div>
        </div>
      </section>

      {/* CONTACT FORM */}
      <ContactForm />
    </div>
  );
};

export default Home;