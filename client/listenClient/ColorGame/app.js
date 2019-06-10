import React, { Component } from 'react';
import FloodGame from './FloodGame';

class ColorGame extends Component {
  constructor(props) {
    super(props);
    this.state = {
      gameOn: false
    }
  }

  render() {
    return (
      <div>
        <FloodGame width="5" height="5"/>
      </div>
    );
  }
}

export default ColorGame;