const express = require("express");
const bodyParser = require("body-parser");
const koneksi = require("./config/database");
const app = express();
const port = process.env.PORT || 2000;

//parse request data
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

//define root route
app.get("/", (req, res) => {
  res.send('Welcome to Waste Bank Database of TrasHub');
  });
  
//import data routes
const dataRoutes = require("./src/routes/data.route");
const Data = require("./src/models/data.model");

//create data routes
app.use('/api/data', dataRoutes);

// listen to the port
app.listen(port, () => console.log(`Server running at port ${port}`));
