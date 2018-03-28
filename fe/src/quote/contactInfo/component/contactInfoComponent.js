import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from "react-redux";

import ContactInfoRender from './contactInfoRender'
import * as actions from '../actions';

class ContactInfoComponent extends Component {

    constructor(props) {

        super(props)

        this.state = {
            emailInputVal: "",
            zipCodeInputVal: 10000
        }

      }

    componentDidMount() {

    }

    validateEmailVal = () => {
      let val = this.state.emailInputVal;
      val = val.slice(val.length-4, val.length);

    }

    handleComponentSubmit = values => {
      console.log("props: ", this)
      // this.validateEmailVal();
    }

    handleEmailInputVal = e => {
      this.setState({emailInputVal: e.target.value})
    }

    handleZipInputVal = e => {
      this.setState({zipCodeInputVal: e.target.value})
    }

    logInput = e => {
      console.log("input: ", e.target.value)
    }

    render() {
      return (
        <ContactInfoRender
          onSubmit={this.handleComponentSubmit}
          handleZipInputVal={this.handleZipInputVal}
          handleEmailInputVal={this.handleEmailInputVal}
          language={this.props.lang}
        />
      );
    }

}

const mapStateToProps = (state) => {
  return {
    contact: state.contact,
    lang: state.analytics.language    
  };
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators( actions, dispatch, {} );
}

export default connect(mapStateToProps, mapDispatchToProps)(ContactInfoComponent);
