import React, { Component } from 'react';
import './App.css';
import BallAnimation from './BallAnimation';

class App extends Component {
  render() {
    const w = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
    return (
      <div className="App">
        <div className="header">
          <div className="headertext">
            <h1>David Worley</h1>
            <h3>I can help you create amazing online experiences.</h3>
          </div>
          <BallAnimation width={ w } height={ 500 }/>
        </div>
      </div>
    );
  }
}

export default App;
