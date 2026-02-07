import React from 'react';
import { Quote } from 'lucide-react';

interface Testimonial {
  content: string;
  author: string;
  company: string;
}

const testimonials: Testimonial[] = [
  {
    content: "Die digitale Kundenassistenz von Pixel Kraftwerk hat unseren Kundenservice enorm verbessert. Sie beantwortet rund um die Uhr Anfragen, entlastet unser Team und sorgt für eine schnellere Bearbeitung. Unsere Kunden sind zufriedener, und wir sparen wertvolle Arbeitszeit!",
    author: "Andrej P.",
    company: "Restaurant Lindenhof am See"
  },
  {
    content: "Die KI-Lösungen von Pixel Kraftwerk haben unseren Immobilienvertrieb auf ein neues Level gehoben. Die digitale und telefonische Kundenassistenz beantworten Anfragen sofort, sparen uns täglich Stunden und verbessern die Kundenzufriedenheit erheblich. Wir sind rundum zufrieden, die Zusammenarbeit läuft hervorragend, alles klappt einwandfrei und spart viel Zeit. Jederzeit gerne wieder!",
    author: "Michael L.",
    company: "ProHaus Immobilien GmbH"
  },
  {
    content: "Unser Unternehmen lebt von effizienter Kommunikation, genau hier hat uns Pixel Kraftwerk enorm geholfen. Der KI-Assistent übernimmt die Terminplanung für unsere Kunden, beantwortet Standardanfragen und sorgt für eine reibungslose Organisation. Wir können uns endlich auf das Wesentliche konzentrieren und haben die Kundenbindung deutlich verbessert!",
    author: "Konstanze R.",
    company: "Dienstleistungsservice Reinhardt GmbH"
  }
];

const TestimonialsSection: React.FC = () => {
  return (
    <section id="testimonials" className="py-24 bg-dark-500">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-heading font-bold mb-12 text-primary-500 text-center">
            Was unsere Kunden sagen_
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div 
                key={index}
                className="bg-dark-400 border border-dark-100 p-6 relative"
              >
                <div className="absolute -top-4 -left-4 bg-primary-500 text-dark-500 w-8 h-8 flex items-center justify-center">
                  <Quote size={18} />
                </div>
                <p className="text-light-200 mb-6 italic">
                  {testimonial.content}
                </p>
                <div className="border-t border-dark-100 pt-4">
                  <p className="text-primary-500 font-heading font-bold">
                    {testimonial.author}
                  </p>
                  <p className="text-light-300 text-sm">
                    {testimonial.company}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;