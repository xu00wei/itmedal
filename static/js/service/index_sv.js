var sv = angular.module("index_sv",[]);

sv.service("Index",function($location){
    var path;
    var index;
    var routers = ["home","medal","goodIdea","log","aboutUs"];
    var pages = ["./html/home.html","./html/medal.html","./html/good-idea.html","./html/log.html","./html/about-us.html"];
    //var ctrls = ["homeCtrl","medalCtrl","goodIdeaCtrl","logCtrl","aboutUsCtrl"];

    this.setIndex = function(_index){
        index = _index;
    }

    this.getIndex = function(){
        return index;
    }

    this.getCurRouterByIndex = function(_index){
         return routers[_index]
    }

    this.getCurPage = function(){
        return pages[index];
    }

    this.getCurCtrl = function(){
        return ctrls[index];
    }

    this.init = function(){
        path = $location.path();
        index = 0;
        for(var i in routers){
            if(path.indexOf(routers[i])>=0){
                index = Number(i);
            }
        }
    }
})
