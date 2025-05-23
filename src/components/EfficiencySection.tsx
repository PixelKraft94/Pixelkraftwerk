import React from 'react';

const EfficiencySection: React.FC = () => {
  return (
    <section id="efficiency-section" className="py-24 bg-dark-400">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-heading font-bold mb-6 text-primary-500 text-center">
            Effizienz auf Autopilot
          </h2>
          <h3 className="text-xl md:text-2xl text-light-100 text-center mb-10">
            Sie führen. Wir automatisieren.
          </h3>
          
          <p className="text-light-200 mb-12 text-center">
            Stellen Sie sich vor: Ihre Kundenanfragen werden automatisch beantwortet. 
            Ihre Termine buchen sich von selbst. Ihre Website sieht nicht nur stark aus – sie konvertiert auch. 
            Und das Beste? Sie müssen dafür nichts mehr manuell tun.
          </p>
          
          <div className="bg-dark-300 p-8 border border-dark-100 mb-12">
            <h3 className="text-xl md:text-2xl font-heading text-primary-500 mb-6 text-center">
              Ihr Alltag heute – klingt das vertraut?
            </h3>
            
            <div className="space-y-4">
              <div className="flex items-start">
                <span className="text-red-500 mr-3 flex-shrink-0">✖</span>
                <p className="text-light-200">Zu viele Kundenanfragen, zu wenig Personal</p>
              </div>
              <div className="flex items-start">
                <span className="text-red-500 mr-3 flex-shrink-0">✖</span>
                <p className="text-light-200">Verpasste Anrufe, verlorene Chancen</p>
              </div>
              <div className="flex items-start">
                <span className="text-red-500 mr-3 flex-shrink-0">✖</span>
                <p className="text-light-200">Terminplanung = täglicher Nervenzusammenbruch</p>
              </div>
              <div className="flex items-start">
                <span className="text-red-500 mr-3 flex-shrink-0">✖</span>
                <p className="text-light-200">Website von gestern, Ergebnisse auch</p>
              </div>
              <div className="flex items-start">
                <span className="text-red-500 mr-3 flex-shrink-0">✖</span>
                <p className="text-light-200">Wiederkehrende Aufgaben halten Sie von den wirklich wichtigen Dingen ab</p>
              </div>
            </div>
            
            <p className="text-light-200 mt-6 text-center">
              Und das alles kostet Sie Zeit, Geld – und Nerven.
            </p>
          </div>
          
          <div className="text-center">
            <a 
              href="#solutions" 
              className="inline-block px-8 py-3 bg-primary-500 text-dark-500 font-heading font-bold hover:bg-primary-400 transition-colors duration-300"
            >
              Unsere Lösungen entdecken
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EfficiencySection;