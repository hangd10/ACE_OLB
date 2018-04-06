import sinon from 'sinon';
import Chai, { expect } from 'chai';

import * as clientAPI from './APIclient';

var MockAdapter = require('axios-mock-adapter');
// This sets the mock adapter on the default instance
var mock = new MockAdapter(clientAPI.getInstance());

Chai.should();

describe('API Client Test Happy Path', () => {
  const users = [
    { id: 1, name: 'John Smithzzz' }
  ];

  beforeEach(() => {
    // fake server with fake response
    mock.onGet('/users', {}).reply(200, {
      users
    });
    mock.onPost('/users',{}).reply(200, {
      users
    })
  })

  it('should call get endpoint', () => {
    clientAPI.get('/users')
      .then(function(response) {
        (JSON.stringify(users)).should.equal(JSON.stringify(response.data.users));
      });    
  })

  it('should call post endpoint', () => {
    clientAPI.post('/users', {})
      .then(function(response) {
        (JSON.stringify(users)).should.equal(JSON.stringify(response.data.users));
      });  
  })

})

describe('API Client Test Error Handling', () => {
  const error = new Error('failed api call');

  beforeEach(() => {
    mock.onPost('/error', {}).reply(500, {
      error
    });
    // mock.onPost('/users',{}).reply(200, {
    //   users
    // })
  })

  it('should return error post endpoint', () => {
    clientAPI.post('/error')
      .then(function(response) {
        console.log('should not be seen');
      })
      .catch(error => {
        console.log('======> ' ,error);
        //(JSON.stringify(users)).should.equal(JSON.stringify(response.data.users));
      });   
  })

  // it('should return error post endpoint', () => {
  //   clientAPI.post('/error')
  //     .then(function(response) {
  //     })
  //     .catch(error => {
  //       (JSON.stringify(error)).should.equal(JSON.stringify(response.data.erro));
  //     });   
  // })


})

describe('API helper function testing', () => {
  it('should convert an object into url encoded params', () => {
    const obj = { first : "abc", second : 2, third : "%^" }
    const expectedURI = "first=abc&second=2&third=%25%5E";

    const uri = clientAPI.convertToURLParams(obj);
    expectedURI.should.equal(uri);
  })
})