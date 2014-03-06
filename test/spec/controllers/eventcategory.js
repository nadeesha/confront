'use strict';

describe('Controller: EventcategoryCtrl', function () {

  // load the controller's module
  beforeEach(module('confrontApp'));

  var EventcategoryCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    EventcategoryCtrl = $controller('EventcategoryCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
