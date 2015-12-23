(function() {
  angular.module("jokesApp")
    .controller("AppController", AppController);

  function AppController($state) {
    $state.go('app.jokes');
  }
})();
