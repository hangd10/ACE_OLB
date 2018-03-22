import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from "react-redux";

import VehicleInfoRender from './vehicleInfoRender';
import * as actions from '../actions';

class VehicleInfoComponent extends Component {

    constructor(props) {
      super(props);
    }

    componentDidMount() {
      // console.log(`VehicleInfoComponent contact info from redux store ${ JSON.stringify(this.props.contact) }`);
    }

    handleComponentSubmit = values => {
      // print the form values to the console
      //console.log(`VehicleInfoComponent.handleComponentSubmit() - ${ JSON.stringify(values) }`);
      this.props.goToDriverInfo(values);
    }

    render() {
      return (
        <VehicleInfoRender
          onSubmit ={ this.handleComponentSubmit }
        />
      );
    }
}

const mapStateToProps = (state) => {
  return {
    contact: state.contact,
    vehicle: state.vehicle
  };
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators( actions, dispatch, {} );
}

export default connect(mapStateToProps, mapDispatchToProps)(VehicleInfoComponent);
