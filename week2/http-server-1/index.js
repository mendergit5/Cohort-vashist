var express = require('express');
// const bodyParser = require('body-parser');
var app = express();
const port = 3000;

// Middleware to parse JSON and URL-encoded data
app.use(express.json());
app.use(express.urlencoded({extended: true}));

// Route to handle POST requests
app.post('/endpoint', (req, res) => {
  const name = req.body['name'];
  console.log('Received data:', name);
  res.send(name);
});

app.post('/conversation', (req, res) => {
  const bodyData = req.body['name'];
  console.log(req.headers["authorization"]);
  res.send('Hi Conversation');
})

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
