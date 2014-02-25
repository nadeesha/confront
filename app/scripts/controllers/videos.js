'use strict';

angular.module('confrontApp')
	.controller('VideosCtrl', function($scope, Crudsvc) {
		$scope.friendlyAttr = 'name';

		var noun = 'videos';
		var definition = {
			link: '',
			status: '',
			conferenceId: '',
			name: ''
		};

		Crudsvc.setupScope($scope, noun, definition);
	});