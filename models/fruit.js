const mongoose = require('mongoose')

// Make a Schema
const fruitSchema = new mongoose.Schema({
  name: { type: String, required: true },
  color: { type: String, required: true },
  readyToEat: Boolean
})

// Make A Model From The Schema

const Fruit = mongoose.model('Fruit', fruitSchema)
// Export the Model for Use in the App

module.exports = Fruit
