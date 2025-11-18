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

    updateOrCreateMeta('description', metaDescription);
    updateOrCreateMeta('keywords', allKeywords);
    updateOrCreateMeta('author', businessInfo.name);

    updateOrCreateMeta('og:title', fullTitle, true);
    updateOrCreateMeta('og:description', metaDescription, true);
    updateOrCreateMeta('og:type', ogType, true);
    updateOrCreateMeta('og:url', url, true);
    updateOrCreateMeta('og:image', businessInfo.logo, true);
    updateOrCreateMeta('og:locale', 'de_DE', true);
    updateOrCreateMeta('og:site_name', businessInfo.name, true);

    updateOrCreateMeta('twitter:card', 'summary_large_image');
    updateOrCreateMeta('twitter:title', fullTitle);
    updateOrCreateMeta('twitter:description', metaDescription);
    updateOrCreateMeta('twitter:image', businessInfo.logo);

    updateOrCreateMeta('geo.region', 'DE-SN');
    updateOrCreateMeta('geo.placename', businessInfo.address.addressLocality);
    updateOrCreateMeta('geo.position', `${businessInfo.geo.latitude};${businessInfo.geo.longitude}`);
    updateOrCreateMeta('ICBM', `${businessInfo.geo.latitude}, ${businessInfo.geo.longitude}`);

    if (noindex) {
      updateOrCreateMeta('robots', 'noindex, nofollow');
    } else {
      updateOrCreateMeta('robots', 'index, follow');
    }

    let canonicalLink = document.querySelector('link[rel="canonical"]') as HTMLLinkElement;
    if (!canonicalLink) {
      canonicalLink = document.createElement('link');
      canonicalLink.rel = 'canonical';
      document.head.appendChild(canonicalLink);
    }
    canonicalLink.href = url;
  }, [fullTitle, metaDescription, allKeywords, url, ogType, noindex]);

  return null;
};

export default SEOHead;
