const CACHE_NAME = 'v1:cache';

let toCache = [
	'./',
	'./bundle.js'
];

self.addEventListener('install', event => {
	event.waitUntil(
		caches.open(CACHE_NAME)
			.then(cache => {
				console.log('Opened cache');
				return cache.addAll(toCache);
			})
	);
});

self.addEventListener('fetch', event => {
	event.respondWith(
		caches.match(event.request)
			.then(response => {
				if (response) {
				  return response;
				}
				return fetch(event.request);
			}
			)
	);
});