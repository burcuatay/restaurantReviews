const cacheName = "restaurant-reviews-v1.0";

const urlsToCache = [
  '/Restaurant-Reviews//',
  '/Restaurant-Reviews/css/styles.css',
  '/Restaurant-Reviews/data/restaurants.json',
  '/Restaurant-Reviews/img/1.jpg',
  '/Restaurant-Reviews/img/2.jpg',
  '/Restaurant-Reviews/img/3.jpg',
  '/Restaurant-Reviews/img/4.jpg',
  '/Restaurant-Reviews/img/5.jpg',
  '/Restaurant-Reviews/img/6.jpg',
  '/Restaurant-Reviews/img/7.jpg',
  '/Restaurant-Reviews/img/8.jpg',
  '/Restaurant-Reviews/img/9.jpg',
  '/Restaurant-Reviews/img/10.jpg',
  '/Restaurant-Reviews/img/1small.jpg',
  '/Restaurant-Reviews/img/2small.jpg',
  '/Restaurant-Reviews/img/3small.jpg',
  '/Restaurant-Reviews/img/4small.jpg',
  '/Restaurant-Reviews/img/5small.jpg',
  '/Restaurant-Reviews/img/6small.jpg',
  '/Restaurant-Reviews/img/7small.jpg',
  '/Restaurant-Reviews/img/8small.jpg',
  '/Restaurant-Reviews/img/9small.jpg',
  '/Restaurant-Reviews/img/10small.jpg',
  '/Restaurant-Reviews/js/dbhelper.js',
  '/Restaurant-Reviews/js/main.js',
  '/Restaurant-Reviews/js/restaurant_info.js'
];

// caching the files after installing sw
self.addEventListener('install', function(event) {
  event.waitUntil(
    caches.open(cacheName).then(function(cache) {
      return cache.addAll(urlsToCache);
    })
  );
});

// Respond from the cache when needed
self.addEventListener('fetch', function(event) {
  event.respondWith(
    caches.match(event.request).then(function(response) {
      if (response) {return response;}
      else {return fetch(event.request);}
    })
  );
});
