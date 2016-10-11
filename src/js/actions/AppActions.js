var AppDispatcher = require('../dispatcher/AppDispatcher');
var AppConstants = require('../constants/AppConstants');

var AppActions = {
  searchMovies(movie) {
    // console.log('searching for movie '+ movie.title);
    AppDispatcher.handleViewAction({
      actionType: AppConstants.SEARCH_MOVIES,
      movie: movie
    });
  },
  receiveMovieResult(movies) {
    // console.log(movies);
    AppDispatcher.handleViewAction({
      actionType: AppConstants.RECEIVE_MOVIE_RESULTS,
      movies: movies
    });
  },

}

module.exports = AppActions;
