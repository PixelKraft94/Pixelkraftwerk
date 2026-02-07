import React from 'react';
import { MessageCircle, Phone, Calendar, Globe } from 'lucide-react';

const KeyComponentsSection: React.FC = () => {
  return (
    <section id="key-components" className="py-24 bg-dark-400">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4 text-primary-500 text-center">
            Vier Schlüsselkomponenten
          </h2>
          <p className="text-light-200 mb-16 text-center">
            <span className="text-primary-500 font-heading">{'>'}_</span>PIXEL_KRAFTWERK<br />
            Wir bauen keine Technik-Spielzeuge. Wir lösen echte Probleme.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Component 1 */}
            <div className="bg-dark-500 border border-dark-100 p-6">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-primary-500/20 text-primary-500 rounded-full flex items-center justify-center mr-4">
                  <MessageCircle size={24} />
                </div>
                <h3 className="text-xl font-heading font-bold text-primary-500">
                  Digitale Kundenassistenz
                </h3>
              </div>
              
              <div className="space-y-3 ml-16">
                <div className="flex items-start">
                  <span className="text-primary-500 mr-3">•</span>
                  <p className="text-light-200">Automatisierte FAQ-Beantwortung rund um die Uhr</p>
                </div>
                <div className="flex items-start">
                  <span className="text-primary-500 mr-3">•</span>
                  <p className="text-light-200">Qualifizierte Lead-Generierung und Terminvereinbarung</p>
                </div>
                <div className="flex items-start">
                  <span className="text-primary-500 mr-3">•</span>
                  <p className="text-light-200">Nahtlose Integration in Ihre Website und Messenger</p>
                </div>
              </div>
            </div>
            
            {/* Component 2 */}
            <div className="bg-dark-500 border border-dark-100 p-6">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-primary-500/20 text-primary-500 rounded-full flex items-center justify-center mr-4">
                  <Phone size={24} />
                </div>
                <h3 className="text-xl font-heading font-bold text-primary-500">
                  Telefonische Kundenassistenz
                </h3>
              </div>
              
              <div className="space-y-3 ml-16">
                <div className="flex items-start">
                  <span className="text-primary-500 mr-3">•</span>
                  <p className="text-light-200">Intelligente Spracherkennung für Anfragen und Termin-Booking</p>
                </div>
                <div className="flex items-start">
                  <span className="text-primary-500 mr-3">•</span>
                  <p className="text-light-200">Self‑Service-Optionen für wiederkehrende Fragen</p>
                </div>
                <div className="flex items-start">
                  <span className="text-primary-500 mr-3">•</span>
                  <p className="text-light-200">Anschluss an Ihr CRM-System für lückenlose Dokumentation</p>
                </div>
              </div>
            </div>
            
            {/* Component 3 */}
            <div className="bg-dark-500 border border-dark-100 p-6">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-primary-500/20 text-primary-500 rounded-full flex items-center justify-center mr-4">
                  <Calendar size={24} />
                </div>
                <h3 className="text-xl font-heading font-bold text-primary-500">
                  Automatisiertes Kundenmanagement
                </h3>
              </div>
              
              <div className="space-y-3 ml-16">
                <div className="flex items-start">
                  <span className="text-primary-500 mr-3">•</span>
                  <p className="text-light-200">Automatische Datenerfassung: Kunden‑ und Termindaten fließen direkt in Ihr System</p>
                </div>
                <div className="flex items-start">
                  <span className="text-primary-500 mr-3">•</span>
                  <p className="text-light-200">Effiziente Terminverwaltung: Online-Buchung, Erinnerungen und Nachfass-Mails laufen automatisch</p>
                </div>
                <div className="flex items-start">
                  <span className="text-primary-500 mr-3">•</span>
                  <p className="text-light-200">Zentrale Übersicht: Alle Kundeninteraktionen und Termine auf einen Blick</p>
                </div>
                <div className="flex items-start">
                  <span className="text-primary-500 mr-3">•</span>
                  <p className="text-light-200">Fehlerreduktion & Zeitersparnis: Schluss mit manuellen Einträgen – Sie konzentrieren sich auf Ihr Kerngeschäft</p>
                </div>
              </div>
            </div>
            
            {/* Component 4 */}
            <div className="bg-dark-500 border border-dark-100 p-6">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-primary-500/20 text-primary-500 rounded-full flex items-center justify-center mr-4">
                  <Globe size={24} />
                </div>
                <h3 className="text-xl font-heading font-bold text-primary-500">
                  Professionelle Websites in Tagen
                </h3>
              </div>
              
              <div className="space-y-3 ml-16">
                <div className="flex items-start">
                  <span className="text-primary-500 mr-3">•</span>
                  <p className="text-light-200">Modernes, responsives Design – optimiert für Desktop, Tablet und Mobil</p>
                </div>
                <div className="flex items-start">
                  <span className="text-primary-500 mr-3">•</span>
                  <p className="text-light-200">Zielgruppenorientierte User Experience mit höchster Usability</p>
                </div>
                <div className="flex items-start">
                  <span className="text-primary-500 mr-3">•</span>
                  <p className="text-light-200">State‑of‑the-Art-Technologie: schnell, sicher, wartungsarm</p>
                </div>
                <div className="flex items-start">
                  <span className="text-primary-500 mr-3">•</span>
                  <p className="text-light-200">Spezielle Startup‑Pakete & KMU‑Konditionen: höchste Qualität zu attraktiven Preisen</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default KeyComponentsSection;