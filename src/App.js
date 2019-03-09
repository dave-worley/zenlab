import React, { Component } from 'react';
import './App.css';
import BallAnimation from './BallAnimation';

class App extends Component {
  render() {
    return (
      <div className="App">
        <BallAnimation width={ 1600 } height={ 500 }/>
      </div>
    );
  }
}

export default App;
