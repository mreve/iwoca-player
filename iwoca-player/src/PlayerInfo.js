import React, { Component } from 'react';
import './PlayerInfo.css';

import TimerUtils from './TimerUtils.js';

class PlayerInfo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isPlaying: false,
      timeRemaining: 0,
      timer: null,
    };
    this._onClick = this._onClick.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    if (!this.state.isPlaying && nextProps.isSelected) {
      this.setState({
        isPlaying: true,
      });
    } else if (this.state.isPlaying && !nextProps.isSelected) {
      this.setState({
        isPlaying: false,
      });
    }
    if (this.state.timer != null) {
      clearInterval(this.state.timer);
    }
  }

  render() {
    return (
      <div className="PlayerInfo-contaier">
        <div className="PlayerInfo-button">
          <button
            type="button"
            onClick={this._onClick}>
            {this.state.isPlaying ? '❚❚' : '▶'}
          </button>
        </div>
        <div>
          {
            this.state.isPlaying || this.state.timeRemaining > 0
              ? 'Time remaining: ' +
                  TimerUtils.getDurationString(
                    this.state.timeRemaining,
                  )
              : null
          }
        </div>
      </div>
    );
  }

  _onClick() {
    if (!this.state.isPlaying) {
      const timeRemaining = this.state.timeRemaining > 0
        ? this.state.timeRemaining
        : this.props.duration;
      this.setState({
        timeRemaining: timeRemaining,
        isPlaying: true,
        timer: setInterval(
          this._intervalFunction.bind(this),
          1000,
        ),
      });
    } else {
      clearInterval(this.state.timer);
      this.setState({
        isPlaying: false,
        timer: null,
      });
    }
    this.props.onSelectSong(this.props.title);
  }

  _intervalFunction() {
    const timeRemaining = this.state.timeRemaining - 1;
    if (timeRemaining < 0) {
      this.setState({
        isPlaying: false,
        timeRemaining: 0,
      });
      clearInterval(this.state.timer);
      this.props.onSongEnded();
    } else {
      this.setState({
        timeRemaining: timeRemaining,
        isPlaying: true,
      });
    }
  }
}

export default PlayerInfo;
