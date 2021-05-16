'use strict'
/* eslint-env mocha */
const chai = require('chai')
const expect = chai.expect
const { reverse } = require('../../src/libs/text')

describe('text.js tests', function () {
  describe('reverse()', function () {
    it('dont pass parameters', function () {
      expect(reverse()).to.deep.equal({ status: 99, data: { error: 'no text' } })
    })
    it('parameters null', function () {
      expect(reverse(null)).to.deep.equal({ status: 99, data: { error: 'no text' } })
    })
    it('string empty parameters ', function () {
      expect(reverse('test')).to.deep.equal(reverse('test'))
    })
  })
})
