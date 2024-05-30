// This is the "Offline page" service worker

importScripts('https://storage.googleapis.com/workbox-cdn/releases/5.1.2/workbox-sw.js');

const CACHE = "pwabuilder-page";

// TODO: replace the following with the correct offline fallback page i.e.: const offlineFallbackPage = "offline.html";
const offlineFallbackPage = [
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

self.addEventListener('install', async (event) => {
  event.waitUntil(
    caches.open(CACHE)
      .then((cache) => cache.add(offlineFallbackPage))
  );
});

if (workbox.navigationPreload.isSupported()) {
  workbox.navigationPreload.enable();
}

self.addEventListener('fetch', (event) => {
  if (event.request.mode === 'navigate') {
    event.respondWith((async () => {
      try {
        const preloadResp = await event.preloadResponse;

        if (preloadResp) {
          return preloadResp;
        }

        const networkResp = await fetch(event.request);
        return networkResp;
      } catch (error) {

        const cache = await caches.open(CACHE);
        const cachedResp = await cache.match(offlineFallbackPage);
        return cachedResp;
      }
    })());
  }
});