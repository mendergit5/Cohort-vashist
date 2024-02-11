// Basic typescipt code
const x: number = 1;
console.log(x);

//Typescript provides you some basic types number, string, boolean, null, undefined

// 1. To specify types to function argument
// function greet(firstname){      <- this throws error as firstname type is defined
//     console.log(firstname);
// }

// example 1
function greet(firstname :string){
    console.log(firstname);
}
greet("Vashist");
//example 2
function sum(a:number, b:number){
    console.log(a+b);
}
sum(1,3);

// specify return tyoe to function
function mul(a:number, b:number) : number{
    return a+b;
}
console.log(mul(1,3));

// function callback with specify return type
function runafterSpecifySecond(fn: () => void){
    setTimeout(fn,1000);
}
runafterSpecifySecond(() => {
    console.log("hi there");
})


// arrow function in lates ECMASCRIPT version
const greetfunction = (name: string) => `Hello, ${name}!`;

// interfaces
interface User
{
    firstName: string;
    lastName: string;
    email: string;
    age: number;
}

function isLegal(user:User)
{
    if(user.age>18){
        return true;
    }
    else{
        return false;
    }
}

isLegal({
    firstName:"vashist",
    lastName:"vyas",
    age:20,
    email:"vyasvashist@gmail.com"
})

// Implementing interfaces
interface Person {
    name: string;
    age: number;
    greet(phrase: string): void;
}

class Employee implements Person {
    name: string;
    age: number;

    constructor(n: string, a: number) {
        this.name = n;
        this.age = a;
    }

    greet(phrase: string) {
        console.log(`${phrase} ${this.name}`);
    }
}
const e = new Employee("vashist",12);
console.log(e.greet("hi there"));

// difference between types and interfaces is, interface can be used with class.
// types is used for union, intersection of different types

//types union example
type StringOrNumber = string | number;

function printId(id: StringOrNumber) {
  console.log(`ID: ${id}`);
}

printId(101); // ID: 101
printId("202"); // ID: 202


// Array declaration in TS
let z : number[]; // z is array of numbers

// example where maxValue function returns max value in input array
let i : number;
let max : number = 0;
function maxValue(values:number[]){
    for(i = 0; i < values.length; i++){
        if(values[i] > max)
            max = values[i];
    }
}

maxValue([2,5,9]);
