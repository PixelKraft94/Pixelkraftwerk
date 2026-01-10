import React from 'react';

const Privacy: React.FC = () => {
  return (
    <div className="pt-24 pb-16 bg-dark-400 min-h-screen">
      <div className="container mx-auto px-4">
        <h1 className="text-3xl md:text-4xl font-mono font-bold mb-8 text-primary-500">Datenschutzerklärung</h1>
        <p className="text-light-300 mb-8">Stand: 23. Mai 2025</p>
        
        <div className="max-w-3xl bg-dark-500 p-8 border border-dark-100 mb-8">
          <h2 className="text-xl font-mono text-primary-500 mb-4">Allgemeine Hinweise</h2>
          <p className="text-light-100 mb-4">
            Der Schutz Ihrer persönlichen Daten ist uns ein besonderes Anliegen. Wir behandeln Ihre personenbezogenen Daten vertraulich und entsprechend den gesetzlichen Datenschutzvorschriften sowie dieser Datenschutzerklärung.
          </p>
        </div>
        
        <div className="max-w-3xl bg-dark-500 p-8 border border-dark-100 mb-8">
          <h2 className="text-xl font-mono text-primary-500 mb-4">Verantwortliche Stelle</h2>
          <div className="mb-4">
            <p className="text-light-100 mb-1">Pixelkraftwerk GbR – Franke & Brause</p>
            <p className="text-light-100 mb-1">Neuer Weg 9a</p>
            <p className="text-light-100 mb-1">04539 Groitzsch</p>
            <p className="text-light-100 mb-1">Telefon: 0178 5844460</p>
            <p className="text-light-100 mb-1">E-Mail: kontakt@pixelkraftwerk-ai.com</p>
          </div>
        </div>
        
        <div className="max-w-3xl bg-dark-500 p-8 border border-dark-100 mb-8">
          <h2 className="text-xl font-mono text-primary-500 mb-4">Datenverarbeitung auf dieser Website</h2>
          
          <h3 className="text-lg font-mono text-primary-400 mb-3">Welche Daten erfassen wir?</h3>
          <ul className="list-disc pl-6 mb-6">
            <li className="text-light-100 mb-2">
              Daten, die Sie uns mitteilen (z. B. über Kontaktformulare): Name, E-Mail-Adresse, Telefonnummer, Inhalte Ihrer Nachricht
            </li>
            <li className="text-light-100 mb-2">
              Technische Daten: IP-Adresse, Browsertyp, Betriebssystem, Datum und Uhrzeit des Zugriffs, Referrer-URL
            </li>
          </ul>
          
          <h3 className="text-lg font-mono text-primary-400 mb-3">Wie erfassen wir Ihre Daten?</h3>
          <ul className="list-disc pl-6 mb-6">
            <li className="text-light-100 mb-2">
              Durch Ihre aktive Mitteilung (z. B. über Kontaktformular oder Chatbot)
            </li>
            <li className="text-light-100 mb-2">
              Automatisch beim Besuch der Website durch unsere IT-Systeme
            </li>
          </ul>
          
          <h3 className="text-lg font-mono text-primary-400 mb-3">Zwecke der Verarbeitung:</h3>
          <ul className="list-disc pl-6 mb-6">
            <li className="text-light-100 mb-2">Bearbeitung von Anfragen und Kommunikation</li>
            <li className="text-light-100 mb-2">Erfüllung vertraglicher oder vorvertraglicher Pflichten</li>
            <li className="text-light-100 mb-2">Optimierung und Sicherheit der Website</li>
            <li className="text-light-100 mb-2">Analyse des Nutzerverhaltens (statistisch, nicht personenbezogen)</li>
          </ul>
        </div>
        
        <div className="max-w-3xl bg-dark-500 p-8 border border-dark-100 mb-8">
          <h2 className="text-xl font-mono text-primary-500 mb-4">Rechtsgrundlagen der Verarbeitung</h2>
          <ul className="list-disc pl-6 mb-4">
            <li className="text-light-100 mb-2">Art. 6 Abs. 1 lit. a DSGVO (Einwilligung)</li>
            <li className="text-light-100 mb-2">Art. 6 Abs. 1 lit. b DSGVO (Vertrag oder vorvertragliche Maßnahmen)</li>
            <li className="text-light-100 mb-2">Art. 6 Abs. 1 lit. f DSGVO (berechtigtes Interesse, z. B. technische Sicherheit)</li>
          </ul>
        </div>
        
        <div className="max-w-3xl bg-dark-500 p-8 border border-dark-100 mb-8">
          <h2 className="text-xl font-mono text-primary-500 mb-4">Speicherdauer</h2>
          <ul className="list-disc pl-6 mb-4">
            <li className="text-light-100 mb-2">Kontaktanfragen: max. 12 Monate</li>
            <li className="text-light-100 mb-2">Vertrags- und Projektdaten: gem. gesetzlicher Aufbewahrungspflichten (z. B. 6–10 Jahre)</li>
          </ul>
        </div>
        
        <div className="max-w-3xl bg-dark-500 p-8 border border-dark-100 mb-8">
          <h2 className="text-xl font-mono text-primary-500 mb-4">Weitergabe von Daten</h2>
          <p className="text-light-100 mb-4">
            Eine Übermittlung an Dritte erfolgt nur, wenn dies gesetzlich erlaubt ist, zur Vertragsabwicklung erforderlich ist oder Sie ausdrücklich eingewilligt haben. Eine Datenübertragung in Drittstaaten erfolgt nur, wenn ein angemessenes Datenschutzniveau besteht oder geeignete Garantien vorliegen (z. B. EU-Standardvertragsklauseln).
          </p>
        </div>
        
        <div className="max-w-3xl bg-dark-500 p-8 border border-dark-100 mb-8">
          <h2 className="text-xl font-mono text-primary-500 mb-4">Ihre Rechte als betroffene Person</h2>
          <p className="text-light-100 mb-4">Sie haben jederzeit das Recht auf:</p>
          <ul className="list-disc pl-6 mb-4">
            <li className="text-light-100 mb-2">Auskunft über Ihre gespeicherten Daten (Art. 15 DSGVO)</li>
            <li className="text-light-100 mb-2">Berichtigung unrichtiger Daten (Art. 16 DSGVO)</li>
            <li className="text-light-100 mb-2">Löschung Ihrer Daten (Art. 17 DSGVO)</li>
            <li className="text-light-100 mb-2">Einschränkung der Verarbeitung (Art. 18 DSGVO)</li>
            <li className="text-light-100 mb-2">Widerspruch gegen die Verarbeitung (Art. 21 DSGVO)</li>
            <li className="text-light-100 mb-2">Datenübertragbarkeit (Art. 20 DSGVO)</li>
          </ul>
          <p className="text-light-100 mb-4">
            Bitte wenden Sie sich dazu per E-Mail an: 
            <a href="mailto:kontakt@pixelkraftwerk-ai.com" className="text-primary-500 hover:text-primary-400 transition-colors ml-1">
              kontakt@pixelkraftwerk-ai.com
            </a>
          </p>
        </div>
        
        <div className="max-w-3xl bg-dark-500 p-8 border border-dark-100 mb-8">
          <h2 className="text-xl font-mono text-primary-500 mb-4">Widerruf von Einwilligungen</h2>
          <p className="text-light-100 mb-4">
            Einwilligungen zur Datenverarbeitung können jederzeit mit Wirkung für die Zukunft widerrufen werden. Die Rechtmäßigkeit der bis dahin erfolgten Verarbeitung bleibt unberührt.
          </p>
        </div>
        
        <div className="max-w-3xl bg-dark-500 p-8 border border-dark-100 mb-8">
          <h2 className="text-xl font-mono text-primary-500 mb-4">Beschwerderecht bei der Aufsichtsbehörde</h2>
          <p className="text-light-100 mb-4">
            Sie haben das Recht, sich bei einer Datenschutzaufsichtsbehörde zu beschweren, wenn Sie der Ansicht sind, dass die Verarbeitung Ihrer personenbezogenen Daten rechtswidrig erfolgt.
          </p>
        </div>
        
        <div className="max-w-3xl bg-dark-500 p-8 border border-dark-100 mb-8">
          <h2 className="text-xl font-mono text-primary-500 mb-4">Hosting</h2>
          <p className="text-light-100 mb-4">Unsere Website wird bereitgestellt durch:</p>
          <p className="text-light-100 mb-1">Netlify, Inc.</p>
          <p className="text-light-100 mb-4">2325 3rd Street, Suite 296, San Francisco, CA 94107, USA</p>
          <p className="text-light-100 mb-4">
            Netlify verarbeitet personenbezogene Daten (z. B. IP-Adressen) in unserem Auftrag. Die Verarbeitung erfolgt auf Grundlage unseres berechtigten Interesses an einer sicheren, stabilen und schnellen Bereitstellung der Website gemäß Art. 6 Abs. 1 lit. f DSGVO.
          </p>
          <p className="text-light-100">
            Mehr Informationen: 
            <a 
              href="https://www.netlify.com/privacy/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-primary-500 hover:text-primary-400 transition-colors ml-1"
            >
              https://www.netlify.com/privacy/
            </a>
          </p>
        </div>
        
        <div className="max-w-3xl bg-dark-500 p-8 border border-dark-100 mb-8">
          <h2 className="text-xl font-mono text-primary-500 mb-4">Cookies</h2>
          <p className="text-light-100 mb-4">
            Unsere Website verwendet Cookies. Dabei handelt es sich um kleine Textdateien, die auf Ihrem Endgerät gespeichert werden.
          </p>
          <ul className="list-disc pl-6 mb-4">
            <li className="text-light-100 mb-2">Session-Cookies: werden nach dem Besuch automatisch gelöscht</li>
            <li className="text-light-100 mb-2">Dauerhafte Cookies: bleiben gespeichert, bis Sie diese löschen</li>
            <li className="text-light-100 mb-2">Drittanbieter-Cookies: z. B. von eingebundenen Diensten wie Analyse-Tools</li>
          </ul>
          <p className="text-light-100 mb-4">
            Sie können Ihren Browser so einstellen, dass Sie über das Setzen von Cookies informiert werden, Cookies nur im Einzelfall erlauben oder generell ausschließen.
          </p>
        </div>
        
        <div className="max-w-3xl bg-dark-500 p-8 border border-dark-100 mb-8">
          <h2 className="text-xl font-mono text-primary-500 mb-4">Kontaktformulare</h2>
          <p className="text-light-100 mb-4">
            Wenn Sie uns über ein Formular kontaktieren, speichern wir Ihre Angaben zur Bearbeitung Ihrer Anfrage und für Anschlussfragen. Eine Weitergabe an Dritte erfolgt nicht ohne Ihre Zustimmung.
          </p>
          <p className="text-light-100 mb-2">Rechtsgrundlage:</p>
          <ul className="list-disc pl-6 mb-4">
            <li className="text-light-100 mb-2">Bei vertraglichem Zusammenhang: Art. 6 Abs. 1 lit. b DSGVO</li>
            <li className="text-light-100 mb-2">Andernfalls: berechtigtes Interesse gemäß Art. 6 Abs. 1 lit. f DSGVO oder Ihre Einwilligung</li>
          </ul>
        </div>
        
        <div className="max-w-3xl bg-dark-500 p-8 border border-dark-100 mb-8">
          <h2 className="text-xl font-mono text-primary-500 mb-4">Soziale Medien</h2>
          
          <h3 className="text-lg font-mono text-primary-400 mb-3">X (ehemals Twitter)</h3>
          <p className="text-light-100 mb-4">
            Funktionen des Dienstes X (X Corp., 1355 Market Street, San Francisco, CA 94103, USA) sind eingebunden. Dabei kann es zur Übertragung personenbezogener Daten in die USA kommen.
          </p>
          
          <h3 className="text-lg font-mono text-primary-400 mb-3">Instagram</h3>
          <p className="text-light-100 mb-4">
            Funktionen von Instagram (Meta Platforms Ireland Limited, Merrion Road, Dublin 4, D04 X2K5, Irland) sind eingebunden. Es gelten die Datenschutzrichtlinien von Meta.
          </p>
        </div>
        
        <div className="max-w-3xl bg-dark-500 p-8 border border-dark-100">
          <h2 className="text-xl font-mono text-primary-500 mb-4">Änderungen dieser Datenschutzerklärung</h2>
          <p className="text-light-100 mb-4">
            Wir behalten uns vor, diese Datenschutzerklärung anzupassen, z. B. bei rechtlichen Änderungen oder Erweiterung unserer Dienste. Es gilt die jeweils aktuelle Version.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Privacy;