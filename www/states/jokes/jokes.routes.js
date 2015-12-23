(function() {
  'use strict';
  angular.module('state.jokes', ['state.jokes.controller'])

    .config(configRoute);

  function configRoute($stateProvider) {
    $stateProvider
      .state('app.jokes', {
        url: "/jokes",
        views: {
          'menuContent': {
            templateUrl: "states/jokes/jokes.html",
            controller: 'JokesController'
          }
        }
      });
  }
})();
