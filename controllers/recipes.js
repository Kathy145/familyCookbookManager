const mongoose = require('../db/connection');
const Recipe = mongoose.model('Recipe');
const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.render('app-welcome');
});

router.get('/recipes', (req, res) => {
    res.render('recipes')
});

router.get('/cookbook', (req, res) => {
    res.render('cookbook');
});

router.get('/recipes/:name', (req, res) => {
    Recipe.findOne({ name: req.params.name }).then(recipe => {
        res.render('recipes-show', { recipe });
    });
});

router.post('/recipes', (req, res) => {
    Recipe.create(req.body.recipe).then(recipe => {
        res.redirect(`/recipes/${recipe.name}`);
    });
});

router.delete('/recipes/:name', (req, res) => {
    Recipe.findOneAndRemove({ name: req.params.name }).then(() => {
        res.redirect('/recipes');
    });
});

router.put('/recipes/:name', (req, res) => {
    Recipe.findOneAndUpdate({ name: req.params.name }, req.body.recipe, {
        new: true
    }).then(recipe => {
        res.redirect(`/recipes/${recipe.name}`);
    });
});

module.exports = router;
