import React, { useEffect } from 'react';

interface BreadcrumbSchemaProps {
  serviceName: string;
  serviceUrl: string;
}

const BreadcrumbSchema: React.FC<BreadcrumbSchemaProps> = ({ serviceName, serviceUrl }) => {
  useEffect(() => {
    const scriptId = 'breadcrumb-schema';

    let scriptElement = document.getElementById(scriptId) as HTMLScriptElement;

    if (!scriptElement) {
      scriptElement = document.createElement('script');
      scriptElement.id = scriptId;
      scriptElement.type = 'application/ld+json';
      document.head.appendChild(scriptElement);
    }

    const breadcrumbSchema = {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Startseite",
          "item": "https://pixelkraftwerk-ai.com/"
        },
        {
          "@type": "ListItem",
          "position": 2,
          "name": "Alle Leistungen",
          "item": "https://pixelkraftwerk-ai.com/services"
        },
        {
          "@type": "ListItem",
          "position": 3,
          "name": serviceName,
          "item": `https://pixelkraftwerk-ai.com${serviceUrl}`
        }
      ]
    };

    scriptElement.textContent = JSON.stringify(breadcrumbSchema);

    return () => {
      const element = document.getElementById(scriptId);
      if (element) {
        element.remove();
      }
    };
  }, [serviceName, serviceUrl]);

  return null;
};

export default BreadcrumbSchema;
