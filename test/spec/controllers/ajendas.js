'use strict';

describe('Controller: AjendasCtrl', function () {

  // load the controller's module
  beforeEach(module('confrontApp'));

  var AjendasCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    AjendasCtrl = $controller('AjendasCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
