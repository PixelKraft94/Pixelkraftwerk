/**
 * Inhalte für Leistungsgebiete-Seiten (Stadt-Seiten).
 * Shared für generateMetadata (Server) und RegionPage (Client).
 */
import { LEISTUNGSGEBIETE_SLUGS } from './leistungsgebiete';

export type RegionContent = {
  name: string;
  title: string;
  metaDescription: string;
  intro: string;
  paragraphs: string[];
  faqs: { q: string; a: string }[];
  servicesHighlight: string[];
};

const customRegionContent: Partial<Record<string, RegionContent>> = {
  leipzig: {
    name: 'Leipzig',
    title: 'KI-Automatisierung & Chatbots in Leipzig',
    metaDescription: 'Pixel Kraftwerk – KI-Chatbots, Telefonassistenten, Terminbuchung, CRM und SEO für Unternehmen in Leipzig. Aus Groitzsch für die Metropolregion.',
    intro: 'Für Unternehmen in Leipzig und der Metropolregion entwickeln wir KI-gestützte Lösungen: digitale und telefonische Kundenassistenz, Terminbuchungssysteme, CRM und Websites mit SEO. Von Groitzsch aus sind wir schnell vor Ort und verbinden regionale Nähe mit moderner Technologie.',
    paragraphs: [
      'Leipzig wächst – und mit ihr der Bedarf an effizienten Prozessen. Ob Handwerksbetrieb, Praxis, Agentur oder Handel: Kundenanfragen, Terminabsprachen und Nachverfolgung kosten Zeit. Wir automatisieren genau diese Abläufe mit KI-Chatbots, die auf Ihrer Website und in Messengern antworten, mit Telefonassistenten, die Anrufe entgegennehmen, und mit Buchungssystemen, die Termine selbstständig koordinieren.',
      'Unsere Kunden in Leipzig schätzen die kurze Erreichbarkeit und die klare, verständliche Umsetzung. Wir bauen keine Black Boxes, sondern Systeme, die zu Ihrem Alltag passen – mit Beratung vor Ort oder per Video, je nach Bedarf.',
    ],
    faqs: [
      { q: 'Betreut Pixel Kraftwerk auch Kunden in Leipzig-Mitte und den Stadtteilen?', a: 'Ja. Wir betreuen Unternehmen in der gesamten Stadt Leipzig und der Metropolregion – von der Innenstadt über die Randbezirke bis in den Umlandkreis.' },
      { q: 'Wie läuft die Zusammenarbeit aus Groitzsch für Leipziger Kunden?', a: 'Erstgespräche und Workshops können bei Ihnen vor Ort in Leipzig oder bei uns in Groitzsch stattfinden. Technische Umsetzung und Betreuung laufen oft remote; bei Bedarf sind wir auch in Leipzig präsent.' },
    ],
    servicesHighlight: ['KI-Chatbots für Website & Messenger', 'Telefonassistenten & Anrufannahme', 'Terminbuchung & Buchungssysteme', 'Lead-Management & CRM', 'Websites & SEO'],
  },
  groitzsch: {
    name: 'Groitzsch',
    title: 'KI-Automatisierung & Chatbots in Groitzsch – Ihr Partner vor Ort',
    metaDescription: 'Pixel Kraftwerk hat seinen Sitz in Groitzsch. KI-Chatbots, Telefonassistenten, Terminbuchung, CRM und SEO für Unternehmen in Groitzsch und Umgebung.',
    intro: 'Pixel Kraftwerk hat seinen Hauptsitz in Groitzsch. Von hier aus entwickeln wir KI-Lösungen für Unternehmen in Groitzsch, dem Landkreis Leipzig und der Region – mit kurzen Wegen, persönlicher Betreuung und dem Fokus auf praxisnahe Automatisierung.',
    paragraphs: [
      'Ob Sie in Groitzsch produzieren, handeln, beraten oder Dienstleistungen anbieten: Wiederkehrende Aufgaben wie Kundenanfragen, Terminabsprachen und Nachverfolgung lassen sich mit unseren Systemen entlasten. Wir kennen die lokalen Gegebenheiten und bauen Lösungen, die zu Ihrem Betrieb passen.',
      'Sie finden uns in der Neuer Weg 9a – für ein Erstgespräch, eine Demo oder die gemeinsame Planung Ihrer Automatisierung. Wir verbinden regionale Verankerung mit moderner KI-Technologie.',
    ],
    faqs: [
      { q: 'Wo genau sitzt Pixel Kraftwerk in Groitzsch?', a: 'Unser Sitz ist Neuer Weg 9a, 04539 Groitzsch. Sie können uns nach Absprache besuchen oder wir kommen zu Ihnen – in Groitzsch und Umgebung.' },
      { q: 'Arbeitet ihr nur in Groitzsch oder auch in der Region?', a: 'Unser Hauptsitz ist Groitzsch; wir betreuen aber Unternehmen in der gesamten Region – Groitzsch, Landkreis Leipzig, Leipzig und die 12 Leistungsgebiete.' },
    ],
    servicesHighlight: ['KI-Chatbots & digitale Kundenassistenz', 'Telefonassistenten', 'Terminbuchung & Buchungssysteme', 'CRM & Lead-Management', 'Websites & SEO', 'Content & KI-Videos'],
  },
};

