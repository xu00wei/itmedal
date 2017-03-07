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
sv.service("Medal", ["$timeout", "Tools", function($timeout, Tools){
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



}]);
var tools = angular.module("tools",[]);
tools.service("Tools",function(){

    this.genMedalItemList = function(){
        return [{
            "cover": "../static/images/chakra.png",
            "price": "7.5",
            "describe": "chakra贴纸"
        },{
            "cover": "../static/images/python.png",
            "price": "11.2",
            "describe": "python贴纸"
        },{
            "cover": "../static/images/C++.png",
            "price": "8.8",
            "describe": "C++贴纸"
        },{
            "cover": "../static/images/debian.png",
            "price": "9.9",
            "describe": "debian贴纸"
        },{
            "cover": "../static/images/arch.png",
            "price": "100",
            "describe": "arch贴纸"
        }];
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

    this.genMessages = function(){
        var item = {
            "date": "2016 July 30",
            "text": "欢迎您开启邮箱订阅功能,您将收到我们发送给你的商品上架提示信息"
        }
        return [item,item,item,item,item,item,item];
    }

    this.genDonateList = function(){
        var python = {
            "name": "PYTHON",
            "desc": "The Python Foundation",
            "get_money": "5.6"
        },
        git = {
            "name": "GIT",
            "desc": "Software Freedom Conservancy",
            "get_money": "10.8"
        }
        return [python,git,git,git,python,git,python,python,git,python,python,python,git,git,python,python];
    }

    this.genLabels = ["前端","Web","Javascript"];

})

angular.module("userInfo_sv",['tools'])
.service("UserInfo",["Tools", function(Tools){
    var accountInfos;
    var voteHistorys;
    var messages;

    this.getPageContent = function(index){
        switch(Number(index)){
            case 0: 
                return accountInfos != null ? accountInfos : setAccountInfos();

            case 1:
                return voteHistorys != null ? voteHistorys : setVoteHistorys();

            case 2:
                return messages != null ? messages : setMessages();

        }
    }


    function setMessages(){
        messages = Tools.genMessages();
        return messages;
    }

    function  setAccountInfos(){
        accountInfos = null;
        return accountInfos;
    }

    function setVoteHistorys(){
        voteHistorys = null;
        return voteHistorys;
    }

}])