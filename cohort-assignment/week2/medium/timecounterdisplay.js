function startTime() {
    const date = new Date();
    console.log(date.toLocaleTimeString());
    setTimeout(function() {startTime()}, 1000);
}

startTime();