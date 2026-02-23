'use client';

import React from 'react';
import { LEISTUNGSGEBIETE_CITIES } from '@/data/leistungsgebiete';
import { getRegionServiceLinkText, type ServiceSlug } from '@/data/services';

/** Anzahl Region-Service-Links im Block (Plan: 6–8, max. 8–10 pro Seite) */
const LINK_COUNT = 8;

/**
 * Block „In Ihrer Region“ / „[Service] in Ihrem Gebiet“ für Service-Seiten.
 * Zeigt 6–8 Links zu Region-Service-Seiten dieses Services mit variierendem Linktext.
 */
interface RegionServiceLinksBlockProps {
  serviceSlug: ServiceSlug;
  title?: string;
}

const RegionServiceLinksBlock: React.FC<RegionServiceLinksBlockProps> = ({
  serviceSlug,
  title = 'In Ihrer Region',
}) => {
  const links = LEISTUNGSGEBIETE_CITIES.slice(0, LINK_COUNT);

  return (
    <div className="bg-dark-500 border border-dark-100 p-6 mt-8">
      <h3 className="text-lg font-heading font-bold text-light-100 mb-3">{title}</h3>
      <p className="text-light-300 text-sm mb-3">
        Wir bieten diese Leistung in allen unseren Leistungsgebieten an – hier eine Auswahl:
      </p>
      <p className="text-sm">
        {links.map((city, i) => (
          <React.Fragment key={city.slug}>
            <a
              href={`/leistungsgebiete/${city.slug}/${serviceSlug}`}
              className="text-primary-400 hover:underline"
            >
              {getRegionServiceLinkText(serviceSlug, city.name, i)}
            </a>
            {i < links.length - 1 ? ' · ' : ''}
          </React.Fragment>
        ))}
        {' · '}
        <a href="/leistungsgebiete" className="text-primary-400 hover:underline font-heading font-bold">
          Alle Leistungsgebiete
        </a>
      </p>
    </div>
  );
};

export default RegionServiceLinksBlock;
