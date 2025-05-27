function myFunc(theObject) {
  theObject.make = "Toyota";
}

const myCar = {
  make: "Honda",
  model: "Accord",
  year: "1998",
};

console.log(myCar.make);
console.log(myCar.model);

myFunc(myCar);
console.log(myCar.make);

const square = function (number) {
  return number * number;
};

console.log(square(4)); // 16

const factorial = function fac(n) {
  return n < 2 ? 1 : n * fac(n - 1);
};

console.log(factorial(3));  // 6

function map(f, a) {
  const result = new Array(a.length);
  for (let i = 0; i < a.length; i++) {
    result[i] = f(a[i]);
  }
  return result;
}

const numbers = [0, 1, 2, 5, 10];
const cubedNumbers = map(function (x) {
  return x * x * x;
}, numbers);
console.log(cubedNumbers);

let num = 0;
// let theObject;

let myfunc;
if (num === 0) {
    myfunc = function (theObject) {
        theObject.make = "Toyota";
    };
}

function factorial1(n) {
    if (n === 0 || n === 1) {
        return 1;
    }
    return n * factorial1(n-1);
}

console.log(factorial1(1));
console.log(factorial1(2));
console.log(factorial1(3));
console.log(factorial1(4));
console.log(factorial1(5));