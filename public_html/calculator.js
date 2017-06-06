var calcApp = angular.module('calcApp', []);

calcApp.controller('calcCtrl', function ($scope) {
    $scope.leftOperand = null;
    $scope.operator = null;
    $scope.rightOperand = null;
    $scope.answer = null;


    $scope.setOperand = function (operandEntered) {

        if ($scope.leftOperand === null) {
            $scope.leftOperand = operandEntered;
            console.log($scope.leftOperand);
        } else if ($scope.operator === null) {
            $scope.leftOperand = $scope.leftOperand + operandEntered;
            console.log($scope.leftOperand);
        } else if ($scope.rightOperand === null) {
            $scope.rightOperand = operandEntered;
            console.log($scope.rightOperand);
        } else if ($scope.answer === null) {
            $scope.rightOperand = $scope.rightOperand + operandEntered;
            console.log($scope.rightOperand);
        }
    };

    $scope.setOperator = function (operatorEntered) {
        $scope.operator = operatorEntered;
        console.log(operatorEntered);

    };

    $scope.getAnswer = function () {
        var result = $scope.leftOperand + $scope.operator + $scope.rightOperand;
        $scope.answer = eval(result);
        console.log($scope.answer);
    };

    $scope.setClear = function (a) {
        $scope.clear = location.reload();
    };

});
