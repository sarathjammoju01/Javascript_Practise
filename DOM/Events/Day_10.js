document.body.style.backgroundColor = 'black';
document.body.style.color = 'white';


/* TODO: TODO: TODO: ---------------------------------------------------------------
    Explicit Binding --> 
        1)  We are introducing 3 more terms in explicit binding.
            -> call
            -> apply
            -> bind         
            -> call, bind, apply are the methods of the function's
*/


// TODO: TODO: ---------- call() ---------------------------
// function ask(){
//     console.log(this);
// }
// // ask();

//     var person = {
//         name: 'naman', 
//         age: 10,
//         add: 'delhi'
//     }

// // ask();
// // console.log(person);
// ask.call(person);               // Here call acts as a HOF

// var station = {
//     location: 'delhi',
//     pincode: 123456
// }
// ask.call(station)


//--->  I need a the output for the above code, like the output comes in below code.
// var personDemo = {
//     name: 'naman', 
//     age: 10, 
//     add: 'delhi',
//     ask(){
//         console.log(this);
//     }
// }
// personDemo.ask();

/* 
TODO: TODO: TODO: --------------------- bind() --------------------------- 

    bind --> It does not call the function. 
            It return the reference in which our provided.
            this is binded with that function.
    This is the most prefered among these 3. call, bind, apply  
*/

// function ask(){
//     console.log(this);
// }
// // ask();

// var person = {
//     name: 'naman', 
//     age: 10,
//     add: 'delhi'
// }
// // ask.bind(person);               // bind does not call the function, It returns the reference

// const askFunctionBindWithPersonObject = ask.bind(person);
// askFunctionBindWithPersonObject();

// // I worte no.of lines here and again I call the above function

// askFunctionBindWithPersonObject();
// askFunctionBindWithPersonObject();
// askFunctionBindWithPersonObject();



/* 
// TODO: TODO: --------------------------apply() --------------- 
    
    The apply method is similar to call, 
    but the difference lies in how arguments are passed to the function. With apply
*/


// function introduce(name, profession) {
//     console.log(`Hello, my name is ${name} and I am a ${profession}.`);
//   }
  
//   // Using apply to invoke the function
//   introduce.apply(null, ['Bob', 'designer']);
//   // Output: Hello, my name is Bob and I am a designer.
  

// ----------------- problems -----------------------------

// function ask(...arr){
//     console.log(this.name);
//     console.log(arr[3]);
//     console.log(arr[2]);
//     console.log(arr[1]);
//     console.log(arr[0]);
// }
// var person = {
//     name: 'naman', 
//     age: 10,
//     add: 'delhi'
// }
// // ask.call(person, 100, 200, 300);
// ask.call(person, [100, 200, 300]);



// function ask(arr){
//     console.log(this.name);
//     // console.log(arr[3]);
//     console.log(arr[2]);
//     console.log(arr[1]);
// }
// var person = {
//     name: 'naman', 
//     age: 10,
//     add: 'delhi'
// }

// ask.call(person, [100, 200, 300]);


// function ask(...arr){
//     console.log(this.name);
//     // console.log(arr[3]);
//     console.log(arr[2]);
//     console.log(arr[1]);
//     console.log(arr[0]);
// }
// var person = {
//     name: 'naman', 
//     age: 10,
//     add: 'delhi'
// }
// ask.call(person, [100, 200, 300]);



// TODO: TODO: ----- new keyword ----------
/* 
    -> Js doesn't have classes internally 
    -> There is a keyword class present in js but Internally we have something called as a constructor function.
    -> constructor function is just a special form of a function? how? --> constructor functions are invoked with new keyword.
*/

// function Person(name2){
//     this.name = name2
// }
// const person1 = new Person('sarath');               // person1 is an instance of Person classs
// const person2 = new Person('naman');
// console.log(person1);                       // Object -> With all propeerties of Person
// console.log(person2);                       // Object -> with all propertiess of Person

// In the above the values that we are passing will act as the value of the instance.

// TODO: -------------------------------------------------------------------------------------

/* TODO: TODO: TODO: TODO: TODO: 
       ->   new keyword: Roles & Responsibilities 
                    ->  It creates a new object
                    ->  It points the value of this to the empty object it created = {}
                    ->  If we are not returning anything from the constructor function (or)
                            If we are not returning a objectk it automatically returns this keyword
*/

    // function Person(name2){
    //     // console.log(this);
    //     this.name2 = name2                              //TODO:  This function is not returing anything -> automatically return this keyword
    //     console.log(this);
    //     // console.log(name2);
    //     // return 100;
    //     // return true;
    //     return {name2: 'chandrika'}
    // }
    // // const person = new Person()                      //TODO:  1st point --> creates a new object
    // const person = new Person('sarath')
    // console.log(person);

// TODO: -------------------------------------------------------------------------------------
// Consider a simple example defining a Car constructor function and creating instances of Car:

// function Car(make, model, year) {
//     this.make = make;
//     this.model = model;
//     this.year = year;
//     this.displayInfo = function() {
//       console.log(`Make: ${this.make}, Model: ${this.model}, Year: ${this.year}`);
//     };
//   }

//   // Creating new instances of Car
//   const car1 = new Car('Toyota', 'Corolla', 2020);
//   const car2 = new Car('Honda', 'Civic', 2022);
  
//   // Calling a method on one of the created objects
//   car1.displayInfo(); // Output: Make: Toyota, Model: Corolla, Year: 2020
  

// -----------------------------------------------------------------------------------------
// class Car {
//     constructor(make, model, year) {
//       this.make = make;
//       this.model = model;
//       this.year = year;
//     }
  
//     displayInfo() {
//       console.log(`Make: ${this.make}, Model: ${this.model}, Year: ${this.year}`);
//     }
//   }
  
//   const myCar = new Car('Ford', 'Mustang', 2021);
//   myCar.displayInfo(); // Output: Make: Ford, Model: Mustang, Year: 2021
  