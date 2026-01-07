# Portfolio Iris — Eleventy + Netlify CMS starter

Dit is een kleine starter voor een portfolio-website die makkelijk door een niet-techneut te vullen is via Netlify CMS.

Kenmerken
- Statische site gebouwd met Eleventy (11ty)
- Netlify CMS admin (git-backed) — beheer projecten, upload afbeeldingen
- Responsive grid, projectpagina's, eenvoudige lightbox
- Klaar om te deployen naar Netlify (gratis plan)

Snel starten (lokaal)
1. Installeer dependencies:
   npm install
2. Start dev server:
   npm run dev
3. Bouw:
   npm run build
4. Preview build:
   npm run serve

Deploy naar Netlify
1. Push deze repo naar GitHub.
2. Maak een nieuw site op https://netlify.com en connect je GitHub repo.
3. Stel build command in: `npm run build` en publish directory: `_site`
4. In Netlify dashboard: Ga naar Identity → Enable Identity.  
   Daarna Settings → Identity → Services → Git Gateway → Enable Git Gateway.
5. Open je site/admin/ om in te loggen en Netlify CMS te gebruiken (maak een account aan via Identity).

Netlify CMS media & repo grootte
- Standaard worden uploads opgeslagen in `src/assets/images` (d.w.z. in de repo). Voor veel en grote foto's kun je beter Cloudinary of Netlify Large Media gebruiken.

Als je wilt dat ik dit in jouw GitHub-repo zet, geef me toestemming om te pushen of maak de repo openbaar en zeg welke repo-naam ik moet gebruiken.  
