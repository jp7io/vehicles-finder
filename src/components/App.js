import React, { Component } from 'react';
import logo from '../styles/logo.svg';
import '../styles/App.css';

class App extends Component {
  render() {
    return (
      <div>
        <header>
          <img src={logo} alt="Vehicles Finder" />
          <h1>Vehicles Finder</h1>
        </header>
      </div>
    );
  }
}

export default App;
