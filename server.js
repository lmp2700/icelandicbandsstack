// There should be at least 11 commits for this part.
const express = require('express')
const app = express();
const mongoose = require('mongoose')
port = 3000;
const bodyParser = require('body-parser');
require('./db/db');
const methodOverride = require('method-override');
require('./models/icelandicbands')

const morgan = require('morgan');
// const controller = require('')

const bandsController = require('./controllers/controller');

// router.use('/controllers', controller)
app.use(bodyParser.urlencoded({extended: false}));
app.use(methodOverride('_method'));
// router.use(morgan("short"))

app.use('/bands', bandsController);

app.listen(3000);

// Create a route for create. Commit.
// Have the form on new post to the create route. Commit.
// Connect express to mongo. Commit.
// Create the schema/model for your model. Commit.
// In the create route, have mongoose create the model based on what is in req.body. Commit.
// Create a page for index which displays all the models created by the app so far. Commit.
// Have the create route redirect to the index page after the model has been created. Commit.
// Create a show page. Commit.
// Link to the show page for each model in the index page. Commit.