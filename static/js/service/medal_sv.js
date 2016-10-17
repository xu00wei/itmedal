var medal_sv = angular.module("medal_sv",[]);

medal_sv.service("Medal",function($location){
    var path;
    var TEMPS = ['./html/medal-list.html','./html/medal-item.html'];
    this.init = function(){
        path = $location.path();
    }
    this.getHtmlTemp = function(){
        if(path.indexOf("medalItem")>=0){
            return TEMPS[1];
        }else{
            return TEMPS[0];
        }
    }
})

