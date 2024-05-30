// This is the "Offline page" service worker

importScripts('https://storage.googleapis.com/workbox-cdn/releases/5.1.2/workbox-sw.js');

const CACHE = "pwabuilder-page";

// TODO: replace the following with the correct offline fallback page i.e.: const offlineFallbackPage = "offline.html";
const initCache = () => {
    return caches.open(CacheKey).then((cache) => {
      return cache.addAll[
    "https://ave-maria-pwa.vercel.app/",
    "./src/assets/imgB.png",
    "./src/assets/imgA.png",
    "./src/assets/imgD.png",
    "/src/assets/BMW.png",
    "./src/assets/Wolkswagen.png",
    "./src/assets/Moto.png",
    "/src/assets/Kia.png",
    "/src/assets/imgD.png",
    "/src/assets/MiniWolks.png",
    "/src/images/ave.png",
    "/src/images/Ellipse7.png",
    "./public/Ellipse8.png",
    "/src/images/Ellipse9.png"
  ];
  }, (error) => {
    console.log(error)
  }
)};

const tryNetwork = (req, timeout) => {
  console.log(req)
return new Promise((resolve, reject) => {
  const timeoutId = setTimeout(reject, timeout);
  fetch(req).then((res) => {
    clearTimeout(timeoutId);
    const responseClone = res.clone();
    caches.open(CacheKey).then((cache) => {
      cache.put(req, responseClone)
    })
    resolve(res);
    // Reject also if network fetch rejects.
  }, reject);
});
};

const getFromCache = (req) => {
console.log('network is off so getting from cache...')
return caches.open(CacheKey).then((cache) => {
  return cache.match(req).then((result) => {
    return result || Promise.reject("no-match");
  });
});
};

self.addEventListener("install", (e) => {
console.log("Installed");
e.waitUntil(initCache());
});

self.addEventListener('activate', (e) => {
e.waitUntil(
  caches.keys().then((keyList) => {
    return Promise.all(keyList.map((key) => {
      if (key !== CacheKey) {
        return caches.delete(key);
      }
    }));
  })
);
});

self.addEventListener("fetch", (e) => {
console.log("Try network and store result or get data from cache");
// Try network and if it fails, go for the cached copy.
e.respondWith(tryNetwork(e.request, 400).catch(() => getFromCache(e.request)));
});