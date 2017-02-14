var React = require('react');

var MusicDetails = React.createClass({
  render: function() {
    return (
      <div type="1" className="music-details">
        <p>Artist: {this.props.artist} </p>
        <p>Song Title: {this.props.title} </p>
        <img src={this.props.image}></img>

      </div>

      );
  }
});

module.exports = MusicDetails;