'use strict';

describe('Service: Ajenda', function () {

  // load the service's module
  beforeEach(module('confrontApp'));

  // instantiate service
  var Ajenda;
  beforeEach(inject(function (_Ajenda_) {
    Ajenda = _Ajenda_;
  }));

  it('should do something', function () {
    expect(!!Ajenda).toBe(true);
  });

});
