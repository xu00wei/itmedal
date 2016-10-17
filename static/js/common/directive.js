var dr = angular.module("directive",[]);
dr.directive("inputFocus",function(){
    return function(scope,element,attrs){
        element.children().eq(0).on('click',function(){
            scope.toInput = true;
            document.getElementById('search-input').focus();
        })
    }
})

dr.directive("lockScroll", function($window){
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
})
