var app = angular.module("ItMadelApp",['ngMaterial','directive','index_ctrl','medal_ctrl','ui.router']);
app.config(["$stateProvider", "$urlRouterProvider", function($stateProvider,$urlRouterProvider){
    "ngInject";
    //$stateProvider.when("");
    $urlRouterProvider.when("","home");
    $urlRouterProvider.when("/","home");

    function getUrl(_url){
        return "http://localhost:5000/html/"+_url;
    }

    $stateProvider
    .state("home", {
        url: "/home",
        templateUrl: getUrl("index.html"),
        controller: "indexCtrl"
    })
    .state("medal",{
        url: "/medal",
        templateUrl: getUrl("index.html"),
        controller: "indexCtrl"
    })
    .state("medal.item",{
         url: "/medalItem",
         templateUrl: getUrl("medal-item.html"),
         controller: "medalItemCtrl"
    })
    .state("goodIdea",{
        url: "gIdea",
        templateUrl: getUrl("goodIdea.html"),
        controller: "goodIdeaCtrl"
    })

}])

var dr = angular.module("directive",[]);
dr.directive("inputFocus",function(){
    return function(scope,element,attrs){
        element.children().eq(0).on('click',function(){
            scope.toInput = true;
            document.getElementById('search-input').focus();
        })
    }
})


var index = angular.module("index_ctrl",[]);
index.controller("indexCtrl",["$scope", "$location", "Index", function($scope,$location,Index){
    "ngInject";
    Index.init();
    init();
    $scope.setTab = function(){
        init();
    }

    function init(){
        $scope.tabIndex = Index.getIndex();
        $scope.curPage = Index.getCurPage();
        $scope.curCtrl = Index.getCurCtrl();
    }
}]);

var media = angular.module("medal_ctrl",[]);
media.controller("medalCtrl",function(){

})

var app = angular.module("ItMadelApp",['ngMaterial','directive','index_ctrl','medal_ctrl','ui.router']);
app.config(["$stateProvider", "$urlRouterProvider", function($stateProvider,$urlRouterProvider){
    "ngInject";
    //$stateProvider.when("");
    $urlRouterProvider.when("","home");
    $urlRouterProvider.when("/","home");

    function getUrl(_url){
        return "http://localhost:5000/html/"+_url;
    }

    $stateProvider
    .state("home", {
        url: "/home",
        templateUrl: getUrl("index.html"),
        controller: "indexCtrl"
    })
    .state("medal",{
        url: "/medal",
        templateUrl: getUrl("index.html"),
        controller: "indexCtrl"
    })
    .state("medal.item",{
         url: "/medalItem",
         templateUrl: getUrl("medal-item.html"),
         controller: "medalItemCtrl"
    })
    .state("goodIdea",{
        url: "gIdea",
        templateUrl: getUrl("goodIdea.html"),
        controller: "goodIdeaCtrl"
    })

}])

var dr = angular.module("directive",[]);
dr.directive("inputFocus",function(){
    return function(scope,element,attrs){
        element.children().eq(0).on('click',function(){
            scope.toInput = true;
            document.getElementById('search-input').focus();
        })
    }
})


var index = angular.module("index_ctrl",[]);
index.controller("indexCtrl",["$scope", "$location", "Index", function($scope,$location,Index){
    "ngInject";
    Index.init();
    init();
    $scope.setTab = function(){
        init();
    }

    function init(){
        $scope.tabIndex = Index.getIndex();
        $scope.curPage = Index.getCurPage();
        $scope.curCtrl = Index.getCurCtrl();
    }
}]);

var media = angular.module("medal_ctrl",[]);
media.controller("medalCtrl",function(){

})

var app = angular.module("ItMadelApp",['ngMaterial','directive','index_ctrl','medal_ctrl','ui.router']);
app.config(["$stateProvider", "$urlRouterProvider", function($stateProvider,$urlRouterProvider){
    "ngInject";
    //$stateProvider.when("");
    $urlRouterProvider.when("","home");
    $urlRouterProvider.when("/","home");

    function getUrl(_url){
        return "http://localhost:5000/html/"+_url;
    }

    $stateProvider
    .state("home", {
        url: "/home",
        templateUrl: getUrl("index.html"),
        controller: "indexCtrl"
    })
    .state("medal",{
        url: "/medal",
        templateUrl: getUrl("index.html"),
        controller: "indexCtrl"
    })
    .state("medal.item",{
         url: "/medalItem",
         templateUrl: getUrl("medal-item.html"),
         controller: "medalItemCtrl"
    })
    .state("goodIdea",{
        url: "gIdea",
        templateUrl: getUrl("goodIdea.html"),
        controller: "goodIdeaCtrl"
    })

}])

var dr = angular.module("directive",[]);
dr.directive("inputFocus",function(){
    return function(scope,element,attrs){
        element.children().eq(0).on('click',function(){
            scope.toInput = true;
            document.getElementById('search-input').focus();
        })
    }
})


var index = angular.module("index_ctrl",[]);
index.controller("indexCtrl",["$scope", "$location", "Index", function($scope,$location,Index){
    "ngInject";
    Index.init();
    init();
    $scope.setTab = function(){
        init();
    }

    function init(){
        $scope.tabIndex = Index.getIndex();
        $scope.curPage = Index.getCurPage();
        $scope.curCtrl = Index.getCurCtrl();
    }
}]);

var media = angular.module("medal_ctrl",[]);
media.controller("medalCtrl",function(){

})

var app = angular.module("ItMadelApp",['ngMaterial','directive','index_ctrl','medal_ctrl','ui.router']);
app.config(["$stateProvider", "$urlRouterProvider", function($stateProvider,$urlRouterProvider){
    "ngInject";
    //$stateProvider.when("");
    $urlRouterProvider.when("","home");
    $urlRouterProvider.when("/","home");

    function getUrl(_url){
        return "http://localhost:5000/html/"+_url;
    }

    $stateProvider
    .state("home", {
        url: "/home",
        templateUrl: getUrl("index.html"),
        controller: "indexCtrl"
    })
    .state("medal",{
        url: "/medal",
        templateUrl: getUrl("index.html"),
        controller: "indexCtrl"
    })
    .state("medal.item",{
         url: "/medalItem",
         templateUrl: getUrl("medal-item.html"),
         controller: "medalItemCtrl"
    })
    .state("goodIdea",{
        url: "gIdea",
        templateUrl: getUrl("goodIdea.html"),
        controller: "goodIdeaCtrl"
    })

}])

var dr = angular.module("directive",[]);
dr.directive("inputFocus",function(){
    return function(scope,element,attrs){
        element.children().eq(0).on('click',function(){
            scope.toInput = true;
            document.getElementById('search-input').focus();
        })
    }
})


var index = angular.module("index_ctrl",[]);
index.controller("indexCtrl",["$scope", "$location", "Index", function($scope,$location,Index){
    "ngInject";
    Index.init();
    init();
    $scope.setTab = function(){
        init();
    }

    function init(){
        $scope.tabIndex = Index.getIndex();
        $scope.curPage = Index.getCurPage();
        $scope.curCtrl = Index.getCurCtrl();
    }
}]);

var media = angular.module("medal_ctrl",[]);
media.controller("medalCtrl",function(){

})

var app = angular.module("ItMadelApp",['ngMaterial','directive','index_ctrl','medal_ctrl','ui.router']);
app.config(["$stateProvider", "$urlRouterProvider", function($stateProvider,$urlRouterProvider){
    "ngInject";
    //$stateProvider.when("");
    $urlRouterProvider.when("","home");
    $urlRouterProvider.when("/","home");

    function getUrl(_url){
        return "http://localhost:5000/html/"+_url;
    }

    $stateProvider
    .state("home", {
        url: "/home",
        templateUrl: getUrl("index.html"),
        controller: "indexCtrl"
    })
    .state("medal",{
        url: "/medal",
        templateUrl: getUrl("index.html"),
        controller: "indexCtrl"
    })
    .state("medal.item",{
         url: "/medalItem",
         templateUrl: getUrl("medal-item.html"),
         controller: "medalItemCtrl"
    })
    .state("goodIdea",{
        url: "gIdea",
        templateUrl: getUrl("goodIdea.html"),
        controller: "goodIdeaCtrl"
    })

}])

var dr = angular.module("directive",[]);
dr.directive("inputFocus",function(){
    return function(scope,element,attrs){
        element.children().eq(0).on('click',function(){
            scope.toInput = true;
            document.getElementById('search-input').focus();
        })
    }
})


var index = angular.module("index_ctrl",[]);
index.controller("indexCtrl",["$scope", "$location", "Index", function($scope,$location,Index){
    "ngInject";
    Index.init();
    init();
    $scope.setTab = function(){
        init();
    }

    function init(){
        $scope.tabIndex = Index.getIndex();
        $scope.curPage = Index.getCurPage();
        $scope.curCtrl = Index.getCurCtrl();
    }
}]);

var media = angular.module("medal_ctrl",[]);
media.controller("medalCtrl",function(){

})

var app = angular.module("ItMadelApp",['ngMaterial','directive','index_ctrl','medal_ctrl','ui.router']);
app.config(["$stateProvider", "$urlRouterProvider", function($stateProvider,$urlRouterProvider){
    "ngInject";
    //$stateProvider.when("");
    $urlRouterProvider.when("","home");
    $urlRouterProvider.when("/","home");

    function getUrl(_url){
        return "http://localhost:5000/html/"+_url;
    }

    $stateProvider
    .state("home", {
        url: "/home",
        templateUrl: getUrl("index.html"),
        controller: "indexCtrl"
    })
    .state("medal",{
        url: "/medal",
        templateUrl: getUrl("index.html"),
        controller: "indexCtrl"
    })
    .state("medal.item",{
         url: "/medalItem",
         templateUrl: getUrl("medal-item.html"),
         controller: "medalItemCtrl"
    })
    .state("goodIdea",{
        url: "gIdea",
        templateUrl: getUrl("goodIdea.html"),
        controller: "goodIdeaCtrl"
    })

}])

var dr = angular.module("directive",[]);
dr.directive("inputFocus",function(){
    return function(scope,element,attrs){
        element.children().eq(0).on('click',function(){
            scope.toInput = true;
            document.getElementById('search-input').focus();
        })
    }
})


var index = angular.module("index_ctrl",[]);
index.controller("indexCtrl",["$scope", "$location", "Index", function($scope,$location,Index){
    "ngInject";
    Index.init();
    init();
    $scope.setTab = function(){
        init();
    }

    function init(){
        $scope.tabIndex = Index.getIndex();
        $scope.curPage = Index.getCurPage();
        $scope.curCtrl = Index.getCurCtrl();
    }
}]);

var media = angular.module("medal_ctrl",[]);
media.controller("medalCtrl",function(){

})

var app = angular.module("ItMadelApp",['ngMaterial','directive','index_ctrl','medal_ctrl','ui.router']);
app.config(["$stateProvider", "$urlRouterProvider", function($stateProvider,$urlRouterProvider){
    "ngInject";
    //$stateProvider.when("");
    $urlRouterProvider.when("","home");
    $urlRouterProvider.when("/","home");

    function getUrl(_url){
        return "http://localhost:5000/html/"+_url;
    }

    $stateProvider
    .state("home", {
        url: "/home",
        templateUrl: getUrl("index.html"),
        controller: "indexCtrl"
    })
    .state("medal",{
        url: "/medal",
        templateUrl: getUrl("index.html"),
        controller: "indexCtrl"
    })
    .state("medal.item",{
         url: "/medalItem",
         templateUrl: getUrl("medal-item.html"),
         controller: "medalItemCtrl"
    })
    .state("goodIdea",{
        url: "gIdea",
        templateUrl: getUrl("goodIdea.html"),
        controller: "goodIdeaCtrl"
    })

}])

var dr = angular.module("directive",[]);
dr.directive("inputFocus",function(){
    return function(scope,element,attrs){
        element.children().eq(0).on('click',function(){
            scope.toInput = true;
            document.getElementById('search-input').focus();
        })
    }
})


var index = angular.module("index_ctrl",[]);
index.controller("indexCtrl",["$scope", "$location", "Index", function($scope,$location,Index){
    "ngInject";
    Index.init();
    init();
    $scope.setTab = function(){
        init();
    }

    function init(){
        $scope.tabIndex = Index.getIndex();
        $scope.curPage = Index.getCurPage();
        $scope.curCtrl = Index.getCurCtrl();
    }
}]);

var media = angular.module("medal_ctrl",[]);
media.controller("medalCtrl",function(){

})

var app = angular.module("ItMadelApp",['ngMaterial','directive','index_ctrl','medal_ctrl','ui.router']);
app.config(["$stateProvider", "$urlRouterProvider", function($stateProvider,$urlRouterProvider){
    "ngInject";
    //$stateProvider.when("");
    $urlRouterProvider.when("","home");
    $urlRouterProvider.when("/","home");

    function getUrl(_url){
        return "http://localhost:5000/html/"+_url;
    }

    $stateProvider
    .state("home", {
        url: "/home",
        templateUrl: getUrl("index.html"),
        controller: "indexCtrl"
    })
    .state("medal",{
        url: "/medal",
        templateUrl: getUrl("index.html"),
        controller: "indexCtrl"
    })
    .state("medal.item",{
         url: "/medalItem",
         templateUrl: getUrl("medal-item.html"),
         controller: "medalItemCtrl"
    })
    .state("goodIdea",{
        url: "gIdea",
        templateUrl: getUrl("goodIdea.html"),
        controller: "goodIdeaCtrl"
    })

}])

var dr = angular.module("directive",[]);
dr.directive("inputFocus",function(){
    return function(scope,element,attrs){
        element.children().eq(0).on('click',function(){
            scope.toInput = true;
            document.getElementById('search-input').focus();
        })
    }
})


var index = angular.module("index_ctrl",[]);
index.controller("indexCtrl",["$scope", "$location", "Index", function($scope,$location,Index){
    "ngInject";
    Index.init();
    init();
    $scope.setTab = function(){
        init();
    }

    function init(){
        $scope.tabIndex = Index.getIndex();
        $scope.curPage = Index.getCurPage();
        $scope.curCtrl = Index.getCurCtrl();
    }
}]);

var media = angular.module("medal_ctrl",[]);
media.controller("medalCtrl",function(){

})

var app = angular.module("ItMadelApp",['ngMaterial','directive','index_ctrl','medal_ctrl','ui.router']);
app.config(["$stateProvider", "$urlRouterProvider", function($stateProvider,$urlRouterProvider){
    "ngInject";
    //$stateProvider.when("");
    $urlRouterProvider.when("","home");
    $urlRouterProvider.when("/","home");

    function getUrl(_url){
        return "http://localhost:5000/html/"+_url;
    }

    $stateProvider
    .state("home", {
        url: "/home",
        templateUrl: getUrl("index.html"),
        controller: "indexCtrl"
    })
    .state("medal",{
        url: "/medal",
        templateUrl: getUrl("index.html"),
        controller: "indexCtrl"
    })
    .state("medal.item",{
         url: "/medalItem",
         templateUrl: getUrl("medal-item.html"),
         controller: "medalItemCtrl"
    })
    .state("goodIdea",{
        url: "gIdea",
        templateUrl: getUrl("goodIdea.html"),
        controller: "goodIdeaCtrl"
    })

}])

var dr = angular.module("directive",[]);
dr.directive("inputFocus",function(){
    return function(scope,element,attrs){
        element.children().eq(0).on('click',function(){
            scope.toInput = true;
            document.getElementById('search-input').focus();
        })
    }
})


var index = angular.module("index_ctrl",[]);
index.controller("indexCtrl",["$scope", "$location", "Index", function($scope,$location,Index){
    "ngInject";
    Index.init();
    init();
    $scope.setTab = function(){
        init();
    }

    function init(){
        $scope.tabIndex = Index.getIndex();
        $scope.curPage = Index.getCurPage();
        $scope.curCtrl = Index.getCurCtrl();
    }
}]);

var media = angular.module("medal_ctrl",[]);
media.controller("medalCtrl",function(){

})

var app = angular.module("ItMadelApp",['ngMaterial','directive','index_ctrl','medal_ctrl','ui.router']);
app.config(["$stateProvider", "$urlRouterProvider", function($stateProvider,$urlRouterProvider){
    "ngInject";
    //$stateProvider.when("");
    $urlRouterProvider.when("","home");
    $urlRouterProvider.when("/","home");

    function getUrl(_url){
        return "http://localhost:5000/html/"+_url;
    }

    $stateProvider
    .state("home", {
        url: "/home",
        templateUrl: getUrl("index.html"),
        controller: "indexCtrl"
    })
    .state("medal",{
        url: "/medal",
        templateUrl: getUrl("index.html"),
        controller: "indexCtrl"
    })
    .state("medal.item",{
         url: "/medalItem",
         templateUrl: getUrl("medal-item.html"),
         controller: "medalItemCtrl"
    })
    .state("goodIdea",{
        url: "gIdea",
        templateUrl: getUrl("goodIdea.html"),
        controller: "goodIdeaCtrl"
    })

}])

var dr = angular.module("directive",[]);
dr.directive("inputFocus",function(){
    return function(scope,element,attrs){
        element.children().eq(0).on('click',function(){
            scope.toInput = true;
            document.getElementById('search-input').focus();
        })
    }
})


var index = angular.module("index_ctrl",[]);
index.controller("indexCtrl",["$scope", "$location", "Index", function($scope,$location,Index){
    "ngInject";
    Index.init();
    init();
    $scope.setTab = function(){
        init();
    }

    function init(){
        $scope.tabIndex = Index.getIndex();
        $scope.curPage = Index.getCurPage();
        $scope.curCtrl = Index.getCurCtrl();
    }
}]);

var media = angular.module("medal_ctrl",[]);
media.controller("medalCtrl",function(){

})

var app = angular.module("ItMadelApp",['ngMaterial','directive','index_ctrl','medal_ctrl','ui.router']);
app.config(["$stateProvider", "$urlRouterProvider", function($stateProvider,$urlRouterProvider){
    "ngInject";
    //$stateProvider.when("");
    $urlRouterProvider.when("","home");
    $urlRouterProvider.when("/","home");

    function getUrl(_url){
        return "http://localhost:5000/html/"+_url;
    }

    $stateProvider
    .state("home", {
        url: "/home",
        templateUrl: getUrl("index.html"),
        controller: "indexCtrl"
    })
    .state("medal",{
        url: "/medal",
        templateUrl: getUrl("index.html"),
        controller: "indexCtrl"
    })
    .state("medal.item",{
         url: "/medalItem",
         templateUrl: getUrl("medal-item.html"),
         controller: "medalItemCtrl"
    })
    .state("goodIdea",{
        url: "gIdea",
        templateUrl: getUrl("goodIdea.html"),
        controller: "goodIdeaCtrl"
    })

}])

var dr = angular.module("directive",[]);
dr.directive("inputFocus",function(){
    return function(scope,element,attrs){
        element.children().eq(0).on('click',function(){
            scope.toInput = true;
            document.getElementById('search-input').focus();
        })
    }
})


var index = angular.module("index_ctrl",[]);
index.controller("indexCtrl",["$scope", "$location", "Index", function($scope,$location,Index){
    "ngInject";
    Index.init();
    init();
    $scope.setTab = function(){
        init();
    }

    function init(){
        $scope.tabIndex = Index.getIndex();
        $scope.curPage = Index.getCurPage();
        $scope.curCtrl = Index.getCurCtrl();
    }
}]);

var media = angular.module("medal_ctrl",[]);
media.controller("medalCtrl",function(){

})

var app = angular.module("ItMadelApp",['ngMaterial','directive','index_ctrl','medal_ctrl','ui.router']);
app.config(["$stateProvider", "$urlRouterProvider", function($stateProvider,$urlRouterProvider){
    "ngInject";
    //$stateProvider.when("");
    $urlRouterProvider.when("","home");
    $urlRouterProvider.when("/","home");

    function getUrl(_url){
        return "http://localhost:5000/html/"+_url;
    }

    $stateProvider
    .state("home", {
        url: "/home",
        templateUrl: getUrl("index.html"),
        controller: "indexCtrl"
    })
    .state("medal",{
        url: "/medal",
        templateUrl: getUrl("index.html"),
        controller: "indexCtrl"
    })
    .state("medal.item",{
         url: "/medalItem",
         templateUrl: getUrl("medal-item.html"),
         controller: "medalItemCtrl"
    })
    .state("goodIdea",{
        url: "gIdea",
        templateUrl: getUrl("goodIdea.html"),
        controller: "goodIdeaCtrl"
    })

}])

var dr = angular.module("directive",[]);
dr.directive("inputFocus",function(){
    return function(scope,element,attrs){
        element.children().eq(0).on('click',function(){
            scope.toInput = true;
            document.getElementById('search-input').focus();
        })
    }
})


var index = angular.module("index_ctrl",[]);
index.controller("indexCtrl",["$scope", "$location", "Index", function($scope,$location,Index){
    "ngInject";
    Index.init();
    init();
    $scope.setTab = function(){
        init();
    }

    function init(){
        $scope.tabIndex = Index.getIndex();
        $scope.curPage = Index.getCurPage();
        $scope.curCtrl = Index.getCurCtrl();
    }
}]);

var media = angular.module("medal_ctrl",[]);
media.controller("medalCtrl",function(){

})

var app = angular.module("ItMadelApp",['ngMaterial','directive','index_ctrl','medal_ctrl','ui.router']);
app.config(["$stateProvider", "$urlRouterProvider", function($stateProvider,$urlRouterProvider){
    "ngInject";
    //$stateProvider.when("");
    $urlRouterProvider.when("","home");
    $urlRouterProvider.when("/","home");

    function getUrl(_url){
        return "http://localhost:5000/html/"+_url;
    }

    $stateProvider
    .state("home", {
        url: "/home",
        templateUrl: getUrl("index.html"),
        controller: "indexCtrl"
    })
    .state("medal",{
        url: "/medal",
        templateUrl: getUrl("index.html"),
        controller: "indexCtrl"
    })
    .state("medal.item",{
         url: "/medalItem",
         templateUrl: getUrl("medal-item.html"),
         controller: "medalItemCtrl"
    })
    .state("goodIdea",{
        url: "gIdea",
        templateUrl: getUrl("goodIdea.html"),
        controller: "goodIdeaCtrl"
    })

}])

var dr = angular.module("directive",[]);
dr.directive("inputFocus",function(){
    return function(scope,element,attrs){
        element.children().eq(0).on('click',function(){
            scope.toInput = true;
            document.getElementById('search-input').focus();
        })
    }
})


var index = angular.module("index_ctrl",[]);
index.controller("indexCtrl",["$scope", "$location", "Index", function($scope,$location,Index){
    "ngInject";
    Index.init();
    init();
    $scope.setTab = function(){
        init();
    }

    function init(){
        $scope.tabIndex = Index.getIndex();
        $scope.curPage = Index.getCurPage();
        $scope.curCtrl = Index.getCurCtrl();
    }
}]);

var media = angular.module("medal_ctrl",[]);
media.controller("medalCtrl",function(){

})

var app = angular.module("ItMadelApp",['ngMaterial','directive','index_ctrl','medal_ctrl','ui.router']);
app.config(["$stateProvider", "$urlRouterProvider", function($stateProvider,$urlRouterProvider){
    "ngInject";
    //$stateProvider.when("");
    $urlRouterProvider.when("","home");
    $urlRouterProvider.when("/","home");

    function getUrl(_url){
        return "http://localhost:5000/html/"+_url;
    }

    $stateProvider
    .state("home", {
        url: "/home",
        templateUrl: getUrl("index.html"),
        controller: "indexCtrl"
    })
    .state("medal",{
        url: "/medal",
        templateUrl: getUrl("index.html"),
        controller: "indexCtrl"
    })
    .state("medal.item",{
         url: "/medalItem",
         templateUrl: getUrl("medal-item.html"),
         controller: "medalItemCtrl"
    })
    .state("goodIdea",{
        url: "gIdea",
        templateUrl: getUrl("goodIdea.html"),
        controller: "goodIdeaCtrl"
    })

}])

var dr = angular.module("directive",[]);
dr.directive("inputFocus",function(){
    return function(scope,element,attrs){
        element.children().eq(0).on('click',function(){
            scope.toInput = true;
            document.getElementById('search-input').focus();
        })
    }
})


var index = angular.module("index_ctrl",[]);
index.controller("indexCtrl",["$scope", "$location", "Index", function($scope,$location,Index){
    "ngInject";
    Index.init();
    init();
    $scope.setTab = function(){
        init();
    }

    function init(){
        $scope.tabIndex = Index.getIndex();
        $scope.curPage = Index.getCurPage();
        $scope.curCtrl = Index.getCurCtrl();
    }
}]);

var media = angular.module("medal_ctrl",[]);
media.controller("medalCtrl",function(){

})

var app = angular.module("ItMadelApp",['ngMaterial','directive','index_ctrl','medal_ctrl','ui.router']);
app.config(["$stateProvider", "$urlRouterProvider", function($stateProvider,$urlRouterProvider){
    "ngInject";
    //$stateProvider.when("");
    $urlRouterProvider.when("","home");
    $urlRouterProvider.when("/","home");

    function getUrl(_url){
        return "http://localhost:5000/html/"+_url;
    }

    $stateProvider
    .state("home", {
        url: "/home",
        templateUrl: getUrl("index.html"),
        controller: "indexCtrl"
    })
    .state("medal",{
        url: "/medal",
        templateUrl: getUrl("index.html"),
        controller: "indexCtrl"
    })
    .state("medal.item",{
         url: "/medalItem",
         templateUrl: getUrl("medal-item.html"),
         controller: "medalItemCtrl"
    })
    .state("goodIdea",{
        url: "gIdea",
        templateUrl: getUrl("goodIdea.html"),
        controller: "goodIdeaCtrl"
    })

}])

var dr = angular.module("directive",[]);
dr.directive("inputFocus",function(){
    return function(scope,element,attrs){
        element.children().eq(0).on('click',function(){
            scope.toInput = true;
            document.getElementById('search-input').focus();
        })
    }
})


var index = angular.module("index_ctrl",[]);
index.controller("indexCtrl",["$scope", "$location", "Index", function($scope,$location,Index){
    "ngInject";
    Index.init();
    init();
    $scope.setTab = function(){
        init();
    }

    function init(){
        $scope.tabIndex = Index.getIndex();
        $scope.curPage = Index.getCurPage();
        $scope.curCtrl = Index.getCurCtrl();
    }
}]);

var media = angular.module("medal_ctrl",[]);
media.controller("medalCtrl",function(){

})

