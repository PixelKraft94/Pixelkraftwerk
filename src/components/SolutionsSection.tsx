import React, { useState } from 'react';
import { MessageCircle, Phone, Calendar, Globe, ChevronDown } from 'lucide-react';

interface Solution {
  id: number;
  icon: React.ReactNode;
  title: string;
  items: string[];
}

const SolutionsSection: React.FC = () => {
  const [openSolution, setOpenSolution] = useState<number | null>(null);

  const solutions: Solution[] = [
    {
      id: 1,
      icon: <MessageCircle size={24} />,
      title: '1. KI-Chatbots – Rund-um-die-Uhr-Service ohne Personalkosten',
      items: [
        'Automatische Beantwortung von häufigen Fragen',
        'Direkte Terminbuchung über Website oder Messenger',
        'Integration in Ihre bestehende Website oder Social-Media Seiten',
        'Ideal, wenn Ihr Kundensupport überläuft oder Leads verloren gehen'
      ]
    },
    {
      id: 2,
      icon: <Phone size={24} />,
      title: '2. KI-Telefonagenten – Nie wieder verpasste Anrufe',
      items: [
        'Gehen automatisch ans Telefon – 24/7, auch nachts',
        'Erkennen Anfragen, buchen Termine, beantworten Wiederholer-Fragen',
        'Voll integriert mit Ihrem CRM – jeder Anruf sauber dokumentiert',
        'Perfekt, wenn Sie keine Empfangskraft haben oder keine wollen'
      ]
    },
    {
      id: 3,
      icon: <Calendar size={24} />,
      title: '3. Automatisiertes Kundenmanagement – Mehr Überblick, weniger Aufwand',
      items: [
        'Kundendaten landen automatisch im System',
        'Erinnerungen, Follow-ups & Terminverwaltung laufen ohne Ihr Zutun',
        'Weniger manuelle Fehler, mehr Zeit für das Wesentliche',
        'Ideal, wenn Sie Systeme besser verknüpfen und Routineaufgaben abgeben wollen'
      ]
    },
    {
      id: 4,
      icon: <Globe size={24} />,
      title: '4. Moderne Websites – in Tagen statt Wochen',
      items: [
        'Mobile-optimiertes, responsives Design',
        'Performance-stark, sicher und wartungsarm',
        'Faire Pakete für Startups & KMU',
        'Wenn Sie eine Website wollen, die nicht nur „schön", sondern verkaufsstark ist'
      ]
    }
  ];

  const toggleSolution = (id: number) => {
    setOpenSolution(openSolution === id ? null : id);
  };

  return (
    <section id="solutions" className="py-24 bg-dark-500">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4 text-primary-500 text-center">
            Unsere Lösungen – frei wählbar, einzeln buchbar
          </h2>
          <p className="text-light-200 mb-12 text-center">
            Ob Komplettpaket oder Einzellösung – Sie entscheiden, was Sie brauchen.
            Jede unserer Leistungen kann separat gebucht und an Ihre Systeme angepasst werden.<br />
            Sie haben ein konkretes Problem? Wir lösen genau das. Punkt.
          </p>

          {/* Mobile Dropdown Version */}
          <div className="md:hidden space-y-4 mb-16">
            {solutions.map((solution) => (
              <div key={solution.id} className="bg-dark-400 border border-dark-100">
                <button
                  onClick={() => toggleSolution(solution.id)}
                  className="w-full p-6 flex items-center justify-between text-left"
                >
                  <div className="flex items-center flex-1">
                    <div className="w-10 h-10 bg-primary-500/20 text-primary-500 rounded-full flex items-center justify-center mr-3 flex-shrink-0">
                      {solution.icon}
                    </div>
                    <h3 className="text-lg font-heading font-bold text-primary-500">
                      {solution.title}
                    </h3>
                  </div>
                  <ChevronDown
                    size={24}
                    className={`text-primary-500 flex-shrink-0 ml-2 transition-transform duration-300 ${openSolution === solution.id ? 'rotate-180' : ''}`}
                  />
                </button>

                <div
                  className={`overflow-hidden transition-all duration-300 ${openSolution === solution.id ? 'max-h-96' : 'max-h-0'}`}
                >
                  <div className="px-6 pb-6 space-y-3">
                    {solution.items.map((item, index) => (
                      <div key={index} className="flex items-start">
                        <span className="text-primary-500 mr-3">•</span>
                        <p className="text-light-200">{item}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Desktop Full View */}
          <div className="hidden md:block">
            {/* Solution 1 */}
            <div className="mb-16 bg-dark-400 border border-dark-100 p-8">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-primary-500/20 text-primary-500 rounded-full flex items-center justify-center mr-4">
                  <MessageCircle size={24} />
                </div>
                <h3 className="text-2xl font-heading font-bold text-primary-500">
                  1. KI-Chatbots – Rund-um-die-Uhr-Service ohne Personalkosten
                </h3>
              </div>

              <div className="ml-16 space-y-4">
                <div className="flex items-start">
                  <span className="text-primary-500 mr-3">•</span>
                  <p className="text-light-200">Automatische Beantwortung von häufigen Fragen</p>
                </div>
                <div className="flex items-start">
                  <span className="text-primary-500 mr-3">•</span>
                  <p className="text-light-200">Direkte Terminbuchung über Website oder Messenger</p>
                </div>
                <div className="flex items-start">
                  <span className="text-primary-500 mr-3">•</span>
                  <p className="text-light-200">Integration in Ihre bestehende Website oder Social-Media Seiten</p>
                </div>
                <div className="flex items-start">
                  <span className="text-primary-500 mr-3">•</span>
                  <p className="text-light-200">Ideal, wenn Ihr Kundensupport überläuft oder Leads verloren gehen</p>
                </div>
              </div>
            </div>

            {/* Solution 2 */}
            <div className="mb-16 bg-dark-400 border border-dark-100 p-8">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-primary-500/20 text-primary-500 rounded-full flex items-center justify-center mr-4">
                  <Phone size={24} />
                </div>
                <h3 className="text-2xl font-heading font-bold text-primary-500">
                  2. KI-Telefonagenten – Nie wieder verpasste Anrufe
                </h3>
              </div>

              <div className="ml-16 space-y-4">
                <div className="flex items-start">
                  <span className="text-primary-500 mr-3">•</span>
                  <p className="text-light-200">Gehen automatisch ans Telefon – 24/7, auch nachts</p>
                </div>
                <div className="flex items-start">
                  <span className="text-primary-500 mr-3">•</span>
                  <p className="text-light-200">Erkennen Anfragen, buchen Termine, beantworten Wiederholer-Fragen</p>
                </div>
                <div className="flex items-start">
                  <span className="text-primary-500 mr-3">•</span>
                  <p className="text-light-200">Voll integriert mit Ihrem CRM – jeder Anruf sauber dokumentiert</p>
                </div>
                <div className="flex items-start">
                  <span className="text-primary-500 mr-3">•</span>
                  <p className="text-light-200">Perfekt, wenn Sie keine Empfangskraft haben oder keine wollen</p>
                </div>
              </div>
            </div>

            {/* Solution 3 */}
            <div className="mb-16 bg-dark-400 border border-dark-100 p-8">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-primary-500/20 text-primary-500 rounded-full flex items-center justify-center mr-4">
                  <Calendar size={24} />
                </div>
                <h3 className="text-2xl font-heading font-bold text-primary-500">
                  3. Automatisiertes Kundenmanagement – Mehr Überblick, weniger Aufwand
                </h3>
              </div>

              <div className="ml-16 space-y-4">
                <div className="flex items-start">
                  <span className="text-primary-500 mr-3">•</span>
                  <p className="text-light-200">Kundendaten landen automatisch im System</p>
                </div>
                <div className="flex items-start">
                  <span className="text-primary-500 mr-3">•</span>
                  <p className="text-light-200">Erinnerungen, Follow-ups & Terminverwaltung laufen ohne Ihr Zutun</p>
                </div>
                <div className="flex items-start">
                  <span className="text-primary-500 mr-3">•</span>
                  <p className="text-light-200">Weniger manuelle Fehler, mehr Zeit für das Wesentliche</p>
                </div>
                <div className="flex items-start">
                  <span className="text-primary-500 mr-3">•</span>
                  <p className="text-light-200">Ideal, wenn Sie Systeme besser verknüpfen und Routineaufgaben abgeben wollen</p>
                </div>
              </div>
            </div>

            {/* Solution 4 */}
            <div className="mb-16 bg-dark-400 border border-dark-100 p-8">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-primary-500/20 text-primary-500 rounded-full flex items-center justify-center mr-4">
                  <Globe size={24} />
                </div>
                <h3 className="text-2xl font-heading font-bold text-primary-500">
                  4. Moderne Websites – in Tagen statt Wochen
                </h3>
              </div>

              <div className="ml-16 space-y-4">
                <div className="flex items-start">
                  <span className="text-primary-500 mr-3">•</span>
                  <p className="text-light-200">Mobile-optimiertes, responsives Design</p>
                </div>
                <div className="flex items-start">
                  <span className="text-primary-500 mr-3">•</span>
                  <p className="text-light-200">Performance-stark, sicher und wartungsarm</p>
                </div>
                <div className="flex items-start">
                  <span className="text-primary-500 mr-3">•</span>
                  <p className="text-light-200">Faire Pakete für Startups & KMU</p>
                </div>
                <div className="flex items-start">
                  <span className="text-primary-500 mr-3">•</span>
                  <p className="text-light-200">Wenn Sie eine Website wollen, die nicht nur „schön", sondern verkaufsstark ist</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="text-center">
            <h3 className="text-xl md:text-2xl font-heading text-light-100 mb-6">
              Sie wählen. Wir liefern.
            </h3>
            <p className="text-light-200 mb-8">
              Ob Sie nur einen KI-Chatbot brauchen, nur einen Telefonagenten – oder gleich alles in einem Paket wollen: 
              Wir liefern exakt das, was Ihnen Zeit spart und Geld bringt.
            </p>
            <a 
              href="#contact" 
              className="inline-block px-8 py-3 bg-primary-500 text-dark-500 font-heading font-bold hover:bg-primary-400 transition-colors duration-300 mb-6"
            >
              Jetzt kostenlose Beratung sichern
            </a>
            <p className="text-light-200">
              Lassen Sie uns gemeinsam herausfinden, was Sie am meisten entlastet. 
              Wir zeigen Ihnen, welcher unserer Bausteine am schnellsten Wirkung zeigt und 
              wie Sie ihn einfach, ohne Technikfrust einsetzen.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SolutionsSection;