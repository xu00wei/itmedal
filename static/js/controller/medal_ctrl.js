var medal = angular.module("medal_ctrl",['medal_sv']);

medal.controller("medalCtrl", function($scope,$state,Medal){
    $scope.medalCtrl = {};

    Medal.init();
    $scope.curHtmlTemp = Medal.getHtmlTemp();
    $scope.medalCtrl.setHtmlTemp = function(_index){
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


