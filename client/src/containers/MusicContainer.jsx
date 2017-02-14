var React = require('react');
var MusicList = require('../compnents/MusicList')
var MusicDetails = require('../compnents/MusicDetails')
var MusicSelector = require('../compnents/MusicSelector')

var MusicContainer = React.createClass({
  getInitialState: function() {
    return { music: [], focusGenre: null }
  },
  componentDidMount: function() {
   var url = 'https://itunes.apple.com/gb/rss/topsongs/limit=20/json';
   var request = new XMLHttpRequest();
   request.open('GET', url);
   request.onload = function() {
    if(request.status === 200) {
      var data = JSON.parse(request.responseText);
      // console.log(data.feed.entry[0]['im:name'].label)
      this.setState({ music: data.feed.entry }) 

    }
   }.bind(this)
   request.send();
  },
  setFocusCountry: function(genre) {
    this.setState({focusGenre: genre});
  },
  render: function() {
    // console.log(this.state.music[0])
    return (
      <div>
        <h3> MusicContainer </h3>
        <MusicSelector genre={this.state.music} selectGenre={this.setFocusCountry}/>
        <MusicList music={this.state.music}/>
        <MusicDetails genre={this.state.focusGenre}/>
      
      </div>  
      );
  }
});

module.exports = MusicContainer;