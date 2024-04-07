document.body.style.backgroundColor = 'black'
document.body.style.color = 'white'


/* 
    Events -> onclick
*/

let generateOTP = () => {
    let otp = '';
    let numbers = '0123456789';
    for(let i = 0; i < 6; i++){
        // console.log(numbers.charAt);
        otp = otp + numbers.charAt((Math.floor(Math.random() * numbers.length)));
    }
    // console.log(numbers.charAt(9));
    // console.log(numbers.charAt(8));
    // console.log('' + 9);
    // console.log('' + 8);
    // console.log(otp);

    let elem = document.createElement('h3');
    let text = document.createTextNode(otp);
    // console.log(text);
    elem.appendChild(text);
    // console.log(elem);
    let generatedOTP = document.body.appendChild(elem)
}
// console.log(generateOTP());

// alert(generateOTP())

document.querySelector('#OTP').addEventListener('click', generateOTP)
