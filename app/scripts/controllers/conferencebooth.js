'use strict';

angular.module('confrontApp')
  .controller('ConferenceboothCtrl', function($scope, Associatesvc) {
		$scope.meta = {
			parentEntity: 'conferences',
			parentEntityIdProperty: 'conferenceId',
			childEntity: 'booths',
			childEntityIdProperty: 'boothId',
			familyEntity: 'conferenceBooth'
		};

		Associatesvc.setUpScope($scope);
	});
