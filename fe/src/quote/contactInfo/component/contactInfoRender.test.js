import React from 'react';
import ReactDOM from 'react-dom';

import ContactInfoRender from './contactInfoRender'
import chai, { expect } from 'chai'
import Enzyme, { shallow, render, mount } from 'enzyme';

import ContactFormConfigs from '../constants'

describe('Contact Information Test Form Rendering', () => {
  let wrapper;

    beforeEach( () => {
        const props = {  }

        wrapper = mount(<ContactInfoRender
          { ...ContactFormConfigs }
          />);

    });

    it('verify instace of email field', () => {
      let emailInputLength = wrapper.find('input#email').length;
      expect(emailInputLength).to.eql(1);
    });

    it('verify instace of zip field', () => {
      let zipInputLength = wrapper.find('input#zipcode').length;
      expect(zipInputLength).to.eql(1);
    });

    it('distributes props via an associative object', () => {

    });

})
