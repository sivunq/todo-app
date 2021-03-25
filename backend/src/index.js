let express = require('express');
let app = express();
let router = require('./routes/routes.js')
let mongoose = require('mongoose');
let bodyParser = require('body-parser');

 
// Connection URL
const url = 'mongodb://localhost:27017';
 
// Database Name
const dbName = 'todoappmanager';
 
// Use connect method to connect to the server
mongoose.connect(url, function(err, db) {
  console.log("Connected successfully to server");
});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/',router);
// app.use(express.json());
// app.use(express.urlencoded)
app.listen(4011);