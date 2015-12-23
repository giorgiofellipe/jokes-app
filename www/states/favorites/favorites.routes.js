(function() {
  'use strict';
  angular.module('state.favorites', ['state.favorites.controller'])

    .config(configRoute);

  function configRoute($stateProvider) {
    $stateProvider
      .state('app.favorites', {
        url: "/favorites",
        views: {
          'menuContent': {
            templateUrl: "states/favorites/favorites.html",
            controller: 'FavoritesController'
          }
        }
      });
  }
})();
