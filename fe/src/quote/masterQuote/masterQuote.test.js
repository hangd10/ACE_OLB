import Enzyme, { shallow, render, mount } from 'enzyme';
import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux';
import { reducer as formReducer } from 'redux-form';
import sinon from 'sinon';

import chai, { expect } from 'chai'
import { Route, Link, MemoryRouter } from 'react-router-dom';

import App from '../../App'
import MasterQuoteComponent from './component/masterQuoteComponent'


describe('MasterQuote', () => {
    let masterQuote;
    let store;
    let wrapper;


    beforeEach( () => {

        store = createStore(combineReducers({ form :  formReducer }));

        wrapper = mount(
          <MemoryRouter initialEntries={[ '/quote' ]}>
            <Provider store={store}>
              <App />
            </Provider>
          </MemoryRouter>
        );

        masterQuote = shallow( <MasterQuoteComponent/> );

    });

    it('exists', () => {
        expect(masterQuote).to.exist;
    });

})
