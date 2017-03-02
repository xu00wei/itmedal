var sv = angular.module("home_sv",[]);
sv.service("Home", function(){
	
})
var sv = angular.module("index_sv",[]);

sv.service("Index",["$location", function($location){
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
}])



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
var tools = angular.module("tools",[]);
tools.service("Tools",function(){

    this.genMedalItemList = function(){
        var testData = {
            "cover": "../static/images/angular.png",
            "price": "7.5",
            "describe": "angular贴纸"
        }
        return [testData,testData,testData,testData,testData];
    }

    this.genItemPrice = function(){
        var testPrice = [
            {"minNum": 4, "price": 11.5},
            {"minNum": 10, "price": 10}
        ];
        return testPrice;
    }

    this.genWantList = function(){
        var wl = {
            "cover": "../static/images/angular.png",
            "wantNum": "200",
            "describe": "angular贴纸", 
        }
        return [wl, wl, wl];
    }

    this.genLogList = function(){
        var log = {
            "id": "lg123",
            "title":  "获得Open Source Matters对其的开源软件的出售许可",
            "date": "2015 july 30",
            "text": "经过.....的dfafsdanninkdf大家开发,他哦那是能否但是参加啊浪费哪里"
        }
        return [log,log,log,log];
    }
})
