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
    $scope.medalCtrl.setHtmlTemp = function(medal){
        $state.go("medalItem",{mid: medal.mid});
    }

});

medal.controller("medalItemCtrl", function($scope,$stateParams,Tools,Medal){
    $scope.activeMedal = Tools.getMedalItem($stateParams.mid);
    $scope.medalList = Tools.genMedalItemList();
    $scope.priceList = Tools.genItemPrice();
    $scope.labels = Medal.getLabels();
    $scope.medalFilter = function(item){
        if(item.mid == $scope.activeMedal.mid){
            return null;
        }else return item;
    }

})

medal.controller("medalListCtrl",function($scope,Tools){
    $scope.medalList = Tools.genMedalItemList();
});


