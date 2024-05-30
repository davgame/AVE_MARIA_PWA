// This is the "Offline page" service worker

importScripts('https://storage.googleapis.com/workbox-cdn/releases/5.1.2/workbox-sw.js');

const CACHE = "pwabuilder-page";

// TODO: replace the following with the correct offline fallback page i.e.: const offlineFallbackPage = "offline.html";
const urlsToCache = [
  "https://ave-maria-pwa.vercel.app/",
  "/src/assets/imgB.png",
  "/src/assets/imgA.png",
  "/src/assets/imgD.png",
  "/src/assets/BMW.png",
  "/src/assets/Wolkswagen.png",
  "/src/assets/Moto.png",
  "/src/assets/Kia.png",
  "/src/assets/imgD.png",
  "/src/assets/MiniWolks.png",
  "/src/images/ave.png",
  "/src/images/Ellipse7.png",
  "/src/images/Ellipse8.png",
  "/src/images/Ellipse9.png"
];

self.addEventListener('install', event => {
  console.log('[Service Worker] Installing');
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => {
        console.log('[Service Worker] Caching all: app shell and content');
        return cache.addAll(urlsToCache);
      })
  );
});

self.addEventListener('activate', event => {
  console.log('[Service Worker] Activating');
  const cacheWhitelist = [CACHE_NAME];
  event.waitUntil(
    caches.keys().then(cacheNames => {
      return Promise.all(
        cacheNames.map(cacheName => {
          if (cacheWhitelist.indexOf(cacheName) === -1) {
            console.log('[Service Worker] Deleting old cache:', cacheName);
            return caches.delete(cacheName);
          }
        })
      );
    })
  );
});

self.addEventListener('fetch', event => {
  console.log('[Service Worker] Fetching', event.request.url);
  if (event.request.destination === 'image') {
    event.respondWith(
      caches.match(event.request)
        .then(cachedResponse => {
          if (cachedResponse) {
            console.log('[Service Worker] Found in cache', event.request.url);
            return cachedResponse;
          }
          return caches.open(CACHE_NAME).then(cache => {
            return fetch(event.request).then(response => {
              if (!response || response.status !== 200 || response.type !== 'basic') {
                return response;
              }
              console.log('[Service Worker] Caching new resource', event.request.url);
              cache.put(event.request, response.clone());
              return response;
            });
          });
        })
    );
  } else {
    event.respondWith(
      caches.match(event.request)
        .then(response => {
          if (response) {
            console.log('[Service Worker] Found in cache', event.request.url);
            return response;
          }
          console.log('[Service Worker] Network request for', event.request.url);
          return fetch(event.request);
        })
    );
  }
});