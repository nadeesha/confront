'use strict';

angular.module('confrontApp')
	.controller('ConferencesCtrl', function($scope, Crudsvc) {
		$scope.friendlyAttr = 'name';

		var noun = 'conferences';
		var definition = {
			name: '',
			startDate: '',
			endDate: '',
			location: '',
			logo: ''
		};

		Crudsvc.setupScope($scope, noun, definition);
	});