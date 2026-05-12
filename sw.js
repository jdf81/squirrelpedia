// Squirrelpedia Service Worker
const CACHE_NAME = "squirrelpedia-v2";
const CORE = [
  "./",
  "./index.html",
  "./app.js",
  "./data.js",
  "./svg-art.js",
  "./manifest.json",
  "./icon-180.png",
  "./icon-192.png",
  "./icon-512.png",
];

self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => cache.addAll(CORE)).catch(() => {})
  );
  self.skipWaiting();
});

self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches.keys().then((keys) =>
      Promise.all(keys.filter((k) => k !== CACHE_NAME).map((k) => caches.delete(k)))
    )
  );
  self.clients.claim();
});

// Cache-first for core files, network-first then cache for images
self.addEventListener("fetch", (event) => {
  const req = event.request;
  if (req.method !== "GET") return;

  const url = new URL(req.url);

  // Wikimedia images: cache after first fetch
  if (url.hostname.includes("wikimedia.org") || url.hostname.includes("wikipedia.org")) {
    event.respondWith(
      caches.open(CACHE_NAME).then(async (cache) => {
        const cached = await cache.match(req);
        if (cached) return cached;
        try {
          const fresh = await fetch(req, { mode: "no-cors" });
          // Only cache opaque/ok responses
          cache.put(req, fresh.clone()).catch(() => {});
          return fresh;
        } catch (e) {
          return cached || new Response("", { status: 504 });
        }
      })
    );
    return;
  }

  // Google Fonts: cache after first fetch
  if (url.hostname.includes("fonts.googleapis.com") || url.hostname.includes("fonts.gstatic.com")) {
    event.respondWith(
      caches.open(CACHE_NAME).then(async (cache) => {
        const cached = await cache.match(req);
        if (cached) return cached;
        try {
          const fresh = await fetch(req);
          cache.put(req, fresh.clone()).catch(() => {});
          return fresh;
        } catch (e) {
          return cached || new Response("", { status: 504 });
        }
      })
    );
    return;
  }

  // Same-origin: cache-first with network fallback
  event.respondWith(
    caches.match(req).then((cached) => {
      if (cached) return cached;
      return fetch(req)
        .then((res) => {
          if (res && res.status === 200 && res.type === "basic") {
            const clone = res.clone();
            caches.open(CACHE_NAME).then((cache) => cache.put(req, clone));
          }
          return res;
        })
        .catch(() => caches.match("./index.html"));
    })
  );
});
