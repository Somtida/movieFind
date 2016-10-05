var React = require('react');
var AppAcitons = require('../actions/AppActions');
var AppStore = require('../stores/AppStore');
var SearchForm = require('./SearchForm');

var App = React.createClass({
  render: function(){
    return(
      <div className="container">
        <div className="jumbotron">
          <SearchForm />

        </div>
      </div>
    )
  }
})

module.exports = App;
