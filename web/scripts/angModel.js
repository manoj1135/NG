var mainApp = angular.module("myModule",["ngRoute","720kb.datepicker", "ui.router"]);
mainApp.run(function($rootScope, $http){
    $rootScope.loggedInUserInfo = {};
});

mainApp.config(['$routeProvider','$locationProvider','$stateProvider',
    function($routeProvider, $locationProvider, $stateProvider) {
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

            $stateProvider.state("Users",{
                views:{
                    "moduleMainView":{
                        controller:"UserController",
                        templateUrl:"../pages/templates/Users.html",
                    }
                }
            })
        $locationProvider.html5Mode(true);
    }
]);

 mainApp.controller('loginController', loginController);
 mainApp.controller('homeController', homeController);

