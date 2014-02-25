'use strict';

describe('Service: Associatesvc', function () {

  // load the service's module
  beforeEach(module('confrontApp'));

  // instantiate service
  var Associatesvc;
  beforeEach(inject(function (_Associatesvc_) {
    Associatesvc = _Associatesvc_;
  }));

  it('should do something', function () {
    expect(!!Associatesvc).toBe(true);
  });

});
