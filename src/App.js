import React, { Component } from 'react'
import Palette from './palette';
import seedColors from './seedcolor';
import './App.css';

class App extends Component {
  render() {
    return (
      <div>
        <Palette palette={seedColors[4]}/>
      </div>
    )
  }
}

export default App;
