var app = angular.module("ItMadelApp",['ngMaterial','directive','index','ui.router']);
app.config(["$stateProvider", function($stateProvider){
    "ngInject";
    //$stateProvider.when("");

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

