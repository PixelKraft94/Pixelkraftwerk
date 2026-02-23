# Plan: Migration zu Next.js (Turbopack) für bessere SEO

**Stand:** Projekt ist aktuell Vite + React SPA.  
**Ziel:** Turbopack nutzen und SEO „ordentlich“ sichtbar machen (Meta-Tags und Inhalt serverseitig, nicht nur per JavaScript).  
**Wichtig:** Dies ist nur der Plan – es wird noch keine Code- oder Konfigurationsänderung vorgenommen.

---

## 1. Warum „Turbopack“ hier = Next.js

- **Turbopack** ist der neue Bundler von Vercel und wird vor allem im **Next.js**-Ökosystem genutzt.
- **Vite** und **Turbopack** sind unterschiedliche Bundler; man kann Vite nicht einfach durch Turbopack ersetzen und alles bleibt gleich.
- **Praktische Option:** Auf **Next.js** umstellen und im Dev **Turbopack** nutzen (`next dev --turbo` bzw. ab Next.js 15 standardmäßig). So hast du „Turbopack“ und gleichzeitig die technische Basis für **ordentliche SEO**.

---

## 2. Warum die SEO dann „ordentlich“ sichtbar ist

| Heute (Vite SPA) | Nach Migration (Next.js) |
|------------------|--------------------------|
| Eine `index.html`, ein Einstieg. | Pro Route kann eine eigene **HTML-Seite** ausgeliefert werden. |
| **Meta-Tags** (Title, Description, OG, Twitter) werden per **JavaScript** in `useEffect` (SEOHead) gesetzt. | **Meta-Tags** werden **serverseitig** in den HTML-Head geschrieben (z. B. mit `metadata` / `generateMetadata` im App Router). |
| Crawler/Bots sehen zuerst nur die Meta der Homepage. | Crawler sehen pro URL die **richtigen** Title/Description/OG – ohne JS. |
| **Inhalt** wird erst nach dem Laden der App gerendert. | Bei **SSR** oder **SSG** steht der **Seiteninhalt** (z. B. H1, Texte) bereits im ersten HTML – besser für Suchmaschinen und Social Preview. |
| Sitemap ist eine statische `sitemap.xml`. | Sitemap kann dynamisch aus den Routen erzeugt werden (optional). |

Kurz: Mit Next.js (SSR/SSG) können Suchmaschinen und Social-Crawler Title, Description und Inhalt **direkt aus dem HTML** lesen – das ist „SEO ordentlich sehen“.

---

## 3. Was bleibt unverändert (inhaltlich / konzeptionell)

- **React** und **TypeScript**.
- **Komponenten** (Header, Footer, NAPInfo, GoogleMapsSection, ContactForm, CookieBanner, VoiceflowChat, etc.) – können weitgehend 1:1 übernommen werden (evtl. kleine Anpassungen für Client/Server).
- **Seiteninhalte** (Home, About, Contact, FAQ, Services, Leistungsgebiete, Region-Seiten, alle Service-Unterseiten) – Struktur und Texte bleiben.
- **Daten:** `businessInfo.ts`, NAP, Öffnungszeiten, Services-Liste.
- **Styling:** Tailwind CSS – in Next.js weiter nutzbar (gleiche Klassen).
- **Framer Motion** – weiter nutzbar (ggf. nur client-seitig einbinden).
- **Strukturierte Daten** (JSON-LD LocalBusiness, Breadcrumbs, etc.) – Konzept bleibt; Ausgabe erfolgt dann serverseitig im HTML (z. B. in Layout/Seiten).
- **Domain, Canonical, NAP, Leistungsgebiete, interne Verlinkung** – Konzept und URLs sollten beibehalten werden (siehe Abschnitt 5).

---

## 4. Was sich technisch ändert

| Aspekt | Heute (Vite) | Nach Migration (Next.js) |
|--------|----------------|---------------------------|
| **Bundler / Dev-Server** | Vite | Next.js mit Turbopack (`next dev --turbo`) |
| **Build** | `vite build` → statische Dateien (oder SPA) | `next build` → Node-Server oder statischer Export (siehe unten) |
| **Routing** | Eigenes Client-Routing per `window.location.pathname` + Switch in `App.tsx` | **App Router:** Ordner `app/` mit `page.tsx` pro Route (z. B. `app/page.tsx`, `app/services/page.tsx`, `app/leistungsgebiete/page.tsx`, `app/leistungsgebiete/[region]/page.tsx`). |
| **Meta & SEO** | `SEOHead` setzt im `useEffect` `document.title` und Meta-Tags. | **`metadata`** / **`generateMetadata`** pro Seite (oder Layout) – werden ins HTML eingebaut, bevor die Seite ausgeliefert wird. |
| **HTML-Grundgerüst** | Eine `index.html`. | Next.js erzeugt pro Route das passende HTML inkl. Head. |
| **Öffentliche Assets** | `public/` (Favicon, Bilder, `sitemap.xml`). | `public/` bleibt; Sitemap kann optional in `app/sitemap.ts` dynamisch erzeugt werden. |
| **Deployment** | Statische Dateien auf beliebigen Host. | Vercel, Node-Server, oder **Static Export** (`output: 'export'`) für rein statisches Hosting – dann aber **kein** SSR, nur SSG (vorab gebaute HTML-Seiten). |

---

## 5. URL-Struktur beibehalten (SEO)

Damit bestehende URLs und die Sitemap weiter gelten, sollten die Next.js-Routen **genau** die bisherigen Pfade abbilden:

