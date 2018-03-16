import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import { connect } from "react-redux";

//import * as actions from '../actions';
import * as actions from '../actions';
import { bindActionCreators } from 'redux';

class ContactInfoContainer extends Component {

    constructor(props) {
        super(props);
      }

      onContainerSubmit = values => {
        this.props.goToVehicleInfo(values);
      }
    
      render() {
        const { handleSubmit } = this.props;

        return (
          
          <form onSubmit={ handleSubmit(this.onContainerSubmit.bind(this)) }>
            <Field name="firstName" placeholder="First Name" component="input" type="text" />
            <Field name="lastName" placeholder="Last Name" component="input" type="text" />

            <input type="text" placeholder="Address" name="address" />
            <input type="text" placeholder="000-000-0000" name="phone" />
            <input type="text" placeholder="email" name="email" />

            <button type="submit">Submit</button>
          </form>
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

export default reduxForm({
  form: "ContactForm"
})(connect(mapStateToProps, mapDispatchToProps)(ContactInfoContainer));
