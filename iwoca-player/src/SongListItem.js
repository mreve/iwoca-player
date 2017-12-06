import React, { Component } from 'react';
import './SongListItem.css';

import TimerUtils from './TimerUtils.js';
import PlayerInfo from './PlayerInfo.js';

class SongListItem extends Component {
  render() {
    var songClasses = 'SongListItem-song';
    if (this.props.isSelected) {
      songClasses += ' SongListItem-songSelected';
    }
    return (
      <div className={songClasses}>
        <div>
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
        <div className="SongListItem-playerInfo">
          <PlayerInfo
            duration={this.props.duration}
            isSongSelected={this.props.isSelected}
            onSelectSong={this.props.onSelectSong}
            onSongEnded={this.props.onSongEnded}
          />
        </div>
      </div>
    );
  }
}

export default SongListItem;
