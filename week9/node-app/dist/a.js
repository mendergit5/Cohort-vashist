"use strict";
// Basic typescipt code
const x = 1;
console.log(x);
//Typescript provides you some basic types number, string, boolean, null, undefined
// 1. To specify types to function argument
// function greet(firstname){      <- this throws error as firstname type is defined
//     console.log(firstname);
// }
// example 1
function greet(firstname) {
    console.log(firstname);
}
greet("Vashist");
//example 2
function sum(a, b) {
    console.log(a + b);
}
sum(1, 3);
// specify return tyoe to function
function mul(a, b) {
    return a + b;
}
console.log(mul(1, 3));
// function callback with specify return type
function runafterSpecifySecond(fn) {
    setTimeout(fn, 1000);
}
runafterSpecifySecond(() => {
    console.log("hi there");
});
// arrow function in lates ECMASCRIPT version
const greetfunction = (name) => `Hello, ${name}!`;
function isLegal(user) {
    if (user.age > 18) {
        return true;
    }
    else {
        return false;
    }
}
isLegal({
    firstName: "vashist",
    lastName: "vyas",
    age: 20,
    email: "vyasvashist@gmail.com"
});
class Employee {
    constructor(n, a) {
        this.name = n;
        this.age = a;
    }
    greet(phrase) {
        console.log(`${phrase} ${this.name}`);
    }
}
const e = new Employee("vashist", 12);
console.log(e.greet("hi there"));
function printId(id) {
    console.log(`ID: ${id}`);
}
printId(101); // ID: 101
printId("202"); // ID: 202
// Array declaration in TS
let z; // z is array of numbers
let i;
let max = 0;
function maxValue(values) {
    for (i = 0; i < values.length; i++) {
        if (values[i] > max)
            max = values[i];
    }
}
maxValue([2, 5, 9]);
