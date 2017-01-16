import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import backGround from './backGround.jpg';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
            <h2>Studio Time</h2>
        </div>
        
        <img src={backGround} className= "App-backGround" alt= "backGround"/>
        
      </div>
    );
  }
}

export default App;
