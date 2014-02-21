'use strict';

describe('Service: Modelsvc', function () {

  // load the service's module
  beforeEach(module('confrontApp'));

  // instantiate service
  var Modelsvc;
  beforeEach(inject(function (_Modelsvc_) {
    Modelsvc = _Modelsvc_;
  }));

  it('should do something', function () {
    expect(!!Modelsvc).toBe(true);
  });

});
