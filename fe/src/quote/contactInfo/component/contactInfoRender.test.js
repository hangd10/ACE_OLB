import React from 'react';
import ReactDOM from 'react-dom';

import ContactInfoRender from './contactInfoRender'
import chai, { expect } from 'chai'
import Enzyme, { shallow, render, mount } from 'enzyme';

describe('Contact Information Test Form Rendering', () => {
    let wrapper;

    beforeEach( () => {
        const props = {  }

        wrapper = mount(<ContactInfoRender />);
    });

    it('verify instace of email field', () => {
      let emailInputLength = wrapper.find('input#emailInputId').length;
      expect(emailInputLength).to.eql(1);
    });

})
