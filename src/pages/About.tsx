import React from 'react';

const About: React.FC = () => {
  return (
    <div className="pt-24 bg-dark-500 min-h-screen">
      <div className="container mx-auto px-4 py-16">
        <h1 className="text-3xl md:text-4xl lg:text-5xl text-primary-500 font-heading font-bold mb-6">
          Über Pixel Kraftwerk
        </h1>
        <h2 className="text-2xl md:text-3xl text-light-100 mb-12">
          Effizienz neu gedacht.
        </h2>
        
        <div className="max-w-4xl">
          <p className="text-light-200 mb-8 text-lg">
            Pixel Kraftwerk steht für intelligente Automatisierung und praxisnahe KI-Lösungen. 
            Wir unterstützen Unternehmen dabei, ihre Prozesse zu optimieren, repetitive Aufgaben 
            zu eliminieren und Kundeninteraktionen zu verbessern – messbar, skalierbar, nachhaltig.
          </p>
          
          <div className="mb-12">
            <h3 className="text-xl font-heading font-bold text-primary-500 mb-4">
              Unser Anspruch
            </h3>
            <p className="text-light-200 mb-6">
              In einer Welt, in der Zeit ein knappes Gut ist, schaffen wir Freiräume. 
              Mit maßgeschneiderten Automatisierungskonzepten setzen wir auf den Einsatz 
              künstlicher Intelligenz genau dort, wo sie den größten Mehrwert bietet – 
              im Kundenservice, bei der Terminplanung, in der CRM-Integration oder auf Ihrer Website.
            </p>
          </div>
          
          <div className="mb-12">
            <h3 className="text-xl font-heading font-bold text-primary-500 mb-4">
              Unsere Expertise
            </h3>
            <p className="text-light-200 mb-6">
              Unser Team vereint technologische Tiefe mit unternehmerischem Verständnis. 
              Experten aus den Bereichen KI-Entwicklung, Softwareintegration und digitales Marketing 
              arbeiten Hand in Hand, um Lösungen zu entwickeln, die nicht nur innovativ, 
              sondern sofort einsatzbereit und wartungsarm sind.
            </p>
          </div>
          
          <div className="mb-12">
            <h3 className="text-xl font-heading font-bold text-primary-500 mb-4">
              Was uns auszeichnet
            </h3>
            <div className="space-y-6">
              <div className="flex items-start">
                <div className="bg-primary-500/20 text-primary-500 w-12 h-12 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                  <span className="text-2xl">1</span>
                </div>
                <div>
                  <p className="text-light-200">
                    Individuelle Lösungen statt Standardsoftware – jede Umsetzung ist präzise auf Ihre Anforderungen abgestimmt.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-primary-500/20 text-primary-500 w-12 h-12 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                  <span className="text-2xl">2</span>
                </div>
                <div>
                  <p className="text-light-200">
                    Schnelle Resultate – unsere Kunden profitieren von spürbaren Effizienzsteigerungen und optimierten Abläufen.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-primary-500/20 text-primary-500 w-12 h-12 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                  <span className="text-2xl">3</span>
                </div>
                <div>
                  <p className="text-light-200">
                    Langfristiger Support – wir begleiten Ihre Systeme über den Launch hinaus und sorgen für zuverlässigen Betrieb.
                  </p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="bg-dark-400 p-8 border-l-4 border-primary-500">
            <p className="text-light-100 text-lg">
              Pixel Kraftwerk steht für technologiegestützte Transformation mit echtem Nutzen. 
              Wir liefern Lösungen, die funktionieren – und Wirkung zeigen.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;