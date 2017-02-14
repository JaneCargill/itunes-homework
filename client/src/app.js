var React = require('react');
var ReactDOM = require('react-dom');

var MusicContainer = require('./containers/MusicContainer')

window.onload = function(){
  ReactDOM.render(
    <MusicContainer />,
    document.getElementById('app')
  );
}
