import Enzyme, { shallow, render, mount } from 'enzyme';
import React from 'react';
import ReactDOM from 'react-dom';
import VehicleInfoComponent from './component/vehicleInfoComponent';
import { createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux';
import { reducer as formReducer } from 'redux-form';
import sinon from 'sinon';

import * as actions from './actions/';
import reducer from './reducer';


describe('Vehicle Information Test Form', () => {
    let wrapper;
    let store;
    let handleSubmit;
    let payload;

    beforeEach( () => {
        payload = { "make" : "Honda", "model" : "Accord"}


        handleSubmit = sinon.spy();
        const props = {  }
        
        ;
        store = createStore(combineReducers({ form :  formReducer }));
        wrapper = mount(
            <Provider store={store}><VehicleInfoComponent handleSubmit={handleSubmit} /></Provider>
        );
    });

    it('contains all the form elements with name property for json object onSubmit', () => {
        expect(wrapper.find('input[placeholder="Make"]').prop('name')).toEqual('make');
        expect(wrapper.find('input[placeholder="Model"]').prop('name')).toEqual('model');

        expect(wrapper.find('button[type="submit"]').length, 1);
    });

    it('calls handleSubmit on form submission', () => {
        
        wrapper.find('button[type="submit"]').simulate('click');
        expect(handleSubmit.calledWith(wrapper.instance().submit));
      });

      it('verifies all actions are configured correctly', () => {
        
        const expectedAction = {
            type : actions.GO_TO_ADD_DRIVER_INFO
            ,payload
        }
        
        const action = actions.goToDriverInfo(payload);
        expect(action).toEqual(expectedAction);
      });

      it('should return the initial state', () => {
        expect( reducer(undefined, {}) ).toEqual({});
      });

      it('verifies the new state after vehicle info updates', () => {
        expect( reducer([], {
            type : actions.GO_TO_ADD_DRIVER_INFO
            ,payload
        }) ).toEqual({
            "vehicleInfo" : payload
        });
      });
})