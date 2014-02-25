'use strict';

angular.module('confrontApp')
	.controller('EventsCtrl', function($scope, $http, API, Crudsvc) {
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
				$http.get(API + '/conferences/' + $scope.conference.id + '/agendas/' + $scope.agenda.id + '/tracks')
					.success(function(data) {
						$scope.tracks = data;
					});
			}
		});

		$scope.$watch('track', function() {
			if ($scope.track) {
				$scope.friendlyAttr = 'title';

				var noun = 'conferences/' + $scope.conference.id + '/agendas/' + $scope.agenda.id +
					'/tracks/' + $scope.track.id + '/events';

				var definition = {
					title: '',
					description: '',
					venue: '',
					eventTypeId: '',
					fromDateTime: '',
					toDateTime: '',
					isCrossTrack: ''
				};

				Crudsvc.setupScope($scope, noun, definition);
			}
		});
	});