# SEO-Plan: Pixel Kraftwerk – Lokale & thematische Autorität

**Stand:** Analyse der bestehenden Webseite (pixelkraftwerk-ai.com)  
**Ziel:** Maximale lokale Sichtbarkeit (Leipzig, Groitzsch, Sachsen) + Topical Authority für KI-Automatisierung, Chatbots, SEO, Terminbuchung, CRM, Content.  
**WICHTIG:** Dies ist nur der Plan. Es wird noch keine Code- oder Content-Änderung vorgenommen.

---

## 1. Ausgangslage (Kurzüberblick)

| Aspekt | Status |
|--------|--------|
| **Geschäft** | Pixel Kraftwerk – KI-Automatisierung, Chatbots, Telefonassistenten, Terminbuchung, CRM, Websites & SEO, Content/Video |
| **Standort** | Groitzsch (Hauptsitz), Einzugsgebiet: Leipzig, Sachsen, Deutschland |
| **Bestehende Seiten** | Home, About, Contact, FAQ, Features, Impressum, Datenschutz, AGB, Privacy-Settings + 6 Service-Seiten (ki-chatbots, telefonassistenten, termine-buchungen, crm-lead-management, website-seo, content-video) |
| **Services-Hub** | Komponente `Services.tsx` existiert, Route `/services` fehlt in `App.tsx` → Sitemap verweist auf /services, Seite liefert aktuell 404 |
| **NAP** | Zentral in `businessInfo.ts`, Footer/Contact nutzen NAPInfo; **Inkonsistenz:** index.html „Neuer Weg 9**A**“, Rest „9**a**“ |
| **Schema** | LocalBusiness (inkl. JSON-LD im index.html), WebSite, Breadcrumb auf Service-Seiten, ServiceItemListSchema; LocalBusiness @type ist aktuell ein langer String (sollte ein Typ oder Array sein) |
| **Google Maps** | Auf Homepage eingebunden (GoogleMapsSection) |

---

## 2. Titel & Überschriften-Strategie (On-Page)

### 2.1 Vorbild (wie von dir gewünscht)

- **Beispiel:** „BEST Physiotherapist Portsmouth - if you're looking for Physiotherapy Services near me or Sports Injuries & Sports Massage near me - Hope Physiotherapy is the place to be“
- **H1:** Primary Category + City (z. B. „Beste KI-Agentur Leipzig“).
- **H2:** Sekundäre Kategorien + wichtigste Leistungen (aus Recherche z. B. GMB/„near me“-Suchen ableiten).

### 2.2 Konkret für Pixel Kraftwerk

- **Primäre Kategorie:** KI-Agentur / KI-Automatisierung (für Leipzig/Groitzsch/Sachsen).
- **H1-Homepage (Ziel):**
  - **H1:** z. B. „KI-Agentur Leipzig – Automatisierung, Chatbots & SEO aus Groitzsch“  
  - Oder: „Beste KI-Agentur Leipzig – Chatbots, Telefonassistenten & SEO in meiner Nähe“
  - Formulierung final nach Keyword-Recherche (z. B. „KI Agentur Leipzig“, „KI Automatisierung Leipzig“, „Chatbot Agentur Leipzig“) festlegen.

- **H2-Liste auf der Homepage (To-do):**
  - H2-Blöcke so setzen, dass sie **Sekundärkategorien + wichtigste Services** abdecken, z. B.:
    - KI-Chatbots & digitale Kundenassistenz (Leipzig / in meiner Nähe)
    - KI-Telefonassistenten & Anrufannahme
    - Terminbuchung & Buchungssysteme
    - Lead-Management & CRM
    - Websites & SEO (lokale Suchanfragen)
    - Content & KI-Videos
  - **Recherche:** Mit GMB/Google (z. B. „KI Agentur Leipzig“, „Chatbot Leipzig“, „SEO Agentur Leipzig“, „Terminbuchung automatisch“) prüfen, welche Begriffe Nutzer wirklich suchen, und H2 daran anpassen.

- **Title-Tag Homepage (Beispiel, 60–120 Zeichen):**  
  „Beste KI-Agentur Leipzig – Chatbots, Telefonassistenten, SEO & Automatisierung | Pixel Kraftwerk“

- **Meta-Description:** Lokale Suchintention + „near me“-Relevanz + klare USPs (z. B. „KI-Automatisierung und Chatbots aus Groitzsch für Leipzig und Sachsen. Terminbuchung, CRM, Websites & SEO. Jetzt Beratung sichern.“).

---

## 3. NAP (Name, Address, Phone)

### 3.1 Ziele

