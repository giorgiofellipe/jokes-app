(function() {
  'use strict';
  angular.module('state.menu', ['state.menu.controller'])

    .config(configRoute);

  function configRoute($stateProvider) {
    $stateProvider
      .state('app', {
        url: '/app',
        abstract: true,
        templateUrl: 'states/menu/menu.html',
        controller: 'MenuController'
      })
  }
})();
