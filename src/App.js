import React, { Component } from 'react';
import './App.css';
import BallAnimation from './BallAnimation';
import LogoImage from './LogoImage';

class App extends Component {
  render() {
    const w = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
    const companies = {
      'autodesk': 'Autodesk',
      'docker': 'Docker',
      'associatedPress': 'Associated Press',
      'time': 'Time, Inc.',
      'syfy': 'SyFy'
    };
    return (
      <div className="App">
        <div className="header">
          <div className="headertext">
            <h1>david worley</h1>
            <h3>I can help you create amazing online experiences.</h3>
          </div>
          <BallAnimation width={ w } height={ 500 }/>
        </div>
        <div className="logos">
          <h4>Companies I've worked with</h4>
          {
            Object.entries(companies).map(([key, value], i) => {
              return (
                <LogoImage key={ i } companyName={ key } alt={ value } />
              );
            })
          }
        </div>
      </div>
    );
  }
}

export default App;
