import React from 'react';
import ContactForm from '../components/ContactForm';
import GoogleMapsSection from '../components/GoogleMapsSection';
import NAPInfo from '../components/NAPInfo';
import LocalBusinessSchema from '../components/LocalBusinessSchema';
import SEOHead from '../components/SEOHead';

const Contact: React.FC = () => {
  return (
    <div className="pt-24 bg-dark-500 min-h-screen">
      <SEOHead
        title="Kontakt"
        description="Kontaktieren Sie Pixel Kraftwerk für KI-Automatisierungslösungen. Wir sind in Groitzsch, Leipzig und ganz Sachsen für Sie da."
        keywords={['Kontakt Pixel Kraftwerk', 'KI Beratung Leipzig', 'Automatisierung Groitzsch']}
      />
      <LocalBusinessSchema pageType="contact" />
      <div className="container mx-auto px-6 md:px-12 py-24">
        <h1 className="text-3xl md:text-4xl text-light-100 font-heading font-bold mb-6 text-center">
          Nehmen Sie <span className="text-primary-500">Kontakt</span> mit uns auf
        </h1>
        <div className="max-w-2xl mx-auto mb-20">
          <p className="text-light-200 mb-12 text-center text-base leading-relaxed">
            Sie möchten erfahren, wie Ihr Unternehmen von KI-gestützter Automatisierung profitieren kann?
            Ob aus Leipzig, Groitzsch oder der gesamten Region Sachsen – bei allgemeinen Fragen, konkreten Projektideen
            oder Interesse an einer Zusammenarbeit sind wir gerne für Sie da.
          </p>

          <div className="space-y-6 mb-12">
            <h2 className="text-xl font-heading font-bold text-light-100 mb-8 text-center">
              <span className="text-primary-500">Kontaktinformationen</span>
            </h2>
            <NAPInfo variant="full" showIcons={true} className="text-light-200" />
          </div>

          <p className="text-light-200 mb-16 text-center text-sm">
            Als Ihr Partner für KI-Automatisierung in Groitzsch und Leipzig melden wir uns zeitnah zurück – kompetent, unverbindlich und persönlich.
          </p>
        </div>

        <ContactForm />

        <GoogleMapsSection />
      </div>
    </div>
  );
};

export default Contact;