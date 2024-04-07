/* 
    Events are very important

    1) click
    2) dblclick
    3) focus
    4) blur
    5) scroll
    6) keyup/ keydown/ keypress
    7) change
    8) mouseover
    9) mouseenter
    10) mouseexit
*/
document.body.style.backgroundColor = 'black';
document.body.style.color = 'white';


/* TODO: --> addEventListener  */
// -----------------------------------------------------------------------------------
// const demoId3Tag = document.getElementById('demoId3');
//      console.log(demoId3Tag);

// //TODO: Note: --> addEventlistener(<name_of_the_event>, cb)
// // demoId3Tag.addEventListener('click', () => {
// //     console.log('demo id 3 Tag');
// //     demoId3Tag.innerText = "This is clicked"
// // }); 

// demoId3Tag.addEventListener('click', function(){
//     demoId3Tag.innerText = "This has been clicked again";
// })

// demoId3Tag.addEventListener('click', function(){
//     demoId3Tag.innerText = "This has been clicked 3rd Time";
// })
// -----------------------------------------------------------------------------------

// const pId = document.getElementById('pId1');

// let count = 0;
// function handleClick(){
//     pId.innerText = "The First P tag has been clicked";

//     count++;
//     console.log(count);

//     if(count >= 5){
//         console.log('hello');
//         pId.style.backgroundColor = 'red';
//         pId.style.color = 'yellow'
//     }
//     else{
//         pId.style.backgroundColor = 'blue';
//         pId.style.color = "aqua"
//     }
// }

// pId.addEventListener('click', handleClick)

// -----------------------------------------------------------------------------------


/* TODO: TODO: ----> change <---- */

// const inputIDTag = document.getElementById('input1');
// console.log(inputIDTag);
// inputIDTag.addEventListener('change', function(){
//     console.log("I changed");
//     // alert("The text should be changed")    
// })

/* TODO: TODO: ---> focus <------ */


// const inputIDTag = document.getElementById('input1');
// inputIDTag.addEventListener('focus', function(){
//     console.log("I am focusing on the input now ");    
// })



// const inputIDTag = document.getElementById('input1');
// inputIDTag.addEventListener('blur', function(){
//     console.log("I am focusing on the input now ");    
// })

// -----------------------------------------------------------------------------------------

// Note: TODO: --> This is the 2 way to add Event listener (onclick)

/* TODO: TODO: ---> onclick in html */

// function clickTest(){
//     console.log('hello! I have been clciked');
// }

// function testdbl(){
//     console.log('dobule clicked');
// }

// Why we are not prefer these onclick() & ondblclick(), etc...,


// -----------------------------------------------------------------------------------
// Note TODO: -> This is the 3rd way to add Event listener

// document.getElementById('bigBox').addEventListener('click', function(){
//     console.log('I have been clicked');
// })


// document.getElementById('bigBox')
//  .onclick = function(){
//             console.log('this is the 3rd way');
//         }
       