import React, { useState } from 'react';
import { CheckSquare, Square } from 'lucide-react';
import { BusinessType, AutomationInterest, ContactFormData } from '../types';

const businessTypes: BusinessType[] = [
  'E-Commerce',
  'Gastronomie',
  'SaaS',
  'Gesundheitswesen',
  'Finanzen',
  'Produktion',
  'Einzelhandel',
  'Sonstiges'
];

const automationInterests: AutomationInterest[] = [
  'KI-Chatbot',
  'CRM-Integration',
  'Social Media',
  'Terminplanung',
  'Telefon-Agenten',
  'Website-Entwicklung',
  'Individuelle Lösung'
];

const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState<ContactFormData>({
    name: '',
    email: '',
    phone: '',
    businessType: 'E-Commerce',
    automationInterests: [],
  });
  
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [submitSuccess, setSubmitSuccess] = useState<boolean | null>(null);
  const [errorMessage, setErrorMessage] = useState<string>('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleCheckboxChange = (interest: AutomationInterest) => {
    setFormData((prev) => {
      const isSelected = prev.automationInterests.includes(interest);
      
      if (isSelected) {
        return {
          ...prev,
          automationInterests: prev.automationInterests.filter(item => item !== interest)
        };
      } else {
        return {
          ...prev,
          automationInterests: [...prev.automationInterests, interest]
        };
      }
    });
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
        businessType: 'E-Commerce',
        automationInterests: [],
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
            Bereit, Ihr Unternehmen mit KI zu transformieren? Lassen Sie uns besprechen, wie wir helfen können.
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
                  <label htmlFor="name" className="block text-light-100 font-heading mb-2">Name</label>
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
                  <label htmlFor="email" className="block text-light-100 font-heading mb-2">E-Mail</label>
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
                  <label htmlFor="phone" className="block text-light-100 font-heading mb-2">Telefon</label>
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
                  <label htmlFor="businessType" className="block text-light-100 font-heading mb-2">Unternehmenstyp</label>
                  <select
                    id="businessType"
                    name="businessType"
                    value={formData.businessType}
                    onChange={handleChange}
                    className="w-full bg-dark-300 border border-dark-100 text-light-100 p-3 focus:border-primary-500 focus:outline-none transition-colors duration-200"
                  >
                    {businessTypes.map((type) => (
                      <option key={type} value={type}>{type}</option>
                    ))}
                  </select>
                </div>
              </div>
              
              <div>
                <p className="block text-light-100 font-heading mb-3">Automatisierungsinteresse</p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {automationInterests.map((interest) => (
                    <div key={interest} className="flex items-center">
                      <button
                        type="button"
                        onClick={() => handleCheckboxChange(interest)}
                        className="text-primary-500 hover:text-primary-400 transition-colors duration-200 mr-2 focus:outline-none"
                      >
                        {formData.automationInterests.includes(interest) ? (
                          <CheckSquare size={20} />
                        ) : (
                          <Square size={20} />
                        )}
                      </button>
                      <label className="text-light-100">{interest}</label>
                    </div>
                  ))}
                </div>
              </div>
              
              <div>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`w-full py-3 px-6 bg-primary-500 text-dark-500 font-heading font-bold transition-colors duration-300 ${
                    isSubmitting ? 'opacity-70 cursor-not-allowed' : 'hover:bg-primary-400'
                  }`}
                >
                  {isSubmitting ? 'Wird gesendet...' : 'Absenden'}
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