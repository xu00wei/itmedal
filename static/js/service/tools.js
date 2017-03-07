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
