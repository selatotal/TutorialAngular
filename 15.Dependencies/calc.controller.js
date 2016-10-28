mainApp.controller('CalcController', function($scope, CalcService, defaultInput){

	$scope.square = function(){
		$scope.number = defaultInput;
		$scope.result = CalcService.square($scope.number);
	}
});