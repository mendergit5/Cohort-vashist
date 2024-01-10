// Include fs module
var fs = require('fs');

// Use fs.readFile() method to read the file
fs.readFile('Demo.txt', 'utf8', function (err, data) {
    let newStr = data.replace(/\s+/g, ' ');

    // console.log(newStr);
    // Display the file content
    fs.writeFile("Demo.txt", newStr.trim(), (err) => {
        if (err)
          console.log(err);
        else {
          console.log("File written successfully\n");
          console.log("The written has the following contents:");
          console.log(fs.readFileSync("Demo.txt", "utf8"));
        }
      });
    // console.log(data);
});
console.log('readFile called');