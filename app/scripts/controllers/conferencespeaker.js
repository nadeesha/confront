'use strict';

angular.module('confrontApp')
  .controller('ConferencespeakerCtrl', function($scope, Associatesvc) {
		$scope.meta = {
			parentEntity: 'conferences',
			parentEntityIdProperty: 'conferenceId',
			childEntity: 'speakers',
			childEntityIdProperty: 'speakerId',
			familyEntity: 'conferenceSpeaker'
		};

		Associatesvc.setUpScope($scope);
	});