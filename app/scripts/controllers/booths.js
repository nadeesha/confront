'use strict';

angular.module('confrontApp')
	.controller('BoothsCtrl', function($scope, Crudsvc) {
		$scope.friendlyAttr = 'name';

		var noun = 'booths';
		
		var definition = {
			name: '',
			logo: '',
			links: ''
		};

		Crudsvc.setupScope($scope, noun, definition);
	});