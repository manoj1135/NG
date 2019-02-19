var mainApp = angular.module("myModule",["ngRoute","720kb.datepicker", "ui.router"]);
mainApp.run(function($rootScope, $http){
    $rootScope.loggedInUserInfo = {};
});

mainApp.config(['$routeProvider','$locationProvider','$stateProvider','$rootScopeProvider',
    function($routeProvider, $locationProvider, $stateProvider, $rootScopeProvider) {
        console.log("$stateProvider ",$stateProvider);
        $routeProvider.
            when('/', {
                templateUrl: '../pages/login.html',
                controller: 'loginController'
            }).
            when('/forgotPassword', {
                templateUrl: '../pages/forgotPassword.html',
                controller:'loginController'
            }).
            when('/resetPassword', {
                templateUrl: '../pages/resetPassword.html',
                controller:'loginController'
            }).
            when('/signUp', {
                templateUrl: '../pages/signUp.html',
                controller:'loginController'
            }).
            when('/home', {
                templateUrl: '../pages/home.html',
                controller:'homeController'
            }).
            otherwise({
                redirectTo: '/'
            });
            console.log("configuring state...",$rootScopeProvider);
            
            $stateProvider.state("users",{
                views:{
                    "moduleMainView":{
                        controller:"UserController",
                        templateUrl:"../pages/templates/Users.html",
                    }
                }
            });
            $stateProvider.state("maps",{
                views:{
                    "moduleMainView":{
                        controller:"MapController",
                        templateUrl:"../pages/templates/Maps.html",
                    }
                }
            });
        $locationProvider.html5Mode(true);
    }
]);

 mainApp.controller('loginController', loginController);
 mainApp.controller('homeController', homeController);