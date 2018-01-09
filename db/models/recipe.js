const mongoose = require('cookbook')

const RecipeSchema = new mongoose.Schema({
  title: String,
  description: String,
  ingredients: String,
  instructions: String,
  origindate: String
})

const Recipe = mongoose.model('Recipe', RecipeSchema)

module.exports = mongoose
