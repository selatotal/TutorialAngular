var mainApp = angular.module("mainApp", ['ngRoute']);

mainApp.config(['$routeProvider', function($routeProvider){
	$routeProvider
	.when('/addStudent', {
		templateUrl: 'addStudent.html',
		controller: 'AddStudentController'
	})
	.when('/viewStudents', {
		templateUrl: 'viewStudents.html',
		controller: 'ViewStudentController'
	})
	.otherwise({
		redirectTo: "/addStudent"
	});
}]);
