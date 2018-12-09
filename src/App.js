import React, { Component } from 'react';
import NavBar from './NavBar/NavBar';
import logo from './logo_transparent.png';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <NavBar />
        <header className="App-header">
          <img src={logo} className="App-logo" alt="functions(&fitness);" />
        </header>
      </div>
    );
  }
}

export default App;
