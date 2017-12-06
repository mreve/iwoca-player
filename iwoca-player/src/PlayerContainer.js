import React, { Component } from 'react';

import SongListItem from './SongListItem.js';
import './PlayerContainer.css';

class PlayerContainer extends Component {
  render() {
    let songs = this.getSongs()
    songs = songs.map(
      song => (
        <SongListItem
          title={song.title}
          artist={song.artist}
          duration={song.duration}
        />
      ),
    );
    return (
      <div className="PlayerContainer-songlist">
        {songs}
      </div>
    );
  }

  getSongs() {
    return [
      {
        title: 'The Right Pair Of Shoes',
        artist: 'Marylin Monroe',
        duration: 180,
      },
      {
        title: 'Promise Everything, Deliver Nothing',
        artist: 'Napoleon Bonaparte',
        duration: 169,
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
        duration: 196,
      },
    ];
  }
}

export default PlayerContainer;
