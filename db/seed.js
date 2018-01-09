const mongoose = require('./connection');
const seedData = require('./seedData.json');

const Recipe = mongoose.model('Cookbook', RecipeSchema);

mongoose.Promise = Promise;

Recipe.remove({}).then(_ => {
    console.log('Dropped the Cookbook database');
    Recipe.collection.insert(seedData).then(seededEntries => {
        console.log(seededEntries);
        mongoose.connection.close();
    });
});
