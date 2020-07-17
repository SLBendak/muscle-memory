//5 variables of different types
//string
//number
//array
//boolean
//object (4 different key/value pairs) [string], [number], [array], [boolean]

var string = "This is my string!";
console.log(string);

var number = 67;
console.log(number);

var array = [1, 2, 3, 4];
console.log(array);

var boolean = false;
console.log(boolean);

var object = {
    str: "obj string",
    num: 33,
    objArray: [1, 2, 3, 4],
    objBoolean: false
}
console.log(object);

// make 10 different functions
// one of your fuctions need to pass in an array
//one of your functions need to pass in a callback
//one of yout functions need to pass in a string
//..object
//..boolean

function myArray(array){
    let result = [];

    for (let i = 0; i < array.length; i++){
        let bike = array[i];

        if (bike.length> 7) {
            result.push(bike);

        }

    }
    return result;
}
console.log(myArray(array));


function removeFromArray(callback, array){
    let result = callback(array)[0];
    console.log(result);
}

// DOM review

const sectionOne = document.getElementById('section-one');
console.log(sectionOne);
const sectionTwo = document.getElementById('section-two');
console.log(sectionTwo);
const sectionThree = document.querySelector('#section-three');
console.log(sectionThree);
const sectionFour = document.querySelector('#section-four');
console.log(sectionFour);
const sectionFive = document.querySelector('#section-five');
console.log(sectionFive);

sectionOne.textContent = "Car";
sectionTwo.textContent = "Bike";
sectionThree.textContent = "Boat";
sectionFour.textContent = "Scooter";
sectionFive.textContent = "plane";

const paraOne = document.querySelector('.paragraph-one');
console.log(paraOne);
paraOne.textContent = "Land boat";

const paraTwo = document.querySelector('.paragraph-two');
paraTwo.textContent = "2 wheel land jet-ski";
console.log(paraTwo);

const paraThree = document.querySelector('.paragraph-three');
paraThree.textContent = "Water car";
console.log(paraThree);

const paraFour = document.querySelector('.paragraph-four');
paraFour.textContent = "also 2 wheels";
console.log(paraFour);

const paraFive = document.querySelector('.paragraph-five');
paraFive.textContent = "Sky bus";// Adding text
console.log(paraFive);

const containerSix = document.createElement('div');// How to add div
containerSix.classList.add('container-six');// How to add class
console.log(containerSix);

const sectionSix = document.createElement('h2');


sectionSix.setAttribute('id', 'section-six');// How to add id
sectionSix.textContent = "Walking";

console.log(sectionSix);

const paraSix = document.createElement('p');
paraSix.classList.add('paragraph-six');
paraSix.textContent = " like standing still, but with momentum";

console.log(paraSix);

const body = document.querySelector('body');
console.log(body);

body.appendChild(containerSix);
containerSix.appendChild(sectionSix);
sectionSix.appendChild(paraSix);

// start
const containerSeven = document.createElement('div');
containerSix.classList.add('container-seven');

const sectionSeven = document.createElement('h2');

sectionSeven.setAttribute('id', 'section-seven');

sectionSeven.textContent = "Running";

const paraSeven = document.createElement('p');

paraSeven.classList.add('paragraph-seven');
paraSeven.textContent = "Like walking while falling forward";

body.appendChild(containerSeven);
containerSeven.appendChild(sectionSeven);
sectionSeven.appendChild(paraSeven);
//end

