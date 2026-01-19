import React, { useEffect } from 'react';

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
            proSealElement.style.width = 'auto';
            proSealElement.style.maxWidth = '100%';
            container.appendChild(proSealElement);
          }
        }, 500);
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
    <section className="bg-dark-300 py-12">
      <div className="container mx-auto px-4">
        <div className="flex justify-center items-center">
          <div id="proven-expert-widget"></div>
        </div>
      </div>

      <noscript>
        <div className="text-center">
          <a
            href="https://www.provenexpert.com/pixel-kraftwerk-ki-automatisierungen/?utm_source=seals&utm_campaign=proseal&utm_medium=profile&utm_content=09229aa6-aa11-40d2-80b2-a7579d7f6df5"
            target="_blank"
            rel="noopener noreferrer"
            title="Customer reviews & experiences for Pixel Kraftwerk | KI - Automatisierungen"
            className="text-primary-400 hover:text-primary-300 transition-colors"
          >
            More info
          </a>
        </div>
      </noscript>
    </section>
  );
};

export default ProvenExpertSection;
