document.body.style.backgroundColor = 'black';
document.body.style.color = 'white';


// const h2Tag = document.getElementsByTagName('h2');
// // console.log(h2Tag);

// // console.log(h2Tag[0]);
// // console.log(h2Tag[2]);

// for(let i = 0; i < h2Tag.length; i++){
//     console.log(h2Tag[i]);

//     h2Tag[i].style.color = 'yellow'
// }



// const h2Tag = document.getElementById('id1');
// console.log(h2Tag);

// document.getElementById('id1').style.fontSize = "1.5rem";
// h2Tag.style.backgroundColor = 'blue'
// h2Tag.style.border = "1px solid red";
// h2Tag.style.width = '150px';
// h2Tag.style.height = '150px';
// h2Tag.style.padding = '10px'


// const tag = document.getElementById('id3');
// console.log(tag);


// const clsName = document.getElementsByClassName('cls')
// console.log(clsName);
// console.log(clsName[0]);


// const tagName = document.querySelector('h2');
// console.log(tagName);

// const idName = document.querySelector('#id1');
// console.log(idName);

// const clsName = document.querySelector('.cls');
// console.log(clsName);



// const tagName = document.querySelectorAll('h2');
// console.log(tagName);

// const idName = document.querySelectorAll('#id1');
// // console.log(idName);

// const clsName = document.querySelectorAll('.cls');
// console.log(clsName);


// const idTag = document.querySelector('#id1')
// // console.log(idTag.innerText);
// console.log(idTag.innerHTML);


// const divElem = document.querySelector('#example');
// divElem.setAttribute("class", "clsName1");
// divElem.setAttribute('style', 'color: red');
// divElem.setAttribute('id', 'example2');
// console.log(divElem);

// divElem.removeAttribute("id")
// divElem.removeAttribute("style")



// const divId = document.querySelector('#example')
// console.log(divId.innerText);

// divId.innerText = "hello Im injected from JavaScript"
// console.log(divId.innerText);


const h1Tag = document.createElement('h1');
const text = document.createTextNode('Hello! I am injected from JS');
h1Tag.appendChild(text);
console.log(h1Tag);
document.body.appendChild(h1Tag)




