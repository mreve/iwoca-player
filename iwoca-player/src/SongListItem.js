import React, { Component } from 'react';
import './SongListItem.css';

class SongListItem extends Component {
  render() {
    return (
      <div className="SongListItem-song">
        <div className="SongListItem-title">
          Title: {this.props.title}
        </div>
        <div className="SongListItem-artist">
          Artist: {this.props.artist}
        </div>
        <div className="SongListItem-duration">
          Duration: {this.props.duration}
        </div>
      </div>
    );
  }
}

export default SongListItem;
