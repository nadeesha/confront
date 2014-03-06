'use strict';

angular.module('confrontApp')
  .controller('EventcategoryCtrl', function ($scope, Crudsvc) {
    $scope.friendlyAttr = 'name';

    var noun = 'eventCategory';
    var definition = {
      name: ''
    };

    Crudsvc.setupScope($scope, noun, definition);
  });
