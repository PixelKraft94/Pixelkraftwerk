import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, CheckCircle, Clock, Users, Target, Zap, ArrowDown } from 'lucide-react';
import ContactForm from '../components/ContactForm';
import { BackgroundPaths } from '../components/ui/background-paths';

const Home: React.FC = () => {
  // Track Facebook Pixel event when component mounts
  React.useEffect(() => {
    // Check if fbq is available
    if (typeof window !== 'undefined' && (window as any).fbq) {
      (window as any).fbq('track', 'ViewContent', {
        content_name: 'Startseite',
        content_category: 'Home Page'
      });
    }
  }, []);

  const scrollToContactForm = () => {
    const contactForm = document.getElementById('contact');
    if (contactForm) {
      contactForm.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="bg-dark-500">
      {/* HERO SECTION */}
      <section className="relative min-h-screen flex items-center justify-center bg-dark-500 overflow-hidden">
        <BackgroundPaths />
        
        <div className="container mx-auto px-4 z-10">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div 
              className="space-y-4 mb-8 -mt-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <h1 className="text-3xl md:text-4xl lg:text-5xl text-light-100 font-heading">
                Bessere Abläufe.
              </h1>
              <h1 className="text-3xl md:text-4xl lg:text-5xl text-light-100 font-heading">
                Weniger Stress.
              </h1>
              <h1 className="text-3xl md:text-4xl lg:text-5xl text-light-100 font-heading">
                Mehr Zeit.
              </h1>
            </motion.div>
            
            <motion.p 
              className="text-lg md:text-xl text-light-200 mb-8 max-w-3xl mx-auto"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.6 }}
            >
              Wir automatisieren Ihre Geschäftsprozesse – von Terminbuchungen bis Lead-Qualifizierung – und machen Ihr Unternehmen fit für die digitale Zukunft.
            </motion.p>
            
            <motion.div 
              className="mt-6"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, ease: "easeOut", delay: 1.2 }}
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

      {/* DIE PROBLEME UNSERER KUNDEN */}
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
              Die Probleme unserer Kunden
            </motion.h2>
            
            <div className="bg-dark-300 border border-dark-100 p-8">
              <div className="space-y-6">
                <motion.div 
                  className="flex items-start"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                  viewport={{ once: true }}
                >
                  <span className="text-red-400 mr-3 flex-shrink-0">•</span>
                  <p className="text-light-200">Täglich dieselben Kundenfragen per E-Mail beantworten.</p>
                </motion.div>
                
                <motion.div 
                  className="flex items-start"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  viewport={{ once: true }}
                >
                  <span className="text-red-400 mr-3 flex-shrink-0">•</span>
                  <p className="text-light-200">Termine manuell abgleichen und in den Kalender eintragen.</p>
                </motion.div>
                
                <motion.div 
                  className="flex items-start"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                  viewport={{ once: true }}
                >
                  <span className="text-red-400 mr-3 flex-shrink-0">•</span>
                  <p className="text-light-200">Leads prüfen, sortieren und weiterleiten – alles Handarbeit.</p>
                </motion.div>
                
                <motion.div 
                  className="flex items-start"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.4 }}
                  viewport={{ once: true }}
                >
                  <span className="text-red-400 mr-3 flex-shrink-0">•</span>
                  <p className="text-light-200">Interne Abläufe mit unnötigen Klicks und Excel-Listen erledigen.</p>
                </motion.div>
              </div>
              
              <div className="border-t border-dark-100 pt-6 mt-8 text-center">
                <motion.p 
                  className="text-lg text-red-300"
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.5 }}
                  viewport={{ once: true }}
                >
                  Das Ergebnis: <span className="font-bold">Stress, Fehler und Zeitverlust.</span>
                </motion.p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* UNSERE LÖSUNG */}
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
              Unsere Lösung
            </motion.h2>
            
            <div className="bg-dark-400 border border-primary-500/30 p-8 mb-8">
              <motion.div 
                className="text-center mb-8"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                viewport={{ once: true }}
              >
                <p className="text-xl text-light-100 mb-4">
                  Wir entwickeln <span className="text-primary-500 font-bold">maßgeschneiderte Automatisierungen</span>, die sich nahtlos in Ihre bestehenden Systeme einfügen.
                </p>
                <p className="text-lg text-light-200">
                  Ob kleine Kanzlei, Fitnessstudio oder Handwerksbetrieb – wir machen Ihre Prozesse schlanker, schneller und zuverlässiger.
                </p>
              </motion.div>
              
              <div className="h-px bg-primary-500/30"></div>
              
              <motion.div 
                className="mt-8"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                viewport={{ once: true }}
              >
                <h3 className="text-xl font-heading font-bold text-primary-500 mb-6 text-center">
                  Ihre Vorteile auf einen Blick:
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="flex items-start">
                    <CheckCircle className="text-primary-500 mr-3 flex-shrink-0" size={20} />
                    <p className="text-light-200">bis zu 10+ Stunden pro Woche sparen</p>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle className="text-primary-500 mr-3 flex-shrink-0" size={20} />
                    <p className="text-light-200">fehlerfreie Abläufe</p>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle className="text-primary-500 mr-3 flex-shrink-0" size={20} />
                    <p className="text-light-200">klare Strukturen</p>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle className="text-primary-500 mr-3 flex-shrink-0" size={20} />
                    <p className="text-light-200">mehr Fokus auf das Wesentliche: Ihr Geschäft</p>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* PRAXISBEISPIELE */}
      <section className="py-24 bg-dark-400">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <motion.h2 
              className="text-3xl md:text-4xl font-heading font-bold mb-6 text-primary-500 text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              So sehen Automatisierungen in der Praxis aus
            </motion.h2>
            
            <motion.p 
              className="text-light-200 mb-12 text-center italic"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
            >
              „So sehen typische Ergebnisse unserer Automatisierungen in der Praxis aus. Die Beispiele zeigen, wie Unternehmen in verschiedenen Bereichen Zeit sparen, Stress reduzieren und Prozesse vereinfachen konnten."
            </motion.p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Beispiel 1 */}
              <motion.div 
                className="bg-dark-500 border border-dark-100 p-6"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                viewport={{ once: true }}
              >
                <h3 className="text-xl font-heading font-bold text-primary-500 mb-4">
                  Beispiel 1 – Termin-Handling
                </h3>
                <div className="space-y-3">
                  <p className="text-light-200">
                    <span className="text-red-400 font-bold">Vorher:</span> Täglicher E-Mail-Marathon, Doppelbuchungen, Chaos.
                  </p>
                  <p className="text-light-200">
                    <span className="text-primary-500 font-bold">Nachher:</span> Automatische Terminabstimmung + Erinnerungen.
                  </p>
                  <div className="bg-primary-500/10 border-l-4 border-primary-500 p-3">
                    <p className="text-primary-400 font-bold">
                      ➡️ Ergebnis: 10 Stunden pro Woche gespart.
                    </p>
                  </div>
                </div>
              </motion.div>
              
              {/* Beispiel 2 */}
              <motion.div 
                className="bg-dark-500 border border-dark-100 p-6"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                viewport={{ once: true }}
              >
                <h3 className="text-xl font-heading font-bold text-primary-500 mb-4">
                  Beispiel 2 – Kundenkommunikation
                </h3>
                <div className="space-y-3">
                  <p className="text-light-200">
                    <span className="text-red-400 font-bold">Vorher:</span> Immer dieselben Fragen am Empfang.
                  </p>
                  <p className="text-light-200">
                    <span className="text-primary-500 font-bold">Nachher:</span> Chatbot beantwortet 80 % aller Anfragen direkt.
                  </p>
                  <div className="bg-primary-500/10 border-l-4 border-primary-500 p-3">
                    <p className="text-primary-400 font-bold">
                      ➡️ Ergebnis: Entlastetes Team, zufriedene Kunden.
                    </p>
                  </div>
                </div>
              </motion.div>
              
              {/* Beispiel 3 */}
              <motion.div 
                className="bg-dark-500 border border-dark-100 p-6"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                viewport={{ once: true }}
              >
                <h3 className="text-xl font-heading font-bold text-primary-500 mb-4">
                  Beispiel 3 – Lead-Qualifizierung
                </h3>
                <div className="space-y-3">
                  <p className="text-light-200">
                    <span className="text-red-400 font-bold">Vorher:</span> Jeder Lead musste manuell geprüft werden.
                  </p>
                  <p className="text-light-200">
                    <span className="text-primary-500 font-bold">Nachher:</span> System filtert automatisch vor.
                  </p>
                  <div className="bg-primary-500/10 border-l-4 border-primary-500 p-3">
                    <p className="text-primary-400 font-bold">
                      ➡️ Ergebnis: Nur noch echte Interessenten im Vertrieb.
                    </p>
                  </div>
                </div>
              </motion.div>
              
              {/* Beispiel 4 */}
              <motion.div 
                className="bg-dark-500 border border-dark-100 p-6"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                viewport={{ once: true }}
              >
                <h3 className="text-xl font-heading font-bold text-primary-500 mb-4">
                  Beispiel 4 – Interne Prozesse & Workflows
                </h3>
                <div className="space-y-3">
                  <p className="text-light-200">
                    <span className="text-red-400 font-bold">Vorher:</span> Angebote manuell erfassen, weiterleiten, tippen.
                  </p>
                  <p className="text-light-200">
                    <span className="text-primary-500 font-bold">Nachher:</span> Automatisierung übernimmt alles in Minuten.
                  </p>
                  <div className="bg-primary-500/10 border-l-4 border-primary-500 p-3">
                    <p className="text-primary-400 font-bold">
                      ➡️ Ergebnis: Fehlerquote fast null. Bearbeitungszeit 30 → 5 Minuten.
                    </p>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* STIMMEN AUS DER PRAXIS */}
      <section className="py-24 bg-dark-500">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <motion.h2 
              className="text-3xl md:text-4xl font-heading font-bold mb-12 text-primary-500 text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              Stimmen aus der Praxis
            </motion.h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <motion.div 
                className="bg-dark-400 border border-dark-100 p-6"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                viewport={{ once: true }}
              >
                <p className="text-light-200 italic">
                  „Endlich Schluss mit Doppelbuchungen – das spart jede Woche 10 Stunden."
                </p>
              </motion.div>
              
              <motion.div 
                className="bg-dark-400 border border-dark-100 p-6"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                viewport={{ once: true }}
              >
                <p className="text-light-200 italic">
                  „Seit dem Chatbot haben wir wieder Zeit für die wichtigen Dinge."
                </p>
              </motion.div>
              
              <motion.div 
                className="bg-dark-400 border border-dark-100 p-6"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                viewport={{ once: true }}
              >
                <p className="text-light-200 italic">
                  „Wir sprechen nur noch mit echten Interessenten – keine Zeitfresser mehr."
                </p>
              </motion.div>
              
              <motion.div 
                className="bg-dark-400 border border-dark-100 p-6"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                viewport={{ once: true }}
              >
                <p className="text-light-200 italic">
                  „Unsere Angebotsbearbeitung dauert jetzt Minuten statt einer halben Stunde."
                </p>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* ZUSATZLEISTUNG WEBSITES */}
      <section className="py-24 bg-dark-400">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <motion.h2 
              className="text-3xl md:text-4xl font-heading font-bold mb-8 text-primary-500 text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              Zusatzleistung: Websites
            </motion.h2>
            
            <div className="bg-dark-500 border border-primary-500/30 p-8 text-center">
              <motion.p 
                className="text-light-200 text-lg"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                viewport={{ once: true }}
              >
                Neben Automatisierungen entwickeln wir auch <span className="text-primary-500 font-bold">professionelle Websites</span>, die in wenigen Tagen live gehen.<br />
                Schnell, modern, responsiv – damit Ihr Online-Auftritt zu Ihrem Erfolg passt.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* UNSER ABLAUF */}
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
              Unser Ablauf
            </motion.h2>
            
            <div className="bg-dark-400 border border-dark-100 p-8">
              <div className="space-y-8">
                <div className="flex items-start space-x-6">
                  <motion.div 
                    className="bg-primary-500 text-dark-500 w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0 font-bold text-xl"
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                    viewport={{ once: true }}
                  >
                    1
                  </motion.div>
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                    viewport={{ once: true }}
                  >
                    <p className="text-xl text-light-100 mb-2">
                      <span className="text-primary-500 font-bold">Erstgespräch</span> – wir klären Ihre Ziele und Potenziale.
                    </p>
                  </motion.div>
                </div>
                
                <div className="flex justify-center">
                  <ArrowDown className="text-primary-500" size={32} />
                </div>
                
                <div className="flex items-start space-x-6">
                  <motion.div 
                    className="bg-primary-500 text-dark-500 w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0 font-bold text-xl"
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    viewport={{ once: true }}
                  >
                    2
                  </motion.div>
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    viewport={{ once: true }}
                  >
                    <p className="text-xl text-light-100 mb-2">
                      <span className="text-primary-500 font-bold">Planung</span> – wir entwerfen die passende Automatisierung.
                    </p>
                  </motion.div>
                </div>

                <div className="flex justify-center">
                  <ArrowDown className="text-primary-500" size={32} />
                </div>
                
                <div className="flex items-start space-x-6">
                  <motion.div 
                    className="bg-primary-500 text-dark-500 w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0 font-bold text-xl"
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                    viewport={{ once: true }}
                  >
                    3
                  </motion.div>
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                    viewport={{ once: true }}
                  >
                    <p className="text-xl text-light-100 mb-2">
                      <span className="text-primary-500 font-bold">Umsetzung</span> – schnelle Umsetzung, reibungslose Integration.
                    </p>
                  </motion.div>
                </div>

                <div className="flex justify-center">
                  <ArrowDown className="text-primary-500" size={32} />
                </div>
                
                <div className="flex items-start space-x-6">
                  <motion.div 
                    className="bg-primary-500 text-dark-500 w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0 font-bold text-xl"
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                    viewport={{ once: true }}
                  >
                    4
                  </motion.div>
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                    viewport={{ once: true }}
                  >
                    <p className="text-xl text-light-100 mb-2">
                      <span className="text-primary-500 font-bold">Support</span> – wir bleiben an Ihrer Seite, auch nach dem Go-Live.
                    </p>
                  </motion.div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CALL TO ACTION */}
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
              Lassen Sie uns über Ihre Prozesse sprechen!
            </motion.h2>
            
            <motion.p 
              className="text-light-200 text-lg mb-8"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
            >
              Jetzt unverbindlich Erstgespräch sichern und sehen, wie viel Zeit Sie ab morgen sparen können.
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

      {/* CONTACT FORM - bleibt unberührt */}
      <ContactForm />
    </div>
  );
};

export default Home;