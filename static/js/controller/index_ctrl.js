var index = angular.module("index_ctrl",["index_sv","medal_ctrl","form_dr","log_ctrl"]);
index.controller("indexCtrl",function($scope,$state,$location,Index){
    "ngInject";
    //---
    // 页面头部导航条操作
    // 登入注册页面的操作
    //---
    // page refresh
    Index.init();
    init();

    $scope.setTab = function(index){
        Index.setIndex(index);
        $scope.tab = Index.getIndex();
        $scope.html.title = Index.getTitle();
        $state.go(Index.getCurRouterByIndex(index));
    }

    function init(){
        $scope.tab = Index.getIndex();
        $scope.html.title = Index.getTitle();
        //$scope.curCtrl = Index.getCurCtrl();
    }

    $scope.toLogin = function(){
        $scope.showForm = "login";
        $scope.html.isLockScroll = true;
        $scope.html.style = {"height": "100%"};
    }

    $scope.toSignIn = function(){
        $scope.showForm = "signIn";
        $scope.html.isLockScroll = true;
        $scope.html.style = {"height": "100%"};
    }

    $scope.toResetPassword = function(){
        $scope.showForm = "resetPassword";
        $scope.html.isLockScroll = true;
    }

    $scope.closeForm = function(){
        $scope.showForm = "none";
        $scope.html.isLockScroll = false;
    }
});
