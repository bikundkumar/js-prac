function exampleFunction() {
    const x = "declared inside function";
    console.log("Inside function");
    console.log(x);
}

exampleFunction();

// console.log(x); // throw error 

const x1 = "declared outside function";

exampleFunction1();

function exampleFunction1() {
    console.log("Inside function");
    console.log(x1);
}
console.log("Outside function");
console.log(x1);