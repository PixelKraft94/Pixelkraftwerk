import React, { useEffect } from 'react';
import { Instagram, Facebook, MessageCircle } from 'lucide-react';
import Logo from './Logo';
import NAPInfo from './NAPInfo';
import { NavItem, SocialLink } from '../types';
import { useCookieConsent } from '../hooks/useCookieConsent';

const navItems: NavItem[] = [
  { title: 'Startseite', path: '/' },
  { title: 'Über uns', path: '/about' },
  { title: 'Kontakt', path: '/contact' },
  { title: 'Features', path: '/features' },
  { title: 'FAQ', path: '/faq' },
  { title: 'AGBs', path: '/agb' },
  { title: 'Datenschutzerklärung', path: '/privacy' },
  { title: 'Impressum', path: '/imprint' },
  { title: 'Datenschutz-Einstellungen', path: '/privacy-settings' },
];

const socialLinks: SocialLink[] = [
  { platform: 'Instagram', url: 'https://www.instagram.com/pixel.kraftwerk/', icon: 'instagram' },
  { platform: 'Facebook', url: 'https://www.facebook.com/profile.php?id=61571247426093', icon: 'facebook' },
  { platform: 'Telegram', url: '#', icon: 'telegram' },
];

const getSocialIcon = (icon: string) => {
  switch (icon) {
    case 'instagram':
      return <Instagram size={20} />;
    case 'facebook':
      return <Facebook size={20} />;
    case 'telegram':
      return <MessageCircle size={20} />;
    default:
      return null;
  }
};

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  const { hasConsent } = useCookieConsent();

  useEffect(() => {
    if (typeof window === 'undefined' || !hasConsent) return;

    const loadProvenExpertScript = () => {
      const existingScript = document.getElementById('proven-expert-script');
      if (existingScript) return;

      const script = document.createElement('script');
      script.id = 'proven-expert-script';
      script.src = 'https://s.provenexpert.net/seals/proseal-v2.js';
      script.async = true;

      script.onload = () => {
        if ((window as any).provenExpert && (window as any).provenExpert.proSeal) {
          (window as any).provenExpert.proSeal({
            widgetId: "09229aa6-aa11-40d2-80b2-a7579d7f6df5",
            language: "de-DE",
            usePageLanguage: false,
            bannerColor: "#097E92",
            textColor: "#FFFFFF",
            showReviews: true,
            hideDate: true,
            hideName: false,
            hideOnMobile: false,
            bottom: "0px",
            stickyToSide: "left",
            googleStars: true,
            zIndex: "9999",
            displayReviewerLastName: false,
          });
        }
      };

      document.body.appendChild(script);
    };

    loadProvenExpertScript();

    return () => {
      const script = document.getElementById('proven-expert-script');
      if (script) {
        script.remove();
      }
    };
  }, [hasConsent]);

  return (
    <footer className="bg-dark-400 pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <div>
            <Logo />
            <p className="text-light-300 mt-4 max-w-md">
              Intelligente Automatisierungslösungen für zukunftsorientierte Unternehmen.
            </p>
          </div>

          <div>
            <h2 className="text-primary-500 font-heading font-bold mb-4 text-lg">Navigation</h2>
            <nav>
              <ul className="grid grid-cols-2 gap-x-4 gap-y-2">
                {navItems.map((item) => (
                  <li key={item.path}>
                    <a
                      href={item.path}
                      className="text-light-100 hover:text-primary-400 transition-colors duration-200"
                    >
                      {item.title}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          </div>

          <div>
            <h2 className="text-primary-500 font-heading font-bold mb-4 text-lg">Kontakt</h2>
            <NAPInfo variant="minimal" showIcons={false} className="mb-6" />

            <div className="flex space-x-4 mt-6">
              {socialLinks.map((link) => (
                <a
                  key={link.platform}
                  href={link.url}
                  aria-label={link.platform}
                  className="text-light-100 hover:text-primary-400 transition-colors duration-200"
                >
                  {getSocialIcon(link.icon)}
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="border-t border-dark-100 pt-8 text-center">
          <p className="text-light-400 text-sm">
            &copy; {currentYear} PIXEL_KRAFTWERK. Alle Rechte vorbehalten.
          </p>
        </div>
      </div>

      <noscript>
        <a
          href="https://www.provenexpert.com/pixel-kraftwerk-ki-automatisierungen/?utm_source=seals&utm_campaign=proseal&utm_medium=profile&utm_content=09229aa6-aa11-40d2-80b2-a7579d7f6df5"
          target="_blank"
          rel="noopener noreferrer"
          title="Customer reviews & experiences for Pixel Kraftwerk | KI - Automatisierungen"
          className="pe-pro-seal-more-infos"
        >
          More info
        </a>
      </noscript>
    </footer>
  );
};

export default Footer;