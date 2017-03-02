angular.module("log_ctrl",[])

.controller("logCtrl", function($scope,Path){
    "ngInject";
    Path.init();
    $scope.curHtmlTemp = Path.getHtmlTemp();

})

.controller("logListCtrl", function($scope,$state,Tools){
    "ngInject";
    $scope.logs = Tools.genLogList();
    $scope.goItem = function(itemId){
        $state.go("logItem",{"logid": itemId});
    }

})


