const test = {
    prop: "42",
    func: function() {
        return this.prop;
    },
};

console.log(test.func());

function getThis() {
    return this;
}

const obj1 = {name: "obj1"};
const obj2 = {name: "obj2"};

obj1.getThis = getThis;
obj2.getThis = getThis;

console.log(obj1.getThis());
console.log(obj2.getThis());

// Constructors

function C() {
    this.a = 37;
}
let o = new C();
console.log(o.a);

function C2() {
    this.a = 37;
    return {a: 38};
}

o = new C2();
console.log(o.a);