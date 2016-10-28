var mainApp = angular.module("mainApp", []);

mainApp.controller('studentController', function($scope){

	$scope.student = {
		firstName: "Tales",
		lastName: "Viegas",

		fullName: function(){
			var studentObject = $scope.student;
			return studentObject.firstName + ' ' + studentObject.lastName;
		}
	}

});
