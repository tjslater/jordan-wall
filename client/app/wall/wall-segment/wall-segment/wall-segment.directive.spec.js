'use strict';

describe('Directive: wallSegment', function () {

  // load the directive's module and view
  beforeEach(module('jordanWallApp'));
  beforeEach(module('app/wall/wall-segment/wall-segment/wall-segment.html'));

  var element, scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<wall-segment></wall-segment>');
    element = $compile(element)(scope);
    scope.$apply();
    expect(element.text()).toBe('this is the wallSegment directive');
  }));
});