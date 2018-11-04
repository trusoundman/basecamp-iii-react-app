import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div>
        <Component1/>
        <Component2/>
        <Component3/>
      </div>
    );
  }
}

class Component1 extends Component {
  render() {
    return (
      <div>
        <header>
          <h1>I'm writing code in React!</h1>
        </header>
      </div>
    )
  }
}

class Component2 extends Component {
  render() {
    return (
      <div>
        <body><h2>This is pretty awesome.</h2>
        </body>
      </div>
    )
  }
}

class Component3 extends Component {
  render() {
    return (
      <div>
        <header><h3>This text is heading size 3.</h3></header>
      </div>
    )
  }
}

export default App;
