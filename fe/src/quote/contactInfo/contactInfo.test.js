import React from 'react';
import ReactDOM from 'react-dom';
import ContactInfoComponent from './component/contactInfoComponent';
import { createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux';
import { reducer as formReducer } from 'redux-form';

import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';

import sinon from 'sinon';
import chai, { expect } from 'chai'
import Enzyme, { shallow, render, mount } from 'enzyme';

import * as actions from './actions/';
import api from '../../common/APIclient'



describe('Contact Information Test Form', () => {
    let wrapper;
    let store;
    let handleSubmit;
    let mock;

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
        mock = new MockAdapter(axios);

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

      expect(zipInputLength).to.eql(1);

    });

    it('verify instace of zipcode field', () => {
      let zipInputLength = wrapper.find('input[name="zip"]').length;

      expect(zipInputLength).to.eql(1);

    });

    it('error handing for email input - .com at end', () => {
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

    /*
    it('error handing for email input - must have @ symbol', () => {
      //must have @ symbol
      // const test2;

      let emailInput = wrapper.find('input[name="email"]');
      // emailInput.value =


    });
    */

    it('server returns a 200 on post call', () => {
      const urlMock = "https://jsonplaceholder.typicode.com/posts"
      const dataMock = {
        userEmail: "bob@aaa-calif.com",
        zipCode: 12345
      }
      const headerMock = {
        'Content-Type': 'application/json;charset=UTF-8',
        "Access-Control-Allow-Origin": "*",
      }
      const check = ( resp ) => {
        expect(resp.status).to.equal(expectedPOST);

      }

      let expectedPOST = 200;
      mock.onPost(urlMock, dataMock)
        .reply(200, "successful Bear");
      let POST = api.POST(urlMock, dataMock, check);


    })




})
