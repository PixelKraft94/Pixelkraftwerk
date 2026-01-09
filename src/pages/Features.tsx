import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, MessageCircle, Calendar, Target, Globe, Workflow, Video, CheckCircle, TrendingUp, Users, Clock, DollarSign, Award } from 'lucide-react';
import ContactForm from '../components/ContactForm';
import SEOHead from '../components/SEOHead';
import LocalBusinessSchema from '../components/LocalBusinessSchema';

const Features: React.FC = () => {
  const scrollToContactForm = () => {
    const contactForm = document.getElementById('contact');
    if (contactForm) {
      contactForm.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const coreServices = [
    {
      icon: <MessageCircle size={28} strokeWidth={1.5} />,
      title: "KI-Chatbots & Telefonassistenten"
    },
    {
      icon: <Calendar size={28} strokeWidth={1.5} />,
      title: "Terminplanung & Buchungssysteme"
    },
    {
      icon: <Target size={28} strokeWidth={1.5} />,
      title: "Lead-Management & CRM-Automatisierung"
    },
    {
      icon: <Globe size={28} strokeWidth={1.5} />,
      title: "Websites mit integrierter Automatisierung & SEO"
    },
    {
      icon: <Workflow size={28} strokeWidth={1.5} />,
      title: "Workflow-Automatisierung & Systemvernetzung"
    },
    {
      icon: <Video size={28} strokeWidth={1.5} />,
      title: "Content-Produktion & KI-Videos"
    }
  ];

  const detailedServices = [
    {
      icon: <MessageCircle size={40} strokeWidth={1.5} />,
      title: "KI-Chatbots & Telefonassistenten",
      description: "Wir entwickeln digitale Assistenten, die Kundenanfragen automatisch per Website-Chat oder Telefon bearbeiten und dabei Ihr Team dauerhaft entlasten. Die Systeme lernen aus Ihren Inhalten, reagieren zuverlässig und führen Gespräche strukturiert und freundlich.",
      benefits: [
        "Deutlich weniger Unterbrechungen im Tagesgeschäft",
        "Sofortige Antworten für Ihre Kunden – auch außerhalb der Geschäftszeiten",
        "Höhere Servicequalität bei gleichbleibender Arbeitsbelastung"
      ]
    },
    {
      icon: <Calendar size={40} strokeWidth={1.5} />,
      title: "Terminplanung & Buchungssysteme",
      description: "Wir erstellen intelligente Buchungssysteme, die Verfügbarkeiten automatisch verwalten, Termine koordinieren und Kunden selbstständig bestätigen sowie erinnern. Ihr Kalender organisiert sich dadurch weitgehend selbst.",
      benefits: [
        "Keine Doppelbuchungen oder Terminlücken",
        "Deutlich weniger Verwaltungsaufwand",
        "Spürbar höhere Termintreue Ihrer Kunden"
      ]
    },
    {
      icon: <Target size={40} strokeWidth={1.5} />,
      title: "Lead-Management & CRM-Automatisierung",
      description: "Alle eingehenden Anfragen werden automatisch erfasst, strukturiert, bewertet und an die zuständigen Ansprechpartner weitergeleitet. Kein Kontakt geht verloren, kein Interessent bleibt unbeachtet.",
      benefits: [
        "Klare Übersicht über alle Kontakte",
        "Schnellere Reaktionszeiten im Vertrieb",
        "Höhere Abschlussquote durch bessere Struktur"
      ]
    },
    {
      icon: <Globe size={40} strokeWidth={1.5} />,
      title: "Website-Entwicklung & SEO",
      description: "Wir entwickeln moderne, schnelle Websites, die Ihr Unternehmen professionell präsentieren, Vertrauen aufbauen und neue Kunden gewinnen. Auf Wunsch können diese Websites gezielt mit Automatisierung, Terminbuchung und digitaler Kundenkommunikation erweitert werden.",
      benefits: [
        "Starke Außenwirkung und klare Positionierung",
        "Mehr Sichtbarkeit bei Google durch strukturierte Suchmaschinenoptimierung",
        "Flexible Erweiterbarkeit durch spätere Automatisierung"
      ]
    },
    {
      icon: <Workflow size={40} strokeWidth={1.5} />,
      title: "Workflow-Automatisierung & Systemvernetzung",
      description: "Wir verbinden Ihre bestehenden Systeme zu einem durchgängigen Prozess. Informationen werden automatisch weitergegeben, Aufgaben sauber verteilt und Abläufe klar strukturiert. So entstehen stabile, fehlerarme Prozesse.",
      benefits: [
        "Keine doppelte Dateneingabe",
        "Weniger Fehler und Rückfragen",
        "Volle Transparenz über alle Abläufe"
      ]
    },
    {
      icon: <Video size={40} strokeWidth={1.5} />,
      title: "Content-Produktion & KI-Videos",
      description: "Wir erstellen professionelle Texte, Bilder und Videos mit moderner KI-Technologie – individuell auf Ihre Marke abgestimmt und in kürzester Zeit verfügbar. So bleibt Ihr Unternehmen sichtbar und präsent.",
      benefits: [
        "Stärkere Markenwirkung",
        "Höhere Reichweite auf allen Kanälen",
        "Deutlich geringere Produktionskosten"
      ]
    }
  ];

  const companyBenefits = [
    {
      icon: <Clock size={24} />,
      title: "Spürbar weniger Verwaltungsaufwand"
    },
    {
      icon: <TrendingUp size={24} />,
      title: "Effizientere Abläufe"
    },
    {
      icon: <Users size={24} />,
      title: "Entlastung Ihres Teams"
    },
    {
      icon: <Award size={24} />,
      title: "Höhere Kundenzufriedenheit"
    },
    {
      icon: <DollarSign size={24} />,
      title: "Mehr Umsatzpotenzial durch bessere Prozesse"
    }
  ];

  return (
    <div className="bg-dark-500">
      <SEOHead
        title="Unsere Leistungen - Digitale Automatisierung für Ihr Unternehmen"
        description="Von KI-Chatbots über Terminbuchung bis hin zu CRM-Automatisierung - Entdecken Sie unsere Leistungen für intelligente Geschäftsprozesse."
        keywords={['KI Automatisierung', 'Chatbot erstellen', 'CRM Automatisierung', 'Website Entwicklung', 'Workflow Automatisierung']}
      />
      <LocalBusinessSchema pageType="services" />

      {/* HERO SECTION */}
      <section className="pt-32 pb-20 bg-dark-500">
        <div className="container mx-auto px-6 md:px-12">
          <div className="max-w-4xl mx-auto">
            <motion.div
              className="text-center"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold mb-6 text-light-100">
                Unsere Leistungen – <span className="text-primary-500">Digitale Lösungen</span>, die Ihr Unternehmen entlasten
              </h1>

              <p className="text-xl text-light-200 mb-8 max-w-3xl mx-auto">
                Wir entwickeln intelligente Systeme, die Arbeitsabläufe vereinfachen, Kundenkommunikation automatisieren und messbar Zeit und Kosten sparen.
              </p>

              <p className="text-lg text-light-200 leading-relaxed">
                Unsere Lösungen helfen Unternehmen dabei, wiederkehrende Aufgaben zu automatisieren, Abläufe zu strukturieren und Kunden professionell zu betreuen – ohne komplizierte Technik und ohne Fachchinesisch.
                <br />
                <span className="text-light-100 font-bold mt-2 inline-block">
                  Sie sagen uns, wo es hakt – wir bauen das System, das es löst.
                </span>
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CORE SERVICES OVERVIEW */}
      <section className="py-20 bg-dark-400">
        <div className="container mx-auto px-6 md:px-12">
          <div className="max-w-5xl mx-auto">
            <motion.div
              className="text-center mb-16"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-heading font-bold mb-6 text-light-100">
                Was wir für Ihr Unternehmen <span className="text-primary-500">umsetzen</span>
              </h2>
              <p className="text-lg text-light-200 max-w-3xl mx-auto">
                Wir kombinieren moderne Websites, intelligente Automatisierung und digitale Assistenzsysteme zu einer ganzheitlichen Lösung, die Ihr Unternehmen im Alltag spürbar entlastet und Ihre Prozesse zuverlässig unterstützt.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {coreServices.map((service, index) => (
                <motion.div
                  key={index}
                  className="bg-dark-500 p-6 border border-dark-100 hover:border-primary-500/50 transition-all duration-300"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -4 }}
                >
                  <div className="text-primary-500 mb-4">
                    {service.icon}
                  </div>
                  <h3 className="text-lg font-heading font-bold text-light-100">
                    {service.title}
                  </h3>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* DETAILED SERVICES */}
      <section className="py-20 bg-dark-500">
        <div className="container mx-auto px-6 md:px-12">
          <div className="max-w-5xl mx-auto">
            <motion.h2
              className="text-3xl md:text-4xl font-heading font-bold mb-16 text-light-100 text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              Unsere Leistungen <span className="text-primary-500">im Detail</span>
            </motion.h2>

            <div className="space-y-16">
              {detailedServices.map((service, index) => (
                <motion.div
                  key={index}
                  className="bg-dark-400 p-8 md:p-10 border border-dark-100"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className="flex items-start mb-6">
                    <div className="text-primary-500 mr-4 flex-shrink-0">
                      {service.icon}
                    </div>
                    <h3 className="text-2xl font-heading font-bold text-light-100">
                      {service.title}
                    </h3>
                  </div>

                  <p className="text-light-200 text-lg leading-relaxed mb-6">
                    {service.description}
                  </p>

                  <div className="space-y-3">
                    <p className="text-light-100 font-bold text-base mb-3">Nutzen für Sie:</p>
                    {service.benefits.map((benefit, benefitIndex) => (
                      <div key={benefitIndex} className="flex items-start">
                        <CheckCircle className="text-primary-500 mr-3 mt-0.5 flex-shrink-0" size={20} />
                        <p className="text-light-200">{benefit}</p>
                      </div>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* COMPANY BENEFITS */}
      <section className="py-20 bg-dark-400">
        <div className="container mx-auto px-6 md:px-12">
          <div className="max-w-4xl mx-auto">
            <motion.h2
              className="text-3xl md:text-4xl font-heading font-bold mb-12 text-light-100 text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              Was Ihr Unternehmen dadurch <span className="text-primary-500">gewinnt</span>
            </motion.h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {companyBenefits.map((benefit, index) => (
                <motion.div
                  key={index}
                  className="flex items-center bg-dark-500 p-6 border border-dark-100 hover:border-primary-500/50 transition-all duration-300"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ x: 8 }}
                >
                  <div className="text-primary-500 mr-4 flex-shrink-0">
                    {benefit.icon}
                  </div>
                  <p className="text-light-100 font-heading font-bold text-lg">
                    {benefit.title}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="py-20 bg-dark-500">
        <div className="container mx-auto px-6 md:px-12">
          <div className="max-w-3xl mx-auto text-center">
            <motion.h2
              className="text-3xl md:text-4xl font-heading font-bold mb-6 text-light-100"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              Lassen Sie uns Ihre Abläufe <span className="text-primary-500">vereinfachen</span>
            </motion.h2>

            <motion.p
              className="text-lg text-light-200 mb-10"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              In einer kurzen Beratung zeigen wir Ihnen, wie Ihre Prozesse automatisiert und Ihr Unternehmen messbar entlastet werden können.
            </motion.p>

            <motion.button
              onClick={scrollToContactForm}
              className="inline-flex items-center px-10 py-4 bg-primary-500 text-dark-500 font-heading font-bold text-lg hover:bg-primary-400 transition-all duration-300"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05 }}
            >
              <ArrowRight className="mr-2" size={24} />
              Kostenlose Erstberatung
            </motion.button>
          </div>
        </div>
      </section>

      {/* CONTACT FORM */}
      <ContactForm />
    </div>
  );
};

export default Features;
