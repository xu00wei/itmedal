var dr = angular.module("directive",[]);
dr.directive("inputFocus",function(){
    return function(scope,element,attrs){
        element.children().eq(0).on('click',function(){
            scope.toInput = true;
            document.getElementById('search-input').focus();
        })
    }
})

