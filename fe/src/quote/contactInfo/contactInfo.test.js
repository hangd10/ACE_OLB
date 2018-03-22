import Enzyme, { shallow, render, mount } from 'enzyme';
import React from 'react';
import ReactDOM from 'react-dom';
import ContactInfoComponent from './component/contactInfoComponent';
import { createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux';
import { reducer as formReducer } from 'redux-form';
import sinon from 'sinon';

import chai, { expect } from 'chai'

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
            <Provider store={store}>
              <ContactInfoComponent handleSubmit={handleSubmit} />
            </Provider>
        );
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

    it('verify instace of email field', () => {
      let zipInputLength = wrapper.find('input[name="email"]').length;
      console.log(zipInputLength);

      expect(zipInputLength).to.eql(1);
    });

    it('verify instace of zipcode field', () => {
      let zipInputLength = wrapper.find('input[name="zip"]').length;
      console.log(zipInputLength);

      expect(zipInputLength).to.eql(1);
    });

    it.skip('error handing for email input - .com at end', () => {
      // must have .com at end
      const test1 = "aaa@aaa-calif.rom"

      let errorScript = wrapper.find('#emailInputError');
      let emailInput =  wrapper.find('input[name="email"]');
      let errorScriptInit =  wrapper.find('#emailInputError.errorScript.throwError');

      emailInput.value = test1;

      //onSubmit click simulation
      wrapper.find('button[type="submit"]').simulate('click');

      expect((errorScriptInit).length).to.equal(1);


    });

    it('error handing for email input - must have @ symbol', () => {
      //must have @ symbol
      // const test2;

      let emailInput = wrapper.find('input[name="email"]');
      // emailInput.value =


    });





})
