const express = require('express')
const router = express.Router();

const Bands = require('../models/icelandicBands')

// Create a route for create. Commit.
// Have the form on new post to the create route. Commit.
// Connect express to mongo. Commit.
// In the create route, have mongoose create the model based on what is in req.body. Commit.
// Create a page for index which displays all the models created by the app so far. Commit.
// Have the create route redirect to the index page after the model has been created. Commit.
// Link to the show page for each model in the index page. Commit.


router.get('/', (req, res, next) => {
    Bands.find({}, (err, allBands) => {
        if(err) {
            console.log(err)
        } else {
            console.log(allBands)
            res.render('index.ejs', {bands: allBands});
        }
    });
});

router.get('/new', (req, res, next) => {
    res.render('new.ejs')
})

router.post('/', (req, res, next) => {
    console.log('create a band')
    Bands.create(req.body, (err, createdBand) => {
        if(err) {
            console.log(err)
        } else {
            console.log(createdBand);
            res.redirect('/bands')
        } 
    });
});

router.get('/:id', (req, res, next) => {
    console.log('this is the show page')
    Bands.findById(req.params.id, (err, foundBands) => {
        res.render('show.ejs', {
            bands: foundBands
        });
    });
});

router.put('/:id', (req, res) => {
    Bands.findByIdAndUpdate(req.params.id, req.body, (err, updatedBands) => {
      res.redirect('/bands')
    });
});

module.exports = router;