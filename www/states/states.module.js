(function() {
  'use strict';
  /*
   * o objetivo deste módulo é integrar todos os states
   * utilizados no app, para que não seja necessário
   * alterar as dependências do módulo app
   */
  angular.module('app.states', [
    'state.menu',
    'state.jokes',
    'state.favorites'
  ]);
})();
