import React from 'react';
import { useState, useEffect } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Imprint from './pages/Imprint';
import Privacy from './pages/Privacy';
import Terms from './pages/Terms';
import Agb from './pages/Agb';
import PrivacySettings from './pages/PrivacySettings';
import Solution from './pages/Solution';
import Features from './pages/Features';
import CookieBanner from './components/CookieBanner';

function App() {
  const [currentPath, setCurrentPath] = useState<string>(window.location.pathname);
  
  useEffect(() => {
    const handleNavigation = () => {
      setCurrentPath(window.location.pathname);
      window.scrollTo(0, 0);
    };

    window.addEventListener('popstate', handleNavigation);
    
    // Intercept clicks on anchor tags
    document.addEventListener('click', (e) => {
      const target = e.target as HTMLElement;
      const anchor = target.closest('a');
      
      if (anchor && anchor.getAttribute('href')?.startsWith('/')) {
        e.preventDefault();
        const href = anchor.getAttribute('href') || '/';
        window.history.pushState({}, '', href);
        setCurrentPath(href);
        window.scrollTo(0, 0);
      } else if (anchor && anchor.getAttribute('href')?.startsWith('#')) {
        e.preventDefault();
        const id = anchor.getAttribute('href')?.substring(1);
        const element = document.getElementById(id || '');
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }
    });

    return () => {
      window.removeEventListener('popstate', handleNavigation);
    };
  }, []);

  const renderPage = () => {
    switch (currentPath) {
      case '/':
        return <Home />;
      case '/about':
        return <About />;
      case '/contact':
        return <Contact />;
      case '/imprint':
        return <Imprint />;
      case '/privacy':
        return <Privacy />;
      case '/terms':
        return <Terms />;
      case '/agb':
        return <Agb />;
      case '/privacy-settings':
        return <PrivacySettings />;
      case '/solution':
        return <Solution />;
      case '/features':
        return <Features />;
      default:
        return <Home />;
    }
  };

  return (
    <div className="bg-dark-500 text-light-100 min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        {renderPage()}
      </main>
      <Footer />
      <CookieBanner />
    </div>
  );
}

export default App;