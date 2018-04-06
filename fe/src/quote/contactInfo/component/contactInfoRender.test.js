import React from 'react';
import Enzyme, { shallow, render, mount } from 'enzyme';
import Chai from 'chai';
import Sinon from 'sinon';
import jsdom from 'jsdom';

import configureStore from 'redux-mock-store';

import ContactInfoRender from './contactInfoRender'
import ContactFormConfigs from '../constants'

Chai.should();


describe('Contact Form', () => {
  let wrapper;
  let mockStore;
  let initialState;

    beforeEach( () => {
        initialState = {
          email: "",
          zipcode: '',
        }
        mockStore = configureStore(initialState);

        wrapper = mount(<ContactInfoRender
          { ...ContactFormConfigs }
          />);

    });

    it('verify instace of email field', () => {
      let emailInput = wrapper.find('input#email');
      emailInput.length.should.equal(1)
    });

    it('verify instace of zip field', () => {
      let zipInput = wrapper.find('input#zipCode');
      zipInput.length.should.equal(1);
    });

    it('renders and instance of a submit button', () => {
      let submitButton = wrapper.find('button[type="submit"]')
      submitButton.length.should.equal(1)
    });

    it('verify handleSubmit method is called on form submit', () => {
      // wrapper.find('button[type="submit"]').simulate('click');
      // subject.find('input#' + dummyConfig.inputID).simulate('change');
    });

})
