'use strict';

angular.module('confrontApp')
	.controller('SponsorsCtrl', function($scope, Crudsvc) {
		$scope.friendlyAttr = 'name';

		var noun = 'sponsors';
		var definition = {
			name: '',
			logo: '',
			links: ''
		};

		Crudsvc.setupScope($scope, noun, definition);
	});