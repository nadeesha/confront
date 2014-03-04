'use strict';

angular.module('confrontApp')
  .controller('MainCtrl', function ($scope, $cookies) {
  	$scope.token = $cookies.token;

    $scope.saveToken = function (token) {
    	$cookies.token = token;
    }
});
