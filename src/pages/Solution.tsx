import React from 'react';
import { motion } from 'framer-motion';
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
        
        <div className="container mx-auto px-4 pt-16 z-10">
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
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.6 }}
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
            
            <div className="space-y-6 text-center">
              <motion.div 
                className="flex items-center justify-center text-xl text-light-100"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                viewport={{ once: true }}
              >
                <span className="text-2xl mr-4">📋</span>
                <p>Daten werden doppelt gepflegt.</p>
              </motion.div>
              
              <motion.div 
                className="flex items-center justify-center text-xl text-light-100"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                viewport={{ once: true }}
              >
                <span className="text-2xl mr-4">📧</span>
                <p>Kundenanfragen per E-Mail beantwortet.</p>
              </motion.div>
              
              <motion.div 
                className="flex items-center justify-center text-xl text-light-100"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                viewport={{ once: true }}
              >
                <span className="text-2xl mr-4">📞</span>
                <p>Termine telefonisch abgestimmt.</p>
              </motion.div>
              
              <motion.div 
                className="flex items-center justify-center text-xl text-light-100"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                viewport={{ once: true }}
              >
                <span className="text-2xl mr-4">⏰</span>
                <p>Und das Tagesgeschäft frisst Ressourcen – ohne echten Fortschritt.</p>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* DIE FOLGE SECTION */}
      <section className="py-24 bg-dark-500">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-12 text-primary-500 text-center">
              Die Folge?
            </h2>
            
            <div className="space-y-6 text-center text-xl text-light-100">
              <p>Die Abläufe stocken.</p>
              <p>Kleine Aufgaben summieren sich.</p>
              <p>Und Entwicklung wird zur Nebensache, weil der Alltag drückt.</p>
            </div>
          </div>
        </div>
      </section>

      {/* DIE LÖSUNG SECTION */}
      <section className="py-24 bg-dark-400">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-12 text-primary-500 text-center">
              Die Lösung?
            </h2>
            
            <div className="space-y-6 text-center text-lg text-light-200">
              <p>
                Wir entwickeln individuelle Automatisierungslösungen –<br />
                präzise für Ihre Abläufe, ohne zusätzliche Tools oder IT-Komplexität.
              </p>
              <p>
                Ob interne Prozesse, Kundenkommunikation oder Terminverwaltung:<br />
                Wir helfen Ihnen, wiederkehrende Aufgaben so zu automatisieren,<br />
                dass sie einfach im Hintergrund laufen.
              </p>
              <p>
                Damit Ihr Unternehmen strukturiert arbeiten kann –<br />
                und der Fokus wieder auf dem Wesentlichen liegt.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* WAS PASSIERT JETZT SECTION */}
      <section className="py-24 bg-dark-500">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-12 text-primary-500 text-center">
              Was passiert jetzt?
            </h2>
            
            <div className="space-y-6 text-center text-lg text-light-200">
              <p>Sie sagen uns, welche Aufgaben in Ihrem Arbeitsalltag gerade bremsen.</p>
              <p>
                Wir melden uns mit konkreten Ideen, wie wir diese Abläufe vereinfachen und automatisieren können –<br />
                schnell, klar und auf Ihre Situation abgestimmt.
              </p>
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
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-12 text-primary-500 text-center">
              Warum das funktioniert:
            </h2>
            
            <div className="space-y-6 text-center text-lg text-light-200">
              <p>
                Wir liefern keine Standard-Software, sondern individuelle Systeme,<br />
                die sich sauber in Ihre Prozesse einfügen – statt alles auf den Kopf zu stellen.
              </p>
              <div className="space-y-4 text-xl text-light-100">
                <p>Ein fester Ansprechpartner.</p>
                <p>Strukturierte Umsetzung.</p>
                <p>Echte Entlastung.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ERSTER SCHRITT SECTION */}
      <section className="py-24 bg-dark-500">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-12 text-primary-500">
              Der erste Schritt ist ganz einfach:
            </h2>
            
            <div className="space-y-6 text-lg text-light-200 mb-12">
              <p>Sie geben uns einen kurzen Einblick –</p>
              <p>
                und wir zeigen Ihnen konkret, wie Ihre Prozesse einfacher, effizienter und entlastend laufen können.
              </p>
              <p>
                Kein Verkaufsdruck. Kein Technik-Kauderwelsch.<br />
                Nur Klarheit.
              </p>
            </div>
            
            <button 
              onClick={scrollToContactForm}
              className="inline-block px-8 py-3 bg-primary-500 text-dark-500 font-heading font-bold hover:bg-primary-400 transition-colors duration-300"
            >
              Jetzt Formular ausfüllen und entlastet werden
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Solution;