var app = angular.module("ItMadelApp",['ngMaterial','directive','index_ctrl','medal_ctrl','ui.router']);
app.config(["$stateProvider", "$urlRouterProvider", function($stateProvider,$urlRouterProvider){
    "ngInject";
    //$stateProvider.when("");
    $urlRouterProvider.when("","home");
    $urlRouterProvider.when("/","home");

    function getUrl(_url){
        return "http://localhost:5000/html/"+_url;
    }

    $stateProvider
    .state("home", {
        url: "/home",
        templateUrl: getUrl("index.html"),
        controller: "indexCtrl"
    })
    .state("medal",{
        url: "/medal",
        templateUrl: getUrl("index.html"),
        controller: "indexCtrl"
    })
    .state("medal.item",{
         url: "/medalItem",
         templateUrl: getUrl("medal-item.html"),
         controller: "medalItemCtrl"
    })
    .state("goodIdea",{
        url: "gIdea",
        templateUrl: getUrl("goodIdea.html"),
        controller: "goodIdeaCtrl"
    })

}])

var dr = angular.module("directive",[]);
dr.directive("inputFocus",function(){
    return function(scope,element,attrs){
        element.children().eq(0).on('click',function(){
            scope.toInput = true;
            document.getElementById('search-input').focus();
        })
    }
})


var index = angular.module("index_ctrl",[]);
index.controller("indexCtrl",["$scope", "$location", "Index", function($scope,$location,Index){
    "ngInject";
    Index.init();
    init();
    $scope.setTab = function(){
        init();
    }

    function init(){
        $scope.tabIndex = Index.getIndex();
        $scope.curPage = Index.getCurPage();
        $scope.curCtrl = Index.getCurCtrl();
    }
}]);

var media = angular.module("medal_ctrl",[]);
media.controller("medalCtrl",function(){

})

var app = angular.module("ItMadelApp",['ngMaterial','directive','index_ctrl','medal_ctrl','ui.router']);
app.config(["$stateProvider", "$urlRouterProvider", function($stateProvider,$urlRouterProvider){
    "ngInject";
    //$stateProvider.when("");
    $urlRouterProvider.when("","home");
    $urlRouterProvider.when("/","home");

    function getUrl(_url){
        return "http://localhost:5000/html/"+_url;
    }

    $stateProvider
    .state("home", {
        url: "/home",
        templateUrl: getUrl("index.html"),
        controller: "indexCtrl"
    })
    .state("medal",{
        url: "/medal",
        templateUrl: getUrl("index.html"),
        controller: "indexCtrl"
    })
    .state("medal.item",{
         url: "/medalItem",
         templateUrl: getUrl("medal-item.html"),
         controller: "medalItemCtrl"
    })
    .state("goodIdea",{
        url: "gIdea",
        templateUrl: getUrl("goodIdea.html"),
        controller: "goodIdeaCtrl"
    })

}])

var dr = angular.module("directive",[]);
dr.directive("inputFocus",function(){
    return function(scope,element,attrs){
        element.children().eq(0).on('click',function(){
            scope.toInput = true;
            document.getElementById('search-input').focus();
        })
    }
})


var index = angular.module("index_ctrl",[]);
index.controller("indexCtrl",["$scope", "$location", "Index", function($scope,$location,Index){
    "ngInject";
    Index.init();
    init();
    $scope.setTab = function(){
        init();
    }

    function init(){
        $scope.tabIndex = Index.getIndex();
        $scope.curPage = Index.getCurPage();
        $scope.curCtrl = Index.getCurCtrl();
    }
}]);

var media = angular.module("medal_ctrl",[]);
media.controller("medalCtrl",function(){

})

var app = angular.module("ItMadelApp",['ngMaterial','directive','index_ctrl','medal_ctrl','ui.router']);
app.config(["$stateProvider", "$urlRouterProvider", function($stateProvider,$urlRouterProvider){
    "ngInject";
    //$stateProvider.when("");
    $urlRouterProvider.when("","home");
    $urlRouterProvider.when("/","home");

    function getUrl(_url){
        return "http://localhost:5000/html/"+_url;
    }

    $stateProvider
    .state("home", {
        url: "/home",
        templateUrl: getUrl("index.html"),
        controller: "indexCtrl"
    })
    .state("medal",{
        url: "/medal",
        templateUrl: getUrl("index.html"),
        controller: "indexCtrl"
    })
    .state("medal.item",{
         url: "/medalItem",
         templateUrl: getUrl("medal-item.html"),
         controller: "medalItemCtrl"
    })
    .state("goodIdea",{
        url: "gIdea",
        templateUrl: getUrl("goodIdea.html"),
        controller: "goodIdeaCtrl"
    })

}])

var dr = angular.module("directive",[]);
dr.directive("inputFocus",function(){
    return function(scope,element,attrs){
        element.children().eq(0).on('click',function(){
            scope.toInput = true;
            document.getElementById('search-input').focus();
        })
    }
})


var index = angular.module("index_ctrl",[]);
index.controller("indexCtrl",["$scope", "$location", "Index", function($scope,$location,Index){
    "ngInject";
    Index.init();
    init();
    $scope.setTab = function(){
        init();
    }

    function init(){
        $scope.tabIndex = Index.getIndex();
        $scope.curPage = Index.getCurPage();
        $scope.curCtrl = Index.getCurCtrl();
    }
}]);

var media = angular.module("medal_ctrl",[]);
media.controller("medalCtrl",function(){

})

var app = angular.module("ItMadelApp",['ngMaterial','directive','index_ctrl','medal_ctrl','ui.router']);
app.config(["$stateProvider", "$urlRouterProvider", function($stateProvider,$urlRouterProvider){
    "ngInject";
    //$stateProvider.when("");
    $urlRouterProvider.when("","home");
    $urlRouterProvider.when("/","home");

    function getUrl(_url){
        return "http://localhost:5000/html/"+_url;
    }

    $stateProvider
    .state("home", {
        url: "/home",
        templateUrl: getUrl("index.html"),
        controller: "indexCtrl"
    })
    .state("medal",{
        url: "/medal",
        templateUrl: getUrl("index.html"),
        controller: "indexCtrl"
    })
    .state("medal.item",{
         url: "/medalItem",
         templateUrl: getUrl("medal-item.html"),
         controller: "medalItemCtrl"
    })
    .state("goodIdea",{
        url: "gIdea",
        templateUrl: getUrl("goodIdea.html"),
        controller: "goodIdeaCtrl"
    })

}])

var dr = angular.module("directive",[]);
dr.directive("inputFocus",function(){
    return function(scope,element,attrs){
        element.children().eq(0).on('click',function(){
            scope.toInput = true;
            document.getElementById('search-input').focus();
        })
    }
})


var index = angular.module("index_ctrl",[]);
index.controller("indexCtrl",["$scope", "$location", "Index", function($scope,$location,Index){
    "ngInject";
    Index.init();
    init();
    $scope.setTab = function(){
        init();
    }

    function init(){
        $scope.tabIndex = Index.getIndex();
        $scope.curPage = Index.getCurPage();
        $scope.curCtrl = Index.getCurCtrl();
    }
}]);

var media = angular.module("medal_ctrl",[]);
media.controller("medalCtrl",function(){

})

var app = angular.module("ItMadelApp",['ngMaterial','directive','index_ctrl','medal_ctrl','ui.router']);
app.config(["$stateProvider", "$urlRouterProvider", function($stateProvider,$urlRouterProvider){
    "ngInject";
    //$stateProvider.when("");
    $urlRouterProvider.when("","home");
    $urlRouterProvider.when("/","home");

    function getUrl(_url){
        return "http://localhost:5000/html/"+_url;
    }

    $stateProvider
    .state("home", {
        url: "/home",
        templateUrl: getUrl("index.html"),
        controller: "indexCtrl"
    })
    .state("medal",{
        url: "/medal",
        templateUrl: getUrl("index.html"),
        controller: "indexCtrl"
    })
    .state("medal.item",{
         url: "/medalItem",
         templateUrl: getUrl("medal-item.html"),
         controller: "medalItemCtrl"
    })
    .state("goodIdea",{
        url: "gIdea",
        templateUrl: getUrl("goodIdea.html"),
        controller: "goodIdeaCtrl"
    })

}])

var dr = angular.module("directive",[]);
dr.directive("inputFocus",function(){
    return function(scope,element,attrs){
        element.children().eq(0).on('click',function(){
            scope.toInput = true;
            document.getElementById('search-input').focus();
        })
    }
})


var index = angular.module("index_ctrl",[]);
index.controller("indexCtrl",["$scope", "$location", "Index", function($scope,$location,Index){
    "ngInject";
    Index.init();
    init();
    $scope.setTab = function(){
        init();
    }

    function init(){
        $scope.tabIndex = Index.getIndex();
        $scope.curPage = Index.getCurPage();
        $scope.curCtrl = Index.getCurCtrl();
    }
}]);

var media = angular.module("medal_ctrl",[]);
media.controller("medalCtrl",function(){

})

var app = angular.module("ItMadelApp",['ngMaterial','directive','index_ctrl','medal_ctrl','ui.router']);
app.config(["$stateProvider", "$urlRouterProvider", function($stateProvider,$urlRouterProvider){
    "ngInject";
    //$stateProvider.when("");
    $urlRouterProvider.when("","home");
    $urlRouterProvider.when("/","home");

    function getUrl(_url){
        return "http://localhost:5000/html/"+_url;
    }

    $stateProvider
    .state("home", {
        url: "/home",
        templateUrl: getUrl("index.html"),
        controller: "indexCtrl"
    })
    .state("medal",{
        url: "/medal",
        templateUrl: getUrl("index.html"),
        controller: "indexCtrl"
    })
    .state("medal.item",{
         url: "/medalItem",
         templateUrl: getUrl("medal-item.html"),
         controller: "medalItemCtrl"
    })
    .state("goodIdea",{
        url: "gIdea",
        templateUrl: getUrl("goodIdea.html"),
        controller: "goodIdeaCtrl"
    })

}])

var dr = angular.module("directive",[]);
dr.directive("inputFocus",function(){
    return function(scope,element,attrs){
        element.children().eq(0).on('click',function(){
            scope.toInput = true;
            document.getElementById('search-input').focus();
        })
    }
})


var index = angular.module("index_ctrl",[]);
index.controller("indexCtrl",["$scope", "$location", "Index", function($scope,$location,Index){
    "ngInject";
    Index.init();
    init();
    $scope.setTab = function(){
        init();
    }

    function init(){
        $scope.tabIndex = Index.getIndex();
        $scope.curPage = Index.getCurPage();
        $scope.curCtrl = Index.getCurCtrl();
    }
}]);

var media = angular.module("medal_ctrl",[]);
media.controller("medalCtrl",function(){

})

var app = angular.module("ItMadelApp",['ngMaterial','directive','index_ctrl','medal_ctrl','ui.router']);
app.config(["$stateProvider", "$urlRouterProvider", function($stateProvider,$urlRouterProvider){
    "ngInject";
    //$stateProvider.when("");
    $urlRouterProvider.when("","home");
    $urlRouterProvider.when("/","home");

    function getUrl(_url){
        return "http://localhost:5000/html/"+_url;
    }

    $stateProvider
    .state("home", {
        url: "/home",
        templateUrl: getUrl("index.html"),
        controller: "indexCtrl"
    })
    .state("medal",{
        url: "/medal",
        templateUrl: getUrl("index.html"),
        controller: "indexCtrl"
    })
    .state("medal.item",{
         url: "/medalItem",
         templateUrl: getUrl("medal-item.html"),
         controller: "medalItemCtrl"
    })
    .state("goodIdea",{
        url: "gIdea",
        templateUrl: getUrl("goodIdea.html"),
        controller: "goodIdeaCtrl"
    })

}])

var dr = angular.module("directive",[]);
dr.directive("inputFocus",function(){
    return function(scope,element,attrs){
        element.children().eq(0).on('click',function(){
            scope.toInput = true;
            document.getElementById('search-input').focus();
        })
    }
})


var index = angular.module("index_ctrl",[]);
index.controller("indexCtrl",["$scope", "$location", "Index", function($scope,$location,Index){
    "ngInject";
    Index.init();
    init();
    $scope.setTab = function(){
        init();
    }

    function init(){
        $scope.tabIndex = Index.getIndex();
        $scope.curPage = Index.getCurPage();
        $scope.curCtrl = Index.getCurCtrl();
    }
}]);

var media = angular.module("medal_ctrl",[]);
media.controller("medalCtrl",function(){

})

var app = angular.module("ItMadelApp",['ngMaterial','directive','index_ctrl','medal_ctrl','ui.router']);
app.config(["$stateProvider", "$urlRouterProvider", function($stateProvider,$urlRouterProvider){
    "ngInject";
    //$stateProvider.when("");
    $urlRouterProvider.when("","home");
    $urlRouterProvider.when("/","home");

    function getUrl(_url){
        return "http://localhost:5000/html/"+_url;
    }

    $stateProvider
    .state("home", {
        url: "/home",
        templateUrl: getUrl("index.html"),
        controller: "indexCtrl"
    })
    .state("medal",{
        url: "/medal",
        templateUrl: getUrl("index.html"),
        controller: "indexCtrl"
    })
    .state("medal.item",{
         url: "/medalItem",
         templateUrl: getUrl("medal-item.html"),
         controller: "medalItemCtrl"
    })
    .state("goodIdea",{
        url: "gIdea",
        templateUrl: getUrl("goodIdea.html"),
        controller: "goodIdeaCtrl"
    })

}])

var dr = angular.module("directive",[]);
dr.directive("inputFocus",function(){
    return function(scope,element,attrs){
        element.children().eq(0).on('click',function(){
            scope.toInput = true;
            document.getElementById('search-input').focus();
        })
    }
})


var index = angular.module("index_ctrl",[]);
index.controller("indexCtrl",["$scope", "$location", "Index", function($scope,$location,Index){
    "ngInject";
    Index.init();
    init();
    $scope.setTab = function(){
        init();
    }

    function init(){
        $scope.tabIndex = Index.getIndex();
        $scope.curPage = Index.getCurPage();
        $scope.curCtrl = Index.getCurCtrl();
    }
}]);

var media = angular.module("medal_ctrl",[]);
media.controller("medalCtrl",function(){

})

var app = angular.module("ItMadelApp",['ngMaterial','directive','index_ctrl','medal_ctrl','ui.router']);
app.config(["$stateProvider", "$urlRouterProvider", function($stateProvider,$urlRouterProvider){
    "ngInject";
    //$stateProvider.when("");
    $urlRouterProvider.when("","home");
    $urlRouterProvider.when("/","home");

    function getUrl(_url){
        return "http://localhost:5000/html/"+_url;
    }

    $stateProvider
    .state("home", {
        url: "/home",
        templateUrl: getUrl("index.html"),
        controller: "indexCtrl"
    })
    .state("medal",{
        url: "/medal",
        templateUrl: getUrl("index.html"),
        controller: "indexCtrl"
    })
    .state("medal.item",{
         url: "/medalItem",
         templateUrl: getUrl("medal-item.html"),
         controller: "medalItemCtrl"
    })
    .state("goodIdea",{
        url: "gIdea",
        templateUrl: getUrl("goodIdea.html"),
        controller: "goodIdeaCtrl"
    })

}])

var dr = angular.module("directive",[]);
dr.directive("inputFocus",function(){
    return function(scope,element,attrs){
        element.children().eq(0).on('click',function(){
            scope.toInput = true;
            document.getElementById('search-input').focus();
        })
    }
})


var index = angular.module("index_ctrl",[]);
index.controller("indexCtrl",["$scope", "$location", "Index", function($scope,$location,Index){
    "ngInject";
    Index.init();
    init();
    $scope.setTab = function(){
        init();
    }

    function init(){
        $scope.tabIndex = Index.getIndex();
        $scope.curPage = Index.getCurPage();
        $scope.curCtrl = Index.getCurCtrl();
    }
}]);

var media = angular.module("medal_ctrl",[]);
media.controller("medalCtrl",function(){

})

var app = angular.module("ItMadelApp",['ngMaterial','directive','index_ctrl','medal_ctrl','ui.router']);
app.config(["$stateProvider", "$urlRouterProvider", function($stateProvider,$urlRouterProvider){
    "ngInject";
    //$stateProvider.when("");
    $urlRouterProvider.when("","home");
    $urlRouterProvider.when("/","home");

    function getUrl(_url){
        return "http://localhost:5000/html/"+_url;
    }

    $stateProvider
    .state("home", {
        url: "/home",
        templateUrl: getUrl("index.html"),
        controller: "indexCtrl"
    })
    .state("medal",{
        url: "/medal",
        templateUrl: getUrl("index.html"),
        controller: "indexCtrl"
    })
    .state("medal.item",{
         url: "/medalItem",
         templateUrl: getUrl("medal-item.html"),
         controller: "medalItemCtrl"
    })
    .state("goodIdea",{
        url: "gIdea",
        templateUrl: getUrl("goodIdea.html"),
        controller: "goodIdeaCtrl"
    })

}])

var dr = angular.module("directive",[]);
dr.directive("inputFocus",function(){
    return function(scope,element,attrs){
        element.children().eq(0).on('click',function(){
            scope.toInput = true;
            document.getElementById('search-input').focus();
        })
    }
})


var index = angular.module("index_ctrl",[]);
index.controller("indexCtrl",["$scope", "$location", "Index", function($scope,$location,Index){
    "ngInject";
    Index.init();
    init();
    $scope.setTab = function(){
        init();
    }

    function init(){
        $scope.tabIndex = Index.getIndex();
        $scope.curPage = Index.getCurPage();
        $scope.curCtrl = Index.getCurCtrl();
    }
}]);

var media = angular.module("medal_ctrl",[]);
media.controller("medalCtrl",function(){

})

var app = angular.module("ItMadelApp",['ngMaterial','directive','index_ctrl','medal_ctrl','ui.router']);
app.config(["$stateProvider", "$urlRouterProvider", function($stateProvider,$urlRouterProvider){
    "ngInject";
    //$stateProvider.when("");
    $urlRouterProvider.when("","home");
    $urlRouterProvider.when("/","home");

    function getUrl(_url){
        return "http://localhost:5000/html/"+_url;
    }

    $stateProvider
    .state("home", {
        url: "/home",
        templateUrl: getUrl("index.html"),
        controller: "indexCtrl"
    })
    .state("medal",{
        url: "/medal",
        templateUrl: getUrl("index.html"),
        controller: "indexCtrl"
    })
    .state("medal.item",{
         url: "/medalItem",
         templateUrl: getUrl("medal-item.html"),
         controller: "medalItemCtrl"
    })
    .state("goodIdea",{
        url: "gIdea",
        templateUrl: getUrl("goodIdea.html"),
        controller: "goodIdeaCtrl"
    })

}])

var dr = angular.module("directive",[]);
dr.directive("inputFocus",function(){
    return function(scope,element,attrs){
        element.children().eq(0).on('click',function(){
            scope.toInput = true;
            document.getElementById('search-input').focus();
        })
    }
})


var index = angular.module("index_ctrl",[]);
index.controller("indexCtrl",["$scope", "$location", "Index", function($scope,$location,Index){
    "ngInject";
    Index.init();
    init();
    $scope.setTab = function(){
        init();
    }

    function init(){
        $scope.tabIndex = Index.getIndex();
        $scope.curPage = Index.getCurPage();
        $scope.curCtrl = Index.getCurCtrl();
    }
}]);

var media = angular.module("medal_ctrl",[]);
media.controller("medalCtrl",function(){

})

var app = angular.module("ItMadelApp",['ngMaterial','directive','index_ctrl','medal_ctrl','ui.router']);
app.config(["$stateProvider", "$urlRouterProvider", function($stateProvider,$urlRouterProvider){
    "ngInject";
    //$stateProvider.when("");
    $urlRouterProvider.when("","home");
    $urlRouterProvider.when("/","home");

    function getUrl(_url){
        return "http://localhost:5000/html/"+_url;
    }

    $stateProvider
    .state("home", {
        url: "/home",
        templateUrl: getUrl("index.html"),
        controller: "indexCtrl"
    })
    .state("medal",{
        url: "/medal",
        templateUrl: getUrl("index.html"),
        controller: "indexCtrl"
    })
    .state("medal.item",{
         url: "/medalItem",
         templateUrl: getUrl("medal-item.html"),
         controller: "medalItemCtrl"
    })
    .state("goodIdea",{
        url: "gIdea",
        templateUrl: getUrl("goodIdea.html"),
        controller: "goodIdeaCtrl"
    })

}])

var dr = angular.module("directive",[]);
dr.directive("inputFocus",function(){
    return function(scope,element,attrs){
        element.children().eq(0).on('click',function(){
            scope.toInput = true;
            document.getElementById('search-input').focus();
        })
    }
})


var index = angular.module("index_ctrl",[]);
index.controller("indexCtrl",["$scope", "$location", "Index", function($scope,$location,Index){
    "ngInject";
    Index.init();
    init();
    $scope.setTab = function(){
        init();
    }

    function init(){
        $scope.tabIndex = Index.getIndex();
        $scope.curPage = Index.getCurPage();
        $scope.curCtrl = Index.getCurCtrl();
    }
}]);

var media = angular.module("medal_ctrl",[]);
media.controller("medalCtrl",function(){

})

var app = angular.module("ItMadelApp",['ngMaterial','directive','index_ctrl','medal_ctrl','ui.router']);
app.config(["$stateProvider", "$urlRouterProvider", function($stateProvider,$urlRouterProvider){
    "ngInject";
    //$stateProvider.when("");
    $urlRouterProvider.when("","home");
    $urlRouterProvider.when("/","home");

    function getUrl(_url){
        return "http://localhost:5000/html/"+_url;
    }

    $stateProvider
    .state("home", {
        url: "/home",
        templateUrl: getUrl("index.html"),
        controller: "indexCtrl"
    })
    .state("medal",{
        url: "/medal",
        templateUrl: getUrl("index.html"),
        controller: "indexCtrl"
    })
    .state("medal.item",{
         url: "/medalItem",
         templateUrl: getUrl("medal-item.html"),
         controller: "medalItemCtrl"
    })
    .state("goodIdea",{
        url: "gIdea",
        templateUrl: getUrl("goodIdea.html"),
        controller: "goodIdeaCtrl"
    })

}])

var dr = angular.module("directive",[]);
dr.directive("inputFocus",function(){
    return function(scope,element,attrs){
        element.children().eq(0).on('click',function(){
            scope.toInput = true;
            document.getElementById('search-input').focus();
        })
    }
})


var index = angular.module("index_ctrl",[]);
index.controller("indexCtrl",["$scope", "$location", "Index", function($scope,$location,Index){
    "ngInject";
    Index.init();
    init();
    $scope.setTab = function(){
        init();
    }

    function init(){
        $scope.tabIndex = Index.getIndex();
        $scope.curPage = Index.getCurPage();
        $scope.curCtrl = Index.getCurCtrl();
    }
}]);

var media = angular.module("medal_ctrl",[]);
media.controller("medalCtrl",function(){

})

var app = angular.module("ItMadelApp",['ngMaterial','directive','index_ctrl','medal_ctrl','ui.router']);
app.config(["$stateProvider", "$urlRouterProvider", function($stateProvider,$urlRouterProvider){
    "ngInject";
    //$stateProvider.when("");
    $urlRouterProvider.when("","home");
    $urlRouterProvider.when("/","home");

    function getUrl(_url){
        return "http://localhost:5000/html/"+_url;
    }

    $stateProvider
    .state("home", {
        url: "/home",
        templateUrl: getUrl("index.html"),
        controller: "indexCtrl"
    })
    .state("medal",{
        url: "/medal",
        templateUrl: getUrl("index.html"),
        controller: "indexCtrl"
    })
    .state("medal.item",{
         url: "/medalItem",
         templateUrl: getUrl("medal-item.html"),
         controller: "medalItemCtrl"
    })
    .state("goodIdea",{
        url: "gIdea",
        templateUrl: getUrl("goodIdea.html"),
        controller: "goodIdeaCtrl"
    })

}])

var dr = angular.module("directive",[]);
dr.directive("inputFocus",function(){
    return function(scope,element,attrs){
        element.children().eq(0).on('click',function(){
            scope.toInput = true;
            document.getElementById('search-input').focus();
        })
    }
})


var index = angular.module("index_ctrl",[]);
index.controller("indexCtrl",["$scope", "$location", "Index", function($scope,$location,Index){
    "ngInject";
    Index.init();
    init();
    $scope.setTab = function(){
        init();
    }

    function init(){
        $scope.tabIndex = Index.getIndex();
        $scope.curPage = Index.getCurPage();
        $scope.curCtrl = Index.getCurCtrl();
    }
}]);

var media = angular.module("medal_ctrl",[]);
media.controller("medalCtrl",function(){

})

var app = angular.module("ItMadelApp",['ngMaterial','directive','index_ctrl','medal_ctrl','ui.router']);
app.config(["$stateProvider", "$urlRouterProvider", function($stateProvider,$urlRouterProvider){
    "ngInject";
    //$stateProvider.when("");
    $urlRouterProvider.when("","home");
    $urlRouterProvider.when("/","home");

    function getUrl(_url){
        return "http://localhost:5000/html/"+_url;
    }

    $stateProvider
    .state("home", {
        url: "/home",
        templateUrl: getUrl("index.html"),
        controller: "indexCtrl"
    })
    .state("medal",{
        url: "/medal",
        templateUrl: getUrl("index.html"),
        controller: "indexCtrl"
    })
    .state("medal.item",{
         url: "/medalItem",
         templateUrl: getUrl("medal-item.html"),
         controller: "medalItemCtrl"
    })
    .state("goodIdea",{
        url: "gIdea",
        templateUrl: getUrl("goodIdea.html"),
        controller: "goodIdeaCtrl"
    })

}])

var dr = angular.module("directive",[]);
dr.directive("inputFocus",function(){
    return function(scope,element,attrs){
        element.children().eq(0).on('click',function(){
            scope.toInput = true;
            document.getElementById('search-input').focus();
        })
    }
})


var index = angular.module("index_ctrl",[]);
index.controller("indexCtrl",["$scope", "$location", "Index", function($scope,$location,Index){
    "ngInject";
    Index.init();
    init();
    $scope.setTab = function(){
        init();
    }

    function init(){
        $scope.tabIndex = Index.getIndex();
        $scope.curPage = Index.getCurPage();
        $scope.curCtrl = Index.getCurCtrl();
    }
}]);

var media = angular.module("medal_ctrl",[]);
media.controller("medalCtrl",function(){

})

var app = angular.module("ItMadelApp",['ngMaterial','directive','index_ctrl','medal_ctrl','ui.router']);
app.config(["$stateProvider", "$urlRouterProvider", function($stateProvider,$urlRouterProvider){
    "ngInject";
    //$stateProvider.when("");
    $urlRouterProvider.when("","home");
    $urlRouterProvider.when("/","home");

    function getUrl(_url){
        return "http://localhost:5000/html/"+_url;
    }

    $stateProvider
    .state("home", {
        url: "/home",
        templateUrl: getUrl("index.html"),
        controller: "indexCtrl"
    })
    .state("medal",{
        url: "/medal",
        templateUrl: getUrl("index.html"),
        controller: "indexCtrl"
    })
    .state("medal.item",{
         url: "/medalItem",
         templateUrl: getUrl("medal-item.html"),
         controller: "medalItemCtrl"
    })
    .state("goodIdea",{
        url: "gIdea",
        templateUrl: getUrl("goodIdea.html"),
        controller: "goodIdeaCtrl"
    })

}])

