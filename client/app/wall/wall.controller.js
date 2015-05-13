'use strict';

angular.module('jordanWallApp')
    .controller('WallCtrl', function ($scope, wall) {
      $scope.segments = wall.data;


    });
