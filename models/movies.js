const mongoose = require('mongoose')
const {Schema, model} = mongoose

const moviesSchema = new Schema({
  title: String,
  description: String,
  img: String,
  genre: String,
  like: Number,
  watched: Boolean,
})

const Movies = model('Movies', moviesSchema)



module.exports = Movies
