const mongoose = require('./connection');
const seedData = require('./recipeData.json');

const Recipe = mongoose.model('Recipe');

mongoose.Promise = Promise;

Recipe.remove({}).then(_ => {
    console.log('Dropped the Recipe database');
    Recipe.collection.insert(seedData).then(seededEntries => {
        console.log(seededEntries);
        mongoose.connection.close();
    });
});
