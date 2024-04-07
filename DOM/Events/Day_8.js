

/* NOTE: TODO: -- event deligation --- */

/* 
    event deligation:-
                    It is a phenomenon which happens due to your bubbling & capturing.

                    Deligation means delay in time.

        
    Event delegation is a technique in JavaScript for handling events efficiently. Instead of adding an event listener to each individual element, event delegation involves adding a single event listener to a parent element. This listener then manages all events that bubble up from child elements. It leverages the fact that most events bubble up through the DOM tree, allowing you to catch events at a higher level rather than at the individual element level. This technique is particularly useful for handling events on dynamically added elements or when you want to improve performance by reducing the number of event listeners.
*/

// document.querySelector('#sc')
//         .addEventListener('click', (e) => {
//             const textVal = e.target.innerText;
//             console.log(textVal);
// })

// document.querySelector('#pa').addEventListener('click', function(e){
//     const paperText = e.target.innerText;
//     console.log(paperText);
// })

// document.querySelector('#shoppingList')
//         .addEventListener('click', (e) => {
//             // console.log(e.target);
//             console.log(e.target.innerText);

//             // window.print();
// })

// document.querySelector('button')
//     .addEventListener('click', (e) => {
//         window.print();
// })

/* 
    Explanation:- when we click on empty space in the web page, the shoppingList will be triggered. It leads to an complicate.

    When we click on the empty space the shopping List will triggered and we got the output as 
        The content inside the shoppingList.

        But we dont want this type complication. How to solve this????????????
 */

        



// document.querySelector('#shoppingList')
//         .addEventListener('click', (e) => {
//             // console.log(e.target.id);
//             // const ID = e.target.id;
//             // var url = window.location.href;
//             // console.log(url);
            
//             // location.href = url + " /" + ID

//             window.location.href = window.location.href + "/" + e.target.id;

//         //    window.print();
//         })


    /* 
       NOTE: ----- key event TODO: TODO: 
    */

// document.querySelector('#form')
//         .addEventListener('keyup', (e) =>{
//             console.log('keyup'+ e.target.value);
//         })

// document.querySelector('#form')
//         .addEventListener('keydown', (e) =>{
//             console.log('keydown' , e.target.value);
//         })
        

// TODO: TODO: --> convert the input value to upperCase letters
// document.querySelector('#form')
//         .addEventListener('keyup', (e) =>{
//             console.log(e.target.value);
//             // console.log(e.key);
//     // e.key gives the value of the input box

//             e.target.value = e.target.value.toUpperCase()
// })

/* 
    TODO: TODO: keypress ----

    document.addEventListener('keypress', function(event) {
    // The event object contains info about the key pressed
    console.log(`You pressed the "${event.key}" key`);
}); 

*/

// const emptySpace = document.querySelector('#displayText');
// document.querySelector('#form')
//         .addEventListener('keyup', (e) => {

//         console.log(e.key);

//     // TODO: checking the key
//         // if(e.key === 'Enter'){
//         //     emptySpace.innerText = e.target.value;
//         //     return;
//         // }

//         console.log(e.target.value);
//         e.target.value = e.target.value.toUpperCase();

//     // TODO: checking the keycode Enter = 13;
//         if(e.keyCode === 13){
//             console.log(e.keyCode);
//             emptySpace.innerText = e.target.value;
//             return;
//         }
//     })

/* 
    stopImmediatePropagation:-

    previously we had seeen about -- stopPropagation. It deals with child & parent -> event propagating.

    Where as stopImmediatePropagation is basically super set of propagation.

    stopImmediatePropagation = stopPropagation + it even blocks the other events on the same level.


*/

// document.querySelector('#form')
//         .addEventListener('click', (e) => {
//             e.stopImmediatePropagation();
//             // the above line --> e.stopImmediatePropagation is prevent the rest of the event's
//             console.log('click');
//         })
// document.querySelector('#form')
//         .addEventListener('click', (e) => {
//             // e.stopImmediatePropagation();
//             console.log('click2');
//         })
// document.querySelector('#form')
//         .addEventListener('click', (e) => {
//             // e.stopImmediatePropagation();
//             console.log('click3');
//         })



/* 
    NOTE: TODO: TODO:

    creating our own HTML through JavaScript
*/

// const tempPTag = document.createElement('p');
// const tempaTag = document.createElement('a');
// const tempDivTag = document.createElement('div');
// console.log(tempPTag);
// console.log(tempaTag);
// console.log(tempDivTag);


// tempPTag.innerText = 'paragraph text';
// tempaTag.innerText = 'anchor tag';
// tempDivTag.innerText = 'div tag';

// document.body.appendChild(tempDivTag)
// document.body.appendChild(tempPTag)
// document.body.appendChild(tempaTag)

// console.log(document.body);

// const btn = document.createElement('button');
// const btnText = document.createTextNode('I am present');
// btn.appendChild(btnText);
// console.log(btn);
// document.body.appendChild(btn)