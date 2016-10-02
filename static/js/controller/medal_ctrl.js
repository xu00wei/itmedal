var medal = angular.module("medal_ctrl",['medal_sv']);

medal.controller("medalCtrl", function($scope,$state,Medal){
    $scope.medalCtrl = {};

    Medal.init();
    $scope.curHtmlTemp = Medal.getHtmlTemp();
    $scope.medalCtrl.setHtmlTemp = function(_index){
        $state.go("medalItem");
    }
});

medal.controller("medalListCtrl",function($scope){
    $scope.medalList = [{
        "cover": "../static/images/angular.png",
        "price": "7.5",
        "describe": "angular贴纸"
    }];

});


