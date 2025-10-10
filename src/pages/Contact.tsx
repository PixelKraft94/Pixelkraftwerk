import React from 'react';
import ContactForm from '../components/ContactForm';

const Contact: React.FC = () => {
  return (
    <div className="pt-24 bg-dark-500 min-h-screen">
      <div className="container mx-auto px-6 md:px-12 py-24">
        <h1 className="text-3xl md:text-4xl text-light-100 font-heading font-bold mb-6 text-center">
          Nehmen Sie <span className="text-primary-500">Kontakt</span> mit uns auf
        </h1>
        <div className="max-w-2xl mx-auto mb-20">
          <p className="text-light-200 mb-12 text-center text-base leading-relaxed">
            Sie möchten erfahren, wie Ihr Unternehmen von KI-gestützter Automatisierung profitieren kann?
            Ob allgemeine Fragen, konkrete Projektideen oder Interesse an einer Zusammenarbeit – wir sind gerne für Sie da.
          </p>

          <div className="space-y-6 mb-12">
            <h2 className="text-xl font-heading font-bold text-light-100 mb-8 text-center">
              <span className="text-primary-500">Kontaktinformationen</span>
            </h2>
            <div className="space-y-5">
              <div className="flex items-center">
                <span className="text-primary-500 mr-3 text-xl">📧</span>
                <p className="text-light-200 text-sm">
                  E-Mail: <a href="mailto:kontakt@pixelkraftwerk-ai.com" className="text-primary-500 hover:text-primary-400 transition-colors">kontakt@pixelkraftwerk-ai.com</a>
                </p>
              </div>
              <div className="flex items-center">
                <span className="text-primary-500 mr-3 text-xl">📞</span>
                <p className="text-light-200 text-sm">
                  Telefon: <a href="tel:+4917858444" className="text-primary-500 hover:text-primary-400 transition-colors">+49 178 5844460</a>
                </p>
              </div>
              <div className="flex items-center">
                <span className="text-primary-500 mr-3 text-xl">📍</span>
                <p className="text-light-200 text-sm">
                  Adresse: Neuer Weg 9a, 04539 Groitzsch, Deutschland
                </p>
              </div>
            </div>
          </div>

          <p className="text-light-200 mb-16 text-center text-sm">
            Wir melden uns zeitnah zurück – kompetent, unverbindlich und persönlich.
          </p>
        </div>
        
        <ContactForm />
      </div>
    </div>
  );
};

export default Contact;