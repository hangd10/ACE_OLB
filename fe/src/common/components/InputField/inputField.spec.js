import React from 'react';
import Enzyme, { shallow, render, mount } from 'enzyme';
import InputField from './inputField';
import Chai from 'chai';
import Sinon from 'sinon';
import jsdom from 'jsdom';

import * as v from './InputValidation'

Chai.should();

/* ----------------------------- REMOVE ---------------------------- */
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });
/* ----------------------------- REMOVE ---------------------------- */


describe('Input Field Component', () => {
  let subject;
  let spyOnChange;
  let spyOnBlur;
  let stubOnFocus;

  let dummyConfig;

  beforeEach(() => {

    // global.document = jsdom.jsdom('<head></head><body></body>');

    spyOnChange = Sinon.spy();
    spyOnBlur = Sinon.spy();
    stubOnFocus = Sinon.stub();

    dummyConfig = {
      inputID: "TestField",
      labelClassName: "LabelClass",
      className: "SomeClass",
      title: "MyInput",
      placeholder: "EnterHere",
      value: "InitialValue",
      maxLenth: "100",
      icon: null,
      errorMessage: "SomeError",
      typeAttr: "SuperType",
      onChange: spyOnChange,
      onBlur: spyOnBlur,
      validate: [v.required, v.validEmail]
    }

    subject = mount(
      <InputField
        { ...dummyConfig }
      />
    );
  });

/* ===== RETURN MARIAH AND EDIE AND DAVID ====== */

  it('should throw error if inputID is empty', () => {
    // let wrapper = shallow(<InputField />);

  });

/* ===== RETURN MARIAH AND EDIE AND DAVID ====== */


  it('should render label, input, and error field', () => {
    subject.find('label').length.should.equal(1);
    subject.find('input').length.should.equal(1);
  });

  it('should not render error label', () => {
    let errorLabelID = dummyConfig.inputID + "ErrorMessage"
    let errorLabel = subject.find('label#' + errorLabelID);

    errorLabel.length.should.equal(0)
  });

  it('should have label that matches title', () => {
    let labelID = dummyConfig.inputID + "Label"

    subject.find('label#' + labelID).text().should.equal('MyInput');
  });

  it('should set input field', () => {
    subject.find('input').props().value.should.equal('InitialValue');
  });

  it('should call onChange when input updates', () => {
    subject.find('input#' + dummyConfig.inputID).simulate('change', { value: 'My new value' });
    spyOnChange.calledOnce.should.be.true;
  });

  it('should call onFocus when a label is clicked', () => {
    let labelID = dummyConfig.inputID + "Label"
    let inputEl = subject.find('input#' + dummyConfig.inputID)
    let activeEl = document.activeElement
    
    subject.find('label#' + labelID).simulate('click');
    document.activeElement.getAttribute('id').should.equal(dummyConfig.inputID);
  });

  it('should have type attribute', () => {
    let input = subject.find('input#' + dummyConfig.inputID);
    let inputType = input.props().type

    inputType.should.equal(dummyConfig.typeAttr);
  });

  it('should call first validation method in array', () => {
    // trigger the validation logic
    subject.find('input#' + dummyConfig.inputID).simulate('blur');
    subject.update();

    // verify no error displayed
    let errorLabelID = dummyConfig.inputID + "ErrorMessage"
    let errorLabel = subject.find('.inputFieldErrorMessage');
    errorLabel.length.should.equal(1)
  });

});
