'use strict';

angular.module('confrontApp')
	.controller('LoginCtrl', function($scope, OAUTH_ENDPOINT, $cookies, $http) {
		$scope.login = function(u, p) {
			$http({
				method: 'POST',
				url: OAUTH_ENDPOINT,
				data: {
					grant_type: 'password', /* jshint ignore: line */
					username: u,
					password: p,
					scope: 'PRODUCTION'
				}
			}).success(function (data) {
				$cookies.token = data;
			})
		};
	});