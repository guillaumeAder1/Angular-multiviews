'use strict';

angular.module('myApp.view2', ['ngRoute', 'esri.map'])

.config(['$routeProvider', function($routeProvider) {
    // $routeProvider.when('/view2', {
    //     templateUrl: 'view2/view2.html',
    //     controller: 'View2Ctrl'
    // });
}])

.controller('View2Ctrl', function($scope, serviceAjax, esriLoader) {

    var self = this;
    console.log(esriLoader)

    $scope.createMap = function() {
        var self = this;
        // load esri modules
        esriLoader.require([
            'esri/Map',
            'esri/layers/FeatureLayer'
        ], function(Map, FeatureLayer) {
            // create the map
            $scope.map = new Map({
                basemap: 'hybrid'
            });

            // and add a feature layer
            // var featureLayer = new FeatureLayer({
            //     url: '//services.arcgis.com/V6ZHFr6zdgNZuVG0/arcgis/rest/services/Landscape_Trees/FeatureServer/0'
            // });

            // self.map.add(featureLayer);
        });

    }

    $scope.createMap();

    $scope.viewCtrl2 = "view2/view2.html";
    $scope.values = {
        price: 156
    };
    console.log(serviceAjax.someMethod().success(function(res) {
        console.log(res)
    }));

});