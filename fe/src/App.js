import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import Step1 from './quote/step1';

class App extends Component {
  submit = values => {
    // print the form values to the console
    console.log(values)
  };
  
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
        <Step1 onSubmit={this.submit}/>
      </div>
    );
  }
}

export default App;
