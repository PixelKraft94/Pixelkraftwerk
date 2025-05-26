import React from 'react';

const Imprint: React.FC = () => {
  return (
    <div className="pt-24 pb-16 bg-dark-400 min-h-screen">
      <div className="container mx-auto px-4">
        <h1 className="text-3xl md:text-4xl lg:text-5xl text-primary-500 font-heading font-bold mb-8 text-center">Impressum</h1>
        
        <div className="max-w-3xl mx-auto bg-dark-500 p-8 border border-dark-100">
          <h2 className="text-xl font-heading text-primary-500 mb-4">Angaben gemäß § 5 TMG</h2>
          <div className="mb-8">
            <p className="text-light-100 mb-1">Pixel Kraftwerk GbR – Franke & Brause</p>
            <p className="text-light-100 mb-1">Vertreten durch die Gesellschafter:</p>
            <p className="text-light-100 mb-1">Lukas Franke und John Brause</p>
            <p className="text-light-100 mb-1">Neuer Weg 9a</p>
            <p className="text-light-100 mb-1">04539 Groitzsch</p>
            <p className="text-light-100 mb-1">Deutschland</p>
          </div>
          
          <h2 className="text-xl font-heading text-primary-500 mb-4">Kontakt</h2>
          <div className="mb-8">
            <p className="text-light-100 mb-1">Telefon: +49 178 5844460</p>
            <p className="text-light-100 mb-1">E-Mail: kontakt@pixelkraftwerk-ai.com</p>
          </div>
          
          <h2 className="text-xl font-heading text-primary-500 mb-4">Verantwortlich für den Inhalt nach § 55 Abs. 2 RStV</h2>
          <div className="mb-8">
            <p className="text-light-100 mb-1">John Brause</p>
            <p className="text-light-100 mb-1">Lukas Franke</p>
            <p className="text-light-100 mb-1">Anschrift wie oben</p>
          </div>
          
          <h2 className="text-xl font-heading text-primary-500 mb-4">Umsatzsteuer-Identifikationsnummer</h2>
          <div className="mb-8">
            <p className="text-light-100 mb-1">Umsatzsteuer-Identifikationsnummer gemäß § 27a Umsatzsteuergesetz:</p>
            <p className="text-light-100 mb-1">DE 453969799</p>
          </div>
          
          <h2 className="text-xl font-heading text-primary-500 mb-4">Online-Streitbeilegung gemäß Art. 14 Abs. 1 ODR-VO</h2>
          <div className="mb-8">
            <p className="text-light-100 mb-1">Die Europäische Kommission stellt eine Plattform zur Online-Streitbeilegung (OS) bereit:</p>
            <p className="text-light-100 mb-1">
              <a 
                href="https://ec.europa.eu/consumers/odr/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-primary-500 hover:text-primary-400 transition-colors"
              >
                https://ec.europa.eu/consumers/odr/
              </a>
            </p>
          </div>
          
          <h2 className="text-xl font-heading text-primary-500 mb-4">Hinweis nach § 36 VSBG</h2>
          <div>
            <p className="text-light-100 mb-1">Wir sind nicht verpflichtet und nicht bereit, an Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle teilzunehmen.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Imprint;