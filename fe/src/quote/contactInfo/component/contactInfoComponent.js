import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from "react-redux";

import ContactInfoRender from './contactInfoRender'
import * as actions from '../actions';

class ContactInfoComponent extends Component {

    constructor(props) {
        
        super(props);
      }

    handleComponentSubmit = values => {
      //console.log(`ContactInfoComponent.handleComponentSubmit() - ${ JSON.stringify(values) }`);
      this.props.goToVehicleInfo(values);
    }

    logInput = e => {
      console.log(e.target.value)
    }

    render() {
      return (
        <ContactInfoRender
          onSubmit ={ this.handleComponentSubmit }
          logCompInput = { this.logInput }
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
