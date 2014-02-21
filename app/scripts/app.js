'use strict';

angular.module('confrontApp', [
  'ngCookies',
  'ngResource',
  'ngSanitize',
  'ngRoute'
])
  .config(function($routeProvider, $httpProvider) {
    $httpProvider.defaults.useXDomain = true;
    delete $httpProvider.defaults.headers.common['X-Requested-With'];

    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/conferences', {
        templateUrl: 'views/crudui.html',
        controller: 'ConferencesCtrl'
      })
      .when('/speakers', {
        templateUrl: 'views/crudui.html',
        controller: 'SpeakersCtrl'
      })
      .when('/sponsors', {
        templateUrl: 'views/crudui.html',
        controller: 'SponsorsCtrl'
      })
      .when('/eventtype', {
        templateUrl: 'views/crudui.html',
        controller: 'EventtypeCtrl'
      })
      .when('/booths', {
        templateUrl: 'views/crudui.html',
        controller: 'BoothsCtrl'
      })
      .when('/ajendas', {
        templateUrl: 'views/crudui.html',
        controller: 'AjendasCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  })
  .constant('API', 'http://127.0.0.1:9763/con_api');