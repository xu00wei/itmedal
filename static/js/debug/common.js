var app = angular.module("ItMadelApp",['ngMaterial','directive','index_ctrl','ui.router','tools']);
app.config(["$stateProvider", "$urlRouterProvider", function($stateProvider,$urlRouterProvider){
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
        restrict: 'AE',
        link: function(scope,element,attrs){
            scope.$watch(attrs["lockScroll"],function(newVal,oldVal){
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
