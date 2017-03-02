var app = angular.module("ItMadelApp",['ngMaterial','directive','index_ctrl','home_ctrl','ui.router','tools']);
app.config(function($stateProvider,$urlRouterProvider){
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
})
app.controller("appCtrl",function($scope){
    "ngInject";
    $scope.html = {
        "title": "首页",
        "isLockScroll": false,
    };
})
