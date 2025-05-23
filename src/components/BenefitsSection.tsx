import React from 'react';
import { Clock, DollarSign, TrendingUp, Globe } from 'lucide-react';

const BenefitsSection: React.FC = () => {
  return (
    <section id="benefits" className="py-24 bg-dark-400">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-heading font-bold mb-12 text-primary-500 text-center">
            Ihre Vorteile auf einen Blick
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            {/* Benefit 1 */}
            <div className="flex items-start">
              <div className="bg-primary-500/20 text-primary-500 w-12 h-12 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                <Clock size={24} />
              </div>
              <div>
                <h3 className="text-xl font-heading font-bold text-light-100 mb-2">
                  <span className="text-primary-500">✓</span> Zeitgewinn
                </h3>
                <p className="text-light-200">
                  Routineaufgaben laufen autonom im Hintergrund.
                </p>
              </div>
            </div>
            
            {/* Benefit 2 */}
            <div className="flex items-start">
              <div className="bg-primary-500/20 text-primary-500 w-12 h-12 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                <DollarSign size={24} />
              </div>
              <div>
                <h3 className="text-xl font-heading font-bold text-light-100 mb-2">
                  <span className="text-primary-500">✓</span> Kostenreduktion
                </h3>
                <p className="text-light-200">
                  Weniger Personalaufwand, weniger Fehler.
                </p>
              </div>
            </div>
            
            {/* Benefit 3 */}
            <div className="flex items-start">
              <div className="bg-primary-500/20 text-primary-500 w-12 h-12 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                <TrendingUp size={24} />
              </div>
              <div>
                <h3 className="text-xl font-heading font-bold text-light-100 mb-2">
                  <span className="text-primary-500">✓</span> Wachstum
                </h3>
                <p className="text-light-200">
                  Schnellere Reaktionszeiten erhöhen Kundenzufriedenheit und Umsatz.
                </p>
              </div>
            </div>
            
            {/* Benefit 4 */}
            <div className="flex items-start">
              <div className="bg-primary-500/20 text-primary-500 w-12 h-12 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                <Globe size={24} />
              </div>
              <div>
                <h3 className="text-xl font-heading font-bold text-light-100 mb-2">
                  <span className="text-primary-500">✓</span> Online‑Präsenz
                </h3>
                <p className="text-light-200">
                  Professionelle Website in wenigen Tagen – ein klarer Wettbewerbsvorteil.
                </p>
              </div>
            </div>
          </div>
          
          <div className="text-center">
            <a 
              href="#contact" 
              className="inline-block px-8 py-3 bg-primary-500 text-dark-500 font-heading font-bold hover:bg-primary-400 transition-colors duration-300"
            >
              Kostenfreie Erstberatung anfragen
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;