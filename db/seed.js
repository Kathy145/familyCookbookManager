var mongoose = require('../models/candidate');
var seedData = require('./seedData');

var Cookbook = mongoose.model('Cookbook');

Cookbook.remove({}).then(function() {
    Cookbook.collection.insert(seedData).then(function() {
        process.exit();
    });
});

