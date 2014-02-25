'use strict';

angular.module('confrontApp')
	.controller('AgendaCtrl', function($scope, API, $http, Crudsvc) {
		$http.get(API + '/conferences')
			.success(function(data) {
				$scope.conferences = data;
			});

		$scope.$watch('conference', function() {
			if ($scope.conference) {
				$scope.friendlyAttr = 'name';

				var noun = 'conferences/' + $scope.conference.id + '/agendas';

				var definition = {
					name: '',
					date: ''
				};

				Crudsvc.setupScope($scope, noun, definition);
			}
		});
	});