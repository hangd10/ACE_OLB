import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from "react-redux";

import ContactInfoRender from './contactInfoRender'
import * as actions from '../actions';

import ContactFormConfigs from '../constants'

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

    handleComponentSubmit = event => {
      event.preventDefault();
      //this.validateEmailVal();
      console.log('handleComponentSubmit from contactInfoComponent')
    }

    handleEmailInputVal = e => {
      this.setState({emailInputVal: e.target.value})
    }

    logInput = e => {
    }

    render() {
      return (
        <ContactInfoRender
          handleSubmitFromParent ={ this.handleComponentSubmit }
          logCompInput = { this.logInput }
          handleEmailInputVal = { this.handleEmailInputVal }
          { ...ContactFormConfigs }
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
