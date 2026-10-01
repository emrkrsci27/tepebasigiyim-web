// Basit çevrimdışı önbellek: sayfa kabuğu önbelleğe alınır, ağ varsa güncel içerik tercih edilir.
const CACHE = "tepebasi-v2";
const SHELL = ["./", "style.css", "main.js", "config.js", "manifest.webmanifest", "assets/favicon.png", "assets/logo.png", "assets/magaza-dis.jpg", "assets/icon-192.png", "assets/icon-512.png"];
self.addEventListener("install", (e) => { e.waitUntil(caches.open(CACHE).then((c) => c.addAll(SHELL)).then(() => self.skipWaiting())); });
self.addEventListener("activate", (e) => {
  e.waitUntil(caches.keys().then((ks) => Promise.all(ks.filter((k) => k !== CACHE).map((k) => caches.delete(k)))).then(() => self.clients.claim()));
});
self.addEventListener("fetch", (e) => {
  const r = e.request;
  if (r.method !== "GET" || new URL(r.url).origin !== location.origin) return;
  e.respondWith(fetch(r).then((res) => { const copy = res.clone(); caches.open(CACHE).then((c) => c.put(r, copy)); return res; }).catch(() => caches.match(r).then((m) => m || caches.match("./"))));
});
