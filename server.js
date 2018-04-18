const express = require('express');
const bodyParser = require('body-parser');

/*
CONTROLLER FOR HANDLING INCOMING REQUESTS
*/
// create express app
const app = express();

// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }))

// parse requests of content-type - application/json
app.use(bodyParser.json())

// define a simple route
app.get('/', (req, res) => {
    res.json({"message": "Success response!"});
});

// Require Todos routes
require('./app/routes/todos.routes.js')(app);

// listen for requests
app.listen(3005, () => {
    console.log("Server is listening on port 3005");
});

/*
DATABASE CONNECTION
*/
// Configuring the database
const dbConfig = require('./config/database.config.js');
const mongoose = require('mongoose');

mongoose.Promise = global.Promise;

// Connecting to the database
mongoose.connect(dbConfig.url)
  .then(() => {
    console.log("Successfully connected to the database");
  }).catch(err => {
      console.log('Could not connect to the database. Exiting now...');
      process.exit();
  });
