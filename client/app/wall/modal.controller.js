'use strict';

angular.module('jordanWallApp')
    .controller('ModalCtrl', function ($scope, wall, $state, $window) {
      $scope.segment = wall.data[$state.params.id];
      $scope.goBack = function(){
        $window.history.back();
      }


    });
