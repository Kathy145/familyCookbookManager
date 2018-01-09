const mongoose = require('cookbook)

const RecipeSchema = new mongoose.Schema({
  title: String,
  description: String,
  ingredients: String,
  instructions: String,
  origindate: Date
})

const Recipe = mongoose.model('Recipe', RecipeSchema)

module.exports = mongoose
