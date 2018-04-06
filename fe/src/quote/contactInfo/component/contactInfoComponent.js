import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from "react-redux";

import ContactInfoRender from './contactInfoRender'
import * as actions from '../actions';

import ContactFormConfigs from '../constants'
import * as clientApi from '../contactInfoClient'
import { stat } from 'fs';

class ContactInfoComponent extends Component {

    constructor(props, context) {

        super(props)

        // using ID creates dynamic state
        this.state = {
          fields: {}
        }

      }

    componentDidMount() {
      // console.log("this: ", this)
    }

    validateEmailVal = () => {
      console.log("validate email executed")
    }

    handleComponentSubmit = event => {
      event.preventDefault();
      console.log("test")
      //assign dynamic state to corressponding store mapStateToProps
      let stateFields = this.state.fields
      console.log("stateFields: ",stateFields)
      //assign email
      for ( let state in stateFields ){
        let currentState = state

        if ( currentState.includes("email") ){
          this.props.updateEmail(stateFields.email)
        }
        if ( currentState.includes("zipCode") ){
          this.props.updateEmail(stateFields.zipCode)
        }
      }

      //const payload = { email: "david@aaa-calif.com", zipCode: "90210" }
      clientApi.postContactForm(stateFields)
        .then(response => {
          console.log('success from contactInfoComponet ', JSON.stringify(response))
        }) 
        .catch(error => {
          console.log('error from contactInfoComponet ', error);
        })


    }

    handleEmailInputVal = e => {
      this.setState({emailInputVal: e.target.value})
    }

    logInput = e => {
      let currentTarget = e

      // dynamically store state to field per id
      this.setState(
        { fields:
          { ...this.state.fields, [e.target.id]: e.target.value}
        }
      );

    }

    render() {
      return (
        <ContactInfoRender
          handleSubmitFromParent ={ this.handleComponentSubmit }
          // logCompInput = { this.logInput }

          onChangeHandler = {this.logInput}

          { ...ContactFormConfigs }
        />
      );
    }

}

export const mapStateToProps = (state) => {
  return {
    contact: state.contact
  };
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators( actions, dispatch, {} );
}

export default connect(mapStateToProps, mapDispatchToProps)(ContactInfoComponent);
