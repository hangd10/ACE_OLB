import Enzyme, { shallow, render, mount } from 'enzyme';
import React from 'react';
import ReactDOM from 'react-dom';
// import Step1 from './step1';
import { createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux';
import { reducer as formReducer } from 'redux-form';
import sinon from 'sinon';

import chai, { expect } from 'chai'

import MasterQuoteComponent from './component/masterQuoteComponent.js'


describe('MasterQuote', () => {
    let masterQuote;
    // let store;
    // let handleSubmit;
    //
    beforeEach( () => {
        // handleSubmit = sinon.spy();
        // const props = {  }
        //
        // ;
        // store = createStore(combineReducers({ form :  formReducer }));
        // wrapper = mount(
        //     <Provider store={store}><Step1 handleSubmit={handleSubmit} /></Provider>
        // );

        masterQuote = shallow( <MasterQuoteComponent/> );

    });

    it('exsists', () => {
        expect(masterQuote).to.exist;
    });

})
