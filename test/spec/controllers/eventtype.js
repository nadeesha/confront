'use strict';

describe('Controller: EventtypeCtrl', function () {

  // load the controller's module
  beforeEach(module('confrontApp'));

  var EventtypeCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    EventtypeCtrl = $controller('EventtypeCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
