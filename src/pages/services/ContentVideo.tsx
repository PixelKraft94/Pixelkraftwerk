import React from 'react';
import { motion } from 'framer-motion';
import {
  Video,
  ArrowRight,
  CheckCircle,
  FileText,
  Image,
  Mic,
  TrendingUp,
  Clock,
  Palette,
  Building2,
  ShoppingCart,
  Briefcase,
  Megaphone
} from 'lucide-react';
import ContactForm from '../../components/ContactForm';
import GoogleMapsSection from '../../components/GoogleMapsSection';
import SEOHead from '../../components/SEOHead';
import RelatedServices from '../../components/RelatedServices';
import BreadcrumbSchema from '../../components/BreadcrumbSchema';

const ContentVideo: React.FC = () => {
  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  const problems = [
    'Sie haben keine Zeit, regelmäßig Content für Social Media zu erstellen?',
    'Professionelle Videos sind zu teuer und aufwändig?',
    'Ihre Texte und Bilder wirken nicht so professionell wie die der Konkurrenz?',
    'Sie möchten mehr Content produzieren, aber die Ressourcen fehlen?'
  ];

  const processSteps = [
    {
      step: '01',
      title: 'Briefing & Strategie',
      description: 'Wir besprechen Ihre Marke, Zielgruppe und Content-Ziele für eine klare Strategie.'
    },
    {
      step: '02',
      title: 'Konzeptentwicklung',
      description: 'Entwicklung von Content-Ideen, Skripten und visuellen Konzepten für Ihre Kanäle.'
    },
    {
      step: '03',
      title: 'KI-gestützte Produktion',
      description: 'Erstellung von Bildern und Videos mit modernster KI-Technologie.'
    },
    {
      step: '04',
      title: 'Feinschliff & Anpassung',
      description: 'Manuelle Optimierung und Anpassung an Ihre Corporate Identity und Tonalität.'
    },
    {
      step: '05',
      title: 'Auslieferung & Support',
      description: 'Bereitstellung in allen benötigten Formaten mit Beratung zur optimalen Nutzung.'
    }
  ];

  const benefits = [
    { icon: <Clock size={24} />, title: 'Schnelle Produktion', text: 'Content in Tagen statt Wochen – KI beschleunigt die Erstellung dramatisch.' },
    { icon: <Palette size={24} />, title: 'Konsistente Qualität', text: 'Einheitlicher Look and Feel über alle Content-Formate und Kanäle.' },
    { icon: <TrendingUp size={24} />, title: 'Mehr Output', text: 'Produzieren Sie mehr Content bei gleichem Budget – skalierbar nach Bedarf.' },
    { icon: <FileText size={24} />, title: 'SEO-optimiert', text: 'Texte werden für Suchmaschinen optimiert und bringen organische Reichweite.' },
    { icon: <Video size={24} />, title: 'Professionelle Videos', text: 'Hochwertige Videos ohne teures Equipment oder aufwändige Dreharbeiten.' },
    { icon: <Mic size={24} />, title: 'Mehrsprachig', text: 'Content in verschiedenen Sprachen – für internationale Märkte und Zielgruppen.' }
  ];

  const targetAudiences = [
    { icon: <Building2 size={28} />, title: 'Unternehmen & KMUs', description: 'Regelmäßiger Content für Website, Blog und Social Media ohne eigene Abteilung.' },
    { icon: <ShoppingCart size={28} />, title: 'E-Commerce & Online-Shops', description: 'Produktbeschreibungen, Produktvideos und Social Commerce Content.' },
    { icon: <Briefcase size={28} />, title: 'Coaches & Berater', description: 'Thought Leadership Content, Erklärvideos und Personal Branding.' },
    { icon: <Megaphone size={28} />, title: 'Marketing & Agenturen', description: 'Skalierbare Content-Produktion für Kunden und Kampagnen.' }
  ];

  const contentTypes = [
    {
      icon: <FileText size={32} className="text-primary-500" />,
      title: 'Texte & Artikel',
      items: [
        'Blog-Artikel und Ratgeber',
        'Website-Texte und Landingpages',
        'Social Media Posts',
        'Newsletter und E-Mail-Kampagnen',
        'Produktbeschreibungen',
        'Pressemitteilungen'
      ]
    },
    {
      icon: <Image size={32} className="text-primary-500" />,
      title: 'Bilder & Grafiken',
      items: [
        'Social Media Grafiken',
        'Blog-Header und Thumbnails',
        'Produktbilder und Mockups',
        'Infografiken',
        'Werbebanner',
        'Präsentationen'
      ]
    },
    {
      icon: <Video size={32} className="text-primary-500" />,
      title: 'Videos & Animation',
      items: [
        'Social Media Reels und Shorts',
        'Produktpräsentationen',
        'Testimonial-Videos',
        'Animierte Logos und Intros',
        'KI-Avatar Videos'
      ]
    }
  ];

  return (
    <div className="bg-dark-500">
      <SEOHead
        title="Content-Produktion & KI-Videos"
        description="Professionelle Texte, Bilder und Videos. Bilder und Videos mit KI-Technologie, Texte von erfahrenen Redakteuren. Schnelle Content-Erstellung für Social Media und Marketing."
        keywords={['KI Content', 'KI Video', 'Content Produktion', 'Social Media Content', 'Video Produktion']}
      />
      <BreadcrumbSchema serviceName="Content-Produktion & KI-Videos" serviceUrl="https://pixelkraftwerk-ai.com/content-video" />

      <section className="relative pt-32 pb-20 bg-dark-500 overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-20 left-10 w-72 h-72 bg-primary-500 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-primary-500 rounded-full blur-3xl"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              className="inline-flex items-center justify-center w-20 h-20 bg-primary-500/10 border border-primary-500/30 mb-8"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
            >
              <Video size={40} className="text-primary-500" strokeWidth={1.5} />
            </motion.div>

            <motion.h1
              className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-light-100 mb-6"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              Content-Produktion & KI-Videos
              <span className="block text-primary-500 mt-2">für Ihre Markenpräsenz</span>
            </motion.h1>

            <motion.p
              className="text-xl text-light-200 mb-8 max-w-3xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Professionelle Texte, Bilder und Videos – Bilder und Videos mit moderner KI-Technologie,
              Texte von erfahrenen Redakteuren. Individuell auf Ihre Marke abgestimmt.
            </motion.p>

            <motion.button
              onClick={scrollToContact}
              className="inline-flex items-center px-8 py-4 bg-primary-500 text-dark-500 font-heading font-bold text-lg hover:bg-primary-400 transition-colors duration-300"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <ArrowRight className="mr-2" size={24} />
              Content-Beratung anfordern
            </motion.button>
          </div>
        </div>
      </section>

      <section className="py-20 bg-dark-400">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <motion.div
              className="text-center mb-12"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-2xl md:text-3xl font-heading font-bold text-light-100 mb-4">
                Kennen Sie <span className="text-primary-500">diese Herausforderungen?</span>
              </h2>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {problems.map((problem, index) => (
                <motion.div
                  key={index}
                  className="flex items-start bg-dark-500 p-6 border border-dark-100"
                  initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <span className="text-primary-500 mr-4 mt-1 flex-shrink-0">?</span>
                  <p className="text-light-200">{problem}</p>
                </motion.div>
              ))}
            </div>

            <motion.p
              className="text-center text-light-100 mt-10 text-lg"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <strong>KI-gestützte Content-Produktion ist die Lösung.</strong>
            </motion.p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-dark-500">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <motion.div
              className="text-center mb-16"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-2xl md:text-3xl font-heading font-bold text-light-100 mb-4">
                Unsere <span className="text-primary-500">Content-Formate</span>
              </h2>
              <p className="text-light-200 max-w-3xl mx-auto">
                Von Texten über Bilder bis zu Videos – wir produzieren alle Formate,
                die Sie für Ihre Kommunikation brauchen.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {contentTypes.map((type, index) => (
                <motion.div
                  key={index}
                  className="bg-dark-400 p-8 border border-dark-100"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className="mb-6">{type.icon}</div>
                  <h3 className="text-xl font-heading font-bold text-light-100 mb-6">{type.title}</h3>
                  <ul className="space-y-3">
                    {type.items.map((item, itemIndex) => (
                      <li key={itemIndex} className="flex items-start">
                        <CheckCircle className="text-primary-500 mr-3 mt-0.5 flex-shrink-0" size={16} />
                        <span className="text-light-200 text-sm">{item}</span>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-dark-400">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <motion.div
              className="text-center mb-16"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-2xl md:text-3xl font-heading font-bold text-light-100 mb-4">
                So entsteht <span className="text-primary-500">Ihr Content</span>
              </h2>
            </motion.div>

            <div className="space-y-6">
              {processSteps.map((step, index) => (
                <motion.div
                  key={index}
                  className="flex items-start bg-dark-500 p-6 border border-dark-100 hover:border-primary-500/50 transition-colors duration-300"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <span className="text-3xl font-heading font-bold text-primary-500 mr-6 flex-shrink-0">
                    {step.step}
                  </span>
                  <div>
                    <h3 className="text-lg font-heading font-bold text-light-100 mb-2">{step.title}</h3>
                    <p className="text-light-300">{step.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-dark-500">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <motion.div
              className="text-center mb-16"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-2xl md:text-3xl font-heading font-bold text-light-100 mb-4">
                Ihre <span className="text-primary-500">Vorteile</span>
              </h2>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={index}
                  className="bg-dark-400 p-6 border border-dark-100 hover:border-primary-500/50 transition-all duration-300"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -4 }}
                >
                  <div className="text-primary-500 mb-4">{benefit.icon}</div>
                  <h3 className="text-lg font-heading font-bold text-light-100 mb-2">{benefit.title}</h3>
                  <p className="text-light-300 text-sm">{benefit.text}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-dark-400">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <motion.div
              className="text-center mb-16"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-2xl md:text-3xl font-heading font-bold text-light-100 mb-4">
                Ideal für <span className="text-primary-500">diese Zielgruppen</span>
              </h2>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {targetAudiences.map((audience, index) => (
                <motion.div
                  key={index}
                  className="flex items-start bg-dark-500 p-6 border border-dark-100"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className="text-primary-500 mr-4 flex-shrink-0">{audience.icon}</div>
                  <div>
                    <h3 className="text-lg font-heading font-bold text-light-100 mb-2">{audience.title}</h3>
                    <p className="text-light-300 text-sm">{audience.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <RelatedServices
        currentSlug="content-video"
        relatedSlugs={['website-seo', 'ki-chatbots', 'telefonassistenten']}
      />

      <section className="py-20 bg-dark-500">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <motion.h2
              className="text-2xl md:text-3xl font-heading font-bold text-light-100 mb-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              Bereit für <span className="text-primary-500">professionellen Content?</span>
            </motion.h2>
            <motion.p
              className="text-light-200 mb-8"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
            >
              Lassen Sie uns besprechen, welche Content-Formate Ihr Unternehmen voranbringen.
            </motion.p>
          </div>
        </div>
      </section>

      <GoogleMapsSection />

      <ContactForm />
    </div>
  );
};

export default ContentVideo;
