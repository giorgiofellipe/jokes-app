(function() {
  angular.module('state.jokes.controller', [])
    .controller("JokesController", JokesController);

  function JokesController($scope, $http, PouchDBService) {
    $scope.joke = "Clique na imagem para buscar nova piada";

    $scope.getNewJoke = function() {
      $http({
        method: 'GET',
        url: 'http://api.icndb.com/jokes/random'
      })
        .then(function(response) {
          $scope.joke = response.data.value.joke;
        })
        .catch(function(error) {

        })
        .finally(function() {

        });
    };

    $scope.favoritar = function(joke) {

      PouchDBService.insert(joke)
        .then(function(result) {
          console.log('sucesso!');
        })
        .catch(function(error) {
          console.log(JSON.stringify(error));
        });
    };
  }
})();
