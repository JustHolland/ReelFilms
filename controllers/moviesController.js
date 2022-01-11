const express = require('express')
const router = express.Router()



const Movies = require('../models/movies')

///////////////////////////////INDEX/////////////////////////////////////
router.get('/' , (req, res) => {
        res.render('index.ejs', {
        })
    })

///////////////////////////////NEW/////////////////////////////////////
router.get('/new', (req, res) => {
    res.render('new.ejs')
})

///////////////////////////////SHOW/////////////////////////////////////
router.get('/:id', (req, res) => {
   Movies.findById(req.params.id, (error, foundMovies) => {
        console.log(foundMovies)
        res.render('show.ejs', {movies: foundMovies})
   })
})

///////////////////////////////POST/////////////////////////////////////
router.post('/', (req, res) => {
  Movies.create(req.body, (error, createdMovies) => {
            if(error) {
            console.log(error)
            res.send(error)
            } else {
                console.log(createdMovies)
                res.redirect('/movies')
              }
  })
})

///////////////////////////////DELETE/////////////////////////////////////
router.delete('/:id', (req, res) => {
    Movies.findByIdAndDelete(req.params.id, (error, deletedMovies) => {
        if(error){
            console.log(error)
            res.send(error)
        }else{
            console.log(deletedMovies)
            res.redirect('/movies')
        }
    })
})

///////////////////////////////EDIT/////////////////////////////////////
router.get('/:id/edit', (req, res) => {
  Movies.findById(req.params.id, (error, foundMoviess) => {
        if(error){
            console.log(error)
            res.send(error)
        } else {
             res.render('edit.ejs', {movies: foundMoviess})
          }
  })
})



router.put('/:id', (req, res) => {
    console.log(req.body)
    Movies.findByIdAndUpdate(req.params.id, req.body, {new: true}, (error, updatedMovies)=>{
        if(error) {
            console.log(error)
            res.send(error)
        }else {
            console.log(updatedMovies)
            res.redirect('/movies')
        }
    })

})

router.put('/:id/like', (req, res) => {

  Movies.findByIdAndUpdate(req.params.id, {$inc: {like: +1} }, (error, likeMovies) => {
        if (error) {
            console.log(error)
            res.send(error)
        }else {
          Movies.findById(req.params.id, (error, likeMovies) =>{
            res.render('show.ejs', {movies: likeMovies})
          })

        }
    })
})

module.exports = router
