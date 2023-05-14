const CACHE = "MY_FIRST_APP";
const URL_CACHES = ["index.html", "offline.html"];
this.addEventListener("install", (event) => {
  event.waitUnitl(
    caches.open(CACHE).then(function (cache) {
      cache.addAll(URL_CACHES);
    })
  );
});

this.addEventListener("fetch", (e) => {
  e.respondWith(
    caches.match(e.request).then((rep) => {
      return fetch(e.request).catch(() => {
        caches.match("offline.html");
      });
    })
  );
});

this.addEventListener("activate", (e) => {
  const cacheWhiteList = [];
  cacheWhiteList.push(CACHE);
});
