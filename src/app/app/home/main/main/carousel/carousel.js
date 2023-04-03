var drewAPP = angular.module('andrewApp', []);

//drewAPP.directive('myDirective', function() {});
//drewAPP.factory('myService', function() {});
drewAPP.directive('owlme2', ['$timeout', function ($timeout) {
  return {
    restrict: 'AE',
    //templateUrl: '/mine/layoutgallery.html',
    link: function (scope, el, attrs) {
      scope.$watch('$last', function (n, o) {
        var options = scope.$eval($(el).attr('data-options'));
        $(el).owlCarousel(options);
        if (n) {
          $timeout(function () {

            scope.initCarousel(el.parent());
            /* data-options="{items:2}"*/
          });
        }
      });
    }
  };
}]);


drewAPP.directive('owlme', ['$timeout', function ($timeout) {
  return {
    restrict: 'AE',
    transclude: false,
    //templateUrl: '/mine/layoutgallery.html',
    link: function (scope, el, attrs) {
      scope.$watch('$last', function (n, o) {
        if (n) {
          $timeout(function () {
            initOwl();
          });
        }
      });
    }
  };
}]);

drewAPP.controller('drewCtrl', function ($scope, $timeout, $http, $window) {

  $scope.title = 'Making Owl: AngularJS Directive';
  $scope.gallery = [{
    "img": "https://source.unsplash.com/800x800/?lost"
  }, {
    "img": "https://source.unsplash.com/800x800/?lost"
  }, {
    "img": "https://source.unsplash.com/800x800/?found"
  }, {
    "img": "https://source.unsplash.com/800x800/?car"
  }, {
    "img": "https://source.unsplash.com/800x800/?love"
  }, {
    "img": "https://source.unsplash.com/800x800/?newyork"

  }];
  $scope.activeItem = null;

  $scope.doChangeBg = function (item) {
    $scope.activeItem = item.id;
  };


});


function initOwl() {
  // $(".gallery").owlCarousel({});
  $(".galleries").owlCarousel({
    autoplay: true,
    autoplayTimeout: 1000,
    autoplayHoverPause: true,
    nav: true,
    margin: 10,
    responsiveClass: true,
    responsive: {
      0: {
        items: 1,
        nav: true
      },
      600: {
        items: 3,
        nav: true
      },
      1000: {
        items: 5,
        nav: true,
        loop: true
      }
    }
  });
} /* Andrew Pougher code development: Beta testing purposes: ©2016*/
