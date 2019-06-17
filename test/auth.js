const chai = require('chai')
const chaiHttp = require('chai-http')
const server = require('../index')
const should = chai.should()
chai.use(chaiHttp)

var agent = chai.request.agent(server)

var User = require('../models/user')

// Failed login attempt
describe('User', function() {
  it('should not be able to login if they have not registered', (done) => {
    agent
      .post('/login', { username: 'username', password: 'password' })
      .end(function (err, res) {
        res.status.should.be.equal(401)
        done()
      })
  })

// Successful sign up
it('should be able to sign up', (done) => {
  User.findOneAndRemove({ username: 'username' }, function() {
    agent
      .post('/sign-up')
      .send({ username: 'username', password: 'password' })
      .end(function (err, res) {
        res.should.have.status(200)
        done()
      })
  })
})

// Successful logout
it('should be able to logout', (done) => {
  agent
    .get('/logout')
    .end(function (err, res) {
      res.should.have.status(200)
      done()
    })
})

// Successful login attempt
it('should be able to login', (done) => {
  agent
    .post('/login')
    .send({ username: 'username', password: 'password' })
    .end(function (err, res) {
      res.should.have.status(200)
      done()
    })
  })
})
