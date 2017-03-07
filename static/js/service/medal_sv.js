var sv = angular.module("medal_sv",[]);
sv.service("Medal", function($timeout, Tools){
    "ngInject"
    //轮播图操作
    var elements;
    var points;

    // 页面切换时需更新
    this.init = function(){
        elements = document.querySelectorAll(".slider ul > .item");
        if(elements.length > 2){
            elements = [elements[0],elements[1]];
        }
        points = document.querySelectorAll(".points > li");
    }

    this.getMedalItem = function(mid){

        return medalItem;
    }

    this.getLabels = function(){
        var labels = Tools.genLabels;
        var lbs = [];
        var len = labels.length;
        for(var i = 0; i < len; i++){
            var lb = {};
            lb.name = labels[i];
            lb.color =  getColor();
            lbs.push(lb);
        }
        return lbs;
    }

    function getColor(){
        var colors = ["#4FC8D1","#5B8AFF","#EF7F4F","#43DB8E","#20B5E2","#777AE8","#EE77E5","#F05555"];
        var maxIndex = colors.length;
        return colors[parseInt(Math.random()*1569%maxIndex)];
    }

    this.toRightShow = function(){
        var actIndex = getActiveIndex(elements);
        var nextIndex = (actIndex+1)%elements.length;
        var actElement = angular.element(elements[actIndex]);
        var nextElement = angular.element(elements[nextIndex]);
        if(actElement.hasClass("left") || actElement.hasClass("right")) return ;

        nextElement.addClass("next");

        $timeout(function(){
            nextElement.addClass("left");
            actElement.addClass("left");
        }, 100)

        $timeout(function(){
            actElement.removeClass("active left");
            angular.element(points[actIndex]).removeClass("active");

            nextElement.addClass("active");
            nextElement.removeClass("next left");
            angular.element(points[nextIndex]).addClass("active");  
        }, 700)

    }

    this.toLeftShow = function(){
        var actIndex = getActiveIndex(elements);
        var preIndex = actIndex-1 < 0 ? elements.length-1 : (actIndex -1);
        var actElement = angular.element(elements[actIndex]);
        var preElement = angular.element(elements[preIndex]);

        preElement.addClass("prev");

        $timeout(function(){
            preElement.addClass("right");
            actElement.addClass("right");
        }, 100)

        $timeout(function(){
            actElement.removeClass("active right");
            angular.element(points[actIndex]).removeClass("active");

            preElement.addClass("active");
            preElement.removeClass("prev right");
            angular.element(points[preIndex]).addClass("active");   
        }, 700)

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



})