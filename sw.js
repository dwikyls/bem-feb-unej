var cacheName = 'hello-world-page';
var filesToCache = [
  '/',
  '/index.html',
  '/assets/css/main.css',
  '/pages/visi-misi.html',
  '/pages/struktur.html',
  '/pages/sekben.html',
  '/pages/home.html',
  '/pages/galeri.html',
  '/pages/departemen.html',
  '/pages/contact.html',
  '/pages/biro.html',
  '/pages/arah-kebijakan.html',
  '/pages/advo-info.html',
  '/js/nav.js',
  '/js/transition.js',
  '/js/youtube.js',
  '/img/',
  '/img/SELAMAT-DATANG.png',
  '/img/STRUKTUR.png',
  '/img/advo-info/APRIL-MagangKemenkeu/',
  '/img/advo-info/Feb-Magang-Industri/',
  '/img/advo-info/JULI-SEPUTAR-MAGANG/',
  '/img/advo-info/JUNI-Program-Magang/',
  '/img/advo-info/MEI-Paid-Internship/',
  '/img/biro/',
  '/img/galeri/'
];
self.addEventListener('install', function (e) {
  console.log('[ServiceWorker] Install');
  e.waitUntil(
    caches.open(cacheName).then(function (cache) {
      console.log('[ServiceWorker] Caching app shell');
      return cache.addAll(filesToCache);
    })
  );
});
self.addEventListener('activate', event => {
  event.waitUntil(self.clients.claim());
});
self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request, { ignoreSearch: true }).then(response => {
      return response || fetch(event.request);
    })
  );
});