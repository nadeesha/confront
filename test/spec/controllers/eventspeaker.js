'use strict';

describe('Controller: EventspeakerCtrl', function () {

  // load the controller's module
  beforeEach(module('confrontApp'));

  var EventspeakerCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    EventspeakerCtrl = $controller('EventspeakerCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
