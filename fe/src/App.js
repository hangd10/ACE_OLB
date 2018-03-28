import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import appLang from './appLang'
import { bindActionCreators } from 'redux';
import { connect } from "react-redux";
import { Switch, Route } from 'react-router-dom'
import * as actions from './common/analytics/actions';

import MasterQuoteComponent from
  './quote/masterQuote/component/masterQuoteComponent'
import RouteWithSubRoutes from './setup/routes'
import Menu from './menu/component/menuComponent'


class App extends Component {

  updateLangEn = () => {
    this.props.updateLang("en")
    console.log("updated: ", this)
  }

  updateLangEs = () => {
    this.props.updateLang("es")
    console.log("updated: ", this)
  }

  render() {
    console.log("app connet: ", this)

    const lang = appLang[this.props.lang]

    return (
      <div className="App">

        <header className="App-header">
          <h1 className="App-title">{lang.banner}</h1>

          <ul className={"menuList"}>
            <li className={"menuItem"} onClick={this.updateLangEn}>{lang.english}</li>
            <li className={"menuItem"} onClick={this.updateLangEs}>{lang.spanish}</li>
          </ul>

        </header>

        <p className="App-intro">{lang.cta}</p>

        <Switch>
          <Route path='/quote' component={MasterQuoteComponent}/>
        </Switch>

      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    lang: state.analytics.language
  };
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators( actions, dispatch, {} );
}


// export default App;
export default connect(mapStateToProps, mapDispatchToProps)(App);
