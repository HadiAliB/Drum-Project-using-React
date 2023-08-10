import React, { Component } from 'react';
import './App.css';

class DrumMachine extends Component {
  componentDidMount() {
    window.addEventListener('keydown', this.playSound);
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.playSound);
  }

  playSound = (e) => {
  const audio = document.querySelector(`audio[data-key="${e.key}"]`);
  const drumPad = document.querySelector(`.drum-pad[data-key="${e.key}"]`);
  if (!audio) return;

  audio.currentTime = 0;
  audio.play();
  drumPad.classList.add('playing');
}


  removeTransition = (e) => {
    if (e.propertyName !== 'transform') return;
    e.target.classList.remove('playing');
  }

  render() {
    return (
      <div className="drum-machine">
        <div className="drum-pad" data-key="A" onClick={() => this.playSound({ key: 'A' })}>A</div>
        <div className="drum-pad" data-key="S" onClick={() => this.playSound({ key: 'S' })}>S</div>
        <div className="drum-pad" data-key="D" onClick={() => this.playSound({ key: 'D' })}>D</div>
        <div className="drum-pad" data-key="F" onClick={() => this.playSound({ key: 'F' })}>F</div>
        <div className="drum-pad" data-key="G" onClick={() => this.playSound({ key: 'G' })}>G</div>
        <div className="drum-pad" data-key="H" onClick={() => this.playSound({ key: 'H' })}>H</div>
        <div className="drum-pad" data-key="J" onClick={() => this.playSound({ key: 'J' })}>J</div>
        <div className="drum-pad" data-key="K" onClick={() => this.playSound({ key: 'K' })}>K</div>
        <div className="drum-pad" data-key="L" onClick={() => this.playSound({ key: 'L' })}>L</div>

        <audio data-key="A" src="Heater-1.mp3"></audio>
        <audio data-key="S" src="Heater-2.mp3"></audio>
        <audio data-key="D" src="Heater-3.mp3"></audio>
        <audio data-key="F" src="Heater-4_1.mp3"></audio>
        <audio data-key="G" src="Heater-6.mp3"></audio>
        <audio data-key="H" src="Cev_H2.mp3"></audio>
        <audio data-key="J" src="Dcs_Oh.mp3"></audio>
        <audio data-key="K" src="Kick_n_Hat.mp3"></audio>
        <audio data-key="L" src="RP4_KICK_1.mp3"></audio>
      </div>
    );
  }
}

export default DrumMachine;
