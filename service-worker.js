self.addEventListener("install", function (event) {
  event.waitUntil(
    caches.open("planeta-cache").then(function (cache) {
      return cache.addAll([
        "./",
        "orcamento.html",
        "garantia.html",
        "logo-nova.jpeg"
      ]);
    })
  );
});

self.addEventListener("fetch", function (event) {
  event.respondWith(
    caches.match(event.request).then(function (response) {
      return response || fetch(event.request);
    })
  );
});
