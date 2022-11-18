const express = require('express');
const appFunctions = require("../controller/appFunctions.js");
const route = express.Router();
route.get('/', appFunctions.homePage);
route.get('/feed', appFunctions.feedFunction);
route.get('/feed/:id', appFunctions.showFunction);
route.get('/feed/edit/:id', appFunctions.editFunction);
route.post('/add/post', appFunctions.addFunction);
route.post('/update/post/:id', appFunctions.updateFunction);
route.get('/feed/delete/:id', appFunctions.deleteFunction);

module.exports = route;