// Service Worker — Trésor JCF
const CACHE_NAME = 'tresor-jcf-v1';
const CORE_ASSETS = [
  './', './index.html', './manifest.json',
  './icon-192.png', './icon-512.png', './apple-touch-icon.png'
];
self.addEventListener('install', (event) => {
  self.skipWaiting();
  event.waitUntil(caches.open(CACHE_NAME).then((cache) => cache.addAll(CORE_ASSETS)).catch(() => {}));
});
self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((keys) => Promise.all(keys.filter((key) => key !== CACHE_NAME).map((key) => caches.delete(key))))
  );
  self.clients.claim();
});
self.addEventListener('fetch', (event) => {
  if (event.request.method !== 'GET') return;
  event.respondWith(
    fetch(event.request)
      .then((res) => { const c = res.clone(); caches.open(CACHE_NAME).then((cache) => cache.put(event.request, c)); return res; })
      .catch(() => caches.match(event.request).then((cached) => cached || caches.match('./index.html')))
  );
});
