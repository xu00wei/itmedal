var home = angular.module("home_ctrl",["home_sv"]);
home.controller("homeCtrl", function(Tools,$scope){
    "ngInject";
    $scope.buyList = Tools.genMedalItemList();
    $scope.wantList = Tools.genWantList();
})

home.controller("donateInfoCtrl", function($scope, Tools){
    "ngInject";
    $scope.dntTargetList = Tools.genDonateList();
    $scope.month = 8;
    $scope.monthMoney = 123;
})