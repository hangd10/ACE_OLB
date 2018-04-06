import React from 'react';
import Enzyme, { shallow, render, mount } from 'enzyme';
import InputField from './inputField';
import Chai from 'chai';
import Sinon from 'sinon';
import jsdom from 'jsdom';

import * as v from './InputValidation'

Chai.should();

describe('Input Validation', () => {
 
  it('should validate for required empty fields', () => {
    const isValidText = v.required('');
    isValidText.should.equal('Required');
  })

  it('should validate for required non-empty fields', () => {
    const isValidText = v.required('Hello');
    (isValidText === null).should.be.true
  })

  // Email validation tests
  it('should validate email input', () => {
    const isValidEmail = v.validEmail('a@a.com');
    (isValidEmail === null).should.be.true;
  })

  it('should check for more than 4 characters', () => {
    const isInvalidEmail = v.validEmail('a@a.clams');
    isInvalidEmail.should.equal('Invalid email address');
  })
  
  it('should check for less than 2 characters after [.]', () => {
    const isInvalidEmail = v.validEmail('a@a.c');
    isInvalidEmail.should.equal('Invalid email address');
  })
  
  it('should check for empty before @', () => {
    const isInvalidEmail = v.validEmail('@aaa.com');
    isInvalidEmail.should.equal('Invalid email address');
  })
  
  it('should check for empty domain', () => {
    const isInvalidEmail = v.validEmail('bob@.com');
    isInvalidEmail.should.equal('Invalid email address');
  })  

  it('should check for missing @', () => {
    const isInvalidEmail = v.validEmail('bobaaa.com');
    isInvalidEmail.should.equal('Invalid email address');
  })  
  
  // Zipcode validation tests
  it('should validate zipcode input', () => {
    const isValidZip= v.validZipcode('12345');
    (isValidZip === null).should.be.true;
  })

  it('should check zip for less than 5 numbers', () => {
    const isInvalidValidZip = v.validZipcode('123');
    isInvalidValidZip.should.equal('Invalid zipcode');
  })

  it('should check zip for more than 5 numbers', () => {
    const isInvalidValidZip = v.validZipcode('123456');
    isInvalidValidZip.should.equal('Invalid zipcode');
  })

  it('should check zip for alphabetical characters', () => {
    const isInvalidValidZip = v.validZipcode('1A345');
    isInvalidValidZip.should.equal('Invalid zipcode');
  })

  it('should check zip for special characters', () => {
    const isInvalidValidZip = v.validZipcode('1-3@5');
    isInvalidValidZip.should.equal('Invalid zipcode');
  })
})