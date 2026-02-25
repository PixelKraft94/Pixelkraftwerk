import React from 'react';

const ServiceItemListSchema: React.FC = () => {
  const services = [
    {
      name: "KI-Chatbots – Digitale Kundenassistenz",
      url: "https://pixelkraftwerk-ai.com/ki-chatbots",
      description: "KI-Chatbots als digitale Kundenassistenz für automatische Kundenbetreuung auf Ihrer Website. Beantworten Sie Anfragen rund um die Uhr und entlasten Sie Ihr Team."
    },
    {
      name: "KI-Telefonassistent",
      url: "https://pixelkraftwerk-ai.com/telefonassistenten",
      description: "KI-Telefonassistent für automatische Anrufannahme. Nie wieder verpasste Anrufe – professioneller Service rund um die Uhr."
    },
    {
      name: "Terminbuchungssysteme",
      url: "https://pixelkraftwerk-ai.com/termine-buchungen",
      description: "Terminbuchungssysteme mit intelligenter Online-Terminvergabe für Ihr Unternehmen. Automatische Kalenderplanung, Erinnerungen und Kundenverwaltung – ohne Telefonmarathon."
    },
    {
      name: "CRM / Lead-Management",
      url: "https://pixelkraftwerk-ai.com/crm-lead-management",
      description: "CRM- und Lead-Management-Lösungen für strukturierte Kundenverwaltung. Automatische Lead-Erfassung, Qualifizierung und Follow-ups für mehr Abschlüsse."
    },
    {
      name: "Webseiten",
      url: "https://pixelkraftwerk-ai.com/webseite",
      description: "Moderne Webseiten im Mietmodell. Professioneller Webauftritt für lokale Unternehmen mit klarer Struktur und laufender Betreuung."
    },
    {
      name: "SEO: Top 3 in Google",
      url: "https://pixelkraftwerk-ai.com/seo-top-3-in-google",
      description: "SEO-Angebot mit Fokus auf Top-3-Platzierungen bei Google für Suchbegriffe, die wirklich Kunden bringen – speziell für Leipzig, Groitzsch und Region."
    },
    {
      name: "Content & KI-Videos",
      url: "https://pixelkraftwerk-ai.com/content-video",
      description: "Content-Produktion und KI-Videos mit professionellen Texten, Bildern und Videos. Schnelle Content-Erstellung für Website, Social Media und Marketing."
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
