import React from 'react';
import Enzyme, { shallow, render, mount } from 'enzyme';
import Chai from 'chai';
import Sinon from 'sinon';
import jsdom from 'jsdom';

import { Route, Link, MemoryRouter } from 'react-router-dom';
import Menu from './component/menuComponent'


describe('Menu', () => {
    let wrapper;
    let menuItemSpecObj;

    beforeEach( () => {

      menuItemSpecObj = [
        {
          name: "Item1",
          path: "/item1"
        },
        {
          name: "Item2",
          path: "/item2"
        }
      ]

      wrapper = mount(
        <MemoryRouter>
            <Menu menuItems={menuItemSpecObj} />
        </MemoryRouter>
      );

    });

    it('menu items exist', () => {
      let menuListLength = menuItemSpecObj.length
      expect(wrapper.find('li')).toHaveLength(menuListLength);
    });

})
