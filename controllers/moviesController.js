const express = require('express')
const router = express.Router()



const Movie = require('../models/movies')

router.get('/seed', async (req, res) => {
  const newMovie =
    [
      {
        title: 'ATHLETE A ',
        description: 'follows the intrepid reporters, brave gymnasts, and legal team that put Larry Nassar behind bars and exposed decades of abuse at USA Gymnastics.',
        img: 'https://i.imgur.com/koFWVhV.png',
        genre: 'sports, true crime' ,
        like: 1,
        watched: false
      }, {
        title: 'Beans',
        description: 'A small pile of beans. Buy more beans for a big pile of beans.',
        img: 'https://cdn3.bigcommerce.com/s-a6pgxdjc7w/products/1075/images/967/416130__50605.1467418920.1280.1280.jpg?c=2',
        genre: 5,
        like: 1,
        watched: false
      }, {
        title: 'Beans',
        description: 'A small pile of beans. Buy more beans for a big pile of beans.',
        img: 'https://cdn3.bigcommerce.com/s-a6pgxdjc7w/products/1075/images/967/416130__50605.1467418920.1280.1280.jpg?c=2',
        genre: 5,
        like: 1,
        watched: false
      },
    ]

  try {
    const seedItems = await Movie.create(Movies)
    res.send(seedItems)
  } catch (err) {
    res.send(err.message)
  }
 })

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
