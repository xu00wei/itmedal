var medal = angular.module("medal_ctrl",['path',"medal_sv"]);

medal.controller("medalCtrl", function($scope,$state, $location,Path,Medal){
    Path.init();
    Medal.init();
    // can use to medalItem in html
    $scope.medalCtrl = {};

    //carousel
    $scope.toRight = Medal.toRightShow;
    $scope.toLeft = Medal.toLeftShow;

    //page to medalItem or medalList
    $scope.curHtmlTemp = Path.getHtmlTemp();
    $scope.medalCtrl.setHtmlTemp = function(index){
        $state.go("medalItem");
    }

});

medal.controller("medalItemCtrl", function($scope,Tools,Medal){
    $scope.medalList = Tools.genMedalItemList();
    $scope.priceList = Tools.genItemPrice();
    $scope.labels = Medal.getLabels();

})

medal.controller("medalListCtrl",function($scope,Tools){
    $scope.medalList = Tools.genMedalItemList();
});


