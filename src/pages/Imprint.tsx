import React from 'react';

const Imprint: React.FC = () => {
  return (
    <div className="pt-24 pb-24 bg-dark-400 min-h-screen">
      <div className="container mx-auto px-6 md:px-12">
        <h1 className="text-3xl md:text-4xl text-light-100 font-heading font-bold mb-12 text-center"><span className="text-primary-500">Impressum</span></h1>

        <div className="max-w-2xl mx-auto space-y-10">
          <div>
            <h2 className="text-lg font-heading font-bold text-light-100 mb-4">Angaben gemäß <span className="text-primary-500">§ 5 TMG</span></h2>
            <div className="space-y-1 text-sm text-light-200">
              <p>Pixel Kraftwerk – Franke & Brause GbR</p>
              <p>Vertreten durch die Gesellschafter:</p>
              <p>Lukas Franke und John Brause</p>
              <p>Neuer Weg 9a</p>
              <p>04539 Groitzsch</p>
              <p>Deutschland</p>
            </div>
          </div>

          <div>
            <h2 className="text-lg font-heading font-bold text-light-100 mb-4"><span className="text-primary-500">Kontakt</span></h2>
            <div className="space-y-1 text-sm text-light-200">
              <p>Telefon: +49 178 5844460</p>
              <p>E-Mail: kontakt@pixelkraftwerk-ai.com</p>
            </div>
          </div>

          <div>
            <h2 className="text-lg font-heading font-bold text-light-100 mb-4">Verantwortlich für den Inhalt nach <span className="text-primary-500">§ 55 Abs. 2 RStV</span></h2>
            <div className="space-y-1 text-sm text-light-200">
              <p>John Brause</p>
              <p>Lukas Franke</p>
              <p>Anschrift wie oben</p>
            </div>
          </div>

          <div>
            <h2 className="text-lg font-heading font-bold text-light-100 mb-4"><span className="text-primary-500">Umsatzsteuer-Identifikationsnummer</span></h2>
            <div className="space-y-1 text-sm text-light-200">
              <p>Umsatzsteuer-Identifikationsnummer gemäß § 27a Umsatzsteuergesetz:</p>
              <p>DE 453969799</p>
            </div>
          </div>

          <div>
            <h2 className="text-lg font-heading font-bold text-light-100 mb-4">Online-Streitbeilegung gemäß <span className="text-primary-500">Art. 14 Abs. 1 ODR-VO</span></h2>
            <div className="space-y-1 text-sm text-light-200">
              <p>Die Europäische Kommission stellt eine Plattform zur Online-Streitbeilegung (OS) bereit:</p>
              <p>
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
          </div>

          <div>
            <h2 className="text-lg font-heading font-bold text-light-100 mb-4">Hinweis nach <span className="text-primary-500">§ 36 VSBG</span></h2>
            <div className="text-sm text-light-200">
              <p>Wir sind nicht verpflichtet und nicht bereit, an Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle teilzunehmen.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Imprint;