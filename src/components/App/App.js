import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Gallery of my life</h1>
        </header>
        <br/>
        <p>Gallery goes here</p>
        <img alt="Goat in mountain" src="images/goat_small.jpg"/>
        <img alt="Crystal clear water" src="images/ocean.jpg"/>
        <img alt="Country road in the fall" src="images/fall.jpg"/>
      </div>
    );
  }
}

export default App;
