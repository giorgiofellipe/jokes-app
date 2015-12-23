(function() {
  'use strict';
  describe('JokesController', function () {

    var $scope,
      ctrl,
      $rootScope;

    beforeEach(module("app"));

    beforeEach(function () {

      // INJECT! This part is critical
      // $rootScope - injected to create a new $scope instance.
      // $controller - injected to create an instance of our controller.
      // $q - injected so we can create promises for our mocks.
      // _$timeout_ - injected to we can flush unresolved promises.
      inject(function ($injector, _$rootScope_, $controller){
        // create a scope object for us to use.
        $scope = $rootScope.$new();

        // now run that scope through the controller function,
        // injecting any services or other injectables we need.
        // **NOTE**: this is the only time the controller function
        // will be run, so anything that occurs inside of that
        // will already be done before the first spec.
        ctrl = $controller('JokesController', {
          $scope: $scope
        });
      });
    });

    it('should be defined', function() {
      expect(ctrl).toBeDefined();
    });
  });

})();
