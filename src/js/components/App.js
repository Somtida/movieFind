var React = require('react');
var AppAcitons = require('../actions/AppActions');
var AppStore = require('../stores/AppStore');
var SearchForm = require('./SearchForm');

var App = React.createClass({
  render(){
    return(
      <div className="container">
        <div className="jumbotron">
          <div className="row">
            <div className="col-md-8 col-md-offset-2">
              <SearchForm />

            </div>
          </div>

        </div>
      </div>
    )
  }
})

module.exports = App;
