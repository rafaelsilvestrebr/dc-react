import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import { Routes } from './routes.js';

import { Link } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <hr />

        <div className="title">
          <h1>React Router demo</h1>
          <Link to="/list"><button>Show the List</button></Link>
        </div>
      </div>
    );
  }
}

//export default App;
module.exports = {
  Title,
  List
};
