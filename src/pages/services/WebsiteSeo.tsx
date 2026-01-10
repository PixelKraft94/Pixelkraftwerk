import React from 'react';
import { motion } from 'framer-motion';
import {
  Globe,
  ArrowRight,
  CheckCircle,
  Search,
  Smartphone,
  Zap,
  BarChart3,
  Shield,
  Palette,
  Building2,
  Briefcase,
  Store,
  Stethoscope,
  Clock,
  Wrench,
  HeadphonesIcon
} from 'lucide-react';
import ContactForm from '../../components/ContactForm';
import GoogleMapsSection from '../../components/GoogleMapsSection';
import SEOHead from '../../components/SEOHead';
import RelatedServices from '../../components/RelatedServices';
import BreadcrumbSchema from '../../components/BreadcrumbSchema';

const WebsiteSeo: React.FC = () => {
  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  const problems = [
    'Ihre aktuelle Website wirkt veraltet und repräsentiert Ihr Unternehmen nicht mehr?',
    'Potenzielle Kunden finden Sie bei Google nicht oder erst auf Seite 5?',
    'Ihre Website ist langsam und auf dem Smartphone kaum benutzbar?',
    'Sie möchten online neue Kunden gewinnen, wissen aber nicht wie?'
  ];

  const processSteps = [
    {
      step: '01',
      title: 'Analyse & Strategie',
      description: 'Wir analysieren Ihre Zielgruppe, Wettbewerber und Keywords für eine fundierte Strategie.'
    },
    {
      step: '02',
      title: 'Design-Konzept',
      description: 'Entwicklung eines modernen Designs, das Ihre Marke widerspiegelt und Besucher überzeugt.'
    },
    {
      step: '03',
      title: 'Entwicklung',
      description: 'Technisch einwandfreie Umsetzung mit schnellen Ladezeiten und perfekter Mobil-Optimierung.'
    },
    {
      step: '04',
      title: 'SEO-Optimierung',
      description: 'On-Page SEO, technische Optimierung und Einrichtung für lokale Suchmaschinenoptimierung.'
    },
    {
      step: '05',
      title: 'Launch & Betreuung',
      description: 'Go-Live mit laufender Betreuung, Überwachung und kontinuierlicher Optimierung.'
    }
  ];

  const benefits = [
    { icon: <Search size={24} />, title: 'Bessere Google-Rankings', text: 'Strukturierte SEO-Optimierung für mehr Sichtbarkeit bei relevanten Suchanfragen.' },
    { icon: <Zap size={24} />, title: 'Blitzschnelle Ladezeiten', text: 'Optimierte Performance für beste Nutzererfahrung und bessere Rankings.' },
    { icon: <Smartphone size={24} />, title: 'Perfekt auf allen Geräten', text: 'Responsive Design, das auf Desktop, Tablet und Smartphone überzeugt.' },
    { icon: <Palette size={24} />, title: 'Modernes Design', text: 'Professionelle Optik, die Vertrauen schafft und Ihre Marke stärkt.' },
    { icon: <Shield size={24} />, title: 'Sicher & zuverlässig', text: 'SSL-Verschlüsselung, sichere Hosting-Infrastruktur und regelmäßige Updates.' },
    { icon: <BarChart3 size={24} />, title: 'Messbare Ergebnisse', text: 'Verständliche Berichte zeigen Ihnen genau, wie Ihre Website performt.' }
  ];

  const targetAudiences = [
    { icon: <Building2 size={28} />, title: 'Lokale Unternehmen', description: 'Sichtbarkeit in der Region steigern und lokale Kunden online erreichen.' },
    { icon: <Briefcase size={28} />, title: 'Dienstleister & Berater', description: 'Expertise präsentieren und qualifizierte Anfragen generieren.' },
    { icon: <Store size={28} />, title: 'Handwerk & Gewerbe', description: 'Online gefunden werden und Vertrauen bei potenziellen Kunden aufbauen.' },
    { icon: <Stethoscope size={28} />, title: 'Praxen & Kanzleien', description: 'Professioneller Auftritt mit Fokus auf lokale Patienten und Mandanten.' }
  ];

  const seoFeatures = [
    'Analyse der wichtigsten Suchbegriffe, die Ihre Kunden tatsächlich verwenden',
    'Strukturierung und Optimierung Ihrer Website für bessere Google-Platzierungen',
    'Optimierung von Texten, Seiteninhalten und Überschriften',
    'Verbesserung Ihrer lokalen Sichtbarkeit in Ihrer Region',
    'Professionelle Betreuung und Optimierung Ihres Google Business Profils',
    'Technische Optimierung für schnelle Ladezeiten und stabile Performance',
    'Anpassung für optimale Darstellung auf allen Endgeräten',
    'Kontinuierliche inhaltliche Weiterentwicklung Ihrer Website',
    'Aufbau einer nachhaltigen Online-Autorität durch externe Verlinkungen',
    'Regelmäßige Überwachung der Ergebnisse sowie verständliche Berichte über den Fortschritt'
  ];

  const websiteFeatures = [
    'Individuelles, markengerechtes Design',
    'Responsive für alle Bildschirmgrößen',
    'Schnelle Ladezeiten (unter 3 Sekunden)',
    'Intuitive Navigation und Benutzerführung',
    'SSL-Zertifikat und DSGVO-konform',
    'Integration von Social Media',
    'Erweiterbar durch Automatisierungen'
  ];

  const rentalBenefits = [
    { icon: <HeadphonesIcon size={24} />, title: 'Full-Service-Betreuung', text: 'Wir kümmern uns um alles – Sie müssen sich um nichts kümmern.' },
    { icon: <Clock size={24} />, title: 'Änderungen in 48 Stunden', text: 'Alle Ihre Änderungswünsche werden innerhalb von 48 Stunden umgesetzt.' },
    { icon: <Wrench size={24} />, title: 'Komplette technische Betreuung', text: 'Updates, Sicherheit, Hosting – alles inklusive und in unserer Verantwortung.' },
    { icon: <Shield size={24} />, title: 'Keine technischen Sorgen', text: 'Sie konzentrieren sich auf Ihr Geschäft, wir auf Ihre Website.' }
  ];

  return (
    <div className="bg-dark-500">
      <SEOHead
        title="Website-Entwicklung & SEO"
        description="Moderne Websites mit Suchmaschinenoptimierung. Professionelles Webdesign und SEO für mehr Sichtbarkeit bei Google und mehr Kundenanfragen."
        keywords={['Website erstellen', 'Webdesign', 'SEO Optimierung', 'Suchmaschinenoptimierung', 'Lokale SEO']}
      />
      <BreadcrumbSchema serviceName="Website-Entwicklung & SEO" serviceUrl="https://pixelkraftwerk-ai.com/website-seo" />

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
              <Globe size={40} className="text-primary-500" strokeWidth={1.5} />
            </motion.div>

            <motion.h1
              className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-light-100 mb-6"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              Websites & SEO
              <span className="block text-primary-500 mt-2">die Kunden bringen</span>
            </motion.h1>

            <motion.p
              className="text-xl text-light-200 mb-4 max-w-3xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Moderne, schnelle Websites mit Suchmaschinenoptimierung – damit potenzielle Kunden
              Sie finden und von Ihrem Angebot überzeugt werden.
            </motion.p>

            <motion.p
              className="text-light-300 mb-8 max-w-2xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              Beide Leistungen sind auch einzeln buchbar – je nach Ihren Bedürfnissen.
            </motion.p>

            <motion.button
              onClick={scrollToContact}
              className="inline-flex items-center px-8 py-4 bg-primary-500 text-dark-500 font-heading font-bold text-lg hover:bg-primary-400 transition-colors duration-300"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <ArrowRight className="mr-2" size={24} />
              Beratung anfordern
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
                Kennen Sie <span className="text-primary-500">diese Situation?</span>
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
              <strong>Eine professionelle Website mit SEO ist die Lösung.</strong>
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
                Unser <span className="text-primary-500">Website-Mietmodell</span>
              </h2>
              <p className="text-light-200 max-w-3xl mx-auto">
                Bei uns mieten Sie Ihre Website – mit Rundum-Betreuung und ohne technische Sorgen.
                Sie bekommen eine professionelle Online-Präsenz, wir kümmern uns um alles Weitere.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
              {rentalBenefits.map((benefit, index) => (
                <motion.div
                  key={index}
                  className="bg-dark-400 p-6 border border-dark-100"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className="flex items-start">
                    <div className="text-primary-500 mr-4 flex-shrink-0">{benefit.icon}</div>
                    <div>
                      <h3 className="text-lg font-heading font-bold text-light-100 mb-2">{benefit.title}</h3>
                      <p className="text-light-300 text-sm">{benefit.text}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            <motion.div
              className="bg-dark-400/50 border border-primary-500/30 p-6 text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <p className="text-light-100">
                <strong className="text-primary-400">Keine Übergabe, keine Eigenverantwortung:</strong>
                <br />
                <span className="text-light-200">
                  Ihre Website bleibt in unserer Betreuung. Sie müssen sich nie um technische Details kümmern –
                  wir halten alles aktuell, sicher und performant.
                </span>
              </p>
            </motion.div>
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
                Unsere <span className="text-primary-500">Leistungen</span>
              </h2>
              <p className="text-light-200 max-w-3xl mx-auto">
                Website-Entwicklung und SEO – beide Leistungen auch einzeln buchbar.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <motion.div
                className="bg-dark-500 p-8 border border-dark-100"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <div className="flex items-center mb-6">
                  <Globe size={32} className="text-primary-500 mr-4" />
                  <h3 className="text-xl font-heading font-bold text-light-100">Website-Entwicklung</h3>
                </div>
                <ul className="space-y-3">
                  {websiteFeatures.map((feature, index) => (
                    <li key={index} className="flex items-start">
                      <CheckCircle className="text-primary-500 mr-3 mt-0.5 flex-shrink-0" size={16} />
                      <span className="text-light-200 text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>

              <motion.div
                className="bg-dark-500 p-8 border border-dark-100"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                viewport={{ once: true }}
              >
                <div className="flex items-center mb-6">
                  <Search size={32} className="text-primary-500 mr-4" />
                  <h3 className="text-xl font-heading font-bold text-light-100">Suchmaschinenoptimierung (SEO)</h3>
                </div>
                <ul className="space-y-3">
                  {seoFeatures.map((feature, index) => (
                    <li key={index} className="flex items-start">
                      <CheckCircle className="text-primary-500 mr-3 mt-0.5 flex-shrink-0" size={16} />
                      <span className="text-light-200 text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-dark-500">
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
                Der Weg zu <span className="text-primary-500">Ihrer neuen Website</span>
              </h2>
            </motion.div>

            <div className="space-y-6">
              {processSteps.map((step, index) => (
                <motion.div
                  key={index}
                  className="flex items-start bg-dark-400 p-6 border border-dark-100 hover:border-primary-500/50 transition-colors duration-300"
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
                Ihre <span className="text-primary-500">Vorteile</span>
              </h2>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={index}
                  className="bg-dark-500 p-6 border border-dark-100 hover:border-primary-500/50 transition-all duration-300"
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
                Ideal für <span className="text-primary-500">diese Branchen</span>
              </h2>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {targetAudiences.map((audience, index) => (
                <motion.div
                  key={index}
                  className="flex items-start bg-dark-400 p-6 border border-dark-100"
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
        currentSlug="website-seo"
        relatedSlugs={['content-video', 'ki-chatbots', 'telefonassistenten']}
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
              Bereit für <span className="text-primary-500">mehr Online-Sichtbarkeit?</span>
            </motion.h2>
            <motion.p
              className="text-light-200 mb-8"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
            >
              Lassen Sie uns besprechen, wie eine neue Website Ihr Unternehmen nach vorne bringt.
            </motion.p>
          </div>
        </div>
      </section>

      <ContactForm />

      <GoogleMapsSection />
    </div>
  );
};

export default WebsiteSeo;
