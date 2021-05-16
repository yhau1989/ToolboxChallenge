'use strict'
/* eslint-env mocha */

const request = require('supertest')
const chai = require('chai')
const server = require('../src/server')
const expect = chai.expect

describe('server.js tests', function () {
  describe('GET/iecho', function () {
    it('application/json; charset=utf-8', function (done) {
      request(server)
        .get('/iecho')
        .expect('Content-Type', 'application/json; charset=utf-8')
        .end(function (err, res) {
          if (err) done(err)
          done()
        })
    })
    it('dont pass query parameters', function (done) {
      request(server)
        .get('/iecho')
        .expect(400)
        .end(function (err, res) {
          if (err) done(err)
          done()
        })
    })
    it('sent query parameter empty', function (done) {
      request(server)
        .get('/iecho?text=')
        .expect('Content-Type', 'application/json; charset=utf-8')
        .expect(400)
        .end(function (err, res) {
          if (err) done(err)
          done()
        })
    })
    it('sent query parameter value', function (done) {
      request(server)
        .get('/iecho?text=text')
        .expect('Content-Type', 'application/json; charset=utf-8')
        .expect(200)
        .end(function (err, res) {
          if (err) done(err)
          done()
        })
    })
  })
})
