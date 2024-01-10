// Node.js program to demonstrate
// the fs.readFile() method

// Include fs module
var fs = require('fs');

// Use fs.readFile() method to read the file
fs.readFile('Demo.txt', 'utf8', function (err, data) {

    // Display the file content
    console.log(data);
});

console.log('readFile called');
for(var i = 0; i < 10000000000; i++);