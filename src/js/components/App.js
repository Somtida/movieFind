var React = require('react');
var AppActions = require('../actions/AppActions');
var AppStore = require('../stores/AppStore');
var SearchForm = require('./SearchForm');
var MovieResults = require('./MovieResults');

function getAppState() {
  return {
    movies: AppStore.getMovieResults()
  }
}


var App = React.createClass({
  getInitialState: function() {
    return getAppState();
  },

  componentDidMount: function() {
    AppStore.addChangeListener(this._onChange);
  },

  componentWillUnmount: function() {
    AppStore.removeChangeListener(this._onChange);
  },

  _onChange() {
    this.setState(getAppState());
  },

  render(){
    // console.log(this.state.movies);
    let movieResults = this.state.movies == '' ? '' : <MovieResults movies={this.state.movies} />;
    return(
      <div className="container">
        <div className="jumbotron">
          <div className="row">
            <div className="col-md-8 col-md-offset-2">
              <SearchForm />
            </div>
          </div>
        </div>
        <div className="row">
          <div className="text-center">
            {movieResults}
          </div>
        </div>
      </div>
    )
  }
})

module.exports = App;
