const fs = require('fs');

let data = "This is a file containing a collection of books.";

fs.writeFile("Demo.txt", data, (err) => {
  if (err)
    console.log(err);
  else {
    console.log("File written successfully\n");
    console.log("The written has the following contents:");
    console.log(fs.readFileSync("Demo.txt", "utf8"));
  }
});