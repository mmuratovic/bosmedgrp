'use strict';
var bmgControllers = angular.module('bmgControllers');

bmgControllers.controller('MainController',['$scope', '$http', '$window', '$state', function($scope, $http, $window, $state){
	
    $scope.test = "Home of the world news";
    
    $scope.loadRoute = function(state){
    	$state.go(state);
    };
   
}]);
