import request from 'supertest'
import assert from 'assert'
import { app } from '../../src/app'

describe('POST /signup', () => {
  test('회원 가입로그인 안 했으면 가입', done => {
    request(app)
      .post('/auth/signup')
      .send({
        id: 'tmdqls3344',
        password: 'chl135',
      })
      .expect('Location', '/') // Location은 다음에 올 문자열이 경로라는 것을 의미
      .expect(302, done) // 비동기 메소드를 처리할때 콜백함수로 처리할경우 반드시 done을 써주어야 한다.
  })
  test('이미 존재한 아이디', done => {
    request(app)
      .post('/auth/signup')
      .send({
        id: 'tmdqls2257',
        password: 'chl135',
      })
      .expect('Location', '/signup?error=exist') // Location은 다음에 올 문자열이 경로라는 것을 의미
      .expect(302, done)
  })
})
describe('POST /signin', () => {
  // agent를 쓰면 상태를 유지시킬수 있어 여러 테스트를 할 수 있다. (로그인 상태를 유지시킨다 거나)
  const agent = request.agent(app)

  beforeEach(done => {
    //^ 테스트 하기전에 우선 agent로 로그인 하고 유지 시킨다.
    agent
      .post('/auth/login')
      .send({
        email: 'test@example.com',
        password: '123123',
      })
      .end(done)
  })

  test('이미 로그인했으면 redirect /에러', done => {
    // 위 beforeEach에서 이미 로그인 했는데, 또 로그인 시도를 하면 실패하게 되는 원리를 이용
    const message = encodeURIComponent('로그인한 상태입니다.')
    agent
      .post('/auth/signin')
      .send({
        id: 'tmdqls2257',
        password: 'chl135',
      })
      .expect('Location', `/?error=${message}`)
      .expect(302, done)
  })

  test('가입되지 않은 회원', done => {
    const message = encodeURIComponent('가입되지 않은 회원입니다.')
    request(app)
      .post('auth/signin')
      .send({
        id: 'tmdqls5544',
        password: '12312414',
      })
      .expect('Location', `/?loginError=${message}`)
      .expect(302, done)
  })

  test('로그인 수행', done => {
    request(app)
      .post('/auth/signin')
      .send({
        id: 'tmdqls2257',
        password: 'chl135',
      })
      .expect('Location', '/')
      .expect(302, done)
  })

  test('아이디 또는 비밀번호가 틀림', done => {
    const message = encodeURIComponent(
      '아이디 또는 비밀번호가 일치하지 않습니다.'
    )
    request(app)
      .post('/auth/login')
      .send({
        id: 'test@example.com',
        password: 'wrong',
      })
      .expect('Location', `/?loginError=${message}`)
      .expect(302, done)
  })
})

describe('GET /logout', () => {
  //* 로그인 되지 않을 경우 테스트
  test('로그인 되어있지 않으면 403', done => {
    request(app).get('/auth/logout').expect(403, done) // res.status(403).send('로그인 필요');
  })

  //* 로그인 하고 로그아웃 잘 되는지 테스트
  const agent = request.agent(app)
  beforeEach(done => {
    agent
      .post('/auth/signin')
      .send({
        id: 'tmdqls2257',
        password: 'chl135',
      })
      .end(done)
  })

  test('로그아웃 수행', done => {
    agent.get('/auth/signout').expect('Location', `/`).expect(302, done)
  })
})
