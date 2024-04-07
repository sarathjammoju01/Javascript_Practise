// document.body.style.backgroundColor = 'black';
// document.body.style.color = 'white'


// // getElementById
// /* ---- document.getElementById ----- */

// // console.log(h1);
// let h1ID = document.getElementById('domID');
// // console.log(h1ID);

// document.getElementById('domID').style.color = 'red'

// let h1Style = document.getElementById('domID').style.color = 'red'
// console.log(h1Style);

// let h1Style = document.getElementById('domID').textContent;
// console.log(h1Style);


// getElementByTagName



// TODO: TODO:------------ Day - 2 ----------------------

/* 
    2 categories

    1) Specific Selections
        a) getElementByTagName
        b) getElementById
        c) getElementsByClassName

    2) Generic Selections
        a) querySelector
        b) querySelectorAll
*/

// TODO: -----> getElementsByTagName
/* 
const parent = document.getElementsByTagName('h1');
console.log(parent);
console.log(parent[0].innerText);
console.log(parent[3].innerText);
console.log(parent[5].innerText);
console.log(parent[5].style.color = 'blue');

parent[1].style.color = 'red'; */


/* // TODO: ---> getElementsByTagName  
                :- returns --> Node list --> Array of nodes
 */

// const h1TagList = document.getElementsByTagName('h1');
// console.log(h1TagList);
// console.log(h1TagList[0]);
// console.log(h1TagList[1]);


// TODO: ---> getElementsByClassName
/* 
const clsSelector = document.getElementsByClassName('class1')
console.log(clsSelector);
// console.log(clsSelector[0]);
console.log(clsSelector[1]);

clsSelector[1].style.color = 'blue';
clsSelector[1].style.fontSize = '30px';
clsSelector[1].style.padding = '70px'
clsSelector[1].style.border = '3px solid blue'

clsSelector[2].style.backgroundColor = 'blue';
clsSelector[2].style.color = 'red';
clsSelector[2].style.fontSize = '30px';
 */


// TODO: --> querySelector

// const h1Tag = document.querySelector("h1");
// console.log(h1Tag);
// h1Tag.style.color = 'blue'

// const parent = document.querySelector('.class1');
// console.log(parent);
// parent.style.backgroundColor = 'red'

// const idTag = document.querySelector('#id1');
// console.log(idTag);
// idTag.style.border = '2px solid red';

// clsSelector[0].style.color = 'blue';

// TODO: --> querySelectorAll

// const h1Tag = document.querySelectorAll("h1");
// console.log(h1Tag);
// // h1Tag[0].style.color = 'red';
// // h1Tag[2].style.color = 'red';
// // h1Tag[4].style.color = 'red';
// // h1Tag[6].style.color = 'red';

// for(let i = 0; i < h1Tag.length; i++){
//     if(i % 2 == 0){
//         h1Tag[i].style.color = 'red';
//     }
//     else{
//         h1Tag[i].style.backgroundColor = 'yellow'
//         h1Tag[i].style.padding = '20px';
//         h1Tag[i].style.textDecoration = 'underline';
//         h1Tag[i].style.color = 'blue'
//     }
// }


// const randomNumber = Math.floor(Math.random() * 20);
// for(let i = 0; i < randomNumber; i++){
//     console.log(i);
//     if(i === 10){
//         const allDivTags = document.querySelectorAll('div');
//         // allDivTags[0].innerText = 'you are a winner';

//         for(let divTags of allDivTags){
            
//             if(divTags.innerText == 'This is my div text12345'){
//                 // I will be changing  its color to red;
//                 divTags.style.color = 'red'; 
//                 divTags.style.backgroundColor = 'blue';
//                 continue;
//             }
//             divTags.innerText = 'you are a winner'
//         }
//     }
// }


// ------------ TODO: TODO: 

// const parent = document.getElementById('id1')
// console.log(parent);
// console.log(parent.id);
// console.log(parent.className);
// console.log(parent.innerText);
// console.log(parent.innerContent);

// const divId = document.getElementById('title').id
// // console.log(divId)

// // console.log(document.getElementById('title').getAttribute('id'));
// // console.log(document.getElementById('title').getAttribute('class'));

// document.getElementById('title').setAttribute('class', 'testing');
// document.getElementById('title').setAttribute('id', 'idONE')

// console.log(document.getElementById('idONE'));


// TODO: TODO: 

// TODO: ---> Diff between innerText & innerContent


// const parent = document.getElementById('title').innerText
// console.log(parent);



// TODO: TODO: 
// const parent2 =  document.getElementById('title').innerContent;
// console.log(parent2);


// const weekDays = document.getElementsByClassName("day")
// console.log(weekDays);
// console.log(weekDays[0]);
// console.log(weekDays[0].innerHTML);
// console.log(weekDays[0].innerText);


// const dayOne = document.querySelector('.day');
// console.log(dayOne);
// console.log(dayOne.parentElement);

// const dayTwo = document.querySelectorAll(".day");
// console.log(dayTwo[2]);
// console.log(dayTwo[2].parentElement);
// console.log(dayTwo[2].nextElementSibling);



// TODO: --> Creation in Dom 

// const div = document.createElement('div');
// div.className = 'main';
// div.id = "idMain";
// // div.innerText = "This text is created inside the js file";

// const addText = document.createTextNode('This text is created inside the js file');
// div.appendChild(addText);
// document.body.appendChild(div);