var dr = angular.module("directive",[]);
dr.directive("inputFocus",function(){
    return function(scope,element,attrs){
        element.children().eq(0).on('click',function(){
            scope.toInput = true;
            document.getElementById('search-input').focus();
        })
    }
})


var index = angular.module("index_ctrl",[]);
index.controller("indexCtrl",["$scope", "$location", "Index", function($scope,$location,Index){
    "ngInject";
    Index.init();
    init();
    $scope.setTab = function(){
        init();
    }

    function init(){
        $scope.tabIndex = Index.getIndex();
        $scope.curPage = Index.getCurPage();
        $scope.curCtrl = Index.getCurCtrl();
    }
}]);

var media = angular.module("medal_ctrl",[]);
media.controller("medalCtrl",function(){

})

var app = angular.module("ItMadelApp",['ngMaterial','directive','index_ctrl','medal_ctrl','ui.router']);
app.config(["$stateProvider", "$urlRouterProvider", function($stateProvider,$urlRouterProvider){
    "ngInject";
    //$stateProvider.when("");
    $urlRouterProvider.when("","home");
    $urlRouterProvider.when("/","home");

    function getUrl(_url){
        return "http://localhost:5000/html/"+_url;
    }

    $stateProvider
    .state("home", {
        url: "/home",
        templateUrl: getUrl("index.html"),
        controller: "indexCtrl"
    })
    .state("medal",{
        url: "/medal",
        templateUrl: getUrl("index.html"),
        controller: "indexCtrl"
    })
    .state("medal.item",{
         url: "/medalItem",
         templateUrl: getUrl("medal-item.html"),
         controller: "medalItemCtrl"
    })
    .state("goodIdea",{
        url: "gIdea",
        templateUrl: getUrl("goodIdea.html"),
        controller: "goodIdeaCtrl"
    })

}])

var dr = angular.module("directive",[]);
dr.directive("inputFocus",function(){
    return function(scope,element,attrs){
        element.children().eq(0).on('click',function(){
            scope.toInput = true;
            document.getElementById('search-input').focus();
        })
    }
})


var index = angular.module("index_ctrl",[]);
index.controller("indexCtrl",["$scope", "$location", "Index", function($scope,$location,Index){
    "ngInject";
    Index.init();
    init();
    $scope.setTab = function(){
        init();
    }

    function init(){
        $scope.tabIndex = Index.getIndex();
        $scope.curPage = Index.getCurPage();
        $scope.curCtrl = Index.getCurCtrl();
    }
}]);

var media = angular.module("medal_ctrl",[]);
media.controller("medalCtrl",function(){

})

var app = angular.module("ItMadelApp",['ngMaterial','directive','index_ctrl','medal_ctrl','ui.router']);
app.config(["$stateProvider", "$urlRouterProvider", function($stateProvider,$urlRouterProvider){
    "ngInject";
    //$stateProvider.when("");
    $urlRouterProvider.when("","home");
    $urlRouterProvider.when("/","home");

    function getUrl(_url){
        return "http://localhost:5000/html/"+_url;
    }

    $stateProvider
    .state("home", {
        url: "/home",
        templateUrl: getUrl("index.html"),
        controller: "indexCtrl"
    })
    .state("medal",{
        url: "/medal",
        templateUrl: getUrl("index.html"),
        controller: "indexCtrl"
    })
    .state("medal.item",{
         url: "/medalItem",
         templateUrl: getUrl("medal-item.html"),
         controller: "medalItemCtrl"
    })
    .state("goodIdea",{
        url: "gIdea",
        templateUrl: getUrl("goodIdea.html"),
        controller: "goodIdeaCtrl"
    })

}])

var dr = angular.module("directive",[]);
dr.directive("inputFocus",function(){
    return function(scope,element,attrs){
        element.children().eq(0).on('click',function(){
            scope.toInput = true;
            document.getElementById('search-input').focus();
        })
    }
})


var index = angular.module("index_ctrl",[]);
index.controller("indexCtrl",["$scope", "$location", "Index", function($scope,$location,Index){
    "ngInject";
    Index.init();
    init();
    $scope.setTab = function(){
        init();
    }

    function init(){
        $scope.tabIndex = Index.getIndex();
        $scope.curPage = Index.getCurPage();
        $scope.curCtrl = Index.getCurCtrl();
    }
}]);

var media = angular.module("medal_ctrl",[]);
media.controller("medalCtrl",function(){

})

var app = angular.module("ItMadelApp",['ngMaterial','directive','index_ctrl','medal_ctrl','ui.router']);
app.config(["$stateProvider", "$urlRouterProvider", function($stateProvider,$urlRouterProvider){
    "ngInject";
    //$stateProvider.when("");
    $urlRouterProvider.when("","home");
    $urlRouterProvider.when("/","home");

    function getUrl(_url){
        return "http://localhost:5000/html/"+_url;
    }

    $stateProvider
    .state("home", {
        url: "/home",
        templateUrl: getUrl("index.html"),
        controller: "indexCtrl"
    })
    .state("medal",{
        url: "/medal",
        templateUrl: getUrl("index.html"),
        controller: "indexCtrl"
    })
    .state("medal.item",{
         url: "/medalItem",
         templateUrl: getUrl("medal-item.html"),
         controller: "medalItemCtrl"
    })
    .state("goodIdea",{
        url: "gIdea",
        templateUrl: getUrl("goodIdea.html"),
        controller: "goodIdeaCtrl"
    })

}])

var dr = angular.module("directive",[]);
dr.directive("inputFocus",function(){
    return function(scope,element,attrs){
        element.children().eq(0).on('click',function(){
            scope.toInput = true;
            document.getElementById('search-input').focus();
        })
    }
})


var index = angular.module("index_ctrl",[]);
index.controller("indexCtrl",["$scope", "$location", "Index", function($scope,$location,Index){
    "ngInject";
    Index.init();
    init();
    $scope.setTab = function(){
        init();
    }

    function init(){
        $scope.tabIndex = Index.getIndex();
        $scope.curPage = Index.getCurPage();
        $scope.curCtrl = Index.getCurCtrl();
    }
}]);

var media = angular.module("medal_ctrl",[]);
media.controller("medalCtrl",function(){

})

var app = angular.module("ItMadelApp",['ngMaterial','directive','index_ctrl','medal_ctrl','ui.router']);
app.config(["$stateProvider", "$urlRouterProvider", function($stateProvider,$urlRouterProvider){
    "ngInject";
    //$stateProvider.when("");
    $urlRouterProvider.when("","home");
    $urlRouterProvider.when("/","home");

    function getUrl(_url){
        return "http://localhost:5000/html/"+_url;
    }

    $stateProvider
    .state("home", {
        url: "/home",
        templateUrl: getUrl("index.html"),
        controller: "indexCtrl"
    })
    .state("medal",{
        url: "/medal",
        templateUrl: getUrl("index.html"),
        controller: "indexCtrl"
    })
    .state("medal.item",{
         url: "/medalItem",
         templateUrl: getUrl("medal-item.html"),
         controller: "medalItemCtrl"
    })
    .state("goodIdea",{
        url: "gIdea",
        templateUrl: getUrl("goodIdea.html"),
        controller: "goodIdeaCtrl"
    })

}])

var dr = angular.module("directive",[]);
dr.directive("inputFocus",function(){
    return function(scope,element,attrs){
        element.children().eq(0).on('click',function(){
            scope.toInput = true;
            document.getElementById('search-input').focus();
        })
    }
})


var index = angular.module("index_ctrl",[]);
index.controller("indexCtrl",["$scope", "$location", "Index", function($scope,$location,Index){
    "ngInject";
    Index.init();
    init();
    $scope.setTab = function(){
        init();
    }

    function init(){
        $scope.tabIndex = Index.getIndex();
        $scope.curPage = Index.getCurPage();
        $scope.curCtrl = Index.getCurCtrl();
    }
}]);

var media = angular.module("medal_ctrl",[]);
media.controller("medalCtrl",function(){

})

var app = angular.module("ItMadelApp",['ngMaterial','directive','index_ctrl','medal_ctrl','ui.router']);
app.config(["$stateProvider", "$urlRouterProvider", function($stateProvider,$urlRouterProvider){
    "ngInject";
    //$stateProvider.when("");
    $urlRouterProvider.when("","home");
    $urlRouterProvider.when("/","home");

    function getUrl(_url){
        return "http://localhost:5000/html/"+_url;
    }

    $stateProvider
    .state("home", {
        url: "/home",
        templateUrl: getUrl("index.html"),
        controller: "indexCtrl"
    })
    .state("medal",{
        url: "/medal",
        templateUrl: getUrl("index.html"),
        controller: "indexCtrl"
    })
    .state("medal.item",{
         url: "/medalItem",
         templateUrl: getUrl("medal-item.html"),
         controller: "medalItemCtrl"
    })
    .state("goodIdea",{
        url: "gIdea",
        templateUrl: getUrl("goodIdea.html"),
        controller: "goodIdeaCtrl"
    })

}])

var dr = angular.module("directive",[]);
dr.directive("inputFocus",function(){
    return function(scope,element,attrs){
        element.children().eq(0).on('click',function(){
            scope.toInput = true;
            document.getElementById('search-input').focus();
        })
    }
})


var index = angular.module("index_ctrl",[]);
index.controller("indexCtrl",["$scope", "$location", "Index", function($scope,$location,Index){
    "ngInject";
    Index.init();
    init();
    $scope.setTab = function(){
        init();
    }

    function init(){
        $scope.tabIndex = Index.getIndex();
        $scope.curPage = Index.getCurPage();
        $scope.curCtrl = Index.getCurCtrl();
    }
}]);

var media = angular.module("medal_ctrl",[]);
media.controller("medalCtrl",function(){

})

var app = angular.module("ItMadelApp",['ngMaterial','directive','index_ctrl','medal_ctrl','ui.router']);
app.config(["$stateProvider", "$urlRouterProvider", function($stateProvider,$urlRouterProvider){
    "ngInject";
    //$stateProvider.when("");
    $urlRouterProvider.when("","home");
    $urlRouterProvider.when("/","home");

    function getUrl(_url){
        return "http://localhost:5000/html/"+_url;
    }

    $stateProvider
    .state("home", {
        url: "/home",
        templateUrl: getUrl("index.html"),
        controller: "indexCtrl"
    })
    .state("medal",{
        url: "/medal",
        templateUrl: getUrl("index.html"),
        controller: "indexCtrl"
    })
    .state("medal.item",{
         url: "/medalItem",
         templateUrl: getUrl("medal-item.html"),
         controller: "medalItemCtrl"
    })
    .state("goodIdea",{
        url: "gIdea",
        templateUrl: getUrl("goodIdea.html"),
        controller: "goodIdeaCtrl"
    })

}])

var dr = angular.module("directive",[]);
dr.directive("inputFocus",function(){
    return function(scope,element,attrs){
        element.children().eq(0).on('click',function(){
            scope.toInput = true;
            document.getElementById('search-input').focus();
        })
    }
})


var index = angular.module("index_ctrl",[]);
index.controller("indexCtrl",["$scope", "$location", "Index", function($scope,$location,Index){
    "ngInject";
    Index.init();
    init();
    $scope.setTab = function(){
        init();
    }

    function init(){
        $scope.tabIndex = Index.getIndex();
        $scope.curPage = Index.getCurPage();
        $scope.curCtrl = Index.getCurCtrl();
    }
}]);

var media = angular.module("medal_ctrl",[]);
media.controller("medalCtrl",function(){

})

var app = angular.module("ItMadelApp",['ngMaterial','directive','index_ctrl','medal_ctrl','ui.router']);
app.config(["$stateProvider", "$urlRouterProvider", function($stateProvider,$urlRouterProvider){
    "ngInject";
    //$stateProvider.when("");
    $urlRouterProvider.when("","home");
    $urlRouterProvider.when("/","home");

    function getUrl(_url){
        return "http://localhost:5000/html/"+_url;
    }

    $stateProvider
    .state("home", {
        url: "/home",
        templateUrl: getUrl("index.html"),
        controller: "indexCtrl"
    })
    .state("medal",{
        url: "/medal",
        templateUrl: getUrl("index.html"),
        controller: "indexCtrl"
    })
    .state("medal.item",{
         url: "/medalItem",
         templateUrl: getUrl("medal-item.html"),
         controller: "medalItemCtrl"
    })
    .state("goodIdea",{
        url: "gIdea",
        templateUrl: getUrl("goodIdea.html"),
        controller: "goodIdeaCtrl"
    })

}])

var dr = angular.module("directive",[]);
dr.directive("inputFocus",function(){
    return function(scope,element,attrs){
        element.children().eq(0).on('click',function(){
            scope.toInput = true;
            document.getElementById('search-input').focus();
        })
    }
})


var index = angular.module("index_ctrl",[]);
index.controller("indexCtrl",["$scope", "$location", "Index", function($scope,$location,Index){
    "ngInject";
    Index.init();
    init();
    $scope.setTab = function(){
        init();
    }

    function init(){
        $scope.tabIndex = Index.getIndex();
        $scope.curPage = Index.getCurPage();
        $scope.curCtrl = Index.getCurCtrl();
    }
}]);

var media = angular.module("medal_ctrl",[]);
media.controller("medalCtrl",function(){

})

var app = angular.module("ItMadelApp",['ngMaterial','directive','index_ctrl','medal_ctrl','ui.router']);
app.config(["$stateProvider", "$urlRouterProvider", function($stateProvider,$urlRouterProvider){
    "ngInject";
    //$stateProvider.when("");
    $urlRouterProvider.when("","home");
    $urlRouterProvider.when("/","home");

    function getUrl(_url){
        return "http://localhost:5000/html/"+_url;
    }

    $stateProvider
    .state("home", {
        url: "/home",
        templateUrl: getUrl("index.html"),
        controller: "indexCtrl"
    })
    .state("medal",{
        url: "/medal",
        templateUrl: getUrl("index.html"),
        controller: "indexCtrl"
    })
    .state("medal.item",{
         url: "/medalItem",
         templateUrl: getUrl("medal-item.html"),
         controller: "medalItemCtrl"
    })
    .state("goodIdea",{
        url: "gIdea",
        templateUrl: getUrl("goodIdea.html"),
        controller: "goodIdeaCtrl"
    })

}])

var dr = angular.module("directive",[]);
dr.directive("inputFocus",function(){
    return function(scope,element,attrs){
        element.children().eq(0).on('click',function(){
            scope.toInput = true;
            document.getElementById('search-input').focus();
        })
    }
})


var index = angular.module("index_ctrl",[]);
index.controller("indexCtrl",["$scope", "$location", "Index", function($scope,$location,Index){
    "ngInject";
    Index.init();
    init();
    $scope.setTab = function(){
        init();
    }

    function init(){
        $scope.tabIndex = Index.getIndex();
        $scope.curPage = Index.getCurPage();
        $scope.curCtrl = Index.getCurCtrl();
    }
}]);

var media = angular.module("medal_ctrl",[]);
media.controller("medalCtrl",function(){

})

var app = angular.module("ItMadelApp",['ngMaterial','directive','index_ctrl','medal_ctrl','ui.router']);
app.config(["$stateProvider", "$urlRouterProvider", function($stateProvider,$urlRouterProvider){
    "ngInject";
    //$stateProvider.when("");
    $urlRouterProvider.when("","home");
    $urlRouterProvider.when("/","home");

    function getUrl(_url){
        return "http://localhost:5000/html/"+_url;
    }

    $stateProvider
    .state("home", {
        url: "/home",
        templateUrl: getUrl("index.html"),
        controller: "indexCtrl"
    })
    .state("medal",{
        url: "/medal",
        templateUrl: getUrl("index.html"),
        controller: "indexCtrl"
    })
    .state("medal.item",{
         url: "/medalItem",
         templateUrl: getUrl("medal-item.html"),
         controller: "medalItemCtrl"
    })
    .state("goodIdea",{
        url: "gIdea",
        templateUrl: getUrl("goodIdea.html"),
        controller: "goodIdeaCtrl"
    })

}])

var dr = angular.module("directive",[]);
dr.directive("inputFocus",function(){
    return function(scope,element,attrs){
        element.children().eq(0).on('click',function(){
            scope.toInput = true;
            document.getElementById('search-input').focus();
        })
    }
})


var index = angular.module("index_ctrl",[]);
index.controller("indexCtrl",["$scope", "$location", "Index", function($scope,$location,Index){
    "ngInject";
    Index.init();
    init();
    $scope.setTab = function(){
        init();
    }

    function init(){
        $scope.tabIndex = Index.getIndex();
        $scope.curPage = Index.getCurPage();
        $scope.curCtrl = Index.getCurCtrl();
    }
}]);

var media = angular.module("medal_ctrl",[]);
media.controller("medalCtrl",function(){

})

var app = angular.module("ItMadelApp",['ngMaterial','directive','index_ctrl','medal_ctrl','ui.router']);
app.config(["$stateProvider", "$urlRouterProvider", function($stateProvider,$urlRouterProvider){
    "ngInject";
    //$stateProvider.when("");
    $urlRouterProvider.when("","home");
    $urlRouterProvider.when("/","home");

    function getUrl(_url){
        return "http://localhost:5000/html/"+_url;
    }

    $stateProvider
    .state("home", {
        url: "/home",
        templateUrl: getUrl("index.html"),
        controller: "indexCtrl"
    })
    .state("medal",{
        url: "/medal",
        templateUrl: getUrl("index.html"),
        controller: "indexCtrl"
    })
    .state("medal.item",{
         url: "/medalItem",
         templateUrl: getUrl("medal-item.html"),
         controller: "medalItemCtrl"
    })
    .state("goodIdea",{
        url: "gIdea",
        templateUrl: getUrl("goodIdea.html"),
        controller: "goodIdeaCtrl"
    })

}])

var dr = angular.module("directive",[]);
dr.directive("inputFocus",function(){
    return function(scope,element,attrs){
        element.children().eq(0).on('click',function(){
            scope.toInput = true;
            document.getElementById('search-input').focus();
        })
    }
})


var index = angular.module("index_ctrl",[]);
index.controller("indexCtrl",["$scope", "$location", "Index", function($scope,$location,Index){
    "ngInject";
    Index.init();
    init();
    $scope.setTab = function(){
        init();
    }

    function init(){
        $scope.tabIndex = Index.getIndex();
        $scope.curPage = Index.getCurPage();
        $scope.curCtrl = Index.getCurCtrl();
    }
}]);

var media = angular.module("medal_ctrl",[]);
media.controller("medalCtrl",function(){

})

var app = angular.module("ItMadelApp",['ngMaterial','directive','index_ctrl','medal_ctrl','ui.router']);
app.config(["$stateProvider", "$urlRouterProvider", function($stateProvider,$urlRouterProvider){
    "ngInject";
    //$stateProvider.when("");
    $urlRouterProvider.when("","home");
    $urlRouterProvider.when("/","home");

    function getUrl(_url){
        return "http://localhost:5000/html/"+_url;
    }

    $stateProvider
    .state("home", {
        url: "/home",
        templateUrl: getUrl("index.html"),
        controller: "indexCtrl"
    })
    .state("medal",{
        url: "/medal",
        templateUrl: getUrl("index.html"),
        controller: "indexCtrl"
    })
    .state("medal.item",{
         url: "/medalItem",
         templateUrl: getUrl("medal-item.html"),
         controller: "medalItemCtrl"
    })
    .state("goodIdea",{
        url: "gIdea",
        templateUrl: getUrl("goodIdea.html"),
        controller: "goodIdeaCtrl"
    })

}])

var dr = angular.module("directive",[]);
dr.directive("inputFocus",function(){
    return function(scope,element,attrs){
        element.children().eq(0).on('click',function(){
            scope.toInput = true;
            document.getElementById('search-input').focus();
        })
    }
})


var index = angular.module("index_ctrl",[]);
index.controller("indexCtrl",["$scope", "$location", "Index", function($scope,$location,Index){
    "ngInject";
    Index.init();
    init();
    $scope.setTab = function(){
        init();
    }

    function init(){
        $scope.tabIndex = Index.getIndex();
        $scope.curPage = Index.getCurPage();
        $scope.curCtrl = Index.getCurCtrl();
    }
}]);

var media = angular.module("medal_ctrl",[]);
media.controller("medalCtrl",function(){

})

var app = angular.module("ItMadelApp",['ngMaterial','directive','index_ctrl','medal_ctrl','ui.router']);
app.config(["$stateProvider", "$urlRouterProvider", function($stateProvider,$urlRouterProvider){
    "ngInject";
    //$stateProvider.when("");
    $urlRouterProvider.when("","home");
    $urlRouterProvider.when("/","home");

    function getUrl(_url){
        return "http://localhost:5000/html/"+_url;
    }

    $stateProvider
    .state("home", {
        url: "/home",
        templateUrl: getUrl("index.html"),
        controller: "indexCtrl"
    })
    .state("medal",{
        url: "/medal",
        templateUrl: getUrl("index.html"),
        controller: "indexCtrl"
    })
    .state("medal.item",{
         url: "/medalItem",
         templateUrl: getUrl("medal-item.html"),
         controller: "medalItemCtrl"
    })
    .state("goodIdea",{
        url: "gIdea",
        templateUrl: getUrl("goodIdea.html"),
        controller: "goodIdeaCtrl"
    })

}])

var dr = angular.module("directive",[]);
dr.directive("inputFocus",function(){
    return function(scope,element,attrs){
        element.children().eq(0).on('click',function(){
            scope.toInput = true;
            document.getElementById('search-input').focus();
        })
    }
})


var index = angular.module("index_ctrl",[]);
index.controller("indexCtrl",["$scope", "$location", "Index", function($scope,$location,Index){
    "ngInject";
    Index.init();
    init();
    $scope.setTab = function(){
        init();
    }

    function init(){
        $scope.tabIndex = Index.getIndex();
        $scope.curPage = Index.getCurPage();
        $scope.curCtrl = Index.getCurCtrl();
    }
}]);

var media = angular.module("medal_ctrl",[]);
media.controller("medalCtrl",function(){

})

var app = angular.module("ItMadelApp",['ngMaterial','directive','index_ctrl','medal_ctrl','ui.router']);
app.config(["$stateProvider", "$urlRouterProvider", function($stateProvider,$urlRouterProvider){
    "ngInject";
    //$stateProvider.when("");
    $urlRouterProvider.when("","home");
    $urlRouterProvider.when("/","home");

    function getUrl(_url){
        return "http://localhost:5000/html/"+_url;
    }

    $stateProvider
    .state("home", {
        url: "/home",
        templateUrl: getUrl("index.html"),
        controller: "indexCtrl"
    })
    .state("medal",{
        url: "/medal",
        templateUrl: getUrl("index.html"),
        controller: "indexCtrl"
    })
    .state("medal.item",{
         url: "/medalItem",
         templateUrl: getUrl("medal-item.html"),
         controller: "medalItemCtrl"
    })
    .state("goodIdea",{
        url: "gIdea",
        templateUrl: getUrl("goodIdea.html"),
        controller: "goodIdeaCtrl"
    })

}])

var dr = angular.module("directive",[]);
dr.directive("inputFocus",function(){
    return function(scope,element,attrs){
        element.children().eq(0).on('click',function(){
            scope.toInput = true;
            document.getElementById('search-input').focus();
        })
    }
})


var index = angular.module("index_ctrl",[]);
index.controller("indexCtrl",["$scope", "$location", "Index", function($scope,$location,Index){
    "ngInject";
    Index.init();
    init();
    $scope.setTab = function(){
        init();
    }

    function init(){
        $scope.tabIndex = Index.getIndex();
        $scope.curPage = Index.getCurPage();
        $scope.curCtrl = Index.getCurCtrl();
    }
}]);

var media = angular.module("medal_ctrl",[]);
media.controller("medalCtrl",function(){

})

var app = angular.module("ItMadelApp",['ngMaterial','directive','index_ctrl','medal_ctrl','ui.router']);
app.config(["$stateProvider", "$urlRouterProvider", function($stateProvider,$urlRouterProvider){
    "ngInject";
    //$stateProvider.when("");
    $urlRouterProvider.when("","home");
    $urlRouterProvider.when("/","home");

    function getUrl(_url){
        return "http://localhost:5000/html/"+_url;
    }

    $stateProvider
    .state("home", {
        url: "/home",
        templateUrl: getUrl("index.html"),
        controller: "indexCtrl"
    })
    .state("medal",{
        url: "/medal",
        templateUrl: getUrl("index.html"),
        controller: "indexCtrl"
    })
    .state("medal.item",{
         url: "/medalItem",
         templateUrl: getUrl("medal-item.html"),
         controller: "medalItemCtrl"
    })
    .state("goodIdea",{
        url: "gIdea",
        templateUrl: getUrl("goodIdea.html"),
        controller: "goodIdeaCtrl"
    })

}])

var dr = angular.module("directive",[]);
dr.directive("inputFocus",function(){
    return function(scope,element,attrs){
        element.children().eq(0).on('click',function(){
            scope.toInput = true;
            document.getElementById('search-input').focus();
        })
    }
})


var index = angular.module("index_ctrl",[]);
index.controller("indexCtrl",["$scope", "$location", "Index", function($scope,$location,Index){
    "ngInject";
    Index.init();
    init();
    $scope.setTab = function(){
        init();
    }

    function init(){
        $scope.tabIndex = Index.getIndex();
        $scope.curPage = Index.getCurPage();
        $scope.curCtrl = Index.getCurCtrl();
    }
}]);

var media = angular.module("medal_ctrl",[]);
media.controller("medalCtrl",function(){

})

var app = angular.module("ItMadelApp",['ngMaterial','directive','index_ctrl','medal_ctrl','ui.router']);
app.config(["$stateProvider", "$urlRouterProvider", function($stateProvider,$urlRouterProvider){
    "ngInject";
    //$stateProvider.when("");
    $urlRouterProvider.when("","home");
    $urlRouterProvider.when("/","home");

    function getUrl(_url){
        return "http://localhost:5000/html/"+_url;
    }

    $stateProvider
    .state("home", {
        url: "/home",
        templateUrl: getUrl("index.html"),
        controller: "indexCtrl"
    })
    .state("medal",{
        url: "/medal",
        templateUrl: getUrl("index.html"),
        controller: "indexCtrl"
    })
    .state("medal.item",{
         url: "/medalItem",
         templateUrl: getUrl("medal-item.html"),
         controller: "medalItemCtrl"
    })
    .state("goodIdea",{
        url: "gIdea",
        templateUrl: getUrl("goodIdea.html"),
        controller: "goodIdeaCtrl"
    })

}])

