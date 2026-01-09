import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import Logo from './Logo';
import { NavItem } from '../types';

const navItems: NavItem[] = [
  { title: 'Startseite', path: '/' },
  { title: 'Unsere Leistungen', path: '/services' },
  { title: 'Über uns', path: '/about' },
  { title: 'FAQ', path: '/faq' },
  { title: 'Kontakt', path: '/contact' },
  { title: 'Impressum', path: '/imprint' },
];

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  const [scrolled, setScrolled] = useState<boolean>(false);

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

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-colors duration-300 ${
        scrolled ? 'bg-dark-500/95 backdrop-blur-sm shadow-lg' : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Logo />
        
        {/* Desktop Navigation */}
        <nav className="hidden md:block">
          <ul className="flex space-x-8">
            {navItems.map((item) => (
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

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-light-100 hover:text-primary-400 transition-colors duration-200"
          onClick={toggleMenu}
          aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <nav className="md:hidden bg-dark-400 animate-fade-in">
          <ul className="container mx-auto px-4 py-4 flex flex-col space-y-4">
            {navItems.map((item) => (
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