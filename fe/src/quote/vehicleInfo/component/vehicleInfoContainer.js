import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import { connect } from "react-redux";

//import * as actions from '../actions';
import * as actions from '../actions';
import { bindActionCreators } from 'redux';

class VehicleInfoContainer extends Component {

    constructor(props) {
        super(props);
      }

      componentDidMount() {
        console.log(`Contact Info ${ JSON.stringify(this.props.contact) }`);
      }

      onContainerSubmit = values => {
        this.props.goToDriverInfo(values);
      }
    
      render() {
        const { handleSubmit } = this.props;

        return (
          <div>
            <div></div>
            <form onSubmit={ handleSubmit(this.onContainerSubmit.bind(this)) }>
              <Field name="make" placeholder="Make" component="input" type="text" />
              <Field name="model" placeholder="Model" component="input" type="text" />

              <button type="submit">Submit</button>
            </form>
          </div>

        );
      }

}

const mapStateToProps = (state) => {
  return {
    contact: state.contact
    ,vehicle : state.vehicle
  };
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators( actions, dispatch, {} );
}

export default reduxForm({
  form: "VehicleForm"
})(connect(mapStateToProps, mapDispatchToProps)(VehicleInfoContainer));
