// TODO: ----------------------------DAY - 1 --------------------

// TODO: Javascript is a dynamically typed language
// we can output the variable or we can have access to variable before even the declaration. --> In javascript it won't throw me an error
// Not usage of semicolon wont throw me any error in Javascript.
// Js is a functional Language.


// // TODO: high level language         ---- 4   --> JS is high level language
// High-level programming languages are designed to be easy to read and write, abstracting away the complex details of the computer's hardware.
//      *) Python
//      *) java
//      *) c#
//      *) js  
//      *) ruby
//      *) php
//      *) c++
//      *) swift etc...C,

// // TODO: low level language          ---- 3
// // Low-level languages are types of programming languages that provide little or no abstraction from a computer's instruction set architecture. This means they are much closer to translating directly into machine code—the binary or hexadecimal instructions that a computer's central processing unit (CPU) is designed to execute. Here are key characteristics and implications of low-level languages:

// // TODO: assembly level language     ---- 2    --> most difficulty to write but have the max control and efficiency   (MASM, NASM, gas, as86, TASM, a86, Terse)
// // TODO: hardware                    ---- 1



// TODO:
// Internally JS is using the C++, js is the abstraction layer of C++

// 4 lines code in js ---> 40 lines of code in c++


// JavaScript --> Definition:-
// Js is a single threaded non blocking asynchronous concurrent language.


// TODO:
// Js ---> Data types 
// 1) Primitive Data types:
//      *) Boolean
//      *) BigInt        ---> not Important
//      *) Number
//      *) null
//      *) string
//      *) symbol        ---> not important
//      *) undefined

// 2) Non-primitive data types
//     *) arrays          []
//     *) object          {}
    
    
//     Date -----> Important but Initially, not require.
//     etc...,




// var myNum = 10;
// console.log(myNum);
// console.log(typeof myNum);


// var myStr = 'string';
// console.log(typeof (myStr));
/* 

var bool = true;
console.log(typeof (bool));


var arr = [];
var arr1 = [1, 2, 3, 45, 60];
console.log(typeof (arr));
console.log(typeof (arr1));


var obj = {};
console.log(typeof (obj));


var todayDate = Date();
console.log(todayDate);
console.log(typeof (todayDate));


var constStr = new String('str1');
console.log('this is my string', constStr);
console.log(typeof (constStr));


var constNum = new Number(10);
console.log('this is my number', constNum);
console.log(typeof (constNum));


var date2 = new Date();
console.log(date2);
console.log(typeof (date2));
 */


// -TODO: combining the data types. ie., primitive & non-primitive    

/* var dataType = '10' + 1 + 1 + 'a';
console.log(dataType);
console.log(typeof (dataType));


var num2 = 10 + 20 + 30 + 'a';
console.log(num2);
console.log(typeof (num2));


var operation = 'b' - 10;
console.log(operation);                 // NaN ---> Not a Number
console.log(typeof (operation));        // number   


var c = true - 10;
console.log(c);
console.log(typeof (c));


var d = false - 10;
console.log(d);
console.log(typeof (d));
 */


// TODO: ------------- Operator's -------------------------- TODO:


// *) > 
// *) <
// *) / 
// *) *
// *) %
// *) + 
// *) -

// ternary operator ---> (conditon) ? true : false

/*
TODO:  ---------------------------------------
*) ==      --> double eqivalency. called as loose equality. --> comparision only values.
*) !=

*) ===     --> tripe eqivalency. calles as strict equality. --> comparision of both value & data types.
*) !==

*/


/* -TODO:------ Converting one data type into another data type.
 
---------- implicit conversion --> also called as "coercision"
---------- implicit means on its own conversion.
 */

// var str = 'a';
// console.log(str);
// console.log(typeof (str));

// var num = 10;
// console.log(num);
// console.log(typeof (num));



// // parseInt(str);          // The parseInt is used to covert the string to number.
// // console.log(typeof (str));


// // // -------------- explicitly converting string type to number type
// console.log(typeof (parseInt(str)));            // output:- number


// let number = 123;
// let numberAsString = number.toString();
// console.log(numberAsString); // Output: "123";
// console.log(typeof (numberAsString)); // Output: "123";



// ----------------- When I do something like.

// var str = '10';
// var num = 10;

// console.log(str == num);        // how internalyy it is getting executed. internally happened implicit conversion. 

// console.log(str === num);       // It doesn't allow the implicit conversion.



/* TODO: ----------------- falsy & truthy values ---------- TODO:

falsy values are:  TODO: TODO: TODO: TODO: TODO: TODO: 
    *) 0
    *) NaN
    *) undefined
    *) null
    *) ''

    --> If your variables are getting computed to any of the above values they will be sort of considered as false.
*/

// var a = 10;                 // a --> is not a falsy value.
// if(a){
//     console.log('this is truthy values');
// }


// var b = 0;
// if(b){
//     console.log('truthy value');
// }
// else{
//     console.log('falsy value');
// }

// var c = 'b' - 10;
// if(c){
//     console.log('truthy');
// }
// else{
//     console.log('falsy');
// }



// TODO: ---------------------> Ternary Operator <------------------

// var a = 0;
// console.log(a ? 'truthy' : 'falsy');


// var a = 100;
// a ? console.log('truthy value') : console.log('falsy value')

// var b = 10;
// console.log(b ? '10' : '0');




// TODO: TODO: TODO: ------------- DAY - 2 -------TODO: TODO: TODO:


// var a = 0;
// var b = '0'


// if(parseInt(b) === a){
//     console.log('executed');
// }
// else if(b == a){
//     console.log('now I am definetly executed');
// }


// var arr = [];
// var obj = {}

// // var arr = new Array();
// // var arr = new Object();


// // -------- push method is adding the elements in the array at the end.
// arr.push(1);
// arr.push(2);
// arr.push(3);


// // -------- pop method will remove the elements from end
// arr.pop()
// // arr.pop()
// console.log(arr);



// ---------------------- TODO: ----------------------- 

// var ans;
// var abcd = 10;
// if(ans && abcd){
//     console.log('in if');
// }
// else if(ans){
//     console.log('in else if');
// }                                        // No log



// var ans;
// var abcd = 10;
// if(ans && abcd){
//     console.log('in if');
// }
// else {
//     console.log('in else');
// }



// var arr = []
// var abcd = 10;
// var ans;

// if((ans && abcd) || arr){
//     console.log('in if');
// }
// else{
//     console.log('in else');
// }


// TODO: --------------- function's ---------------------- TODO:

// function myFunc(){
//     console.log('abcd');            
//     // abcd is getting logged in above line, not getting return
// }
// myFunc();




// function myFunc(){
//     console.log('abcd');
//     return 10;
// }
// // myFunc()

// var myFuncOutput = myFunc();
// console.log(myFuncOutput);


// TODO:---------- passing parameter's to the function TODO:

// function myFunc(num){
//     // console.log(10);
//     console.log(num);

//     return 200;
// }
// // var a = myFunc(100);
// var a = myFunc();
// console.log(a);




// function myFunc(num1, num2, num3){
//     console.log(num1);
//     console.log(num2);
//     console.log(num3);
    
// }
// myFunc(100, 200, 300, 400, 500, 600);
// myFunc(100, 200);




// What happen when 2 functions name's are same


// function myFunc(a){
//     console.log('abcd');
// }

// function myFunc(num1, num2, num3){
//     console.log(num1);
//     console.log(num2);
//     console.log(num3);

//     return 'This is second function';
// }

// function myFunc(b){
//     console.log('third');
    
//     // console.log(b);

//     // return b;
    
//     return '300';
    
// }
// var a = myFunc(100);
// console.log(a);


// var a = 10;
// var b = 30;

// function myFunc(num1, num2){
//     console.log(num1);
//     console.log(num2);
// }

// myFunc(a, b);


// var a = 10;
// var b = 30;

// function myFunc(a, b){
//     console.log(a);
//     console.log(b);
// }
// myFunc(a, b);



// var a = 10;
// var b = 30;

// function myFunc(b, b){
// // function myFunc(10, 30){
//     console.log(b);
//     console.log(b);
// }

// myFunc(a, b);




// var a = 10;
// var b = 30;

// function myFunc(b, a){
//     console.log(b);
//     console.log(a);
// }

// myFunc(a, b);


// function creation a second form ---> TODO: TODO: TODO: TODO:
// --TODO: ----------------------- Function Expression ------- TODO:

// var myFuncVariable = function doSome(){
//     console.log('This is function expression');
// }
// // console.log(myFuncVariable);
// // myFuncVariable;
// // myFuncVariable();
// doSome();




// ------------ TODO: TODO: TODO: TODO: TODO: TODO: ----------------

// -------> How does js is executed??? 
// ---- First phase of  the execution context.


// console.log(a);
// var a = 10;


// var a = 10;
// var b = 30;

// function myFunc(){
//     console.log(b);
//     console.log(a);
// }

// myFunc(a, b)


// var a = 100;
// var b = 200;
// var c = 300;

// console.log(a);
// console.log(b);
// console.log(c);


// TODO: TODO: TODO: ------------- DAY - 3 -------TODO: TODO: TODO:


// Hoisting:-  The phenomenon where we are able to get the value undefined for the variables which are yet to be declared. That is basically your hoisting

// Hoisting:-  
//             1) Variable declaration are scanned and made undefined
//             2) function declarations are scanned and made available.



// temp(100);
// function temp(num){
//     console.log('first');
//     console.log(num);
// }



// temp(a);
// function temp(a){
//     console.log(a);
//     console.log('first');
// }
// var a = 100;



// temp(a);
// var a = 100;
// function temp(a){
//     console.log(a);
//     console.log('first');
// }


// var numb1 = 100;
// console.log(addition(numb1));
// function addition(a, b){
//     return a + 200;
// }
// var num2 = 'add';




//  --------------------------------------> falsy & truthy values                       TODO:
//    ------------------------------------> problem - 1

// var falsy = '10';
// var truthy = 0;

// var ans = falsy ? (truthy || -10) ? 10 : 4 : 2;
// console.log(ans);


