import React, { useEffect } from 'react';
import { businessInfo } from '../data/businessInfo';

interface SEOHeadProps {
  title?: string;
  description?: string;
  keywords?: string[];
  canonical?: string;
  ogType?: 'website' | 'article';
  noindex?: boolean;
}

const SEOHead: React.FC<SEOHeadProps> = ({
  title,
  description,
  keywords = [],
  canonical,
  ogType = 'website',
  noindex = false
}) => {
  const fullTitle = title
    ? `${title} | ${businessInfo.name}`
    : `${businessInfo.name} - ${businessInfo.description}`;

  const metaDescription = description || businessInfo.description;
  const allKeywords = [...businessInfo.keywords, ...keywords].join(', ');
  const url = canonical || businessInfo.url;

  useEffect(() => {
    document.title = fullTitle;

    const updateOrCreateMeta = (name: string, content: string, useProperty = false) => {
      const attribute = useProperty ? 'property' : 'name';
      let element = document.querySelector(`meta[${attribute}="${name}"]`);

      if (!element) {
        element = document.createElement('meta');
        element.setAttribute(attribute, name);
        document.head.appendChild(element);
      }

      element.setAttribute('content', content);
    };

    const updateOrCreateLink = (rel: string, href: string, additionalAttrs?: Record<string, string>) => {
      let element = document.querySelector(`link[rel="${rel}"]`) as HTMLLinkElement;
      if (!element) {
        element = document.createElement('link');
        element.rel = rel;
        document.head.appendChild(element);
      }
      element.href = href;
      if (additionalAttrs) {
        Object.entries(additionalAttrs).forEach(([key, value]) => {
          element.setAttribute(key, value);
        });
      }
    };

    updateOrCreateMeta('description', metaDescription);
    updateOrCreateMeta('keywords', allKeywords);
    updateOrCreateMeta('author', businessInfo.name);
    updateOrCreateMeta('viewport', 'width=device-width, initial-scale=1.0');
    updateOrCreateMeta('theme-color', '#000000');

    updateOrCreateMeta('og:title', fullTitle, true);
    updateOrCreateMeta('og:description', metaDescription, true);
    updateOrCreateMeta('og:type', ogType, true);
    updateOrCreateMeta('og:url', url, true);
    updateOrCreateMeta('og:image', `${businessInfo.url}/og-image.png`, true);
    updateOrCreateMeta('og:image:width', '1200', true);
    updateOrCreateMeta('og:image:height', '630', true);
    updateOrCreateMeta('og:image:alt', `${businessInfo.name} - KI-Automatisierung aus Groitzsch`, true);
    updateOrCreateMeta('og:locale', 'de_DE', true);
    updateOrCreateMeta('og:site_name', businessInfo.name, true);

    updateOrCreateMeta('twitter:card', 'summary_large_image');
    updateOrCreateMeta('twitter:title', fullTitle);
    updateOrCreateMeta('twitter:description', metaDescription);
    updateOrCreateMeta('twitter:image', `${businessInfo.url}/og-image.png`);
    updateOrCreateMeta('twitter:image:alt', `${businessInfo.name} - KI-Automatisierung aus Groitzsch`);

    updateOrCreateMeta('geo.region', 'DE-SN');
    updateOrCreateMeta('geo.placename', businessInfo.address.addressLocality);
    updateOrCreateMeta('geo.position', `${businessInfo.geo.latitude};${businessInfo.geo.longitude}`);
    updateOrCreateMeta('ICBM', `${businessInfo.geo.latitude}, ${businessInfo.geo.longitude}`);

    if (noindex) {
      updateOrCreateMeta('robots', 'noindex, nofollow');
    } else {
      updateOrCreateMeta('robots', 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1');
    }

    updateOrCreateLink('canonical', url);
    updateOrCreateLink('alternate', url, { hreflang: 'de' });
  }, [fullTitle, metaDescription, allKeywords, url, ogType, noindex]);

  return null;
};

export default SEOHead;
