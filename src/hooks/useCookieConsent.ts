import { useState, useEffect } from 'react';

interface CookieConsentState {
  consented: boolean;
  preferences: {
    necessary: boolean;
    analytics: boolean;
    marketing: boolean;
    preferences: boolean;
  };
  timestamp: string | null;
}

export const useCookieConsent = () => {
  const [hasConsent, setHasConsent] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    const checkConsent = () => {
      try {
        const storedConsent = localStorage.getItem('cookieConsent');
        if (storedConsent) {
          const consentState: CookieConsentState = JSON.parse(storedConsent);
          setHasConsent(consentState.consented);
        } else {
          setHasConsent(false);
        }
      } catch (error) {
        console.error('Error checking cookie consent:', error);
        setHasConsent(false);
      } finally {
        setIsLoading(false);
      }
    };

    checkConsent();

    const handleStorageChange = (e: StorageEvent) => {
      if (e.key === 'cookieConsent') {
        checkConsent();
      }
    };

    const handleCustomStorageChange = () => {
      checkConsent();
    };

    window.addEventListener('storage', handleStorageChange);
    window.addEventListener('cookieConsentChanged', handleCustomStorageChange);

    return () => {
      window.removeEventListener('storage', handleStorageChange);
      window.removeEventListener('cookieConsentChanged', handleCustomStorageChange);
    };
  }, []);

  return { hasConsent, isLoading };
};
