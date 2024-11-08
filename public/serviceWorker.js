const CACHE_NAME = 'main-cache-v1';
const urlsToCache = [
    '/assets/img/catMain.png',
    '/assets/img/background.png',
    '/assets/img/sun.png',
    '/assets/gif/clouds.gif',
    '/assets/gif/cat.gif',
];

// eslint-disable-next-line no-restricted-globals
self.addEventListener('install', (event) => {
    event.waitUntil(
        caches.open(CACHE_NAME).then((cache) => cache.addAll(urlsToCache))
    );
});

// eslint-disable-next-line no-restricted-globals
self.addEventListener('fetch', (event) => {
    event.respondWith(
        caches.match(event.request).then((response) => response || fetch(event.request))
    );
});
