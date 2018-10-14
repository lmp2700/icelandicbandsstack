const mongoose = require('mongoose');

const icelandicBandsSchema = mongoose.Schema({
        name: {type: String, required: true},
        song: {type: String, required: true},
    },
);
module.exports = mongoose.model('Bands', icelandicBandsSchema)
