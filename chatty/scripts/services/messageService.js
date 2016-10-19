'use strict';

angular.module('chattyApp')
  .factory('messageService', function ( $http ) {
    return {
      getMessages: function () {
        return $http.get('http://localhost:8666');
      },

      addMessage: function ( message ) {
        return $http.post('http://localhost:8666', { message: message });
      }
    };
  });
