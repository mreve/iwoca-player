import React, { Component } from 'react';
import './App.css';

import PlayerContainer from './PlayerContainer.js';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <div className="App-logo">♬</div>
          <h1 className="App-title">iwoca player</h1>
        </header>
        <div className="App-container">
          <PlayerContainer />
        </div>
      </div>
    );
  }
}

export default App;
