'use strict';

describe('Controller: BoothsCtrl', function () {

  // load the controller's module
  beforeEach(module('confrontApp'));

  var BoothsCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    BoothsCtrl = $controller('BoothsCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
