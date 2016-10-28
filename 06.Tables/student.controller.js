var mainApp = angular.module("mainApp", []);

mainApp.controller('studentController', function($scope){

	$scope.student = {
		firstName: "Tales",
		lastName: "Viegas",
		fees: 500,

		subjects: [
			{ name: 'Física', marks: 70 },
			{ name: 'Química', marks: 80 },
			{ name: 'Matemática', marks: 65 }
		],

		fullName: function(){
			var studentObject = $scope.student;
			return studentObject.firstName + ' ' + studentObject.lastName;
		}
	}

});
