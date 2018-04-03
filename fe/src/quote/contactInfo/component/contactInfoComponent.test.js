import React from 'react';
import ReactDOM from 'react-dom';

import { Provider, connect } from 'react-redux';
import { createStore, combineReducers } from 'redux';

import sinon from 'sinon';
import Chai, { expect } from 'chai'
import Enzyme, { shallow, render, mount } from 'enzyme';

import ContactReducer from '../reducer/index';
import ContactFormConfigs from '../constants'
import ContactInfoComponent from './contactInfoComponent'

import * as actions from '../actions'
import * as actionTypes from '../actionTypes';

Chai.should();

describe('Contact Component Test', () => {
  let wrapper;
  let store;
  let initialState;
  let handleSubmit;

  beforeEach( () => {
    handleSubmit = sinon.spy();

    const initialState = {
      email: '',
      zipCode: ''
    }

    const props = {  }
    store = createStore(combineReducers({ contact : ContactReducer }));
    
    wrapper = mount(
      <Provider store={store}>
        <ContactInfoComponent handleSubmit={handleSubmit} { ...ContactFormConfigs }/>
      </Provider>
    );

  });

  it('should be able to submit the form', () => {
    wrapper.find('button[type="submit"]').simulate('click');
    // expect(handleSubmit.calledWith(wrapper.instance().submit));

    
  });

  it('updateEmail action should return updated obj', () => {
    let payload = "updated@aaa-calif.com";
    let expectedObj = { type: actionTypes.UPDATE_EMAIL , payload: payload };
    var action = actions.updateEmail(payload);   

    (JSON.stringify(action)).should.equal(JSON.stringify(expectedObj));
  });

  it('should return __ updated store/state obj using __ reducer ', () => {

  });
  
  

})
