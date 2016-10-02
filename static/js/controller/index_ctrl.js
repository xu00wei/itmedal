var index = angular.module("index_ctrl",["index_sv","medal_ctrl"]);
index.controller("indexCtrl",function($scope,$state,$location,Index){
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
});
