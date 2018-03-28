import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from "react-redux";

import ContactInfoRender from './contactInfoRender'
import * as actions from '../actions';

class ContactInfoComponent extends Component {

    constructor(props) {

        super(props)

        this.state = {
            "emailInputVal": "",
            "zipInputVal": 10000
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

    logInput = e => {
      let field = e.target
      let stateProp = field.id + "Val"
      let updatedState = {}

      updatedState[stateProp] = field.value
      this.setState(updatedState)

      console.log("updatedState: ", this.state)


    }

    render() {
      return (
        <ContactInfoRender
          onSubmit={this.handleComponentSubmit}
          handleZipInputVal={this.logInput}
          handleEmailInputVal={this.logInput}
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
