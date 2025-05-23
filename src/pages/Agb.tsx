import React from 'react';

const Agb: React.FC = () => {
  return (
    <div className="pt-24 pb-16 bg-dark-400 min-h-screen">
      <div className="container mx-auto px-4">
        <h1 className="text-3xl md:text-4xl font-mono font-bold mb-8 text-primary-500">AGB – Allgemeine Geschäftsbedingungen</h1>
        <p className="text-light-300 mb-8">Zuletzt geändert am: 10.03.2025</p>
        
        <div className="max-w-3xl bg-dark-500 p-8 border border-dark-100 mb-8">
          <h2 className="text-xl font-mono text-primary-500 mb-4">1. Geltungsbereich</h2>
          <p className="text-light-100 mb-4">
            Diese Allgemeinen Geschäftsbedingungen (AGB) gelten für alle Verträge und Leistungen, die von Pixel Kraftwerk (nachfolgend „wir", „uns", „Pixel Kraftwerk") mit Kunden abgeschlossen werden. Der Kunde erkennt mit der Nutzung unserer Dienstleistungen diese AGB an. Sie gelten für alle aktuellen und zukünftigen Geschäftsbeziehungen zwischen Pixel Kraftwerk und dem Kunden.
          </p>
        </div>
        
        <div className="max-w-3xl bg-dark-500 p-8 border border-dark-100 mb-8">
          <h2 className="text-xl font-mono text-primary-500 mb-4">2. Vertragsabschluss</h2>
          <p className="text-light-100 mb-4">
            Ein Vertrag zwischen Pixel Kraftwerk und dem Kunden kommt zustande, wenn der Kunde über die Website von Pixel Kraftwerk eine Anfrage stellt, ein Angebot annimmt oder auf andere Weise mit uns in Kontakt tritt und wir dies bestätigen. Unsere Angebote sind freibleibend und unverbindlich, es sei denn, sie sind ausdrücklich als verbindlich bezeichnet. Der Vertrag wird durch die Annahme eines Angebots oder eine ausdrückliche Bestätigung durch Pixel Kraftwerk wirksam.
          </p>
        </div>
        
        <div className="max-w-3xl bg-dark-500 p-8 border border-dark-100 mb-8">
          <h2 className="text-xl font-mono text-primary-500 mb-4">3. Preise und Zahlung</h2>
          <p className="text-light-100 mb-4">
            Die Preise für unsere Dienstleistungen richten sich nach dem jeweils gültigen Angebot. Alle Preise sind netto und verstehen sich zuzüglich der gesetzlichen Mehrwertsteuer. Die vereinbarten Zahlungen sind gemäß der im Vertrag festgelegten Zahlungsfrist zu leisten. Sofern nicht anders vereinbart, sind Zahlungen innerhalb von 14 Tagen nach Rechnungserhalt fällig. Bei Zahlungsverzug behalten wir uns vor, Mahngebühren zu erheben und Verzugszinsen gemäß den gesetzlichen Bestimmungen zu verlangen.
          </p>
        </div>
        
        <div className="max-w-3xl bg-dark-500 p-8 border border-dark-100 mb-8">
          <h2 className="text-xl font-mono text-primary-500 mb-4">4. Leistungen von Pixel Kraftwerk</h2>
          <p className="text-light-100 mb-4">
            Pixel Kraftwerk bietet eine Vielzahl von KI-gestützten Lösungen in den Bereichen Automatisierung, Kundenservice und Digitalisierung an. Zu unseren Dienstleistungen gehören unter anderem:
          </p>
          <ul className="list-disc pl-6 mb-4">
            <li className="text-light-100 mb-2">Automatisierte Kundenbetreuung</li>
            <li className="text-light-100 mb-2">CRM-Integration</li>
            <li className="text-light-100 mb-2">Automatisierung der Terminvereinbarung</li>
            <li className="text-light-100 mb-2">KI-basierte Sprachbots und Telefon-Agenten</li>
          </ul>
          <p className="text-light-100 mb-4">
            Die genauen Details zu den einzelnen Dienstleistungen sind auf unserer Website beschrieben und Bestandteil des jeweiligen Vertrags.
          </p>
        </div>
        
        <div className="max-w-3xl bg-dark-500 p-8 border border-dark-100 mb-8">
          <h2 className="text-xl font-mono text-primary-500 mb-4">5. Rechte und Pflichten der Parteien</h2>
          <p className="text-light-100 mb-4">
            Der Kunde verpflichtet sich, alle für die Leistungserbringung erforderlichen Informationen rechtzeitig und vollständig zur Verfügung zu stellen. Pixel Kraftwerk verpflichtet sich, die vereinbarten Dienstleistungen gemäß den vertraglichen Bestimmungen und innerhalb des vereinbarten Zeitrahmens zu erbringen. Verzögerungen aufgrund unvollständiger oder verspäteter Angaben des Kunden oder höherer Gewalt sind von uns nicht zu vertreten und führen zu einer angemessenen Verlängerung der Leistungserbringung.
          </p>
        </div>
        
        <div className="max-w-3xl bg-dark-500 p-8 border border-dark-100 mb-8">
          <h2 className="text-xl font-mono text-primary-500 mb-4">6. Haftung</h2>
          <p className="text-light-100 mb-4">
            Pixel Kraftwerk übernimmt keine Haftung für Schäden, die durch die Nutzung der Website oder der angebotenen Dienstleistungen entstehen, es sei denn, diese sind auf grobe Fahrlässigkeit oder Vorsatz von Pixel Kraftwerk zurückzuführen. Insbesondere übernehmen wir keine Haftung für die Richtigkeit, Vollständigkeit oder Aktualität der bereitgestellten Informationen.
          </p>
        </div>
        
        <div className="max-w-3xl bg-dark-500 p-8 border border-dark-100 mb-8">
          <h2 className="text-xl font-mono text-primary-500 mb-4">7. Streitbeilegung</h2>
          <p className="text-light-100 mb-4">
            Pixel Kraftwerk ist nicht verpflichtet, an einem Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle teilzunehmen. Im Falle von Streitigkeiten aus oder im Zusammenhang mit diesem Vertrag ist der Gerichtsstand Leipzig, Deutschland. Die Streitbeilegung kann auch über die europäische Plattform für Online-Streitbeilegung erfolgen:
          </p>
          <p className="text-light-100 mb-4">
            <a 
              href="https://ec.europa.eu/consumers/odr"
              target="_blank" 
              rel="noopener noreferrer"
              className="text-primary-500 hover:text-primary-400 transition-colors"
            >
              https://ec.europa.eu/consumers/odr
            </a>
          </p>
        </div>
        
        <div className="max-w-3xl bg-dark-500 p-8 border border-dark-100 mb-8">
          <h2 className="text-xl font-mono text-primary-500 mb-4">8. Datenschutz</h2>
          <p className="text-light-100 mb-4">
            Der Schutz Ihrer persönlichen Daten ist uns wichtig. Wir erheben, verarbeiten und nutzen Ihre personenbezogenen Daten ausschließlich gemäß unserer Datenschutzerklärung, die auf unserer Website eingesehen werden kann. Mit der Nutzung unserer Dienstleistungen erklärt sich der Kunde mit der Verarbeitung seiner Daten gemäß der Datenschutzerklärung einverstanden.
          </p>
        </div>
        
        <div className="max-w-3xl bg-dark-500 p-8 border border-dark-100">
          <h2 className="text-xl font-mono text-primary-500 mb-4">9. Schlussbestimmungen</h2>
          <p className="text-light-100 mb-4">
            Es gilt das Recht der Bundesrepublik Deutschland unter Ausschluss des internationalen Privatrechts und des UN-Kaufrechts. Sollte eine Bestimmung dieser AGB unwirksam sein, bleibt der Vertrag im Übrigen wirksam. Die unwirksame Bestimmung wird durch eine wirksame ersetzt, die dem wirtschaftlichen Zweck der unwirksamen am nächsten kommt. Alle Änderungen oder Ergänzungen dieser AGB bedürfen der Schriftform.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Agb;