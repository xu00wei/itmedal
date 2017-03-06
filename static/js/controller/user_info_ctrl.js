angular.module("userInfo",['userInfo_sv'])
.controller("userInfoCtrl", function($scope,UserInfo){
    "ngInject";
    $scope.setPage = function(index){
        $scope.pageIndex = index;
        $scope.pageContent = UserInfo.getPageContent(index);
    }
})