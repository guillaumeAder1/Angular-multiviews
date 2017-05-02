'use strict';

/**
 * @ngdoc service
 * @name angularSeedApp.serviceAjax
 * @description
 * # serviceAjax
 * Factory in the angularSeedApp.
 */
angular.module('myApp')
    .factory('serviceAjax', function($http) {
        // Service logic
        // ...

        var meaningOfLife = 42;

        // Public API here
        return {
            someMethod: function() {
                var t = $http.get("https://api.jcdecaux.com/vls/v1/stations?contract=dublin&apiKey=cd68da53009a674d943220ef0a67623682aa00ce")
                return t;
            }
        };
    });