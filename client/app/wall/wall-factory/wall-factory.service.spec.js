'use strict';

describe('Service: wallFactory', function () {

  // load the service's module
  beforeEach(module('jordanWallApp'));

  // instantiate service
  var wallFactory;
  beforeEach(inject(function (_wallFactory_) {
    wallFactory = _wallFactory_;
  }));

  it('should do something', function () {
    expect(!!wallFactory).toBe(true);
  });

});