var dr = angular.module("directive",[]);
dr.directive("inputFocus",function(){
    return function(scope,element,attrs){
        element.children().eq(0).on('click',function(){
            scope.toInput = true;
            document.getElementById('search-input').focus();
        })
    }
})


var index = angular.module("index_ctrl",[]);
index.controller("indexCtrl",["$scope", "$location", "Index", function($scope,$location,Index){
    "ngInject";
    Index.init();
    init();
    $scope.setTab = function(){
        init();
    }

    function init(){
        $scope.tabIndex = Index.getIndex();
        $scope.curPage = Index.getCurPage();
        $scope.curCtrl = Index.getCurCtrl();
    }
}]);

var media = angular.module("medal_ctrl",[]);
media.controller("medalCtrl",function(){

})

var app = angular.module("ItMadelApp",['ngMaterial','directive','index_ctrl','medal_ctrl','ui.router']);
app.config(["$stateProvider", "$urlRouterProvider", function($stateProvider,$urlRouterProvider){
    "ngInject";
    //$stateProvider.when("");
    $urlRouterProvider.when("","home");
    $urlRouterProvider.when("/","home");

    function getUrl(_url){
        return "http://localhost:5000/html/"+_url;
    }

    $stateProvider
    .state("home", {
        url: "/home",
        templateUrl: getUrl("index.html"),
        controller: "indexCtrl"
    })
    .state("medal",{
        url: "/medal",
        templateUrl: getUrl("index.html"),
        controller: "indexCtrl"
    })
    .state("medal.item",{
         url: "/medalItem",
         templateUrl: getUrl("medal-item.html"),
         controller: "medalItemCtrl"
    })
    .state("goodIdea",{
        url: "gIdea",
        templateUrl: getUrl("goodIdea.html"),
        controller: "goodIdeaCtrl"
    })

}])

var dr = angular.module("directive",[]);
dr.directive("inputFocus",function(){
    return function(scope,element,attrs){
        element.children().eq(0).on('click',function(){
            scope.toInput = true;
            document.getElementById('search-input').focus();
        })
    }
})


var index = angular.module("index_ctrl",[]);
index.controller("indexCtrl",["$scope", "$location", "Index", function($scope,$location,Index){
    "ngInject";
    Index.init();
    init();
    $scope.setTab = function(){
        init();
    }

    function init(){
        $scope.tabIndex = Index.getIndex();
        $scope.curPage = Index.getCurPage();
        $scope.curCtrl = Index.getCurCtrl();
    }
}]);

var media = angular.module("medal_ctrl",[]);
media.controller("medalCtrl",function(){

})

var app = angular.module("ItMadelApp",['ngMaterial','directive','index_ctrl','medal_ctrl','ui.router']);
app.config(["$stateProvider", "$urlRouterProvider", function($stateProvider,$urlRouterProvider){
    "ngInject";
    //$stateProvider.when("");
    $urlRouterProvider.when("","home");
    $urlRouterProvider.when("/","home");

    function getUrl(_url){
        return "http://localhost:5000/html/"+_url;
    }

    $stateProvider
    .state("home", {
        url: "/home",
        templateUrl: getUrl("index.html"),
        controller: "indexCtrl"
    })
    .state("medal",{
        url: "/medal",
        templateUrl: getUrl("index.html"),
        controller: "indexCtrl"
    })
    .state("medal.item",{
         url: "/medalItem",
         templateUrl: getUrl("medal-item.html"),
         controller: "medalItemCtrl"
    })
    .state("goodIdea",{
        url: "gIdea",
        templateUrl: getUrl("goodIdea.html"),
        controller: "goodIdeaCtrl"
    })

}])

var dr = angular.module("directive",[]);
dr.directive("inputFocus",function(){
    return function(scope,element,attrs){
        element.children().eq(0).on('click',function(){
            scope.toInput = true;
            document.getElementById('search-input').focus();
        })
    }
})


var index = angular.module("index_ctrl",[]);
index.controller("indexCtrl",["$scope", "$location", "Index", function($scope,$location,Index){
    "ngInject";
    Index.init();
    init();
    $scope.setTab = function(){
        init();
    }

    function init(){
        $scope.tabIndex = Index.getIndex();
        $scope.curPage = Index.getCurPage();
        $scope.curCtrl = Index.getCurCtrl();
    }
}]);

var media = angular.module("medal_ctrl",[]);
media.controller("medalCtrl",function(){

})

var app = angular.module("ItMadelApp",['ngMaterial','directive','index_ctrl','medal_ctrl','ui.router']);
app.config(["$stateProvider", "$urlRouterProvider", function($stateProvider,$urlRouterProvider){
    "ngInject";
    //$stateProvider.when("");
    $urlRouterProvider.when("","home");
    $urlRouterProvider.when("/","home");

    function getUrl(_url){
        return "http://localhost:5000/html/"+_url;
    }

    $stateProvider
    .state("home", {
        url: "/home",
        templateUrl: getUrl("index.html"),
        controller: "indexCtrl"
    })
    .state("medal",{
        url: "/medal",
        templateUrl: getUrl("index.html"),
        controller: "indexCtrl"
    })
    .state("medal.item",{
         url: "/medalItem",
         templateUrl: getUrl("medal-item.html"),
         controller: "medalItemCtrl"
    })
    .state("goodIdea",{
        url: "gIdea",
        templateUrl: getUrl("goodIdea.html"),
        controller: "goodIdeaCtrl"
    })

}])

var dr = angular.module("directive",[]);
dr.directive("inputFocus",function(){
    return function(scope,element,attrs){
        element.children().eq(0).on('click',function(){
            scope.toInput = true;
            document.getElementById('search-input').focus();
        })
    }
})


var index = angular.module("index_ctrl",[]);
index.controller("indexCtrl",["$scope", "$location", "Index", function($scope,$location,Index){
    "ngInject";
    Index.init();
    init();
    $scope.setTab = function(){
        init();
    }

    function init(){
        $scope.tabIndex = Index.getIndex();
        $scope.curPage = Index.getCurPage();
        $scope.curCtrl = Index.getCurCtrl();
    }
}]);

var media = angular.module("medal_ctrl",[]);
media.controller("medalCtrl",function(){

})

var app = angular.module("ItMadelApp",['ngMaterial','directive','index_ctrl','medal_ctrl','ui.router']);
app.config(["$stateProvider", "$urlRouterProvider", function($stateProvider,$urlRouterProvider){
    "ngInject";
    //$stateProvider.when("");
    $urlRouterProvider.when("","home");
    $urlRouterProvider.when("/","home");

    function getUrl(_url){
        return "http://localhost:5000/html/"+_url;
    }

    $stateProvider
    .state("home", {
        url: "/home",
        templateUrl: getUrl("index.html"),
        controller: "indexCtrl"
    })
    .state("medal",{
        url: "/medal",
        templateUrl: getUrl("index.html"),
        controller: "indexCtrl"
    })
    .state("medal.item",{
         url: "/medalItem",
         templateUrl: getUrl("medal-item.html"),
         controller: "medalItemCtrl"
    })
    .state("goodIdea",{
        url: "gIdea",
        templateUrl: getUrl("goodIdea.html"),
        controller: "goodIdeaCtrl"
    })

}])

var dr = angular.module("directive",[]);
dr.directive("inputFocus",function(){
    return function(scope,element,attrs){
        element.children().eq(0).on('click',function(){
            scope.toInput = true;
            document.getElementById('search-input').focus();
        })
    }
})


var index = angular.module("index_ctrl",[]);
index.controller("indexCtrl",["$scope", "$location", "Index", function($scope,$location,Index){
    "ngInject";
    Index.init();
    init();
    $scope.setTab = function(){
        init();
    }

    function init(){
        $scope.tabIndex = Index.getIndex();
        $scope.curPage = Index.getCurPage();
        $scope.curCtrl = Index.getCurCtrl();
    }
}]);

var media = angular.module("medal_ctrl",[]);
media.controller("medalCtrl",function(){

})

var app = angular.module("ItMadelApp",['ngMaterial','directive','index_ctrl','medal_ctrl','ui.router']);
app.config(["$stateProvider", "$urlRouterProvider", function($stateProvider,$urlRouterProvider){
    "ngInject";
    //$stateProvider.when("");
    $urlRouterProvider.when("","home");
    $urlRouterProvider.when("/","home");

    function getUrl(_url){
        return "http://localhost:5000/html/"+_url;
    }

    $stateProvider
    .state("home", {
        url: "/home",
        templateUrl: getUrl("index.html"),
        controller: "indexCtrl"
    })
    .state("medal",{
        url: "/medal",
        templateUrl: getUrl("index.html"),
        controller: "indexCtrl"
    })
    .state("medal.item",{
         url: "/medalItem",
         templateUrl: getUrl("medal-item.html"),
         controller: "medalItemCtrl"
    })
    .state("goodIdea",{
        url: "gIdea",
        templateUrl: getUrl("goodIdea.html"),
        controller: "goodIdeaCtrl"
    })

}])

var dr = angular.module("directive",[]);
dr.directive("inputFocus",function(){
    return function(scope,element,attrs){
        element.children().eq(0).on('click',function(){
            scope.toInput = true;
            document.getElementById('search-input').focus();
        })
    }
})


var index = angular.module("index_ctrl",[]);
index.controller("indexCtrl",["$scope", "$location", "Index", function($scope,$location,Index){
    "ngInject";
    Index.init();
    init();
    $scope.setTab = function(){
        init();
    }

    function init(){
        $scope.tabIndex = Index.getIndex();
        $scope.curPage = Index.getCurPage();
        $scope.curCtrl = Index.getCurCtrl();
    }
}]);

var media = angular.module("medal_ctrl",[]);
media.controller("medalCtrl",function(){

})

var app = angular.module("ItMadelApp",['ngMaterial','directive','index_ctrl','medal_ctrl','ui.router']);
app.config(["$stateProvider", "$urlRouterProvider", function($stateProvider,$urlRouterProvider){
    "ngInject";
    //$stateProvider.when("");
    $urlRouterProvider.when("","home");
    $urlRouterProvider.when("/","home");

    function getUrl(_url){
        return "http://localhost:5000/html/"+_url;
    }

    $stateProvider
    .state("home", {
        url: "/home",
        templateUrl: getUrl("index.html"),
        controller: "indexCtrl"
    })
    .state("medal",{
        url: "/medal",
        templateUrl: getUrl("index.html"),
        controller: "indexCtrl"
    })
    .state("medal.item",{
         url: "/medalItem",
         templateUrl: getUrl("medal-item.html"),
         controller: "medalItemCtrl"
    })
    .state("goodIdea",{
        url: "gIdea",
        templateUrl: getUrl("goodIdea.html"),
        controller: "goodIdeaCtrl"
    })

}])

var dr = angular.module("directive",[]);
dr.directive("inputFocus",function(){
    return function(scope,element,attrs){
        element.children().eq(0).on('click',function(){
            scope.toInput = true;
            document.getElementById('search-input').focus();
        })
    }
})


var index = angular.module("index_ctrl",[]);
index.controller("indexCtrl",["$scope", "$location", "Index", function($scope,$location,Index){
    "ngInject";
    Index.init();
    init();
    $scope.setTab = function(){
        init();
    }

    function init(){
        $scope.tabIndex = Index.getIndex();
        $scope.curPage = Index.getCurPage();
        $scope.curCtrl = Index.getCurCtrl();
    }
}]);

var media = angular.module("medal_ctrl",[]);
media.controller("medalCtrl",function(){

})

var app = angular.module("ItMadelApp",['ngMaterial','directive','index_ctrl','medal_ctrl','ui.router']);
app.config(["$stateProvider", "$urlRouterProvider", function($stateProvider,$urlRouterProvider){
    "ngInject";
    //$stateProvider.when("");
    $urlRouterProvider.when("","home");
    $urlRouterProvider.when("/","home");

    function getUrl(_url){
        return "http://localhost:5000/html/"+_url;
    }

    $stateProvider
    .state("home", {
        url: "/home",
        templateUrl: getUrl("index.html"),
        controller: "indexCtrl"
    })
    .state("medal",{
        url: "/medal",
        templateUrl: getUrl("index.html"),
        controller: "indexCtrl"
    })
    .state("medal.item",{
         url: "/medalItem",
         templateUrl: getUrl("medal-item.html"),
         controller: "medalItemCtrl"
    })
    .state("goodIdea",{
        url: "gIdea",
        templateUrl: getUrl("goodIdea.html"),
        controller: "goodIdeaCtrl"
    })

}])

var dr = angular.module("directive",[]);
dr.directive("inputFocus",function(){
    return function(scope,element,attrs){
        element.children().eq(0).on('click',function(){
            scope.toInput = true;
            document.getElementById('search-input').focus();
        })
    }
})


var index = angular.module("index_ctrl",[]);
index.contant("pages",{
   "medal": "./html/medal.html",
   "goodIdea": "./html/good-idea.html",
   "log": "./html/log.html",
   "aboutUs": "./html/about-us.html",
});
index.controller("indexCtrl",["$scope", function($scope){
    "ngInject";
}]);

var media = angular.module("medal_ctrl",[]);
media.controller("medalCtrl",function(){

})

var app = angular.module("ItMadelApp",['ngMaterial','directive','index_ctrl','medal_ctrl','ui.router']);
app.config(["$stateProvider", "$urlRouterProvider", function($stateProvider,$urlRouterProvider){
    "ngInject";
    //$stateProvider.when("");
    $urlRouterProvider.when("","home");
    $urlRouterProvider.when("/","home");

    function getUrl(_url){
        return "http://localhost:5000/html/"+_url;
    }

    $stateProvider
    .state("home", {
        url: "/home",
        templateUrl: getUrl("index.html"),
        controller: "indexCtrl"
    })
    .state("medal",{
        url: "/medal",
        templateUrl: getUrl("index.html"),
        controller: "indexCtrl"
    })
    .state("medal.item",{
         url: "/medalItem",
         templateUrl: getUrl("medal-item.html"),
         controller: "medalItemCtrl"
    })
    .state("goodIdea",{
        url: "gIdea",
        templateUrl: getUrl("goodIdea.html"),
        controller: "goodIdeaCtrl"
    })

}])

var dr = angular.module("directive",[]);
dr.directive("inputFocus",function(){
    return function(scope,element,attrs){
        element.children().eq(0).on('click',function(){
            scope.toInput = true;
            document.getElementById('search-input').focus();
        })
    }
})


var index = angular.module("index_ctrl",[]);
index.contant("pages",{
   "medal": "./html/medal.html",
   "goodIdea": "./html/good-idea.html",
   "log": "./html/log.html",
   "aboutUs": "./html/about-us.html",
});
index.controller("indexCtrl",["$scope", function($scope){
    "ngInject";
}]);

var media = angular.module("medal_ctrl",[]);
media.controller("medalCtrl",function(){

})

var app = angular.module("ItMadelApp",['ngMaterial','directive','index_ctrl','medal_ctrl','ui.router']);
app.config(["$stateProvider", "$urlRouterProvider", function($stateProvider,$urlRouterProvider){
    "ngInject";
    //$stateProvider.when("");
    $urlRouterProvider.when("","home");
    $urlRouterProvider.when("/","home");

    function getUrl(_url){
        return "http://localhost:5000/html/"+_url;
    }

    $stateProvider
    .state("home", {
        url: "/home",
        templateUrl: getUrl("index.html"),
        controller: "indexCtrl"
    })
    .state("medal",{
        url: "/medal",
        templateUrl: getUrl("index.html"),
        controller: "indexCtrl"
    })
    .state("medal.item",{
         url: "/medalItem",
         templateUrl: getUrl("medal-item.html"),
         controller: "medalItemCtrl"
    })
    .state("goodIdea",{
        url: "gIdea",
        templateUrl: getUrl("goodIdea.html"),
        controller: "goodIdeaCtrl"
    })

}])

var dr = angular.module("directive",[]);
dr.directive("inputFocus",function(){
    return function(scope,element,attrs){
        element.children().eq(0).on('click',function(){
            scope.toInput = true;
            document.getElementById('search-input').focus();
        })
    }
})


var index = angular.module("index_ctrl",[]);
index.contant("pages",{
   "medal": "./html/medal.html",
   "goodIdea": "./html/good-idea.html",
   "log": "./html/log.html",
   "aboutUs": "./html/about-us.html",
})
index.controller("indexCtrl",["$scope", function($scope){
    "ngInject";
}]);

var media = angular.module("medal_ctrl",[]);
media.controller("medalCtrl",function(){

})

var app = angular.module("ItMadelApp",['ngMaterial','directive','index_ctrl','medal_ctrl','ui.router']);
app.config(["$stateProvider", "$urlRouterProvider", function($stateProvider,$urlRouterProvider){
    "ngInject";
    //$stateProvider.when("");
    $urlRouterProvider.when("","home");
    $urlRouterProvider.when("/","home");

    function getUrl(_url){
        return "http://localhost:5000/html/"+_url;
    }

    $stateProvider
    .state("home", {
        url: "/home",
        templateUrl: getUrl("index.html"),
        controller: "indexCtrl"
    })
    .state("medal",{
        url: "/medal",
        templateUrl: getUrl("index.html"),
        controller: "indexCtrl"
    })
    .state("medal.item",{
         url: "/medalItem",
         templateUrl: getUrl("medal-item.html"),
         controller: "medalItemCtrl"
    })
    .state("goodIdea",{
        url: "gIdea",
        templateUrl: getUrl("goodIdea.html"),
        controller: "goodIdeaCtrl"
    })

}])

var dr = angular.module("directive",[]);
dr.directive("inputFocus",function(){
    return function(scope,element,attrs){
        element.children().eq(0).on('click',function(){
            scope.toInput = true;
            document.getElementById('search-input').focus();
        })
    }
})


var index = angular.module("index_ctrl",[]);
index.contant("pages",{
   "medal": "./html/medal.html",
   "goodIdea": "./html/good-idea.html",
   "log": "./html/log.html",
   "aboutUs": "./html/about-us.html",
})
index.controller("indexCtrl",["$scope", function($scope){
    "ngInject";
}]);

var media = angular.module("medal_ctrl",[]);
media.controller("medalCtrl",function(){

})

var app = angular.module("ItMadelApp",['ngMaterial','directive','index_ctrl','medal_ctrl','ui.router']);
app.config(["$stateProvider", "$urlRouterProvider", function($stateProvider,$urlRouterProvider){
    "ngInject";
    //$stateProvider.when("");
    $urlRouterProvider.when("","home");
    $urlRouterProvider.when("/","home");

    function getUrl(_url){
        return "http://localhost:5000/html/"+_url;
    }

    $stateProvider
    .state("home", {
        url: "/home",
        templateUrl: getUrl("index.html"),
        controller: "indexCtrl"
    })
    .state("medal",{
        url: "/medal",
        templateUrl: getUrl("index.html"),
        controller: "indexCtrl"
    })
    .state("medal.item",{
         url: "/medalItem",
         templateUrl: getUrl("medal-item.html"),
         controller: "medalItemCtrl"
    })
    .state("goodIdea",{
        url: "gIdea",
        templateUrl: getUrl("goodIdea.html"),
        controller: "goodIdeaCtrl"
    })

}])

var dr = angular.module("directive",[]);
dr.directive("inputFocus",function(){
    return function(scope,element,attrs){
        element.children().eq(0).on('click',function(){
            scope.toInput = true;
            document.getElementById('search-input').focus();
        })
    }
})


var index = angular.module("index_ctrl",[]);
index.controller("indexCtrl",["$scope", function($scope){
    "ngInject";
    $scope.test = "hello world";
}]);

var media = angular.module("medal_ctrl",[]);
media.controller("medalCtrl",function(){

})

var app = angular.module("ItMadelApp",['ngMaterial','directive','index_ctrl','medal_ctrl','ui.router']);
app.config(["$stateProvider", "$urlRouterProvider", function($stateProvider,$urlRouterProvider){
    "ngInject";
    //$stateProvider.when("");
    $urlRouterProvider.when("","home");
    $urlRouterProvider.when("/","home");

    function getUrl(_url){
        return "http://localhost:5000/html/"+_url;
    }

    $stateProvider
    .state("home", {
        url: "/home",
        templateUrl: getUrl("index.html"),
        controller: "indexCtrl"
    })
    .state("medal",{
        url: "/medal",
        templateUrl: getUrl("index.html"),
        controller: "indexCtrl"
    })
    .state("medal.item",{
         url: "/medalItem",
         templateUrl: getUrl("medal-item.html"),
         controller: "medalItemCtrl"
    })
    .state("goodIdea",{
        url: "gIdea",
        templateUrl: getUrl("goodIdea.html"),
        controller: "goodIdeaCtrl"
    })

}])

var dr = angular.module("directive",[]);
dr.directive("inputFocus",function(){
    return function(scope,element,attrs){
        element.children().eq(0).on('click',function(){
            scope.toInput = true;
            document.getElementById('search-input').focus();
        })
    }
})


var index = angular.module("index_ctrl",[]);
index.controller("indexCtrl",["$scope", function($scope){
    "ngInject";
    $scope.test = "hello world";
}]);

var media = angular.module("medal_ctrl",[]);
media.controller("medalCtrl",function(){

})

var app = angular.module("ItMadelApp",['ngMaterial','directive','index_ctrl','medal_ctrl','ui.router']);
app.config(["$stateProvider", "$urlRouterProvider", function($stateProvider,$urlRouterProvider){
    "ngInject";
    //$stateProvider.when("");
    $urlRouterProvider.when("","home");
    $urlRouterProvider.when("/","home");

    function getUrl(_url){
        return "http://localhost:5000/html/"+_url;
    }

    $stateProvider
    .state("home", {
        url: "/home",
        templateUrl: getUrl("index.html"),
        controller: "indexCtrl"
    })
    .state("medal",{
        url: "/medal",
        templateUrl: getUrl("index.html"),
        controller: "indexCtrl"
    })
    .state("medal.item",{
         url: "/medalItem",
         templateUrl: getUrl("medal-item.html"),
         controller: "medalItemCtrl"
    })
    .state("goodIdea",{
        url: "gIdea",
        templateUrl: getUrl("goodIdea.html"),
        controller: "goodIdeaCtrl"
    })

}])

var dr = angular.module("directive",[]);
dr.directive("inputFocus",function(){
    return function(scope,element,attrs){
        element.children().eq(0).on('click',function(){
            scope.toInput = true;
            document.getElementById('search-input').focus();
        })
    }
})


var index = angular.module("index_ctrl",[]);
index.controller("indexCtrl",["$scope", function($scope){
    "ngInject";
    $scope.test = "hello world";
}]);

var media = angular.module("medal_ctrl",[]);
media.controller("medalCtrl",function(){

})

var app = angular.module("ItMadelApp",['ngMaterial','directive','index_ctrl','medal_ctrl','ui.router']);
app.config(["$stateProvider", "$urlRouterProvider", function($stateProvider,$urlRouterProvider){
    "ngInject";
    //$stateProvider.when("");
    $urlRouterProvider.when("","home");
    $urlRouterProvider.when("/","home");

    function getUrl(_url){
        return "http://localhost:5000/html/"+_url;
    }

    $stateProvider
    .state("home", {
        url: "/home",
        templateUrl: getUrl("index.html"),
        controller: "indexCtrl"
    })
    .state("medal",{
        url: "/medal",
        templateUrl: getUrl("index.html"),
        controller: "indexCtrl"
    })
    .state("medal.item",{
         url: "/medalItem",
         templateUrl: getUrl("medal-item.html"),
         controller: "medalItemCtrl"
    })
    .state("goodIdea",{
        url: "gIdea",
        templateUrl: getUrl("goodIdea.html"),
        controller: "goodIdeaCtrl"
    })

}])

var dr = angular.module("directive",[]);
dr.directive("inputFocus",function(){
    return function(scope,element,attrs){
        element.children().eq(0).on('click',function(){
            scope.toInput = true;
            document.getElementById('search-input').focus();
        })
    }
})


var index = angular.module("index_ctrl",[]);
index.controller("indexCtrl",["$scope", function($scope){
    "ngInject";
    $scope.test = "hello world";
}]);

var media = angular.module("medal_ctrl",[]);
media.controller("medalCtrl",function(){

})

var app = angular.module("ItMadelApp",['ngMaterial','directive','index_ctrl','medal_ctrl','ui.router']);
app.config(["$stateProvider", "$urlRouterProvider", function($stateProvider,$urlRouterProvider){
    "ngInject";
    //$stateProvider.when("");
    $urlRouterProvider.when("","home");
    $urlRouterProvider.when("/","home");

    function getUrl(_url){
        return "http://localhost:5000/html/"+_url;
    }

    $stateProvider
    .state("home", {
        url: "/home",
        templateUrl: getUrl("index.html"),
        controller: "indexCtrl"
    })
    .state("medal",{
        url: "/medal",
        templateUrl: getUrl("index.html"),
        controller: "indexCtrl"
    })
    .state("medal.item",{
         url: "/medalItem",
         templateUrl: getUrl("medal-item.html"),
         controller: "medalItemCtrl"
    })
    .state("goodIdea",{
        url: "gIdea",
        templateUrl: getUrl("goodIdea.html"),
        controller: "goodIdeaCtrl"
    })

}])

var dr = angular.module("directive",[]);
dr.directive("inputFocus",function(){
    return function(scope,element,attrs){
        element.children().eq(0).on('click',function(){
            scope.toInput = true;
            document.getElementById('search-input').focus();
        })
    }
})


var index = angular.module("index_ctrl",[]);
index.controller("indexCtrl",["$scope", function($scope){
    "ngInject";
    $scope.test = "hello world";
}]);

var media = angular.module("medal_ctrl",[]);
media.controller("medalCtrl",function(){

})

var app = angular.module("ItMadelApp",['ngMaterial','directive','index_ctrl','medal_ctrl','ui.router']);
app.config(["$stateProvider", "$urlRouterProvider", function($stateProvider,$urlRouterProvider){
    "ngInject";
    //$stateProvider.when("");
    $urlRouterProvider.when("","home");
    $urlRouterProvider.when("/","home");

    function getUrl(_url){
        return "http://localhost:5000/html/"+_url;
    }

    $stateProvider
    .state("home", {
        url: "/home",
        templateUrl: getUrl("index.html"),
        controller: "indexCtrl"
    })
    .state("medal",{
        url: "/medal",
        templateUrl: getUrl("medal.html"),
        controller: "medalCtrl"
    })
    .state("medal.item",{
         url: "/medalItem",
         templateUrl: getUrl("medal-item.html"),
         controller: "medalItemCtrl"
    })
    .state("goodIdea",{
        url: "gIdea",
        templateUrl: getUrl("goodIdea.html"),
        controller: "goodIdeaCtrl"
    })

}])

var dr = angular.module("directive",[]);
dr.directive("inputFocus",function(){
    return function(scope,element,attrs){
        element.children().eq(0).on('click',function(){
            scope.toInput = true;
            document.getElementById('search-input').focus();
        })
    }
})


