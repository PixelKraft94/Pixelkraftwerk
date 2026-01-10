import React, { useState, useEffect, useRef } from 'react';
import { Menu, X, ChevronDown, MessageSquare, Phone, Calendar, Target, Globe, Video } from 'lucide-react';
import Logo from './Logo';
import { NavItem } from '../types';

interface ServiceLink {
  title: string;
  path: string;
  icon: React.ReactNode;
}

const serviceLinks: ServiceLink[] = [
  { title: 'KI-Chatbots', path: '/ki-chatbots', icon: <MessageSquare size={18} /> },
  { title: 'Telefonassistenten', path: '/telefonassistenten', icon: <Phone size={18} /> },
  { title: 'Terminplanung & Buchungssysteme', path: '/termine-buchungen', icon: <Calendar size={18} /> },
  { title: 'Lead-Management & CRM', path: '/crm-lead-management', icon: <Target size={18} /> },
  { title: 'Websites & SEO', path: '/website-seo', icon: <Globe size={18} /> },
  { title: 'Content-Produktion & KI-Videos', path: '/content-video', icon: <Video size={18} /> },
];

const navItems: NavItem[] = [
  { title: 'Startseite', path: '/' },
  { title: 'Über uns', path: '/about' },
  { title: 'FAQ', path: '/faq' },
  { title: 'Kontakt', path: '/contact' },
  { title: 'Impressum', path: '/imprint' },
];

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  const [scrolled, setScrolled] = useState<boolean>(false);
  const [isServicesOpen, setIsServicesOpen] = useState<boolean>(false);
  const [isMobileServicesOpen, setIsMobileServicesOpen] = useState<boolean>(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [scrolled]);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsServicesOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    setIsMobileServicesOpen(false);
  };

  const handleMouseEnter = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
    setIsServicesOpen(true);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setIsServicesOpen(false);
    }, 150);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-colors duration-300 ${
        scrolled ? 'bg-dark-500/95 backdrop-blur-sm shadow-lg' : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Logo />

        <nav className="hidden md:block">
          <ul className="flex space-x-8 items-center">
            <li>
              <a
                href="/"
                className="text-light-100 hover:text-primary-400 font-heading transition-colors duration-200"
              >
                Startseite
              </a>
            </li>

            <li
              className="relative"
              ref={dropdownRef}
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              <a
                href="/services"
                className="flex items-center text-light-100 hover:text-primary-400 font-heading transition-colors duration-200"
              >
                Unsere Leistungen
                <ChevronDown
                  size={16}
                  className={`ml-1 transition-transform duration-200 ${isServicesOpen ? 'rotate-180' : ''}`}
                />
              </a>

              {isServicesOpen && (
                <div className="absolute top-full left-0 mt-2 w-72 bg-dark-400 border border-dark-100 shadow-xl animate-fade-in">
                  <div className="py-2">
                    <a
                      href="/services"
                      className="block px-4 py-3 text-primary-400 hover:bg-dark-300 font-heading text-sm border-b border-dark-100"
                    >
                      Alle Leistungen
                    </a>
                    {serviceLinks.map((service) => (
                      <a
                        key={service.path}
                        href={service.path}
                        className="flex items-center px-4 py-3 text-light-100 hover:text-primary-400 hover:bg-dark-300 transition-colors duration-200"
                      >
                        <span className="text-primary-500 mr-3">{service.icon}</span>
                        <span className="text-sm">{service.title}</span>
                      </a>
                    ))}
                  </div>
                </div>
              )}
            </li>

            {navItems.slice(1).map((item) => (
              <li key={item.path}>
                <a
                  href={item.path}
                  className="text-light-100 hover:text-primary-400 font-heading transition-colors duration-200"
                >
                  {item.title}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <button
          className="md:hidden text-light-100 hover:text-primary-400 transition-colors duration-200"
          onClick={toggleMenu}
          aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {isMenuOpen && (
        <nav className="md:hidden bg-dark-400 animate-fade-in">
          <ul className="container mx-auto px-4 py-4 flex flex-col space-y-2">
            <li>
              <a
                href="/"
                className="block text-light-100 hover:text-primary-400 font-heading py-2 transition-colors duration-200"
                onClick={toggleMenu}
              >
                Startseite
              </a>
            </li>

            <li>
              <button
                onClick={() => setIsMobileServicesOpen(!isMobileServicesOpen)}
                className="flex items-center justify-between w-full text-light-100 hover:text-primary-400 font-heading py-2 transition-colors duration-200"
              >
                Unsere Leistungen
                <ChevronDown
                  size={16}
                  className={`transition-transform duration-200 ${isMobileServicesOpen ? 'rotate-180' : ''}`}
                />
              </button>

              {isMobileServicesOpen && (
                <ul className="ml-4 mt-2 space-y-1 border-l-2 border-primary-500/30 animate-fade-in">
                  <li>
                    <a
                      href="/services"
                      className="block py-2 pl-4 text-primary-400 font-heading text-sm"
                      onClick={toggleMenu}
                    >
                      Alle Leistungen
                    </a>
                  </li>
                  {serviceLinks.map((service) => (
                    <li key={service.path}>
                      <a
                        href={service.path}
                        className="flex items-center py-2 pl-4 text-light-200 hover:text-primary-400 transition-colors duration-200"
                        onClick={toggleMenu}
                      >
                        <span className="text-primary-500 mr-2">{service.icon}</span>
                        <span className="text-sm">{service.title}</span>
                      </a>
                    </li>
                  ))}
                </ul>
              )}
            </li>

            {navItems.slice(1).map((item) => (
              <li key={item.path}>
                <a
                  href={item.path}
                  className="block text-light-100 hover:text-primary-400 font-heading py-2 transition-colors duration-200"
                  onClick={toggleMenu}
                >
                  {item.title}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </header>
  );
};

export default Header;