const SLUG_TO_NAME: Record<string, string> = {
  leipzig: 'Leipzig',
  markkleeberg: 'Markkleeberg',
  zwenkau: 'Zwenkau',
  borna: 'Borna',
  boehlen: 'Böhlen',
  roetha: 'Rötha',
  neukieritzsch: 'Neukieritzsch',
  pegau: 'Pegau',
  lucka: 'Lucka',
  meuselwitz: 'Meuselwitz',
  'regis-breitingen': 'Regis-Breitingen',
  elstertrebnitz: 'Elstertrebnitz',
  groitzsch: 'Groitzsch',
};

function getTemplateRegionContent(cityName: string): RegionContent {
  return {
    name: cityName,
    title: `KI-Agentur ${cityName} – Chatbots, Telefonassistenten & SEO in meiner Nähe`,
    metaDescription: `Pixel Kraftwerk – KI-Automatisierung, Chatbots, Terminbuchung, CRM und SEO für Unternehmen in ${cityName}. Aus Groitzsch für die Region Leipzig.`,
    intro: `Für Unternehmen in ${cityName} und Umgebung entwickeln wir KI-gestützte Lösungen: digitale und telefonische Kundenassistenz, Terminbuchungssysteme, CRM und Websites mit SEO. Von unserem Sitz in Groitzsch aus sind wir schnell in der Region und verbinden lokale Nähe mit moderner Technologie.`,
    paragraphs: [
      `Ob in ${cityName}, Leipzig oder dem Umland – Kundenanfragen, Terminabsprachen und Nachverfolgung kosten Zeit. Wir automatisieren diese Abläufe mit KI-Chatbots auf Website und in Messengern, mit Telefonassistenten für die Anrufannahme und mit Buchungssystemen für Termine. So gewinnen Sie Zeit und Ihre Kunden erhalten schnelle Antworten.`,
      'Unser Hauptsitz liegt in Groitzsch; wir betreuen Kunden in allen 12 Leistungsgebieten. Erstgespräche und Workshops können bei Ihnen vor Ort, bei uns in Groitzsch oder per Video stattfinden.',
    ],
    faqs: [
      { q: `Betreut Pixel Kraftwerk auch Kunden in ${cityName}?`, a: `Ja. Wir betreuen Unternehmen in ${cityName} und der gesamten Region – von Groitzsch über Leipzig bis in die umliegenden Städte. Die Zusammenarbeit läuft oft remote; bei Bedarf sind wir auch vor Ort.` },
      { q: 'Wo sitzt Pixel Kraftwerk?', a: 'Unser Sitz ist Neuer Weg 9a, 04539 Groitzsch. Von dort aus bedienen wir Leipzig, Markkleeberg, Zwenkau, Borna und alle weiteren Leistungsgebiete.' },
      { q: 'Welche Leistungen bietet ihr für die Region?', a: 'KI-Chatbots, Telefonassistenten, Terminbuchung, CRM, Websites & SEO sowie Content und KI-Videos. Alle Leistungen können wir auch für Unternehmen in Ihrer Nähe umsetzen.' },
    ],
    servicesHighlight: ['KI-Chatbots für Website & Messenger', 'Telefonassistenten & Anrufannahme', 'Terminbuchung & Buchungssysteme', 'Lead-Management & CRM', 'Websites & SEO', 'Content & KI-Videos'],
  };
}

export function getRegionContent(slug: string): RegionContent {
  if (customRegionContent[slug]) return customRegionContent[slug]!;
  const name = SLUG_TO_NAME[slug] ?? slug;
  return getTemplateRegionContent(name);
}

export function getValidRegionSlug(region: string): string {
  return (LEISTUNGSGEBIETE_SLUGS as readonly string[]).includes(region) ? region : 'leipzig';
}
