import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from "react-redux";

import ContactInfoRender from './contactInfoRender'
import * as actions from '../actions';

import ContactFormConfigs from '../constants'

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

      //assign email
      for ( let state in stateFields ){
        let currentState = state

        if ( currentState.includes("email") ){
          console.log("looped")
          this.props.updateEmail(stateFields.email)
        }
      }

    }

    handleEmailInputVal = e => {
      this.setState({emailInputVal: e.target.value})
    }

    logInput = e => {
      let currentTarget = e

      // dynamically store staet to field per id
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