- **Einheitliche NAP** auf der gesamten Seite (und identisch mit Google Business Profile).
- NAP auf **Homepage** (oder GBP-Landing) **sichtbar** + im **Footer auf jeder Unterseite**.
- Keine Abweichungen in Schreibweise (z. B. „9a“ vs „9A“, Komma, PLZ, Ort).

### 3.2 Aktuelle Befunde

- **Zentrale Quelle:** `src/data/businessInfo.ts` (Name, Adresse, Telefon, etc.).
- **Footer:** nutzt `NAPInfo` (variant="minimal") → NAP ist im Footer vorhanden.
- **Inkonsistenz:** In `index.html` steht **„Neuer Weg 9A“** (großes A), in `businessInfo.ts`, Imprint, Privacy **„Neuer Weg 9a“** (kleines a).  
  **Empfehlung:** Eine Schreibweise definieren (z. B. amtlich „9a“) und **überall** sowie im GBP darauf vereinheitlichen.

### 3.3 To-do (ohne Code jetzt auszuführen)

1. **Festlegung:** Eine offizielle NAP-Zeile (z. B. „Pixel Kraftwerk – Franke & Brause GbR, Neuer Weg 9a, 04539 Groitzsch, +49 178 5844460“).
2. **Prüfung:** Alle Vorkommen (index.html, businessInfo, Impressum, Datenschutz, Schema, GBP) auf exakte Übereinstimmung prüfen und in der Umsetzungsphase anpassen.
3. **Sichtbarkeit:** Sicherstellen, dass NAP auf der Homepage (z. B. im Hero oder direkt darunter / neben der Karte) klar lesbar ist, nicht nur im Footer.

---

## 4. Google Business Profile (GBP) & Karte

### 4.1 Ziele

- GBP mit **exakt derselben NAP** wie auf der Webseite.
- **Landing-URL:** Homepage (oder eine dedizierte lokale Landing-Page) mit NAP + eingebetteter Karte.
- Karte auf der **Homepage** (bereits vorhanden via `GoogleMapsSection`).

### 4.2 To-do

1. GBP prüfen/claimen, Kategorie z. B. „Softwareunternehmen“, „IT-Dienstleistung“, „Marketingagentur“ (je nach Hauptfokus).
2. NAP im GBP exakt wie in `businessInfo.ts` (nach NAP-Bereinigung).
3. Service-Bereich: Groitzsch, Leipzig, Sachsen, ggf. weitere Nachbarorte.
4. Leistungen eintragen (Chatbots, Telefonassistenten, Terminbuchung, CRM, Website, SEO, Content/Video).
5. Homepage als Website-URL verwenden; Karte auf Homepage beibehalten (bereits umgesetzt).

---

## 5. Schema (Structured Data)

### 5.1 Ziele

- **LocalBusiness** (oder spezifischer Typ) mit NAP, Geo, Öffnungszeiten, Service-Liste.
- **Korrekte @type-Angabe:** Schema erwartet einen Typ oder ein Array von Typen, kein Komma-getrennter String.
- Zusätzlich: **FAQPage** wo sinnvoll (z. B. FAQ-Seite, Service-Seiten mit FAQ-Bereich).
- Optional: **Service**-Schema pro Leistung; Breadcrumbs (bereits auf Service-Seiten).

### 5.2 Aktuelle Befunde

- `LocalBusinessSchema.tsx` nutzt `businessInfo.businessType` als String („ProfessionalService, SoftwareService, IT-Service, Webdesign“).  
  **Empfehlung:** In der Umsetzung `@type` auf einen Haupttyp setzen (z. B. `ProfessionalService`) oder ein Array `["ProfessionalService", "SoftwareApplication"]` o. ä., je nach Schema.org-Empfehlung.
- Im **index.html** gibt es zusätzliches JSON-LD mit LocalBusiness; NAP dort auf „9a“ vereinheitlichen.
- **Schema-Generator:** https://technicalseo.com/tools/schema-markup-generator/ für neue/erweiterte Schemas nutzen (z. B. FAQ, Service).

### 5.3 To-do (Plan)

1. LocalBusiness @type bereinigen (ein Wert oder Array).
2. NAP in allen JSON-LD-Blöcken vereinheitlichen.
3. Pro Service-Seite: prüfen, ob FAQ-Abschnitt vorhanden ist → FAQPage-Schema ergänzen.
4. Optional: Service-Schema pro Leistungsseite für bessere Rich Results.

---

## 6. Seitenstruktur & Topical Authority

### 6.1 Hierarchie (Ziel)

