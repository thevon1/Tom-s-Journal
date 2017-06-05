//function dog(){
//    var a=5;
//    this.a=5;
////    console.log(a)
////    console.log(this)
//}
//dog();
//new dog();
//var a=1;
//var b=4;
////console.log(window.a,b);
//function foo(){}
////console.log(foo)
//var foo= function foo(){};
////console.log(foo)
////console.log()
//
//function logFoo(){
//        console.log(this.foo);
//        return "Return Value";
//    }
//var myObject = {
//    foo:"foo property",
//    logFoo: logFoo
//    
//};
//
//console.log(myObject.logFoo());
//debugger;
//   var object2 = {
//       foo:"object2foo",
//       logFoo:logFoo
//   };
//   
//   console.log(object2.logFoo())
//   
//   console.log(logFoo())
//   
//   console.log(new logFoo())
//   
//   console.log(new object2.logFoo())


//var myArray = [];

//var quo = function(status){
//    return{
//        get_status: function() {
//            return status;
//        }
//    };
//};
//
//var myQuo = quo("amazed");
//console.log(myQuo.get_status());





// https://docs.google.com/spreadsheets/d/1dCYFLF6UeWr_o2kixCTpKtUR6jMuAzJXsvzYdep3w78/edit#gid=0

//this skips by 5
//var i;
//var count = 5;
//    for (i = 0; i <= 1000; i++){
//        console.log(i+=count)
//    }
//    
//    
////this counts 1-1000                                                        #1
//var i;
//
//    for (i = 0; i <= 1000; i++){
//        console.log(i)
//    }
//    
//   
//    
//    
////this is a function that for loops                                         #2
//function count(){
//    
//    for (var i = 0; i <= 1000; i++){
//    console.log(i)
//    }
//}



//// this function adds the numbers in the array and returns the total        #3
//var numbers = [1,2,3,4,5,6,7,8,9,10];
//
//function sumArray(numbers){
//    var i;
//    var total = 0;
//    
//    for (i = 0; i < numbers.length; i++){
//        total = total + numbers[i];
//    }
//    
//     return total;
//}
//



//this takes the duplicates out of the array                                  #4
//type uniqueValues to work
//
//    var duplicates = [1,1,1,1,1,2,2,2,3,3,3,4,4,4,5,5,5];
//
//    var unique = function uniqueValues(duplicates){
//    var result = [];
//    
//        for (var i = 0; i < duplicates.length; i++){
//            if (result.indexOf(duplicates[i]) == -1){
//                result.push(duplicates[i]);
//            }
//            
//        }
//        
//        return result;
//};
//
//    var uniqueValues = unique(duplicates);
//    
//    console.log('The Original numbs ' + duplicates)
//    console.log('The unique Values ' + uniqueValues)







//Write a function that takes 2 parameters.  Both parameters are objects.     #5
//The function should copy all the properties 
//from the 1st parameter to the 2nd parameter.
//
//var obj1 = {};
//var obj2 = {};
//var car = {
//    class: "vehicle",
//    tires: 4,
//    doors: 4,
//    backend: "tailgate",
//    };
//var suv = {
//    none: "no properties",
//};
//
//
//Object.keys(car)                        //returns array of property names
//var properties = Object.keys(car);
//
//for (i = 0; i < properties.length; i++){
//    var copyProp = console.log(properties[i])
//};
//
//
//function clone(obj1, obj2){                      // uses 'hasOwnProperty'
//   
//    for (var properties in obj1) {
//        if (obj1.hasOwnProperty(properties)){
//            obj2[properties] = obj1[properties];
//        }
//    }
//    
//};
//
//function cloning(obj, source){                  // uses Object.keys
//    Object.keys(source).forEach(function(prop){
//        obj[prop] = source[prop];
//    });
//
//}






// Write a function that prevents these Errors from being thrown:       #6
// 
// 
// 
//function isNull(a) {
//  return a === null;
//    };
//
//if (isNull({}) !== true) throw new Error("isNull({}) didn't return true");
//if (isNull(null) !== false) throw new Error("isNull(null) didn't return false");
//if (isNull(5) !== false) throw new Error("isNull(5) didn't return false");





// Write a function named isObject.  The function has one parameter named obj1.  #7
// The function should return boolean true if obj1 is an object.  
// It should return false otherwise.  It should also return false if obj1 is null.
//
//
// var obj1 = {};
// var obj2 = "ding ding";
// var obj3 = 5;
// var x = null;
//
// function isObject(object){

//
//    if(object === null){
//        return false;
//        }
//    else if (typeof object === 'object'){
//        return true;
//        }
//    else{
//        return false;
//        }
//    };    
    
