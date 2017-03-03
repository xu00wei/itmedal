var home = angular.module("home_ctrl",["home_sv"]);
home.controller("homeCtrl", ["Tools", "$scope", function(Tools,$scope){
    "ngInject";
    $scope.buyList = Tools.genMedalItemList();
    $scope.wantList = Tools.genWantList();
}])
var index = angular.module("index_ctrl",["index_sv","medal_ctrl","form_dr","log_ctrl"]);
index.controller("indexCtrl",["$scope", "$state", "$location", "Index", function($scope,$state,$location,Index){
    "ngInject";
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
}]);

angular.module("log_ctrl",[])

.controller("logCtrl", ["$scope", "Path", function($scope,Path){
    "ngInject";
    Path.init();
    $scope.curHtmlTemp = Path.getHtmlTemp();

}])

.controller("logListCtrl", ["$scope", "$state", "Tools", function($scope,$state,Tools){
    "ngInject";
    $scope.logs = Tools.genLogList();
    $scope.goItem = function(itemId){
        $state.go("logItem",{"logid": itemId});
    }

}])



var medal = angular.module("medal_ctrl",['path',"medal_sv"]);

medal.controller("medalCtrl", ["$scope", "$state", "$location", "Path", "Medal", function($scope,$state, $location,Path,Medal){
    Path.init();
    Medal.init();
    $scope.medalCtrl = {};
    $scope.toRight = Medal.toRightShow;
    $scope.toLeft = Medal.toLeftShow;
    $scope.curHtmlTemp = Path.getHtmlTemp();
    $scope.medalCtrl.setHtmlTemp = function(index){
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