var index = angular.module("index_ctrl",[]);
index.controller("indexCtrl",["$scope", function($scope){
    "ngInject";
    $scope.test = "hello world";
}]);

var media = angular.module("medal_ctrl",[]);
media.controller("medalCtrl",function(){

})

var app = angular.module("ItMadelApp",['ngMaterial','directive','index_ctrl','medal_ctrl','ui.router']);
app.config(["$stateProvider", "$urlRouterProvider", function($stateProvider,$urlRouterProvider){
    "ngInject";
    //$stateProvider.when("");
    $urlRouterProvider.when("","home");
    $urlRouterProvider.when("/","home");

    function getUrl(_url){
        return "http://localhost:5000/html/"+_url;
    }

    $stateProvider
    .state("home", {
        url: "/home",
        templateUrl: getUrl("index.html"),
        controller: "indexCtrl"
    })
    .state("medal",{
        url: "/medal",
        templateUrl: getUrl("medal.html"),
        controller: "medalCtrl"
    })
    .state("medal.item",{
         url: "/medalItem",
         templateUrl: getUrl("medal-item.html"),
         controller: "medalItemCtrl"
    })
    .state("goodIdea",{
        url: "gIdea",
        templateUrl: getUrl("goodIdea.html"),
        controller: "goodIdeaCtrl"
    })

}])

var dr = angular.module("directive",[]);
dr.directive("inputFocus",function(){
    return function(scope,element,attrs){
        element.children().eq(0).on('click',function(){
            scope.toInput = true;
            document.getElementById('search-input').focus();
        })
    }
})


var index = angular.module("index_ctrl",[]);
index.controller("indexCtrl",["$scope", function($scope){
    "ngInject";
    $scope.test = "hello world";
}]);

var media = angular.module("medal_ctrl",[]);
media.controller("medalCtrl",function(){

})

var app = angular.module("ItMadelApp",['ngMaterial','directive','index_ctrl','medal_ctrl','ui.router']);
app.config(["$stateProvider", "$urlRouterProvider", function($stateProvider,$urlRouterProvider){
    "ngInject";
    //$stateProvider.when("");
    $urlRouterProvider.when("","home");
    $urlRouterProvider.when("/","home");

    function getUrl(_url){
        return "http://localhost:5000/html/"+_url;
    }

    $stateProvider
    .state("home", {
        url: "/home",
        templateUrl: getUrl("index.html"),
        controller: "indexCtrl"
    })
    .state("medal",{
        url: "/media",
        templateUrl: getUrl("media.html"),
        controller: "medalCtrl"
    })
    .state("medal.item",{
         url: "/medalItem",
         templateUrl: getUrl("medal-item.html"),
         controller: "medalItemCtrl"
    })
    .state("goodIdea",{
        url: "gIdea",
        templateUrl: getUrl("goodIdea.html"),
        controller: "goodIdeaCtrl"
    })

}])

var dr = angular.module("directive",[]);
dr.directive("inputFocus",function(){
    return function(scope,element,attrs){
        element.children().eq(0).on('click',function(){
            scope.toInput = true;
            document.getElementById('search-input').focus();
        })
    }
})


var index = angular.module("index_ctrl",[]);
index.controller("indexCtrl",["$scope", function($scope){
    "ngInject";
    $scope.test = "hello world";
}]);

var media = angular.module("medal_ctrl",[]);
media.controller("medalCtrl",function(){

})

var app = angular.module("ItMadelApp",['ngMaterial','directive','index_ctrl','medal_ctrl','ui.router']);
app.config(["$stateProvider", "$urlRouterProvider", function($stateProvider,$urlRouterProvider){
    "ngInject";
    //$stateProvider.when("");
    $urlRouterProvider.when("","home");
    $urlRouterProvider.when("/","home");

    function getUrl(_url){
        return "http://localhost:5000/html/"+_url;
    }

    $stateProvider
    .state("home", {
        url: "/home",
        templateUrl: getUrl("index.html"),
        controller: "indexCtrl"
    })
    .state("medal",{
        url: "/media",
        templateUrl: getUrl("media.html"),
        controller: "medalCtrl"
    })
    .state("medal.item",{
         url: "/medalItem",
         templateUrl: getUrl("medal-item.html"),
         controller: "medalItemCtrl"
    })
    .state("goodIdea",{
        url: "gIdea",
        templateUrl: getUrl("goodIdea.html"),
        controller: "goodIdeaCtrl"
    })

}])

var dr = angular.module("directive",[]);
dr.directive("inputFocus",function(){
    return function(scope,element,attrs){
        element.children().eq(0).on('click',function(){
            scope.toInput = true;
            document.getElementById('search-input').focus();
        })
    }
})


var index = angular.module("index_ctrl",[]);
index.controller("indexCtrl",["$scope", function($scope){
    "ngInject";
    $scope.test = "hello world";
}]);

var media = angular.module("medal_ctrl",[]);
media.controller("medalCtrl",function(){

})

var app = angular.module("ItMadelApp",['ngMaterial','directive','index_ctrl','medal_ctrl','ui.router']);
app.config(["$stateProvider", "$urlRouterProvider", function($stateProvider,$urlRouterProvider){
    "ngInject";
    //$stateProvider.when("");
    $urlRouterProvider.when("","home");
    $urlRouterProvider.when("/","home");

    function getUrl(_url){
        return "http://localhost:5000/html/"+_url;
    }

    $stateProvider
    .state("home", {
        url: "/home",
        templateUrl: getUrl("index.html"),
        controller: "indexCtrl"
    })
    .state("medal",{
        url: "/media",
        templateUrl: getUrl("media.html"),
        controller: "mediaCtrl"
    })
    .state("medal.item",{
         url: "/medalItem",
         templateUrl: getUrl("media-item.html"),
         controller: "mediaItemCtrl"
    })
    .state("goodIdea",{
        url: "gIdea",
        templateUrl: getUrl("goodIdea.html"),
        controller: "goodIdeaCtrl"
    })

}])

var dr = angular.module("directive",[]);
dr.directive("inputFocus",function(){
    return function(scope,element,attrs){
        element.children().eq(0).on('click',function(){
            scope.toInput = true;
            document.getElementById('search-input').focus();
        })
    }
})


var index = angular.module("index_ctrl",[]);
index.controller("indexCtrl",["$scope", function($scope){
    "ngInject";
    $scope.test = "hello world";
}]);

var media = angular.module("medal_ctrl",[]);
media.controller("medalCtrl",function(){

})

var app = angular.module("ItMadelApp",['ngMaterial','directive','index_ctrl','medal_ctrl','ui.router']);
app.config(["$stateProvider", "$urlRouterProvider", function($stateProvider,$urlRouterProvider){
    "ngInject";
    //$stateProvider.when("");
    $urlRouterProvider.when("","home");
    $urlRouterProvider.when("/","home");

    function getUrl(_url){
        return "http://localhost:5000/html/"+_url;
    }

    $stateProvider
    .state("home", {
        url: "/home",
        templateUrl: getUrl("index.html"),
        controller: "indexCtrl"
    })
    .state("medal",{
        url: "/media",
        templateUrl: getUrl("media.html"),
        controller: "mediaCtrl"
    })
    .state("medal.item",{
         url: "/medalItem",
         templateUrl: getUrl("media-item.html"),
         controller: "mediaItemCtrl"
    })
    .state("goodIdea",{
        url: "gIdea",
        templateUrl: getUrl("goodIdea.html"),
        controller: "goodIdeaCtrl"
    })

}])

var dr = angular.module("directive",[]);
dr.directive("inputFocus",function(){
    return function(scope,element,attrs){
        element.children().eq(0).on('click',function(){
            scope.toInput = true;
            document.getElementById('search-input').focus();
        })
    }
})


var index = angular.module("index_ctrl",[]);
index.controller("indexCtrl",["$scope", function($scope){
    "ngInject";
    $scope.test = "hello world";
}]);

var media = angular.module("medal_ctrl",[]);
media.controller("medalCtrl",function(){

})

var app = angular.module("ItMadelApp",['ngMaterial','directive','index_ctrl','medal_ctrl','ui.router']);
app.config(["$stateProvider", "$urlRouterProvider", function($stateProvider,$urlRouterProvider){
    "ngInject";
    //$stateProvider.when("");
    $urlRouterProvider.when("","home");
    $urlRouterProvider.when("/","home");

    function getUrl(_url){
        return "http://localhost:5000/html/"+_url;
    }

    $stateProvider
    .state("home", {
        url: "/home",
        templateUrl: getUrl("index.html"),
        controller: "indexCtrl"
    })
    .state("medal",{
        url: "/media",
        templateUrl: getUrl("media.html"),
        controller: "mediaCtrl"
    })
    .state("medal.item",{
         url: "/medalItem",
         templateUrl: getUrl("media-item.html"),
         controller: "mediaItemCtrl"
    })
    .state("goodIdea",{
        url: "gIdea",
        templateUrl: getUrl("goodIdea.html"),
        controller: "goodIdeaCtrl"
    })

}])

var dr = angular.module("directive",[]);
dr.directive("inputFocus",function(){
    return function(scope,element,attrs){
        element.children().eq(0).on('click',function(){
            scope.toInput = true;
            document.getElementById('search-input').focus();
        })
    }
})


var index = angular.module("index_ctrl",[]);
index.controller("indexCtrl",["$scope", function($scope){
    "ngInject";
    $scope.test = "hello world";
}]);

var media = angular.module("medal_ctrl",[]);
media.controller("medalCtrl",function(){

})

var app = angular.module("ItMadelApp",['ngMaterial','directive','index_ctrl','medal_ctrl','ui.router']);
app.config(["$stateProvider", "$urlRouterProvider", function($stateProvider,$urlRouterProvider){
    "ngInject";
    //$stateProvider.when("");
    $urlRouterProvider.when("","home");
    $urlRouterProvider.when("/","home");

    function getUrl(_url){
        return "http://localhost:5000/html/"+_url;
    }

    $stateProvider
    .state("home", {
        url: "/home",
        templateUrl: getUrl("index.html"),
        controller: "indexCtrl"
    })
    .state("medal",{
        url: "/media",
        templateUrl: getUrl("media.html"),
        controller: "mediaCtrl"
    })
    .state("medal.item",{
         url: "/medalItem",
         templateUrl: getUrl("media-item.html"),
         controller: "mediaItemCtrl"
    })
    .state("goodIdea",{
        url: "gIdea",
        templateUrl: getUrl("goodIdea.html"),
        controller: "goodIdeaCtrl"
    })

}])

var dr = angular.module("directive",[]);
dr.directive("inputFocus",function(){
    return function(scope,element,attrs){
        element.children().eq(0).on('click',function(){
            scope.toInput = true;
            document.getElementById('search-input').focus();
        })
    }
})


var index = angular.module("index_ctrl",[]);
index.controller("indexCtrl",["$scope", function($scope){
    "ngInject";
    $scope.test = "hello world";
}]);

var media = angular.module("medal_ctrl",[]);
media.controller("medalCtrl",function(){

})

var app = angular.module("ItMadelApp",['ngMaterial','directive','index_ctrl','medal_ctrl','ui.router']);
app.config(["$stateProvider", "$urlRouterProvider", function($stateProvider,$urlRouterProvider){
    "ngInject";
    //$stateProvider.when("");
    $urlRouterProvider.when("","home");
    $urlRouterProvider.when("/","home");

    function getUrl(_url){
        return "http://localhost:5000/html/"+_url;
    }

    $stateProvider
    .state("home", {
        url: "/home",
        templateUrl: getUrl("index.html"),
        controller: "indexCtrl"
    })
    .state("medal",{
        url: "/media",
        templateUrl: getUrl("media.html"),
        controller: "mediaCtrl"
    })
    .state("medal.item",{
         url: "/medalItem",
         templateUrl: getUrl("media-item.html"),
         controller: "mediaItemCtrl"
    })
    .state("goodIdea",{
        url: "gIdea",
        templateUrl: getUrl("goodIdea.html"),
        controller: "goodIdeaCtrl"
    })

}])

var dr = angular.module("directive",[]);
dr.directive("inputFocus",function(){
    return function(scope,element,attrs){
        element.children().eq(0).on('click',function(){
            scope.toInput = true;
            document.getElementById('search-input').focus();
        })
    }
})


var index = angular.module("index_ctrl",[]);
index.controller("indexCtrl",["$scope", function($scope){
    "ngInject";
    $scope.test = "hello world";
}]);

var media = angular.module("media_ctrl",[]);
media.controller("mediaCtrl",function(){

})

var app = angular.module("ItMadelApp",['ngMaterial','directive','index_ctrl','medal_ctrl','ui.router']);
app.config(["$stateProvider", "$urlRouterProvider", function($stateProvider,$urlRouterProvider){
    "ngInject";
    //$stateProvider.when("");
    $urlRouterProvider.when("","home");
    $urlRouterProvider.when("/","home");

    function getUrl(_url){
        return "http://localhost:5000/html/"+_url;
    }

    $stateProvider
    .state("home", {
        url: "/home",
        templateUrl: getUrl("index.html"),
        controller: "indexCtrl"
    })
    .state("medal",{
        url: "/media",
        templateUrl: getUrl("media.html"),
        controller: "mediaCtrl"
    })
    .state("medal.item",{
         url: "/medalItem",
         templateUrl: getUrl("media-item.html"),
         controller: "mediaItemCtrl"
    })
    .state("goodIdea",{
        url: "gIdea",
        templateUrl: getUrl("goodIdea.html"),
        controller: "goodIdeaCtrl"
    })

}])

var dr = angular.module("directive",[]);
dr.directive("inputFocus",function(){
    return function(scope,element,attrs){
        element.children().eq(0).on('click',function(){
            scope.toInput = true;
            document.getElementById('search-input').focus();
        })
    }
})


var index = angular.module("index_ctrl",[]);
index.controller("indexCtrl",["$scope", function($scope){
    "ngInject";
    $scope.test = "hello world";
}]);

var media = angular.module("media_ctrl",[]);
media.controller("mediaCtrl",function(){

})

var app = angular.module("ItMadelApp",['ngMaterial','directive','index_ctrl','media_ctrl','ui.router']);
app.config(["$stateProvider", "$urlRouterProvider", function($stateProvider,$urlRouterProvider){
    "ngInject";
    //$stateProvider.when("");
    $urlRouterProvider.when("","home");
    $urlRouterProvider.when("/","home");

    function getUrl(_url){
        return "http://localhost:5000/html/"+_url;
    }

    $stateProvider
    .state("home", {
        url: "/home",
        templateUrl: getUrl("index.html"),
        controller: "indexCtrl"
    })
    .state("medal",{
        url: "/media",
        templateUrl: getUrl("media.html"),
        controller: "mediaCtrl"
    })
    .state("medal.item",{
         url: "/medalItem",
         templateUrl: getUrl("media-item.html"),
         controller: "mediaItemCtrl"
    })
    .state("goodIdea",{
        url: "gIdea",
        templateUrl: getUrl("goodIdea.html"),
        controller: "goodIdeaCtrl"
    })

}])

var dr = angular.module("directive",[]);
dr.directive("inputFocus",function(){
    return function(scope,element,attrs){
        element.children().eq(0).on('click',function(){
            scope.toInput = true;
            document.getElementById('search-input').focus();
        })
    }
})


var index = angular.module("index_ctrl",[]);
index.controller("indexCtrl",["$scope", function($scope){
    "ngInject";
    $scope.test = "hello world";
}]);

var media = angular.module("media_ctrl",[]);
media.controller("mediaCtrl",function(){

})

var app = angular.module("ItMadelApp",['ngMaterial','directive','index_ctrl','media_ctrl','ui.router']);
app.config(["$stateProvider", "$urlRouterProvider", function($stateProvider,$urlRouterProvider){
    "ngInject";
    //$stateProvider.when("");
    $urlRouterProvider.when("","home");
    $urlRouterProvider.when("/","home");

    function getUrl(_url){
        return "http://localhost:5000/html/"+_url;
    }

    $stateProvider
    .state("home", {
        url: "/home",
        templateUrl: getUrl("index.html"),
        controller: "indexCtrl"
    })
    .state("medal",{
        url: "/media",
        templateUrl: getUrl("media.html"),
        controller: "mediaCtrl"
    })
    .state("medal.item",{
         url: "/medalItem",
         templateUrl: getUrl("media-item.html"),
         controller: "mediaItemCtrl"
    })
    .state("goodIdea",{
        url: "gIdea",
        templateUrl: getUrl("goodIdea.html"),
        controller: "goodIdeaCtrl"
    })

}])

var dr = angular.module("directive",[]);
dr.directive("inputFocus",function(){
    return function(scope,element,attrs){
        element.children().eq(0).on('click',function(){
            scope.toInput = true;
            document.getElementById('search-input').focus();
        })
    }
})


var index = angular.module("index_ctrl",[]);
index.controller("indexCtrl",["$scope", function($scope){
    "ngInject";
    $scope.test = "hello world";
}]);

var media = angular.module("media_ctrl",[]);
media.controller("mediaCtrl",function(){

})

var app = angular.module("ItMadelApp",['ngMaterial','directive','index','ui.router']);
app.config(["$stateProvider", "$urlRouterProvider", function($stateProvider,$urlRouterProvider){
    "ngInject";
    //$stateProvider.when("");
    $urlRouterProvider.when("","home");
    $urlRouterProvider.when("/","home");

    function getUrl(_url){
        return "http://localhost:5000/html/"+_url;
    }

    $stateProvider
    .state("home", {
        url: "/home",
        templateUrl: getUrl("index.html"),
        controller: "indexCtrl"
    })
    .state("medal",{
        url: "/media",
        templateUrl: getUrl("media.html"),
        controller: "mediaCtrl"
    })
    .state("medal.item",{
         url: "/medalItem",
         templateUrl: getUrl("media-item.html"),
         controller: "mediaItemCtrl"
    })
    .state("goodIdea",{
        url: "gIdea",
        templateUrl: getUrl("goodIdea.html"),
        controller: "goodIdeaCtrl"
    })

}])

var dr = angular.module("directive",[]);
dr.directive("inputFocus",function(){
    return function(scope,element,attrs){
        element.children().eq(0).on('click',function(){
            scope.toInput = true;
            document.getElementById('search-input').focus();
        })
    }
})


var index = angular.module("index_ctrl",[]);
index.controller("indexCtrl",["$scope", function($scope){
    "ngInject";
    $scope.test = "hello world";
}]);

var media = angular.module("media_ctrl",[]);
media.controller("mediaCtrl",function(){

})

var app = angular.module("ItMadelApp",['ngMaterial','directive','index','ui.router']);
app.config(["$stateProvider", "$urlRouterProvider", function($stateProvider,$urlRouterProvider){
    "ngInject";
    //$stateProvider.when("");
    $urlRouterProvider.when("","home");
    $urlRouterProvider.when("/","home");

    function getUrl(_url){
        return "http://localhost:5000/html/"+_url;
    }

    $stateProvider
    .state("home", {
        url: "/home",
        templateUrl: getUrl("index.html"),
        controller: "indexCtrl"
    })
    .state("medal",{
        url: "/media",
        templateUrl: getUrl("media.html"),
        controller: "mediaCtrl"
    })
    .state("medal.item",{
         url: "/medalItem",
         templateUrl: getUrl("media-item.html"),
         controller: "mediaItemCtrl"
    })
    .state("goodIdea",{
        url: "gIdea",
        templateUrl: getUrl("goodIdea.html"),
        controller: "goodIdeaCtrl"
    })

}])

var dr = angular.module("directive",[]);
dr.directive("inputFocus",function(){
    return function(scope,element,attrs){
        element.children().eq(0).on('click',function(){
            scope.toInput = true;
            document.getElementById('search-input').focus();
        })
    }
})


var index = angular.module("index_ctrl",[]);
index.controller("indexCtrl",["$scope", function($scope){
    "ngInject";
    $scope.test = "hello world";
}]);

var media = angular.module("media_ctrl",[]);
media.controller("mediaCtrl",function(){

})

var app = angular.module("ItMadelApp",['ngMaterial','directive','index','ui.router']);
app.config(["$stateProvider", "$urlRouterProvider", function($stateProvider,$urlRouterProvider){
    "ngInject";
    //$stateProvider.when("");
    $urlRouterProvider.when("","home");
    $urlRouterProvider.when("/","home");

    function getUrl(_url){
        return "http://localhost:5000/html/"+_url;
    }

    $stateProvider
    .state("home", {
        url: "/home",
        templateUrl: getUrl("index.html"),
        controller: "indexCtrl"
    })
    .state("medal",{
        url: "/media",
        templateUrl: getUrl("media.html"),
        controller: "mediaCtrl"
    })
    .state("medal.item",{
         url: "/medalItem",
         templateUrl: getUrl("media-item.html"),
         controller: "mediaItemCtrl"
    })
    .state("goodIdea",{
        url: "gIdea",
        templateUrl: getUrl("goodIdea.html"),
        controller: "goodIdeaCtrl"
    })

}])

var dr = angular.module("directive",[]);
dr.directive("inputFocus",function(){
    return function(scope,element,attrs){
        element.children().eq(0).on('click',function(){
            scope.toInput = true;
            document.getElementById('search-input').focus();
        })
    }
})


var index = angular.module("index",[]);
index.controller("indexCtrl",["$scope", function($scope){
    "ngInject";
    $scope.test = "hello world";
}]);

var app = angular.module("ItMadelApp",['ngMaterial','directive','index','ui.router']);
app.config(["$stateProvider", "$urlRouterProvider", function($stateProvider,$urlRouterProvider){
    "ngInject";
    //$stateProvider.when("");
    $urlRouterProvider.when("","home");
    $urlRouterProvider.when("/","home");

    function getUrl(_url){
        return "http://localhost:5000/html/"+_url;
    }

    $stateProvider
    .state("home", {
        url: "/home",
        templateUrl: getUrl("index.html"),
        controller: "indexCtrl"
    })
    .state("medal",{
        url: "/media",
        templateUrl: getUrl("media.html"),
        controller: "mediaCtrl"
    })
    .state("medal.item",{
         url: "/medalItem",
         templateUrl: getUrl("media-item.html"),
         controller: "mediaItemCtrl"
    })
    .state("goodIdea",{
        url: "gIdea",
        templateUrl: getUrl("goodIdea.html"),
        controller: "goodIdeaCtrl"
    })

}])

var dr = angular.module("directive",[]);
dr.directive("inputFocus",function(){
    return function(scope,element,attrs){
        element.children().eq(0).on('click',function(){
            scope.toInput = true;
            document.getElementById('search-input').focus();
        })
    }
})



var app = angular.module("ItMadelApp",['ngMaterial','directive','index','ui.router']);
app.config(["$stateProvider", "$urlRouterProvider", function($stateProvider,$urlRouterProvider){
    "ngInject";
    //$stateProvider.when("");
    $urlRouterProvider.when("","home");
    $urlRouterProvider.when("/","home");

    function getUrl(_url){
        return "http://localhost:5000/html/"+_url;
    }

    $stateProvider
    .state("home", {
        url: "/home",
        templateUrl: getUrl("index.html"),
        controller: "indexCtrl"
    })
    .state("medal",{
        url: "/media",
        templateUrl: getUrl("media.html"),
        controller: "mediaCtrl"
    })
    .state("medal.item",{
         url: "/medalItem",
         templateUrl: getUrl("media-item.html"),
         controller: "mediaItemCtrl"
    })
    .state("goodIdea",{
        url: "gIdea",
        templateUrl: getUrl("goodIdea.html"),
        controller: "goodIdeaCtrl"
    })

}])

var dr = angular.module("directive",[]);
dr.directive("inputFocus",function(){
    return function(scope,element,attrs){
        element.children().eq(0).on('click',function(){
            scope.toInput = true;
            document.getElementById('search-input').focus();
        })
    }
})



var app = angular.module("ItMadelApp",['ngMaterial','directive','index','ui.router']);
app.config(["$stateProvider", "$urlRouterProvider", function($stateProvider,$urlRouterProvider){
    "ngInject";
    //$stateProvider.when("");
    $urlRouterProvider.when("","home");
    $urlRouterProvider.when("/","home");

    function getUrl(_url){
        return "http://localhost:5000/html/"+_url;
    }

    $stateProvider
    .state("home", {
        url: "/home",
        templateUrl: getUrl("index.html"),
        controller: "indexCtrl"
    })
    .state("medal",{
        url: "/media",
        templateUrl: getUrl("media.html"),
        controller: "mediaCtrl"
    })
    .state("medal.item",{
         url: "/medalItem",
         templateUrl: getUrl("media-item.html"),
         controller: "mediaItemCtrl"
    })
    .state("goodIdea",{
        url: "gIdea",
        templateUrl: getUrl("goodIdea.html"),
        controller: "goodIdeaCtrl"
    })

}])

var dr = angular.module("directive",[]);
dr.directive("inputFocus",function(){
    return function(scope,element,attrs){
        element.children().eq(0).on('click',function(){
            scope.toInput = true;
            document.getElementById('search-input').focus();
        })
    }
})



var app = angular.module("ItMadelApp",['ngMaterial','directive','index','ui.router']);
app.config(["$stateProvider", "$urlRouterProvider", function($stateProvider,$urlRouterProvider){
    "ngInject";
    //$stateProvider.when("");
    $urlRouterProvider.when("","home");
    $urlRouterProvider.when("/","home");

    function getUrl(_url){
        return "http://localhost:5000/html/"+_url;
    }

    $stateProvider
    .state("home", {
        url: "/home",
        templateUrl: getUrl("index.html"),
        controller: "indexCtrl"
    })
    .state("medal",{
        url: "/media",
        templateUrl: getUrl("media.html"),
        controller: "mediaCtrl"
    })
    .state("medal.item",{
         url: "/medalItem",
         templateUrl: getUrl("media-item.html"),
         controller: "mediaItemCtrl"
    })
    .state("goodIdea",{
        url: "gIdea",
        templateUrl: getUrl("goodIdea.html"),
        controller: "goodIdeaCtrl"
    })

}])

var dr = angular.module("directive",[]);
dr.directive("inputFocus",function(){
    return function(scope,element,attrs){
        element.children().eq(0).on('click',function(){
            scope.toInput = true;
            document.getElementById('search-input').focus();
        })
    }
})



var app = angular.module("ItMadelApp",['ngMaterial','directive','index','ui.router']);
app.config(["$stateProvider", "$urlRouterProvider", function($stateProvider,$urlRouterProvider){
    "ngInject";
    //$stateProvider.when("");
    $urlRouterProvider.when("","home");
    $urlRouterProvider.when("/","home");

    function getUrl(_url){
        return "http://localhost:5000/html/"+_url;
    }

    $stateProvider
    .state("home", {
        url: "/home",
        templateUrl: getUrl("index.html"),
        controller: "indexCtrl"
    })
    .state("medal",{
        url: "/media",
        templateUrl: getUrl("media.html"),
        controller: "mediaCtrl"
    })
    .state("medal.item",{
         url: "/medalItem",
         templateUrl: getUrl("media-item.html"),
         controller: "mediaItemCtrl"
    })
    .state("goodIdea",{
        url: "gIdea",
        templateUrl: getUrl("goodIdea.html"),
        controller: "goodIdeaCtrl"
    })

}])

