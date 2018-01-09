const mongoose = require(mongoose)


var CookbookSchema = new mongoose.Schema({
    name: String,
    recipes: Array,
    origindate: Date
});


module.exports = mongoose
