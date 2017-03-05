var app = angular.module("ItMadelApp",['ngMaterial','directive','index_ctrl','home_ctrl','ui.router','tools','ngMdIcons']);
app.config(["$stateProvider", "$urlRouterProvider", function($stateProvider,$urlRouterProvider){
    "ngInject";
    //$stateProvider.when("");
    $urlRouterProvider.when("","home");
    $urlRouterProvider.when("/","home");
    var getUrl = function(urlName){
        return "http://localhost:5000/html/"+urlName;
    }

    $stateProvider
        .state("home", {    // 首页
            url: "/home",
            controller: "homeCtrl as home",
            templateUrl: getUrl("home.html")
        })
        .state("donateInfo",{   // 捐赠信息
            url: "/dntInfo",
            controller: "donateInfoCtrl as dntInfo",    //def in home_ctrl.js
            templateUrl: getUrl("dnt-info.html")
        })
        .state("medal",{    // 勋章列表
            url: "/medal",
            controller: "medalCtrl as medal",
            templateUrl: getUrl("medal.html")
        })
        .state("medalItem",{    //勋章详情
            url: "/medalItem",
            controller: "medalCtrl as medal",
            templateUrl: getUrl("medal.html")  //medal path to item
        })
        .state("goodIdea",{
            url: "/goodIdea",
            controller: "medalCtrl as medal",
            templateUrl: getUrl("medal.html") //medal path to goodIdea
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
            case "goodIdea": return "./html/medal/good-idea.html";
            case "log":         return "./html/log/log-list.html";
            case "logItem":     return "./html/log/log-item.html";
            default: return false;
        }
    }
}])
