const mongoose = require(mongoose)

const Cookbook = mongoose.model('Cookbook', CookbookSchema);


var CookbookSchema = new mongoose.Schema({
    name: String,
    recipes: Array,
    origindate: Date
});


module.exports = mongoose