- **RANK 1:** Landing Page = **Homepage** (KI-Agentur Leipzig / Groitzsch).
- **RANK 2:**  
  - **Kategorie-Seite:** z. B. „Leistungen“ = **/services** (Hub für alle Services).  
  - **Sub-Kategorien (optional):** z. B. nur „Leistungen“ ohne weitere Sub-Kategorien, oder z. B. „Kundenkommunikation“ (Chatbot + Telefon) vs „Prozesse“ (Termine, CRM) – abhängig von Recherche.
  - **Kernleistungen (RANK 2):** jede Kernleistung als eigene Seite (bereits vorhanden):
    - /ki-chatbots  
    - /telefonassistenten  
    - /termine-buchungen  
    - /crm-lead-management  
    - /website-seo  
    - /content-video  
- **RANK 3 (optional, bei Bedarf):** weitere Unterseiten zu spezifischen Themen (z. B. „Chatbot für Handwerker“, „Terminbuchung für Praxen“), die von den RANK-2-Seiten aus verlinkt werden und untereinander verlinken.

### 6.2 Topical Authority – Themen abdecken

- **Themenfeld:** KI-Automatisierung, Chatbots, Telefonassistenten, Terminbuchung, CRM, Websites, SEO, Content/Video.
- **Vorgehen:**  
  - Suchanfragen und Konkurrenz zu „KI Agentur Leipzig“, „Chatbot Agentur“, „SEO Leipzig“ etc. prüfen.  
  - Pro **Kernleistung** eine eigene Seite mit **1.000–2.500 Wörtern** (eindeutiger, nutzenorientierter Inhalt), inkl. H1/H2/H3, lokalen Bezug (Leipzig, Groitzsch, Sachsen), FAQs, interner Verlinkung.
- **Struktur logisch & für Suchmaschinen:**  
  - Homepage → Leistungen (/services) → Leistung 1, 2, 3 …  
  - Klar erkennbar: „KI-Agentur / Leistungen / Leistung X“.

### 6.3 Konkrete To-dos

1. **Route /services aktivieren:** `Services.tsx` in `App.tsx` unter `/services` einbinden, damit Sitemap-URL erreichbar ist.
2. **Services-Hub optimieren:**  
   - H1 z. B. „Leistungen – KI-Automatisierung, Chatbots & SEO in Leipzig und Sachsen“.  
   - H2 pro Kernleistung; Verlinkung auf die 6 Service-Seiten.
3. **Service-Seiten:**  
   - Pro Seite 1.000–2.500 Wörter (wo noch nicht erreicht).  
   - Eindeutiger H1 (z. B. „KI-Chatbots für Unternehmen in Leipzig | Pixel Kraftwerk“).  
   - H2/H3 für Unterthemen, lokale Keywords, FAQs.  
   - Content-Prompt (wie von dir vorgegeben) für einheitliche Qualität nutzen (Copywriter-Prompt für Service-Seiten).
4. **Sitemap:** Alle Service-URLs (/ki-chatbots, /telefonassistenten, …) sowie /services in sitemap.xml eintragen; fehlerhafte Einträge (/terms falls nicht vorhanden) entfernen.

---

## 7. Local Authority – „Gebiete, die wir bedienen“

### 7.1 Ziele

- Klar kommunizieren: **„Wir bedienen Leipzig, Groitzsch, Sachsen und …“**.
- **Eine Übersichtsseite** (z. B. „Leistungsgebiete“ / „Unsere Region“) + **eine Unterseite pro Gebiet** (Stadt/Region), um für Suchanfragen wie „[Service] [Stadt/Stadtteil]“ zu ranken.

### 7.2 Vorschlag Struktur

- **Navigation:** Link „Leistungsgebiete“ oder „Unsere Region“ (zu einer Übersichtsseite).
- **Übersichtsseite:** z. B. `/leistungsgebiete` oder `/region` mit Auflistung der Gebiete und Links zu den Gebietsseiten.
- **Gebietsseiten (Beispiele):**  
  - KI-Automatisierung & Chatbots in **Leipzig**  
  - KI-Automatisierung & Chatbots in **Groitzsch**  
  - … in **Sachsen** (oder Aufteilung in Städte wie Dresden, Chemnitz, etc., je nach Geschäftsmodell)

Anzahl der Gebiete: z. B. 5–8 (Städte/Regionen), mit Kundeninput finalisieren.

### 7.3 Inhalt pro Gebietsseite

- **Umfang:** ca. 1.200–2.200 Wörter (hyperlokaler Inhalt).
- **Inhalte:**  
  - Warum Pixel Kraftwerk für dieses Gebiet relevant ist (Nähe, Erfahrung, Kunden).  
  - NAP + Karte („So finden Sie uns“ / „Von Groitzsch aus für Leipzig tätig“).  
  - Kurz die Leistungen, die in dieser Region angeboten werden.  
  - Lokale Anker (Stadtteile, Landmarken, Nahverkehr), ohne falsche Zweigstellen zu behaupten.  
  - FAQs mit lokalem Bezug (z. B. „Betreut ihr auch Kunden in Leipzig-Mitte?“).  
