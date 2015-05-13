'use strict';

angular.module('jordanWallApp')
  .factory('wallFactory', function ($http, $resource) {

      var Wall = {};
      Wall.fetch = function(){
        return $http.get('../../assets/jordan.json').then(function(data){
          return data;
        })
      };
      return Wall;

  });
