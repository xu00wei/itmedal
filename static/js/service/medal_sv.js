var sv = angular.module("medal_sv",[]);
sv.service("Medal", function(){
    var elements = document.querySelectorAll(".slider ul > .item");
    var points = document.querySelectorAll(".points > li");

    this.toRightShow = function(){
        var actIndex = getActiveIndex(elements);
        var nextIndex = (actIndex+1)%elements.length;

        angular.element(elements[actIndex]).removeClass("active");
        angular.element(points[actIndex]).removeClass("active");
        angular.element(elements[nextIndex]).addClass("active");
        angular.element(points[nextIndex]).addClass("active");

    }

    this.toLeftShow = function(){
        var actIndex = getActiveIndex(elements);
        var preIndex = actIndex-1 < 0 ? elements.length-1 : (actIndex -1);

        angular.element(elements[actIndex]).removeClass("active");
        angular.element(points[actIndex]).removeClass("active");
        angular.element(elements[preIndex]).addClass("active");
        angular.element(points[preIndex]).addClass("active");
    }

    function getActiveIndex(eles){
        var length = eles.length-1;
        while(length >= 0){
            if(angular.element(eles[length]).hasClass("active")){
                return length;
            }
            length -= 1;
        }
        return -1;
    }
});