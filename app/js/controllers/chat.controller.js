(function() {
	'use strict';

	angular.module('angularFireChat')
		.controller('chatCtrl', [chatController]);

	function chatController() {
		var vm = this;
		vm.title = 'Welcome to Angular Chat!!!';
	}
})();
