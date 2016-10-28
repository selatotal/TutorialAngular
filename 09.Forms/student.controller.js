var mainApp = angular.module("mainApp", []);

mainApp.controller('studentController', function($scope){

	$scope.student = {
		firstName: "Tales",
		lastName: "Viegas",
		email: "a@a.com"
	}

	$scope.reset = function(){
		$scope.student.firstName = "";
		$scope.student.lastName = "";
		$scope.student.email = "";
	}

});
