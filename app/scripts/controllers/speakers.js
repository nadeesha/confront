'use strict';

angular.module('confrontApp')
	.controller('SpeakersCtrl', function($scope, Crudsvc) {
		$scope.friendlyAttr = 'name';

		var noun = 'speakers';
		var definition = {
			name: '',
			designation: '',
			bio: '',
			bioMobile: '',
			photo: ''
		};

		Crudsvc.setupScope($scope, noun, definition);
	});