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
      console.log("this: ", this)

    }

    validateEmailVal = () => {
      let val = this.state.emailInputVal;
      val = val.slice(val.length-4, val.length);

    }

    handleComponentSubmit = values => {
      this.validateEmailVal();
    }

    handleEmailInputVal = e => {
      console.log(e.target.value, this)
      this.setState({emailInputVal: e.target.value})
    }

    logInput = e => {
      console.log(e.target.value)
    }

    render() {
      return (
        <ContactInfoRender
          onSubmit ={ this.handleComponentSubmit }
          logCompInput = { this.logInput }
          handleEmailInputVal = { this.handleEmailInputVal }
        />
      );
    }

}

const mapStateToProps = (state) => {
  return {
    contact: state.contact
  };
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators( actions, dispatch, {} );
}

export default connect(mapStateToProps, mapDispatchToProps)(ContactInfoComponent);
