import React from 'react';
import { motion } from 'framer-motion';
import { Clock, Zap, Target, CheckCircle, ArrowRight, Users } from 'lucide-react';
import ContactForm from '../components/ContactForm';
import { BackgroundPaths } from '../components/ui/background-paths';

const Solution: React.FC = () => {
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
          </div>
        </div>
      </section>

      {/* PROBLEMS SECTION */}
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
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
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
                
                <motion.div 
                  className="flex items-start space-x-4"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.4 }}
                  viewport={{ once: true }}
                >
                  <div className="bg-primary-500/20 text-primary-500 w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0">
                    <Clock className="text-primary-500" size={24} />
                  </div>
                  <div>
                    <p className="text-xl text-light-100 mb-2">
                      Das <span className="text-primary-500 font-bold">Tagesgeschäft frisst Ressourcen</span>
                    </p>
                    <p className="text-light-300 text-sm">
                      💡 <em>15 Min täglich = 65 Stunden im Jahr verloren</em>
                    </p>
                  </div>
                </motion.div>
              </div>
              
              <div className="border-t border-dark-100 pt-6">
                <motion.p 
                  className="text-center text-lg text-light-200"
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.5 }}
                  viewport={{ once: true }}
                >
                  ➤ <em className="text-primary-400">Das passiert täglich – und kostet bares Geld.</em>
                </motion.p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* DIE FOLGE SECTION */}
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
                    <Zap size={24} />
                  </motion.div>
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                    viewport={{ once: true }}
                  >
                    <p className="text-xl text-light-100 mb-1">
                      Die <span className="text-red-400 font-bold">Abläufe stocken</span>
                    </p>
                    <p className="text-light-300 text-sm">
                      Warteschleifen entstehen, Kunden werden ungeduldig
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
                    <Target size={24} />
                  </motion.div>
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    viewport={{ once: true }}
                  >
                    <p className="text-xl text-light-100 mb-1">
                      <span className="text-red-400 font-bold">Kleine Aufgaben summieren sich</span>
                    </p>
                    <p className="text-light-300 text-sm">
                      Aus 5 Minuten werden Stunden – täglich
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
                    <Users size={24} />
                  </motion.div>
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                    viewport={{ once: true }}
                  >
                    <p className="text-xl text-light-100 mb-1">
                      <span className="text-red-400 font-bold">Entwicklung wird zur Nebensache</span>
                    </p>
                    <p className="text-light-300 text-sm">
                      Der Alltag drückt – Innovation bleibt auf der Strecke
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

      {/* DIE LÖSUNG SECTION */}
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
              Die Lösung?
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
                    Wir entwickeln <span className="text-primary-500 font-bold">individuelle Automatisierungslösungen</span> –
                  </p>
                  <p className="text-lg text-light-200">
                    präzise für Ihre Abläufe, ohne zusätzliche Tools oder IT-Komplexität.
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
                      <CheckCircle size={28} />
                    </div>
                    <p className="text-lg text-light-100 font-bold mb-1">Interne Prozesse</p>
                    <p className="text-sm text-light-300">Nahtlos automatisiert</p>
                  </div>
                  <div className="text-center">
                    <div className="bg-primary-500/20 text-primary-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-3">
                      <CheckCircle size={28} />
                    </div>
                    <p className="text-lg text-light-100 font-bold mb-1">Kundenkommunikation</p>
                    <p className="text-sm text-light-300">Rund um die Uhr</p>
                  </div>
                  <div className="text-center">
                    <div className="bg-primary-500/20 text-primary-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-3">
                      <CheckCircle size={28} />
                    </div>
                    <p className="text-lg text-light-100 font-bold mb-1">Terminverwaltung</p>
                    <p className="text-sm text-light-300">Vollautomatisch</p>
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
                  <p className="text-xl text-light-100 mb-2">
                    Wir helfen Ihnen, <span className="text-primary-500 font-bold">wiederkehrende Aufgaben</span> so zu automatisieren,
                  </p>
                  <p className="text-lg text-light-200 mb-4">
                    dass sie einfach <span className="text-primary-500 font-bold">im Hintergrund laufen</span>.
                  </p>
                  <div className="bg-primary-500/10 border-l-4 border-primary-500 p-4 text-left">
                    <p className="text-lg text-light-100">
                      ✓ Damit Ihr Unternehmen <span className="text-primary-500 font-bold">strukturiert arbeiten</span> kann –<br />
                      ✓ und der <span className="text-primary-500 font-bold">Fokus wieder auf dem Wesentlichen</span> liegt.
                    </p>
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* WAS PASSIERT JETZT SECTION */}
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
                      Sie sagen uns, welche <span className="text-primary-500 font-bold">Aufgaben in Ihrem Arbeitsalltag gerade bremsen</span>.
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
                      Wir melden uns mit <span className="text-primary-500 font-bold">konkreten Ideen</span>, wie wir diese Abläufe vereinfachen können –
                    </p>
                    <p className="text-lg text-light-200 mb-3">
                      <span className="text-primary-500 font-bold">schnell, klar und auf Ihre Situation abgestimmt</span>.
                    </p>
                    <div className="bg-primary-500/10 border-l-4 border-primary-500 p-3">
                      <p className="text-light-300 text-sm">
                        💡 <em>Meist binnen 24h – mit einer ersten Einschätzung und Lösungsidee</em>
                      </p>
                    </div>
                  </motion.div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CONTACT FORM */}
      <ContactForm />

      {/* WARUM DAS FUNKTIONIERT SECTION */}
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
              <motion.div 
                className="text-center mb-8"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                viewport={{ once: true }}
              >
                <p className="text-xl text-light-100 mb-4">
                  Wir liefern <span className="text-primary-500 font-bold">keine Standard-Software</span>, sondern <span className="text-primary-500 font-bold">individuelle Systeme</span>,
                </p>
                <p className="text-lg text-light-200">
                  die sich sauber in Ihre Prozesse einfügen – statt alles auf den Kopf zu stellen.
                </p>
              </motion.div>
              
              <div className="h-px bg-primary-500/30 mb-8"></div>
              
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
                    <span className="text-primary-500">Ein fester</span> Ansprechpartner
                  </p>
                  <p className="text-light-300 text-sm">
                    Kein Callcenter – persönliche Betreuung von A bis Z
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
                    <span className="text-primary-500">Strukturierte</span> Umsetzung
                  </p>
                  <p className="text-light-300 text-sm">
                    Klare Schritte, transparente Zeitpläne, messbare Ergebnisse
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
                    <CheckCircle size={28} />
                  </div>
                  <p className="text-xl text-light-100 font-bold mb-2">
                    <span className="text-primary-500">Echte</span> Entlastung
                  </p>
                  <p className="text-light-300 text-sm">
                    Nicht nur Technik – spürbare Zeitersparnis im Alltag
                  </p>
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ERSTER SCHRITT SECTION */}
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
              Der erste Schritt ist ganz einfach:
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
                      Sie geben uns einen <span className="text-primary-500 font-bold">kurzen Einblick</span> –
                    </p>
                    <p className="text-light-300 text-sm">
                      3 Minuten Formular ausfüllen reicht völlig
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
                      und wir zeigen Ihnen <span className="text-primary-500 font-bold">konkret</span>, wie Ihre Prozesse
                    </p>
                    <p className="text-lg text-light-200 mb-1">
                      <span className="text-primary-500 font-bold">einfacher, effizienter und entlastend</span> laufen können.
                    </p>
                    <p className="text-light-300 text-sm">
                      Maßgeschneiderte Lösungsvorschläge für Ihre Situation
                    </p>
                  </div>
                </motion.div>
                
                <div className="border-t border-dark-100 pt-6">
                  <motion.div 
                    className="grid grid-cols-1 md:grid-cols-3 gap-6"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                    viewport={{ once: true }}
                  >
                    <div className="flex items-center space-x-3">
                      <CheckCircle className="text-primary-500" size={20} />
                      <p className="text-light-100">Kein Verkaufsdruck</p>
                    </div>
                    <div className="flex items-center space-x-3">
                      <CheckCircle className="text-primary-500" size={20} />
                      <p className="text-light-100">Kein Technik-Kauderwelsch</p>
                    </div>
                    <div className="flex items-center space-x-3">
                      <CheckCircle className="text-primary-500" size={20} />
                      <p className="text-light-100 font-bold text-primary-500">Nur Klarheit</p>
                    </div>
                  </motion.div>
                </div>
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
              Jetzt Formular ausfüllen und entlastet werden
            </motion.button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Solution;