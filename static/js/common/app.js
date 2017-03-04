var app = angular.module("ItMadelApp",['ngMaterial','directive','index_ctrl','home_ctrl','ui.router','tools','ngMdIcons']);
app.config(function($stateProvider,$urlRouterProvider){
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
