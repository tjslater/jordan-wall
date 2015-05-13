'use strict';

angular.module('jordanWallApp')
    .config(function ($stateProvider) {
      $stateProvider
          .state('wall', {
            url: '/wall',
            templateUrl: 'app/wall/wall.html',
            controller: 'WallCtrl',
            resolve: {
              wall: function (wallFactory) {
                return wallFactory.fetch().then(function (data) {
                  return data;
                })
              }
            }
          })
          .state('wall.modal', {
            url: '/:id',
            views: {
              'modal': {
                templateUrl: 'app/wall/modal.html',
                controller: 'ModalCtrl',
                resolve: {
                  wall: function (wallFactory) {
                    return wallFactory.fetch().then(function (data) {
                      return data;
                    })
                  }
                }
              }
            }
          })
    });