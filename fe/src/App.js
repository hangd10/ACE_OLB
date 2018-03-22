import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
// import { Route, Link, MemoryRouter } from 'react-router-dom'
// import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { Switch, Route } from 'react-router-dom'


import MasterQuoteComponent from
  './quote/masterQuote/component/masterQuoteComponent'
import RouteWithSubRoutes from './setup/routes'

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
          <h1 className="App-title">Welcome to Bananana</h1>
        </header>

        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>

        <Switch>
          <Route path='/quote' component={MasterQuoteComponent}/>

          <Route path='/' component={MasterQuoteComponent}/>
        </Switch>

      </div>
    );
  }
}

export default App;
