var app = angular.module("ItMadelApp",['ngMaterial','directive','index_ctrl','ui.router']);
app.config(function($stateProvider,$urlRouterProvider){
    "ngInject";
    //$stateProvider.when("");
    $urlRouterProvider.when("","home");
    $urlRouterProvider.when("/","home");

    function getUrl(_url){
        return "http://localhost:5000/html/"+_url;
    }

    function getState(_state){
        return {
            url: '/'+_state,
            templateUrl: getUrl("index.html"),
            controller: "indexCtrl"
        }
    }

    $stateProvider
    .state("home", getState("home"))
    .state("medal",getState("medal"))
    .state("medalItem",getState("medalItem"))
    .state("goodIdea",getState("goodIdea"))
    .state("log",getState("log"))
    .state("aboutUs",getState("aboutUs"))
})