// --------------------------------------------> problem - 2

// var ans;
// var abcd = 10;
// if(ans && abcd){
//     console.log('in if');
// }
// else if(ans){
//     console.log('in else if');
// }
// else{
//     console.log("in else");
// }



// ---------------------------------------------> problem - 3

// var ans;
// var abcd = 10;
// var arr = [];

// if((ans && abcd) || arr){
//     console.log('in if');
// }
// else{
//     console.log('in else');
// }



// // ---------------------------------------------->  problem - 4

// function myfunc(){
//     console.log('abcd');
//     console.log('the object');
//     return 100;                         // explicit return statement
// }
// // myfunc();                   // This line syntax print the log statement only.

// var a = myfunc();    // This line of syntax will prints the both clg & return statements in a function.
// console.log(a);


// ---------------------------------------------->  problem - 5

// function myfunc(){
//     console.log('abcd');
//     console.log('the object');
//     return 100;                         // explicit return statement
// }
// // myfunc();                               // This line syntax print the log statement only.

// var num = 10;
// var a = myfunc(num);                     // This line of syntax will prints the both clg & return statements in a function.
// console.log(a);


// ---------------------------------------------> problem - 6

// function myfunc(num){
//     console.log(num);                       // num value is 10

//     return 100;                         // explicit return value is 100
// }

// var num = 10;
// var a = myfunc(num);    // This line of syntax will prints the both clg & return statements in a function.
// console.log(a);


// ---------------------------------------------> problem - 7

// function myfunction(num){
//     console.log(num);
//     return 1000;
// }

// var num = 10;
// // var a = myfunction("hello", 10000, 20000, 300000, 56000);
// var a = myfunction(num, 1000, 2000);
// console.log("This is return value: " + a);

// ------------------------------------------------> problem - 8

// function myfunction(num, num2, num3, num4){
//     console.log(num);                                   // hello
//     console.log(num2);                                   // undefined
//     console.log(num3);                                   // undefined
//     console.log(num4);                                   // undefined
//     return 1000;
// }

// var num = 10;
// var a = myfunction(3634634);                        

// // var a = myfunction(949449, 4575, 34543, 4566);                    
// console.log("This is return value: " + a);



// function myfunction(num, num2, num3, num4){
//     console.log(num);                                   
//     console.log(num2);                                  
//     console.log(num3);                                   
//     console.log(num4);                                   
//     return 1000;
// }

// var num = 10;
// console.log(num);
// // var a = myfunction(3634634);                        

// var a = myfunction(949449, 4575, 34543, 4566);                    
// console.log("This is return value: " + a);

// --------------------------------------------------> function expression TODO:  <------------------------------------

// var func = function myfunc(){
//     console.log("hello world");
// }

// func();


// ------------------------------------------------> problem - 2

// var func = function myfunc(){
//     console.log("hello world");
//     return 2354342;
// }

// // func();

// console.log(func);                  // It will print the function definition

// console.log(func());                // This is log the function & return the value in the function


// -----------------------------------------------> problem - 3

// var a = 10;
// var b = 30;

// function myfunc(newa, newb){
//     console.log(newa);
//     console.log(newb);

//     console.log(" ");

//     console.log(newb);
//     console.log(newa);
// }

// myfunc(a, b);

// ----------------------------------------------------> problem - 4

// var a = 10;
// var b = 30;

// function myfunc(b, a){
//     console.log(b);                 // 10       ===> In second case 30
//     console.log(a);                 // 30                           10

//     console.log(" ");

//     console.log(a);                 // 30                           10
//     console.log(b);                 // 10                           30
// }

// // myfunc(a, b);
// myfunc(b, a);




//  ------------------------------------------------>   hoisting  TODO: <--------------------------------------

/*          hoisting:
            1. Variable declaration are scanned and made undefined
            2. function declaration are scanned and made available
*/

// temp();

// function temp(){
//     console.log('first');
// }


// temp(100);
// temp(a);
// var a = 100;

// function temp(a){
//     console.log(a);
//     console.log('first');
// }


// console.log(temp);
// temp();
// function temp(){
//     console.log('first');
// }


// temp(a);                        
// function temp(a){
//     console.log(a);                             // undefined
//     console.log('first');                       // first
// }

// var a = 100;
// console.log(a);


//  -----------------------------------------------------> example

// var a = 100;
// temp(a);

// function temp(a){
//     console.log(a);
//     console.log('first');
// }


//  ------------------------------------------------------> example

// functionVariable();             // get error because functionVariable is not declared at the time of calling.
// var a = 100;

// var functionVariable = function temp(a){
//     console.log(a);
//     console.log('first');
// }


// temp();
// function temp(){
//     console.log("1");
// }



//  ----------------------------------------------------> example

// var num1 = 100;
// console.log(addition(num1));
// function addition(a, b){
//     console.log(num1 + 200);
//     return a + b;                       // NaN
// }

// var num2 = 'add';


// func();
// function func(){
//     console.log('fastast');
// }


// var a  = 100;
// var b;
// console.log(a + b);


//  ---------------------------------------------------> example

// var num1 = 100;
// console.log(addition(num1, num2));

// var num2 = 'add';

// function addition(a, b){
//     console.log(num1 + 200);
//     return a + b;                       // NaN
// }



// TODO: ----------------- Day - 4 -----------------------------TODO:
// TODO: TODO: TODO: ---> scope & scope-chain ------- TODO: TODO: TODO:

/* 

TODO:  Scope ---> more illustrations

TODO: Questions on scope, execution context and hoisting --> var

TODO: Basic about objects

TODO: Some basics around programming --> binary operatos and operator precedence */


// ------------------------------ Problem

// function ran1(){
//     console.log('ran1');
// }
// function ran2(){
//     console.log('ran2');

//     function ran3(){
//         console.log('ran3');
//     }

//     ran3();
// }
// ran1();
// ran2();



// ------------------------------- Problem

// var a = 100;
// function ran1()
// {
//     console.log(a);
// }

// function ran2(){
//     console.log(a);

//     function ran3(){
//         console.log(a);
//     }
//     ran3();
// }
// ran1();
// ran2();



// ------------------------------ Problem
// var a = 100;
// function ran1(){
//     var a = 200;
//     console.log(a);
// }
// function ran2(){
//     var a = 300;
//     console.log(a);

//     function ran3(){
//         console.log(a);
//     }
//     ran3();
// }
// ran1();
// ran2();


// ------------------------------- Problem

// var a = 100;
// function ran1(){
//     a = 200;
//     console.log(a);
// }
// function ran2(){
//     console.log(a);

//     function ran3(){
//         console.log(a);
//     }
//     ran3();
// }
// ran1();
// ran2();

// -------------------------------- Problem

// var a = 100;
// function ran1(){
//     a = 200;
//     console.log(a);
// }
// function ran2(){
//     var a = 2000;
//     console.log(a);

//     function ran3(){
//         console.log(a);
//     }
//     ran3();
// }
// ran1();
// ran2();


// --------------------------------- Problem

// var x = 200;
// function execution(){
    
//     if(x > 50){
//         //  var x = 50;
//     }
//     console.log(x);
// }
// execution();



// Algorithm:-
//             1) Execution context gets pushed into the stack
//             2) memory allocation phase happens (js doesnt care what is going on in the code)
//             3) Code Execution happens line by line 



// function sample(){
//     console.log(x);
//     var x = 500;
// }
// sample();

// console.log(y);
// var y = 100;


// ------------------------------- Problem

// var x = 200;
// function exec1(){
//     if(x > 10){
//         var x = 50;
//     }
//     console.log(x);
// }
// exec1();
// console.log(x);



// ------------------------------- Problem

// var x = 200;
// function exec1(){
//     if(x > 0){
//          x = 50;
//     }
//     console.log(x);
// }
// exec1();
// console.log(x);


// var y = 200;
// function exec1(){
//     if(y > 10){
//          var x = 50;
//     }
//     console.log(x);
// }
// exec1();
// console.log(x);


// ----------------------------- Problem

// var y = 200;
// function exec1(){
//     var y;
//     if(y > 10){
//         var x = 50;
//     }
//     y = 200;
//     console.log(x);
//     console.log(y);
// }
// exec1();
// console.log(y);
// console.log(x);



// TODO: TODO: -------------------- Object -----------TODO: TODO:

// ----------------> TODO: TODO: creation of object TODO: TODO: 
// const obj = {};
// const obj2 = new Object();


// const obj = {
//     name: 'sarath',
//     age: 20,
//     gender: 'male', 
//     city: 'guntur'
// }
// console.log(obj);

// /* 
//     // dot(.) notation
// */
// console.log(obj.name);          
// console.log(obj.age);

// /* 
//     square bracket notation
// */

// console.log(obj['name']);
// console.log(obj['city']);

// /* 
//     updating an object 
// */
// obj.city = 'hyderabad';
// console.log(obj);

// obj['state'] = 'telangana'
// console.log(obj);

// obj.country = 'India';
// console.log(obj);

 

// TODO: TODO: TODO: ----------------------> DAY - 5 <-----------------------TODO: TODO:

// var out = 10;
// function outer(){
//     var ins = 200;
//     inner();
//     console.log(`this is my outer ${out}`);
//     out = 200;
// }

// function inner(){
//     out = 20;
//     // console.log(`inside ${ins}`);
// }
// outer();


// --------------------

/* A lexical environment in JavaScript is a data structure that stores the variables and functions that are defined in the current scope and all of the outer scopes. 
It is also known as the lexical scope or the lexical closure
 */

// TODO: ------------ TODO: String's ---------- TODO: TODO: TODO:

// var str = "sarath kumar";
// var str2 = 'sarath kumar'
// var str3 = `sarath kumar`

// var str = "sarath kumar's laptop";
// // console.log(str);

// var str = 'sarath kumar'
// console.log(str);

// -----------------------TODO: Template Literal TODO: -------------------------

// var str = `sarath kumar JAMMOJU`;
// console.log(str);

// let abcd = 20
// console.log(`This is my outer:-> ${abcd + 10 + 20 + 30} ${abcd} ${str}`);

