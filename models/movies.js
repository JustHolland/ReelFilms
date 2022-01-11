const mongoose = require('mongoose')
const {Schema, model} = mongoose

const moviesSchema = new Schema({
    name: String,
    description: String,
    img: String,
    price: Number,
    quantity: Number,
})

const Movies = model('Movies', moviesSchema)



module.exports = Movies
