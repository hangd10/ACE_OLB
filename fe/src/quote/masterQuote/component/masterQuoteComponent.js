import React, { Component } from 'react';
import { connect } from 'react-redux';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { bindActionCreators } from 'redux'; /* code change */

import * as actions from '../actions';
import MasterQuoteRender from './masterQuoteRender.js'
import api from '../../../common/APIclient'

import '../styles/MasterQuote.css'


class MasterQuoteComponent extends Component {

  constructor(props) {
    super(props);
  }

  componentDidMount() {

  }

  componentWillUnmount() {

  }

  render() {
    return (
      <MasterQuoteRender 
        location={this.props.location}
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
    masterQuote: state
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(MasterQuoteComponent)
// export default MasterQuoteComponent;