// var a = "firstName";
// var b = "lastName";
// console.log("The full name is:- " + a +" " + b);

// console.log(`The full name is:- ${a}${b}`);
// console.log(`The full name is:- ${a} ${b}`);


// var str = "sarath jammoju";
// console.log(`my name is: ${str}`);

// function outer(){
//     function inner(){
//         function innerMost(){

//         }
//     }
// }

// a = 10;
// // console.log(a);

// a = 15;
// // console.log(a);

// a = 20;
// console.log(a);

// var a = 10;
// var a = 15;
// var a = 20;

    // function outer(){
    //     abcd = 10;
    //     console.log(abcd);
    // }
    // outer()

    // console.log(abcd);

// --------------------------------- problem

// function parentCheck(){
//     var check = "I am check";

//     // console.log(check);

//     // return check

  
//     // return check;

//     console.log(check);
//     console.log("1");
//     console.log("2");
//     console.log("3");
 
//     console.log("4");
//     console.log("5");
//     console.log("6");
//     console.log("7");
//     return "100"
    
    
//     var a = 100;
//     console.log(a);
//     console.log("8");
//     // return "1"
// }
// // parentCheck();
// console.log(parentCheck());

// var RETURN = parentCheck();
// console.log(RETURN);

// parentCheck();
// console.log(parentCheck);

// function parentCheck(){
//     var check = function check2(){
//         console.log('check2');
//     }
//     // return check();

//     check();
//     return 10;
    
// }
// // parentCheck();
// console.log(parentCheck());

// --------------------------------- problem

// function parent(){
//     var sample = 'sam';
//     function hoisted(){
//         return 'I am a function';
//     }
//     // var hoisted = 'I am a variable';
//     return hoisted();
// }   
// // parent();
// console.log(parent());

// -------------------------------- Problem

// function parent(){
//     var sample = 'sam';
//     function hoisted(){
//         return 'I am a function';
//     }
//     // return hoisted();

//     var hoisted = "I am a variable";
//     var hoisted = function sample(){
//         console.log('sample func');
//         return 'I am another function';
//     }
//     return hoisted();
// }
// console.log(parent());


// >TODO: TODO:>>>>>>>>> (06 - 03 - 2024) >>>>>>> DAY - 6 <<<<<<<<<<<<<<<<<<<< TODO: TODO: TODO:


// var var1 = 10;
// test2();
// test1();

// function test1(){
//     console.log(var1);
//     var1 = 20;
// }
// function test2(){
//     console.log(var1);
// }


// var var1 = 20;
// function test1(){
//     console.log(var1);
//     var1 = test2();
//     console.log(var1);
    
// }
// function test2(){
//     // var var1 = 30;
// //    return var1;
//     return "abcd";
// }
// test1();



// var var1 = 20;

// function test1(){
//     console.log(var1);

//     var2 = test2();

//     console.log(var2);
//     console.log(var1);
// }
// function test2(){
//     var var1 = 30;
//     return var1;
// }
// // console.log(test2());
// test1();



// TODO: TODO: TODO: -------------- Types of function's --------------


// TODO: --> 1) normal function

// function normalFunc(){
//     console.log('this is normal function');
// }
// normalFunc()


// // TODO: --->  2) Function Expression
// var funcExpression = function abcd(){
//     console.log('This is function expression');
// }
// funcExpression();


// var functionExpressoin2 = function (){
//     console.log('This is function expression two');
// }
// functionExpressoin2();       // --->  calling function / Invoking function 




// TOOD: ---> IIFE - Instantaneously Invoked Function Expression 

// (function name(){
//     console.log('IIFE ---> ');
// })()



// var a = 10;
// (function IIFE(){
//     console.log('hello');
//     a = 20;
//     console.log(a);
// })()
// console.log(a);



// var a = 10;
// function IIFE(){
//     console.log('hello');
//     a = 20;
//     console.log(a);
// }
// IIFE();
// console.log(a);


// (function IIFE2(){
//     console.log('Need to put the ; at the end');
// })();



// function noramlFunc(var1){
//     console.log(var1);
// }
// noramlFunc(10);


// (function normalFunc(var1){
//     console.log(var1);
// })(20);



// TODO: TODO: TODO: Imp ---- CallBack ------ >>>>>>>>>>>>>>>>>>>>>>>>>>>


// function mainFunc(cb){
//     console.log(cb);
// }
// function passingFunc(){
//     console.log('abcd');
//     return 10;
// }
// // console.log(passingFunc);

// // mainFunc(passingFunc)

// mainFunc(passingFunc())






// function mainFunc(cb, cb1 ,cb2){
//     console.log(cb);
//     console.log(cb1);
//     console.log(cb2);
// }
// function passingFunc(){
//     console.log('function 1');
// }
// function passingFunc2(){
//     console.log('function 2');
// }

// mainFunc(passingFunc, passingFunc, passingFunc2)



    // function mainFunc(cb, cb2){
    //     // console.log(cb);
    //     console.log(cb());
    //     cb();
    //     console.log(cb2);
    // }
    // function passingFunc(){
    //     console.log('function 1');
    // }
    // function passingFunc2(){
    //     console.log('function 2');
    // }
    // var mainFunc3 = function(){
    //     console.log('main func3');
    // }

    // mainFunc(passingFunc, mainFunc3, passingFunc2)




// var testFunc = function(){
//     console.log('random');
//     return 30;
// }
// // console.log(testFunc());
// // testFunc();
// console.log(testFunc);


// var testFunc2 = function(){
//     console.log('random');
// }
// console.log(testFunc2);


// var testFunc3 = function(){
//     console.log('random');
// }
// console.log(testFunc3);


// var testFunc4 = function abcd(){
//     console.log('random');
// }
// console.log(testFunc4);



// var testFunc = function(){
//     console.log('random');
//     // return "Now I'll be printed"
// }
// var testFunc2 = function(){
//     console.log('random');
//     // return "Now I'll be printed"
// }
// var testFunc3 = function(){
//     console.log('random');
//     // return "Now I'll be printed"
// }
// var testFunc4 = function abcd(){
//     console.log('random');
//     // return "Now I'll be printed"
// }

// console.log(testFunc());
// console.log(testFunc2());
// console.log(testFunc3());
// console.log(testFunc4());



// function mainTestFunc(numb){
//     console.log(numb);
// }
// var testVar = 10;
// mainTestFunc(testVar)



// function abcd(){
//     console.log('normal func');
//     console.log('normal func1');
//     console.log('normal func2');
//     // return 100;
// }

// // abcd()
// console.log(abcd());





// TODO: TODO: TODO: >>>>>>>>>>>>>>>>> REVISION ---- Day - 7 <<<<<<<<<<<<<< TODO: TODO: 


// console.log('hello javascript');

// operators


// if - else

// var a = 10;
// var b = 20;

// if(a < b){
//     console.log('true');
// }
// else{
//     console.log('false');
// }


// if(10 > 20 && 30 < 40){
//     var a = 10;
//     console.log(a);
// }
// else{
//     var a = 20;
//     console.log(a);
// }

// if(20 < 10 || 30 < 40){
//     console.log('if block');
// }
// else{
//     console.log('else block');
// }




// var a = (10 > 30) ? 'true' : 'false';
// console.log(a);


// var b = (true > false) ? 'good' : 'bad'
// console.log(b);



// ------------------------- falsey & truthy values:

// falsy:- 
//         null
//         0
//         NaN
//         undefined
//         ''
//         false


// if(0 > 10){
//     console.log('if');
// }
// else{
//     console.log('else');
// }



// == and ===

// console.log(10 == '10');

// console.log(10 === 10);

// console.log(10 == '20');

// console.log(10 === '10');




// ------- functions 

// function abcd(){
//     console.log('hello');
//     // return 100;
// }
// // abcd();
// console.log(abcd());



// var a = function abcd(){
//     console.log('Function express');
//     return 100;
// }
// console.log(a());
// // a();



// var a = function abcd(){
//     console.log('how r u! func expressiom');
// }
// console.log(a);



// function abcd(){
//     console.log('IIFE ');
// }
// abcd();




// var a = (function abcd(){
//     console.log('IIFE');
//     return 100;
// })()
// console.log(a);



// function abcd(num, num2, num3){
//     console.log('parameters');
//     console.log(num);
//     console.log(num2);
//     console.log(num3);
// }
// abcd(10, 20)



// console.log(a);
// var a = 10;
// console.log(a);
// var b = 20;
// var c = 30;



// var a = 10;
// var b = 20;
// function abcd(){
//     console.log(a);
// }




// var a = 20;
// function outer(){
//     console.log(a);
//     function inner(){
//         var  a = 10;
//         function innerMost(){
//             console.log(a);
//         }
//         innerMost();   
//     }
//     inner();
// }
// outer();
    


// TODO: TODO: ---------------- Day - 8 -------------- TODO:

// var x = 10;
// console.log(x);

// if(true){
//     (function(){
//         var x = 20;
//         console.log(x);
//     })()
// }
// console.log(x);


// var temp = function (){
//     console.log('first');
// }

// var temp2 = function(cb){
//     console.log('second');
//     console.log(cb);
//     cb();
//     return 200;

// }
// console.log(temp2(temp));
// console.log(temp);




// var temp = function (){
//     console.log('first');
//     return 'temp function';
// }

// var temp2 = function(cb){
//     console.log('second');
//     console.log(cb());
//     console.log(cb());
//     return 100;
// }
// console.log(temp2(temp));



// var temp = function (){
//     console.log('first');
// }

// var temp2 = function(cb){
//     console.log('second');
//     return cb;
//     // return cb();
// }
// console.log(temp2(temp));



// TODO: TODO: TODO: ---> First Class Functions & High Class Function's --- TODO: TODO: 
// TODO: TODO: TODO: ---> First Order Functions & High Order Function's --- TODO: TODO: 


//TODO: --> A function which is passed to another function is called as --> FIRST ORDER FUNCTION
// TODO: --> A function which receives another function is known as --> HIGH ORDER FUNCTIONS.


// var temp = function (){
//     console.log('first');
// }

