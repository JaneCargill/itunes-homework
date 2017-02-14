var React = require('react');
var MusicDetails = require('./MusicDetails')

var MusicList = React.createClass({
  render: function() {
    // console.log(this.props.music[0].im:name)
    var musicNodes = this.props.music.map(function(song, index) {
      return (
        <MusicDetails artist={song['im:artist'].label} title={song['im:name'].label} image={song['im:image'][0].label} key={index}>
        </MusicDetails>
        );
    });
    

    return (
      <div className="music-list">
        <h3>Songs and their Chart Positions</h3>
        {musicNodes}
      </div>

      );
  }
});

module.exports = MusicList;