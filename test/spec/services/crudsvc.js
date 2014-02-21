'use strict';

describe('Service: Crudsvc', function () {

  // load the service's module
  beforeEach(module('confrontApp'));

  // instantiate service
  var Crudsvc;
  beforeEach(inject(function (_Crudsvc_) {
    Crudsvc = _Crudsvc_;
  }));

  it('should do something', function () {
    expect(!!Crudsvc).toBe(true);
  });

});