var dr = angular.module("directive",[]);
dr.directive("inputFocus",function(){
    return function(scope,element,attrs){
        element.children().eq(0).on('click',function(){
            scope.toInput = true;
            document.getElementById('search-input').focus();
        })
    }
})


var index = angular.module("index",[]);
index.controller("indexCtrl",["$scope", function($scope){
    "ngInject";
    $scope.test = "hello world";
}]);

var app = angular.module("ItMadelApp",['ngMaterial','directive','index','ui.router']);
app.config(["$stateProvider", "$urlRouterProvider", function($stateProvider,$urlRouterProvider){
    "ngInject";
    //$stateProvider.when("");
    $urlRouterProvider.when("","home");
    $urlRouterProvider.when("/","home");

    function getUrl(_url){
        return "http://localhost:5000/html/"+_url;
    }

    $stateProvider
    .state("home", {
        url: "/home",
        templateUrl: getUrl("index.html"),
        controller: "indexCtrl"
    })
    .state("medal",{
        url: "/media",
        templateUrl: getUrl("media.html"),
        controller: "mediaCtrl"
    })
    .state("medal.item",{
         url: "/medalItem",
         templateUrl: getUrl("media-item.html"),
         controller: "mediaItemCtrl"
    })
    .state("goodIdea",{
        url: "gIdea",
        templateUrl: getUrl("goodIdea.html"),
        controller: "goodIdeaCtrl"
    })

}])

var dr = angular.module("directive",[]);
dr.directive("inputFocus",function(){
    return function(scope,element,attrs){
        element.children().eq(0).on('click',function(){
            scope.toInput = true;
            document.getElementById('search-input').focus();
        })
    }
})



var app = angular.module("ItMadelApp",['ngMaterial','directive','index','ui.router']);
app.config(["$stateProvider", "$urlRouterProvider", function($stateProvider,$urlRouterProvider){
    "ngInject";
    //$stateProvider.when("");
    $urlRouterProvider.when("","home");
    $urlRouterProvider.when("/","home");

    function getUrl(_url){
        return "http://localhost:5000/html/"+_url;
    }

    $stateProvider
    .state("home", {
        url: "/home",
        templateUrl: getUrl("index.html"),
        controller: "indexCtrl"
    })
    .state("medal",{
        url: "/media",
        templateUrl: getUrl("media.html"),
        controller: "mediaCtrl"
    })
    .state("medal.item",{
         url: "/medalItem",
         templateUrl: getUrl("media-item.html"),
         controller: "mediaItemCtrl"
    })
    .state("goodIdea",{
        url: "gIdea",
        templateUrl: getUrl("goodIdea.html"),
        controller: "goodIdeaCtrl"
    })

}])

var dr = angular.module("directive",[]);
dr.directive("inputFocus",function(){
    return function(scope,element,attrs){
        element.children().eq(0).on('click',function(){
            scope.toInput = true;
            document.getElementById('search-input').focus();
        })
    }
})


var index = angular.module("index",[]);
index.controller("indexCtrl",["$scope", function($scope){
    "ngInject";
    $scope.test = "hello world";
}]);

var app = angular.module("ItMadelApp",['ngMaterial','directive','index','ui.router']);
app.config(["$stateProvider", "$urlRouterProvider", function($stateProvider,$urlRouterProvider){
    "ngInject";
    //$stateProvider.when("");
    $urlRouterProvider.when("","home");
    $urlRouterProvider.when("/","home");

    function getUrl(_url){
        return "http://localhost:5000/html/"+_url;
    }

    $stateProvider
    .state("home", {
        url: "/home",
        templateUrl: getUrl("index.html"),
        controller: "indexCtrl"
    })
    .state("medal",{
        url: "/media",
        templateUrl: getUrl("media.html"),
        controller: "mediaCtrl"
    })
    .state("goodIdea",{
        url: "gIdea",
        templateUrl: getUrl("goodIdea.html"),
        controller: "goodIdeaCtrl"
    })

}])

var dr = angular.module("directive",[]);
dr.directive("inputFocus",function(){
    return function(scope,element,attrs){
        element.children().eq(0).on('click',function(){
            scope.toInput = true;
            document.getElementById('search-input').focus();
        })
    }
})



var app = angular.module("ItMadelApp",['ngMaterial','directive','index','ui.router']);
app.config(["$stateProvider", "$urlRouterProvider", function($stateProvider,$urlRouterProvider){
    "ngInject";
    //$stateProvider.when("");
    $urlRouterProvider.when("","home");
    $urlRouterProvider.when("/","home");

    function getUrl(_url){
        return "http://localhost:5000/html/"+_url;
    }

    $stateProvider
    .state("home", {
        url: "/home",
        templateUrl: getUrl("index.html"),
        controller: "indexCtrl"
    })
    .state("medal",{
        url: "/media",
        templateUrl: getUrl("media.html"),
        controller: "mediaCtrl"
    })
    .state("goodIdea",{
        url: "gIdea",
        templateUrl: getUrl("goodIdea.html"),
        controller: "goodIdeaCtrl"
    })

}])

var dr = angular.module("directive",[]);
dr.directive("inputFocus",function(){
    return function(scope,element,attrs){
        element.children().eq(0).on('click',function(){
            scope.toInput = true;
            document.getElementById('search-input').focus();
        })
    }
})



var app = angular.module("ItMadelApp",['ngMaterial','directive','index','ui.router']);
app.config(["$stateProvider", "$urlRouterProvider", function($stateProvider,$urlRouterProvider){
    "ngInject";
    //$stateProvider.when("");
    $urlRouterProvider.when("","home");
    $urlRouterProvider.when("/","home");

    function getUrl(_url){
        return "http://localhost:5000/template/"+_url;
    }

    $stateProvider
    .state("home", {
        url: "/home",
        templateUrl: getUrl("index.html"),
        controller: "indexCtrl"
    })
    .state("medal",{
        url: "/media",
        templateUrl: getUrl("media.html"),
        controller: "mediaCtrl"
    })
    .state("goodIdea",{
        url: "gIdea",
        templateUrl: getUrl("goodIdea.html"),
        controller: "goodIdeaCtrl"
    })

}])

var dr = angular.module("directive",[]);
dr.directive("inputFocus",function(){
    return function(scope,element,attrs){
        element.children().eq(0).on('click',function(){
            scope.toInput = true;
            document.getElementById('search-input').focus();
        })
    }
})



var app = angular.module("ItMadelApp",['ngMaterial','directive','index','ui.router']);
app.config(["$stateProvider", "$urlRouterProvider", function($stateProvider,$urlRouterProvider){
    "ngInject";
    //$stateProvider.when("");
    $urlRouterProvider.when("","home");
    $urlRouterProvider.when("/","home");

    function getUrl(_url){
        return "http://localhost:5000/template/"+_url;
    }

    $stateProvider
    .state("home", {
        url: "/home",
        templateUrl: getUrl("index.html"),
        controller: "indexCtrl"
    })
    .state("medal",{
        url: "/media",
        templateUrl: getUrl("media.html"),
        controller: "mediaCtrl"
    })
    .state("goodIdea",{
        url: "gIdea",
        templateUrl: getUrl("goodIdea.html"),
        controller: "goodIdeaCtrl"
    })

}])

var dr = angular.module("directive",[]);
dr.directive("inputFocus",function(){
    return function(scope,element,attrs){
        element.children().eq(0).on('click',function(){
            scope.toInput = true;
            document.getElementById('search-input').focus();
        })
    }
})



var app = angular.module("ItMadelApp",['ngMaterial','directive','index','ui.router']);
app.config(["$stateProvider", "$urlRouterProvider", function($stateProvider,$urlRouterProvider){
    "ngInject";
    //$stateProvider.when("");
    $urlRouterProvider.when("","home");
    $urlRouterProvider.when("/","home");

    function getUrl(_url){
        return "http://localhost:5000/template"+_url;
    }

    $stateProvider
    .state("home", {
        url: "/home",
        templateUrl: getUrl("index.html"),
        controller: "indexCtrl"
    })
    .state("medal",{
        url: "/media",
        templateUrl: getUrl("media.html"),
        controller: "mediaCtrl"
    })
    .state("goodIdea",{
        url: "gIdea",
        templateUrl: getUrl("goodIdea.html"),
        controller: "goodIdeaCtrl"
    })

}])

var dr = angular.module("directive",[]);
dr.directive("inputFocus",function(){
    return function(scope,element,attrs){
        element.children().eq(0).on('click',function(){
            scope.toInput = true;
            document.getElementById('search-input').focus();
        })
    }
})



var app = angular.module("ItMadelApp",['ngMaterial','directive','index','ui.router']);
app.config(["$stateProvider", "$urlRouterProvider", function($stateProvider,$urlRouterProvider){
    "ngInject";
    //$stateProvider.when("");
    $urlRouterProvider.when("","home");
    $urlRouterProvider.when("/","home");

    function getUrl(_url){
        return "http://localhost:5000/template"+_url;
    }

    $stateProvider
    .state("home", {
        url: "/home",
        templateUrl: getUrl("index.html"),
        controller: "indexCtrl"
    })
    .state("medal",{
        url: "/media",
        templateUrl: getUrl("media.html"),
        controller: "mediaCtrl"
    })
    .state("goodIdea",{
        url: "gIdea",
        templateUrl: getUrl("goodIdea.html"),
        controller: "goodIdeaCtrl"
    })

}])

var dr = angular.module("directive",[]);
dr.directive("inputFocus",function(){
    return function(scope,element,attrs){
        element.children().eq(0).on('click',function(){
            scope.toInput = true;
            document.getElementById('search-input').focus();
        })
    }
})



var app = angular.module("ItMadelApp",['ngMaterial','directive','index','ui.router']);
app.config(["$stateProvider", "$urlRouterProvider", function($stateProvider,$urlRouterProvider){
    "ngInject";
    //$stateProvider.when("");
    $urlRouterProvider.when("","home");
    $urlRouterProvider.when("/","home");

    function getUrl(_url){
        return "localhost:5000/html/"+_url;
    }

    $stateProvider
    .state("home", {
        url: "/home",
        templateUrl: getUrl("index.html"),
        controller: "indexCtrl"
    })
    .state("medal",{
        url: "/media",
        templateUrl: getUrl("media.html"),
        controller: "mediaCtrl"
    })
    .state("goodIdea",{
        url: "gIdea",
        templateUrl: getUrl("goodIdea.html"),
        controller: "goodIdeaCtrl"
    })

}])

var dr = angular.module("directive",[]);
dr.directive("inputFocus",function(){
    return function(scope,element,attrs){
        element.children().eq(0).on('click',function(){
            scope.toInput = true;
            document.getElementById('search-input').focus();
        })
    }
})


var index = angular.module("index",[]);
index.controller("indexCtrl",["$scope", function($scope){
    "ngInject";
    $scope.test = "hello world";
}]);

var app = angular.module("ItMadelApp",['ngMaterial','directive','index','ui.router']);
app.config(["$stateProvider", "$urlRouterProvider", function($stateProvider,$urlRouterProvider){
    "ngInject";
    //$stateProvider.when("");
    $urlRouterProvider.when("","home");
    $urlRouterProvider.when("/","home");

    function getUrl(_url){
        return "localhost:5000/html/"+_url;
    }

    $stateProvider
    .state("home", {
        url: "/home",
        templateUrl: getUrl("index.html"),
        controller: "indexCtrl"
    })
    .state("medal",{
        url: "/media",
        templateUrl: getUrl("media.html"),
        controller: "mediaCtrl"
    })
    .state("goodIdea",{
        url: "gIdea",
        templateUrl: getUrl("goodIdea.html"),
        controller: "goodIdeaCtrl"
    })

}])

var dr = angular.module("directive",[]);
dr.directive("inputFocus",function(){
    return function(scope,element,attrs){
        element.children().eq(0).on('click',function(){
            scope.toInput = true;
            document.getElementById('search-input').focus();
        })
    }
})



var app = angular.module("ItMadelApp",['ngMaterial','directive','index','ui.router']);
app.config(["$stateProvider", "$urlRouterProvider", function($stateProvider,$urlRouterProvider){
    "ngInject";
    //$stateProvider.when("");
    $urlRouterProvider.when("","home");
    $urlRouterProvider.when("/","home");

    function getUrl(_url){
        return "localhost:5000/html/"+_url;
    }

    $stateProvider
    .state("home", {
        url: "/home",
        templateUrl: getUrl("index.html"),
        controller: "indexCtrl"
    })
    .state("medal",{
        url: "/media",
        templateUrl: getUrl("media.html"),
        controller: "mediaCtrl"
    })
    .state("goodIdea",{
        url: "gIdea",
        templateUrl: getUrl("goodIdea.html"),
        controller: "goodIdeaCtrl"
    })

}])

var dr = angular.module("directive",[]);
dr.directive("inputFocus",function(){
    return function(scope,element,attrs){
        element.children().eq(0).on('click',function(){
            scope.toInput = true;
            document.getElementById('search-input').focus();
        })
    }
})



var app = angular.module("ItMadelApp",['ngMaterial','directive','index','ui.router']);
app.config(["$stateProvider", "$urlRouterProvider", function($stateProvider,$urlRouterProvider){
    "ngInject";
    //$stateProvider.when("");
    $urlRouterProvider.when("","home");
    $urlRouterProvider.when("/","home");

    function getUrl(_url){
        return "localhost:5000/html/"+_url;
    }

    $stateProvider
    .state("home", {
        url: "/home",
        templateUrl: getUrl("index.html"),
        controller: "indexCtrl"
    })
    .state("medal",{
        url: "/media",
        templateUrl: getUrl("media.html"),
        controller: "mediaCtrl"
    })
    .state("goodIdea",{
        url: "gIdea",
        templateUrl: getUrl("goodIdea.html"),
        controller: "goodIdeaCtrl"
    })

}])

var dr = angular.module("directive",[]);
dr.directive("inputFocus",function(){
    return function(scope,element,attrs){
        element.children().eq(0).on('click',function(){
            scope.toInput = true;
            document.getElementById('search-input').focus();
        })
    }
})


var index = angular.module("index",[]);
index.controller("indexCtrl",["$scope", function($scope){
    "ngInject";
    $scope.test = "hello world";
}]);

var app = angular.module("ItMadelApp",['ngMaterial','directive','index','ui.router']);
app.config(["$stateProvider", "$urlRouterProvider", function($stateProvider,$urlRouterProvider){
    "ngInject";
    //$stateProvider.when("");
    $urlRouterProvider.when("","home");
    $urlRouterProvider.when("/","home");

    function getUrl(_url){
        return "localhost:5000/html/";
    }

    $stateProvider
    .state("home", {
        url: "/home",
        templateUrl: getUrl("index.html"),
        controller: "indexCtrl"
    })
    .state("medal",{
        url: "/media",
        templateUrl: getUrl("media.html"),
        controller: "mediaCtrl"
    })
    .state("goodIdea",{
        url: "gIdea",
        templateUrl: getUrl("goodIdea.html"),
        controller: "goodIdeaCtrl"
    })

}])

var dr = angular.module("directive",[]);
dr.directive("inputFocus",function(){
    return function(scope,element,attrs){
        element.children().eq(0).on('click',function(){
            scope.toInput = true;
            document.getElementById('search-input').focus();
        })
    }
})


var index = angular.module("index",[]);
index.controller("indexCtrl",["$scope", function($scope){
    "ngInject";
    $scope.test = "hello world";
}]);

var app = angular.module("ItMadelApp",['ngMaterial','directive','index','ui.router']);
app.config(["$stateProvider", "$urlRouterProvider", function($stateProvider,$urlRouterProvider){
    "ngInject";
    //$stateProvider.when("");
    $urlRouterProvider.when("","home");
    $urlRouterProvider.when("/","home");

    function getUrl(_url){
        return "localhost:5000/html/";
    }

    $stateProvider
    .state("home", {
        url: "/home",
        templateUrl: getUrl("index.html"),
        controller: "indexCtrl"
    })
    .state("medal",{
        url: "/media",
        templateUrl: getUrl("media.html"),
        controller: "mediaCtrl"
    })
    .state("goodIdea",{
        url: "gIdea",
        templateUrl: getUrl("goodIdea.html"),
        controller: "goodIdeaCtrl"
    })

}])

var dr = angular.module("directive",[]);
dr.directive("inputFocus",function(){
    return function(scope,element,attrs){
        element.children().eq(0).on('click',function(){
            scope.toInput = true;
            document.getElementById('search-input').focus();
        })
    }
})



var app = angular.module("ItMadelApp",['ngMaterial','directive','index','ui.router']);
app.config(["$stateProvider", "$urlRouterProvider", function($stateProvider,$urlRouterProvider){
    "ngInject";
    //$stateProvider.when("");
    $urlRouterProvider.when("","home");
    $urlRouterProvider.when("/","home");

    function getUrl(_url){
        return "localhost:5000/html/template/";
    }

    $stateProvider
    .state("home", {
        url: "/home",
        templateUrl: getUrl("index.html"),
        controller: "indexCtrl"
    })
    .state("medal",{
        url: "/media",
        templateUrl: getUrl("media.html"),
        controller: "mediaCtrl"
    })
    .state("goodIdea",{
        url: "gIdea",
        templateUrl: getUrl("goodIdea.html"),
        controller: "goodIdeaCtrl"
    })

}])

var dr = angular.module("directive",[]);
dr.directive("inputFocus",function(){
    return function(scope,element,attrs){
        element.children().eq(0).on('click',function(){
            scope.toInput = true;
            document.getElementById('search-input').focus();
        })
    }
})



var app = angular.module("ItMadelApp",['ngMaterial','directive','index','ui.router']);
app.config(["$stateProvider", "$urlRouterProvider", function($stateProvider,$urlRouterProvider){
    "ngInject";
    //$stateProvider.when("");
    $urlRouterProvider.when("","home");
    $urlRouterProvider.when("/","home");

    function getUrl(_url){
        return "localhost:5000/html/template/";
    }

    $stateProvider
    .state("home", {
        url: "/home",
        templateUrl: getUrl("index.html"),
        controller: "indexCtrl"
    })
    .state("medal",{
        url: "/media",
        templateUrl: getUrl("media.html"),
        controller: "mediaCtrl"
    })
    .state("goodIdea",{
        url: "gIdea",
        templateUrl: getUrl("goodIdea.html"),
        controller: "goodIdeaCtrl"
    })

}])

var dr = angular.module("directive",[]);
dr.directive("inputFocus",function(){
    return function(scope,element,attrs){
        element.children().eq(0).on('click',function(){
            scope.toInput = true;
            document.getElementById('search-input').focus();
        })
    }
})


var index = angular.module("index",[]);
index.controller("indexCtrl",["$scope", function($scope){
    "ngInject";
    $scope.test = "hello world";
}]);

var app = angular.module("ItMadelApp",['ngMaterial','directive','index','ui.router']);
app.config(["$stateProvider", function($stateProvider){
    "ngInject";
    //$stateProvider.when("");

}])

var dr = angular.module("directive",[]);
dr.directive("inputFocus",function(){
    return function(scope,element,attrs){
        element.children().eq(0).on('click',function(){
            scope.toInput = true;
            document.getElementById('search-input').focus();
        })
    }
})


var index = angular.module("index",[]);
index.controller("indexCtrl",["$scope", function($scope){
    "ngInject";
    $scope.test = "hello world";
}]);

var app = angular.module("ItMadelApp",['ngMaterial','directive','index','ui.router']);
app.config(["$stateProvider", function($stateProvider){
    "ngInject";
    //$stateProvider.when("");

}])

var dr = angular.module("directive",[]);
dr.directive("inputFocus",function(){
    return function(scope,element,attrs){
        element.children().eq(0).on('click',function(){
            scope.toInput = true;
            document.getElementById('search-input').focus();
        })
    }
})



var app = angular.module("ItMadelApp",['ngMaterial','directive','index','ui.router']);
app.config(["$stateProvider", function($stateProvider){
    "ngInject";
    //$stateProvider.when("");

}])

var dr = angular.module("directive",[]);
dr.directive("inputFocus",function(){
    return function(scope,element,attrs){
        element.children().eq(0).on('click',function(){
            scope.toInput = true;
            document.getElementById('search-input').focus();
        })
    }
})



var app = angular.module("ItMadelApp",['ngMaterial','directive','index','ui.router']);
app.config(["$stateProvider", function($stateProvider){
    "ngInject";
    //$stateProvider.when("");

}])

var dr = angular.module("directive",[]);
dr.directive("inputFocus",function(){
    return function(scope,element,attrs){
        element.children().eq(0).on('click',function(){
            scope.toInput = true;
            document.getElementById('search-input').focus();
        })
    }
})


var index = angular.module("index",[]);
index.controller("indexCtrl",["$scope", function($scope){
    "ngInject";
    $scope.test = "hello world";
}]);

var app = angular.module("ItMadelApp",['ngMaterial','directive','index','ui.router']);
app.config(["$stateProvider", function($stateProvider){
    "ngInject";
    //$stateProvider.when("");

}])

var dr = angular.module("directive",[]);
dr.directive("inputFocus",function(){
    return function(scope,element,attrs){
        element.children().eq(0).on('click',function(){
            scope.toInput = true;
            document.getElementById('search-input').focus();
        })
    }
})


var index = angular.module("index",[]);
index.controller("indexCtrl",["$scope", function($scope){
    "ngInject";
    $scope.test = "hello world";
}]);

var app = angular.module("ItMadelApp",['ngMaterial','directive','index','ui.router']);
app.config(["$stateProvider", function($stateProvider){
    "ngInject";
    //$stateProvider.when("");

}])

var dr = angular.module("directive",[]);
dr.directive("inputFocus",function(){
    return function(scope,element,attrs){
        element.children().eq(0).on('click',function(){
            scope.toInput = true;
            document.getElementById('search-input').focus();
        })
    }
})



var app = angular.module("ItMadelApp",['directive','index','ui.router']);
app.config(["$stateProvider", function($stateProvider){
    "ngInject";
    //$stateProvider.when("");

}])

var dr = angular.module("directive",[]);
dr.directive("inputFocus",function(){
    return function(scope,element,attrs){
        element.children().eq(0).on('click',function(){
            scope.toInput = true;
            document.getElementById('search-input').focus();
        })
    }
})



var app = angular.module("ItMadelApp",['directive','index','ui.router']);
app.config(["$stateProvider", function($stateProvider){
    "ngInject";
    //$stateProvider.when("");

}])

var dr = angular.module("directive",[]);
dr.directive("inputFocus",function(){
    return function(scope,element,attrs){
        element.children().eq(0).on('click',function(){
            scope.toInput = true;
            document.getElementById('search-input').focus();
        })
    }
})


var index = angular.module("index",[]);
index.controller("indexCtrl",["$scope", function($scope){
    "ngInject";
    $scope.test = "hello world";
}]);

var app = angular.module("ItMadelApp",['directive','ui.router']);
app.config(["$stateProvider", function($stateProvider){
    "ngInject";

    //$routeProvider.when("");

}])

var dr = angular.module("directive",[]);
dr.directive("inputFocus",function(){
    return function(scope,element,attrs){
        element.children().eq(0).on('click',function(){
            scope.toInput = true;
            document.getElementById('search-input').focus();
        })
    }
})


var index = angular.module("index",[]);
index.controller("indexCtrl",["$scope", function($scope){
    $scope.test = "hello world";
}]);

var dr = angular.module("directive",[]);
dr.directive("inputFocus",function(){
    return function(scope,element,attrs){
        element.children().eq(0).on('click',function(){
            scope.toInput = true;
            document.getElementById('search-input').focus();
        })
    }
})



var app = angular.module("ItMadelApp",['directive','ui.router']);
app.config(["$routeProvider", function($routeProvider){
    "ngInject";

    //$routeProvider.when("");

}])

var dr = angular.module("directive",[]);
dr.directive("inputFocus",function(){
    return function(scope,element,attrs){
        element.children().eq(0).on('click',function(){
            scope.toInput = true;
            document.getElementById('search-input').focus();
        })
    }
})



var app = angular.module("ItMadelApp",['directive','ui.router']);
app.config(["$routeProvider", function($routeProvider){
    "ngInject";

    //$routeProvider.when("");

}])

var dr = angular.module("directive",[]);
dr.directive("inputFocus",function(){
    return function(scope,element,attrs){
        element.children().eq(0).on('click',function(){
            scope.toInput = true;
            document.getElementById('search-input').focus();
        })
    }
})



var app = angular.module("ItMadelApp",['directive','ui.router']);
"ngInject"
app.config(["$routeProvider", function($routeProvider){

    //$routeProvider.when("");

}])

var dr = angular.module("directive",[]);
dr.directive("inputFocus",function(){
    return function(scope,element,attrs){
        element.children().eq(0).on('click',function(){
            scope.toInput = true;
            document.getElementById('search-input').focus();
        })
    }
})



var app = angular.module("ItMadelApp",['directive','ui.router']);
"ngInject"
app.config(["$routeProvider", function($routeProvider){

    //$routeProvider.when("");

}])

var dr = angular.module("directive",[]);
dr.directive("inputFocus",function(){
    return function(scope,element,attrs){
        element.children().eq(0).on('click',function(){
            scope.toInput = true;
            document.getElementById('search-input').focus();
        })
    }
})



var app = angular.module("ItMadelApp",['directive','ui.router']);

app.config(["$routeProvider", function($routeProvider){

    //$routeProvider.when("");

}])

var dr = angular.module("directive",[]);
dr.directive("inputFocus",function(){
    return function(scope,element,attrs){
        element.children().eq(0).on('click',function(){
            scope.toInput = true;
            document.getElementById('search-input').focus();
        })
    }
})


var index = angular.module("index",[]);
index.controller("indexCtrl",["$scope", function($scope){
    $scope.test = "hello world";
}]);

var app = angular.module("ItMadelApp",['directive','ui.router']);

app.config(["$routeProvider", function($routeProvider){

    //$routeProvider.when("");

}])

var dr = angular.module("directive",[]);
dr.directive("inputFocus",function(){
    return function(scope,element,attrs){
        element.children().eq(0).on('click',function(){
            scope.toInput = true;
            document.getElementById('search-input').focus();
        })
    }
})



var dr = angular.module("directive",[]);
dr.directive("inputFocus",function(){
    return function(scope,element,attrs){
        element.children().eq(0).on('click',function(){
            scope.toInput = true;
            document.getElementById('search-input').focus();
        })
    }
})



