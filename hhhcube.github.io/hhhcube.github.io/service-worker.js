var dataCacheName = 'hwebtech';
//Fires when browser sees this service event for the first time
// Passing a promise to wait until it finds the length of the installation process
//If the promise fails this worker wont do anything else 
//If this happens you get another shot when you call SeviceWorker.register
self.addEventListener('install', function(e){
	console.log('[ServiceWorker] Install');
	e.waitUntil(
		//open the cache with caches.open() and provide a cache name.
		caches.create('hwebtech').then(function(cache){
			//console.log('[ServiceWorker] Caching app shell');
			//Unfortunately, cache.addAll() is atomic, if any of the files fail, the entire cache step will also fail!
			return cache.add({
				'/', 
  '/index.html',   '/scripts/app.js',   '/styles/inline.css'
			});
		
	
		})
	)
});