import Enzyme, { shallow, render, mount } from 'enzyme';
import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, combineReducers } from 'redux';

import configureStore from 'redux-mock-store';
import { Provider, connect } from 'react-redux';

import chai, { expect } from 'chai'
import { Route, Link, MemoryRouter } from 'react-router-dom';

import App from '../../App'
import MasterQuoteComponent from './component/masterQuoteComponent'

import { createMockStore } from 'redux-test-utils';

import * as actions from './actions';
import * as types from './actionTypes';
import reducer from './reducer/index.js';



const mockStore = configureStore();

describe('MasterQuote', () => {

    let masterQuote;
    let store;
    let state;
    let wrapper;
    let path;
    let initialState;

    beforeEach( () => {

        path = '/quote';
        initialState = {
          quote: {
            GUID: null,
            user: {},
            contactInfo: {},
            vehicleInfo: {},
          },
          formStage: 0,
        };
        store = mockStore(initialState);


        wrapper = mount(
          <MemoryRouter initialEntries={[ path ]}>
              <MasterQuoteComponent store={store} />
          </MemoryRouter>
        );

    });

    it('exists', () => {
      expect(wrapper.find(MasterQuoteComponent)).to.exist;

    });

    it('has the correct route path', () => {

    });

    it('has redux properties mapped to state', () => {
      let componentProps =
        wrapper.find(MasterQuoteComponent).props().store.getState();
      expect(componentProps).to.eql(initialState);

    });

    it('addTodo action functional', () => {
      const text = 'addTodo functional test'

      const action = actions.addTodo(text)
      const expectedAction = {  type: types.ADD_TODO, payload: text }

      /***
      Must stringify objects to compare directly otherwise JS will compare
      wether the two objects point to the same poitn in memore rather than content
      ***/

      expect(JSON.stringify(action)).to.equal(JSON.stringify(expectedAction));

    });


    it('ADD_TODO actionType updates formStage property', () => {
      const text = 'addTodo test'
      const updateObj = {  type: types.ADD_TODO, payload: text }

      const expectedAction =
        { ...initialState, formStage: text }
      const action = reducer(initialState, updateObj)

      expect(JSON.stringify(action)).to.equal(JSON.stringify(expectedAction));


    });


    it('ADD_TODO actionType updates formStage property', () => {
      const text = 'addTodo test'
      const updateObj = {  type: types.ADD_TODO, payload: text }

      expect(2).to.equal(2);

    });


})
