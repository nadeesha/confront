'use strict';

angular.module('confrontApp')
	.controller('EventspeakerCtrl', function($scope, Associatesvc) {
		$scope.meta = {
			parentEntity: 'speakers',
			parentEntityIdProperty: 'speakerId',
			childEntity: 'events',
			childEntityIdProperty: 'eventId',
			childEntityFriendlyAttr: 'title',
			familyEntity: 'speakerEvent'
		};

		Associatesvc.setUpScope($scope);
	});