var iter = 0;
function counter() {
    console.log(iter++);
    setTimeout(counter, 1000);
}

counter();