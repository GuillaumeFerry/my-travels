// src/App.js
import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import Travel from "./Travel";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <Travel
          destination="Rio de Janeiro"
          country="Brazil"
          photo="https://images.unsplash.com/photo-1531514910867-8d1ca7505f55?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=249682f7a6ec90cc6f7bb61ac8f30a0e&dpr=1&auto=format&fit=crop&w=1000&q=80&cs=tinysrgb"
          distance="9000km"
        />
        <hr/>
        <Travel
          destination="Tokyo"
          country="Japan"
          photo="https://images.unsplash.com/photo-1536098561742-ca998e48cbcc?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=04cb1349ddef3da346cb4565d58c4d80&dpr=1&auto=format&fit=crop&w=1000&q=80&cs=tinysrgb"
          distance="9700km"
        />
      </div>
    );
  }
}

export default App;
