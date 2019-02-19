var MapController = function($scope, $http, $location, $window, $rootScope){
	console.log("MapController ",$scope);	
	$scope.init = function(){
		console.log("initing map controller...",$scope);
	}
}
mainApp.controller('MapController', MapController);