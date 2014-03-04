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
				},
				headers: {
					'Authorization': 'Basic OEE1dDQ4YmRxNHVVbDh5bms4S0FURWNBOWJ3YTpFaGZQUllCRG12WnlmYTYyVmxBQ01oZ0FGMWth',
					'Content-Type': 'application/x-www-form-urlencoded'
				}
			}).success(function (data) {
				console.log(data);
				$cookies.token = data;
			}).error(function (data) {
				console.log('error logging in!');
				console.log(data);
			})
		};
	});