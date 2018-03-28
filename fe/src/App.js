import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import appLang from './appLang'

import { Switch, Route } from 'react-router-dom'

import MasterQuoteComponent from
  './quote/masterQuote/component/masterQuoteComponent'
import RouteWithSubRoutes from './setup/routes'
import Menu from './menu/component/menuComponent'



console.log("appLang: ", appLang)

class App extends Component {
  submit = values => {
    // print the form values to the console
    console.log(values)
  };

  render() {

    const lang = appLang.en

    return (
      <div className="App">

        <header className="App-header">
          <h1 className="App-title">{lang.banner}</h1>
          <Menu menuItems={lang.menu} />
        </header>

        <p className="App-intro">{lang.cta}</p>

        <Switch>
          <Route path='/quote' component={MasterQuoteComponent}/>
        </Switch>

      </div>
    );
  }
}

export default App;
