
// ------ TODO: --> event (e) <-------------


    // const divTag = document.querySelector('#div1');
    // divTag.addEventListener('click', () => {
    //     console.log(divTag);
    // })


// const divTag = document.querySelector('#div1');
// divTag.addEventListener('click', (event) => {
//     console.log(event);
//     // console.log(event.target);
//     // console.log(event.type);
//     // console.log(event.pointerType);

//     // console.log(divTag);
//     event.preventDefault();
// })

/* TODO: 
    event:
    NOTE:-
        form -> 'submit' -> default functionality,  redirects and submits the form information and refreshes. 

        button -> 'click'

        a tag with href -> redirects to the url - default
*/


// Note:- Chainging syntax is shown in below   TODO: 
// document.querySelector('form')
//         .addEventListener('submit', () => {
//             console.log('abcd');
//             alert('abcd')
//         }) 



// TODO: --> e.preventDefault() -> It blocks the default behaviour of the element.

// const form = document.querySelector('form');
// form.addEventListener('submit', (e) => {
//     e.preventDefault();
//     console.log("Hello, Default is prevented");
// })


// const aTag = document.querySelector('a[href]')
// // console.log(aTag);
// aTag.addEventListener('click', (e) => {
//     e.preventDefault();
//     console.log(e.target);
//     console.log('default is prevented');
// })


// -----------------------------------------------------------------------
/*------ Practise 01 ---------- */

    // const form = document.querySelector('form')

    // const obj = {}
    //     form.addEventListener('submit', (e) => {
    //         e.preventDefault();
    //         // console.log(form);

    //         const nameVal = document.getElementById('name').value
    //         const ageVal = document.getElementById('age').value

    //         // console.log(nameVal);
    //         // console.log(ageVal);

    //         obj.name = nameVal,
    //         obj.age = ageVal

    //         console.log(obj);

    // // displaying the object in webPage
    //         const displayAreaTag = document.querySelector('#displayTag');
    //         displayAreaTag.textContent = (function(){
    //             return `${obj.name} ${obj.age}`
    //         })()
    //     })


// ---------------------------------------------------------------------


/*TODO:  NOTE: ---> Not discussed in this class.  TODO: 
    e.target.value ---> explanation TODO: 
        The e.target.value syntax is commonly used in event handlers in JavaScript, where e represents the event object passed to the function. This object contains information about the event, and target is a property of this object that refers to the element that triggered the event. The value property of target then gives you the current value of that element, which is particularly useful for input fields.
 */
// TODO:        ---- End ------

// -------------------------------------------------------------------------
/* 
// TODO: <!-- Event bubbling -->
            1) The defualt value of bubbling is false
            2) bubbling is went from down to top, like a 3) bubble or baloon in real world
            4) .addEventListener('click', () => {}, false), syntax for bubbling
*/
// const gpTag = document.querySelector('#grandParent');
// const pTag = document.querySelector('#parent');
// const cTag = document.querySelector('#child');


// gpTag.addEventListener('click', () => {
//     console.log('grand parent tag is triggerd: number 3');
// })

// pTag.addEventListener('click', () => {
//     console.log('parent tag is triggerd: number 2');
// }, false)

// cTag.addEventListener('click', () => {
//     console.log('Child tag is triggerd: number 1 ');
// }, false)



// -------------------------------------------------------------------------------

/* 
    TODO:
            Event capturing:-
            1) The default value is true
            2) The capture is done in top to bottom. 
            3) like you have drop a stone from a terros it will reach to earth.
*/

// const gpTag = document.querySelector('#grandParent');
// const pTag = document.querySelector('#parent');
// const cTag = document.querySelector('#child');

// gpTag.addEventListener('click', () => {
//     console.log('grand parent tag is triggerd: number 3');
// }, true)

// pTag.addEventListener('click', () => {
//     console.log('parent tag is triggerd: number 2');
// }, true)

// cTag.addEventListener('click', () => {    
//     console.log('Child tag is triggerd: number 1');
// }, true)


/* TODO: 
        e.stopPropagation()  --> to stop the propagation of bubbling & capturing 
*/


// const gpTag = document.querySelector('#grandParent');
// const pTag = document.querySelector('#parent');
// const cTag = document.querySelector('#child');

// gpTag.addEventListener('click', (e) => {
//     e.stopPropagation();
//     console.log('grand parent tag is triggerd: 1');
// }, false)

// pTag.addEventListener('click', (e) => {
//     e.stopPropagation();
//     console.log('parent tag is triggerd: 2');
// }, false)

// cTag.addEventListener('click', (e) => {
//     e.stopPropagation();
//     console.log('Child tag is triggerd: 3');
// }, false)







// const input2 = document.querySelectorAll('#form');
// input2.forEach((val) => {
//     // console.log(val);
//     // console.log('hello');

//     val.addEventListener('focus', (e) => {
//         console.log('hello');      
//         console.log(e.target.value); 
//     }, true)
// })


document.getElementById('name')
        .addEventListener('input', function(e){
            console.log(e.target.value);
        })