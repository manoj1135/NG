var UserService = angular.module('UserService', []).factory('Users', ['$http', function($http) {
  return {
// call to get all nerds
          get : function() {
              return $http.get('/api/allUsers');
          },
// these will work when more API routes are defined on the Node side of things
// call to POST and create a new nerd
          create : function(userData) {
              return $http.post('/api/addUser', userData);
          },

// call to DELETE a nerd
          delete : function(id) {
              return $http.delete('/api/getUser/' + id);
          }
      }
  }]);
