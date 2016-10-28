var mainApp = angular.module("mainApp", []);

mainApp.config(function($provide) {

	$provide.provider('MathService', function() {
		this.$get = function() {
			var factory = {};

			factory.multiply = function (a, b){
				return a * b;
			}

			return factory;
		}
	})

});

mainApp.value('defaultInput', 5);
