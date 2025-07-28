import React from 'react';
import { motion } from 'framer-motion';
import ContactForm from '../components/ContactForm';
import { 
  Phone, 
  MessageSquare, 
  Clock, 
  Calendar, 
  CheckCircle, 
  XCircle, 
  Database, 
  Globe, 
  AlertCircle, 
  HelpCircle, 
  DollarSign, 
  Cpu, 
  Users, 
  ChevronRight, 
  FormInput 
} from 'lucide-react';
import { BackgroundPaths } from '../components/ui/background-paths';

const Solution: React.FC = () => {
  return (
    <div className="bg-dark-500 pt-16">
      {/* HERO SECTION */}
      <section className="relative min-h-[80vh] flex items-center justify-center bg-dark-500 overflow-hidden">
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
                Sie bekommen Anfragen.
              </h1>
              <h1 className="text-3xl md:text-4xl lg:text-5xl text-light-100 font-heading">
                Aber verlieren Kunden.
              </h1>
              <h1 className="text-3xl md:text-4xl lg:text-5xl text-primary-500 font-heading">
                Zeit für ein System, das niemals schläft.
              </h1>
            </motion.div>
            
            <motion.p 
              className="text-lg md:text-xl text-light-200 mb-8"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.6 }}
            >
              Pixel Kraftwerk entwickelt KI-gestützte Systeme, die verkaufen, beraten und Termine vereinbaren –
              24 Stunden am Tag. Ohne Personal. Ohne Ausfälle. Ohne Komplexität.
            </motion.p>
            
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, ease: "easeOut", delay: 1.2 }}
              className="text-center"
            >
              <a 
                href="/contact" 
                className="inline-block px-8 py-3 bg-primary-500 text-dark-500 font-heading font-bold hover:bg-primary-400 transition-colors duration-300"
              >
                Jetzt kostenlose Demo sichern
              </a>
            </motion.div>
          </div>
        </div>
      </section>

      {/* PROBLEM SECTION */}
      <section className="py-24 bg-dark-400">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-12 text-primary-500 text-center">
              Jeden Tag neue Aufgaben – doch am Abend bleibt vor allem Chaos?
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
              <div className="bg-dark-500 border border-dark-100 p-6">
                <div className="flex items-start">
                  <div className="bg-red-500/20 text-red-500 w-12 h-12 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                    <Phone size={24} />
                  </div>
                  <div>
                    <p className="text-light-100">
                      Verpasste Anrufe, die nie zurückkommen
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="bg-dark-500 border border-dark-100 p-6">
                <div className="flex items-start">
                  <div className="bg-red-500/20 text-red-500 w-12 h-12 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                    <MessageSquare size={24} />
                  </div>
                  <div>
                    <p className="text-light-100">
                      Keine Zeit, um jede Anfrage zu beantworten
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="bg-dark-500 border border-dark-100 p-6">
                <div className="flex items-start">
                  <div className="bg-red-500/20 text-red-500 w-12 h-12 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                    <Calendar size={24} />
                  </div>
                  <div>
                    <p className="text-light-100">
                      Terminabsprachen über E-Mail, Messenger oder Telefon
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="bg-dark-500 border border-dark-100 p-6">
                <div className="flex items-start">
                  <div className="bg-red-500/20 text-red-500 w-12 h-12 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                    <Users size={24} />
                  </div>
                  <div>
                    <p className="text-light-100">
                      Interessenten, die einfach verschwinden
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="bg-dark-500 border border-dark-100 p-6 md:col-span-2">
                <div className="flex items-start">
                  <div className="bg-red-500/20 text-red-500 w-12 h-12 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                    <Database size={24} />
                  </div>
                  <div>
                    <p className="text-light-100">
                      Systeme, die nicht miteinander kommunizieren
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="text-center text-xl text-light-100 mb-12">
              Viele Unternehmer führen ihr Unternehmen – und spielen gleichzeitig ihren eigenen Assistenten.
              <br />
              <span className="text-primary-500 font-heading font-bold">Das muss nicht sein.</span>
            </div>
          </div>
        </div>
      </section>

      {/* SOLUTION SECTION */}
      <section className="py-24 bg-dark-500">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-12 text-primary-500 text-center">
              Was wir für Sie bauen, arbeitet – auch wenn Sie schlafen.
            </h2>
            
            <h3 className="text-xl font-heading font-bold text-light-100 mb-8 text-center">
              Unsere Lösungen im Überblick:
            </h3>
            
            <div className="space-y-6 mb-12">
              <div className="bg-dark-400 border border-dark-100 p-6">
                <div className="flex items-start">
                  <div className="bg-primary-500/20 text-primary-500 w-12 h-12 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                    <MessageSquare size={24} />
                  </div>
                  <div>
                    <p className="text-light-100">
                      <span className="font-heading font-bold">KI-Chatbots:</span> Automatische Kommunikation auf Ihrer Website oder per Messenger
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="bg-dark-400 border border-dark-100 p-6">
                <div className="flex items-start">
                  <div className="bg-primary-500/20 text-primary-500 w-12 h-12 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                    <Phone size={24} />
                  </div>
                  <div>
                    <p className="text-light-100">
                      <span className="font-heading font-bold">Telefonagenten:</span> 24/7 erreichbar, kompetent, freundlich, mit automatischer Dokumentation
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="bg-dark-400 border border-dark-100 p-6">
                <div className="flex items-start">
                  <div className="bg-primary-500/20 text-primary-500 w-12 h-12 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                    <Database size={24} />
                  </div>
                  <div>
                    <p className="text-light-100">
                      <span className="font-heading font-bold">CRM-Automatisierung:</span> Jeder Lead wird automatisch erfasst, verfolgt und gepflegt
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="bg-dark-400 border border-dark-100 p-6">
                <div className="flex items-start">
                  <div className="bg-primary-500/20 text-primary-500 w-12 h-12 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                    <Globe size={24} />
                  </div>
                  <div>
                    <p className="text-light-100">
                      <span className="font-heading font-bold">Moderne Websites:</span> Verkaufsstark, mobil optimiert – und in nur 3 Tagen vollständig umgesetzt
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-primary-500/10 border border-primary-500 p-8 mb-12 text-center">
              <h3 className="text-xl font-heading font-bold text-primary-500 mb-4">
                Und das Beste:
              </h3>
              <p className="text-light-100 mb-4">
                Wir erstellen für Sie eine kostenlose Demo – exakt auf Ihr Unternehmen zugeschnitten.
              </p>
              <p className="text-light-100 mb-4">
                Sie sagen uns, was Sie automatisieren möchten – wir liefern Ihnen einen funktionsfähigen Prototyp.
                Echt. Greifbar. Testbereit. Noch bevor Sie investieren.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ/OBJECTIONS SECTION */}
      <section className="py-24 bg-dark-400">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-12 text-primary-500 text-center">
              Funktioniert das wirklich?
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
              <div className="bg-dark-500 border border-dark-100 p-6">
                <h3 className="text-xl font-heading font-bold text-primary-500 mb-4 flex items-center">
                  <HelpCircle size={24} className="mr-2" />
                  "Ich möchte keinen Roboter-Service."
                </h3>
                <p className="text-light-200">
                  Unsere Systeme reagieren menschlich, freundlich und intelligent – und liefern greifbare Ergebnisse.
                </p>
              </div>
              
              <div className="bg-dark-500 border border-dark-100 p-6">
                <h3 className="text-xl font-heading font-bold text-primary-500 mb-4 flex items-center">
                  <DollarSign size={24} className="mr-2" />
                  "Klingt teuer."
                </h3>
                <p className="text-light-200">
                  Eine einzige verpasste Anfrage kostet oft mehr als unser gesamter Service.
                </p>
              </div>
              
              <div className="bg-dark-500 border border-dark-100 p-6">
                <h3 className="text-xl font-heading font-bold text-primary-500 mb-4 flex items-center">
                  <Cpu size={24} className="mr-2" />
                  "Wir haben keine Technikabteilung."
                </h3>
                <p className="text-light-200">
                  Brauchen Sie nicht. Sie müssen nichts installieren, nichts warten, nichts pflegen.
                  Wir übernehmen alles – Einrichtung, Anpassung, Betrieb.
                  Sie lehnen sich zurück. Wir liefern das System.
                </p>
              </div>
              
              <div className="bg-dark-500 border border-dark-100 p-6">
                <h3 className="text-xl font-heading font-bold text-primary-500 mb-4 flex items-center">
                  <AlertCircle size={24} className="mr-2" />
                  "Ich möchte vorher testen."
                </h3>
                <p className="text-light-200">
                  Genau deshalb erstellen wir für Sie eine kostenlose, voll funktionsfähige Demo – maßgeschneidert, realitätsnah, einsatzbereit.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* URGENCY SECTION */}
      <section className="py-24 bg-dark-500">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-8 text-primary-500">
              Wir nehmen nur drei neue Kunden pro Monat auf.
            </h2>
            
            <div className="mb-12">
              <h3 className="text-xl font-heading font-bold text-light-100 mb-4">
                Warum?
              </h3>
              <p className="text-light-200 mb-6">
                Weil jede Lösung auf das jeweilige Unternehmen zugeschnitten wird. Keine Baukastensysteme, keine Standardschablonen.
              </p>
              
              <div className="inline-block border-2 border-primary-500 px-6 py-3 text-xl text-primary-500 font-heading font-bold">
                Wer zuerst testet, automatisiert zuerst – und sichert sich den Vorsprung vor dem Wettbewerb.
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PROCESS SECTION */}
      <section className="py-24 bg-dark-400">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4 text-primary-500 text-center">
              Maximale Wirkung. Minimaler Aufwand für Sie.
            </h2>
            <p className="text-light-200 mb-16 text-center">
              Sie müssen nichts vorbereiten, nichts umsetzen, nichts managen.<br />
              Wir übernehmen die Arbeit – Sie sehen die Ergebnisse.
            </p>
            
            <div className="space-y-16">
              {/* Step 1 */}
              <div className="flex flex-col md:flex-row items-center">
                <div className="bg-primary-500 text-dark-500 w-16 h-16 rounded-full flex items-center justify-center mb-4 md:mb-0 md:mr-6 flex-shrink-0 font-heading font-bold text-2xl">
                  1
                </div>
                <div className="text-center md:text-left">
                  <h3 className="text-xl font-heading font-bold text-primary-500 mb-3">
                    Demo anfordern
                  </h3>
                  <p className="text-light-200">
                    Sie füllen unser kurzes Formular aus. Kein kompliziertes Briefing – nur das Nötigste.
                  </p>
                </div>
              </div>
              
              {/* Step 2 */}
              <div className="flex flex-col md:flex-row items-center">
                <div className="bg-primary-500 text-dark-500 w-16 h-16 rounded-full flex items-center justify-center mb-4 md:mb-0 md:mr-6 flex-shrink-0 font-heading font-bold text-2xl">
                  2
                </div>
                <div className="text-center md:text-left">
                  <h3 className="text-xl font-heading font-bold text-primary-500 mb-3">
                    Persönliches Vorgespräch
                  </h3>
                  <p className="text-light-200">
                    Wir melden uns telefonisch, klären Ihre Ziele und Prioritäten. Kein Verkaufsgespräch – nur echtes Verständnis.
                  </p>
                </div>
              </div>
              
              {/* Step 3 */}
              <div className="flex flex-col md:flex-row items-center">
                <div className="bg-primary-500 text-dark-500 w-16 h-16 rounded-full flex items-center justify-center mb-4 md:mb-0 md:mr-6 flex-shrink-0 font-heading font-bold text-2xl">
                  3
                </div>
                <div className="text-center md:text-left">
                  <h3 className="text-xl font-heading font-bold text-primary-500 mb-3">
                    Individuelle Demo erhalten
                  </h3>
                  <p className="text-light-200">
                    Innerhalb weniger Tage erhalten Sie Ihre funktionsfähige Vorschau:
                    Chatbot, Telefonagent oder Website – einsatzbereit.
                  </p>
                </div>
              </div>
              
              {/* Step 4 */}
              <div className="flex flex-col md:flex-row items-center">
                <div className="bg-primary-500 text-dark-500 w-16 h-16 rounded-full flex items-center justify-center mb-4 md:mb-0 md:mr-6 flex-shrink-0 font-heading font-bold text-2xl">
                  4
                </div>
                <div className="text-center md:text-left">
                  <h3 className="text-xl font-heading font-bold text-primary-500 mb-3">
                    Entscheidung treffen – oder nicht
                  </h3>
                  <p className="text-light-200">
                    Wenn es passt: starten wir direkt. Wenn nicht: kein Problem. Es war nur ein Test – kostenlos.
                  </p>
                </div>
              </div>
              
              {/* Step 5 */}
              <div className="flex flex-col md:flex-row items-center">
                <div className="bg-primary-500 text-dark-500 w-16 h-16 rounded-full flex items-center justify-center mb-4 md:mb-0 md:mr-6 flex-shrink-0 font-heading font-bold text-2xl">
                  5
                </div>
                <div className="text-center md:text-left">
                  <h3 className="text-xl font-heading font-bold text-primary-500 mb-3">
                    Umsetzung durch uns
                  </h3>
                  <p className="text-light-200">
                    Wir bauen, konfigurieren, verknüpfen. Alles. Ohne Aufwand auf Ihrer Seite.
                  </p>
                </div>
              </div>
              
              {/* Step 6 */}
              <div className="flex flex-col md:flex-row items-center">
                <div className="bg-primary-500 text-dark-500 w-16 h-16 rounded-full flex items-center justify-center mb-4 md:mb-0 md:mr-6 flex-shrink-0 font-heading font-bold text-2xl">
                  6
                </div>
                <div className="text-center md:text-left">
                  <h3 className="text-xl font-heading font-bold text-primary-500 mb-3">
                    System läuft. Kunden kommen.
                  </h3>
                  <p className="text-light-200">
                    Sie erhalten Anfragen, Buchungen und Kontakte – automatisiert, strukturiert, skalierbar.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="text-center mt-16">
              <p className="text-xl text-primary-500 font-heading font-bold mb-6">
                Sie führen das Unternehmen.<br />
                Wir automatisieren den Rest.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA SECTION */}
      <section id="contact" className="py-24 bg-dark-500">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-8 text-primary-500">
              Testen Sie Ihre Lösung – bevor Sie investieren.
            </h2>
            
            <div className="bg-dark-400 p-8 border border-dark-100 mb-12">
              <h3 className="text-xl font-heading font-bold text-light-100 mb-6">
                Sie erhalten:
              </h3>
              
              <div className="space-y-4 mb-8">
                <div className="flex items-start justify-center">
                  <div className="bg-primary-500/20 text-primary-500 mr-3 flex-shrink-0">
                    <CheckCircle size={24} />
                  </div>
                  <p className="text-light-200 text-left">
                    Eine kostenlose Demo Ihrer Wunschlösung (Chatbot, Telefonagent oder Website)
                  </p>
                </div>
                
                <div className="flex items-start justify-center">
                  <div className="bg-primary-500/20 text-primary-500 mr-3 flex-shrink-0">
                    <CheckCircle size={24} />
                  </div>
                  <p className="text-light-200 text-left">
                    Eine fundierte Analyse Ihres aktuellen Workflows
                  </p>
                </div>
                
                <div className="flex items-start justify-center">
                  <div className="bg-primary-500/20 text-primary-500 mr-3 flex-shrink-0">
                    <CheckCircle size={24} />
                  </div>
                  <p className="text-light-200 text-left">
                    Einen klaren Umsetzungsplan zur Automatisierung von Kundenservice, Vertrieb und Terminbuchung
                  </p>
                </div>
              </div>
              
              <div className="text-xl text-primary-500 font-heading font-bold mb-8">
                Keine Kosten. Kein Risiko. Aber ein messbarer Unterschied.
              </div>
              
              <a 
                href="/contact" 
                className="inline-block px-8 py-3 bg-primary-500 text-dark-500 font-heading font-bold hover:bg-primary-400 transition-colors duration-300 mb-4"
              >
                Jetzt kostenlose Demo anfordern
              </a>
              
              <p className="text-light-300 text-sm">
                Aktuell sind nur drei neue Demo-Slots pro Monat verfügbar.
              </p>
            </div>
          </div>
        </div>
        
        {/* Include Contact Form */}
        <div className="py-0">
          <ContactForm />
        </div>
      </section>
    </div>
  );
};

export default Solution;