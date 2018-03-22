import request from 'supertest'
import { masterKey, apiRoot } from '../../config'
import express from '../../services/express'
import routes from '.'

const app = () => express(apiRoot, routes)


beforeEach(async () => {

})

test('POST /dummy 201 ', async () => {
  const { status, body } = await request(app())
    .post(`${apiRoot}`)
    .send({ email: 'test', zipCode: 'test' })
  expect(status).toBe(201)
  expect(typeof body).toEqual('object')
  expect(body.email).toEqual('test')
  expect(body.zipCode).toEqual('test')
})

