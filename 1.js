function comment1() {
  // This is a one line JavaScript comment
  console.log("Line comments");
}
comment1();

function comment2() {
  /* This is a one line JavaScript comment */
  console.log("Block comments");
}
comment2();

function comment3() {
  /*This comment spans multiple lines. Notice
    that we don't need to end the comment until we're done */
  console.log("multiple-line comments");
}
comment3();

function comment4(x) {
  console.log("Hello " + x /* insert the value of x */ + "!");
}
comment4(5);

// Identifiers

const decl = 1; // variable declaration
function fn() {} // function declaration
const obj = { key: "value" }; // Object keys
// Class declaration
class C {
  #import = "value"; // private property
}
lbl: console.log(1); // Label

const longString =
  "This is a very long string which needs \
to wrap across multiple lines because \
otherwise my code is unreadable.";
console.log(longString);

const longStringadd =
  "This is a very long string which needs " +
  "to wrap across multiple lines because " +
  "otherwise my code is unreadable.";

  console.log(longStringadd);
