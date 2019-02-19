var UserController = function($scope, $http, $location, $window, $rootScope){
	console.log("UserController ",$scope);	
	$scope.init = function(){
		console.log("initing user controller...",$scope);
	}
}
mainApp.controller('UserController', UserController);