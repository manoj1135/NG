var loginController = function($scope, $http, $location, $window, $rootScope){
	$scope.errorMsg = "";
	$scope.successMsg = "";
	$scope.user = {
		userType:{
			id:"0"
		},
		userRole:{
			id:"0"
		}
	};
	$scope.userTypes = [
		{id:"0", name:"Select User Type"},
		{id:"1", name:"Administrator"},
		{id:"2", name:"Reg Admin"},
		{id:"3", name:"Reg User"},
	];
	$scope.roleTypes = [
		{id:"0", name:"Select User Role"},
		{id:"1", name:"Network Builder"},
		{id:"2", name:"Administrator"},
		{id:"3", name:"Provisioner"},
	];
	$scope.validateUser = function(){
		$http.post("/api/validateUser",{user:$scope.user})
			.then((resp)=>{
				resp = resp.data;
				$scope.errorMsg = "";
				if(resp.errorCode == "00000"){
					$rootScope.loggedInUserInfo = resp.data.user;
					$rootScope.userModules = resp.data.userModules;
					$location.path("/home");
				}else{
					$scope.errorMsg = resp.message;
				}
			}, (err)=>{
					$scope.errorMsg = "Unable to validate user.";
			});
	}
	$scope.forgotPassword = function(){
			$http.post("/api/forgotPassword",{user:$scope.user})
				.then((resp)=>{
						resp = resp.data;
						if(resp.errorCode == "00000"){
							$scope.successMsg = "Link successfully sent."
						}else{
							$scope.errorMsg = resp.message
						}
				}, (err)=>{
						$scope.errorMsg = "Unable to validate user.";
				});
	}
	$scope.resetPassword = function(){
		let user = $scope.user;
		let params = $location.search();
		if(user.password !== user.confirmPassword){
				$scope.errorMsg = "Passwords do not match."
				return;
		}
		$http.post("/api/resetPassword",{user, params})
			.then((resp)=>{
				resp = resp.data;
					if(resp.errorCode == "00000"){
						$scope.errorMsg = "";
						$scope.successMsg = "Password successfully changed. Please re-login.";
						$location.path("/");
						$location.replace();
					}else{
						$scope.successMsg = "";
						$scope.errorMsg = resp.message
					}
			}, (err)=>{
					$scope.errorMsg = "Unable to reset password";
			});
	}
	$scope.addUser = function(){
		let user = $scope.user;
		if(user.password !== user.confirmPassword){
				$scope.errorMsg = "Passwords do not match."
				return;
		}
		$http.post("/api/addUser",{user:$scope.user})
			.then((resp)=>{
				resp = resp.data;
					if(resp.errorCode == "00000"){
						$scope.successMsg = "User successfully added please login with credentials."
						$window.location.href="/";
					}else{
						$scope.errorMsg = resp.message
					}
			}, (err)=>{
					$scope.errorMsg = "Unable to validate user.";
			});
	}
}

var homeController = function($scope, $state, $stateParams, $http, $location, $window, $rootScope){
	
	$scope.toggleMenu = function() {
		$(".left").toggleClass("left-state-hover");
	}
	$scope.resetToHome = function() {
		$location.path("/home");
	}
	$scope.switchMenu = function (moduleName) {
		$state.go(moduleName);
	}
	$scope.openThisMenu = function(e){
		let target = $(e.target);
		target.addClass("openMenu");
	}
	$scope.closeThisMenu = function (e){
		let target = $(e.target);
		target.removeClass("openMenu");
	}
}

var UserController = function($scope, $http, $location, $window, $rootScope){
	console.log("UserController ",$scope);	
	$scope.init = function(){
		console.log("initing user controller...");
	}
}
