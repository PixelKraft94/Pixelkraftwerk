import React from 'react';
import { Headphones, Brain, Database, MessageSquare, ClipboardList } from 'lucide-react';

const HowItWorksSection: React.FC = () => {
  return (
    <section id="how-it-works" className="py-24 bg-dark-500">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-heading font-bold mb-12 text-primary-500 text-center">
            So funktioniert's im Überblick
          </h2>
          
          <div className="space-y-16">
            {/* Step 1 */}
            <div className="flex flex-col md:flex-row items-start md:items-center">
              <div className="bg-primary-500/20 text-primary-500 w-16 h-16 rounded-full flex items-center justify-center mb-4 md:mb-0 md:mr-6 flex-shrink-0">
                <Headphones size={32} />
              </div>
              <div>
                <h3 className="text-xl font-heading font-bold text-primary-500 mb-3">
                  1. Zuhören & Verstehen
                </h3>
                <p className="text-light-200 mb-2">
                  Die KI hört dem Anrufer zu oder liest, was ein Nutzer schreibt. Dabei erkennt sie Sprache oder Text 
                  automatisch – auch in verschiedenen Formulierungen.
                </p>
                <div className="bg-dark-400 p-4 border-l-4 border-primary-500">
                  <span className="font-heading text-primary-400">Beispiel:</span> Aus „Ich hätte gern einen Termin nächste Woche" 
                  erkennt sie: Anfrage zur Terminvergabe.
                </div>
              </div>
            </div>
            
            {/* Step 2 */}
            <div className="flex flex-col md:flex-row items-start md:items-center">
              <div className="bg-primary-500/20 text-primary-500 w-16 h-16 rounded-full flex items-center justify-center mb-4 md:mb-0 md:mr-6 flex-shrink-0">
                <Brain size={32} />
              </div>
              <div>
                <h3 className="text-xl font-heading font-bold text-primary-500 mb-3">
                  2. Absicht erkennen
                </h3>
                <p className="text-light-200 mb-2">
                  Die KI analysiert, was genau der Nutzer möchte – z. B. ein Angebot, eine Beratung oder eine Terminbuchung. 
                  Dabei nutzt sie moderne Sprachmodelle, um den „Intent" zu verstehen.
                </p>
                <div className="bg-dark-400 p-4 border-l-4 border-primary-500">
                  <span className="font-heading text-primary-400">Beispiel:</span> Der Satz „Wie viel kostet das?" wird als Preisfrage erkannt.
                </div>
              </div>
            </div>
            
            {/* Step 3 */}
            <div className="flex flex-col md:flex-row items-start md:items-center">
              <div className="bg-primary-500/20 text-primary-500 w-16 h-16 rounded-full flex items-center justify-center mb-4 md:mb-0 md:mr-6 flex-shrink-0">
                <Database size={32} />
              </div>
              <div>
                <h3 className="text-xl font-heading font-bold text-primary-500 mb-3">
                  3. Daten verarbeiten & Entscheidungen treffen
                </h3>
                <p className="text-light-200 mb-2">
                  Je nach Anfrage greift die KI auf hinterlegte Daten oder Logiken zu. Sie entscheidet selbstständig, 
                  was der nächste sinnvolle Schritt ist – z. B. eine Terminabfrage, Weiterleitung oder Rückfrage.
                </p>
                <div className="bg-dark-400 p-4 border-l-4 border-primary-500">
                  <span className="font-heading text-primary-400">Beispiel:</span> Bei einer Buchungsanfrage fragt sie automatisch: 
                  „An welchem Tag passt es Ihnen?"
                </div>
              </div>
            </div>
            
            {/* Step 4 */}
            <div className="flex flex-col md:flex-row items-start md:items-center">
              <div className="bg-primary-500/20 text-primary-500 w-16 h-16 rounded-full flex items-center justify-center mb-4 md:mb-0 md:mr-6 flex-shrink-0">
                <MessageSquare size={32} />
              </div>
              <div>
                <h3 className="text-xl font-heading font-bold text-primary-500 mb-3">
                  4. Antworten & reagieren
                </h3>
                <p className="text-light-200 mb-2">
                  Die KI formuliert eine passende, natürliche Antwort – entweder als Sprache (am Telefon) oder als Text (im Chat). 
                  Sie reagiert dabei individuell und zielgerichtet.
                </p>
                <div className="bg-dark-400 p-4 border-l-4 border-primary-500">
                  <span className="font-heading text-primary-400">Beispiel:</span> „Kein Problem – ich habe am Donnerstag um 15 Uhr 
                  einen freien Termin. Passt das für Sie?"
                </div>
              </div>
            </div>
            
            {/* Step 5 */}
            <div className="flex flex-col md:flex-row items-start md:items-center">
              <div className="bg-primary-500/20 text-primary-500 w-16 h-16 rounded-full flex items-center justify-center mb-4 md:mb-0 md:mr-6 flex-shrink-0">
                <ClipboardList size={32} />
              </div>
              <div>
                <h3 className="text-xl font-heading font-bold text-primary-500 mb-3">
                  5. Dokumentieren & übergeben
                </h3>
                <p className="text-light-200 mb-2">
                  Am Ende dokumentiert die KI alles sauber (z. B. Gesprächsprotokolle, Terminbestätigungen, Leads) 
                  und übergibt auf Wunsch alle Infos an interne Systeme wie CRM, Kalender oder E-Mail.
                </p>
                <div className="bg-dark-400 p-4 border-l-4 border-primary-500">
                  <span className="font-heading text-primary-400">Beispiel:</span> Termin wird direkt in den Kalender eingetragen 
                  und der Kunde erhält eine Bestätigung per Mail oder SMS.
                </div>
              </div>
            </div>
          </div>
          
          <div className="mt-16 bg-primary-500/10 border border-primary-500 p-6">
            <h3 className="text-xl font-heading font-bold text-primary-500 mb-3">
              ✓ Fazit
            </h3>
            <p className="text-light-200">
              Ihre Kunden erhalten schnelle, freundliche Hilfe – rund um die Uhr. 
              Die KI denkt mit, arbeitet effizient und entlastet Ihre Mitarbeiter von wiederkehrenden Aufgaben.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;