(function() {
  angular.module('state.favorites.controller', [])
    .controller("FavoritesController", FavoritesController);

  function FavoritesController($scope, $window, PouchDBService) {
    $scope.favorites = [];

    $scope.$on('$ionicView.beforeEnter', function() {
      $scope.refresh();
    });

    $scope.refresh = function() {
      $scope.favorites = [];
      PouchDBService.findAll()
        .then(function(result) {
          $scope.favorites = result;
          $scope.$broadcast('scroll.refreshComplete');
        });
    };

    $scope.deletar = function(joke) {
      PouchDBService.deletar(joke)
        .then(function() {
          $scope.refresh();
        });
    };
  }
})();