var dr = angular.module("directive",[]);
dr.directive("inputFocus",function(){
    return function(scope,element,attrs){
        element.children().eq(0).on('click',function(){
            scope.toInput = true;
            document.getElementById('search-input').focus();
        })
    }
})



var app = angular.module("ItMadelApp",['directive','ui-router']);

app.config(["$routeProvider", function($routeProvider){

    //$routeProvider.when("");

}])

var dr = angular.module("directive",[]);
dr.directive("inputFocus",function(){
    return function(scope,element,attrs){
        element.children().eq(0).on('click',function(){
            scope.toInput = true;
            document.getElementById('search-input').focus();
        })
    }
})



var app = angular.module("ItMadelApp",['directive','ui-router']);

app.config(["$routeProvider", function($routeProvider){

    //$routeProvider.when("");

}])

var dr = angular.module("directive",[]);
dr.directive("inputFocus",function(){
    return function(scope,element,attrs){
        element.children().eq(0).on('click',function(){
            scope.toInput = true;
            document.getElementById('search-input').focus();
        })
    }
})



var app = angular.module("ItMadelApp",['directive']);

app.config(["$routeProvider", function($routeProvider){

    //$routeProvider.when("");

}])

var dr = angular.module("directive",[]);
dr.directive("inputFocus",function(){
    return function(scope,element,attrs){
        element.children().eq(0).on('click',function(){
            scope.toInput = true;
            document.getElementById('search-input').focus();
        })
    }
})



var app = angular.module("ItMadelApp",['directive']);

app.config(["$routeProvider", function($routeProvider){

    //$routeProvider.when("");

}])

var dr = angular.module("directive",[]);
dr.directive("inputFocus",function(){
    return function(scope,element,attrs){
        element.children().eq(0).on('click',function(){
            scope.toInput = true;
            document.getElementById('search-input').focus();
        })
    }
})



var app = angular.module("itTags",['directive']);

app.config(["$routeProvider", function($routeProvider){

    //$routeProvider.when("");

}])

var dr = angular.module("directive",[]);
dr.directive("inputFocus",function(){
    return function(scope,element,attrs){
        element.children().eq(0).on('click',function(){
            scope.toInput = true;
            document.getElementById('search-input').focus();
        })
    }
})



var app = angular.module("itTags",['directive']);

app.config(["$routeProvider", function($routeProvider){

    //$routeProvider.when("");

}])

var dr = angular.module("directive",[]);
dr.directive("inputFocus",function(){
    return function(scope,element,attrs){
        element.children().eq(0).on('click',function(){
            scope.toInput = true;
            document.getElementById('search-input').focus();
        })
    }
})



var app = angular.module("itTags",['directive']);

app.config(["$routeProvider", function($routeProvider){

    //$routeProvider.when("");

}])

var dr = angular.module("directive",[]);
dr.directive("inputFocus",function(){
    return function(scope,element,attrs){
        element.children().eq(0).on('click',function(){
            scope.toInput = true;
            document.getElementById('search-input').focus();
        })
    }
})



var app = angular.module("itTags",['directive']);

app.config(["$routeProvider", function($routeProvider){

    //$routeProvider.when("");

}])

var dr = angular.module("directive",[]);
dr.directive("inputFocus",function(){
    return function(scope,element,attrs){
        element.children().eq(0).on('click',function(){
            scope.toInput = true;
            document.getElementById('search-input').focus();
        })
    }
})


var index = angular.module("index",[]);
index.controller("indexCtrl",["$scope", function($scope){
    $scope.test = "hello world";
}]);

var app = angular.module("itTags",[]);

app.config(["$routeProvider", function($routeProvider){

    //$routeProvider.when("");

}])

var index = angular.module("index",[]);
index.controller("indexCtrl",["$scope", function($scope){
    $scope.test = "hello world";
}]);


var index = angular.module("index",[]);
index.controller("indexCtrl",["$scope", function($scope){
    $scope.test = "hello world";
}]);

var app = angular.module("itTags",[]);

app.config(["$routeProvider", function($routeProvider){

    //$routeProvider.when("");

}])


var app = angular.module("itTags",[]);

app.config(["$routeProvider", function($routeProvider){

    //$routeProvider.when("");

}])


var app = angular.module("itTags",[]);

app.config(["$routeProvider", function($routeProvider){

    //$routeProvider.when("");

}])


var app = angular.module("itTags",[]);

app.config(["$routeProvider", function($routeProvider){

    //$routeProvider.when("");

}])


var app = angular.module("itTags",[]);

app.config(["$routeProvider", function($routeProvider){

    //$routeProvider.when("");

}])


var sv = angular.module("index_sv",[]);

sv.service("items",function(){

})

var sv = angular.module("index_sv",[]);

sv.service("items",function(){

})

var sv = angular.module("index_sv",[]);

sv.service("items",function(){

})

var sv = angular.module("index_sv",[]);

sv.service("items",function(){

})

var sv = angular.module("index_sv",[]);

sv.service("items",function(){

})

var sv = angular.module("index_sv",[]);

sv.service("items",function(){

})

var sv = angular.module("index_sv",[]);

sv.service("items",function(){

})

var sv = angular.module("index_sv",[]);

sv.service("items",function(){

})

var sv = angular.module("index_sv",[]);

sv.service("items",function(){

})

var sv = angular.module("index_sv",[]);

sv.service("items",function(){

})

var sv = angular.module("index_sv",[]);

sv.service("items",function(){

})

var sv = angular.module("index_sv",[]);

sv.service("items",function(){

})

var sv = angular.module("index_sv",[]);

sv.service("items",function(){

})

var sv = angular.module("index_sv",[]);

sv.service("items",function(){

})

var sv = angular.module("index_sv",[]);

sv.service("items",function(){

})

var sv = angular.module("index_sv",[]);

sv.service("items",function(){

})

var sv = angular.module("index_sv",[]);

sv.service("items",function(){

})

var sv = angular.module("index_sv",[]);

sv.service("items",function(){

})

var sv = angular.module("index_sv",[]);

sv.service("items",function(){

})

var sv = angular.module("index_sv",[]);

sv.service("items",function(){

})

var sv = angular.module("index_sv",[]);

sv.service("items",function(){

})

var sv = angular.module("index_sv",[]);

sv.service("items",function(){

})

var sv = angular.module("index_sv",[]);

sv.service("items",function(){

})

var sv = angular.module("index_sv",[]);

sv.service("items",function(){

})

var sv = angular.module("index_sv",[]);

sv.service("items",function(){

})

var sv = angular.module("index_sv",[]);

sv.service("items",function(){

})

var sv = angular.module("index_sv",[]);

sv.service("items",function(){

})

var sv = angular.module("index_sv",[]);

sv.service("items",function(){

})

var sv = angular.module("index_sv",[]);

sv.service("items",function(){

})

var sv = angular.module("index_sv",[]);

sv.service("items",function(){

})

var sv = angular.module("index_sv",[]);

sv.service("items",function(){

})

var sv = angular.module("index_sv",[]);

sv.service("items",function(){

})

var sv = angular.module("index_sv",[]);

sv.service("items",function(){

})

var sv = angular.module("index_sv",[]);

sv.service("items",function(){

})

var sv = angular.module("index_sv",[]);

sv.service("items",function(){

})

var sv = angular.module("index_sv",[]);

sv.service("items",function(){

})

var sv = angular.module("index_sv",[]);

sv.service("items",function(){

})

var sv = angular.module("index_sv",[]);

sv.service("items",function(){

})

var sv = angular.module("index_sv",[]);

sv.service("items",function(){

})

var sv = angular.module("index_sv",[]);

sv.service("items",function(){

})

var sv = angular.module("index_sv",[]);

sv.service("items",function(){

})

var sv = angular.module("index_sv",[]);

sv.service("items",function(){

})

var sv = angular.module("index_sv",[]);

sv.service("items",function(){

})

var sv = angular.module("index_sv",[]);

sv.service("items",function(){

})

var sv = angular.module("index_sv",[]);

sv.service("items",function(){

})

var sv = angular.module("index_sv",[]);

sv.service("items",function(){

})

var sv = angular.module("index_sv",[]);

sv.service("items",function(){

})

var sv = angular.module("index_sv",[]);

sv.service("items",function(){

})

var sv = angular.module("index_sv",[]);

sv.service("items",function(){

})

var sv = angular.module("index_sv",[]);

sv.service("items",function(){

})

var sv = angular.module("index_sv",[]);

sv.service("items",function(){

})

var sv = angular.module("index_sv",[]);

sv.service("items",function(){

})

var sv = angular.module("index_sv",[]);

sv.service("items",function(){

})

var sv = angular.module("index_sv",[]);

sv.service("items",function(){

})

var sv = angular.module("index_sv",[]);

sv.service("items",function(){

})

var sv = angular.module("index_sv",[]);

sv.service("items",function(){

})

var sv = angular.module("index_sv",[]);

sv.service("items",function(){

})

var sv = angular.module("index_sv",[]);

sv.service("items",function(){

})

var sv = angular.module("index_sv",[]);

sv.service("items",function(){

})

var sv = angular.module("index_sv",[]);

sv.service("items",function(){

})

var sv = angular.module("index_sv",[]);

sv.service("items",function(){

})

var sv = angular.module("index_sv",[]);

sv.service("items",function(){

})

var sv = angular.module("index_sv",[]);

sv.service("items",function(){

})

var sv = angular.module("index_sv",[]);

sv.service("items",function(){

})

var sv = angular.module("index_sv",[]);

sv.service("items",function(){

})

var sv = angular.module("index_sv",[]);

sv.service("items",function(){

})

var sv = angular.module("index_sv",[]);

sv.service("items",function(){

})

var sv = angular.module("index_sv",[]);

sv.service("items",function(){

})

var sv = angular.module("index_sv",[]);

sv.service("items",function(){

})

var sv = angular.module("index_sv",[]);

sv.service("items",function(){

})

var sv = angular.module("index_sv",[]);

sv.service("items",function(){

})

var sv = angular.module("index_sv",[]);

sv.service("items",function(){

})

var sv = angular.module("index_sv",[]);

sv.service("items",function(){

})

var sv = angular.module("index_sv",[]);

sv.service("items",function(){

})

var sv = angular.module("index_sv",[]);

sv.service("items",function(){

})

var sv = angular.module("index_sv",[]);

sv.service("items",function(){

})

var sv = angular.module("index_sv",[]);

sv.service("items",function(){

})

var sv = angular.module("index_sv",[]);

sv.service("Index",["$location", function($location){
    var path;
    var index;
    var routers = ["medal","goodIdea","log","aboutUs"];
    var pages = ["./html/medal.html","./html/good-idea.html","./html/log.html","./html/about-us.html"];
    var ctrls = ["medalCtrl","goodIdeaCtrl","logCtrl","aboutUsCtrl"];

    this.setIndex = function(_index){
        var index = _index;
    }

    this.getIndex = function(){
        return _index;
    }

    this.getCurPage = function(){
        return pages[index];
    }

    this.getCurCtrl = function(){
        return ctrls[index];
    }

    this.init = function(){
        path = $location.path();

        for(var i in routers){
            if(path.indexOf(routers[i])>=0){
                index = Number(i);
            }else{
                index = null;
            }
        }
    }
}])

var sv = angular.module("index_sv",[]);

sv.service("Index",["$location", function($location){
    var path;
    var index;
    var routers = ["medal","goodIdea","log","aboutUs"];
    var pages = ["./html/medal.html","./html/good-idea.html","./html/log.html","./html/about-us.html"];
    var ctrls = ["medalCtrl","goodIdeaCtrl","logCtrl","aboutUsCtrl"];

    this.setIndex = function(_index){
        var index = _index;
    }

    this.getIndex = function(){
        return _index;
    }

    this.getCurPage = function(){
        return pages[index];
    }

    this.getCurCtrl = function(){
        return ctrls[index];
    }

    this.init = function(){
        path = $location.path();

        for(var i in routers){
            if(path.indexOf(routers[i])>=0){
                index = Number(i);
            }else{
                index = null;
            }
        }
    }
}])

var sv = angular.module("index_sv",[]);

sv.service("Index",["$location", function($location){
    var path;
    var index;
    var routers = ["medal","goodIdea","log","aboutUs"];
    var pages = ["./html/medal.html","./html/good-idea.html","./html/log.html","./html/about-us.html"];
    var ctrls = ["medalCtrl","goodIdeaCtrl","logCtrl","aboutUsCtrl"];

    this.setIndex = function(_index){
        var index = _index;
    }

    this.getIndex = function(){
        return _index;
    }

    this.getCurPage = function(){
        return pages[index];
    }

    this.getCurCtrl = function(){
        return ctrls[index];
    }

    this.init = function(){
        path = $location.path();

        for(var i in routers){
            if(path.indexOf(routers[i])>=0){
                index = Number(i);
            }else{
                index = null;
            }
        }
    }
}])

var sv = angular.module("index_sv",[]);

sv.service("Index",["$location", function($location){
    var path;
    var index;
    var routers = ["medal","goodIdea","log","aboutUs"];
    var pages = ["./html/medal.html","./html/good-idea.html","./html/log.html","./html/about-us.html"];
    var ctrls = ["medalCtrl","goodIdeaCtrl","logCtrl","aboutUsCtrl"];

    this.setIndex = function(_index){
        var index = _index;
    }

    this.getIndex = function(){
        return _index;
    }

    this.getCurPage = function(){
        return pages[index];
    }

    this.getCurCtrl = function(){
        return ctrls[index];
    }

    this.init = function(){
        path = $location.path();

        for(var i in routers){
            if(path.indexOf(routers[i])>=0){
                index = Number(i);
            }else{
                index = null;
            }
        }
    }
}])

var sv = angular.module("index_sv",[]);

sv.service("Index",["$location", function($location){
    var path;
    var index;
    var routers = ["medal","goodIdea","log","aboutUs"];
    var pages = ["./html/medal.html","./html/good-idea.html","./html/log.html","./html/about-us.html"];
    var ctrls = ["medalCtrl","goodIdeaCtrl","logCtrl","aboutUsCtrl"];

    this.setIndex = function(_index){
        var index = _index;
    }

    this.getIndex = function(){
        return _index;
    }

    this.getCurPage = function(){
        return pages[index];
    }

    this.getCurCtrl = function(){
        return ctrls[index];
    }

    this.init = function(){
        path = $location.path();

        for(var i in routers){
            if(path.indexOf(routers[i])>=0){
                index = Number(i);
            }else{
                index = null;
            }
        }
    }
}])

var sv = angular.module("index_sv",[]);

sv.service("Index",["$location", function($location){
    var path;
    var index;
    var routers = ["medal","goodIdea","log","aboutUs"];
    var pages = ["./html/medal.html","./html/good-idea.html","./html/log.html","./html/about-us.html"];
    var ctrls = ["medalCtrl","goodIdeaCtrl","logCtrl","aboutUsCtrl"];

    this.setIndex = function(_index){
        var index = _index;
    }

    this.getIndex = function(){
        return _index;
    }

    this.getCurPage = function(){
        return pages[index];
    }

    this.getCurCtrl = function(){
        return ctrls[index];
    }

    this.init = function(){
        path = $location.path();

        for(var i in routers){
            if(path.indexOf(routers[i])>=0){
                index = Number(i);
            }else{
                index = null;
            }
        }
    }
}])

var sv = angular.module("index_sv",[]);

sv.service("Index",["$location", function($location){
    var path;
    var index;
    var routers = ["medal","goodIdea","log","aboutUs"];
    var pages = ["./html/medal.html","./html/good-idea.html","./html/log.html","./html/about-us.html"];
    var ctrls = ["medalCtrl","goodIdeaCtrl","logCtrl","aboutUsCtrl"];

    this.setIndex = function(_index){
        var index = _index;
    }

    this.getIndex = function(){
        return _index;
    }

    this.getCurPage = function(){
        return pages[index];
    }

    this.getCurCtrl = function(){
        return ctrls[index];
    }

    this.init = function(){
        path = $location.path();

        for(var i in routers){
            if(path.indexOf(routers[i])>=0){
                index = Number(i);
            }else{
                index = null;
            }
        }
    }
}])

var sv = angular.module("index_sv",[]);

sv.service("Index",["$location", function($location){
    var path;
    var index;
    var routers = ["medal","goodIdea","log","aboutUs"];
    var pages = ["./html/medal.html","./html/good-idea.html","./html/log.html","./html/about-us.html"];
    var ctrls = ["medalCtrl","goodIdeaCtrl","logCtrl","aboutUsCtrl"];

    this.setIndex = function(_index){
        var index = _index;
    }

    this.getIndex = function(){
        return _index;
    }

    this.getCurPage = function(){
        return pages[index];
    }

    this.getCurCtrl = function(){
        return ctrls[index];
    }

    this.init = function(){
        path = $location.path();

        for(var i in routers){
            if(path.indexOf(routers[i])>=0){
                index = Number(i);
            }else{
                index = null;
            }
        }
    }
}])

var sv = angular.module("index_sv",[]);

sv.service("Index",["$location", function($location){
    var path;
    var index;
    var routers = ["medal","goodIdea","log","aboutUs"];
    var pages = ["./html/medal.html","./html/good-idea.html","./html/log.html","./html/about-us.html"];
    var ctrls = ["medalCtrl","goodIdeaCtrl","logCtrl","aboutUsCtrl"];

    this.setIndex = function(_index){
        var index = _index;
    }

    this.getIndex = function(){
        return _index;
    }

    this.getCurPage = function(){
        return pages[index];
    }

    this.getCurCtrl = function(){
        return ctrls[index];
    }

    this.init = function(){
        path = $location.path();

        for(var i in routers){
            if(path.indexOf(routers[i])>=0){
                index = Number(i);
            }else{
                index = null;
            }
        }
    }
}])

var sv = angular.module("index_sv",[]);

sv.service("Index",["$location", function($location){
    var path;
    var index;
    var routers = ["medal","goodIdea","log","aboutUs"];
    var pages = ["./html/medal.html","./html/good-idea.html","./html/log.html","./html/about-us.html"];
    var ctrls = ["medalCtrl","goodIdeaCtrl","logCtrl","aboutUsCtrl"];

    this.setIndex = function(_index){
        var index = _index;
    }

    this.getIndex = function(){
        return _index;
    }

    this.getCurPage = function(){
        return pages[index];
    }

    this.getCurCtrl = function(){
        return ctrls[index];
    }

    this.init = function(){
        path = $location.path();

        for(var i in routers){
            if(path.indexOf(routers[i])>=0){
                index = Number(i);
            }else{
                index = null;
            }
        }
    }
}])

var sv = angular.module("index_sv",[]);

sv.service("Index",["$location", function($location){
    var path;
    var index;
    var routers = ["medal","goodIdea","log","aboutUs"];
    var pages = ["./html/medal.html","./html/good-idea.html","./html/log.html","./html/about-us.html"];
    var ctrls = ["medalCtrl","goodIdeaCtrl","logCtrl","aboutUsCtrl"];

    this.setIndex = function(_index){
        var index = _index;
    }

    this.getIndex = function(){
        return _index;
    }

    this.getCurPage = function(){
        return pages[index];
    }

    this.getCurCtrl = function(){
        return ctrls[index];
    }

    this.init = function(){
        path = $location.path();

        for(var i in routers){
            if(path.indexOf(routers[i])>=0){
                index = Number(i);
            }else{
                index = null;
            }
        }
    }
}])

var sv = angular.module("index_sv",[]);

sv.service("Index",["$location", function($location){
    var path;
    var index;
    var routers = ["medal","goodIdea","log","aboutUs"];
    var pages = ["./html/medal.html","./html/good-idea.html","./html/log.html","./html/about-us.html"];
    var ctrls = ["medalCtrl","goodIdeaCtrl","logCtrl","aboutUsCtrl"];

    this.setIndex = function(_index){
        var index = _index;
    }

    this.getIndex = function(){
        return _index;
    }

    this.getCurPage = function(){
        return pages[index];
    }

    this.getCurCtrl = function(){
        return ctrls[index];
    }

    this.init = function(){
        path = $location.path();

        for(var i in routers){
            if(path.indexOf(routers[i])>=0){
                index = Number(i);
            }else{
                index = null;
            }
        }
    }
}])

var sv = angular.module("index_sv",[]);

sv.service("Index",["$location", function($location){
    var path;
    var index;
    var routers = ["medal","goodIdea","log","aboutUs"];
    var pages = ["./html/medal.html","./html/good-idea.html","./html/log.html","./html/about-us.html"];
    var ctrls = ["medalCtrl","goodIdeaCtrl","logCtrl","aboutUsCtrl"];

    this.setIndex = function(_index){
        var index = _index;
    }

    this.getIndex = function(){
        return _index;
    }

    this.getCurPage = function(){
        return pages[index];
    }

    this.getCurCtrl = function(){
        return ctrls[index];
    }

    this.init = function(){
        path = $location.path();

        for(var i in routers){
            if(path.indexOf(routers[i])>=0){
                index = Number(i);
            }else{
                index = null;
            }
        }
    }
}])

var sv = angular.module("index_sv",[]);

sv.service("Index",["$location", function($location){
    var path;
    var index;
    var routers = ["medal","goodIdea","log","aboutUs"];
    var pages = ["./html/medal.html","./html/good-idea.html","./html/log.html","./html/about-us.html"];
    var ctrls = ["medalCtrl","goodIdeaCtrl","logCtrl","aboutUsCtrl"];

    this.setIndex = function(_index){
        var index = _index;
    }

    this.getIndex = function(){
        return _index;
    }

    this.getCurPage = function(){
        return pages[index];
    }

    this.getCurCtrl = function(){
        return ctrls[index];
    }

    this.init = function(){
        path = $location.path();

        for(var i in routers){
            if(path.indexOf(routers[i])>=0){
                index = Number(i);
            }else{
                index = null;
            }
        }
    }
}])

var sv = angular.module("index_sv",[]);

sv.service("Index",["$location", function($location){
    var path;
    var index;
    var routers = ["medal","goodIdea","log","aboutUs"];
    var pages = ["./html/medal.html","./html/good-idea.html","./html/log.html","./html/about-us.html"];
    var ctrls = ["medalCtrl","goodIdeaCtrl","logCtrl","aboutUsCtrl"];

    this.setIndex = function(_index){
        var index = _index;
    }

    this.getIndex = function(){
        return _index;
    }

    this.getCurPage = function(){
        return pages[index];
    }

    this.getCurCtrl = function(){
        return ctrls[index];
    }

    this.init = function(){
        path = $location.path();

        for(var i in routers){
            if(path.indexOf(routers[i])>=0){
                index = Number(i);
            }else{
                index = null;
            }
        }
    }
}])

var sv = angular.module("index_sv",[]);

sv.service("Index",["$location", function($location){
    var path;
    var index;
    var routers = ["medal","goodIdea","log","aboutUs"];
    var pages = ["./html/medal.html","./html/good-idea.html","./html/log.html","./html/about-us.html"];
    var ctrls = ["medalCtrl","goodIdeaCtrl","logCtrl","aboutUsCtrl"];

    this.setIndex = function(_index){
        var index = _index;
    }

    this.getIndex = function(){
        return _index;
    }

    this.getCurPage = function(){
        return pages[index];
    }

    this.getCurCtrl = function(){
        return ctrls[index];
    }

    this.init = function(){
        path = $location.path();

        for(var i in routers){
            if(path.indexOf(routers[i])>=0){
                index = Number(i);
            }else{
                index = null;
            }
        }
    }
}])

var sv = angular.module("index_sv",[]);

sv.service("Index",["$location", function($location){
    var path;
    var index;
    var routers = ["medal","goodIdea","log","aboutUs"];
    var pages = ["./html/medal.html","./html/good-idea.html","./html/log.html","./html/about-us.html"];
    var ctrls = ["medalCtrl","goodIdeaCtrl","logCtrl","aboutUsCtrl"];

    this.setIndex = function(_index){
        var index = _index;
    }

    this.getIndex = function(){
        return _index;
    }

    this.getCurPage = function(){
        return pages[index];
    }

    this.getCurCtrl = function(){
        return ctrls[index];
    }

    this.init = function(){
        path = $location.path();

        for(var i in routers){
            if(path.indexOf(routers[i])>=0){
                index = Number(i);
            }else{
                index = null;
            }
        }
    }
}])

var sv = angular.module("index_sv",[]);

sv.service("Index",["$location", function($location){
    var path;
    var index;
    var routers = ["medal","goodIdea","log","aboutUs"];
    var pages = ["./html/medal.html","./html/good-idea.html","./html/log.html","./html/about-us.html"];
    var ctrls = ["medalCtrl","goodIdeaCtrl","logCtrl","aboutUsCtrl"];

    this.setIndex = function(_index){
        var index = _index;
    }

    this.getIndex = function(){
        return _index;
    }

    this.getCurPage = function(){
        return pages[index];
    }

    this.getCurCtrl = function(){
        return ctrls[index];
    }

    this.init = function(){
        path = $location.path();

        for(var i in routers){
            if(path.indexOf(routers[i])>=0){
                index = Number(i);
            }else{
                index = null;
            }
        }
    }
}])

var sv = angular.module("index_sv",[]);

sv.service("Index",["$location", function($location){
    var path;
    var index;
    var routers = ["medal","goodIdea","log","aboutUs"];
    var pages = ["./html/medal.html","./html/good-idea.html","./html/log.html","./html/about-us.html"];
    var ctrls = ["medalCtrl","goodIdeaCtrl","logCtrl","aboutUsCtrl"];

    this.setIndex = function(_index){
        var index = _index;
    }

    this.getIndex = function(){
        return _index;
    }

    this.getCurPage = function(){
        return pages[index];
    }

    this.getCurCtrl = function(){
        return ctrls[index];
    }

    this.init = function(){
        path = $location.path();

        for(var i in routers){
            if(path.indexOf(routers[i])>=0){
                index = Number(i);
            }else{
                index = null;
            }
        }
    }
}])

var sv = angular.module("index_sv",[]);

sv.service("Index",["$location", function($location){
    var path;
    var index;
    var routers = ["medal","goodIdea","log","aboutUs"];
    var pages = ["./html/medal.html","./html/good-idea.html","./html/log.html","./html/about-us.html"];
    var ctrls = ["medalCtrl","goodIdeaCtrl","logCtrl","aboutUsCtrl"];

    this.setIndex = function(_index){
        var index = _index;
    }

    this.getIndex = function(){
        return _index;
    }

    this.getCurPage = function(){
        return pages[index];
    }

    this.getCurCtrl = function(){
        return ctrls[index];
    }

    this.init = function(){
        path = $location.path();

        for(var i in routers){
            if(path.indexOf(routers[i])>=0){
                index = Number(i);
            }else{
                index = null;
            }
        }
    }
}])

var sv = angular.module("index_sv",[]);

