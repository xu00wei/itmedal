var index = angular.module("index_ctrl",["index_sv","medal_ctrl","form_dr"]);
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
        $scope.indexCtrl = {
            "pageTitle": "首页",
            "isLockScroll": false
        };
        $scope.curPage = Index.getCurPage();
        //$scope.curCtrl = Index.getCurCtrl();
    }

    $scope.toLogin = function(){
        $scope.showLoginPage = true;
        $scope.indexCtrl.isLockScroll = true;
    }

    $scope.toSignIn = function(){
        $scope.showSignInPage = true;
        $scope.indexCtrl.isLockScroll = true;
    }
});
