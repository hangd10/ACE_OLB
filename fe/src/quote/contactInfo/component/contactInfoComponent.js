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
      // console.log("this: ", this)
    }

    validateEmailVal = () => {
      let val = this.state.emailInputVal;
      val = val.slice(val.length-4, val.length);

    }

    handleComponentSubmit = event => {
      event.preventDefault();
      


      console.log('handleComponentSubmit ', this.emailInputVal );
      this.props.updateEmail(event.target.value)
    }

    handleEmailInputVal = e => {
      this.setState({emailInputVal: e.target.value})
    }

    logInput = e => {
      console.log(e.target.value)
      let currentTarget = e
      this.setState({ [e.target.id]: e.target.value });

    }

    render() {
      return (
        <ContactInfoRender
          handleSubmitFromParent ={ this.handleComponentSubmit }
          // logCompInput = { this.logInput }
          handleEmailInputVal = { this.handleInputText }

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
