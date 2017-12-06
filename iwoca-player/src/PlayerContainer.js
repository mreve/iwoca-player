import React, { Component } from 'react';

import SongListItem from './SongListItem.js';
import './PlayerContainer.css';

class PlayerContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedSongKey: null,
    };
    this._onSelectSong = this._onSelectSong.bind(this);
    this._onSongEnded = this._onSongEnded.bind(this);
  }

  render() {
    let songs = this.getSongs()
    songs = songs.map(
      song => (
        <SongListItem
          title={song.title}
          artist={song.artist}
          duration={song.duration}
          key={song.title}
          isSelected={song.title === this.state.selectedSongKey}
          onSelectSong={() => this._onSelectSong(song.title)}
          onSongEnded={this._onSongEnded}
        />
      ),
    );
    return (
      <div className="PlayerContainer-songlist">
        {songs}
      </div>
    );
  }

  _onSelectSong(songKey: string) {
    this.setState({
      selectedSongKey: songKey,
    });
  }

  _onSongEnded() {
    this.setState({
      selectedSongKey: null,
    });
  }

  getSongs() {
    return [
      {
        title: 'The Right Pair Of Shoes',
        artist: 'Marylin Monroe',
        duration: 10,
      },
      {
        title: 'Promise Everything, Deliver Nothing',
        artist: 'Napoleon Bonaparte',
        duration: 129,
      },
      {
        title: 'Fool!',
        artist: 'Cleopatra',
        duration: 399,
      },
      {
        title: 'Veni, Vidi, Vici',
        artist: 'Julius Caesar',
        duration: 536,
      },
      {
        title: 'To Be Or Not To Be',
        artist: 'William Shakespeare',
        duration: 11196,
      },
    ];
  }
}

export default PlayerContainer;
