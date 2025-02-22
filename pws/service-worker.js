// service-worker.js
self.addEventListener('install', (event) => {
    event.waitUntil(
        caches.open('messdiener-cache').then((cache) => {
            return cache.addAll([
                '/', // Root der App
                '/index.html', // Hauptseite
                '/manifest.json', // PWA Manifest
                '/styles.css', // Falls vorhanden
                '/script.js', // Falls vorhanden
                '/icon-192.png', // App-Icon
                '/icon-512.png'  // Großes App-Icon
            ]);
        })
    );
});

self.addEventListener('fetch', (event) => {
    event.respondWith(
        caches.match(event.request).then((response) => {
            return response || fetch(event.request);
        })
    );
});