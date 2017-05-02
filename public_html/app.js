var myApp = angular.module('myApp', ['ui.router', 'ui.bootstrap']);
        myApp.config(function($locationProvider, $stateProvider) {
        $locationProvider.html5Mode(true)
        
var profileState = {
    name: 'profile',
    url: '/profile',
    templateUrl: 'views/profile.html'
    }
    $stateProvider.state(profileState);
  
var editEntryState = {
    name: 'editEntry',
    url: '/editEntry',
    templateUrl: 'views/editEntry.html'
    }
    $stateProvider.state(editEntryState);
            
var entryListState = {
    name: 'entryList',
    url: '/entryList',
    templateUrl: 'views/entryList.html'
    }
    $stateProvider.state(entryListState);        
    
var homeState = {
    name: 'home',
    url: '/home',
    templateUrl: 'views/home.html'
    }
    $stateProvider.state(homeState);            
    
var labelsState = {
    name: 'labels',
    url: '/labels',
    templateUrl: 'views/labels.html'
    }
    $stateProvider.state(labelsState);
            
    });
    
    
    // button controller 
myApp.controller('buttonCtrl', function ($scope, $uibModal, $attrs) {
        
        console.dir($attrs);

        $scope.openModal = function(){
            $uibModal.open({
                templateUrl:'modalContent.html',      //modalContent.html file to spice up the modal
                backdrop: $attrs.backdrop === "true"})
        }
        $scope.setMyMessage = function(){
            $scope.myMessage = timeService.currentTime()
        }
    })
    
////myApp.factory("myMessage", function(){
////    return "Hello!";
//})
// add my message as dependancy on .controller to use


//myApp.service("timeService", function Time(){
//    this.currentTime = function(){
//        return (new Date()).toString()
//    }
//})
    
    
