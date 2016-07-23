(function(){//Name controller
	var app = angular.module('hwebtech', [ ]);
	//First, we need to check if the browser supports service workers, and if it does, register the service worker.
	if('serviceworker' in navigator){
		navigator.serviceWorker
			.register('./service-worker.js')
			.then(function() { console.log('Service Worker Registered'); });
	}//When the service worker is registered, an install event is triggered the first time the user visits the page. 
		
	// Now we cache all the assets that are needed for the application.
	
})();