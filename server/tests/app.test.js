import request from 'supertest'
import assert from 'assert'
import express from 'express'
const app = express()
describe('blog API', () => {
  it('GET /blog/posts --> 200', () => {
    request(app).get('/blog/posts').expect('Content-Type', /json/).expect(200)
  })

  it('GET /blog/posts/:id --> 200', () => {})

  it('GET /blog/posts/:id --> 404', () => {})

  it('POST /blog/posts --> 201', () => {})

  it('POST /blog/posts/:id --> 201', () => {})

  it('POST /blog/posts/:id --> 404', () => {})

  it('PUT /blog/posts/:id --> 200', () => {})

  it('DELETE /blog/posts/:id --> 204', () => {})
})