sv.service("Index",["$location", function($location){
    var path;
    var index;
    var routers = ["medal","goodIdea","log","aboutUs"];
    var pages = ["./html/medal.html","./html/good-idea.html","./html/log.html","./html/about-us.html"];
    var ctrls = ["medalCtrl","goodIdeaCtrl","logCtrl","aboutUsCtrl"];

    this.setIndex = function(_index){
        var index = _index;
    }

    this.getIndex = function(){
        return _index;
    }

    this.getCurPage = function(){
        return pages[index];
    }

    this.getCurCtrl = function(){
        return ctrls[index];
    }

    this.init = function(){
        path = $location.path();

        for(var i in routers){
            if(path.indexOf(routers[i])>=0){
                index = Number(i);
            }else{
                index = null;
            }
        }
    }
}])

var sv = angular.module("index_sv",[]);

sv.service("Index",["$location", function($location){
    var path;
    var index;
    var routers = ["medal","goodIdea","log","aboutUs"];
    var pages = ["./html/medal.html","./html/good-idea.html","./html/log.html","./html/about-us.html"];
    var ctrls = ["medalCtrl","goodIdeaCtrl","logCtrl","aboutUsCtrl"];

    this.setIndex = function(_index){
        var index = _index;
    }

    this.getIndex = function(){
        return _index;
    }

    this.getCurPage = function(){
        return pages[index];
    }

    this.getCurCtrl = function(){
        return ctrls[index];
    }

    this.init = function(){
        path = $location.path();

        for(var i in routers){
            if(path.indexOf(routers[i])>=0){
                index = Number(i);
            }else{
                index = null;
            }
        }
    }
}])

var sv = angular.module("index_sv",[]);

sv.service("Index",["$location", function($location){
    var path;
    var index;
    var routers = ["medal","goodIdea","log","aboutUs"];
    var pages = ["./html/medal.html","./html/good-idea.html","./html/log.html","./html/about-us.html"];
    var ctrls = ["medalCtrl","goodIdeaCtrl","logCtrl","aboutUsCtrl"];

    this.setIndex = function(_index){
        var index = _index;
    }

    this.getIndex = function(){
        return _index;
    }

    this.getCurPage = function(){
        return pages[index];
    }

    this.getCurCtrl = function(){
        return ctrls[index];
    }

    this.init = function(){
        path = $location.path();

        for(var i in routers){
            if(path.indexOf(routers[i])>=0){
                index = Number(i);
            }else{
                index = null;
            }
        }
    }
}])

var sv = angular.module("index_sv",[]);

sv.service("Index",["$location", function($location){
    var path;
    var index;
    var routers = ["medal","goodIdea","log","aboutUs"];
    var pages = ["./html/medal.html","./html/good-idea.html","./html/log.html","./html/about-us.html"];
    var ctrls = ["medalCtrl","goodIdeaCtrl","logCtrl","aboutUsCtrl"];

    this.setIndex = function(_index){
        var index = _index;
    }

    this.getIndex = function(){
        return _index;
    }

    this.getCurPage = function(){
        return pages[index];
    }

    this.getCurCtrl = function(){
        return ctrls[index];
    }

    this.init = function(){
        path = $location.path();

        for(var i in routers){
            if(path.indexOf(routers[i])>=0){
                index = Number(i);
            }else{
                index = null;
            }
        }
    }
}])

var sv = angular.module("index_sv",[]);

sv.service("Index",["$location", function($location){
    var path;
    var index;
    var routers = ["medal","goodIdea","log","aboutUs"];
    var pages = ["./html/medal.html","./html/good-idea.html","./html/log.html","./html/about-us.html"];
    var ctrls = ["medalCtrl","goodIdeaCtrl","logCtrl","aboutUsCtrl"];

    this.setIndex = function(_index){
        var index = _index;
    }

    this.getIndex = function(){
        return _index;
    }

    this.getCurPage = function(){
        return pages[index];
    }

    this.getCurCtrl = function(){
        return ctrls[index];
    }

    this.init = function(){
        path = $location.path();

        for(var i in routers){
            if(path.indexOf(routers[i])>=0){
                index = Number(i);
            }else{
                index = null;
            }
        }
    }
}])

var sv = angular.module("index_sv",[]);

sv.service("Index",["$location", function($location){
    var path;
    var index;
    var routers = ["medal","goodIdea","log","aboutUs"];
    var pages = ["./html/medal.html","./html/good-idea.html","./html/log.html","./html/about-us.html"];
    var ctrls = ["medalCtrl","goodIdeaCtrl","logCtrl","aboutUsCtrl"];

    this.setIndex = function(_index){
        var index = _index;
    }

    this.getIndex = function(){
        return _index;
    }

    this.getCurPage = function(){
        return pages[index];
    }

    this.getCurCtrl = function(){
        return ctrls[index];
    }

    this.init = function(){
        path = $location.path();

        for(var i in routers){
            if(path.indexOf(routers[i])>=0){
                index = Number(i);
            }else{
                index = null;
            }
        }
    }
}])

var sv = angular.module("index_sv",[]);

sv.service("Index",["$location", function($location){
    var path;
    var index;
    var routers = ["medal","goodIdea","log","aboutUs"];
    var pages = ["./html/medal.html","./html/good-idea.html","./html/log.html","./html/about-us.html"];
    var ctrls = ["medalCtrl","goodIdeaCtrl","logCtrl","aboutUsCtrl"];

    this.setIndex = function(_index){
        var index = _index;
    }

    this.getIndex = function(){
        return _index;
    }

    this.getCurPage = function(){
        return pages[index];
    }

    this.getCurCtrl = function(){
        return ctrls[index];
    }

    this.init = function(){
        path = $location.path();

        for(var i in routers){
            if(path.indexOf(routers[i])>=0){
                index = Number(i);
            }else{
                index = null;
            }
        }
    }
}])

var sv = angular.module("index_sv",[]);

sv.service("Index",["$location", function($location){
    var path;
    var index;
    var routers = ["medal","goodIdea","log","aboutUs"];
    var pages = ["./html/medal.html","./html/good-idea.html","./html/log.html","./html/about-us.html"];
    var ctrls = ["medalCtrl","goodIdeaCtrl","logCtrl","aboutUsCtrl"];

    this.setIndex = function(_index){
        var index = _index;
    }

    this.getIndex = function(){
        return _index;
    }

    this.getCurPage = function(){
        return pages[index];
    }

    this.getCurCtrl = function(){
        return ctrls[index];
    }

    this.init = function(){
        path = $location.path();

        for(var i in routers){
            if(path.indexOf(routers[i])>=0){
                index = Number(i);
            }else{
                index = null;
            }
        }
    }
}])

var sv = angular.module("index_sv",[]);

sv.service("Index",["$location", function($location){
    var path;
    var index;
    var routers = ["medal","goodIdea","log","aboutUs"];
    var pages = ["./html/medal.html","./html/good-idea.html","./html/log.html","./html/about-us.html"];
    var ctrls = ["medalCtrl","goodIdeaCtrl","logCtrl","aboutUsCtrl"];

    this.setIndex = function(_index){
        var index = _index;
    }

    this.getIndex = function(){
        return _index;
    }

    this.getCurPage = function(){
        return pages[index];
    }

    this.getCurCtrl = function(){
        return ctrls[index];
    }

    this.init = function(){
        path = $location.path();

        for(var i in routers){
            if(path.indexOf(routers[i])>=0){
                index = Number(i);
            }else{
                index = null;
            }
        }
    }
}])

var sv = angular.module("index_sv",[]);

sv.service("Index",["$location", function($location){
    var path;
    var index;
    var routers = ["medal","goodIdea","log","aboutUs"];
    var pages = ["./html/medal.html","./html/good-idea.html","./html/log.html","./html/about-us.html"];
    var ctrls = ["medalCtrl","goodIdeaCtrl","logCtrl","aboutUsCtrl"];

    this.setIndex = function(_index){
        var index = _index;
    }

    this.getIndex = function(){
        return _index;
    }

    this.getCurPage = function(){
        return pages[index];
    }

    this.getCurCtrl = function(){
        return ctrls[index];
    }

    this.init = function(){
        path = $location.path();

        for(var i in routers){
            if(path.indexOf(routers[i])>=0){
                index = Number(i);
            }else{
                index = null;
            }
        }
    }
}])

var sv = angular.module("index_sv",[]);

sv.service("Index",["$location", function($location){
    var path;
    var index;
    var routers = ["medal","goodIdea","log","aboutUs"];
    var pages = ["./html/medal.html","./html/good-idea.html","./html/log.html","./html/about-us.html"];
    var ctrls = ["medalCtrl","goodIdeaCtrl","logCtrl","aboutUsCtrl"];

    this.setIndex = function(_index){
        var index = _index;
    }

    this.getIndex = function(){
        return _index;
    }

    this.getCurPage = function(){
        return pages[index];
    }

    this.getCurCtrl = function(){
        return ctrls[index];
    }

    this.init = function(){
        path = $location.path();

        for(var i in routers){
            if(path.indexOf(routers[i])>=0){
                index = Number(i);
            }else{
                index = null;
            }
        }
    }
}])

var sv = angular.module("index_sv",[]);

sv.service("Index",["$location", function($location){
    var path;
    var index;
    var routers = ["medal","goodIdea","log","aboutUs"];
    var pages = ["./html/medal.html","./html/good-idea.html","./html/log.html","./html/about-us.html"];
    var ctrls = ["medalCtrl","goodIdeaCtrl","logCtrl","aboutUsCtrl"];

    this.setIndex = function(_index){
        var index = _index;
    }

    this.getIndex = function(){
        return _index;
    }

    this.getCurPage = function(){
        return pages[index];
    }

    this.getCurCtrl = function(){
        return ctrls[index];
    }

    this.init = function(){
        path = $location.path();

        for(var i in routers){
            if(path.indexOf(routers[i])>=0){
                index = Number(i);
            }else{
                index = null;
            }
        }
    }
}])

var sv = angular.module("index_sv",[]);

sv.service("Index",["$location", function($location){
    var path;
    var index;
    var routers = ["medal","goodIdea","log","aboutUs"];
    var pages = ["./html/medal.html","./html/good-idea.html","./html/log.html","./html/about-us.html"];
    var ctrls = ["medalCtrl","goodIdeaCtrl","logCtrl","aboutUsCtrl"];

    this.setIndex = function(_index){
        var index = _index;
    }

    this.getIndex = function(){
        return _index;
    }

    this.getCurPage = function(){
        return pages[index];
    }

    this.getCurCtrl = function(){
        return ctrls[index];
    }

    this.init = function(){
        path = $location.path();

        for(var i in routers){
            if(path.indexOf(routers[i])>=0){
                index = Number(i);
            }else{
                index = null;
            }
        }
    }
}])

var sv = angular.module("index_sv",[]);

sv.service("Index",["$location", function($location){
    var path;
    var index;
    var routers = ["medal","goodIdea","log","aboutUs"];
    var pages = ["./html/medal.html","./html/good-idea.html","./html/log.html","./html/about-us.html"];
    var ctrls = ["medalCtrl","goodIdeaCtrl","logCtrl","aboutUsCtrl"];

    this.setIndex = function(_index){
        var index = _index;
    }

    this.getIndex = function(){
        return _index;
    }

    this.getCurPage = function(){
        return pages[index];
    }

    this.getCurCtrl = function(){
        return ctrls[index];
    }

    this.init = function(){
        path = $location.path();

        for(var i in routers){
            if(path.indexOf(routers[i])>=0){
                index = Number(i);
            }else{
                index = null;
            }
        }
    }
}])

var sv = angular.module("index_sv",[]);

sv.service("Index",["$location", function($location){
    var path;
    var index;
    var routers = ["medal","goodIdea","log","aboutUs"];
    var pages = ["./html/medal.html","./html/good-idea.html","./html/log.html","./html/about-us.html"];
    var ctrls = ["medalCtrl","goodIdeaCtrl","logCtrl","aboutUsCtrl"];

    this.setIndex = function(_index){
        var index = _index;
    }

    this.getIndex = function(){
        return _index;
    }

    this.getCurPage = function(){
        return pages[index];
    }

    this.getCurCtrl = function(){
        return ctrls[index];
    }

    this.init = function(){
        path = $location.path();

        for(var i in routers){
            if(path.indexOf(routers[i])>=0){
                index = Number(i);
            }else{
                index = null;
            }
        }
    }
}])

var sv = angular.module("index_sv",[]);

sv.service("Index",["$location", function($location){
    var path;
    var index;
    var routers = ["medal","goodIdea","log","aboutUs"];
    var pages = ["./html/medal.html","./html/good-idea.html","./html/log.html","./html/about-us.html"];
    var ctrls = ["medalCtrl","goodIdeaCtrl","logCtrl","aboutUsCtrl"];

    this.setIndex = function(_index){
        var index = _index;
    }

    this.getIndex = function(){
        return _index;
    }

    this.getCurPage = function(){
        return pages[index];
    }

    this.getCurCtrl = function(){
        return ctrls[index];
    }

    this.init = function(){
        path = $location.path();

        for(var i in routers){
            if(path.indexOf(routers[i])>=0){
                index = Number(i);
            }else{
                index = null;
            }
        }
    }
}])

var sv = angular.module("index_sv",[]);

sv.service("Index",["$location", function($location){
    var path;
    var index;
    var routers = ["medal","goodIdea","log","aboutUs"];
    var pages = ["./html/medal.html","./html/good-idea.html","./html/log.html","./html/about-us.html"];
    var ctrls = ["medalCtrl","goodIdeaCtrl","logCtrl","aboutUsCtrl"];

    this.setIndex = function(_index){
        var index = _index;
    }

    this.getIndex = function(){
        return _index;
    }

    this.getCurPage = function(){
        return pages[index];
    }

    this.getCurCtrl = function(){
        return ctrls[index];
    }

    this.init = function(){
        path = $location.path();

        for(var i in routers){
            if(path.indexOf(routers[i])>=0){
                index = Number(i);
            }else{
                index = null;
            }
        }
    }
}])

var sv = angular.module("index_sv",[]);

sv.service("Index",["$location", function($location){
    var path;
    var index;
    var routers = ["medal","goodIdea","log","aboutUs"];
    var pages = ["./html/medal.html","./html/good-idea.html","./html/log.html","./html/about-us.html"];
    var ctrls = ["medalCtrl","goodIdeaCtrl","logCtrl","aboutUsCtrl"];

    this.setIndex = function(_index){
        var index = _index;
    }

    this.getIndex = function(){
        return _index;
    }

    this.getCurPage = function(){
        return pages[index];
    }

    this.getCurCtrl = function(){
        return ctrls[index];
    }

    this.init = function(){
        path = $location.path();

        for(var i in routers){
            if(path.indexOf(routers[i])>=0){
                index = Number(i);
            }else{
                index = null;
            }
        }
    }
}])

var sv = angular.module("index_sv",[]);

sv.service("Index",["$location", function($location){
    var path;
    var index;
    var routers = ["medal","goodIdea","log","aboutUs"];
    var pages = ["./html/medal.html","./html/good-idea.html","./html/log.html","./html/about-us.html"];
    var ctrls = ["medalCtrl","goodIdeaCtrl","logCtrl","aboutUsCtrl"];

    this.setIndex = function(_index){
        var index = _index;
    }

    this.getIndex = function(){
        return _index;
    }

    this.getCurPage = function(){
        return pages[index];
    }

    this.getCurCtrl = function(){
        return ctrls[index];
    }

    this.init = function(){
        path = $location.path();

        for(var i in routers){
            if(path.indexOf(routers[i])>=0){
                index = Number(i);
            }else{
                index = null;
            }
        }
    }
}])

var sv = angular.module("index_sv",[]);

sv.service("Index",["$location", function($location){
    var path;
    var index;
    var routers = ["medal","goodIdea","log","aboutUs"];
    var pages = ["./html/medal.html","./html/good-idea.html","./html/log.html","./html/about-us.html"];
    var ctrls = ["medalCtrl","goodIdeaCtrl","logCtrl","aboutUsCtrl"];

    this.setIndex = function(_index){
        var index = _index;
    }

    this.getIndex = function(){
        return _index;
    }

    this.getCurPage = function(){
        return pages[index];
    }

    this.getCurCtrl = function(){
        return ctrls[index];
    }

    this.init = function(){
        path = $location.path();

        for(var i in routers){
            if(path.indexOf(routers[i])>=0){
                index = Number(i);
            }else{
                index = null;
            }
        }
    }
}])

var sv = angular.module("index_sv",[]);

sv.service("Index",["$location", function($location){
    var path;
    var index;
    var routers = ["medal","goodIdea","log","aboutUs"];
    var pages = ["./html/medal.html","./html/good-idea.html","./html/log.html","./html/about-us.html"];
    var ctrls = ["medalCtrl","goodIdeaCtrl","logCtrl","aboutUsCtrl"];

    this.setIndex = function(_index){
        var index = _index;
    }

    this.getIndex = function(){
        return _index;
    }

    this.getCurPage = function(){
        return pages[index];
    }

    this.getCurCtrl = function(){
        return ctrls[index];
    }

    this.init = function(){
        path = $location.path();

        for(var i in routers){
            if(path.indexOf(routers[i])>=0){
                index = Number(i);
            }else{
                index = null;
            }
        }
    }
}])

var sv = angular.module("index_sv",[]);

sv.service("Index",["$location", function($location){
    var path;
    var index;
    var routers = ["medal","goodIdea","log","aboutUs"];
    var pages = ["./html/medal.html","./html/good-idea.html","./html/log.html","./html/about-us.html"];
    var ctrls = ["medalCtrl","goodIdeaCtrl","logCtrl","aboutUsCtrl"];

    this.setIndex = function(_index){
        var index = _index;
    }

    this.getIndex = function(){
        return _index;
    }

    this.getCurPage = function(){
        return pages[index];
    }

    this.getCurCtrl = function(){
        return ctrls[index];
    }

    this.init = function(){
        path = $location.path();

        for(var i in routers){
            if(path.indexOf(routers[i])>=0){
                index = Number(i);
            }else{
                index = null;
            }
        }
    }
}])

var sv = angular.module("index_sv",[]);

sv.service("Index",["$location", function($location){
    var path;
    var index;
    var routers = ["medal","goodIdea","log","aboutUs"];
    var pages = ["./html/medal.html","./html/good-idea.html","./html/log.html","./html/about-us.html"];
    var ctrls = ["medalCtrl","goodIdeaCtrl","logCtrl","aboutUsCtrl"];

    this.setIndex = function(_index){
        var index = _index;
    }

    this.getIndex = function(){
        return _index;
    }

    this.getCurPage = function(){
        return pages[index];
    }

    this.getCurCtrl = function(){
        return ctrls[index];
    }

    this.init = function(){
        path = $location.path();

        for(var i in routers){
            if(path.indexOf(routers[i])>=0){
                index = Number(i);
            }else{
                index = null;
            }
        }
    }
}])

var sv = angular.module("index_sv",[]);

sv.service("Index",["$location", function($location){
    var path;
    var index;
    var routers = ["medal","goodIdea","log","aboutUs"];
    var pages = ["./html/medal.html","./html/good-idea.html","./html/log.html","./html/about-us.html"];
    var ctrls = ["medalCtrl","goodIdeaCtrl","logCtrl","aboutUsCtrl"];

    this.setIndex = function(_index){
        var index = _index;
    }

    this.getIndex = function(){
        return _index;
    }

    this.getCurPage = function(){
        return pages[index];
    }

    this.getCurCtrl = function(){
        return ctrls[index];
    }

    this.init = function(){
        path = $location.path();

        for(var i in routers){
            if(path.indexOf(routers[i])>=0){
                index = Number(i);
            }else{
                index = null;
            }
        }
    }
}])

var sv = angular.module("index_sv",[]);

sv.service("Index",["$location", function($location){
    var path;
    var index;
    var routers = ["medal","goodIdea","log","aboutUs"];
    var pages = ["./html/medal.html","./html/good-idea.html","./html/log.html","./html/about-us.html"];
    var ctrls = ["medalCtrl","goodIdeaCtrl","logCtrl","aboutUsCtrl"];

    this.setIndex = function(_index){
        var index = _index;
    }

    this.getIndex = function(){
        return _index;
    }

    this.getCurPage = function(){
        return pages[index];
    }

    this.getCurCtrl = function(){
        return ctrls[index];
    }

    this.init = function(){
        path = $location.path();

        for(var i in routers){
            if(path.indexOf(routers[i])>=0){
                index = Number(i);
            }else{
                index = null;
            }
        }
    }
}])

var sv = angular.module("index_sv",[]);

sv.service("Index",["$location", function($location){
    var path;
    var index;
    var routers = ["medal","goodIdea","log","aboutUs"];
    var pages = ["./html/medal.html","./html/good-idea.html","./html/log.html","./html/about-us.html"];
    var ctrls = ["medalCtrl","goodIdeaCtrl","logCtrl","aboutUsCtrl"];

    this.setIndex = function(_index){
        var index = _index;
    }

    this.getIndex = function(){
        return _index;
    }

    this.getCurPage = function(){
        return pages[index];
    }

    this.getCurCtrl = function(){
        return ctrls[index];
    }

    this.init = function(){
        path = $location.path();

        for(var i in routers){
            if(path.indexOf(routers[i])>=0){
                index = Number(i);
            }else{
                index = null;
            }
        }
    }
}])

var sv = angular.module("index_sv",[]);

sv.service("Index",["$location", function($location){
    var path;
    var index;
    var routers = ["medal","goodIdea","log","aboutUs"];
    var pages = ["./html/medal.html","./html/good-idea.html","./html/log.html","./html/about-us.html"];
    var ctrls = ["medalCtrl","goodIdeaCtrl","logCtrl","aboutUsCtrl"];

    this.setIndex = function(_index){
        var index = _index;
    }

    this.getIndex = function(){
        return _index;
    }

    this.getCurPage = function(){
        return pages[index];
    }

    this.getCurCtrl = function(){
        return ctrls[index];
    }

    this.init = function(){
        path = $location.path();

        for(var i in routers){
            if(path.indexOf(routers[i])>=0){
                index = Number(i);
            }else{
                index = null;
            }
        }
    }
}])

var sv = angular.module("index_sv",[]);

sv.service("Index",["$location", function($location){
    var path;
    var index;
    var routers = ["medal","goodIdea","log","aboutUs"];
    var pages = ["./html/medal.html","./html/good-idea.html","./html/log.html","./html/about-us.html"];
    var ctrls = ["medalCtrl","goodIdeaCtrl","logCtrl","aboutUsCtrl"];

    this.setIndex = function(_index){
        var index = _index;
    }

    this.getIndex = function(){
        return _index;
    }

    this.getCurPage = function(){
        return pages[index];
    }

    this.getCurCtrl = function(){
        return ctrls[index];
    }

    this.init = function(){
        path = $location.path();

        for(var i in routers){
            if(path.indexOf(routers[i])>=0){
                index = Number(i);
            }else{
                index = null;
            }
        }
    }
}])

var sv = angular.module("index_sv",[]);

sv.service("Index",["$location", function($location){
    var path;
    var index;
    var routers = ["medal","goodIdea","log","aboutUs"];
    var pages = ["./html/medal.html","./html/good-idea.html","./html/log.html","./html/about-us.html"];
    var ctrls = ["medalCtrl","goodIdeaCtrl","logCtrl","aboutUsCtrl"];

    this.setIndex = function(_index){
        var index = _index;
    }

    this.getIndex = function(){
        return _index;
    }

    this.getCurPage = function(){
        return pages[index];
    }

    this.getCurCtrl = function(){
        return ctrls[index];
    }

    this.init = function(){
        path = $location.path();

        for(var i in routers){
            if(path.indexOf(routers[i])>=0){
                index = Number(i);
            }else{
                index = null;
            }
        }
    }
}])

var sv = angular.module("index_sv",[]);

sv.service("Index",["$location", function($location){
    var path;
    var index;
    var routers = ["medal","goodIdea","log","aboutUs"];
    var pages = ["./html/medal.html","./html/good-idea.html","./html/log.html","./html/about-us.html"];
    var ctrls = ["medalCtrl","goodIdeaCtrl","logCtrl","aboutUsCtrl"];

    this.setIndex = function(_index){
        var index = _index;
    }

    this.getIndex = function(){
        return _index;
    }

    this.getCurPage = function(){
        return pages[index];
    }

    this.getCurCtrl = function(){
        return ctrls[index];
    }

    this.init = function(){
        path = $location.path();

        for(var i in routers){
            if(path.indexOf(routers[i])>=0){
                index = Number(i);
            }else{
                index = null;
            }
        }
    }
}])

var sv = angular.module("index_sv",[]);

sv.service("Index",["$location", function($location){
    var path;
    var index;
    var routers = ["medal","goodIdea","log","aboutUs"];
    var pages = ["./html/medal.html","./html/good-idea.html","./html/log.html","./html/about-us.html"];
    var ctrls = ["medalCtrl","goodIdeaCtrl","logCtrl","aboutUsCtrl"];

    this.setIndex = function(_index){
        var index = _index;
    }

    this.getIndex = function(){
        return _index;
    }

    this.getCurPage = function(){
        return pages[index];
    }

    this.getCurCtrl = function(){
        return ctrls[index];
    }

    this.init = function(){
        path = $location.path();

        for(var i in routers){
            if(path.indexOf(routers[i])>=0){
                index = Number(i);
            }else{
                index = null;
            }
        }
    }
}])

var sv = angular.module("index_sv",[]);

sv.service("Index",["$location", function($location){
    var path;
    var index;
    var routers = ["medal","goodIdea","log","aboutUs"];
    var pages = ["./html/medal.html","./html/good-idea.html","./html/log.html","./html/about-us.html"];
    var ctrls = ["medalCtrl","goodIdeaCtrl","logCtrl","aboutUsCtrl"];

    this.setIndex = function(_index){
        var index = _index;
    }

    this.getIndex = function(){
        return _index;
    }

    this.getCurPage = function(){
        return pages[index];
    }

    this.getCurCtrl = function(){
        return ctrls[index];
    }

    this.init = function(){
        path = $location.path();

        for(var i in routers){
            if(path.indexOf(routers[i])>=0){
                index = Number(i);
            }else{
                index = null;
            }
        }
    }
}])

var sv = angular.module("index_sv",[]);

sv.service("Index",["$location", function($location){
    var path;
    var index;
    var routers = ["medal","goodIdea","log","aboutUs"];
    var pages = ["./html/medal.html","./html/good-idea.html","./html/log.html","./html/about-us.html"];
    var ctrls = ["medalCtrl","goodIdeaCtrl","logCtrl","aboutUsCtrl"];

    this.setIndex = function(_index){
        var index = _index;
    }

    this.getIndex = function(){
        return _index;
    }

    this.getCurPage = function(){
        return pages[index];
    }

    this.getCurCtrl = function(){
        return ctrls[index];
    }

    this.init = function(){
        path = $location.path();

        for(var i in routers){
            if(path.indexOf(routers[i])>=0){
                index = Number(i);
            }else{
                index = null;
            }
        }
    }
}])