// alert('hello world')
// alert("Do you want continue? press Y : N")


// let  a = 2;
// let b = 2;
// let res = a + b;

// console.log(res);

// const h1 = document.createElement('h2');
// h1.style.fontSize = '50px';
// h1.style.color = 'red';
// h1.style.backgroundColor = 'white';
// h1.style.border = '5px solid red'
// const text = document.createTextNode(res);
// h1.appendChild(text);
// document.body.appendChild(h1);

// const inputTag = document.querySelector('input[type = "password"]');
// console.log(inputTag);




// TODO: ------> Day - 03 <-------

// function addOptLang(languageName){
//     let li = document.createElement('li');
//     let textNode = document.createTextNode(languageName);
    

//     li.appendChild(textNode)
//     let clasName = document.querySelector('.language')
//     clasName.appendChild(li);
// }
// addOptLang('javaScript');
// addOptLang('React');
// addOptLang('React2');
// addOptLang('React31');



// let listItem = document.createElement('li');
// let text = document.createTextNode('HTML');
// // console.log(listItem);
// // console.log(text);
// listItem.appendChild(text);
// console.log(listItem);
// document.querySelector('.language').appendChild(listItem)


// console.log(window);            // window is a global object
// window.console.log('hello')

// console.log();
// window.location;
// window.location.href;


// const listItem = document.createElement('li');
// const text = document.createTextNode('CSS');
// // console.log(listItem);
// // console.log(text);

// listItem.appendChild(text);
// // console.log(listItem);

// const className = document.querySelector('.language')
// className.appendChild(listItem)



// TODO: TODO:     setTimeout() accepts 2 parameters. 1) callback 2) time in milliseconds, 1000ms = 1 sec

// console.log('before setTimeout');

// setTimeout(() => {
//     console.log('helo');
//     alert('hello! this is setTimeout()')
// }, 4000)

// console.log('after timeout');

// console.log('this is without setTimeout');
// console.log('this is without setTimeout');
// console.log('this is without setTimeout');
// console.log('this is without setTimeout');

// setTimeout(() => {
//     console.log('hello');
//     console.log('THis is setTImeout');
// }, 5000)

// console.log("this is outside the setTimeout");
// console.log("this is outside the setTimeout");
// console.log("this is outside the setTimeout");
// console.log("this is outside the setTimeout");

// let a = 10;
// let b = 20;
// console.log(a + b);

// setTimeout(() => {
//     console.log('timeout is 1 sec');
// }, 1000)

// function random1(){
//     console.log('random 1');
// }
// function random2(){
//     console.log('random 2');
//     alert('random 2')
// }
// function random3(){
//     console.log('random 3');
//     alert('this is random 3')
// }
// setTimeout(random1, 5000);
// setTimeout(random2, 3000);
// setTimeout(random3, 1000);

// setTimeout(() => {
//     console.log('random 4');
// }, 5000)

// setTimeout(function(){
//     console.log('random 5');
// }, 5000)



/* 

    1) You have 2 buttons on the webpage
    2) The first button should have its own color as red.
    3) The second button should have its background color as green in 4 seconds.

    How to do this:
    1) create 2 button
    2) selector of buttons
    3) change color of first button
    4) change color of second button in 4 seconds

 */
// document.getElementById('btn1').style.backgroundColor = 'red'

// setTimeout(() => {
//     document.getElementById('btn2').style.backgroundColor = 'yellow'
// }, 4000)


// setInterval(()=> {
//     // alert('This is setInterval after 3 sec')
//     console.log('interval');
// }, 1500)

// TODO: Note: 
// Both setTimeout & setInterval is returns a id

// const setTimeoutID = setTimeout(()=> {
//     console.log(setTimeoutID)
//     console.log('setTimeout');
// }, 1000);

// const setIntervalID = setInterval(() => {
//     console.log(setIntervalID);
//     // console.log('setInterval');
//     alert('setInterval')
// }, 2000)

// clearInterval TODO: 

// let count = 0;
// const clrInterval = setInterval(() => {
//     count++;
//     // console.log(typeof count);

//     // console.log('hello');
//     console.log(count);
//     if(count === 10){
//         clearInterval(clrInterval);
//         console.log('successfully cleared');
//     }   
// }, 1500)




// const day = document.getElementsByClassName('day')
// // console.log(day);
// // console.log(day[0]);

// for(let i = 0; i < day.length - 3; i++){
//     // console.log(day[i]);
//     // console.log(day[i].innerText);
//     console.log(day[i].innerText = 'Weekdays');    
// }




// let counter = document.getElementById('counter')
// // console.log(counter);
// console.log(typeof parseInt(counter));
// let counterStartValue = parseInt(counter.innerText)

// const counterStop = document.getElementById('counterStop')
// // console.log(counterStop);
// console.log(typeof parseInt(counterStop));
// let counterStopValue = parseInt(counterStop.innerText)

// console.log(counterStartValue, counterStopValue);

// let display = document.querySelector('#textNode')

// const clear = setInterval(()=> {
//     counterStartValue++;
//     console.log(counterStartValue);

//     if(counterStartValue === counterStopValue){
//         clearInterval(clear);
//         alert('cleared')
        
//         setTimeout(()=> {
//             display.textContent = 'text changed'
//             // document.body.appendChild(display)
//         }, 3000)
//     }
//     counter.textContent = counterStartValue
// }, 1000)
