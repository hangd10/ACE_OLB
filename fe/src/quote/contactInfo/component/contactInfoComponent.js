import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from "react-redux";

import contactInfoLang from '../contactInfo.lang.js'
import ContactInfoRender from './contactInfoRender'
import * as actions from '../reducer/actions';

import ContactFormConfigs from '../constants'

class ContactInfoComponent extends Component {

    constructor(props) {

        super(props)

        this.state = {
            "emailInputVal": "",
            "zipInputVal": 10000
        }

        this.validEmail = null;
        this.validZip = null;

      }

    componentDidMount() {
    }

    validateEmailVal = () => {
      var isValidEmail = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(this.state.emailInputVal)

      if (isValidEmail){
        this.invalidEmail = false
        this.props.assignEmail(this.state.emailInputVal)
      }
      else{ this.invalidEmail = true }

    }

    validateZipVal = () => {
      var isValidZip = /(^\d{5}$)|(^\d{5}-\d{4}$)/.test(this.state.zipInputVal);

      if (isValidZip){
        this.invalidZip = false
        this.props.assignZip(this.state.zipInputVal)
      }
      else{ this.invalidZip = true }

    }

    handleComponentSubmit = values => {
      this.validateZipVal()
      this.validateEmailVal()

    }

    logInput = e => {
      let field = e.target
      let stateProp = field.id + "Val"
      let updatedState = {}

      updatedState[stateProp] = field.value
      this.setState(updatedState)

    }

    render() {

      const lang = contactInfoLang[this.props.lang]
      const zipFieldConfig = {
        inputID: "zipInput",
        className: "contactInfoField",
        title: lang.fields.zip.title,
        placeholder: lang.fields.zip.placeholder,
        maxLength: 5,
        icon: null,
        errorMessage: lang.fields.zip.errorMessage,
        onChange: this.logInput,
        typeAttr: "number",
        throwError: this.invalidZip,
      }
      const emailFieldConfig = {
        inputID: "emailInput",
        className: "contactInfoField",
        title: lang.fields.email.title,
        placeholder: lang.fields.email.placeholder,
        icon: null,
        errorMessage: lang.fields.email.errorMessage,
        onChange: this.logInput,
        typeAttr: "text",
        throwError: this.invalidEmail,
      }

      return (
        <ContactInfoRender
          onSubmit ={ this.handleComponentSubmit }
          logCompInput = { this.logInput }
          handleEmailInputVal = { this.handleEmailInputVal }
          { ...ContactFormConfigs }
        />
      );
    }

}

const mapStateToProps = (state) => {
  return {
    contact: state,
    lang: state.analytics.language
  };
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators( actions, dispatch, {} );
}

export default connect(mapStateToProps, mapDispatchToProps)(ContactInfoComponent);
