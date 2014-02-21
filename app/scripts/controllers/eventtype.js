'use strict';

angular.module('confrontApp')
	.controller('EventtypeCtrl', function($scope, Crudsvc) {
		$scope.friendlyAttr = 'name';

		var noun = 'eventTypes';
		var definition = {
			name: ''
		};

		Crudsvc.setupScope($scope, noun, definition);
	});