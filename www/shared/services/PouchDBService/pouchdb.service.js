(function() {
  'use strict';

  angular.module('service.pouchdb', [])
    .factory("PouchDBService", PouchDBService);

  function PouchDBService($rootScope) {
    localDB.changes({
      since: 'now',
      continuous: true
    }).on('change', function(change) {
      if (!change.deleted) {
        $rootScope.$apply(function() {
          localDB.get(change.id, function(err, doc) {
            $rootScope.$apply(function() {
              if (err) {
                console.log(err);
              }
              $rootScope.$broadcast('add', doc);
            })
          });
        })
      } else {
        $rootScope.$apply(function() {
          $rootScope.$broadcast('delete', change.id);
        });
      }
    });

    var insert = function(jokeText) {
      var date = new Date();
      var jokeId = 'giorgio_' + date.getTime();

      var joke = {
        '_id': jokeId,
        'text': jokeText,
        'date': date
      };

      return localDB.post(joke);
    };

    var findAll = function() {
      var favoritos = [];
      return localDB.allDocs({
        attachments: true,
        include_docs: true,
        startkey: 'giorgio_'
      }).then(function(result) {
        angular.forEach(result.rows, function(row) {
          favoritos[favoritos.length] = row.doc;
        });
        return favoritos;
      });
    };

    var deletar = function(joke) {
      return localDB.remove(joke);
    };

    return {
      insert: insert,
      findAll: findAll,
      deletar: deletar
    };
  }
})();
