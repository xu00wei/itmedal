var medal = angular.module("medal_ctrl",['path',"medal_sv"]);

medal.controller("medalCtrl", function($scope,$state, $location,Path,Medal){
    Path.init();
    $scope.medalCtrl = {};
    $scope.toRight = Medal.toRightShow;
    $scope.toLeft = Medal.toLeftShow;
    $scope.curHtmlTemp = Path.getHtmlTemp();
    $scope.medalCtrl.setHtmlTemp = function(index){
        $state.go("medalItem");
    }
});

medal.controller("medalItemCtrl", function($scope,Tools){
    $scope.medalList = Tools.genMedalItemList();
    $scope.priceList = Tools.genItemPrice();
})

medal.controller("medalListCtrl",function($scope,Tools){
    $scope.medalList = Tools.genMedalItemList();
});