// var temp2 = function(cb){
//     console.log('second');
//     return cb;
//     // return cb();
// }
// console.log(temp2(temp));

// TODO:--> In above syntax temp is passing to temp2. temp is known as first class function.



// function temp1(){
//     console.log('first function');

//     function temp2(){
//         console.log('first');
//     }
//     temp2()
//     // console.log(temp2());
//     // return temp2;
// }

// console.log(temp1());

// var abcd = temp1();
// console.log(abcd);


// var abcd = temp1();
// console.log(abcd);


// function sum(){
//     var x = 10;
//     x++;
//     return x;
// }

// function temp1(){
//     return sum();
// }

// var abcd = temp1();
// console.log(abcd);


// var x = 200;
// function sum(){
//     x++;
//     return x;
// }
// function temp1(cb){
//     return cb();
// }
// var abcd = temp1(sum);
// console.log(abcd);

// var abcd2 = temp1(sum);
// console.log(abcd2);

// var abcd3 = temp1(sum);
// console.log(abcd3);

// var abcd4 = temp1(sum);
// console.log(abcd4);

// console.log(x);



// var myVar = 'foo';
// (function (){
//     console.log(`my foo is:---- ${myVar}`);
//     var myVar = 'bar';
//     console.log(`my foo is ${myVar}`);
// })()


// TODO: TODO: TODO: ----> Arrow function <----- TODO: TODO: TODO:

// var funcExpression = function(){
//     console.log("I am normal");
// }


// var arrow = () => {
//     console.log("hello");
// }
// // arrow();
// // console.log(arrow);
// // console.log(arrow());



// var isArrow = () => {
//     console.log('this is arrow function');
//     return 100;
// }
// // console.log(isArrow);
// console.log(isArrow());




// var isArrow = (num) => {
//     console.log(num);
    
// }
// // isArrow(100);
// console.log(isArrow(100));



// var isArrow = num => {
//     console.log(num);
//     // console.log(num2);
// }
// isArrow(100);
// // isArrow(100, 200);



// var isArrow = num => console.log(num); 
// isArrow(200);


// var isArrow = (num, num2) => console.log(num + num2);
// isArrow(10, 2)


// TODO: TODO: ----- ES6 introduced Arrow function's ------ TODO: TODO: 




// function higerOrderFunc(cb){
//     console.log('I am higher');
//     console.log(cb);
// }


// function funcFirstClass(){
//     console.log(' I am first');
// }
// higerOrderFunc(funcFirstClass)


// higerOrderFunc(function (){
//     console.log('I am inside first');
// })


// TODO: TODO: ---------------- Day - 9 -------------- TODO:


// var variable = 10;
// (() => {
//     variable_3 = 35;
//     console.log(variable_3);
//     var variable_3 = 45;
//     variable_2 = 15;
//     console.log(variable);
// })();
// var variable = 30;


// var arrow = (num) => {
//     console.log(num % 2 == 0);
// }
// arrow(100)

// var arrow = num => console.log(num % 2 === 0);
//                 console.log('arrow function');
// arrow(100);


// var isEven = numb => numb % 2 === 0;
// var isEven = () => { return 'hello! this arrow function have hidden return type'; }
// console.log(isEven());
// in the above syntax, there is a auto return applied. No need to apply return, It will gave error when you mentioned a return


// var autoReturn = numb => 100;
// console.log(autoReturn());


// var auto = numb => console.log(199);
// console.log(auto());


// var abcd = 200 || 400;
// console.log(abcd);

// var temp = 400 && 800
// console.log(temp);


// var temp = undefined || 500;
// console.log(temp);


// var temp4 = console.log('temp') && 300;
// // var temp4 = 'temp' || 300;
// console.log(temp4);




// var temp4 = console.log('temp') && 300;
// console.log(temp4);


/* 
    RuleBox && and ||
    in ||
            1) If first is true then return from there itself
            2) If first is false if checks second

    in &&
            1) If first is true and then it checks the second as well
            2) If first is false doesn't need to check the second as there is no need
*/


// function A(){
//     console.log('called A');
//     // return false;
//     return true;
// }
// function B(){
//     console.log('called B');
//     return false;
// }
// function C(){
//     console.log('called C');
//     return true;
// }

// console.log(A() && (C() || B()));
// console.log(C() && (A() || B()));
// console.log(B() && (A() || C()));




// -TODO: TODO: TODO: TODO: -----> Try Catch <----- TODO: TODO: TODO: TODO:


// console.log(a);

// var b = 10;
// console.log(b);

// if(2 % 2 === 0){
//     console.log('even');
// }
// else{
//     console.log('odd');
// }





// try
// {
//     console.log(a);
// }
// catch(error)
// {
//     console.log(error);
//     console.log(error.message);
// }


// function abcd(){
//     try{
//         plo = 10;
//     }
//     catch(err){
//         console.log(err);
//     }
// }abcd();

// try{
//     console.log(plo);
// }
// catch(err){
//     console.log(err);
// }
// console.log('try catch');



// TODO: TODO: TODO: -----> Day - 10 <---------------- TODO: TODO: TODO:

// Variables, for of loop


/* var, let, const

    1) let is more strict than var
    2) const is more strict than let
*/

// --TODO: TODO: ------------ var -------- TODO: TODO:
// var varVariable = 10;
// console.log(varVariable);
// var varVariable = 20;
// console.log(varVariable);
// var varVariable = 30;
// console.log(varVariable);


// -TODO: TODO: ----------- let ------- TODO: TODO:

// let letVariable = 10;
// console.log(letVariable);
// // let letVariable = 20;
// // console.log(letVariable);
// letVariable = 30;
// console.log(letVariable);


// --- TODO: TODO: ----- const ------ TODO: TODO:

// const constVariable = 10;
// console.log(constVariable);
// // const constVariable = 10;
// constVariable = 20;
// console.log(constVariable);



/* 
TODO: 1. var
--> Scope: Function scope when declared inside a function. Global scope when declared outside a function.
--> Hoisting: Variables are hoisted to the top of their scope but initialized with undefined. This means the variable can be used before it is declared, but its value will be undefined until the line where it's defined is executed.
--> Re-declaration: Allowed within the same scope.
--> Re-assignment: Allowed.

TODO: 2. let
--> Scope: Block scope, which means the variable is limited to the block (denoted by {}), statement, or expression where it is defined.
--> Hoisting: Technically hoisted to the top of their block scope, but not initialized, leading to a "temporal dead zone" from the block start to the variable declaration. Accessing the variable in this zone will result in a ReferenceError.
--> Re-declaration: Not allowed within the same scope/block.
--> Re-assignment: Allowed.

TODO: 3. const
--> Scope: Block scope, similar to let.
--> Hoisting: Similar to let, const declarations are hoisted to the top of their block scope but are not initialized, creating a "temporal dead zone."
--> Re-declaration: Not allowed within the same scope/block.
--> Re-assignment: Not allowed. However, note that objects declared with const can have their properties mutated; it's just the binding that can't be reassigned.

*/

// console.log(ab);
// var ab = 200;

// {
//     console.log(a);             // This variable a is in Temporal Dead Zone (TDZ)
//     let a = 10;
// }



// let a = 10;
// const b = 20;

// var c = 30;

// {
//     var varVariable = 10;
//     let letVariable = 20;
//     const constVariable = 30;
//     // console.log(letVariable);
//     // console.log(constVariable);
//     // console.log(varVariable);
// }

// console.log(varVariable);
// // console.log(letVariable);
// console.log(constVariable);


// function test()
// {
//     {
//         let letVariable = 10;
//         const constVariable = 30;
    
//     }
//     var ab = 20;
//     // console.log(letVariable);
//     console.log(constVariable);
// }
// test();



// function test1(){
//     let variable1 = 10;
//     {
//         var var2 = 30;
//         const abcd = 20;
//         console.log(variable1);
//     }
    
//     console.log(variable1);
//     console.log(var2);
//     console.log(abcd);
// }
// test1();



// function test(){
//     let abcd = 10;
//     console.log(abcd);

//     // const abcd = 20;
//     // console.log(abcd);

//     // var abcd     = 30;
// }
// test();
// var abcd     = 30;



// function abcd(){
//         var ab = 10;
//         console.log(ab);
//         {
//             const abc = 20;
//             console.log(abc);
//         }
//         const abc2 = 30;
//         console.log(abc2);
// }
// abcd();



// function test(){
//     var abcd2 = 5;
//     var abcd2;
//     console.log(abcd2);
//     {
//         var abcd2 = 40;
//         console.log(abcd2);
//     }
//     {
//         let abcd2 = 50;
//         console.log(abcd2);
//     }
//     {
//         abcd2 = 500;
//         console.log(abcd2);
//     }
//     {
//         let abcd2 = 100;
//         console.log(abcd2);
//     }
//     let abcd3 = 20;
//     console.log(abcd3);
//     console.log(abcd2);
// }
// test();



// --- TODO: TODO: -- for of loop ---- TODO: 

// for(var i = 0; i < 10; i++){
//     console.log(i);
// }


// var arr = [1, 2, 3, 45, 55, 66, 77];
// for(var i = 0; i < arr.length; i++){
//     console.log(arr[i]);
// }


/* 
    1) for of loop  --> To iterative over an array
    2) for in loop  --> To iterate over an object
*/

// var arr = [11, 22, 344, 55, 44, 55];
// for(var numb of arr){
//     console.log(numb);
// }


// var arr = [10, 20, 30, 40, 
//                         [1, 2, 3, 4, 5], 
//             50, 60]
// // for(var numb of arr){
// //     console.log(numb);
// // }

// console.log(arr[3]);



// --- TODO: TODO: ----------- Day - 11 ----------------- TODO: TODO:

// const aFunction = () => {
//     console.log(var1);
// }
// let var1 = 200;

// aFunction();
// if(true){
//     let var1 = 201;
//     console.log(var1);
// }
// if(var1%2 == 0){
//     console.log(var1);
// }


// function tempExplain(){
//     console.log(a);
//     {
//         console.log(a);
//         let a = 100;
//         console.log(a);
//     }
// }
// tempExplain();




