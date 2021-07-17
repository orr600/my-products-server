const moviesJSON = require('./movies.json')

const getMovies = (page, txt) => {
    let movies = moviesJSON.movies;
    console.log('moviesName ', page, txt);
    if(!txt){
        return movies
        .map(movie => movie.title)
        .slice((page - 1) * 10, (page - 1) * 10 + 10);
    }
    var moviesName = movies
      .map(movie => movie.title)
      .filter(val => val.toLowerCase().startsWith(txt.toLowerCase()))
      .slice((page - 1) * 10, (page - 1) * 10 + 10);
    console.log('moviesName ', moviesName);
    return moviesName;
  };
const getMovie = name => {
    let movies = moviesJSON.movies;
    
    var movie = movies.find(movie => movie.title === name);
    console.log('movie ', movie);
    return movie;
}; 

module.exports={
    getMovies, getMovie
}