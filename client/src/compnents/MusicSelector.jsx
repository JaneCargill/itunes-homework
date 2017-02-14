var React = require('react');
var MusicDetails = require('./MusicDetails')

var MusicSelector = React.createClass({
    getInitialState: function() {
      return { selectedIndex: undefined };
    },
    handleChange: function(event) {
      var newIndex = event.target.value;
      this.setState({selectedIndex: newIndex});
      this.props.selectGenre(this.props.genre[newIndex])
    },
  render: function() {
    // console.log(this.props.music[0].im:name)
    var musicNodes = this.props.genre.map(function(song, index) {
      return <option value={index} key={index}>{song.category.attributes.label}</option>
      
      });
      return (
        <select id="genre" value={this.state.selectedIndex} onChange={this.handleChange}>
          {musicNodes}
        </select>
      );
    
  }
});

module.exports = MusicSelector;

