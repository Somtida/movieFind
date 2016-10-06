var AppAcctions = require('../actions/AppActions');

module.exports = {
  searchMovies: function(movie) {
    $.ajax({
      url: `http://www.omdbapi.com/?s=${movie.title}`,
      dataType: 'json',
      cache: false,
      success: function() {
        AppActions.receiveMovieResult(data.Search);
      }.bind(this),
      error: function(xhr, status, err) {
        alert(err);
      }.bind(this)
    })
  }
}
