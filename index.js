const express = require('express')
const app = express()
const port = 3000
const {getMovie,getMovies} = require('./db-utils')


app.get('/getMovies/:pageNum/:str?', (req, res) => {
    console.log('req.params ',req.params)
    const {pageNum,str} = req.params
    let movies = getMovies(pageNum ,str)

  res.json({movies})
})

app.get('/getMovie/:movieName', (req, res) => {
    console.log('req.params ',req.params)
    const {movieName} = req.params
    let movie = getMovie(movieName)
    res.json({movie})
})

app.listen(port, () => {
  console.log(`app listening at http://localhost:${port}`)
})