var app = angular.module("ItMadelApp",['ngMaterial','directive','index_ctrl','home_ctrl','ui.router','tools']);
app.config(["$stateProvider", "$urlRouterProvider", function($stateProvider,$urlRouterProvider){
    "ngInject";
    //$stateProvider.when("");
    $urlRouterProvider.when("","home");
    $urlRouterProvider.when("/","home");
    var getUrl = function(urlName){
        return "http://localhost:5000/html/"+urlName;
    }

    $stateProvider
        .state("home", {
            url: "/home",
            controller: "homeCtrl as home",
            templateUrl: getUrl("home.html")
        })
        .state("medal",{
            url: "/medal",
            controller: "medalCtrl as medal",
            templateUrl: getUrl("medal.html")
        })
        .state("medalItem",{
            url: "/medalItem",
            templateUrl: getUrl("medal/medal-item.html")
        })
        .state("goodIdea",{
            url: "/goodIdea",
            templateUrl: getUrl("good-idea.html")
        })
        .state("log",{
            url: "/log",
            templateUrl: getUrl("log.html")
        })
        .state("logItem",{
            url: "/logItem",
            templateUrl: getUrl("log/log-item.html")
        })
        .state("aboutUs",{
            url: "/aboutUs",
            templateUrl: getUrl("about-us.html")
        })
}])
app.controller("appCtrl",["$scope", function($scope){
    "ngInject";
    $scope.html = {
        "title": "首页",
        "isLockScroll": false,
    };
}])

var dr = angular.module("directive",[]);
dr.directive("inputFocus",function(){
    return function(scope,element,attrs){
        element.children().eq(0).on('click',function(){
            scope.toInput = true;
            document.getElementById('search-input').focus();
        })
    }
})

dr.directive("lockScroll", ["$window", function($window){
    return {
        restrict: 'A',
        link: function(scope,element,attrs){
            scope.$watch(attrs["lockScroll"],function(newVal,oldVal){
                if(newVal == null) return;
                if(newVal==false){
                    element.css({
                        "max-height": "auto",
                        "overflow": "auto"
                    })
                }else{
                    var vh = $window.innerHeight;
                    element.css({
                        "max-height": vh,
                        "overflow": "hidden"
                    })
                }

            }, true);
        }

    }
}])

angular.module("path",[])
.service("Path",["$location", function($location){
    "ngInject";
    var path = "";

    this.init = function(){
        var routers = $location.path().split('/');
        path = routers.pop().replace('\?.*');
    }

    this.getHtmlTemp = function(){
        switch(path){
            case "medal":       return "./html/medal/medal-list.html";
            case "medalItem":   return "./html/medal/medal-item.html";
            case "log":         return "./html/log/log-list.html";
            case "logItem":     return "./html/log/log-item.html";
            default: return false;
        }
    }
}])
