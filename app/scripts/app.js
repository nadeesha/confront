'use strict';

angular.module('confrontApp', [
  'ngCookies',
  'ngResource',
  'ngSanitize',
  'ngRoute',
  'chieffancypants.loadingBar',
  'ngCookies'
])
  .config(function($routeProvider, $httpProvider, $provide) {
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
      .when('/associate', {
        templateUrl: 'views/associate.html',
        controller: 'AssociateCtrl'
      })
      .when('/conferenceSponsor', {
        templateUrl: 'views/associate.html',
        controller: 'ConferencesponsorCtrl'
      })
      .when('/conferenceSpeaker', {
        templateUrl: 'views/associate.html',
        controller: 'ConferencespeakerCtrl'
      })
      .when('/conferenceBooth', {
        templateUrl: 'views/associate.html',
        controller: 'ConferenceboothCtrl'
      })
      .when('/agenda', {
        templateUrl: 'views/agenda.html',
        controller: 'AgendaCtrl'
      })
      .when('/tracks', {
        templateUrl: 'views/tracks.html',
        controller: 'TracksCtrl'
      })
      .when('/event', {
        templateUrl: 'views/event.html',
        controller: 'EventCtrl'
      })
      .when('/events', {
        templateUrl: 'views/events.html',
        controller: 'EventsCtrl'
      })
      .when('/eventSpeaker', {
        templateUrl: 'views/associate.html',
        controller: 'EventspeakerCtrl'
      })
      .when('/videos', {
        templateUrl: 'views/crudui.html',
        controller: 'VideosCtrl'
      })
      .when('/login', {
        templateUrl: 'views/login.html',
        controller: 'LoginCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });

    $provide.factory('default', function($q, $location, $cookies) {
      return {
        'request': function(config) {
          if ($cookies.token) {
            config.headers.Authorization = 'Bearer ' + $cookies.token;
            return config;
          } else {
            $location.url('/');
            return config;
          }
        }
      };
    });

    $httpProvider.interceptors.push('default');
  })
  .constant('API', 'http://204.13.82.236:9763/con_api')
  .constant('OAUTH_ENDPOINT', 'https://204.13.82.236:8243/token');