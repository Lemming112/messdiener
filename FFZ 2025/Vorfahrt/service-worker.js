self.addEventListener("install", (event) => {
    event.waitUntil(
        caches.open("jeopardy-cache").then((cache) => {
            return cache.addAll([
                "/", // Startseite
                "/index.html", // Deine Hauptdatei
                "/manifest.json",
                "/service-worker.js",
                "/static/1730074337/favicon.ico" // Favicon
            ]);
        })
    );
});
