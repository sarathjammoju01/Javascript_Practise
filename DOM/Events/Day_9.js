/* 
THIS -> typeof this is an ---> TODO:  object
Default function -> function () -> 1st category
4kinds of situations:- 

1_ Default Binding
2) Implicit Binding
3) Explicit Binding
4) new keyword 


Arrow function () -> 2nd Category
*/

document.body.style.backgroundColor = 'black';
document.body.style.color = 'white'

// console.log("this keyword is also referedd to an window  ", this);             // TODO: At the base level this refers to window
// console.log(this.age);
// console.log(this.name);         // blank string

// TODO:
// function ask(){
//     console.log(this);              // the value of this will depend on how we are calling the function.
// }
// ask();                  // before function ask() we dont have anything. Bydefault it is --> window.ask();


/* TODO: TODO: TODO: TODO: TODO: TODO: TODO: TODO: TODO: 
    The value of this in default functions is not dependent where the 'this' is present, 
    it is dependent on how we are calling the function.
*/

// TODO:
// function ask2(){
//     function ask(){
//         console.log(this);          // this value is window here also.. why???
//         console.log(10);
//     }
//     return ask;
// }
// const store = ask2();
// // console.log(store());
// store();                            
// we are caling the functions here. window.store();    --> this -> window


/*  default binding:-    
            When ever you don't find attached with the function call. 
            i.e.., you are calling the function with window.functionName
 */

// TODO: -------------------------------------------

// var person = {
//     ask(){
//         // console.log(10);
//         console.log(this);
//     },
//    name: 'naman'
// }
// console.log(person);
// // console.log(person.name);
// person.ask()

/* TODO: TODO: 
    The above rule (person.ask()) --> is called implicit binding. 
    It binded up with the person and console.log(this) -> becames console.log(person)
*/

// var person = {
//     ask(){
//         console.log(this.name, this.abcd, this.ask2);
//     },
//     name: 'naman',
//     age: 10,
//     ask2: function(){
//         console.log('I am ask 2');
//     }
// }
// person.ask()


// var person = {
//     ask(){
//         function withInPerson(){
//             console.log(this);
//         }
//         return withInPerson
//     }, 
//     name: 'naman',
//     age: 10,
//     ask2: function(){
//         console.log('I am ask 2');
//     }
// }
// const variable = person.ask();
// // console.log(variable);
// variable();


// var person = {
//     ask(){
//         function withInPerson(){
//             console.log(this);
//         }
//             withInPerson();
//     },
//     name: 'naman',
//     age: 10,
//     ask2: function(){
//         console.log('I am ask2');
//     }
// }
// person.ask();


// var person = {
//     ask(){
//         console.log(this);
//         return this.ask2;
//     },
//     name: 'naman',
//     age: 10,
//     ask2: function(){
//         console.log(this);
//     }
// }
// // person.ask();
// // check();
// // ask();