import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Award } from 'lucide-react';

const ProvenExpertSection: React.FC = () => {
  useEffect(() => {
    (window as any).loadProSeal = function() {
      if ((window as any).provenExpert) {
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
          bottom: "77px",
          stickyToSide: "left",
          googleStars: true,
          zIndex: "9999",
          displayReviewerLastName: false,
        });

        setTimeout(() => {
          const proSealElement = document.querySelector('.pe-pro-seal') as HTMLElement;
          const container = document.getElementById('proven-expert-widget');

          if (proSealElement && container) {
            proSealElement.style.position = 'static';
            proSealElement.style.transform = 'none';
            proSealElement.style.bottom = 'auto';
            proSealElement.style.left = 'auto';
            proSealElement.style.right = 'auto';
            proSealElement.style.width = '100%';
            proSealElement.style.maxWidth = '500px';
            proSealElement.style.margin = '0 auto';
            proSealElement.style.overflow = 'hidden';
            container.appendChild(proSealElement);
          }
        }, 1000);
      }
    };

    const script = document.createElement('script');
    script.id = 'proSeal';
    script.src = 'https://s.provenexpert.net/seals/proseal-v2.js';
    script.async = true;
    script.onload = () => {
      if ((window as any).loadProSeal) {
        (window as any).loadProSeal();
      }
    };
    document.body.appendChild(script);

    return () => {
      if (script.parentNode) {
        script.parentNode.removeChild(script);
      }
      delete (window as any).loadProSeal;
    };
  }, []);

  return (
    <section className="bg-dark-400 py-24 md:py-32 overflow-hidden">
      <div className="container mx-auto px-4 md:px-8 max-w-7xl">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="flex items-center justify-center mb-4">
            <Award className="text-primary-500 mr-3" size={40} />
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-light-100">
              Kundenbewertungen
            </h2>
          </div>
          <p className="text-lg text-light-200">
            Vertrauen Sie auf die Erfahrungen unserer zufriedenen Kunden
          </p>
        </motion.div>

        <motion.div
          className="flex justify-center items-center min-h-[400px]"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <div id="proven-expert-widget" className="w-full max-w-full flex justify-center"></div>
        </motion.div>
      </div>

      <noscript>
        <div className="text-center mt-8">
          <a
            href="https://www.provenexpert.com/pixel-kraftwerk-ki-automatisierungen/?utm_source=seals&utm_campaign=proseal&utm_medium=profile&utm_content=09229aa6-aa11-40d2-80b2-a7579d7f6df5"
            target="_blank"
            rel="noopener noreferrer"
            title="Customer reviews & experiences for Pixel Kraftwerk | KI - Automatisierungen"
            className="text-primary-400 hover:text-primary-300 transition-colors underline"
          >
            Unsere Bewertungen auf ProvenExpert ansehen
          </a>
        </div>
      </noscript>
    </section>
  );
};

export default ProvenExpertSection;
