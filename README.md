# Squirrelpedia

A Progressive Web App field guide to every type of squirrel on Earth — living, extinct, and prehistoric — organized by continent.

## Contents

- `index.html` — the app
- `app.js` — UI logic, modal, search, tabs
- `data.js` — the squirrel database (90+ species across 7 regions)
- `sw.js` — service worker for offline caching
- `manifest.json` — PWA manifest
- `icon-180.png`, `icon-192.png`, `icon-512.png`, plus maskable variants

## Running locally

A service worker requires a real HTTP server (it will not work from `file://`).

From this folder, run one of:

```bash
python3 -m http.server 8000
# or
npx serve .
```

Then open `http://localhost:8000` in your browser.

## Installing on iOS (iPhone / iPad)

1. Open the site in **Safari** (Chrome on iOS will not install PWAs).
2. Tap the **Share** button (the square with an upward arrow).
3. Scroll down and tap **"Add to Home Screen"**.
4. Tap **Add**. The app's icon appears on your home screen.
5. Launch from the home screen — it runs full-screen, no browser chrome.

A small banner inside the app will remind you of these steps on first visit.

## Installing on Android / desktop Chrome

The browser will offer an "Install app" prompt automatically, or you can use the install icon in the address bar.

## Offline behavior

After the first visit:

- All HTML, CSS, JS, and icons are cached and work offline.
- Squirrel images (from Wikimedia Commons) are cached as you view them.
- The full app works without a network connection once everything has been loaded once.

## Notes on the data

- Population estimates ("Estimated to be alive") are qualitative where reliable counts are not available — IUCN typically does not report absolute totals for common species.
- Lifespans are typical wild ranges; captive figures are noted where relevant.
- The "Friendliness to humans" rating is a casual 0–5 scale based on typical wild behavior.
- Prehistoric / extinct species do not have photographs; an illustrative placeholder image is shown.
- Australia & Oceania has no native squirrels. Antarctica has none, living or fossil.
