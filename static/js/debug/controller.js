var index = angular.module("index_ctrl",["index_sv","medal_ctrl"]);
index.controller("indexCtrl",["$scope", "$state", "$location", "Index", function($scope,$state,$location,Index){
    "ngInject";
    Index.init();
    init();

    $scope.setTab = function(index){
        var router = Index.getCurRouterByIndex(index);
        $state.go(router);
    }
    function init(){
        $scope.tab = Index.getIndex();
        $scope.curPage = Index.getCurPage();
        //$scope.curCtrl = Index.getCurCtrl();
    }
}]);

var medal = angular.module("medal_ctrl",['medal_sv']);

medal.controller("medalCtrl", ["$scope", "$state", "Medal", function($scope,$state,Medal){
    $scope.medalCtrl = {};

    Medal.init();
    $scope.curHtmlTemp = Medal.getHtmlTemp();
    $scope.medalCtrl.setHtmlTemp = function(_index){
        $state.go("medalItem");
    }
}]);

medal.controller("medalListCtrl",["$scope", function($scope){
    $scope.medalList = [{
        "cover": "../static/images/angular.png",
        "price": "7.5",
        "describe": "angular贴纸"
    }];

}]);


