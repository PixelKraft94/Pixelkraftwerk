import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Check, Shield, BarChart3, Megaphone, Sliders } from 'lucide-react';
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

  const cookieCategories = [
    {
      key: 'necessary' as CookieType,
      icon: <Shield size={24} />,
      title: 'Notwendige Cookies',
      description: 'Diese Cookies sind für die Funktion der Website notwendig und können nicht deaktiviert werden.',
      required: true,
    },
    {
      key: 'analytics' as CookieType,
      icon: <BarChart3 size={24} />,
      title: 'Analyse-Cookies',
      description: 'Diese Cookies helfen uns zu verstehen, wie Besucher mit unserer Website interagieren.',
      required: false,
    },
    {
      key: 'marketing' as CookieType,
      icon: <Megaphone size={24} />,
      title: 'Marketing-Cookies',
      description: 'Diese Cookies werden verwendet, um Werbung relevanter für Sie zu gestalten.',
      required: false,
    },
    {
      key: 'preferences' as CookieType,
      icon: <Sliders size={24} />,
      title: 'Präferenz-Cookies',
      description: 'Diese Cookies ermöglichen der Website, verbesserte Funktionalität und Personalisierung zu bieten.',
      required: false,
    },
  ];

  return (
    <div>
      <div className="space-y-4 mb-8">
        {cookieCategories.map((category, index) => (
          <motion.div
            key={category.key}
            className="group bg-dark-500 border border-dark-100 hover:border-primary-500/50 transition-all duration-300"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: standalone ? index * 0.1 : 0 }}
            whileHover={{ x: 4 }}
          >
            <div className="p-6">
              <div className="flex items-start justify-between gap-4">
                <div className="flex items-start gap-4 flex-1">
                  <motion.div
                    className="text-primary-500 mt-1"
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    transition={{ duration: 0.2 }}
                  >
                    {category.icon}
                  </motion.div>
                  <div className="flex-1">
                    <h3 className="text-lg font-heading font-bold text-light-100 mb-2 group-hover:text-primary-400 transition-colors duration-200">
                      {category.title}
                    </h3>
                    <p className="text-light-300 text-sm leading-relaxed">
                      {category.description}
                    </p>
                  </div>
                </div>

                <div className="flex-shrink-0">
                  {category.required ? (
                    <motion.div
                      className="flex items-center justify-center w-12 h-12 bg-primary-500/20 rounded-full"
                      whileHover={{ scale: 1.05 }}
                    >
                      <Check size={20} className="text-primary-500" />
                    </motion.div>
                  ) : (
                    <button
                      onClick={() => handlePreferenceChange(category.key)}
                      className={`relative w-14 h-7 rounded-full p-1 transition-all duration-300 ${
                        consentState.preferences[category.key]
                          ? 'bg-primary-500'
                          : 'bg-dark-200'
                      }`}
                      aria-label={`Toggle ${category.title}`}
                    >
                      <motion.div
                        className={`w-5 h-5 rounded-full shadow-lg ${
                          consentState.preferences[category.key]
                            ? 'bg-dark-500'
                            : 'bg-light-200'
                        }`}
                        animate={{
                          x: consentState.preferences[category.key] ? 28 : 0,
                        }}
                        transition={{ type: 'spring', stiffness: 500, damping: 30 }}
                      />
                    </button>
                  )}
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      <motion.div
        className="flex justify-end"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: standalone ? 0.5 : 0 }}
      >
        <motion.button
          onClick={savePreferences}
          className={`px-8 py-3 bg-primary-500 text-dark-500 font-heading font-bold hover:bg-primary-400 transition-all duration-300 ${
            !updated && !standalone ? 'opacity-50 cursor-not-allowed' : ''
          }`}
          disabled={!updated && !standalone}
          whileHover={{ scale: updated || standalone ? 1.05 : 1 }}
          whileTap={{ scale: updated || standalone ? 0.98 : 1 }}
        >
          Einstellungen speichern
        </motion.button>
      </motion.div>
    </div>
  );
};

export default CookieSettings;