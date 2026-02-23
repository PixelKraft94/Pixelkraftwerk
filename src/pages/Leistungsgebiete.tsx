'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, ArrowRight, MessageCircle, Phone, Calendar, Target, Globe, Video } from 'lucide-react';
import { businessInfo } from '../data/businessInfo';
import LocalBusinessSchema from '../components/LocalBusinessSchema';
import GoogleMapsSection from '../components/GoogleMapsSection';

const regions = [
  {
    slug: 'leipzig',
    name: 'Leipzig',
    subtitle: 'Metropolregion',
    description: 'KI-Automatisierung, Chatbots, Telefonassistenten, Terminbuchung, CRM, Websites & SEO für Unternehmen in Leipzig und Umgebung.',
    path: '/leistungsgebiete/leipzig',
  },
  {
    slug: 'groitzsch',
    name: 'Groitzsch',
    subtitle: 'Hauptsitz',
    description: 'Von unserem Standort in Groitzsch aus entwickeln wir KI-Lösungen für die Region – mit kurzen Wegen und persönlicher Betreuung.',
    path: '/leistungsgebiete/groitzsch',
  },
  {
    slug: 'sachsen',
    name: 'Sachsen',
    subtitle: 'Regional',
    description: 'Wir betreuen Unternehmen in ganz Sachsen – von Dresden über Chemnitz bis Leipzig – mit digitaler Kundenassistenz, Terminbuchung und SEO.',
    path: '/leistungsgebiete/sachsen',
  },
];

const Leistungsgebiete: React.FC = () => {
  return (
    <div className="bg-dark-500">
      <LocalBusinessSchema pageType="homepage" customDescription="KI-Automatisierung und Chatbots für Unternehmen in Leipzig, Groitzsch und Sachsen." />

      <section className="relative pt-32 pb-24 bg-dark-500 overflow-hidden">
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <motion.h1
              className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-light-100 mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              Unsere <span className="text-primary-500">Leistungsgebiete</span>
            </motion.h1>
            <motion.p
              className="text-xl text-light-200 mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              Wir bedienen <strong>Groitzsch</strong>, <strong>Leipzig</strong>, <strong>Sachsen</strong> und darüber hinaus – mit KI-Automatisierung, Chatbots, Terminbuchung, CRM, Websites & SEO.
            </motion.p>
            <motion.p
              className="text-light-300 max-w-2xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <MapPin className="inline-block w-4 h-4 mr-1 text-primary-500 -mt-0.5" />
              {businessInfo.address.streetAddress}, {businessInfo.address.postalCode} {businessInfo.address.addressLocality} ·{' '}
              <a href={`tel:${businessInfo.contact.telephone}`} className="text-primary-400 hover:underline">{businessInfo.contact.telephone}</a>
            </motion.p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-dark-400">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-heading font-bold text-light-100 mb-12 text-center">
              Regionen, die wir bedienen
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {regions.map((region, index) => (
                <motion.a
                  key={region.slug}
                  href={region.path}
                  className="block bg-dark-500 p-8 border border-dark-100 hover:border-primary-500/50 transition-all duration-300 group"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ y: -4 }}
                >
                  <h3 className="text-xl font-heading font-bold text-light-100 mb-2 group-hover:text-primary-400 transition-colors">
                    {region.name}
                  </h3>
                  <p className="text-primary-500 text-sm font-bold mb-3">{region.subtitle}</p>
                  <p className="text-light-200 text-sm mb-4">{region.description}</p>
                  <span className="inline-flex items-center text-primary-500 font-heading font-bold text-sm group-hover:text-primary-400">
                    Mehr zu {region.name}
                    <ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform" />
                  </span>
                </motion.a>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-dark-500">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-2xl md:text-3xl font-heading font-bold text-light-100 mb-8">
              Leistungen in allen Gebieten
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 text-left">
              {[
                { icon: <MessageCircle size={20} />, label: 'KI-Chatbots & digitale Kundenassistenz', path: '/ki-chatbots' },
                { icon: <Phone size={20} />, label: 'Telefonassistenten & Anrufannahme', path: '/telefonassistenten' },
                { icon: <Calendar size={20} />, label: 'Terminbuchung & Buchungssysteme', path: '/termine-buchungen' },
                { icon: <Target size={20} />, label: 'Lead-Management & CRM', path: '/crm-lead-management' },
                { icon: <Globe size={20} />, label: 'Websites & SEO', path: '/website-seo' },
                { icon: <Video size={20} />, label: 'Content & KI-Videos', path: '/content-video' },
              ].map((item, i) => (
                <a
                  key={i}
                  href={item.path}
                  className="flex items-center gap-3 p-4 bg-dark-400 border border-dark-100 hover:border-primary-500/50 transition-colors text-light-100 font-heading"
                >
                  <span className="text-primary-500 flex-shrink-0">{item.icon}</span>
                  <span className="text-sm">{item.label}</span>
                </a>
              ))}
            </div>
            <p className="mt-10 text-light-300">
              <a href="/services" className="text-primary-400 hover:underline font-heading font-bold">Alle Leistungen ansehen</a>
              {' · '}
              <a href="/contact" className="text-primary-400 hover:underline font-heading font-bold">Kontakt</a>
            </p>
          </div>
        </div>
      </section>

      <GoogleMapsSection />
    </div>
  );
};

export default Leistungsgebiete;
