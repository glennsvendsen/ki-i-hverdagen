# KI i hverdagen – nettside

Ren statisk side (HTML, CSS og litt JavaScript). Ingen bygging, ingen avhengigheter, ingen kostnad.

## Før du publiserer
1. Åpne `js/main.js` og fyll inn `email`, `phone` og `phoneHref` øverst. Det er det eneste stedet kontaktinfo ligger.
2. Fyll inn organisasjonsnummer og adresse i `personvern.html` når enkeltpersonforetaket er registrert.
3. Portrettbildet ligger i `img/glenn.jpg`. Bytt det ut ved behov (kvadratisk, ca. 640 px).
4. Hvis repoet ikke heter `ki-i-hverdagen`: bytt URL i `index.html` (canonical og og:), `robots.txt` og `sitemap.xml`.

## Publisere på GitHub Pages
Fra mappen `nettside`:

```bash
git init -b main
git add .
git commit -m "Første versjon av nettsiden"
gh repo create ki-i-hverdagen --public --source=. --push
gh api -X POST repos/glennsvendsen/ki-i-hverdagen/pages -f "source[branch]=main" -f "source[path]=/"
```

Siden ligger da på `https://glennsvendsen.github.io/ki-i-hverdagen/` etter noen minutter.
(Vil du ha den på selve `https://glennsvendsen.github.io/`, kall repoet `glennsvendsen.github.io`.)

## Eget domene senere
Legg domenet under Settings → Pages → Custom domain, og lag en `CNAME`-fil. Oppdater deretter URL-ene nevnt i punkt 4.

## Besøksstatistikk (valgfritt, senere)
Bruk et verktøy uten informasjonskapsler, for eksempel Cloudflare Web Analytics eller Plausible. Da trenger du ikke cookiebanner, men oppdater `personvern.html`.

## Henvendelser
Skjemaet åpner e-postprogrammet med ferdig utfylt melding (`mailto:`). Det er enklest og lagrer ingenting. Vil du ha et ekte skjema senere, kan Supabase eller Formspree kobles på.
