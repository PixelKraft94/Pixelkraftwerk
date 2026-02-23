import React from 'react';
import { businessInfo } from '../data/businessInfo';

interface LocalBusinessSchemaProps {
  pageType?: 'homepage' | 'about' | 'contact' | 'service';
  customDescription?: string;
}

const LocalBusinessSchema: React.FC<LocalBusinessSchemaProps> = ({
  customDescription
}) => {
  const sameAs = Object.values(businessInfo.socialMedia).filter(url => url);
  const schema: Record<string, unknown> = {
    "@context": "https://schema.org",
    "@type": businessInfo.businessType,
    "@id": `${businessInfo.url}/#organization`,
    "name": businessInfo.name,
    "legalName": businessInfo.legalName,
    "description": customDescription || businessInfo.description,
    "url": businessInfo.url,
    "logo": businessInfo.logo,
    "image": businessInfo.image,
    "foundingDate": businessInfo.foundingDate,
    "priceRange": businessInfo.priceRange,
    "telephone": businessInfo.contact.telephone,
    "email": businessInfo.contact.email,
    "address": {
      "@type": "PostalAddress",
      "streetAddress": businessInfo.address.streetAddress,
      "addressLocality": businessInfo.address.addressLocality,
      "postalCode": businessInfo.address.postalCode,
      "addressRegion": businessInfo.address.addressRegion,
      "addressCountry": businessInfo.address.addressCountry
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": businessInfo.geo.latitude,
      "longitude": businessInfo.geo.longitude
    },
    "areaServed": businessInfo.serviceArea.map(area => ({
      "@type": "City",
      "name": area
    })),
    "founders": businessInfo.founders.map(founder => ({
      "@type": "Person",
      "name": founder.name
    })),
    "vatID": businessInfo.vatID,
    "openingHoursSpecification": businessInfo.openingHours.map(hours => ({
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": hours.dayOfWeek,
      "opens": hours.opens,
      "closes": hours.closes
    })),
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Automatisierungs-Services",
      "itemListElement": businessInfo.services.map((service, index) => ({
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": service
        },
        "position": index + 1
      }))
    },
    ...(sameAs.length > 0 && { sameAs }),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
};

export default LocalBusinessSchema;
