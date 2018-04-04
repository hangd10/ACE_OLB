import React from 'react';
import ReactDOM from 'react-dom';

import { Provider, connect } from 'react-redux';
import { createStore, combineReducers } from 'redux';
import configureMockStore from 'redux-mock-store';

import sinon from 'sinon';
import Chai, { expect } from 'chai'
import Enzyme, { shallow, render, mount } from 'enzyme';

import ContactReducer from '../reducer/index';
import ContactFormConfigs from '../constants'
import ContactInfoComponent, { mapStateToProps } from './contactInfoComponent'

import * as actions from '../actions'
import * as actionTypes from '../actionTypes';

Chai.should();

describe('Contact Component Test', () => {
  let wrapper;
  let store;
  let initialState;
  let handleSubmit;
  let mockStore;

  beforeEach( () => {
    handleSubmit = sinon.spy();

    const initialState = {
      email: '',
      zipCode: ''
    }

    const props = {  }

    mockStore = configureMockStore();
    store = mockStore({
      contact: { },
    });


    let mountedStore = createStore(combineReducers({ contact : ContactReducer }));
    
    wrapper = mount(
      <Provider store={mountedStore}>
        <ContactInfoComponent handleSubmit={handleSubmit} { ...ContactFormConfigs }/>
      </Provider>
    );

  });

  it('should be able to submit the form', () => {
    wrapper.find('button[type="submit"]').simulate('click');
    expect(handleSubmit.calledWith(wrapper.instance().submit));
  });

  it('updateEmail action should return updated obj - action only ', () => {
    let payload = "updated@aaa-calif.com";
    let expectedObj = { type: actionTypes.UPDATE_EMAIL , payload: payload };
    var action = actions.updateEmail(payload);   

    (JSON.stringify(action)).should.equal(JSON.stringify(expectedObj));
  });

  it('should map properly - mapStateToProps only', () => {
    let contactState = { "contact" : { "email" : "dummy@aaa-calif.com", "zipCode": "91001" } };
    let expectedContactState = mapStateToProps(contactState);

    (JSON.stringify(contactState)).should.equal(JSON.stringify(expectedContactState));
  });

  it('should update store - reducer only', () => {
    const expectedEmail = "updated@aaa-calif.com";
    let test = store.dispatch(actions.updateEmail(expectedEmail));
    let state = ContactReducer(initialState, store.getActions()[0]);

    expectedEmail.should.equal(state.email);
  });

  it('should update store - action + reducer', () => {
    let expectedEmail = "updated@aaa-calif.com";
    let expectedState = { "contact" : { "email" : expectedEmail, "zipCode": "" } };
    wrapper.props().store.dispatch(actions.updateEmail(expectedEmail))

    // this function must be called AFTER dispatch...
    let componentState = wrapper.props().store.getState();
    (JSON.stringify(expectedState)).should.equal(JSON.stringify(componentState));

  });

})
