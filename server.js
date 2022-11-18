const express = require('express');
require('./config/mongoose')
const route = require("./config/routes.js");
const app = express();
app.use(express.urlencoded({
  extended: true
}));
app.use(route);
app.set("view engine", "ejs");
app.listen(5000, () => {
  console.log("server is on port 5000");
})