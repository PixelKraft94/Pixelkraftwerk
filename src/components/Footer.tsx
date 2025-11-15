import React from 'react';
import { Instagram, Facebook, MessageCircle } from 'lucide-react';
import Logo from './Logo';
import NAPInfo from './NAPInfo';
import { NavItem, SocialLink } from '../types';

const navItems: NavItem[] = [
  { title: 'Startseite', path: '/' },
  { title: 'Über uns', path: '/about' },
  { title: 'Kontakt', path: '/contact' },
  { title: 'Features', path: '/features' },
  { title: 'FAQ', path: '/faq' },
  { title: 'AGBs', path: '/agb' },
  { title: 'Datenschutzerklärung', path: '/privacy' },
  { title: 'Nutzungsbedingungen', path: '/terms' },
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
            <h3 className="text-primary-500 font-heading font-bold mb-4">Navigation</h3>
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
            <h3 className="text-primary-500 font-heading font-bold mb-4">Kontakt</h3>
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
    </footer>
  );
};

export default Footer;