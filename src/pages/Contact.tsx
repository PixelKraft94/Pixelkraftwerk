import React from 'react';
import ContactForm from '../components/ContactForm';

const Contact: React.FC = () => {
  return (
    <div className="pt-24 bg-dark-500 min-h-screen">
      <div className="container mx-auto px-4 py-16">
        <h1 className="text-3xl md:text-4xl lg:text-5xl text-primary-500 font-heading font-bold mb-6">
          Nehmen Sie Kontakt mit uns auf
        </h1>
        <div className="max-w-3xl mx-auto mb-16">
          <p className="text-light-200 mb-8">
            Sie möchten erfahren, wie Ihr Unternehmen von KI-gestützter Automatisierung profitieren kann? 
            Ob allgemeine Fragen, konkrete Projektideen oder Interesse an einer Zusammenarbeit – wir sind gerne für Sie da.
          </p>
          
          <div className="bg-dark-400 p-8 border border-dark-100 mb-8">
            <h2 className="text-xl font-heading font-bold text-primary-500 mb-4">
              Kontaktinformationen
            </h2>
            <div className="space-y-4">
              <div className="flex items-center">
                <span className="text-primary-500 mr-3">📧</span>
                <p className="text-light-100">
                  E-Mail: <a href="mailto:kontakt@pixelkraftwerk-ai.com" className="text-primary-500 hover:text-primary-400 transition-colors">kontakt@pixelkraftwerk-ai.com</a>
                </p>
              </div>
              <div className="flex items-center">
                <span className="text-primary-500 mr-3">📞</span>
                <p className="text-light-100">
                  Telefon: <a href="tel:+4917858444" className="text-primary-500 hover:text-primary-400 transition-colors">+49 178 5844460</a>
                </p>
              </div>
              <div className="flex items-center">
                <span className="text-primary-500 mr-3">📍</span>
                <p className="text-light-100">
                  Adresse: Neuer Weg 9a, 04539 Groitzsch, Deutschland
                </p>
              </div>
            </div>
          </div>
          
          <p className="text-light-200 mb-12">
            Wir melden uns zeitnah zurück – kompetent, unverbindlich und persönlich.
          </p>
        </div>
        
        <ContactForm />
      </div>
    </div>
  );
};

export default Contact;