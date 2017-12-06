import React, { Component } from 'react';
import './SongListItem.css';
import TimerUtils from './TimerUtils.js';

class SongListItem extends Component {
  render() {
    return (
      <div className="SongListItem-song">
        <div className="SongListItem-title">
          {this.props.title}
        </div>
        <div className="SongListItem-subtitle">
          <div className="SongListItem-artist">
            {this.props.artist}
          </div>
          <div className="SongListItem-separator">
           {'·'}
          </div>
          <div className="SongListItem-duration">
            {TimerUtils.getDurationString(this.props.duration)}
          </div>
        </div>
      </div>
    );
  }
}

export default SongListItem;
