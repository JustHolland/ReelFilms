const mongoose = require('mongoose')
const {Schema, model} = mongoose

const moviesSchema = new Schema({
  title: String,
  description: String,
  img: String,
  tags: String,
  like: Number,
  watched: String,
  userCreated: String,
  userReviews: String,
})

const Movie = model('Movie', moviesSchema)



module.exports = Movie
