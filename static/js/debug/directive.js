angular.module("form_dr",["ngMessages"])

.directive("loginForm",function(){
    return {
        templateUrl: "/html/form/login.html",
        restrict: 'AE',
        controller: ["$scope", "$element", "$attrs", function($scope,$element,$attrs){

        }]
    }
})
.directive("signInForm",function(){
    return {
        templateUrl: "/html/form/sign-in.html",
        restrict: 'AE',
        controller: ["$scope", "$element", "$attrs", function($scope,$element,$attrs){

        }]
    }
})
.directive("compareTo", function(){
    return {
        require: "ngModel",
        scope: {
            otherModelValue: "=compareTo"
        },
        link: function(scope, element, attributes, ngModel) {

            ngModel.$validators.compareTo = function(modelValue) {
                return modelValue == scope.otherModelValue;
            };

            scope.$watch("otherModelValue", function() {
                ngModel.$validate();
            });
        }
    };
})

