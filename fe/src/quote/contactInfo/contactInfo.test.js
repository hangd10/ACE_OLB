import Enzyme, { shallow, render, mount } from 'enzyme';
import React from 'react';
import ReactDOM from 'react-dom';
import ContactInfoComponent from './component/contactInfoComponent';
import { createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux';
import { reducer as formReducer } from 'redux-form';
import sinon from 'sinon';

import * as actions from './actions/';


describe('Contact Information Test Form', () => {
    let wrapper;
    let store;
    let handleSubmit;

    beforeEach( () => {
        handleSubmit = sinon.spy();
        const props = {  }

        ;
        store = createStore(combineReducers({ form :  formReducer }));
        wrapper = mount(
            <Provider store={store}><ContactInfoComponent handleSubmit={handleSubmit} /></Provider>
        );
    });

    it('contains all the form elements with name property for json object onSubmit', () => {

    });

    it('calls handleSubmit on form submission', () => {

        // const wrapper = shallow(<Step1 handleSubmit={handleSubmit} />);
        // console.log(wrapper.find('button[type="submit"]'));
        wrapper.find('button[type="submit"]').simulate('click');
        expect(handleSubmit.calledWith(wrapper.instance().submit));
      });

      it('verifies all actions are configured correctly', () => {
        const contactInfo = { };
        actions.goToVehicleInfo(contactInfo);
      });

      it('validates user input', () => {

        let firstNameInput = wrapper.find('input[placeholder="First Name"]');

        expect(wrapper.find('input[placeholder="First Name"]').prop('name')).toEqual('firstName');

      });


})
