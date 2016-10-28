mainApp.controller('CalcController', function($scope, CalcService){

	$scope.square = function(){
		$scope.result = CalcService.square($scope.number);
	}
});