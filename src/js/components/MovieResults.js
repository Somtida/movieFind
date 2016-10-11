var React = require('react');
var AppActions = require('../actions/AppActions');
var AppStore = require('../stores/AppStore');

var MovieResults = React.createClass({
  render(){
    return(
      <div>
        <h3 className="text-center">Results</h3>
        { this.props.movies.map((movie, i) => {
            return <Movie movie={movie} key={i} />
          })
        }
      </div>
    )
  }

})

module.exports = MovieResults;
