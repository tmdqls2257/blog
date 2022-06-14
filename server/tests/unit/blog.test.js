import request from 'supertest'
import assert from 'assert'
import { app } from '../../src/app'

describe('GET /posts', () => {
  it('카테고리의 내용만 필터링하기', async () => {
    await request(app)
      .get('/blog/posts?category=HTML')
      .expect(200)
      .then(res => {})
  })

  it('카테고리를 주지 않을 경우 모두 리턴', async () => {
    const response = await request(app).get('/blog/posts')
    expect(response.body)
  })
})
