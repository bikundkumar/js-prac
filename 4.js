const buttonA = document.querySelector("#button_A");
const headingA = document.querySelector("#heading_A");

let count = 1;

buttonA.onclick = () => {
        buttonA.textContent = "Try again!";
        headingA.textContent = `${count} clicks so far`;
        count += 1;
}

myName = "John";

function logName() {
    console.log(myName);
}

logName();

var myName;

var myName = "Chris";
console.log(myName);
var myName = "Bob";
console.log(myName);

let myName1 = "John";
console.log(myName1);
myName1 = "Boss";
console.log(myName1);

let myAge = 17;
let dolphinGoodbye = "So long and thanks for all the fish";
let iAmAlive = true;

let myNameArray = ["Bob", "King", "John"];
let myNumberArray = [23, 444, 33, 46];

console.log(myNameArray[0], myNameArray[1], myNameArray[2]);
console.log(myNumberArray[2]);

// Objects

let dog = { name: "Spot", breed: "Dalmatian" };
console.log(dog.name);
console.log(dog.breed);