// This is a condensed form of the if/else above. Leave for reference
// 
//    return object !== null && typeof object === 'object';
//   }
//    
//    
// if (isObject({}) !== true) throw new Error("isObject({}) didn't return true");
// if (isObject(null) !== false) throw new Error("isObject(null) didn't return false");
// if (isObject(5) !== false) throw new Error("isObject(5) didn't return false");    
    










//Write a function named showProperties.                                     #8
//The function has one parameter named obj1.  
//The function should log each property to the console one by one.


//var object = {
//        name: 'ball',
//        age:  '3 years',
//        location: 'NY'
//};
//
//var object2 = {
//        name: 'bat',
//        age:  '5 years',
//        location: 'Louisville, KY'
//};
//
//function showProperties(obj1){
//    var properties = Object.keys(object)
//    
//    for (i = 0; i < properties.length; i++){
//        console.log('Property: ' + properties[i]);
//    };
//    return properties;
//    
//};
//
//function showValues(obj1){
//    var values = Object.values(object)
//    
//    for (i = 0; i < values.length; i++){
//        console.log('Values: ' + values[i]);
//    }
//    return values;
//}
//
//var printProperty = showProperties(object);    //prints properties
//var printPvalue   = showValues(object);        //prints values






//Create a bicycle object.                                                    #9
//Give it properties and methods that you would expect to find on a bicycle.    
//    Some example properties may be: maxSpeed, color etc.  
//    Some example methods may be: paint(color) to set the color etc.
//    
//    
//    bike = {
//        purchased: 2014,
//        currentYr: function(){
//            var myDate = new Date();
//            var year = myDate.getYear();
//            var thisYear = 2134 - year;
//            return thisYear;
//        },
//        gears: 14,
//        chain: "steel",
//        year: 2013,
//        frameHeight: "26 inches",
//        color: "winter desert cameoflague",
//        warranty: function(){
//            if (this.year < 2015){
//                return "This bike has no warranty";
//            }
//            else{
//                return "This bike is still under warranty";
//            }
//        },
//        battery: null,
//        pegs: 4,
//        totalDistance: 1500,      // in miles
//        speed: function(){
//            if (this.gears > 13 && this.chain === "steel"){
//                return "This bike is hella fast son!";
//            }
//            
//            else {
//                return "She's too old for you bro"
//                }
//            
//            },
//        avgDistance: function(){
//            var months = (this.currentYr() - this.purchased) * 12;
//            var avg = this.totalDistance / months;
//            var avgFixed = avg.toFixed(2);
//            return "You bike on average of " + avgFixed + " miles per month";
//        }
//        };
        
        
        
        
        
        
//Write a function that prevents these Errors from being thrown:            #10

function isEqual(a, b){
//    if (a == b){
//        return true;
//    }
//    else {
//        return false;
//    }

return a==b;
}

if (!isEqual(5, 5)) throw new Error("isEqual(5, 5) was false!");
if (!isEqual('5', 5)) throw new Error("isEqual('5', 5) was false!");
if (!isEqual(5, '5')) throw new Error("isEqual(5, '5') was false!");




//Write a function that prevents these Errors from being thrown:      #11

//function isEqual(a, b){
////    if (a !== b){
////        return false;
////    }
////    else {
////        return true;
////    }
//    return a === b;
//}
//if (isEqual('5', 5)) throw new Error("isEqual('5', 5) was true!");
//if (isEqual(5, '5')) throw new Error("isEqual(5, '5') was true!");
//if (isEqual(6, 5)) throw new Error("isEqual(6, 5) was true!");
//if (!isEqual(5, 5)) throw new Error("isEqual(5, 5) was false!");


//
//function isObject(object){

//
//    if(object === null){
//        return false;
//        }
//    else if (typeof object === 'object'){
//        return true;
//        }
//    else{
//        return false;
//        }
//    };    
    
// This is a condensed form of the if/else above. Leave for reference
//
//    return object !== null && typeof object === 'object';
//   }





//Without modifying the following function, make it log 42:               #12
 
//function showAge() {
//  console.log(this.ASL());
//}
//
//var person1 = {          // creates a variable of person1, but its an object
//    age: 42,
//    location: "ya mom\'s house",
//    name: "Joe Lover",
//    sex: "yes please",
//    ASL: function(){
//        return "Hey females, my name is " + this.name +
//                ". I know you want it. My ASL is Age: " + this.age +
//                ", Sex: " + this.sex + ", Location: " + this.location + "."
//    }
//};
//
//showAge.call(person1)

//


//   Add a global variable to make the following code print "I'm here son!":    #13
//
//var message = "I\'m here son!";
//var message1 = " Let\'s roll!";
//function showVar() {
//  console.log(this.message + this.message1);
//}
//
//
//showVar();




//Iterate over the characters in a string and log each character to the console.   #14
//E.G.
//Given the string "dog", the following should appear in the console:
//
//d
//o
//g
//
//
//var animal = ["dog"];
//
//    for (var i = 0; i < animal.length; i++){
//        var word = animal[i];
//
//    }
//    for (var j = 0; j < word.length; j++){
//        console.log(word[j]);
//        
//    }





