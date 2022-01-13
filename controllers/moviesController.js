const express = require('express')
const router = express.Router()



const Movie = require('../models/movies')






///////////////////////////////INDEX/////////////////////////////////////
router.get('/' , (req, res) => {
    Movie.find({}, (error, allMovies) => {
        console.log(allMovies);
        res.render('index.ejs', {
            movies: allMovies
        })
    })
})
///////////////////////////////NEW/////////////////////////////////////
router.get('/new', (req, res) => {
    res.render('new.ejs')
})

///////////////////////////////SHOW/////////////////////////////////////
router.get('/:id', (req, res) => {
   Movie.findById(req.params.id, (error, foundMovies) => {
        console.log(foundMovies)
        res.render('show.ejs', {movies: foundMovies})
   })
})

///////////////////////////////POST/////////////////////////////////////
router.post('/', (req, res) => {
  Movie.create(req.body, (error, createdMovie) => {
            if(error) {
            console.log(error)
            res.send(error)
            } else {
                console.log(createdMovie)
                res.redirect('/movies')
              }
  })
})

///////////////////////////////DELETE/////////////////////////////////////
router.delete('/:id', (req, res) => {
    Movie.findByIdAndDelete(req.params.id, (error, deletedMovie) => {
        if(error){
            console.log(error)
            res.send(error)
        }else{
            console.log(deletedMovie)
            res.redirect('/movies')
        }
    })
})

///////////////////////////////EDIT/////////////////////////////////////
router.get('/:id/edit', (req, res) => {
  Movie.findById(req.params.id, (error, foundMovies) => {
        if(error){
            console.log(error)
            res.send(error)
        } else {
             res.render('edit.ejs', {movies: foundMovies})
          }
  })
})



router.put('/:id', (req, res) => {
    console.log(req.body)
    Movie.findByIdAndUpdate(req.params.id, req.body, {new: true}, (error, updatedMovie)=>{
        if(error) {
            console.log(error)
            res.send(error)
        }else {
            console.log(updatedMovie)
            res.redirect('/movies')
        }
    })

})

router.put('/:id/like', (req, res) => {

  Movie.findByIdAndUpdate(req.params.id, {$inc: {like: +1} }, (error, likeMovie) => {
        if (error) {
            console.log(error)
            res.send(error)
        }else {
          Movie.findById(req.params.id, (error, likeMovie) =>{
            res.render('show.ejs', {movies: likeMovie})

          })

        }
    })
})

module.exports = router
