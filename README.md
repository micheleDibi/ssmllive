# SSML Lamezia Terme — Digital Signage

App di digital signage per la **Scuola Superiore per Mediatori Linguistici** di Lamezia Terme.
Web app React ottimizzata per Smart TV (landscape 1920×1080 e portrait 1080×1920) con wrapper Android TV.

## Caratteristiche

- **10 slide** in rotazione automatica con transizioni animate
- **Layout responsivo**: versione orizzontale e verticale automatica
- **Globo 3D animato** di sfondo (libreria COBE)
- **Meteo in tempo reale** con geolocalizzazione
- **Orologio live** con data in italiano
- **QR code** per Google Maps e sito web
- **Calendario esami** A.A. 2024/25
- **Wake Lock API** per prevenire lo spegnimento dello schermo
- **Navigazione da tastiera** con frecce destra/sinistra

## Slide

1. Welcome — Logo, nome istituto, motto
2. La Nostra Missione — Chi siamo, valori
3. Corsi di Laurea — 5 indirizzi L-12
4. Campus — Indirizzo, contatti, orari, QR code
5. Calendario Esami — Sessioni e regole
6. Rete Nazionale — 50+ poli di orientamento
7. Partner e Accreditamenti — MUR, Erasmus+, ERSAF, ENBAS, ESAARCO
8. Ricerca e Innovazione — LifeComp, Mediazione Interculturale
9. Ultime Notizie — Feed notizie con date
10. Contattaci — Tutti i recapiti e QR code

## Tech Stack

- **React 18** + **TypeScript** + **Vite**
- **Tailwind CSS v4** per lo styling
- **Framer Motion** per le animazioni
- **COBE** per il globo 3D
- **qrcode.react** per i QR code
- **Open-Meteo API** per il meteo
- **Nominatim** per il reverse geocoding

## Setup

```bash
cd web
npm install
npm run dev
```

Il dev server si avvia su `http://localhost:5173`.

## Build di produzione

```bash
cd web
npm run build
npm run preview
```

L'output è in `web/dist/`, pronto per il deploy su qualsiasi hosting statico.

## Android TV Wrapper

La cartella `android/` contiene un progetto Android Studio con WebView fullscreen.

- Supporta orientamento landscape e portrait
- Fullscreen immersive mode
- Keep screen on
- Geolocalizzazione per il meteo
- Fallback offline su asset locali

Per buildare l'APK, aprire la cartella `android/` in Android Studio e fare Build > Generate Signed APK.

## Struttura progetto

```
ssmllive/
├── web/                          # React web app
│   ├── public/assets/            # Loghi, immagini, icone
│   ├── src/
│   │   ├── components/
│   │   │   ├── layout/           # Header, Footer, TVSafeArea, ProgressBar
│   │   │   ├── slides/           # Slide orizzontali (landscape)
│   │   │   ├── vertical/         # Layout e slide verticali (portrait)
│   │   │   ├── effects/          # Background animato, ticker
│   │   │   └── ui/               # Componenti riusabili
│   │   ├── config/               # Contenuti, tema, impostazioni
│   │   ├── hooks/                # useSlideshow, useClock, useWeather, useOrientation
│   │   └── styles/               # CSS globale
│   └── package.json
├── android/                      # Android TV wrapper APK
└── README.md
```

## Licenza

Progetto proprietario — SSML Lamezia Terme / Universo S.r.l.
