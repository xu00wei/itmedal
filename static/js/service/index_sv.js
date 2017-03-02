var sv = angular.module("index_sv",[]);

sv.service("Index",function($location){
    var _path;
    var _index;
    var _title = ["首页","勋章","GOOD IDEA","日志","关于我们"];
    var _routers = ["home","medal","goodIdea","log","aboutUs"];
    var _pages = ["./html/home.html","./html/medal.html","./html/good-idea.html","./html/log.html","./html/about-us.html"];
    //var ctrls = ["homeCtrl","medalCtrl","goodIdeaCtrl","logCtrl","aboutUsCtrl"];

    this.setIndex = function(index){
        _index = index;
    }

    this.getIndex = function(){
        return _index;
    }

    this.getTitle = function(index){
        if(index) return _title[index];
         return _title[_index];
    }

    this.getCurRouterByIndex = function(index){
         return _routers[index];
    }

    this.init = function(){
        _path = $location.path();
        _index = 0;
        for(var i in _routers){
            if(_path.indexOf(_routers[i])>=0){
                _index = Number(i);
            }
        }
    }
})
