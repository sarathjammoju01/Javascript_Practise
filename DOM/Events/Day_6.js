
/*TODO: ---------> mouseenter ---- event ------------ */

// const bigBoxId = document.querySelector('#bigBox')
//     console.log(bigBoxId);
    
//     let count = 0;
// bigBoxId.addEventListener('mouseenter', () => {
//     // console.log('The mouse is enter in the bigBox');

//     let elem = document.createElement('p')
//     // console.log(elem);
//     let text = document.createTextNode('mouse is entered in my compound');
//     // console.log(text);
//     elem.appendChild(text);
//     // console.log(elem);
//     bigBoxId.appendChild(elem);

//     count++;
//     console.log(count);

//     /* 
//         TODO: ---> Task

//         1) the count should be displayed in a webpage
//     */
// })


/* TODO: -------> mouseout ------ event ------------ */

// const bigBoxId = document.querySelector('#bigBox')
// bigBoxId.addEventListener('mouseout', () => {
//     console.log('mouse out from the compound');

//     /* 
//         TODO:   Task --> 

//         1) create h3 element
//         2) add some text to h3 element
//         3) That h3 element should be displayed in webpage. 
//         4) When the event is trgieer
//     */
// })


// ----------------------------------------------------------------------------------------------------
/* TODO: 
        I need to add a event for 
            <h1 name = "heading1"> hello </h1>
        There is no id & class??
        How to select this type elements.

        This type we have seen mostly in input tag's.
*/
// const h1Tag = document.querySelector('h1[name="heading1"]');
// console.log(h1Tag);

// ----------------------------------------------------------------------------------------------------
// const nestedElemSelection = document.querySelector('#randomId #r2');
// console.log(nestedElemSelection);
// nestedElemSelection.style.color = 'blue'   


// ------------------- selecting checkbox --------------------------------------------------------
// I need to check the checkbox is checked or not.

// const inputCheckbox = document.querySelector('[name = checkbox1]');
// //                          or                    //
// // const inputCheckbox = document.querySelector('input[type = "checkbox"]');
// console.log(inputCheckbox);
// console.log(inputCheckbox.checked);


// const checkBox = document.querySelectorAll('[checked]');
// console.log(checkBox);

// -------------------------------------------------------------------------------------------

/* 
    I want to add a click event listener to all the checked check boxes.
*/

const checkBox = document.querySelectorAll('[checked]')
console.log(checkBox);

// checkBox.addEventListener('click', () => {
//     console.log('I am clicked');
// })        // ----> Throws an error?

//NOTE: TODO: ---->  .addEventListener is a function, that we apply on the Element. But in above scenario we apply on the NodeList.

for(let checkBoxElem of checkBox){
    console.log(checkBoxElem);
    checkBoxElem.addEventListener('click', () => {
        console.log('clicked');
    })}