- `/` → Home
- `/about`, `/contact`, `/faq`, `/features`, `/imprint`, `/privacy`, `/agb`, `/privacy-settings`
- `/services` → Leistungen-Hub
- `/ki-chatbots`, `/telefonassistenten`, `/termine-buchungen`, `/crm-lead-management`, `/website-seo`, `/content-video`
- `/leistungsgebiete` → Übersicht
- `/leistungsgebiete/leipzig`, `/leistungsgebiete/groitzsch`, `/leistungsgebiete/sachsen`

Im App Router z. B.:

- `app/page.tsx`
- `app/about/page.tsx`, `app/contact/page.tsx`, …
- `app/services/page.tsx`
- `app/ki-chatbots/page.tsx`, …
- `app/leistungsgebiete/page.tsx`
- `app/leistungsgebiete/[region]/page.tsx` mit `region` = leipzig | groitzsch | sachsen

Canonical-URLs und NAP bleiben unverändert (weiter `pixelkraftwerk-ai.com`).

---

## 6. Vorgehen bei der Migration (Schritte, ohne Code)

1. **Next.js-Projekt anlegen**  
   Neues Next.js-Projekt mit App Router und TypeScript (z. B. im gleichen Repo in einem Unterordner oder als neuer Branch). Tailwind aktivieren.

2. **Basis-Layout bauen**  
   Root-Layout mit Header, Footer, CookieBanner, VoiceflowChat. Globale Styles (Tailwind, Fonts) übernehmen.

3. **Daten und Konfiguration übernehmen**  
   `businessInfo.ts` und alle zentralen Daten/Configs ins Next-Projekt kopieren (z. B. unter `lib/` oder `data/`).

4. **Komponenten übernehmen**  
   Alle UI-Komponenten (Header, Footer, NAPInfo, Maps, ContactForm, SEOHead durch `metadata` ersetzen, etc.) schrittweise übernehmen. Wo nötig: `'use client'` für Interaktivität (z. B. Framer Motion, State).

5. **Routen abbilden**  
   Für jede bisherige „Route“ eine `page.tsx` anlegen und die bestehende Seitenkomponente einbinden. Dynamische Route nur für `/leistungsgebiete/[region]`.

6. **Meta pro Seite**  
   Statt `SEOHead` in jeder Seite: `metadata` oder `generateMetadata` in der jeweiligen `page.tsx` (oder im Layout) setzen – Title, Description, Open Graph, Twitter, Canonical. So ist SEO „ordentlich“ im HTML sichtbar.

7. **Structured Data**  
   JSON-LD (LocalBusiness, Breadcrumbs, ggf. FAQ) serverseitig in die jeweilige Seite oder ins Layout einbauen (z. B. als `<script type="application/ld+json">` im Layout oder in der Page).

8. **Sitemap & Robots**  
   Entweder bestehende `public/sitemap.xml` und `robots.txt` beibehalten oder in Next.js `app/sitemap.ts` / `app/robots.ts` implementieren, mit denselben URLs wie heute.

9. **Assets & Favicon**  
   `public/`-Inhalte (Favicon, Bilder, evtl. sitemap.xml falls nicht dynamisch) ins Next-Projekt übernehmen.

10. **Turbopack im Dev nutzen**  
    `next dev --turbo` (oder in Next 15 den Standard nutzen) – dann läuft die Seite im Development mit Turbopack.

11. **Build & Deployment**  
    Entscheiden:  
    - **SSR/SSG mit Node** (z. B. Vercel): beste SEO, Meta und Inhalt serverseitig.  
    - **Static Export** (`output: 'export'`): nur SSG, keine dynamischen Server-Routen; Meta und Inhalt sind trotzdem im vorab generierten HTML – SEO weiterhin „ordentlich“.

12. **Testen**  
    Alle URLs durchgehen, Meta-Tags im Quelltext prüfen („Rechte Maustaste → Seitenquelltext anzeigen“), Structured Data mit Google Rich Results Test prüfen, Sitemap prüfen.

---

## 7. Risiken & Aufwand

- **Aufwand:** Mittel bis hoch – fast alle Seiten und Komponenten müssen in die neue Struktur (App Router, ggf. Client/Server-Trennung) gebracht werden. Kein automatisches 1:1-Migrationstool.
- **Risiko:** Doppelte Pflege während der Umstellung, wenn man Vite und Next eine Zeit parallel nutzt. Klar definieren: Wann wird nur noch Next gebaut und deployed?
- **Vorteil:** Einmal migriert hast du Turbopack im Dev und SEO, die „ordentlich“ sichtbar ist (Meta und Inhalt im HTML), ohne dass Crawler JavaScript ausführen müssen.

---

## 8. Kurzfassung

- **„Turbopack-Seite“** sinnvoll umsetzbar durch **Migration zu Next.js** und Nutzung von **Turbopack** im Development.
- **SEO ordentlich sichtbar** durch **serverseitige Meta-Tags und Inhalte** (SSR oder SSG) statt rein clientseitigem Setzen per `SEOHead`/`useEffect`.
- Bestehende **URLs, NAP, Sitemap-Logik und Inhalte** können beibehalten werden; nur die technische Basis (Vite → Next.js, Routing, Meta-Handling) wechselt.
- Nächster Schritt nach Freigabe: Migration Schritt für Schritt gemäß Abschnitt 6 durchführen (dann mit konkreten Code- und Konfigurationsänderungen).

---

*Ende des Plans. Keine Code- oder Konfigurationsänderung in diesem Schritt.*
