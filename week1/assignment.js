// Q2. Calculate the time it takes between a setTimeout call and the inner function actually running

// var performance = window.performance;
// var t0 = performance.now();

var start = new Date().getTime();

function greet(){
    console.log("Hello");
}

setTimeout(greet,3*1000);


var end = new Date().getTime();
var time = end - start;

console.log(time);
