function myOwnSetTimeout(duration){
    let p = new Promise(function(resolve){
        setTimeout(function(){
            resolve("foo");
        },duration);
    });
    return p;
}

function callback(){
    console.log(p);
}


var p = myOwnSetTimeout(1000);
console.log(p);
p.then(callback);
// console.log(p);
// callback();


