'use strict';

angular.module('confrontApp', [
  'ngCookies',
  'ngResource',
  'ngSanitize',
  'ngRoute',
  'ngGrid'
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
      .otherwise({
        redirectTo: '/'
      });
  })
  .constant('API', 'http://127.0.0.1:9763/con_api');