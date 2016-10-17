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
})
