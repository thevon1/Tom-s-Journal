var calcApp = angular.module('calcApp', []);

calcApp.controller('calcCtrl', function ($scope) {
    $scope.leftOperand = null;
    $scope.operator = null;
    $scope.rightOperand = null;
    $scope.answer = null;


    $scope.setOperand = function (operandEntered) {

        if ($scope.leftOperand === null) {
            $scope.leftOperand = operandEntered;
        } else if ($scope.operator === null) {
            $scope.leftOperand = $scope.leftOperand + operandEntered;
        } else if ($scope.rightOperand === null) {
            $scope.rightOperand = operandEntered;
        } else if ($scope.answer === null) {
            $scope.rightOperand = $scope.rightOperand + operandEntered;
        }
    };

    $scope.setOperator = function (operatorEntered) {
        $scope.operator = operatorEntered;
    };

    $scope.getAnswer = function () {
        var result = $scope.leftOperand + $scope.operator + $scope.rightOperand;
        var answer = eval(result);
        if (answer % 2 !== 0){
            $scope.answer = answer.toFixed(3);
        }
        else {$scope.answer = answer;}
    };

    $scope.setClear = function (a) {
        $scope.clear = location.reload();
    };

});
