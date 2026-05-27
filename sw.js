const CACHE_NAME = 'lubicz-v3';
const ASSETS = [
  'index.html',
  'manifest.json',
  'Logo XXI LDH.png'
];

// Instalacja i zapisywanie plików w pamięci podręcznej
self.addEventListener('install', e => {
  e.waitUntil(
    caches.open(CACHE_NAME).then(cache => cache.addAll(ASSETS))
  );
});

// Serwowanie plików z pamięci podręcznej, gdy brak sieci
self.addEventListener('fetch', e => {
  e.respondWith(
    caches.match(e.request).then(response => response || fetch(e.request))
  );
});