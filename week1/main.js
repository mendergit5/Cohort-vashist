// Summary : var, let, const, if else, for, arrays, objects

// var, let, const
const a = 1;
console.log(a);

let firstName = "vashist"
let age = 26;
let isMarried = true;

console.log(firstName+age)
console.log(isMarried)

//if else
if (isMarried==true){
    console.log(firstName + "isMarried");
}
else
    console.log(firstName+"NotMarried");

//loops
for(var i = 0,answer=0; i<6;i++){
    answer += i;
    console.log(answer);
}

// arrays
personarrays = ["vyas", "vashist","mender"];

console.log(personarrays);
console.log(personarrays[0]);
console.log(personarrays[1]);
console.log(personarrays[2]);

const ages = [21,22,23,24,25];

for(let i = 0; i<ages.length;i++){
    if(ages[i]%2 == 0)
        console.log(ages[i]);
}


//objects

const users1 = {
    firstName : "vashist",
    gender : "male"
}

const users2 = {
    firstName : "divya",
    gender : "female"
}
console.log(users1["firstName"])
console.log(users2["firstName"])

// array of objects

const allusers = [{
    firstName : "divya",
    gender : "female",
    metadata:{
        age : 26,
        address : "telangana"
    }
}, {
    firstName : "vashist",
    gender : "male",
    metadata:{
        age : 26,
        address : "telangana, hyderabad"
    }
}]

for(var i = 0; i < allusers.length; i++){
    if (allusers[i]["gender"] == "male")
        console.log(allusers[i]["firstName"]);
}

//functions

function sum(a, b){
    const sum = a + b;
    return sum;
}

console.log(sum(4,5));

// function callbacks - passing functions as value to other functions

function result_sum(num1, num2,fntocall) {
    let result = num1 + num2;
    fntocall(result);
    return result;
}

function displayResult(data) {
    console.log("Result of the sum is : " + data);
}

function displayResultPassive(data) {
    console.log("Sum's result is : " + data);
}

// You are only allowed to call one function after this
// How will you displayResult of a sum
result_sum(2,6,displayResult);
result_sum(2,6,displayResultPassive);

//example 2

function calculate(a,b,fnctntocall){
    return fnctntocall(a,b);
}

function add(a,b){
    return a + b;
}


function sub(a,b){
    return a - b;
}


console.log("sum is = " + calculate(5,4,sum));
console.log("sub is = " + calculate(5,4,sub));


// example 3 - settimeout, setinterval
function greet(){
    console.log("Hello");
}
setTimeout(greet,3*1000); // greet function will callled after 3 secs

setInterval(greet,1*1000); // greet function will callled after every interval of 1 secs
