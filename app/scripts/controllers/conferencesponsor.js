'use strict';

angular.module('confrontApp')
	.controller('ConferencesponsorCtrl', function($scope, Associatesvc) {
		$scope.meta = {
			parentEntity: 'conferences',
			parentEntityIdProperty: 'conferenceId',
			childEntity: 'sponsors',
			childEntityIdProperty: 'sponsorId',
			familyEntity: 'conferenceSponsor'
		};

		Associatesvc.setUpScope($scope);
	});