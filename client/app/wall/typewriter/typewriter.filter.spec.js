'use strict';

describe('Filter: typewriter', function () {

  // load the filter's module
  beforeEach(module('jordanWallApp'));

  // initialize a new instance of the filter before each test
  var typewriter;
  beforeEach(inject(function ($filter) {
    typewriter = $filter('typewriter');
  }));

  it('should return the input prefixed with "typewriter filter:"', function () {
    var text = 'angularjs';
    expect(typewriter(text)).toBe('typewriter filter: ' + text);
  });

});
