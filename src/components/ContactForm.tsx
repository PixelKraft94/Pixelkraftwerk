import React, { useState } from 'react';
import { BusinessType, HowFoundUs, ContactFormData } from '../types';

const businessTypes: BusinessType[] = [
  'E-Commerce',
  'SaaS / IT',
  'Gastronomie',
  'Gesundheitswesen',
  'Produktion',
  'Finanzen',
  'Einzelhandel',
  'Beratung / Agentur',
  'Sonstiges'
];

const howFoundUsOptions: HowFoundUs[] = [
  'Empfehlung',
  'Google',
  'LinkedIn',
  'Instagram',
  'Facebook',
  'Sonstiges'
];

const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState<ContactFormData>({
    name: '',
    email: '',
    phone: '',
    company: '',
    website: '',
    howFoundUs: 'Google',
    timeConsumingTasks: '',
    tasksToAutomate: '',
    industry: 'E-Commerce',
  });
  
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [submitSuccess, setSubmitSuccess] = useState<boolean | null>(null);
  const [errorMessage, setErrorMessage] = useState<string>('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setErrorMessage('');
    
    try {
      // Send form data to webhook
      const response = await fetch('https://hook.eu2.make.com/ur8wvevt3a3f4rdtv73hdg4n6h3jl8oc', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...formData,
          source: 'website-contact-form',
          timestamp: new Date().toISOString(),
        }),
      });

      if (!response.ok) {
        throw new Error(`Fehler bei der Übermittlung: ${response.statusText}`);
      }

      // Handle success
      setSubmitSuccess(true);
      
      // Reset form after successful submission
      setFormData({
        name: '',
        email: '',
        phone: '',
        company: '',
        website: '',
        howFoundUs: 'Google',
        timeConsumingTasks: '',
        tasksToAutomate: '',
        industry: 'E-Commerce',
      });
    } catch (error) {
      console.error('Error submitting form:', error);
      setSubmitSuccess(false);
      setErrorMessage(error instanceof Error ? error.message : 'Ein unerwarteter Fehler ist aufgetreten');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-24 bg-dark-500">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4 text-primary-500">
            Jetzt starten_
          </h2>
          <p className="text-light-200 mb-8">
            <strong>Lassen Sie uns gemeinsam besprechen, wie wir Ihr Unternehmen gezielt entlasten können.</strong><br />
            Einfach kurz ausfüllen – wir melden uns zeitnah mit konkreten Vorschlägen.
          </p>

          {submitSuccess === true ? (
            <div className="p-6 border border-primary-500 bg-primary-500/10 animate-fade-in">
              <h3 className="text-xl font-heading font-bold text-primary-400 mb-2">Vielen Dank!</h3>
              <p className="text-light-100">
                Ihre Anfrage wurde erfolgreich übermittelt. Wir werden uns in Kürze mit Ihnen in Verbindung setzen.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6 animate-fade-in">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-light-100 font-heading mb-2">
                    Name <span className="text-red-500">*</span>
                  </label>
                  <p className="text-light-300 text-sm mb-2">Vor- und Nachname</p>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full bg-dark-300 border border-dark-100 text-light-100 p-3 focus:border-primary-500 focus:outline-none transition-colors duration-200"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-light-100 font-heading mb-2">
                    E-Mail <span className="text-red-500">*</span>
                  </label>
                  <p className="text-light-300 text-sm mb-2">Für die Kontaktaufnahme</p>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full bg-dark-300 border border-dark-100 text-light-100 p-3 focus:border-primary-500 focus:outline-none transition-colors duration-200"
                  />
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="phone" className="block text-light-100 font-heading mb-2">
                    Telefonnummer (optional)
                  </label>
                  <p className="text-light-300 text-sm mb-2">Wenn wir Sie telefonisch erreichen dürfen</p>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full bg-dark-300 border border-dark-100 text-light-100 p-3 focus:border-primary-500 focus:outline-none transition-colors duration-200"
                  />
                </div>
                <div>
                  <label htmlFor="company" className="block text-light-100 font-heading mb-2">
                    Unternehmen <span className="text-red-500">*</span>
                  </label>
                  <p className="text-light-300 text-sm mb-2">Name Ihres Unternehmens</p>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    required
                    className="w-full bg-dark-300 border border-dark-100 text-light-100 p-3 focus:border-primary-500 focus:outline-none transition-colors duration-200"
                  />
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="website" className="block text-light-100 font-heading mb-2">
                    Website
                  </label>
                  <p className="text-light-300 text-sm mb-2">Falls vorhanden</p>
                  <input
                    type="text"
                    id="website"
                    name="website"
                    value={formData.website}
                    onChange={handleChange}
                    placeholder="beispiel.de"
                    className="w-full bg-dark-300 border border-dark-100 text-light-100 p-3 focus:border-primary-500 focus:outline-none transition-colors duration-200"
                  />
                </div>
                <div>
                  <label htmlFor="howFoundUs" className="block text-light-100 font-heading mb-2">
                    Wie haben Sie uns gefunden? <span className="text-red-500">*</span>
                  </label>
                  <p className="text-light-300 text-sm mb-2">Empfehlung, Google, LinkedIn, Instagram, Facebook, Sonstiges</p>
                  <select
                    id="howFoundUs"
                    name="howFoundUs"
                    value={formData.howFoundUs}
                    onChange={handleChange}
                    required
                    className="w-full bg-dark-300 border border-dark-100 text-light-100 p-3 focus:border-primary-500 focus:outline-none transition-colors duration-200"
                  >
                    {howFoundUsOptions.map((option) => (
                      <option key={option} value={option}>{option}</option>
                    ))}
                  </select>
                </div>
              </div>
              
              <hr className="border-dark-100" />
              
              <div>
                <label htmlFor="timeConsumingTasks" className="block text-light-100 font-heading mb-2">
                  Was raubt Ihrem Unternehmen aktuell am meisten Zeit im Arbeitsalltag? <span className="text-red-500">*</span>
                </label>
                <textarea
                  id="timeConsumingTasks"
                  name="timeConsumingTasks"
                  value={formData.timeConsumingTasks}
                  onChange={handleChange}
                  required
                  maxLength={300}
                  rows={3}
                  className="w-full bg-dark-300 border border-dark-100 text-light-100 p-3 focus:border-primary-500 focus:outline-none transition-colors duration-200 resize-vertical"
                  placeholder="Beschreiben Sie, welche Aufgaben oder Prozesse besonders zeitaufwändig sind..."
                />
                <p className="text-light-300 text-xs mt-1">
                  {formData.timeConsumingTasks.length}/300 Zeichen
                </p>
              </div>
              
              <div>
                <label htmlFor="tasksToAutomate" className="block text-light-100 font-heading mb-2">
                  Welche Aufgaben möchten Sie am liebsten automatisieren? <span className="text-red-500">*</span>
                </label>
                <textarea
                  id="tasksToAutomate"
                  name="tasksToAutomate"
                  value={formData.tasksToAutomate}
                  onChange={handleChange}
                  required
                  maxLength={300}
                  rows={3}
                  className="w-full bg-dark-300 border border-dark-100 text-light-100 p-3 focus:border-primary-500 focus:outline-none transition-colors duration-200 resize-vertical"
                  placeholder="Nennen Sie konkrete Aufgaben oder Bereiche, die Sie gerne automatisieren möchten..."
                />
                <p className="text-light-300 text-xs mt-1">
                  {formData.tasksToAutomate.length}/300 Zeichen
                </p>
              </div>
              
              <hr className="border-dark-100" />
              
              <div>
                <label htmlFor="industry" className="block text-light-100 font-heading mb-2">
                  Branche / Unternehmenstyp <span className="text-red-500">*</span>
                </label>
                <select
                  id="industry"
                  name="industry"
                  value={formData.industry}
                  onChange={handleChange}
                  required
                  className="w-full bg-dark-300 border border-dark-100 text-light-100 p-3 focus:border-primary-500 focus:outline-none transition-colors duration-200"
                >
                  {businessTypes.map((type) => (
                    <option key={type} value={type}>{type}</option>
                  ))}
                </select>
              </div>
              
              <hr className="border-dark-100" />
              
              <div>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`w-full py-4 px-6 bg-primary-500 text-dark-500 font-heading font-bold text-lg transition-colors duration-300 ${
                    isSubmitting ? 'opacity-70 cursor-not-allowed' : 'hover:bg-primary-400'
                  }`}
                >
                  {isSubmitting ? 'Wird gesendet...' : 'Lösungsmöglichkeiten anfordern'}
                </button>
              </div>
              
              {submitSuccess === false && (
                <div className="p-4 bg-red-500/20 border border-red-500 text-red-300">
                  {errorMessage || 'Ein Fehler ist aufgetreten. Bitte versuchen Sie es später erneut.'}
                </div>
              )}
            </form>
          )}
        </div>
      </div>
    </section>
  );
};

export default ContactForm;