var React = require('react');
var AppAcitons = require('../actions/AppActions');
var AppStore = require('../stores/AppStore');

var SearchForm = React.createClass({
  render: function(){
    return(
      <div className="search-form">
        <h1 className="text-center">Search For A Movie</h1>
        <form action="">
          <div className="form-group">
            <input type="text" className="form-control" placeholder="Enter a Movie Title..." />
            <button className="btn btn-primary btn-block">Search Movie</button>
          </div>
        </form>
      </div>
    )
  }
})

module.exports = SearchForm;
