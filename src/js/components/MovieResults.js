var React = require('react');
var AppActions = require('../actions/AppActions');
var AppStore = require('../stores/AppStore');
var Movie = require('./Movie');

var MovieResults = React.createClass({
  render(){
    // console.log('MovieResults',this.props.movies);
    return(
      <div>
        <h3 className="text-center">Results</h3>
        { this.props.movies.map((movie, i) => {
            // console.log('movie',i,movie);
            return <Movie movie={movie} key={i} />
          })
        }
      </div>
    )
  }

})

module.exports = MovieResults;
