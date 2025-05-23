import React from 'react';
import CookieSettings from '../components/CookieSettings';

const PrivacySettings: React.FC = () => {
  return (
    <div className="pt-24 bg-dark-400 min-h-screen">
      <div className="container mx-auto px-4 py-16">
        <h1 className="text-3xl md:text-4xl font-mono font-bold mb-8 text-primary-500">
          Datenschutz-Einstellungen
        </h1>
        
        <div className="max-w-3xl mb-10">
          <p className="text-light-200 mb-6">
            Hier können Sie Ihre Datenschutz- und Cookie-Einstellungen verwalten. Wir respektieren Ihre Privatsphäre und geben Ihnen die volle Kontrolle über Ihre Daten.
          </p>
          
          <p className="text-light-200 mb-6">
            Weitere Informationen zu unseren Datenschutzpraktiken finden Sie in unserer <a href="/privacy" className="text-primary-500 hover:text-primary-400 transition-colors">Datenschutzerklärung</a>.
          </p>
        </div>
        
        <div className="max-w-3xl bg-dark-500 p-8 border border-dark-100 mb-8">
          <h2 className="text-xl font-mono text-primary-500 mb-6">Cookie-Einstellungen</h2>
          <CookieSettings standalone={true} />
        </div>
      </div>
    </div>
  );
};

export default PrivacySettings;