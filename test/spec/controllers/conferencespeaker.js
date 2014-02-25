'use strict';

describe('Controller: ConferencespeakerCtrl', function () {

  // load the controller's module
  beforeEach(module('confrontApp'));

  var ConferencespeakerCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    ConferencespeakerCtrl = $controller('ConferencespeakerCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