// function tempExplain(){
//     let a = 10;
//     {
//         // console.log(a);
//         let a = 100;
//         console.log(a);
//     }
//     {
//         console.log(a);
//         // a = 200;
//         let a = 200;
//     }
//     console.log(a);
// }
// tempExplain();



// let a = 10;
// function test(){
//     if(a > 5){
//         console.log(a);
//     }
//     let a = 200;
//     // console.log(a);
// }
// test();


/* ------ Shadowing ------ */

// Illega shadowing. Why?? ---> Because let and const are doesn't allow the same declaration in 
// the same scope

// let a = 10;
// {
//     var a = 20;
// }

// // Legal shadowing  

// var b = 30;
// {
//     let b = 200;
// }

// // var c = 1;
// // {
// //     var c = 2;
// //     console.log(c);
// // }
// // console.log(c);


// // let d = 200
// // {
// //     let d = 300;
// //     console.log(d);
// // }
// // console.log(d);

// var e = 3000;
// function random(){
//     var e = 300
// }



// // function abcd(){
// //     a();
// //     let a = () => {
// //         console.log('a');
//     }
// }
// abcd();



// function abcd(){
//     // let a = 40;
//     // b = 40;

//     let a = b = 40;
//     console.log(a);
//     console.log(b);
// }
// abcd();
// console.log(b);
// console.log(a);



// {
//     // console.log(a);
//     // let a = 100;
    
//     let a;
//     console.log(a);
// }
// console.log(a);



// let arr = [100, "string", "javascript", 200, 
//             [1, 2, 3, 4, 5, 
//                 ['str1', 'abcd']
//             ]
//           ]

//     console.log(arr[0]);
//     console.log(arr[1]);
//     console.log(arr[2]);
//     console.log(arr[3]);
//     console.log(arr[4]);

// console.log(arr[4][1]);
// console.log(arr[4][5]);

// console.log(arr[4][5][0]);
// console.log(arr[4][5][1]);




// --- TODO: TODO: ----------- Day - 12 --- TODO: TODO: -------------


// // Array methods ----> TODO: TODO: TODO:

// // TODO: ----> length method:

// var arr = [1, 2, 3, 4];
// console.log(arr.length);


// // TODO: -----> pop method:- It is used to del the element from an array. The pop is pop the last element in the array. O(n)
// var arr = [1, 2, 3, 4, 5];
// console.log(arr + " elements");
// let popElem = arr.pop();
// console.log(popElem);


// // TODO: ----> push method:- It is used to insert an element in end of the array. O(n)
// var arr = [1, 2, 3, 4];
// arr.push(10)
// console.log(arr);



// TODO: -----> shift:- Removing from the start of an array. O(1)
// let arr = [1, 2, 3, 4];
// console.log(arr);

// arr.shift();
// console.log(arr);


// TODO: ----> unshift:- Adding an element at first of an array. O(1)
// let arr = [10, 20, 30, 40];
// console.log(arr);
// arr.unshift(1);
// console.log(arr);


/* 
    map
    reduce
    filter
    every
    slice
    splice
*/

//TODO: Imp ---> Pass by value and pass by reference

// const val = 100;
// // val = 200;
// console.log(val);


// const arr = [10, 20, 30, 40];
// arr.push(100);
// console.log(arr);
// arr.pop()
// console.log(arr);


// const obj = {name: 'sarath', age: 22, city: 'hyderabad'}
// console.log(obj);
// obj.gender = 'male';
// console.log(obj);


/* 
    --> I was using a const still, I am able to update the array. Why?????????????
    --> The same thing happened in case of object as well that the even though I am able to update the const variable.

    Why?????????????????????

    --> The const variable arr & obj in above case is not storing the arr & obj values. 
    --> It just stroing the arr & obj memory address.
    --> That memory address can pointing to that array values & object key:value pairs.

    TODO: TODO: TODO: TODO: TODO: TODO: TODO: TODO: TODO: TODO: TODO: TODO: TODO: TODO: TODO: TODO:
    Explanation:-

    You declare an object obj with properties name, age, and city using const. This means you cannot do something like obj = {another: 'object'} later in the code, because that would be trying to assign a new value to obj.

    Despite obj being declared with const, you can still add new properties to it or change existing ones. When you add obj.gender = 'male';, you're modifying the contents of the object obj refers to, not attempting to change the reference stored in obj. This is allowed.

    The reason for this behavior is that objects in JavaScript (including arrays and functions) are reference types. When you create an object and assign it to a variable, the variable holds a reference (or a pointer) to the location in memory where the object is stored. Using const ensures that this variable will always point to the same memory location (i.e., the same object), but it doesn't protect the object itself from being modified.
*/

// const arr = [1, 2, 3, 45];
// console.log(arr);
// arr = [1, 2, 3, 45];                 // Lead to an error????
// console.log(arr);


// const obj = {name: 'sarath', age: 22};
// console.log(obj);
// obj = {}
// console.log(obj);

/* 
    At this point, obj is pointing to a specific object in memory, and because obj was declared with const, you cannot change obj to point to a different object (or any other value) later on in the code.

    you attempt to reassign obj to a new, empty object {}. This is not allowed for variables declared with const, hence JavaScript throws an error. 
*/

// const obj = {name: 'sarath'}
// obj = {}    // throws an error

// const arr = [1, 2, 3];
// arr = []    // throws an error



// function sample(){
//     arr.push(10);
// }
// const arr = [20, 30];
// sample();
// console.log(arr);


// function sample2(numb){
//     numb = 40;
//     console.log(numb);
// }

// const numb = 100;
// // numb = 40;

// console.log(numb);
// sample2(numb);
// console.log(numb);


// TODO: --> When we are dealing with primitive data types, It is pass by value.



// The below function is a example for pass by reference. TODO: TODO:
// function sample2(num){
//     arr.push(100);
// }
// const arr = [20, 40];
// sample2(arr);
// console.log(arr);


// function complexCode(arr, obj, numb){
//     arr = [20, 30, 40]; 
//     obj.age = 50;
//     obj.range = 20;
//     obj.gender = 'male'

//     // obj = {name: 'ashok'}
//     // console.log(obj);
 
//     numb = 90;
//     return arr;
// }
// const arr = [10, 20, 30];
// const obj = {name: 'sarath', age: 10};
// const numb = 20;
// complexCode(arr, obj, numb);

// console.log(arr);
// console.log(obj);
// console.log(numb);


// const check1 = 10;
// check1 = 100;
// console.log(check1);


// const arr1 = [1, 2, 3, 4];
// const arr2 = arr1;
// arr2.push(40);
// console.log(arr1);
// console.log(arr2);





// --- TODO: TODO: ----------- Day - 13 --- TODO: TODO: -------------

// const arr = [true, false, 
//                         [1, 2, 3, function() {console.log('abcd')}], 
//                         {name: 'sarath', age: 23, city: 'guntur'}
//     ]

// console.log(arr[1]);
// console.log(arr[2][2]);
// console.log(arr[2][3]());
// console.log(arr[3]);
// console.log(arr[3].name);
// console.log(arr[3].age);
// console.log(arr[3].city);


// const arr = [];
// const arr2 = [];
// console.log(arr === arr2);                  // Checks the reference of arr & arr2  
// console.log(arr == arr2);


// const a = [20];
// const b = [20];
// console.log(a[0] === b[0]);
// console.log(a[0] == b[0]);

// console.log(a === b);

// console.log(typeof a);



// const a = [20];
// const b = [30];
// console.log(a[0] === b[0]);
// console.log(a[0] == b[0]);
// console.log(typeof a);
// console.log(typeof b );


/* 
    --> All arrays in javascript are objects.
    --> All arrays in js are derived from an object.

        prototype --> 
*/

// const c = [20];
// const d = [30];
// const e = {name: 'javascript'};
// console.log(Array.isArray(c));

// console.log(Array.isArray(e));



// TODO: TODO: ---> split & join are work for --> Array and String

// const str = 'javaScript';
// console.log(str[6]);


// const str = "JavaScript";
// // const arrStr = str.split('');
// const arrStr = str.split();
// console.log(arrStr);


// const str = "Ja va Script";
// console.log(str);
// const arrStr = str.split(' ');
// // const arrStr = str.split();
// console.log(arrStr);


// const str = "Javascript array, java";
// console.log(str.split('v'));


// const str = "Java, is a, different, language, from, javascript"
// console.log(str);
// console.log(str.split(','));



// const str = "javaScript ";
// const str2 = "Value";
// console.log(str + str2);                // String concatination


// const str = "javaScript, ";
// const str2 = "Value ";
// const concatinatedArray = (str + str2).split(', ');
// console.log(concatinatedArray);


// const str = "      javaScript   java  python    ";
// console.log(str);
// console.log(str.length);

// const trimStr = str.trim();
// console.log(trimStr);
// console.log(trimStr.length);


/* 
    split() --> We basically converted a string into an array.

    join() --> We basically converted a array into string.
*/

// const arr = ["java", "javascript", "both are different languages"];
// console.log(arr);
// // console.log(arr.join());
// console.log(arr.join('.  + "join" + '));
// // console.log(arr.join(' AND '));



/* 
    rest 
    spread
*/

// TODO: ----> spread (...)
/* 
    The spread operator is a feature of JavaScript introduced with ES6 that gives you access to the insides of an iterable object. An “iterable object” is anything you can iterate over item by item, such as arrays, objects literals, and strings
 */


    // const arr = [1, 2, 3, 4 ];
    // const arr2 = [10, 20, 30];

    // // const combined = arr + "," + arr2;
    // // console.log(combined);

    // const combinedArrSpread = [...arr, ...arr2]
    // console.log(combinedArrSpread);


    // const a = ['ashok']
    // const b = ['aswini']
    // const c = ['chandrika']
    // console.log(a);
    // console.log(b);
    // console.log(c);

    // // TODO: --> concatinated using SPREAD (...) OPERATOR TODO: 
    // console.log([...a, ...b, ...c]);

    // console.log([...c, ...a, ...b]);


    
// --- TODO: TODO: ----------- Day - 14 --- TODO: TODO: -------------

