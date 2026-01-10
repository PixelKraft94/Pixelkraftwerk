import React from 'react';

const ServiceItemListSchema: React.FC = () => {
  const services = [
    {
      name: "KI-Chatbots für Ihre Website",
      url: "https://pixelkraftwerk-ai.com/ki-chatbots",
      description: "Intelligente Website-Chatbots für automatische Kundenbetreuung. Beantworten Sie Anfragen rund um die Uhr und entlasten Sie Ihr Team."
    },
    {
      name: "KI-Telefonassistenten",
      url: "https://pixelkraftwerk-ai.com/telefonassistenten",
      description: "Intelligente Telefonassistenten für automatische Anrufannahme. Nie wieder verpasste Anrufe – professioneller Service rund um die Uhr."
    },
    {
      name: "Terminplanung & Buchungssysteme",
      url: "https://pixelkraftwerk-ai.com/termine-buchungen",
      description: "Intelligente Online-Terminbuchung für Ihr Unternehmen. Automatische Kalenderplanung, Erinnerungen und Kundenverwaltung – ohne Telefonmarathon."
    },
    {
      name: "Lead-Management & CRM-Automatisierung",
      url: "https://pixelkraftwerk-ai.com/crm-lead-management",
      description: "Intelligentes CRM-System für strukturierte Kundenverwaltung. Automatische Lead-Erfassung, Qualifizierung und Follow-ups für mehr Abschlüsse."
    },
    {
      name: "Website-Entwicklung & SEO",
      url: "https://pixelkraftwerk-ai.com/website-seo",
      description: "Moderne Websites mit Suchmaschinenoptimierung. Professionelles Webdesign und SEO für mehr Sichtbarkeit bei Google und mehr Kundenanfragen."
    },
    {
      name: "Content-Produktion & KI-Videos",
      url: "https://pixelkraftwerk-ai.com/content-video",
      description: "Professionelle Texte, Bilder und Videos mit KI-Technologie. Schnelle Content-Erstellung für Social Media und Marketing."
    }
  ];

  const schema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "itemListElement": services.map((service, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "item": {
        "@type": "Service",
        "@id": service.url,
        "name": service.name,
        "url": service.url,
        "description": service.description
      }
    }))
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
};

export default ServiceItemListSchema;
