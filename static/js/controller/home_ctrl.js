var home = angular.module("home_ctrl",["home_sv"]);
home.controller("homeCtrl", function(Tools,$scope){
    "ngInject";
    $scope.buyList = Tools.genMedalItemList();
    $scope.wantList = Tools.genWantList();
})