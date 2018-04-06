import React, { Component } from 'react';
import logo from './AAA_logo_white.png';
import './App.css';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import { connect } from 'react-redux';


import MasterQuoteComponent from
  './quote/masterQuote/component/masterQuoteComponent'
import RouteWithSubRoutes from './setup/routes'
import Menu from './menu/component/menuComponent'

class App extends Component {
  submit = values => {
    // print the form values to the console
    console.log(values)
  };


  render() {

    const menuItemsArr = [
      {
        name: "Contact Information",
        path: "/quote/contact"
      },
      {
        name: "Vehicle Information",
        path: "/"
      },
    ]


    return (

      <div className="App">

        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Online Bind</h1>
        </header>
        <Menu menuItems={menuItemsArr} />

        <Route path="/" component={MasterQuoteComponent}/>

        <footer>

          <p>Copyright &copy; 2018 #teampalpha</p>

          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>

        </footer>

      </div>
    );
  }
}

// export default connect(App);
export default App;
