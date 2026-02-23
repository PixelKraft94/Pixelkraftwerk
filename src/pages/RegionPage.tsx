'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, ArrowRight, CheckCircle } from 'lucide-react';
import { businessInfo } from '../data/businessInfo';
import LocalBusinessSchema from '../components/LocalBusinessSchema';
import ContactForm from '../components/ContactForm';
import GoogleMapsSection from '../components/GoogleMapsSection';

type RegionSlug = 'leipzig' | 'groitzsch' | 'sachsen';

const regionContent: Record<RegionSlug, {
  name: string;
  title: string;
  metaDescription: string;
  intro: string;
  paragraphs: string[];
  faqs: { q: string; a: string }[];
  servicesHighlight: string[];
}> = {
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
      { q: 'Arbeitet ihr nur in Groitzsch oder auch in der Region?', a: 'Unser Hauptsitz ist Groitzsch; wir betreuen aber Unternehmen in der gesamten Region – Groitzsch, Landkreis Leipzig, Leipzig und ganz Sachsen.' },
    ],
    servicesHighlight: ['KI-Chatbots & digitale Kundenassistenz', 'Telefonassistenten', 'Terminbuchung & Buchungssysteme', 'CRM & Lead-Management', 'Websites & SEO', 'Content & KI-Videos'],
  },
  sachsen: {
    name: 'Sachsen',
    title: 'KI-Automatisierung & Chatbots in Sachsen',
    metaDescription: 'Pixel Kraftwerk – KI-Automatisierung, Chatbots, Terminbuchung, CRM und SEO für Unternehmen in Sachsen. Von Groitzsch aus für Leipzig, Dresden, Chemnitz und ganz Sachsen.',
    intro: 'Wir betreuen Unternehmen in ganz Sachsen – von Leipzig über Dresden und Chemnitz bis in die ländlichen Regionen. Unser Sitz in Groitzsch ermöglicht kurze Wege in die Metropolregion Leipzig; darüber hinaus arbeiten wir mit Kunden in allen Teilen des Freistaats, oft remote, bei Bedarf auch vor Ort.',
    paragraphs: [
      'Sachsen hat eine starke Wirtschaft und viele mittelständische Betriebe. Genau für sie entwickeln wir KI-gestützte Lösungen: Chatbots für Website und Messenger, Telefonassistenten für die Anrufannahme, Terminbuchungssysteme, CRM-Integrationen und Websites mit SEO. Ziel ist immer, Abläufe zu vereinfachen und mehr Zeit für das Kerngeschäft zu schaffen.',
      'Ob Sie in Leipzig, Dresden, Chemnitz, Zwickau oder woanders in Sachsen tätig sind – wir passen die Zusammenarbeit an Ihre Lage an. Erstgespräche und Workshops können bei Ihnen, bei uns in Groitzsch oder per Video stattfinden.',
    ],
    faqs: [
      { q: 'Betreut ihr auch Kunden in Dresden und Chemnitz?', a: 'Ja. Wir arbeiten mit Unternehmen in ganz Sachsen. Die Zusammenarbeit läuft oft remote; bei Bedarf sind wir auch in Dresden, Chemnitz und anderen Städten vor Ort.' },
      { q: 'Von wo aus arbeitet Pixel Kraftwerk?', a: 'Unser Hauptsitz ist Groitzsch (Landkreis Leipzig). Von dort aus bedienen wir Leipzig, Sachsen und darüber hinaus.' },
    ],
    servicesHighlight: ['KI-Chatbots & digitale Kundenassistenz', 'Telefonassistenten & Anrufannahme', 'Terminbuchung & Buchungssysteme', 'Lead-Management & CRM', 'Websites & SEO', 'Content & KI-Videos'],
  },
};

const regionSlugs: RegionSlug[] = ['leipzig', 'groitzsch', 'sachsen'];

const RegionPage: React.FC<{ region: string }> = ({ region }) => {
  const slug = regionSlugs.includes(region as RegionSlug) ? (region as RegionSlug) : 'leipzig';
  const content = regionContent[slug];

  return (
    <div className="bg-dark-500">
      <LocalBusinessSchema pageType="homepage" customDescription={content.metaDescription} />

      <section className="relative pt-32 pb-24 bg-dark-500 overflow-hidden">
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto">
            <motion.p
              className="text-primary-500 font-heading font-bold text-sm mb-2"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
            >
              <a href="/leistungsgebiete" className="hover:underline">Leistungsgebiete</a> / {content.name}
            </motion.p>
            <motion.h1
              className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-light-100 mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              {content.title}
            </motion.h1>
            <motion.p
              className="text-xl text-light-200"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              {content.intro}
            </motion.p>
            <motion.div
              className="mt-6 flex flex-wrap items-center gap-4 text-light-300 text-sm"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
            >
              <MapPin className="w-4 h-4 text-primary-500 flex-shrink-0" />
              <span>{businessInfo.address.streetAddress}, {businessInfo.address.postalCode} {businessInfo.address.addressLocality}</span>
              <span>·</span>
              <a href={`tel:${businessInfo.contact.telephone}`} className="text-primary-400 hover:underline">{businessInfo.contact.telephone}</a>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-dark-400">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto prose prose-invert">
            {content.paragraphs.map((p, i) => (
              <motion.p
                key={i}
                className="text-light-200 text-lg leading-relaxed mb-6"
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
              >
                {p}
              </motion.p>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-dark-500">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl font-heading font-bold text-light-100 mb-8">Leistungen in {content.name}</h2>
            <ul className="space-y-3">
              {content.servicesHighlight.map((s, i) => (
                <li key={i} className="flex items-center gap-3 text-light-200">
                  <CheckCircle className="w-5 h-5 text-primary-500 flex-shrink-0" />
                  {s}
                </li>
              ))}
            </ul>
            <p className="mt-8">
              <a href="/services" className="inline-flex items-center text-primary-500 font-heading font-bold hover:text-primary-400">
                Alle Leistungen ansehen
                <ArrowRight size={18} className="ml-2" />
              </a>
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 bg-dark-400">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl font-heading font-bold text-light-100 mb-8">Häufige Fragen – {content.name}</h2>
            <div className="space-y-6">
              {content.faqs.map((faq, i) => (
                <div key={i} className="border-b border-dark-100 pb-6">
                  <h3 className="text-lg font-heading font-bold text-light-100 mb-2">{faq.q}</h3>
                  <p className="text-light-200">{faq.a}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-dark-500">
        <div className="container mx-auto px-4 text-center">
          <p className="text-light-200 mb-6">
            <a href="/leistungsgebiete" className="text-primary-400 hover:underline">Alle Leistungsgebiete</a>
            {' · '}
            <a href="/contact" className="text-primary-400 hover:underline">Kontakt</a>
          </p>
        </div>
      </section>

      <ContactForm />
      <GoogleMapsSection />
    </div>
  );
};

export default RegionPage;
