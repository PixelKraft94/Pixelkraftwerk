import React from 'react';
import { motion } from 'framer-motion';
import { Clock, Zap, Target, CheckCircle, ArrowRight, Users, Settings, MessageCircle, Calendar } from 'lucide-react';
import ContactForm from '../components/ContactForm';
import { BackgroundPaths } from '../components/ui/background-paths';

const Solution: React.FC = () => {
  // Track Facebook Pixel event when component mounts
  React.useEffect(() => {
    // Check if fbq is available
    if (typeof window !== 'undefined' && (window as any).fbq) {
      (window as any).fbq('track', 'ViewContent', {
        content_name: 'Unsere Lösungen',
        content_category: 'Solution Page'
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
    <div className="bg-dark-500 pt-16">
      {/* HERO SECTION */}
      <section className="relative min-h-screen flex items-center justify-center bg-dark-500 overflow-hidden">
        <BackgroundPaths />
        
        <div className="container mx-auto px-4 z-10">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div 
              className="space-y-4 mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <h1 className="text-3xl md:text-4xl lg:text-5xl text-light-100 font-heading">
                Wie viele Aufgaben werden in Ihrem Unternehmen noch per Hand erledigt?
              </h1>
            </motion.div>
            
            <motion.p 
              className="text-lg md:text-xl text-light-200 mb-8"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              viewport={{ once: true }}
            >
              Viele Unternehmen verlieren täglich Zeit, Energie und Fokus –<br />
              weil alltägliche Aufgaben noch immer manuell ablaufen.
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
                Jetzt starten
              </button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* PROBLEMAUFBAU SECTION */}
      <section className="py-24 bg-dark-400">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <motion.h2 
              className="text-2xl md:text-3xl font-heading font-bold mb-12 text-primary-500 text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              Das kennen Sie bestimmt:
            </motion.h2>
            
            <div className="bg-dark-300 border border-dark-100 p-8 space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-1 gap-6">
                <motion.div 
                  className="flex items-start space-x-4"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className="bg-primary-500/20 text-primary-500 w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-xl">📋</span>
                  </div>
                  <div>
                    <p className="text-xl text-light-100 mb-2">
                      <span className="text-primary-500 font-bold">Doppelte Datenpflege</span> täglich
                    </p>
                    <p className="text-light-300 text-sm">
                      ➤ <em>CRM, Excel, E-Mails – alles mehrfach eingeben</em>
                    </p>
                  </div>
                </motion.div>
                
                <motion.div 
                  className="flex items-start space-x-4"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  viewport={{ once: true }}
                >
                  <div className="bg-primary-500/20 text-primary-500 w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-xl">📧</span>
                  </div>
                  <div>
                    <p className="text-xl text-light-100 mb-2">
                      <span className="text-primary-500 font-bold">Kundenanfragen</span> manuell bearbeiten
                    </p>
                    <p className="text-light-300 text-sm">
                      ➤ <em>Jede E-Mail einzeln lesen, verstehen, antworten</em>
                    </p>
                  </div>
                </motion.div>
                
                <motion.div 
                  className="flex items-start space-x-4"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                  viewport={{ once: true }}
                >
                  <div className="bg-primary-500/20 text-primary-500 w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-xl">📞</span>
                  </div>
                  <div>
                    <p className="text-xl text-light-100 mb-2">
                      <span className="text-primary-500 font-bold">Termine</span> per Telefon abstimmen
                    </p>
                    <p className="text-light-300 text-sm">
                      ➤ <em>Hin und her telefonieren, Kalender abgleichen</em>
                    </p>
                  </div>
                </motion.div>
              </div>
              
              <div className="border-t border-dark-100 pt-6">
                <motion.p 
                  className="text-center text-lg text-light-200"
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.4 }}
                  viewport={{ once: true }}
                >
                  💡 Schon <span className="text-primary-500 font-bold">15 Minuten täglich = 65 Stunden pro Jahr</span> verloren –<br />
                  Ressourcen, die bares Geld kosten.
                </motion.p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SCHMERZ VERSTÄRKEN SECTION */}
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
              Die Folge?
            </motion.h2>
            
            <div className="bg-dark-400 border border-dark-100 p-8">
              <div className="space-y-8">
                <div className="flex items-center space-x-4">
                  <motion.div 
                    className="bg-red-500/20 text-red-400 w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0"
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                    viewport={{ once: true }}
                  >
                    <span className="text-xl">❌</span>
                  </motion.div>
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                    viewport={{ once: true }}
                  >
                    <p className="text-xl text-light-100 mb-1">
                      <span className="text-red-400 font-bold">Die Abläufe stocken</span> – Warteschleifen entstehen, Kunden werden ungeduldig
                    </p>
                  </motion.div>
                </div>
                
                <div className="h-px bg-dark-100"></div>
                
                <div className="flex items-center space-x-4">
                  <motion.div 
                    className="bg-red-500/20 text-red-400 w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0"
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    viewport={{ once: true }}
                  >
                    <span className="text-xl">❌</span>
                  </motion.div>
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    viewport={{ once: true }}
                  >
                    <p className="text-xl text-light-100 mb-1">
                      <span className="text-red-400 font-bold">Kleine Aufgaben summieren sich</span> – aus 5 Minuten werden Stunden
                    </p>
                  </motion.div>
                </div>
                
                <div className="h-px bg-dark-100"></div>
                
                <div className="flex items-center space-x-4">
                  <motion.div 
                    className="bg-red-500/20 text-red-400 w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0"
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                    viewport={{ once: true }}
                  >
                    <span className="text-xl">❌</span>
                  </motion.div>
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                    viewport={{ once: true }}
                  >
                    <p className="text-xl text-light-100 mb-1">
                      <span className="text-red-400 font-bold">Entwicklung bleibt auf der Strecke</span> – der Alltag drückt, Innovation stoppt
                    </p>
                  </motion.div>
                </div>
                
                <div className="border-t border-dark-100 pt-6 text-center">
                  <motion.p 
                    className="text-lg text-red-300"
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                    viewport={{ once: true }}
                  >
                    💡 <em>Ihr Team arbeitet hart – aber nicht strategisch.</em>
                  </motion.p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* LÖSUNG ANBIETEN SECTION */}
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
              Die Lösung: Individuelle Automatisierungen
            </motion.h2>
            
            <div className="bg-dark-500 border border-primary-500/30 p-8">
              <div className="space-y-8">
                <motion.div 
                  className="text-center"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                  viewport={{ once: true }}
                >
                  <p className="text-xl text-light-100 mb-4">
                    Wir entwickeln <span className="text-primary-500 font-bold">Automatisierungslösungen</span> –
                  </p>
                  <p className="text-lg text-light-200">
                    <span className="text-primary-500 font-bold">präzise für Ihre Abläufe, ohne zusätzliche Tools oder IT-Komplexität.</span>
                  </p>
                </motion.div>
                
                <div className="h-px bg-primary-500/30"></div>
                
                <motion.div 
                  className="grid grid-cols-1 md:grid-cols-3 gap-6"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  viewport={{ once: true }}
                >
                  <div className="text-center">
                    <div className="bg-primary-500/20 text-primary-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-3">
                      <Settings size={28} />
                    </div>
                    <p className="text-lg text-light-100 font-bold mb-1">⚙️ Interne Prozesse</p>
                    <p className="text-sm text-light-300">nahtlos automatisiert</p>
                  </div>
                  <div className="text-center">
                    <div className="bg-primary-500/20 text-primary-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-3">
                      <MessageCircle size={28} />
                    </div>
                    <p className="text-lg text-light-100 font-bold mb-1">💬 Kundenkommunikation</p>
                    <p className="text-sm text-light-300">rund um die Uhr</p>
                  </div>
                  <div className="text-center">
                    <div className="bg-primary-500/20 text-primary-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-3">
                      <Calendar size={28} />
                    </div>
                    <p className="text-lg text-light-100 font-bold mb-1">📅 Terminverwaltung</p>
                    <p className="text-sm text-light-300">vollautomatisch</p>
                  </div>
                </motion.div>
                
                <div className="h-px bg-primary-500/30"></div>
                
                <motion.div 
                  className="text-center"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                  viewport={{ once: true }}
                >
                  <div className="bg-primary-500/10 border-l-4 border-primary-500 p-4 text-left">
                    <p className="text-lg text-light-100">
                      ✅ Damit Ihr Unternehmen <span className="text-primary-500 font-bold">strukturiert arbeitet</span><br />
                      ✅ und der <span className="text-primary-500 font-bold">Fokus wieder auf dem Wesentlichen</span> liegt
                    </p>
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ABLAUF SECTION */}
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
              Was passiert jetzt?
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
                      <span className="text-primary-500 font-bold">Sie schildern Ihre Bremsfaktoren</span>
                    </p>
                    <p className="text-light-300 text-sm">
                      ➤ Einfach im Formular beschreiben – wir verstehen auch komplexe Abläufe
                    </p>
                  </motion.div>
                </div>
                
                <div className="flex justify-center">
                  <ArrowRight className="text-primary-500" size={32} />
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
                      <span className="text-primary-500 font-bold">Wir liefern konkrete Ideen</span>
                    </p>
                    <p className="text-light-300 text-sm mb-3">
                      ➤ Meist binnen 24h mit einer ersten Einschätzung und Lösungsidee
                    </p>
                  </motion.div>
                </div>

                <div className="text-center mt-8">
                  <button 
                    onClick={scrollToContactForm}
                    className="inline-flex items-center px-8 py-3 bg-primary-500 text-dark-500 font-heading font-bold hover:bg-primary-400 transition-colors duration-300"
                  >
                    <ArrowRight className="mr-2" size={20} />
                    Jetzt starten
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* TRUST & SOCIAL PROOF SECTION */}
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
              Warum das funktioniert:
            </motion.h2>
            
            <div className="bg-dark-500 border border-primary-500/30 p-8">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <motion.div 
                  className="text-center"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  viewport={{ once: true }}
                >
                  <div className="bg-primary-500/20 text-primary-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Users size={28} />
                  </div>
                  <p className="text-xl text-light-100 font-bold mb-2">
                    👤 <span className="text-primary-500">Ein fester</span> Ansprechpartner
                  </p>
                  <p className="text-light-300 text-sm">
                    persönliche Betreuung, kein Callcenter
                  </p>
                </motion.div>
                
                <motion.div 
                  className="text-center"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                  viewport={{ once: true }}
                >
                  <div className="bg-primary-500/20 text-primary-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Target size={28} />
                  </div>
                  <p className="text-xl text-light-100 font-bold mb-2">
                    📋 <span className="text-primary-500">Strukturierte</span> Umsetzung
                  </p>
                  <p className="text-light-300 text-sm">
                    klare Schritte, transparente Zeitpläne
                  </p>
                </motion.div>
                
                <motion.div 
                  className="text-center"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.4 }}
                  viewport={{ once: true }}
                >
                  <div className="bg-primary-500/20 text-primary-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Clock size={28} />
                  </div>
                  <p className="text-xl text-light-100 font-bold mb-2">
                    ⏳ <span className="text-primary-500">Echte</span> Entlastung
                  </p>
                  <p className="text-light-300 text-sm">
                    spürbare Zeitersparnis im Alltag
                  </p>
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CALL-TO-ACTION SECTION */}
      <section className="py-24 bg-dark-500">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <motion.h2 
              className="text-3xl md:text-4xl font-heading font-bold mb-12 text-primary-500"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              Der erste Schritt ist ganz einfach
            </motion.h2>
            
            <div className="bg-dark-400 border border-dark-100 p-8 mb-12">
              <div className="space-y-8">
                <motion.div 
                  className="flex items-center justify-center space-x-6"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className="bg-primary-500/20 text-primary-500 w-16 h-16 rounded-full flex items-center justify-center">
                    <span className="text-2xl">💬</span>
                  </div>
                  <div className="text-left">
                    <p className="text-xl text-light-100 mb-1">
                      <span className="text-primary-500 font-bold">3 Minuten Formular ausfüllen reicht völlig</span> –
                    </p>
                    <p className="text-light-300 text-sm">
                      und wir zeigen Ihnen konkret, wie Ihre Prozesse einfacher und effizienter laufen.
                    </p>
                  </div>
                </motion.div>
                
                <div className="flex justify-center">
                  <ArrowRight className="text-primary-500" size={32} />
                </div>
                
                <motion.div 
                  className="flex items-center justify-center space-x-6"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  viewport={{ once: true }}
                >
                  <div className="bg-primary-500/20 text-primary-500 w-16 h-16 rounded-full flex items-center justify-center">
                    <span className="text-2xl">💡</span>
                  </div>
                  <div className="text-left">
                    <p className="text-xl text-light-100 mb-1">
                      Maßgeschneiderte <span className="text-primary-500 font-bold">Lösungsvorschläge</span> für Ihre Situation
                    </p>
                  </div>
                </motion.div>
              </div>
            </div>
            
            <motion.button 
              onClick={scrollToContactForm}
              className="inline-block px-8 py-3 bg-primary-500 text-dark-500 font-heading font-bold hover:bg-primary-400 transition-colors duration-300"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              viewport={{ once: true }}
            >
              Formular jetzt ausfüllen
            </motion.button>
          </div>
        </div>
      </section>

      {/* CONTACT FORM */}
      <ContactForm />
    </div>
  );
};

export default Solution;