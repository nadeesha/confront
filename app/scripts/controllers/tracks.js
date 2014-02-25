'use strict';

angular.module('confrontApp')
	.controller('TracksCtrl', function($scope, $http, API, Crudsvc) {
		$http.get(API + '/conferences')
			.success(function(data) {
				$scope.conferences = data;
			});

		$scope.$watch('conference', function() {
			if ($scope.conference) {
				$scope.friendlyAttr = 'name';

				$http.get(API + '/conferences/' + $scope.conference.id + '/agendas')
					.success(function(data) {
						$scope.agendas = data;
					});
			}
		});

		$scope.$watch('agenda', function() {
			if ($scope.agenda) {
				$scope.friendlyAttr = 'name';

				var noun = 'conferences/' + $scope.conference.id + '/agendas/' + $scope.agenda.id + '/tracks';

				var definition = {
					name: ''
				};

				Crudsvc.setupScope($scope, noun, definition);
			}
		});
	});