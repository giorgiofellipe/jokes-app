var localDB = new PouchDB("vexta_jokes");
var remoteDB = new PouchDB("http://URL:PORT/vexta_jokes");

(function() {
  'use strict';

angular.module('jokesApp',
  [
    'ionic',
    'app.states',
    'app.shared'
  ])
  .run(function($ionicPlatform) {
    localDB.sync(remoteDB, {live: true, retry: true});

    $ionicPlatform.ready(function() {
      if(window.cordova && window.cordova.plugins.Keyboard) {
        // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
        // for form inputs)
        cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);

        // Don't remove this line unless you know what you are doing. It stops the viewport
        // from snapping when text inputs are focused. Ionic handles this internally for
        // a much nicer keyboard experience.
        cordova.plugins.Keyboard.disableScroll(true);
      }
      if(window.StatusBar) {
        StatusBar.styleDefault();
      }
    });
  })
  .config(function($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('root', {
        url: '',
        controller: 'AppController'
      });

    $urlRouterProvider.otherwise("/app/jokes");
  });
})();
