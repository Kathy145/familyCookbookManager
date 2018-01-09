const mongoose = require('../models/recipes');
const Recipes = mongoose.model('Recipes');
const Router = require('express').Router();

Router.get('/', (req, res) => {
    res.render('app-welcome');
});

module.exports = Router;
