import React, { Component } from 'react';
import { connect } from 'react-redux';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { bindActionCreators } from 'redux'; /* code change */

import * as actions from '../actions';
import MasterQuoteRender from './masterQuoteRender.js'
import api from '../../../common/APIclient'


class MasterQuoteComponent extends Component {

  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.addTodo("testing")
    // const dataMock = {
    //   userEmail: "bob@aaa-calif.com",
    //   zipCode: 12345
    // }
    // const calbk = (resp) => {
    //   console.log("successful call: ", resp);
    // }
    //
    // api.POST('https://jsonplaceholder.typicode.com/posts', dataMock, null, calbk)

  }

  componentWillUnmount() {

  }

  render() {
    return (
      <MasterQuoteRender
        language={this.props.lang}
      />
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators( actions, dispatch,
    {}
  );
};

const mapStateToProps = ( state ) => {
  return {
    masterQuote: state,
    lang: state.analytics.language
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(MasterQuoteComponent)
