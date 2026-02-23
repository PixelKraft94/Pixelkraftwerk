import type { MetadataRoute } from 'next';

export const dynamic = 'force-static';
const baseUrl = 'https://pixelkraftwerk-ai.com';

export default function sitemap(): MetadataRoute.Sitemap {
  const lastMod = new Date('2025-05-29');
  return [
    { url: baseUrl + '/', lastModified: lastMod, changeFrequency: 'weekly', priority: 1 },
    { url: baseUrl + '/about', lastModified: lastMod, changeFrequency: 'monthly', priority: 0.9 },
    { url: baseUrl + '/contact', lastModified: lastMod, changeFrequency: 'monthly', priority: 0.9 },
    { url: baseUrl + '/features', lastModified: lastMod, changeFrequency: 'monthly', priority: 0.9 },
    { url: baseUrl + '/services', lastModified: lastMod, changeFrequency: 'monthly', priority: 0.9 },
    { url: baseUrl + '/ki-chatbots', lastModified: lastMod, changeFrequency: 'monthly', priority: 0.8 },
    { url: baseUrl + '/telefonassistenten', lastModified: lastMod, changeFrequency: 'monthly', priority: 0.8 },
    { url: baseUrl + '/termine-buchungen', lastModified: lastMod, changeFrequency: 'monthly', priority: 0.8 },
    { url: baseUrl + '/crm-lead-management', lastModified: lastMod, changeFrequency: 'monthly', priority: 0.8 },
    { url: baseUrl + '/website-seo', lastModified: lastMod, changeFrequency: 'monthly', priority: 0.8 },
    { url: baseUrl + '/content-video', lastModified: lastMod, changeFrequency: 'monthly', priority: 0.8 },
    { url: baseUrl + '/leistungsgebiete', lastModified: lastMod, changeFrequency: 'monthly', priority: 0.8 },
    { url: baseUrl + '/leistungsgebiete/leipzig', lastModified: lastMod, changeFrequency: 'monthly', priority: 0.8 },
    { url: baseUrl + '/leistungsgebiete/groitzsch', lastModified: lastMod, changeFrequency: 'monthly', priority: 0.8 },
    { url: baseUrl + '/leistungsgebiete/sachsen', lastModified: lastMod, changeFrequency: 'monthly', priority: 0.8 },
    { url: baseUrl + '/faq', lastModified: lastMod, changeFrequency: 'monthly', priority: 0.8 },
    { url: baseUrl + '/imprint', lastModified: lastMod, changeFrequency: 'yearly', priority: 0.5 },
    { url: baseUrl + '/agb', lastModified: lastMod, changeFrequency: 'yearly', priority: 0.5 },
    { url: baseUrl + '/privacy', lastModified: lastMod, changeFrequency: 'yearly', priority: 0.5 },
    { url: baseUrl + '/privacy-settings', lastModified: lastMod, changeFrequency: 'yearly', priority: 0.4 },
  ];
}