// function sample(cb, num){
//     console.log(cb);
//     console.log(num);
// }

// function sampleChild(){
//     return 100;
// }
// sample(sampleChild(), 500);



// const arr = [1, 2, 3, 4];
// const arr2 = [1, 20, 30, 40];
// const res = [...arr, ...arr2];              // Spread Operator
// console.log(res);


// const arr = [1, 2, 3, 4];
// const arr2 = [10, 20, 30];
// const arr3 = arr2;
// const arr1 = [...arr3];
// console.log(arr3);
// console.log(arr2);
// console.log(arr1);


// TODO: TODO: ---> rest operator (...)

// function restCheck(...val){                 // ...val is the rest operator. It will take all arguments in single parameter
//     console.log(val);
//     console.log(val[0]);
//     console.log(val[1]);
// }

// restCheck('java', 'javascript', 'python', 'html')



// function restCheck(val1, ...val){                
    
//     console.log(val1);
//     console.log(val);
// }
// restCheck('java', 'javascript', 'python', 'html')


// TODO: TODO: --0-------> Destructuring <--------------------

// const a = [10, 20, 30];
// const [i, j, k] = a;
// console.log(i);
// console.log(j);
// console.log(k);


// const [val1, val2, val3] = [100, 200, 300];
// console.log(val1);
// console.log(val2);
// console.log(val3);



// const func = (a) => {
//     return 4 + a;
// };

// const obj = {name: 'naman'};
// const [fun, random] = [func(4), obj];

// console.log(fun);
// console.log(random);


// const a = 10;
// const b = 20;
// const c = 30;
// const obj = {Tech: 'IT', Language: 'Java'};

// const variableDestructering = [a, b, c, obj];
// console.log(variableDestructering);


// function sample(){
//     return 4;
// }
// function sample2(){
//     return [sample, () => {return 5}];
//     // return 'hello'
// }

// const [f1, f2] = sample2();
// console.log(f1);
// console.log(f2);

// const [f1] = sample2();
// console.log(f1);


// const [a, b, c, d] = [10, 20];
// console.log(a);
// console.log(b);
// console.log(c);
// console.log(d);

// const [i, j] = [1, 2, 3, 4];
// console.log(i);
// console.log(j);



// const [i, j, ...val] = [1, 2, 3, 4, 5, 6];
// console.log(i);
// console.log(j);
// console.log(val);


// function sample(){
//     return [true, ()=>{}, 5];
// }
// const [...arr] = sample();
// console.log(arr[2]);
// console.log(arr[1]);
// console.log(arr[0]);


// TODO: ----> concat & reverse --- functions/ methods in javaScript

// const arr = [10, 20, 30];
// const arr2 = [1, 2, 3];
// console.log(arr2.concat(arr));



// const arr = [10, 20, 30];
// const arr2 = [1, 2, 3];
// const arr3 = [0, 0, 0, 0]
// // console.log(arr2.concat(arr, arr3));

// // const [...array] = [...arr, ...arr2, ...arr3]
// const array = [...arr, ...arr2, ...arr3]
// console.log(array);


// const [a, b, ...val] = [1, 2, 3, 4, 5, 6];
// console.log(a);
// console.log(b);
// console.log(val);

// const arr = [10, 20, 30, 40];
// const arr2 = [10, 20, 30, 40];

// const abc = [...arr];
// console.log(abc);

// const abcd = [arr, arr2];
// console.log(abcd);

// const ab = [...arr, ...arr2];
// console.log(ab);




// TODO: TODO: ------------- Day - 15 ---------------------- TODO: 


/* 
    Replace the values of two variables.
    var a = 10;
    var b = 20;

    console.log(b)  // 10;
    console.log(a)  // 20;
*/

// let a = 10;
// let b = 20;

// console.log("value of a: " + a);
// console.log("value of b: " + b);

// [a, b] = [b, a];  

// console.log("value of a: " + a);
// console.log("value of b: " + b);
// console.log(b);


// console.log([] === []);
// console.log([] == []);


// TODO: NOTE:--- Non primitive data types are compare the reference only. It doesn't compare the internal values.


// console.log({} === {});
// console.log({} == {});


// const a = {}
// const b = a;
// console.log(b === a);




/* 
        Array Methods
        TODO:-  slice & splice
*/

// const arr = [10,20, 30, 40];
// // console.log(arr);

// const slicedArr = arr.slice(2);
// console.log(slicedArr);                     // returns a new array. i.e., doesn't change the original array.
// console.log(arr);

// console.log(arr.slice(2));
// console.log(arr.slice(0));


// const arr = [10,20, 30, 40];
// const something = arr.slice(0);
// console.log(something === arr);               // reference


// (slice <startIndex, endIndex>)       // ending index is not include

// const arr = [10, 20, 30, 40, 50, 60, 70];
// console.log(arr.slice(0, 3));
// console.log(arr.slice(0, arr.length));
// console.log(arr.slice(0, arr.length-1));
// console.log(arr.slice());



// const arr = [10, 20, 30, 40, 50, 60];
// // console.log(arr.slice(-1));
// // console.log(arr.slice(5));
// // console.log(arr.slice(-3));                          // -3 to end of the array.
// // console.log(arr.slice(3));                          // -3 to end of the array.
// // console.log(arr.slice(-4, -1));
// // console.log(arr.slice(2, 5));
// // console.log(arr.slice(-1, -4));                      // 
// console.log(arr.slice(-2, arr.length));
// console.log(arr);



// TODO:  NOTE:  -- splice() leads to change an original array, and get a new array returns
// TODO:    NOTE:-  splice(<index>, <DeleteCount>) 


// const arr = [10, 20, 30, 40, 50, 60, 70];
// console.log("before splicing: " + arr);
// arr.splice(2);
// // console.log(arr);
// console.log("After splicing: " + arr);
// console.log(10 + arr);

// console.log(arr.splice(2));                     // from index 2 to end of array will be deleted
// console.log(arr);


// const arr = [10, 20, 30, 40, 50, 60, 70];
// const delElem = arr.splice(2, 4);                               // 2 is the index & 4is count for delete.
// console.log(arr);
// console.log(delElem);


// const arr = [10, 20, 30, 40, 50, 60, 70];
// // arr.splice(2, 2, 'deleted');
// const removed = arr.splice(2, 2, 'tirumala');
// console.log(arr);
// console.log(removed);



// const arr = [10, 20, 30, 40, 50, 60, 70];
// arr.splice(2, 2, 'deleted', 'changed');
// arr.splice(2, 2, 0, 0);
// console.log(arr);
// arr.splice(2, 2, '1', '1000');
// console.log(arr);


// const arr = [10, 20, 30, 40, 50, 60, 70];
// arr.splice(arr.length-1, 'deleted');            // the second argument can take only integer. In this case we are passing string.
// console.log(arr);
// arr.splice(2, 'deleted');            // the second argument can take only integer. In this case we are passing string.
// console.log(arr);


// const arr = [10, 20, 30, 40, 50, 60, 70];
// const deletedArr = arr.splice(4);
// console.log(deletedArr);                        // This is deleted array.
// console.log(arr);                               // This is original array. after deleted


// const arr = [10, 20, 30, 40, 50, 60, 70];
// const deletedArr = arr.splice(2, 2, 'ch1', 'ch2');
// console.log(deletedArr);
// console.log(arr);


// const arr = [10, 20, 30, 40, 50, 60, 70];
// const del = arr.splice(2, 1, 'val1', 'val2', 'val3', 'val4', 'val5');
// console.log(del);
// console.log(arr);


// const arr = [10, 20, 30, 40, 50, 60, 70];
            
// const delArr1 = arr.splice(2, 2, 100, 200);
// const delArr2 = arr.splice(1, 1, 500);
// const delArr3 = arr.splice(3, 2, 10, 20, 30, 40, 50);
// console.log(delArr3);
// console.log(arr);


// const arr = [10, 20, 30, 40, 50, 60];
// console.log(arr.indexOf(20));
// console.log(arr.indexOf());
// console.log(arr.lastIndexOf());
// console.log(arr.lastIndexOf(100));
// console.log(arr.lastIndexOf(1));
// console.log(arr.lastIndexOf(60));



// TODO: TODO: -------------------- Day - 16 ---------------------- TODO: 


/* 
    Real world application of higer order functions.
    TODO: ---> Applied only on Array. The other data types doesn't work
    1) every
    2) filter
    3) reduce
    4) map **************************
    Many more.....,


    browser level -> 
*/



// function abcd(numb, cb){
//     for(let i = 0; i < 3; i++){
//         cb(numb + i);
//     }
// }

// // abcd(10, (numb) => {
// //     console.log('execute this', numb);
// // })

// abcd(20, (newVal) => {
//     console.log('exec this', newVal);
// })

/* Explanation for the above example TODO: 
        --->The CB is (numb) => {}
        ---> The hof is the higer order function. Bcoz It will take another function as a argument.
*/

/* 
TODO: ---> 

TODO: --> every:-        
        The every() method executes a function for each array element. The every() method returns true if the function returns true for all elements.
        Used very least method.
 */


// const cb = (numb) => {
//     return !(numb % 2);                     // TODO: --> !0 => true & !1 => false
// }               

// const arr = [2, 4, 6, 8];
// const res = arr.every((numb) => !(numb % 2));            // THis and above cb arrow functions are same.
// // const res = arr.every(cb);
// console.log(res);

/* 
Explanation:-   
                The arr elements iterate through Array, If callBack gives true, for all indexs, 
                It will gave true as the output, otherwise false 

               TODO:  ---->  return !(2 % 2) = !(0) => !(false) ==> true;
               TODO:  ---->  return !(4 % 2) = !(0) => !(false) ==> true;
               TODO:  ---->  return !(6 % 2) = !(0) => !(false) ==> true;
               TODO:  ---->  return !(8 % 2) = !(0) => !(false) ==> true;

               So all array elements are gave true, The final output is true
*/


// const isEven = (numb) => {
//     return !(numb % 2);                     // TODO: --> !0 => true & !1 => false
// }            
// const isOdd = (numb) => {
//     return !(numb % 2);
// }   

