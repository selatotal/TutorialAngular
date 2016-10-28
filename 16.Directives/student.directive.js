mainApp.directive('student', function() {

	var directive = {
		restrict: 'E',
		template: "Student: <b>{{student.name}}</b>, Roll No: <b>{{student.rollno}}</b>",
		scope: {
			student: "=name"
		},

		compile: function(element, attributes){
			element.css("border", "1px solid #cccccc");

			var linkFunction = function($scope, element, attributes) {
				element.html("Student: <b>" + $scope.student.name+"</b>, Roll No: <b>" + $scope.student.rollno + "</b><br/>");
				element.css("background-color", "#ff00ff");
			}
			return linkFunction;
		}
	};

	return directive;

});