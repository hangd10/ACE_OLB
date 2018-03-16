import React, { Component } from 'react';
import { connect } from 'react-redux';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { bindActionCreators } from 'redux'; /* code change */

import * as actions from '../actions/index.js';
import MasterQuoteRender from './masterQuoteRender.js'


class MasterQuoteComponent extends Component {

  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.addTodo("testing")

  }

  componentWillUnmount() {

  }

  render() {
    return (
      <MasterQuoteRender />
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
    masterQuote: state
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(MasterQuoteComponent)
// export default MasterQuoteComponent;
