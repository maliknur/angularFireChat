(function() {
	'use strict';

	angular.module('angularFireChat')
		.factory('ChatService', [ChatService]);

	ChatService.$inject = ['firebase'];

	function ChatService(firebase) {
		var messagesRed = firebase.database().ref().child('message');
		var chat = {
			sendMessage: sendMessage,
		};

		function sendMessage(message) {

		}

		return chat;
	}
})();
