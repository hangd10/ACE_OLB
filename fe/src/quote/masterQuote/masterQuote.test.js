import Enzyme, { shallow, render, mount } from 'enzyme';
import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, combineReducers } from 'redux';

import configureMockStore from 'redux-mock-store';
import { Provider, connect } from 'react-redux';

import chai, { expect } from 'chai'
import { Route, Link, MemoryRouter } from 'react-router-dom';

import App from '../../App'
import MasterQuoteComponent from './component/masterQuoteComponent'

import { createMockStore } from 'redux-test-utils';

const mockStore = configureMockStore();


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

        state = mockStore({ initialState });

        // console.log("state", state, state.getState())

        const mapStateToProps = (state) => ({
          state,
        });

        store = createMockStore(state);

        wrapper = mount(
          <MemoryRouter initialEntries={[ path ]}>
            <Provider store={store}>
              <App />
            </Provider>
          </MemoryRouter>
        );

        wrapper.find(MasterQuoteComponent)

    });

    it('exists', () => {
      expect(wrapper.find(MasterQuoteComponent)).to.exist;

    });

    it('has the correct route path', () => {
      const componentPath =
        wrapper.find(MasterQuoteComponent).props().location.pathname;
      expect(componentPath).to.eql(path);

    });

    it('has redux properties mapped to state', () => {
      // let componentProps =
      //   wrapper.find(MasterQuoteComponent).props().initialState.quote;

      // expect(componentProps).to.eql(path);

    });

})
