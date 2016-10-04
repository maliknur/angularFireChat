(function() {
	'use strict';
	angular.module('angularFireChat')
		.directive('enterSender', enterSender);

	function enterSender() {
		var directive = {
			restrict: 'A',
			link: link
		};

		function link(scope, element, attrs) {
			element.bind('keydown keypress', function(event) {
				if (event.which === 13) {
					scope.$apply(function() {
						scope.$eval(attrs.enterSender);
					});
					event.preventDefault();
				}
			});
		}
		return directive;
	}
})();
