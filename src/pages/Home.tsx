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
      <section id="problems-section" className="py-24 bg-dark-400">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <motion.h2
              className="text-3xl md:text-4xl font-heading font-bold mb-12 text-primary-500 text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              Jeden Tag dieselben Aufgaben. Jeden Tag verlorene Zeit.
            </motion.h2>
            
            <motion.p
              className="text-light-200 text-lg mb-8 text-center leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              Viele Unternehmen verschwenden wertvolle Stunden mit Routinearbeit –<br />
              E-Mails beantworten, Termine abgleichen, Leads prüfen oder Tabellen pflegen.
            </motion.p>

            <div className="bg-dark-500 border border-red-500/30 p-8 rounded-lg">
              <motion.p
                className="text-center text-xl text-light-100 font-bold"
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                viewport={{ once: true }}
              >
                Das Ergebnis: <span className="text-red-500">Stress, Fehler, Zeitverlust.</span><br />
                <span className="text-light-200 font-normal text-lg mt-2 block">Und weniger Fokus auf das, was Ihr Geschäft wirklich voranbringt.</span>
              </motion.p>
            </div>
          </div>
        </div>
      </section>

      {/* UNSERE LÖSUNGEN SECTION */}
      <section className="py-24 bg-dark-500">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <motion.h2
              className="text-3xl md:text-4xl font-heading font-bold mb-8 text-primary-500 text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              Unsere Lösungen
            </motion.h2>

            <motion.div
              className="text-center mb-12"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <p className="text-lg text-light-200 mb-4 leading-relaxed">
                Wie viele Aufgaben werden in Ihrem Unternehmen noch per Hand erledigt?
              </p>
              <p className="text-lg text-light-200 mb-4 leading-relaxed">
                Viele Teams verschwenden täglich Stunden mit Routinearbeiten – weil Terminbuchung, Kommunikation und interne Abläufe noch manuell laufen.
              </p>
              <p className="text-xl text-primary-500 font-bold">
                Wir ändern das.
              </p>
            </motion.div>

            <motion.h3
              className="text-2xl md:text-3xl font-heading font-bold mb-8 text-light-100 text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
            >
              Was wir automatisieren
            </motion.h3>

            <div className="space-y-6">
              <motion.div
                className="bg-dark-400 border border-dark-100 rounded-lg overflow-hidden"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                viewport={{ once: true }}
              >
                <div className="p-6">
                  <div className="flex items-center mb-4">
                    <MessageCircle className="text-primary-500 mr-3" size={28} />
                    <h4 className="text-xl font-heading font-bold text-light-100">Kundenkommunikation</h4>
                  </div>
                  <p className="text-light-200 mb-4 font-bold">
                    Nie wieder dieselben Fragen 20 × beantworten.
                  </p>
                  <p className="text-light-200 mb-4">
                    Wir richten <span className="text-primary-500 font-bold">intelligente Chatbots und Telefonassistenten</span> ein, die:
                  </p>
                  <ul className="list-disc list-inside text-light-200 space-y-2 mb-4 ml-4">
                    <li>Kundenanfragen automatisch verstehen und beantworten</li>
                    <li>Termine oder Rückrufe direkt buchen</li>
                    <li>E-Mails oder Website-Chats mit Ihrem CRM verbinden</li>
                    <li>bei Bedarf an Ihr Team übergeben</li>
                  </ul>
                  <p className="text-primary-400 font-bold">
                    ➡️ Ergebnis: Ihr Team wird entlastet – Kunden erhalten sofort Antworten, 24/7.
                  </p>
                </div>
              </motion.div>

              <motion.div
                className="bg-dark-400 border border-dark-100 rounded-lg overflow-hidden"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                viewport={{ once: true }}
              >
                <div className="p-6">
                  <div className="flex items-center mb-4">
                    <Calendar className="text-primary-500 mr-3" size={28} />
                    <h4 className="text-xl font-heading font-bold text-light-100">Terminplanung & Buchung</h4>
                  </div>
                  <p className="text-light-200 mb-4 font-bold">
                    Schluss mit E-Mail-Pingpong und Doppelbuchungen.
                  </p>
                  <p className="text-light-200 mb-4">
                    Wir automatisieren die gesamte Terminvergabe:
                  </p>
                  <ul className="list-disc list-inside text-light-200 space-y-2 mb-4 ml-4">
                    <li>Synchronisation mit Google, Outlook oder iCloud-Kalendern</li>
                    <li>Automatische Erinnerung per E-Mail oder SMS</li>
                    <li>Weiterleitung an das passende Teammitglied</li>
                    <li>Stornierungen & Nachfasslogik inklusive</li>
                  </ul>
                  <p className="text-primary-400 font-bold">
                    ➡️ Ergebnis: Bis zu 10 Stunden pro Woche gespart – keine vergessenen Termine mehr.
                  </p>
                </div>
              </motion.div>

              <motion.div
                className="bg-dark-400 border border-dark-100 rounded-lg overflow-hidden"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                viewport={{ once: true }}
              >
                <div className="p-6">
                  <div className="flex items-center mb-4">
                    <Workflow className="text-primary-500 mr-3" size={28} />
                    <h4 className="text-xl font-heading font-bold text-light-100">Interne Prozesse & Workflows</h4>
                  </div>
                  <p className="text-light-200 mb-4 font-bold">
                    Täglich wiederkehrende Aufgaben rauben wertvolle Zeit – das muss nicht sein.
                  </p>
                  <p className="text-light-200 mb-4">
                    Wir automatisieren interne Abläufe so, dass Informationen <span className="text-primary-500 font-bold">einmal erfasst</span> und <span className="text-primary-500 font-bold">überall genutzt</span> werden können.
                  </p>
                  <p className="text-light-200 mb-2 font-semibold">Beispiele:</p>
                  <ul className="list-disc list-inside text-light-200 space-y-2 mb-4 ml-4">
                    <li>Kundenanfragen werden automatisch an die richtige Stelle weitergeleitet</li>
                    <li>Wichtige Daten fließen ohne manuelle Eingabe in alle relevanten Systeme</li>
                    <li>Mitarbeiter erhalten automatische Benachrichtigungen bei neuen Aufgaben oder Terminen</li>
                    <li>Interne Status-Updates und Rückmeldungen laufen zentral zusammen</li>
                  </ul>
                  <p className="text-primary-400 font-bold">
                    ➡️ Ergebnis: Weniger Handarbeit, weniger Fehler – und mehr Zeit für Ihre Kunden.
                  </p>
                </div>
              </motion.div>

              <motion.div
                className="bg-dark-400 border border-dark-100 rounded-lg overflow-hidden"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                viewport={{ once: true }}
              >
                <div className="p-6">
                  <div className="flex items-center mb-4">
                    <TrendingUp className="text-primary-500 mr-3" size={28} />
                    <h4 className="text-xl font-heading font-bold text-light-100">Lead-Management & Vertrieb</h4>
                  </div>
                  <ul className="list-disc list-inside text-light-200 space-y-2 mb-4 ml-4">
                    <li>Leads automatisch qualifizieren und priorisieren</li>
                    <li>CRM-Einträge automatisch erzeugen</li>
                    <li>Vertriebsmitarbeiter werden nur bei echten Interessenten informiert</li>
                    <li>Automatisches Nachfassen und Angebote senden</li>
                  </ul>
                  <p className="text-primary-400 font-bold">
                    ➡️ Ergebnis: Ihr Vertrieb konzentriert sich nur auf wertvolle Kontakte.
                  </p>
                </div>
              </motion.div>

              <motion.div
                className="bg-dark-400 border border-dark-100 rounded-lg overflow-hidden"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.5 }}
                viewport={{ once: true }}
              >
                <div className="p-6">
                  <div className="flex items-center mb-4">
                    <Globe className="text-primary-500 mr-3" size={28} />
                    <h4 className="text-xl font-heading font-bold text-light-100">Websites mit integrierten Automatisierungen</h4>
                  </div>
                  <ul className="list-disc list-inside text-light-200 space-y-2 mb-4 ml-4">
                    <li>Blitzschnell und modern erstellt</li>
                    <li>Integrierte Chatbots, Terminbuchung & CRM-Anbindung</li>
                    <li>SEO-optimiert und responsive</li>
                  </ul>
                  <p className="text-primary-400 font-bold">
                    ➡️ Ergebnis: Digitaler Auftritt arbeitet aktiv für Sie – nicht umgekehrt.
                  </p>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* SO FUNKTIONIERT AUTOMATISIERUNG IN DER PRAXIS - ACCORDION */}
      <section className="py-24 bg-dark-400">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <motion.h2
              className="text-3xl md:text-4xl font-heading font-bold mb-12 text-primary-500 text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              So funktioniert Automatisierung in der Praxis
            </motion.h2>

            <div className="space-y-4">
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
                  className="bg-dark-500 border border-dark-100 rounded-lg overflow-hidden"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <button
                    onClick={() => toggleAccordion(index)}
                    className="w-full flex items-center justify-between p-6 text-left hover:bg-dark-400 transition-colors duration-200"
                  >
                    <span className="text-lg font-heading font-bold text-light-100 flex items-center">
                      <ChevronDown
                        className={`mr-3 text-primary-500 transition-transform duration-300 ${openAccordion === index ? 'rotate-180' : ''}`}
                        size={24}
                      />
                      {index + 1}. {item.title}
                    </span>
                  </button>
                  <div
                    className={`transition-all duration-300 ease-in-out ${
                      openAccordion === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                    } overflow-hidden`}
                  >
                    <div className="p-6 pt-0 space-y-3">
                      <div>
                        <p className="text-light-100 font-semibold mb-1">Vorher:</p>
                        <p className="text-light-200">{item.vorher}</p>
                      </div>
                      <div>
                        <p className="text-light-100 font-semibold mb-1">Nachher:</p>
                        <p className="text-light-200">{item.nachher}</p>
                      </div>
                      <div>
                        <p className="text-light-100 font-semibold mb-1">Ergebnis:</p>
                        <p className="text-primary-400 font-bold">{item.ergebnis}</p>
                      </div>
                    </div>
                  </div>
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
              <p className="text-lg text-light-200 mb-6">
                3 Minuten Formular ausfüllen – wir zeigen Ihnen konkret, wie Ihre Abläufe effizienter laufen.
              </p>
              <button
                onClick={scrollToContactForm}
                className="inline-flex items-center px-8 py-3 bg-primary-500 text-dark-500 font-heading font-bold hover:bg-primary-400 transition-colors duration-300"
              >
                <ArrowRight className="mr-2" size={20} />
                Jetzt starten
              </button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* PROCESS SECTION */}
      <section className="py-24 bg-dark-500">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <motion.h2
              className="text-3xl md:text-4xl font-heading font-bold mb-12 text-primary-500 text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              In vier Schritten zur eigenen KI-Automatisierung
            </motion.h2>
            
            <div className="space-y-8">
              <motion.div 
                className="flex items-start"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                viewport={{ once: true }}
              >
                <div className="bg-primary-500 text-dark-500 w-10 h-10 rounded-full flex items-center justify-center mr-4 flex-shrink-0 font-bold">
                  1
                </div>
                <div>
                  <h3 className="text-xl font-heading font-bold text-primary-500 mb-2">
                    Erstgespräch
                  </h3>
                  <p className="text-light-200">
                    Wir klären Ihre Ziele und Potenziale.
                  </p>
                </div>
              </motion.div>
              
              <motion.div 
                className="flex items-start"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                viewport={{ once: true }}
              >
                <div className="bg-primary-500 text-dark-500 w-10 h-10 rounded-full flex items-center justify-center mr-4 flex-shrink-0 font-bold">
                  2
                </div>
                <div>
                  <h3 className="text-xl font-heading font-bold text-primary-500 mb-2">
                    Planung
                  </h3>
                  <p className="text-light-200">
                    Wir entwickeln das passende Konzept.
                  </p>
                </div>
              </motion.div>
              
              <motion.div 
                className="flex items-start"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                viewport={{ once: true }}
              >
                <div className="bg-primary-500 text-dark-500 w-10 h-10 rounded-full flex items-center justify-center mr-4 flex-shrink-0 font-bold">
                  3
                </div>
                <div>
                  <h3 className="text-xl font-heading font-bold text-primary-500 mb-2">
                    Umsetzung
                  </h3>
                  <p className="text-light-200">
                    Schnelle, saubere Integration.
                  </p>
                </div>
              </motion.div>
              
              <motion.div 
                className="flex items-start"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                viewport={{ once: true }}
              >
                <div className="bg-primary-500 text-dark-500 w-10 h-10 rounded-full flex items-center justify-center mr-4 flex-shrink-0 font-bold">
                  4
                </div>
                <div>
                  <h3 className="text-xl font-heading font-bold text-primary-500 mb-2">
                    Support
                  </h3>
                  <p className="text-light-200">
                    Wir bleiben an Ihrer Seite, auch nach dem Go-Live.
                  </p>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* TESTIMONIALS SECTION */}
      <section className="py-24 bg-dark-400">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <motion.h2
              className="text-3xl md:text-4xl font-heading font-bold mb-12 text-primary-500 text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              Kundenstimmen
            </motion.h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <motion.blockquote
                className="bg-dark-400 border-l-4 border-primary-500 p-6 rounded"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                viewport={{ once: true }}
              >
                <p className="text-light-200 italic">
                  „Endlich Schluss mit Doppelbuchungen – das spart jede Woche rund 10 Stunden."
                </p>
              </motion.blockquote>

              <motion.blockquote
                className="bg-dark-400 border-l-4 border-primary-500 p-6 rounded"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                viewport={{ once: true }}
              >
                <p className="text-light-200 italic">
                  „Seit dem Chatbot haben wir wieder Zeit für die wirklich wichtigen Dinge."
                </p>
              </motion.blockquote>

              <motion.blockquote
                className="bg-dark-400 border-l-4 border-primary-500 p-6 rounded"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                viewport={{ once: true }}
              >
                <p className="text-light-200 italic">
                  „Unsere Terminplanung läuft jetzt vollautomatisch – kein Stress mehr am Empfang."
                </p>
              </motion.blockquote>

              <motion.blockquote
                className="bg-dark-400 border-l-4 border-primary-500 p-6 rounded"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                viewport={{ once: true }}
              >
                <p className="text-light-200 italic">
                  „Die KI beantwortet fast alle Kundenfragen sofort – unsere Mitarbeiter sind spürbar entlastet."
                </p>
              </motion.blockquote>
            </div>
          </div>
        </div>
      </section>

      {/* FINAL CTA SECTION */}
      <section className="py-24 bg-dark-500">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <motion.h2
              className="text-3xl md:text-4xl font-heading font-bold mb-8 text-primary-500"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              Lassen Sie uns über Ihre Prozesse sprechen.
            </motion.h2>

            <motion.p
              className="text-lg text-light-200 mb-8 leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              Ein kostenloses Erstgespräch zeigt, wie viel Zeit Sie durch Automatisierung ab morgen sparen können.
            </motion.p>
            
            <motion.button 
              onClick={scrollToContactForm}
              className="inline-flex items-center px-8 py-3 bg-primary-500 text-dark-500 font-heading font-bold hover:bg-primary-400 transition-colors duration-300"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <ArrowRight className="mr-2" size={20} />
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