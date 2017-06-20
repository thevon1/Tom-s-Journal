var calcApp = angular.module('calcApp', []);

calcApp.controller('calcCtrl', function ($scope) {
    $scope.leftOperand = "";
    $scope.operator = "";
    $scope.rightOperand = "";
    $scope.answer = "";


    $scope.setOperand = function (operandEntered) {
        if ($scope.operator){
            $scope.rightOperand += operandEntered;
        }
        else {
            $scope.leftOperand += operandEntered;
        };
    };

    $scope.setOperator = function (operatorEntered) {
        $scope.operator = operatorEntered;
    };

    $scope.getAnswer = function () {
        var result = $scope.leftOperand + $scope.operator + $scope.rightOperand;
        var answer = parseFloat(eval(result).toFixed(2));
        $scope.leftOperand = answer;
        $scope.operator = "";
        $scope.rightOperand = "";
    };

    $scope.setClear = function (a) {
        $scope.leftOperand = "";
        $scope.operator = "";
        $scope.rightOperand = "";
        $scope.answer = "";
    };

    $scope.setDecimal = function (decimalEntered) {
        if ($scope.operator){    
            if ($scope.rightOperand.indexOf('.') === -1){
                $scope.rightOperand += '.';
                console.log($scope.rightOperand);
            }
        }
        
        else{ 
            if ($scope.leftOperand.indexOf('.') === -1){
                $scope.leftOperand += '.';
                console.log($scope.rightOperand);}
            }
            
        }

});
    var calcWindow1 = function openCalc() {
        var window1Properties = "width=261,height=432";
        window.open("/Tom-s-Journal/calculatorHTML.html", "calcWindow", window1Properties);
};





//calcApp.controller('buttonCtrl', function ($scope, $uibModal, $attrs) {
//
//        
//        console.dir($attrs);
//
//        $scope.openModal = function(){
//            $uibModal.open({
//                templateUrl:'calculatorTemplate.html',      //modalContent.html file to spice up the modal
//                backdrop: $attrs.backdrop === "true"});
//        };
//        $scope.openSecondModal = function(){
//            $uibModal.open({
//                templateUrl:'modalContent.html',      //modalContent.html file to spice up the modal
//                backdrop: $attrs.backdrop === "true",
//                size: "sm"});
//        };
//        $scope.modalButton = function(){
//            var uibModalInstance = $uibModal.open();
//        };
//        
//    }
//    
//);
