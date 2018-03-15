import Enzyme, { shallow, render, mount } from 'enzyme';
import React from 'react';
import ReactDOM from 'react-dom';

import App from './App'

import { createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux';
import { reducer as formReducer } from 'redux-form';
import sinon from 'sinon';

import { Route, Link, MemoryRouter } from 'react-router-dom';
// import { Simulate } from 'react-addons-test-utils'


describe('App', () => {
    let wrapper;
    let store;
    let handleSubmit;

    beforeEach( () => {
        handleSubmit = sinon.spy();
        const props = {  }

        ;
        store = createStore(combineReducers({ form :  formReducer }));
        wrapper = mount(
          <MemoryRouter initialEntries={[ '/' ]}>
            <Provider store={store}>
              <App />
            </Provider>
          </MemoryRouter>
        );
    });

    it('exists', () => {
      expect(wrapper.find(App)).toHaveLength(1);
    });

})
