const express = require('express')
const router = express.Router()
const app = express()
const methodOverride = require('method-override')
require('dotenv').config()
const PORT = process.env.PORT

const mongoose = require('mongoose')

const mongoURI = process.env.MONGODB_URI
const db = mongoose.connection


mongoose.connect(mongoURI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}, () => {
    console.log('database connected')
})

db.on('error', () => {console.log('ERROR: ', error)})
db.on('connected', () => {console.log('mongo connected')})
db.on('disconnected', () => {console.log('mongo disconnected')})


////////////////////////////////MIDDLEWRE/////////////////////////////////////

app.use(express.urlencoded({extended: true}))


app.use(methodOverride('_method'))
app.use(express.static('public'))



////////////////////////////////CONTROLLERS/////////////////////////////////////


//import
const moviesController = require('./controllers/moviesController')

app.use('/movies', moviesController)

app.get('/', (req, res) => {
    res.redirect('/movies')
})

app.listen(PORT, () => {
  console.log(`Server is listening on PORT: ${PORT}`)
})
