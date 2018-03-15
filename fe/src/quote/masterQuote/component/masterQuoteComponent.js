import MasterQuoteRender from './masterQuoteRender.js'
import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

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
      <MasterQuoteRender />
    );
  }
}

export default MasterQuoteComponent;
