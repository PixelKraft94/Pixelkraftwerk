import React from 'react';
import ContactForm from '../components/ContactForm';
import GoogleMapsSection from '../components/GoogleMapsSection';
import LocalBusinessSchema from '../components/LocalBusinessSchema';

const About: React.FC = () => {
  return (
    <div className="pt-24 bg-dark-500 min-h-screen">
      <LocalBusinessSchema pageType="about" />
      <div className="container mx-auto px-6 md:px-12 py-24">
        <h1 className="text-3xl md:text-4xl text-light-100 font-heading font-bold mb-6 text-center">
          Über <span className="text-primary-500">Pixel Kraftwerk</span>
        </h1>
        <h2 className="text-xl md:text-2xl text-light-100 mb-16 text-center">
          Effizienz neu gedacht.
        </h2>

        <div className="max-w-3xl mx-auto">
          <p className="text-light-200 mb-12 text-base leading-relaxed">
            Pixel Kraftwerk aus Groitzsch steht für intelligente Automatisierung und praxisnahe KI-Lösungen.
            Wir unterstützen Unternehmen in Leipzig, Sachsen und ganz Deutschland dabei, ihre Prozesse zu optimieren,
            repetitive Aufgaben zu eliminieren und Kundeninteraktionen zu verbessern – messbar, skalierbar, nachhaltig.
          </p>

          <div className="mb-16">
            <h3 className="text-lg font-heading font-bold text-light-100 mb-5">
              Unser <span className="text-primary-500">Anspruch</span>
            </h3>
            <p className="text-light-200 text-sm leading-relaxed">
              In einer Welt, in der Zeit ein knappes Gut ist, schaffen wir Freiräume.
              Mit maßgeschneiderten Automatisierungskonzepten setzen wir auf den Einsatz
              künstlicher Intelligenz genau dort, wo sie den größten Mehrwert bietet –
              im Kundenservice, bei der Terminplanung, in der CRM-Integration oder auf Ihrer Website.
              Als regionales Unternehmen aus Groitzsch betreuen wir Kunden in ganz Mitteldeutschland.
            </p>
          </div>

          <div className="mb-16">
            <h3 className="text-lg font-heading font-bold text-light-100 mb-5">
              Unsere <span className="text-primary-500">Expertise</span>
            </h3>
            <p className="text-light-200 text-sm leading-relaxed">
              Unser Team aus Sachsen vereint technologische Tiefe mit unternehmerischem Verständnis.
              Experten aus den Bereichen KI-Entwicklung, Softwareintegration und digitales Marketing
              arbeiten Hand in Hand, um Lösungen zu entwickeln, die nicht nur innovativ,
              sondern sofort einsatzbereit und wartungsarm sind. Von Groitzsch aus betreuen wir
              Unternehmen in Leipzig und der gesamten Region.
            </p>
          </div>

          <div className="mb-16">
            <h3 className="text-lg font-heading font-bold text-light-100 mb-8">
              Was uns <span className="text-primary-500">auszeichnet</span>
            </h3>
            <div className="space-y-8">
              <div className="flex items-start">
                <div className="bg-primary-500/20 text-primary-500 w-10 h-10 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                  <span className="text-xl font-bold">1</span>
                </div>
                <div>
                  <p className="text-light-200 text-sm leading-relaxed">
                    Individuelle Lösungen statt Standardsoftware – jede Umsetzung ist präzise auf Ihre Anforderungen abgestimmt.
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="bg-primary-500/20 text-primary-500 w-10 h-10 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                  <span className="text-xl font-bold">2</span>
                </div>
                <div>
                  <p className="text-light-200 text-sm leading-relaxed">
                    Schnelle Resultate – unsere Kunden profitieren von spürbaren Effizienzsteigerungen und optimierten Abläufen.
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="bg-primary-500/20 text-primary-500 w-10 h-10 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                  <span className="text-xl font-bold">3</span>
                </div>
                <div>
                  <p className="text-light-200 text-sm leading-relaxed">
                    Langfristiger Support – wir begleiten Ihre Systeme über den Launch hinaus und sorgen für zuverlässigen Betrieb.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="border-l-4 border-primary-500 pl-6 py-2">
            <p className="text-light-100 text-base leading-relaxed">
              Pixel Kraftwerk steht für technologiegestützte Transformation mit echtem Nutzen.
              Wir liefern Lösungen, die funktionieren – und Wirkung zeigen.
            </p>
          </div>
        </div>

        <ContactForm />

        <GoogleMapsSection />
      </div>
    </div>
  );
};

export default About;