// const arr = [2, 4, 7, 8];
// const res = arr.every((numb) => !(numb % 2));
// // const res = arr.every(isEven);
// // const res = arr.every(isOdd);
// console.log(res);

/* 
Explanation:-   
                The arr elements iterate through Array, If callBack gives true, for all indexs, 
                It will gave true as the output, otherwise false 

               TODO:  ---->  return !(2 % 2) = !(0) => !(false) ==> true;
               TODO:  ---->  return !(4 % 2) = !(0) => !(false) ==> true;
               TODO:  ---->  return !(7 % 2) = !(1) => !(true) ==> false;
               TODO:  ---->  return !(8 % 2) = !(0) => !(false) ==> true;

               So all array elements are not  true, Some elements are false. The final output is false.

    NOTE: TODO: If any one of the elements output is false, It leads to false only in final output.
*/



// TODO: TODO: TODO: ==> map(expects a callBack here)  ----> Very very very important
/* 
    Two kinds of maps in javaScript:
        1) map Datastructures (we haven't discussed) && set
        2) map is also a hof --> which kind of resembles a loop

    TODO: --> The data type for map is an array, It returns a new array.
 */


// const arr = [2, 4, 6, 8];
// // const result = arr.map((val, index, completeArr) => {
// const result = arr.map((val) => {
//     // console.log(val);
//     console.log(val + 10);
// })


// const arr = [2, 4, 6, 8];
// const res = arr.map((val) => {
//     function addnumber10(val){
//         return val + 10;
//     }
    
//     let newNum = addnumber10(val);
//     console.log(newNum);
// })



// const arr = [2, 4, 6, 8];
// const res = arr.map((val) => {
//     return val + 1;
// })
// console.log(res);                   // map gives a new array as the output
// console.log(arr);                   // This is the original array.


// const arr = [2, 4, 6, 8];
// // const res = arr.map((val) => {
// const res = arr.every((val) => {
//     return val === 2;
// })
// console.log(res);
// console.log(arr);



// const arr = [2, 4, 6, 8, 10, 12];
// const res = arr.map((val) => {
//     console.log(val + 1);               
//     // return 10;
// })
// console.log(res);                    

/* When a function doesn't return anything it will undefined. In this case the map will log arr.length times, That is why we got undefined, undefined, as many times. i.e., array.length times. */



// TODO:    map(val, index) ---> TODO:

// const arr = [2, 4, 6, 8];
// const res = arr.map((val, index) => {
//     // console.log(val + " " + index);
//     return val + index                          
//     // val is the value of an array element, index is an index position of an array
// })
// console.log(res);


// const arr = [2, 4, 6, 8];
// const res = arr.map((val, indexNumber) => {
//     // console.log(val + " " + index);
//     return [val + indexNumber, indexNumber]                          
//     // val is the value of an array element, index is an index position of an array
// })
// console.log(res)


/* 
// TODO:    map(value, index, completedArray)       
            --> value, index, completedArr are the parameters, We can change as we need 
*/

// const arr = [2, 4, 6, 8];
// const res = arr.map((val, index, completeArr) => {
//     console.log(completeArr);
//     console.log(index);
//     console.log(val);
                             
//     // completeArr is print array elements. The len of array is 4, It will print the array elements 4 times in this case.
// })
// console.log(res);


// const cb = (index, val) => {
//     if(!(val % 2)){
//                             // 0 % 2 => !(0) => !(false) => true;
//         return index;
//     }
//     else{
//         return val;
//     }
// }
// const result = [100, 150, 200, 300].map(cb);
// console.log(result);



// const nestedArr = [[10, 20, 30, 40, 50], [200, 300]].map(cb);
// function cb(value, val){
//     console.log(value);
//     console.log(val);
// }

/* 
// TODO: TODO: 
                NOTE: -->
                        React:- You wont be able to effectively code in react without Map. 
 */
        
                        
/* 
TODO: TODO: ---> Filter();
                        It is called upon an Array, it takes a callback, whatever values passes the criteria of the callback gets. 
                        returns in the form of an Array.
                        returns you an new array.
 */

// const arr = [2, 5, 7, 10];
// const result = arr.filter((val) => {
//     return !(val == 7);
// })
// console.log(result);

// /* output is the (!(val == 7)) not meet the condition. i.e., 2, 5, 10 */



// const arr = [2, 5, 7, 10];
// const result = arr.filter((val) => {
//     return val;
// })
// console.log(result);



// const arr = [2, 5, 7, 10];
// const result = arr.filter((val) => {
//     return !!0;
// })
// console.log(result);





// TODO: TODO: TODO: TODO: ----------- Day - 17 ------------ TODO: TODO: TODO: 

/* TODO: TODO: 
        Reduce:
            The currentValues is iterating over the array elements
            In the first Iteration the previousvalue became the argument, what you passed to that function.
 */


// const arr = [1, 2, 3, 4, 5];
// const res = arr.reduce((previousVal, currentVal) => {
//     console.log("prev", previousVal);
//     console.log("current", currentVal);
    
//     // return 200      // Now this is the previous
// }, 400)             // callBack starting value, This is the previousValue in this case.

// console.log(arr);


// const arr = [1, 2, 3, 4, 5];
// const res = arr.reduce((prevVal, currVal) => {
//     console.log("prev " + prevVal);
//     console.log("curr " + currVal);
//     return prevVal + currVal;
// }, 100);                 // The 100 is the previous Value initially
// // console.log(res);


// const arr = [1, 2, 3, 4, 5];
// const result = arr.reduce(function(prev, curr) {
//     console.log(prev);
//     console.log(curr);
//     return ' prev value'
// }, 100)
// // }, 100)()             // --> Lead to an error, bcoz reduce is not a function.`
// // console.log(result);


    // const arr = [1, 2, 3];
    // const res = arr.reduce(function(prev, curr){
    //     console.log((prev * curr) - prev);
    //     // return ((prev * curr) - prev);
    // }, 100);
    // // console.log(res);



// const arr = [7, 11, 18];
// const returned = arr.reduce(function(p, c){
//     if(c > p){
//         return c;
//     }
//     return p;
// }, 12)
// console.log(returned);


// const arr = [1, 2, 3, 4, 5];
// const res = arr.reduce((p, c) => {
//     console.log("prev: " + p + ", curr:"+ c);
//     return 100;
// })
// console.log(res);



// const arr = [7, 11, 18];
// const res = arr.reduce((p, c) => {
//     return p + c
// })
// console.log(res);

/* 
// TODO: TODO: ---> .reduce(previous, current, index, completeArray)
 */

// const arr = [1, 2, 3, 4, 5];
// const res = arr.reduce((p, c, index, completeArray) => {
//     console.log("prev: " + p + ", curr:"+ c);
// })
// // console.log(res);


//  const arr = [1, 2, 3, 4, 5];
// const res = arr.reduce((p, c, index, completeArray) => {
//     console.log("Previous Value, " + p);
//     console.log(c + ' Current index:--> ' + index);
//     console.log(completeArray);
// })
// console.log(res);


// const arr = [7, 11, 18];
// const returned = arr.reduce(function(p, c, index, completeArray) {
//     if(p){
//         return completeArray.length + index;
//     }
//     else{
//         return !c;
//     }
// }, 20);
// console.log(returned);


// TODO: TODO: ---------------------------- Day - 18 ------------------------ TODO: 

// const arr = [10, 20, 30, 40, 50];
// const res = arr.map((val) => {
//     return val + 2;
// })
// console.log(res);


/* 
    1) Step - 1:-   Iterating over the array
    2) Step - 2:-   call the cb and pass it array value, index, completeArray
    3) Step - 3:-   Push the returned values of the callback in an array.
    4) Step - 4:-   Once the loop is over, return the newly generated array.    
*/


// TODO: TODO: TODO:  ------> Math.random() <-----------

// const val1 = 3.2;
// console.log(Math.ceil(val1));
// console.log(Math.floor(val1));

// const val2 = 4.689;
// console.log(Math.ceil(val2));
// console.log(Math.floor(val2));

// const val3 = 1234.999999;
// console.log(Math.ceil(val3));
// console.log(Math.floor(val3));

// const val4 = -98;
// console.log(Math.abs(val4));

// const val4 = -576.98974;
// console.log(Math.floor(Math.abs(val4)));


/* 
    Generate a random number between 10 to 99
*/

    // const randomNumber = Math.floor(Math.random() * (99 - 9)) + 9;
    // console.log(randomNumber);
/* 
    Math.random():-
                    1) It generates the value from 0 to 1 (1 is not included). i.e., 0 to 0.999999......
                    2) We need a intefer between certain range.
            
        Ex:- 
            min = 10;
            max = 90
*/

// console.log(Math.random());

// const min = 10;
// const max = 90;
// const maxNum = Math.random() * max;
// console.log(maxNum);

// const rangeOfRandomNumber = ((Math.random() * (90 - 10)) + 10);
// console.log(rangeOfRandomNumber);

// breakdown of the above snippet.

// console.log(Math.random());
// console.log(Math.random() * 90);        // gives a number upto 90
// console.log(Math.floor(Math.random() * (90 - 10)) + 10)


// TODO: ----> Generating random Number TODO: 

// const min = 5;
// const max = 10;
// const randomNum = (Math.random() * max);
// const randomNumMin = (Math.floor(Math.random() * (max - min)) + min);
// console.log(randomNumMin);


// console.log(Math.sqrt(25));
// console.log(Math.pow(2, 4));


// TODO: TODO: TODO: ------> 

/* 
    ---> Objects
*/

// for of loop to iterate an array only.
// const arr = [2, 4, 6, 8];
// for(let array of arr){
//     console.log(array);
// }



// const obj = {
//     name: 'hyundai',
//     type: 'creta',
//     year: 2022,
//     color: 'black',
// }
// // console.log(obj);

// // How to traverse this???  using for in loop

// for(let object in obj){
//     // console.log(object);
//     // console.log(obj[object]);
//     // console.log(object + ': ' + obj[object]);
// }