// Log the following object to the console as a JSON string:                  #15
//
//var data = {
//  elephants: [
//    {
//       name: 'sally',
//      temperment: 'mild'
//    }
//  ]
//};
//
//
//console.log(JSON.stringify(data))




//Convert the following JSON string to an object and print the value of the    #16
//temperment proeprty of the first elephant to the console:
//
// var jsonString = '{"elephants":[{"name":"maria","temperment":"mild"}, \n\
//                                {"name":"consuela","temperment":"hot"}, \n\
//                                {"name":"cholo","temperment":"spicy"}], \n\
//                    "turtles":[{"name":"leo","temperment":"funny"},\n\
//                               {"name":"mike","temperment":"leader"},\n\
//                                {"name":"raph","temperment":"fiesty"},\n\
//                                {"name":"don","temperment":"easy going"}]}';
//
//
//
//var animals = JSON.parse(jsonString)   // turns string to object
//
//
//animals.elephants // returns an array
//animals.elephants[0]  // returns first item in array, which happens to be an object
//animals.turtles[0].name   // returns "leo"
//animals.elephants[0].temperment



//Using window.XMLHttpRequest, retrieve the JSON at                            #17
//https://api.github.com/orgs/kogosoftwarellc/repos 
//and log the number of items in the topmost array to the console.
//
//In order for this to work, you must be viewing 
//https://api.github.com 
//in your browser tab when executing 
//your code in the dev tools javascript console.
//
//function requestListener(){
//     var file = JSON.parse(this.responseText);
//     console.log(file[0]);
//     
//    
//}
//
//var openRequest = new XMLHttpRequest();
//
//openRequest.addEventListener("load", requestListener);
//openRequest.open("GET", "https://api.github.com/orgs/kogosoftwarellc/repos");
//openRequest.send();



//Given an array of words, write a function that takes the array and           #18
//returns a summary object of the number of occurrences of each word 
//in said array.  e.g.
//
//
//
//var words = ['frown', 'gown', 'frown', 'fool', 'pool', 'pool', ' '];
//
//
//function getWordSummary(words){
//    var obj = {};
//    
//    for (var i = 0; i < words.length; i++){
//        var term = words[i];
//        obj[term] = (obj[term] || 0) + 1;
//        }
//        return obj;
//    };
//
//var wordSummary = getWordSummary(words);
//console.log(wordSummary.frown);
//// obj[term] = obj[term] ? obj[term]+1 : 1;    // ***
//
//
//





//// Function to change the content of t2                                   #19
//function modifyText() {
//  var t2 = document.getElementById("t2");
//  if (t2.firstChild.nodeValue == "three") {
//    t2.firstChild.nodeValue = "two";
//  } else {
//    t2.firstChild.nodeValue = "three";
//  }
//}
// 
//
//// add event listener to table
//var el = document.getElementById("outside");
//el.addEventListener("click", modifyText, true);
//
//
////  ** append / node  / add item to a list and add another element **
////
//function myFunction() {
//    var addElem = document.createElement("TD");
//    var itemToAdd = document.createTextNode(document.getElementById("myText").value);
//    addElem.appendChild(itemToAdd);
//    document.getElementById("outside").appendChild(addElem);
//}




//                                                                      #20
//function findNumbDays(){
//    var monthInputBox = document.getElementById("monthInputBox");
//    var userMonth = monthInputBox.value;
//    var feb = "There are 28 days in this month, unless it's a leap year";
//    var month30 =  "There are 30 days in this month.";
//    var month31 =  "There are 31 days in this month.";
//    var nope = "Please enter a month, fully spelled out, with a capital first letter";    
//    var messages = {
//      'January': month31,
//      'February': feb,
//      'March': month31,
//      'April': month30,
//      'May': month31,
//      'June': month30,
//      'July':month31,
//      'August':month31,
//      'September':month30,
//      'October':month31,
//      'November':month30,
//      'December':month31,
//    };
//       
//    var outputDiv = document.getElementById("outputDiv");
//    outputDiv.innerHTML = messages[userMonth] || nope;
//            
//    };
//    
//    
//    var test = document.getElementById("outputDiv");
//    
//    test.addEventListener("mouseenter", function(event){
//        event.target.style.color = "green";
//        
//        setTimeout(function(){
//            event.target.style.color="red";
//        }, 1000);
//    }, false);
       



//function createEmpProfile(firstName, lastName, gender, department){
//
//
//	this.firstName = firstName;
//        this.lastName = lastName;
//        this.gender = gender;
//        this.department = department;
//
//        };
//        
//        var salesRep1 = new createEmpProfile("Scott", "Foss", "?", "Towelette Folder")
//	
        
        
        
        
        
        
        
        
        
        
        
        
        
        