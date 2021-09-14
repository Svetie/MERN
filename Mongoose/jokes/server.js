const express = require("express");
const app = express();
const port = 8000;

// tell the app to parse json
app.use( express.json() );
// gather form data
app.use( express.urlencoded({ extended: true }) );

//**************************Check names of config and routes files******************* */
// import the config file 
require("./server/config/mongoose.config")
// import the routes
// pass the app object to the routes folder to have the features of app
require("./server/routes/joke.route")(app);



// this needs to below the other code blocks
app.listen( port, () => console.log(`Listening on port: ${port}`) );