var index = angular.module("index",[]);
index.controller("indexCtrl",["$scope", function($scope){
    "ngInject";
    $scope.test = "hello world";
}]);
