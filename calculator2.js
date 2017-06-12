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
        if ($scope.leftOperand === $scope.rightOperand){
            answer = 0;
        }
        else {var answer = eval(result);};

        $scope.leftOperand = answer;
        $scope.operator = "";
        $scope.rightOperand = "";
    };

    $scope.setClear = function (a) {
        $scope.clear = location.reload();
    };

    // $scope.deleteNumb = function(d){
    //     if(!$scope.operator){
    //         //delete most recent left operand
    //     }
    //     else{ //delete most recent right operand}

    //     }
    // };



});
    var window2Properties = "width=255,height=367,menubar=yes,location=no,resizable=yes,scrollbars=no";
    var calcWindow2 = function openCalc() {
        window.open("/Tom-s-Journal/calculator2HTML.html", "calcWindow", window2Properties);
};
