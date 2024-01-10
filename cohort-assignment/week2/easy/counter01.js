counter = 0;

function count_every_second(){
    counter++;
    console.log(counter);
}

setInterval(count_every_second,1000);