angular.module("path",[])
.service("Path",function($location){
    "ngInject";
    var path = "";

    this.init = function(){
        var routers = $location.path().split('/');
        path = routers.pop().replace('\?.*');
    }

    this.getHtmlTemp = function(){
        switch(path){
            case "medal":       return "./html/medal/medal-list.html";
            case "medalItem":   return "./html/medal/medal-item.html";
            case "log":         return "./html/log/log-list.html";
            case "logItem":     return "./html/log/log-item.html";
            default: return false;
        }
    }
})
