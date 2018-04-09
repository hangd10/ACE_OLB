import React from 'react';
import ReactDOM from 'react-dom';
import ContactInfoComponent from './component/contactInfoComponent';
import ContactReducer from './reducer/index';

import { createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux';

import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';

import sinon from 'sinon';
import chai, { expect } from 'chai'
import Enzyme, { shallow, render, mount } from 'enzyme';

import * as actions from './actions';
import api from '../../common/APIclient'

import ContactInfoConfigObj from './constants'

describe('Contact Information Test Form Component', () => {
    let wrapper;
    let store;
    let handleSubmit;
    let mock;

    beforeEach( () => {
        handleSubmit = sinon.spy();
        const props = {  }

        ;
        store = createStore(combineReducers({ contact : ContactReducer }));

        wrapper = mount(
            <Provider store={store}>
              <ContactInfoComponent handleSubmit={handleSubmit} />
            </Provider>
        );


        mock = new MockAdapter(axios);

    });

    it('calls handleSubmit on form submission', () => {
      //wrapper.find('button[type="submit"]').simulate('click');
      //expect(handleSubmit.calledWith(wrapper.instance().submit));

    });



})
