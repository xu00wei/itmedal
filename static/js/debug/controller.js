var index = angular.module("index_ctrl",["index_sv","medal_ctrl","form_dr"]);
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

medal.controller("medalItemCtrl", ["$scope", "Tools", function($scope,Tools){
    $scope.medalList = Tools.genMedalItemList();
    $scope.priceList = Tools.genItemPrice();
}])

medal.controller("medalListCtrl",["$scope", "Tools", function($scope,Tools){
    $scope.medalList = Tools.genMedalItemList();
}]);


