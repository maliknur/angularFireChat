(function() {
	'use strict';

	angular.module('angularFireChat')
		.controller('chatCtrl', [chatController]);

	chatController.$inject = ['ChatService'];

	function chatController(ChatService) {
		var vm = this;
		vm.title = 'Welcome to Angular Chat!!!';
		vm.sendMessage = sendMessage;

		function sendMessage() {
			var message = {
				text: vm.newMessage
			};

			ChatService.sendMessage(message);
		}
	}
})();
