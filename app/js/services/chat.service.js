(function() {
	'use strict';

	angular.module('angularFireChat')
		.factory('ChatService', ChatService);

	ChatService.$inject = ['$firebaseArray'];

	function ChatService($firebaseArray) {
		var messagesRef = firebase.database().ref().child('message');
		var chat = {
			sendMessage: sendMessage,
			getMessages: getMessages,
			showMessages: showMessages
		};

		function getMessages() {
			return $firebaseArray(messagesRef);
		}

		function showMessages() {
			return $firebaseArray(messagesRef.limitToLast(15));
		}

		function sendMessage(message) {
			chat.getMessages().$add(message);
		}


		return chat;
	}
})();
