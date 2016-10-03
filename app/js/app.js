(function() {
	'use strict';

	// Initialize Firebase
	var config = {
	  apiKey: "AIzaSyAelmIAU5wjqgbx6Q10Q1i-YZIrSSNLg8s",
	  authDomain: "angularfire-1ea99.firebaseapp.com",
	  databaseURL: "https://angularfire-1ea99.firebaseio.com",
	  storageBucket: "angularfire-1ea99.appspot.com",
	  messagingSenderId: "537403805304"
	};
	firebase.initializeApp(config);

	angular.module('angularFireChat', []);
})();
