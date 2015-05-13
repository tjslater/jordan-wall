'use strict';

angular.module('jordanWallApp')
    .directive('wallSegment', function ($timeout) {
      return {
        templateUrl: 'app/wall/wall-segment/wall-segment/wall-segment.html',
        restrict: 'EA',
        scope: {
          segments: "="
        },
        link: function (scope, element, attrs) {

          var segment = undefined;
          var randomNumber = null;
          var time = null;

          var animations = [
            "fadeInUp",
              "fadeInDown",
            "fadeIn",
            "fadeInRight",
            "fadeInLeft"

          ];
          var backgroundClasses = [
              "green",
              "red",
              "yellow",
              "blue"
          ];

          scope.segment = undefined;
          var getRandomNumber = function (string) {
            var num = 0;
            switch (string) {
              case "time":
                num = Math.floor(Math.random() * 5000) + 5000;
                break;
              case "segment":
                num = Math.floor(Math.random() * scope.segments.length);
                break;
              case "animation":
                num = Math.floor(Math.random() * animations.length);
                break;
              case "backgroundColor":
                num = Math.floor(Math.random() * backgroundClasses.length)

            }
            return num;
          };

          var getRandomSegment = function () {
            randomNumber = getRandomNumber("segment");
            segment = scope.segments[randomNumber];
            scope.idx = randomNumber;
            segment.animation = animations[getRandomNumber("animation")];
            segment.backgroundClass = backgroundClasses[getRandomNumber("backgroundColor")]
            return segment;
          };

          var timedSegment = function () {
            time = typeof scope.segment === "undefined" ? 0 : getRandomNumber("time");
            scope.segment = getRandomSegment();
            $timeout(function () {
              timedSegment();
            }, time);
          };
          timedSegment();
        }
      };
    });