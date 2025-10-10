import React from 'react';
import { motion } from 'framer-motion';
import { ChevronDown, Clock, CheckCircle, Users, Globe, ArrowRight, MessageCircle, Calendar, BarChart, Target } from 'lucide-react';
import { BackgroundPaths } from '../components/ui/background-paths';
import ContactForm from '../components/ContactForm';

const Home: React.FC = () => {
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

      {/* SOLUTION SECTION */}
      <section className="py-24 bg-dark-500">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <motion.h2
              className="text-3xl md:text-4xl font-heading font-bold mb-8 text-primary-500 text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              Intelligente Automatisierungen, die mitdenken.
            </motion.h2>

            <motion.p
              className="text-lg text-light-200 mb-6 text-center leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              Wir entwickeln <span className="text-primary-500 font-bold">maßgeschneiderte Automatisierungen</span>, die sich nahtlos in Ihre bestehenden Systeme einfügen –<br />
              egal ob <span className="text-light-100 font-semibold">kleine Praxis, Fitnessstudio oder Handwerksbetrieb.</span>
            </motion.p>

            <motion.p
              className="text-lg text-light-200 mb-8 text-center leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
            >
              Von der Terminbuchung bis zur Kundenkommunikation:<br />
              Ihre Prozesse laufen automatisch, fehlerfrei und rund um die Uhr.
            </motion.p>
            
            <div className="bg-dark-400 border border-primary-500/30 p-8 rounded-lg">
              <h3 className="text-xl font-heading font-bold text-primary-500 mb-6 text-center">
                Ihre Vorteile:
              </h3>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <motion.div
                  className="flex items-start"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                  viewport={{ once: true }}
                >
                  <Clock className="text-primary-500 mr-3 mt-1 flex-shrink-0" size={20} />
                  <p className="text-light-100">Bis zu 10+ Stunden pro Woche sparen</p>
                </motion.div>

                <motion.div
                  className="flex items-start"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  viewport={{ once: true }}
                >
                  <CheckCircle className="text-primary-500 mr-3 mt-1 flex-shrink-0" size={20} />
                  <p className="text-light-100">Klare, nachvollziehbare Abläufe</p>
                </motion.div>

                <motion.div
                  className="flex items-start"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                  viewport={{ once: true }}
                >
                  <MessageCircle className="text-primary-500 mr-3 mt-1 flex-shrink-0" size={20} />
                  <p className="text-light-100">Weniger Stress im Alltag</p>
                </motion.div>

                <motion.div
                  className="flex items-start"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.4 }}
                  viewport={{ once: true }}
                >
                  <Users className="text-primary-500 mr-3 mt-1 flex-shrink-0" size={20} />
                  <p className="text-light-100">Mehr Zeit für Ihre Kunden</p>
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PRACTICAL EXAMPLES SECTION */}
      <section className="py-24 bg-dark-400">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <motion.h2
              className="text-3xl md:text-4xl font-heading font-bold mb-12 text-primary-500 text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              So funktioniert Automatisierung in der Praxis
            </motion.h2>
            
            <div className="overflow-x-auto">
              <table className="w-full bg-dark-500 border border-dark-100 rounded-lg">
                <thead>
                  <tr className="border-b border-dark-100">
                    <th className="px-6 py-4 text-left text-primary-500 font-heading font-bold">Bereich</th>
                    <th className="px-6 py-4 text-left text-primary-500 font-heading font-bold">Vorher</th>
                    <th className="px-6 py-4 text-left text-primary-500 font-heading font-bold">Nachher</th>
                    <th className="px-6 py-4 text-left text-primary-500 font-heading font-bold">Ergebnis</th>
                  </tr>
                </thead>
                <tbody>
                  <motion.tr
                    className="border-b border-dark-100"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                    viewport={{ once: true }}
                  >
                    <td className="px-6 py-4 text-light-100 font-semibold">Termin-Handling</td>
                    <td className="px-6 py-4 text-light-200">E-Mail-Chaos, Doppelbuchungen</td>
                    <td className="px-6 py-4 text-light-200">Automatische Terminabstimmung + Erinnerungen</td>
                    <td className="px-6 py-4 text-primary-400 font-bold">10h pro Woche gespart</td>
                  </motion.tr>
                  <motion.tr
                    className="border-b border-dark-100"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    viewport={{ once: true }}
                  >
                    <td className="px-6 py-4 text-light-100 font-semibold">Kundenkommunikation</td>
                    <td className="px-6 py-4 text-light-200">Immer dieselben Fragen am Empfang</td>
                    <td className="px-6 py-4 text-light-200">Chatbot beantwortet 80% automatisch</td>
                    <td className="px-6 py-4 text-primary-400 font-bold">Zufriedene Kunden</td>
                  </motion.tr>
                  <motion.tr
                    className="border-b border-dark-100"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                    viewport={{ once: true }}
                  >
                    <td className="px-6 py-4 text-light-100 font-semibold">Lead-Qualifizierung</td>
                    <td className="px-6 py-4 text-light-200">Manuelle Prüfung jedes Kontakts</td>
                    <td className="px-6 py-4 text-light-200">Automatische Filterung & Sortierung</td>
                    <td className="px-6 py-4 text-primary-400 font-bold">Nur echte Interessenten</td>
                  </motion.tr>
                  <motion.tr
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                    viewport={{ once: true }}
                  >
                    <td className="px-6 py-4 text-light-100 font-semibold">Interne Abläufe</td>
                    <td className="px-6 py-4 text-light-200">Angebote manuell erfassen</td>
                    <td className="px-6 py-4 text-light-200">Automatisierung übernimmt alles in Minuten</td>
                    <td className="px-6 py-4 text-primary-400 font-bold">Fehlerquote ≈ 0%</td>
                  </motion.tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* WEBSITES SECTION */}
      <section className="py-24 bg-dark-500">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <motion.h2
              className="text-3xl md:text-4xl font-heading font-bold mb-8 text-primary-500 text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              Websites, die so smart sind wie Ihre Prozesse.
            </motion.h2>

            <motion.p
              className="text-light-200 text-lg mb-6 text-center leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              Neben Automatisierungen erstellen wir <span className="text-primary-500 font-bold">moderne Websites</span>,<br />
              die nicht nur stark aussehen, sondern auch Ergebnisse liefern.
            </motion.p>

            <motion.p
              className="text-light-200 text-lg text-center leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
            >
              Schnell, klar, responsiv –<br />
              auf Wunsch direkt mit <span className="text-light-100 font-semibold">Chatbot</span>, <span className="text-light-100 font-semibold">Terminbuchung</span> oder <span className="text-light-100 font-semibold">CRM-Anbindung</span> integriert.
            </motion.p>
          </div>
        </div>
      </section>

      {/* PROCESS SECTION */}
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
      <section className="py-24 bg-dark-400">
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