- **Prompt:** Den von dir genannten „Hyperlocal Topical Authority“-Prompt für jede Gebietsseite nutzen (Business-Name, Standort, Gebiet, NAP, USPs einsetzen).

### 7.4 To-do (Plan)

1. Liste der Gebiete festlegen (mit Kundeninput: Stadtteile, Städte, Landkreise).
2. Route + Übersichtsseite „Leistungsgebiete“ anlegen.
3. Pro Gebiet eine Unterseite anlegen und mit dem Prompt befüllen.
4. In Navigation und Footer verlinken; von Homepage und Service-Seiten aus verlinken, wo es für den Leser sinnvoll ist.

---

## 8. Interlinking

### 8.1 Grundregel

- **Nur Links setzen, die dem Leser nutzen.** Kein erzwungenes Verlinken.

### 8.2 Empfohlene Verlinkung

- **Homepage** → /services, Kontakt, ggf. 1–2 Kernleistungen + „Leistungsgebiete“.
- **/services** → alle 6 Service-Seiten + Leistungsgebiete.
- **Service-Seiten** → untereinander („Sie interessieren sich auch für …“), zurück zu /services, zur Kontaktseite, ggf. zu passenden Gebietsseiten (z. B. „Websites & SEO in Leipzig“ → Leipzig-Gebietsseite).
- **Gebietsseiten** → /services, 2–3 passende Service-Seiten, Kontakt, ggf. andere Gebietsseiten.
- **About / FAQ / Contact** → /services oder konkrete Leistungen, wo thematisch passend.

Ziel: Thematische und lokale Autorität für Suchmaschinen klar machen; Nutzer finden relevante Unterseiten leicht.

---

## 9. Technik & Sitemap

### 9.1 Bereits gut

- Canonical auf pixelkraftwerk-ai.com.
- Zentrale businessInfo für NAP und Meta.
- Google Maps auf Homepage.
- Breadcrumb-Schema auf Service-Seiten.

### 9.2 To-do

1. **Routing:** `/services` in `App.tsx` hinzufügen (Komponente `Services.tsx`).
2. **Sitemap:**  
   - Alle erreichbaren Seiten aufnehmen (inkl. /services und aller 6 Service-URLs).  
   - Nicht existierende URLs entfernen (z. B. /terms, falls keine Route existiert).
3. **Schema:** LocalBusiness @type und NAP wie unter Abschnitt 5 anpassen.

---

## 10. Zusammenfassung der Maßnahmen (Priorität)

| Prio | Maßnahme |
|------|----------|
| 1 | NAP vereinheitlichen (9a einheitlich; index.html + GBP prüfen). |
| 2 | H1 Homepage: Primary Category + Stadt (z. B. „KI-Agentur Leipzig“); H2 an Sekundärkategorien + Services anpassen (nach kurzer Keyword-Recherche). |
| 3 | Route /services aktivieren; Sitemap bereinigen und Service-URLs ergänzen. |
| 4 | LocalBusiness-Schema @type und NAP in allen JSON-LD-Quellen bereinigen. |
| 5 | Service-Seiten: Umfang 1.000–2.500 Wörter, H1/H2/FAQs, lokale Keywords; Copywriter-Prompt nutzen. |
| 6 | „Leistungsgebiete“-Übersichtsseite + Gebietsseiten (z. B. Leipzig, Groitzsch, Sachsen + 2–3 weitere); Navigation + Interlinking. |
| 7 | Gezieltes Interlinking zwischen Home, /services, Service-Seiten und Gebietsseiten. |
| 8 | FAQ-Schema auf Seiten mit FAQ-Bereich; optional Service-Schema pro Leistung. |

---

## 11. Nächste Schritte (ohne sofortige Code-Änderung)

1. **Keyword-/Recherche-Phase:**  
   - „KI Agentur Leipzig“, „Chatbot Agentur Leipzig“, „SEO Agentur Leipzig“, „Terminbuchung automatisch“ etc. in Google prüfen; Konkurrenz-H1/H2 ansehen.  
   - Ggf. GMB/„near me“-Suchen einbeziehen.
2. **Festlegung:** Finale H1/H2-Formulierungen für Homepage; exakte NAP-Zeile; Liste der Leistungsgebiete (mit Kundeninput).
3. **Content-Briefs:** Pro Service-Seite und pro Gebietsseite Briefs (inkl. deiner Prompts) für Texte 1.000–2.500 bzw. 1.200–2.200 Wörter.
4. **Umsetzung:** Erst nach Freigabe dieses Plans die technischen und redaktionellen Änderungen schrittweise umsetzen.

---

*Ende des SEO-Plans. Keine Code- oder Content-Änderung in diesem Schritt.*
