import React, { useState, useEffect } from 'react';
import { Check } from 'lucide-react';
import { CookieType } from '../types';

interface CookieSettingsProps {
  standalone?: boolean;
}

type CookieConsent = {
  necessary: boolean; // Always true
  analytics: boolean;
  marketing: boolean;
  preferences: boolean;
};

type CookieConsentState = {
  consented: boolean;
  preferences: CookieConsent;
  timestamp: string | null;
};

const initialConsent: CookieConsent = {
  necessary: true,
  analytics: false,
  marketing: false,
  preferences: false,
};

const defaultConsentState: CookieConsentState = {
  consented: false,
  preferences: initialConsent,
  timestamp: null,
};

const CookieSettings: React.FC<CookieSettingsProps> = ({ standalone = false }) => {
  const [consentState, setConsentState] = useState<CookieConsentState>(defaultConsentState);
  const [updated, setUpdated] = useState<boolean>(false);

  useEffect(() => {
    const storedConsent = localStorage.getItem('cookieConsent');
    if (storedConsent) {
      try {
        const parsedConsent = JSON.parse(storedConsent);
        setConsentState(parsedConsent);
      } catch (error) {
        console.error('Error parsing cookie consent data:', error);
        localStorage.removeItem('cookieConsent');
      }
    }
  }, []);

  const handlePreferenceChange = (key: CookieType) => {
    if (key === 'necessary') return; // Necessary cookies cannot be disabled

    setConsentState(prev => ({
      ...prev,
      preferences: {
        ...prev.preferences,
        [key]: !prev.preferences[key],
      }
    }));

    setUpdated(true);
  };

  const savePreferences = () => {
    const updatedState = {
      ...consentState,
      consented: true,
      timestamp: new Date().toISOString(),
    };
    
    localStorage.setItem('cookieConsent', JSON.stringify(updatedState));
    
    // Apply cookie preferences
    if (updatedState.preferences.analytics) {
      // Enable analytics cookies
      console.log('Analytics cookies enabled');
    }
    
    if (updatedState.preferences.marketing) {
      // Enable marketing cookies
      console.log('Marketing cookies enabled');
    }
    
    if (updatedState.preferences.preferences) {
      // Enable preferences cookies
      console.log('Preferences cookies enabled');
    }
    
    setUpdated(false);
    
    if (standalone) {
      alert('Ihre Cookie-Einstellungen wurden aktualisiert.');
    }
  };

  return (
    <div className={standalone ? "py-8 bg-dark-400 min-h-screen" : ""}>
      <div className={standalone ? "container mx-auto px-4" : ""}>
        {standalone && (
          <h1 className="text-3xl md:text-4xl font-heading font-bold mb-8 text-primary-500">
            Cookie-Einstellungen
          </h1>
        )}
        
        <div className={`space-y-6 mb-8 ${standalone ? "max-w-3xl" : ""}`}>
          <div className="p-4 bg-dark-300 border border-dark-100">
            <div className="flex justify-between items-center">
              <div>
                <h3 className="text-lg font-heading font-bold text-primary-500 mb-1">Notwendige Cookies</h3>
                <p className="text-light-200 text-sm">
                  Diese Cookies sind für die Funktion der Website notwendig und können nicht deaktiviert werden.
                </p>
              </div>
              <div className="text-primary-500">
                <Check size={20} />
              </div>
            </div>
          </div>
          
          <div className="p-4 bg-dark-300 border border-dark-100">
            <div className="flex justify-between items-center">
              <div>
                <h3 className="text-lg font-heading font-bold text-primary-500 mb-1">Analyse-Cookies</h3>
                <p className="text-light-200 text-sm">
                  Diese Cookies helfen uns zu verstehen, wie Besucher mit unserer Website interagieren.
                </p>
              </div>
              <button 
                onClick={() => handlePreferenceChange('analytics')} 
                className={`w-12 h-6 rounded-full p-1 transition-colors duration-200 ${
                  consentState.preferences.analytics ? 'bg-primary-500' : 'bg-dark-100'
                }`}
              >
                <div 
                  className={`w-4 h-4 rounded-full transform transition-transform duration-200 ${
                    consentState.preferences.analytics ? 'bg-dark-500 translate-x-6' : 'bg-light-200 translate-x-0'
                  }`}
                />
              </button>
            </div>
          </div>
          
          <div className="p-4 bg-dark-300 border border-dark-100">
            <div className="flex justify-between items-center">
              <div>
                <h3 className="text-lg font-heading font-bold text-primary-500 mb-1">Marketing-Cookies</h3>
                <p className="text-light-200 text-sm">
                  Diese Cookies werden verwendet, um Werbung relevanter für Sie zu gestalten.
                </p>
              </div>
              <button 
                onClick={() => handlePreferenceChange('marketing')} 
                className={`w-12 h-6 rounded-full p-1 transition-colors duration-200 ${
                  consentState.preferences.marketing ? 'bg-primary-500' : 'bg-dark-100'
                }`}
              >
                <div 
                  className={`w-4 h-4 rounded-full transform transition-transform duration-200 ${
                    consentState.preferences.marketing ? 'bg-dark-500 translate-x-6' : 'bg-light-200 translate-x-0'
                  }`}
                />
              </button>
            </div>
          </div>
          
          <div className="p-4 bg-dark-300 border border-dark-100">
            <div className="flex justify-between items-center">
              <div>
                <h3 className="text-lg font-heading font-bold text-primary-500 mb-1">Präferenz-Cookies</h3>
                <p className="text-light-200 text-sm">
                  Diese Cookies ermöglichen der Website, verbesserte Funktionalität und Personalisierung zu bieten.
                </p>
              </div>
              <button 
                onClick={() => handlePreferenceChange('preferences')} 
                className={`w-12 h-6 rounded-full p-1 transition-colors duration-200 ${
                  consentState.preferences.preferences ? 'bg-primary-500' : 'bg-dark-100'
                }`}
              >
                <div 
                  className={`w-4 h-4 rounded-full transform transition-transform duration-200 ${
                    consentState.preferences.preferences ? 'bg-dark-500 translate-x-6' : 'bg-light-200 translate-x-0'
                  }`}
                />
              </button>
            </div>
          </div>
        </div>
        
        <div className="flex justify-end">
          <button 
            onClick={savePreferences}
            className={`px-4 py-2 bg-primary-500 text-dark-500 font-heading font-bold hover:bg-primary-400 transition-colors duration-200 ${
              !updated && !standalone ? 'opacity-50 cursor-not-allowed' : ''
            }`}
            disabled={!updated && !standalone}
          >
            Einstellungen speichern
          </button>
        </div>
      </div>
    </div>
  );
};

export default CookieSettings;