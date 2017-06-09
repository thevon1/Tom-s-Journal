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
        var answer = eval(result);

        $scope.leftOperand = answer;
        $scope.operator = "";
        $scope.rightOperand = "";
    };

    $scope.setClear = function (a) {
        $scope.clear = location.reload();
    };


});
    var windowProperties = "width=255,height=367,menubar=yes,location=no,resizable=no,scrollbars=no";
    var windowObjectReference = function openCalc() {
        window.open("/Tom-s-Journal/calculatorHTML.html", "calcWindow", windowProperties);
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
