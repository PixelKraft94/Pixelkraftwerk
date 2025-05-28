import React from 'react';
import { CheckCircle, MessageCircle, Phone, BarChart, Globe, ArrowRight } from 'lucide-react';

const Features: React.FC = () => {
  return (
    <div className="pt-24 bg-dark-500 min-h-screen">
      <div className="container mx-auto px-4 py-16">
        <h1 className="text-3xl md:text-4xl lg:text-5xl text-primary-500 font-heading font-bold mb-6 text-center">
          KI-Dienstleistungen, Automatisierung & Webdesign
        </h1>
        <div className="max-w-4xl mx-auto">
          <p className="text-light-200 mb-12 text-center text-lg">
            Pixel Kraftwerk - Ihre Agentur für moderne, skalierbare KI-Lösungen im deutschsprachigen Raum. 
            Unsere Schwerpunkte liegen auf:
          </p>
          
          {/* KI-Chatbots Section */}
          <section className="mb-16 bg-dark-400 p-8 border border-dark-100">
            <div className="flex items-start mb-6">
              <CheckCircle className="text-primary-500 mr-3 flex-shrink-0" size={24} />
              <h2 className="text-2xl font-heading font-bold text-primary-500">
                KI-Chatbots für Webseiten & Messenger
              </h2>
            </div>
            
            <div className="ml-9 grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="flex items-center">
                <MessageCircle className="text-primary-500 mr-2 flex-shrink-0" size={16} />
                <p className="text-light-200">KI-Chatbot erstellen lassen</p>
              </div>
              <div className="flex items-center">
                <MessageCircle className="text-primary-500 mr-2 flex-shrink-0" size={16} />
                <p className="text-light-200">GPT-Chatbot mit Kontextverständnis</p>
              </div>
              <div className="flex items-center">
                <MessageCircle className="text-primary-500 mr-2 flex-shrink-0" size={16} />
                <p className="text-light-200">Chatbot für Kundenservice und Leadgenerierung</p>
              </div>
              <div className="flex items-center">
                <MessageCircle className="text-primary-500 mr-2 flex-shrink-0" size={16} />
                <p className="text-light-200">Automatisierte Gesprächsführung mit KI</p>
              </div>
              <div className="flex items-center">
                <MessageCircle className="text-primary-500 mr-2 flex-shrink-0" size={16} />
                <p className="text-light-200">Integration in Website, WhatsApp, Facebook, Instagram</p>
              </div>
            </div>
          </section>
          
          {/* KI-Telefonagenten Section */}
          <section className="mb-16 bg-dark-400 p-8 border border-dark-100">
            <div className="flex items-start mb-6">
              <CheckCircle className="text-primary-500 mr-3 flex-shrink-0" size={24} />
              <h2 className="text-2xl font-heading font-bold text-primary-500">
                KI-Telefonagenten
              </h2>
            </div>
            
            <div className="ml-9 grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="flex items-center">
                <Phone className="text-primary-500 mr-2 flex-shrink-0" size={16} />
                <p className="text-light-200">Telefonagent mit künstlicher Intelligenz</p>
              </div>
              <div className="flex items-center">
                <Phone className="text-primary-500 mr-2 flex-shrink-0" size={16} />
                <p className="text-light-200">GPT-basierte Telefonassistenz für Unternehmen</p>
              </div>
              <div className="flex items-center">
                <Phone className="text-primary-500 mr-2 flex-shrink-0" size={16} />
                <p className="text-light-200">24/7 Anrufannahme durch KI</p>
              </div>
              <div className="flex items-center">
                <Phone className="text-primary-500 mr-2 flex-shrink-0" size={16} />
                <p className="text-light-200">Intelligente Terminbuchung per Sprache</p>
              </div>
              <div className="flex items-center">
                <Phone className="text-primary-500 mr-2 flex-shrink-0" size={16} />
                <p className="text-light-200">Sprachgesteuerte Automatisierung am Telefon</p>
              </div>
            </div>
          </section>
          
          {/* CRM-Automatisierung Section */}
          <section className="mb-16 bg-dark-400 p-8 border border-dark-100">
            <div className="flex items-start mb-6">
              <CheckCircle className="text-primary-500 mr-3 flex-shrink-0" size={24} />
              <h2 className="text-2xl font-heading font-bold text-primary-500">
                CRM-Automatisierung & Prozessoptimierung
              </h2>
            </div>
            
            <div className="ml-9 grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="flex items-center">
                <BarChart className="text-primary-500 mr-2 flex-shrink-0" size={16} />
                <p className="text-light-200">CRM-Automatisierung mit künstlicher Intelligenz</p>
              </div>
              <div className="flex items-center">
                <BarChart className="text-primary-500 mr-2 flex-shrink-0" size={16} />
                <p className="text-light-200">Digitale Kundenverwaltung ohne manuelle Eingaben</p>
              </div>
              <div className="flex items-center">
                <BarChart className="text-primary-500 mr-2 flex-shrink-0" size={16} />
                <p className="text-light-200">Automatisierte Follow-ups und Erinnerungen</p>
              </div>
              <div className="flex items-center">
                <BarChart className="text-primary-500 mr-2 flex-shrink-0" size={16} />
                <p className="text-light-200">Vertriebsprozesse mit KI optimieren</p>
              </div>
              <div className="flex items-center">
                <BarChart className="text-primary-500 mr-2 flex-shrink-0" size={16} />
                <p className="text-light-200">CRM-Integration für KMU und Dienstleister</p>
              </div>
            </div>
          </section>
          
          {/* Moderne Websites Section */}
          <section className="mb-16 bg-dark-400 p-8 border border-dark-100">
            <div className="flex items-start mb-6">
              <CheckCircle className="text-primary-500 mr-3 flex-shrink-0" size={24} />
              <h2 className="text-2xl font-heading font-bold text-primary-500">
                Moderne Websites & digitale Präsenz
              </h2>
            </div>
            
            <div className="ml-9 grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="flex items-center">
                <Globe className="text-primary-500 mr-2 flex-shrink-0" size={16} />
                <p className="text-light-200">Website mit KI-Integration erstellen lassen</p>
              </div>
              <div className="flex items-center">
                <Globe className="text-primary-500 mr-2 flex-shrink-0" size={16} />
                <p className="text-light-200">Webdesign für kleine Unternehmen & Startups</p>
              </div>
              <div className="flex items-center">
                <Globe className="text-primary-500 mr-2 flex-shrink-0" size={16} />
                <p className="text-light-200">Conversion-optimierte Landingpages</p>
              </div>
              <div className="flex items-center">
                <Globe className="text-primary-500 mr-2 flex-shrink-0" size={16} />
                <p className="text-light-200">Mobile-optimierte Webseiten mit Performance-Fokus</p>
              </div>
              <div className="flex items-center">
                <Globe className="text-primary-500 mr-2 flex-shrink-0" size={16} />
                <p className="text-light-200">Digitale Markenpräsenz mit KI-Funktionalität</p>
              </div>
            </div>
          </section>
          
          {/* Why Pixelkraftwerk Section */}
          <section className="mb-16 bg-dark-400 p-8 border border-dark-100">
            <h2 className="text-2xl font-heading font-bold text-primary-500 mb-6">
              Warum Pixelkraftwerk AI?
            </h2>
            <p className="text-light-200 mb-0">
              Wir helfen Ihnen, Ihre Unternehmensprozesse zu automatisieren, Kundenservice zu skalieren und Ihre digitale Sichtbarkeit durch moderne Technologien zu steigern. Unsere Lösungen sind individuell, effizient und sofort einsatzbereit.
            </p>
          </section>
          
          {/* Industries Section */}
          <section className="mb-16 bg-dark-400 p-8 border border-dark-100">
            <h2 className="text-2xl font-heading font-bold text-primary-500 mb-6">
              Branchen, die bereits profitieren:
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
              <div className="bg-dark-300 p-4 border border-dark-100">
                <p className="text-light-100">Gastronomie & Hotellerie</p>
              </div>
              <div className="bg-dark-300 p-4 border border-dark-100">
                <p className="text-light-100">Immobilienunternehmen</p>
              </div>
              <div className="bg-dark-300 p-4 border border-dark-100">
                <p className="text-light-100">Handwerksbetriebe</p>
              </div>
              <div className="bg-dark-300 p-4 border border-dark-100">
                <p className="text-light-100">Dienstleister & Coaches</p>
              </div>
              <div className="bg-dark-300 p-4 border border-dark-100">
                <p className="text-light-100">E-Commerce & Einzelhandel</p>
              </div>
            </div>
          </section>
          
          {/* Search Terms Section */}
          <section className="mb-16 bg-dark-400 p-8 border border-dark-100">
            <h2 className="text-2xl font-heading font-bold text-primary-500 mb-6">
              Häufig gesuchte Begriffe, die wir bedienen:
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="flex items-center">
                <ArrowRight className="text-primary-500 mr-2 flex-shrink-0" size={16} />
                <p className="text-light-200">KI-Dienstleister Deutschland</p>
              </div>
              <div className="flex items-center">
                <ArrowRight className="text-primary-500 mr-2 flex-shrink-0" size={16} />
                <p className="text-light-200">Chatbot Agentur Leipzig</p>
              </div>
              <div className="flex items-center">
                <ArrowRight className="text-primary-500 mr-2 flex-shrink-0" size={16} />
                <p className="text-light-200">GPT Telefonassistent</p>
              </div>
              <div className="flex items-center">
                <ArrowRight className="text-primary-500 mr-2 flex-shrink-0" size={16} />
                <p className="text-light-200">Automatisierung mit KI</p>
              </div>
              <div className="flex items-center">
                <ArrowRight className="text-primary-500 mr-2 flex-shrink-0" size={16} />
                <p className="text-light-200">KI-Anwendungen für Unternehmen</p>
              </div>
              <div className="flex items-center">
                <ArrowRight className="text-primary-500 mr-2 flex-shrink-0" size={16} />
                <p className="text-light-200">Voicebot erstellen lassen</p>
              </div>
              <div className="flex items-center">
                <ArrowRight className="text-primary-500 mr-2 flex-shrink-0" size={16} />
                <p className="text-light-200">KI-gestützte Kundenkommunikation</p>
              </div>
              <div className="flex items-center">
                <ArrowRight className="text-primary-500 mr-2 flex-shrink-0" size={16} />
                <p className="text-light-200">Website mit Chatbot</p>
              </div>
              <div className="flex items-center">
                <ArrowRight className="text-primary-500 mr-2 flex-shrink-0" size={16} />
                <p className="text-light-200">Automatisierte Anrufannahme</p>
              </div>
              <div className="flex items-center">
                <ArrowRight className="text-primary-500 mr-2 flex-shrink-0" size={16} />
                <p className="text-light-200">CRM-System mit KI-Anbindung</p>
              </div>
            </div>
          </section>
          
          {/* CTA Section */}
          <section className="mb-8 bg-primary-500/10 p-8 border border-primary-500">
            <h2 className="text-2xl font-heading font-bold text-primary-500 mb-6 text-center">
              Interesse geweckt?
            </h2>
            <p className="text-light-100 mb-8 text-center">
              Wir beraten Sie kostenfrei – und zeigen Ihnen, welche Lösung am besten zu Ihrem Unternehmen passt.
            </p>
            <div className="flex justify-center">
              <a 
                href="/contact" 
                className="inline-block px-8 py-3 bg-primary-500 text-dark-500 font-heading font-bold hover:bg-primary-400 transition-colors duration-300"
              >
                Zum Kontaktformular
              </a>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Features;