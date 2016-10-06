var React = require('react');
var AppActions = require('../actions/AppActions');
var AppStore = require('../stores/AppStore');
var SearchForm = require('./SearchForm');

function getAppState() {
  return {

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