// const key = 'name'
// const value = 'naman'
// const obj = {};
// obj[key] = value;
// console.log(obj);

// console.log(obj);
// console.log(obj[key]);

// function testFunc(key, value, obj){
//     // obj.key = value;
//     obj[key] = value;
//     return obj;
// }
// const obj = testFunc('name', 'sarath', {})
// console.log(obj);


/* 
    Arrays are a kind of object in javascript
*/

// const arr = [2, 4, 6, 8];
// // console.log(arr);
// console.log(typeof arr);

// for(let a in arr){
//     console.log(a);             // log the key's
//     console.log(arr[a]);
// }


// const obj = {name: 'naman', age: 10}
// // for(let a of Object.keys(obj)){
// //     console.log(a);
// // }
// // for(let b of Object.values(obj)){
// //     console.log(b);
// // }
// for(let c of Object.entries(obj)){
//     console.log(c);
// }

// /* 
//     -> Object.keys();
//     -> Object.values();
//     -> Object.entries();
// */
// console.log(Object.keys(obj));              // give all keys in the object
// console.log(Object.values(obj));            // give all values in the object
// console.log(Object.entries(obj));           // key value pairs in array format



/* 
        Destructuring in Objects
*/
// const arr = [10, 20];
// const [a, b] = arr;         // [a, b] is known as index mapping.
// console.log(a);
// console.log(b);

/* 
    NOTE: The index mapping is not possible in objects, bcoz objects are not contiguous memory. 

    Arrays are in contiguous memory

    Objects are stored in random nature.

    
// */

// const obj = {name: 'naman', age: 10}
// const obj2 = {age: 10, name: 'chandrika'}

// console.log(obj.name);
// console.log(obj2.name);

// const details = {name: 'naman', age: 10};
// const {ag, nm} = details;
// console.log(ag);
// console.log(nm);

/* 
    NOTE: destructing in objects happens with respect to the key name happened in the object. 
*/

// const details = {name: 'naman', age: 10};
// const {age, name} = details;
// console.log(age);
// console.log(name);

// const details = {name: 'naman', age: 10};
// const {age, name, address} = details;
// console.log(age);
// console.log(name);
// console.log(address);       
//         // unefined, bcoz we couldn't find the address in the object.


// const details = {name: 'naman', age: 10};
// const {age} = details;
// console.log(age);



// function sample(){
//     return {random: Math.random()}
// }
// const {ran} = sample();
// console.log(ran);

// const {random} = sample();
// console.log(random);


// Need to do in console. for testing purpose
// const random = 10;
// function sample(){
//     return {random: Math.random()}
// }
// const {random} = sample();
// console.log(random)


// const random = 10;
// function sample(){
//     return {random: Math.random()}
// }
// // const {random} = sample();
// const {random: newVariable} = sample();
// console.log(random)
// console.log(newVariable)



// TODO: TODO: TODO: ------> Day - 19 <-------------------

// const arr = [1, 2, 3, 4, 5];
// console.log(arr.includes(5));

// const strArr = ['a', 'b', 'c', 'd', 'e'];
// console.log(strArr.includes('b'));


// const {age, name} = {age: 10, name: 'naman'};
// console.log(age);
// console.log(name);

// const {age: new_age_variable, name} = {age: 10, name: 'naman'};
// // console.log(age);
// console.log(new_age_variable);


/* TODO:
    dynamic objects:-
                    Whenever we are dealing with variables as key then we have to use [<variable>]
*/

// var key = 'name';
// var value = '10';
// obj = {}
// obj[key] = value;
// console.log(obj);

/* 
    TODO: ---> Generate a random number between 20 to 50;
*/

/* 
    TODO: --> Generate a random color in HexDecimal Format. ---> (#576134), (#451234), (#908751).......,
*/
let letters = '0123456789ABCDEF';
let color = '#';
for(let i = 0; i < 6; i++){
    let randomNum = Math.floor(Math.random() * 16);
    console.log(randomNum);

    color = color + letters[randomNum]
}
console.log(color);



// ----------------------------------------------------- Problem
// Do it your own TODO: TODO: TODO: 


// const arr = [
//         ['name', 'naman'],
//         ['age', 10],
//         ['add', 'delhi']
//     ]
    
//     const makeArrObj = (arr) => {
//         // write your code here
//     }
    
//     const newObj = makeArrObj(arr);
//     console.log(newObj);
//     /* 
//         --> The final output:-  {name: 'naman', age: 10, add: 'delhi'}
//     */


// The answer as show in below:- TODO: TODO:  TODO: TODO: 

// const arr = [
//     ['name', 'naman'],
//     ['age', 10],
//     ['add', 'delhi']
// ]

// const makeArrObj = (arr) => {
// //     // write your code here
// //     // console.log(arr[0]);
// //     // console.log(arr[1]);
// //     // console.log(arr[2]);

// //     // console.log(arr[0][0]);
// //     // console.log(arr[0][1]);

  
// //     const obj = {};
// //     for(let a of arr){
// //         // console.log(a[0]);
// //         // console.log(a[1]);
// //         // let key = a[0];
// //         // let value = a[1];
// //         // obj[key] = value;
// //         // console.log(obj);

// //         obj[a[0]] = a[1];
// //     }
// //     return obj;

//     const obj = {};
//     for(let [key, val] of arr){             // solving using destructuring concept
//         obj[key] = val;
//     }
//     return obj;
    
// }

// const newObj = makeArrObj(arr);
// console.log(newObj);
// /* 
//     --> The final output:-  {name: 'naman', age: 10, add: 'delhi'}
// */

// ---------------------------------------------------------------------------------


/* 
    TODO:   spread with objects
*/

// const obj = {
//     name: 'naman', age: 10
// }
// const obj2 = {
//     city: 'guntur'
// }
// const obj3 = {...obj, ...obj2};
// console.log(obj3);


// const obj = {
//     name: 'naman', age : 10
// }
// const obj2 = {
//     add: 'delhi', name: 'dinesh'
// }
// const obj3 = {...obj2, ...obj}
// console.log(obj3);

// const obj = {
//     name: 'naman', 
//     age: 10,
//     address: 'hyd'
// }
// obj.name = 'sarath';
// console.log(obj);


// const obj = {
//     name: 'naman', age : 10
// }
// const obj2 = {
//     add: 'delhi', name: 'dines'
// }
// const obj3 = {
//     state: 'delhi'
// }
// const obj4 = {
//     gender: 'male'
// }
// const OBJ = {...obj2, ...obj, ...obj3, ...obj4}
// console.log(OBJ);

// const obj = {
//     name: 'naman', 
//     age: 10
// }
// console.log(obj.name);
// console.log(obj.age);
// obj.age = 20;
// console.log(obj);


// const obj = {
//     name: 'naman', age : 10
// }
// const obj2 = {
//     add: 'delhi', name: 'dinesh'
// }
// const {name, age, add} = {...obj, ...obj2};
// console.log(name);
// console.log(age);
// console.log(add);


// const obj = {
//     name: 'naman', age : 10
// }
// const obj2 = {
//     add: 'delhi', name: 'dinesh'
// }
// const {name: nm1, age: ag1, add: ad1} = {...obj, ...obj2};
// // console.log(name);
// // console.log(age);
// // console.log(add);
// console.log(nm1);
// console.log(ag1);
// console.log(ad1);

// const something = [2, 4, 6, 8].toString();
// console.log(something);

// const something = [2, 4, 6, 8].join('');         // join convers the array to string.
// console.log(something);
// console.log(typeof something);


// const obj = {};
// console.log(obj.toString(''));
// console.log(obj.join(''));              // join is limited to array onlhy

// const obj = {
//     name: 'naman', age:10
// }
// console.log(obj);
// console.log(obj.toString());


/* 
    TODO: --> sorting 
*/

// const nameArr = ['naman', 'harssha', 'deepak', 'neha'];
// nameArr.sort();
// console.log(nameArr);

// const numbArr = [6, 2, 3, 1, 9, 0];
// console.log(numbArr.sort());

// const numbArr = [100, 300, 200, 10, 20, 4, 5];
// console.log(numbArr.sort());                        // gave the output in string based sorting. 1, 10, 100, 2, 22, 200 etc...,
// TODO: How do we deal with these scenario


// ---------------------------------------------------------------------------------------------------
// TODO: TODO:      Sorting in an array. using comparator function TODO: TODO: TODO: 
/* 
    comparator function
    we pass a callback inside the function

    In the comparator function we took 2 variables, (a, b) we return a - b.
    Here:   Negative values comes first
            Positive values comes later
            neutral values can do anything, first or last.
*/

// const numbArr = [100, 300, 200, 10, 20, 4, 5]
// const cb = (a, b) => {
//     // return a - b;                // Increasing order 
//     return b - a;                   // decreasing order
// }
// numbArr.sort(cb);
// console.log(numbArr);

/* 
Initial Array:

numbArr = [100, 300, 200, 10, 20, 4, 5]
Iteration 1:

Compares a (100) and b (300). Since b is greater, cb(100, 300) returns 200 (positive value).
Elements are swapped: numbArr = [300, 100, 200, 10, 20, 4, 5]
Iteration 2:

Compares a (100) and b (200). Since b is greater, cb(100, 200) returns 100 (positive value).
Elements are swapped: numbArr = [300, 200, 100, 10, 20, 4, 5]
Iteration 3:

Compares a (200) and b (100). Since a is greater, cb(200, 100) returns -100 (negative value).
No swap needed because a is already in the correct position relative to b.
numbArr remains the same: [300, 200, 100, 10, 20, 4, 5]
Iteration 4:

Compares a (100) and b (10). Since b is less, no comparison function call is necessary (already sorted).
No swap needed.
numbArr remains the same: [300, 200, 100, 10, 20, 4, 5]
Iterations 5-7 (similar comparisons):

No swaps occur because the larger elements have already been bubbled to the beginning of the array.
Final Array:

numbArr = [300, 200, 100, 20, 10, 5, 4] (sorted in descending order)
 */

console.log('this index file is from another folder');

// TODO: TODO: ----------------------------- Day - 19 ------------------------------------


