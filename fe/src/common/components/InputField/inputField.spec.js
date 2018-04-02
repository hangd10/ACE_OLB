import React from 'react';
import Enzyme, { shallow, render, mount } from 'enzyme';
import InputField from './inputField';
import Chai from 'chai';
import Sinon from 'sinon';
import jsdom from 'jsdom';


Chai.should();

/* ----------------------------- REMOVE ---------------------------- */
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });
/* ----------------------------- REMOVE ---------------------------- */


describe('Input Field Component', () => {
  let subject;
  let spyOnChange;
  let stubOnFocus;

  let inputID;
  let className;
  let labelClassName;
  let title;
  let placeholder;
  let value;
  let maxLenth;
  let icon;
  let errorMessage;
  let typeAttr;

  beforeEach(() => {

    // global.document = jsdom.jsdom('<head></head><body></body>');

    spyOnChange = Sinon.spy();
    stubOnFocus = Sinon.stub();

    inputID = "TestField"
    labelClassName = "LabelClass"
    className = "SomeClass"
    title = "MyInput"
    placeholder = "EnterHere"
    value = "InitialValue"
    maxLenth = "100"
    icon = null
    errorMessage = "SomeError"
    typeAttr = "SuperType"

    subject = mount(
      <InputField
        inputID={inputID}
        className={className}
        labelClassName={labelClassName}
        title={title}
        placeholder={placeholder}
        value={value}
        maxLength={maxLenth}
        icon={icon}
        errorMessage={errorMessage}
        onChange={spyOnChange}
        onFocus={stubOnFocus}
        onBlur={() => { }}
        typeAttr={typeAttr}
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
    let errorLabelID = inputID + "ErrorMessage"
    let errorLabel = subject.find('label#' + errorLabelID);

    errorLabel.length.should.equal(0)
  });

  it('should have label that matches title', () => {
    let labelID = inputID + "Label"

    subject.find('label#' + labelID).text().should.equal('MyInput');
  });

  it('should set input field', () => {
    subject.find('input').props().value.should.equal('InitialValue');
  });

  it('should call onChange when input updates', () => {
    subject.find('input#' + inputID).simulate('change', { value: 'My new value' });
    spyOnChange.calledOnce.should.be.true;
  });

  it('should call onFocus when a label is clicked', () => {
    let labelID = inputID + "Label"
    let inputEl = subject.find('input#' + inputID)
    let activeEl = document.activeElement

    subject.find('label#' + labelID).simulate('click');
    document.activeElement.getAttribute('id').should.equal(inputID);
  });

  it('should have type attribute', () => {
    let input = subject.find('input#' + inputID);
    let inputType = input.props().type

    inputType.should.equal(typeAttr);
  });
});
