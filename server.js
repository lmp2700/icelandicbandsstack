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

const bandsController = require('./controllers/icelandbands');

// router.use('/controllers', controller)
app.use(bodyParser.urlencoded({extended: false}));
app.use(methodOverride('_method'));
// router.use(morgan("short"))

app.use('/bands', bandsController);

app.listen(3000);

