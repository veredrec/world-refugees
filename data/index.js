var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/world-refugees');

mongoose.Promise = Promise;

module.exports.World = require('./refugees-data');
