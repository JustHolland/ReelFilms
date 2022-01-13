const mongoose = require('mongoose')
const {Schema, model} = mongoose

const moviesSchema = new Schema({
  title: String,
  description: String,
  img: String,
  tags: String,
  like: Number,
  watched: Boolean,
  userCreated: Boolean,
})

const Movie = model('Movie', moviesSchema)



module.exports = Movie
