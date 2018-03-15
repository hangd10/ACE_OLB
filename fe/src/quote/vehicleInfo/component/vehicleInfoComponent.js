import React, { Component } from 'react';
import { connect } from 'react-redux';
import VehicleInfoRender from './vehicleInfoRender';
import { goToDriverInfo } from '../actions/';

class VehicleInfoComponent extends Component {

    constructor(props) {
        super(props);
      }

      handleComponentSubmit = values => {
        // print the form values to the console
        console.log(`VehicleInfoComponent... ${ JSON.stringify(values) }`);
        goToDriverInfo(values);
      }

    //   cicFunctionParent = (dataFromChild) => {
    //     console.log('cicFunction called ' +dataFromChild);
    //   }
    
      render() {
        return (
          <VehicleInfoRender 
            // cicFunction= { this.cicFunctionParent }
            onSubmit ={ this.handleComponentSubmit } 
          />
        );
      }
}

function mapStateToProps(state) {
  return {
    vehicle: state.vehicleInfo
  };
}

export default connect(mapStateToProps, { goToDriverInfo })(VehicleInfoComponent);