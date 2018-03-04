const mongoose = require('mongoose')

const RecipeSchema = new mongoose.Schema({
  title: String,
  description: String,
  ingredients: String,
  instructions: String,
  imageUrl: String,
  cookbook: String,
  origindate: String
})

mongoose.model('Recipe', RecipeSchema);

module.exports = mongoose
