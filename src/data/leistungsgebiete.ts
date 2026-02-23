/**
 * Die 12 Leistungsgebiete (Städte) + Groitzsch (Hauptsitz).
 * Einheitliche Slugs für URLs, Sitemap und Interlinking.
 */
export const LEISTUNGSGEBIETE_CITIES = [
  { slug: 'leipzig', name: 'Leipzig', subtitle: 'Metropolregion' },
  { slug: 'markkleeberg', name: 'Markkleeberg', subtitle: 'Region Leipzig' },
  { slug: 'zwenkau', name: 'Zwenkau', subtitle: 'Region Leipzig' },
  { slug: 'borna', name: 'Borna', subtitle: 'Landkreis Leipzig' },
  { slug: 'boehlen', name: 'Böhlen', subtitle: 'Landkreis Leipzig' },
  { slug: 'roetha', name: 'Rötha', subtitle: 'Landkreis Leipzig' },
  { slug: 'neukieritzsch', name: 'Neukieritzsch', subtitle: 'Landkreis Leipzig' },
  { slug: 'pegau', name: 'Pegau', subtitle: 'Landkreis Leipzig' },
  { slug: 'lucka', name: 'Lucka', subtitle: 'Altenburger Land' },
  { slug: 'meuselwitz', name: 'Meuselwitz', subtitle: 'Altenburger Land' },
  { slug: 'regis-breitingen', name: 'Regis-Breitingen', subtitle: 'Landkreis Leipzig' },
  { slug: 'elstertrebnitz', name: 'Elstertrebnitz', subtitle: 'Landkreis Leipzig' },
  { slug: 'groitzsch', name: 'Groitzsch', subtitle: 'Hauptsitz' },
] as const;

export type LeistungsgebietSlug = (typeof LEISTUNGSGEBIETE_CITIES)[number]['slug'];

export const LEISTUNGSGEBIETE_SLUGS = LEISTUNGSGEBIETE_CITIES.map((c) => c.slug);

/** Stadtnamen für Schema areaServed und Anzeige (Reihenfolge: 12 Städte + Groitzsch) */
export const AREA_SERVED_NAMES = [
  'Leipzig',
  'Markkleeberg',
  'Zwenkau',
  'Borna',
  'Böhlen',
  'Rötha',
  'Neukieritzsch',
  'Pegau',
  'Lucka',
  'Meuselwitz',
  'Regis-Breitingen',
  'Elstertrebnitz',
  'Groitzsch',
] as const;
