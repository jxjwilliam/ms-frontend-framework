import { expect } from 'chai'
import auth from '../../src/lib/authProvider'
import { getHeaders } from '../../src/lib/dataProvider'

describe('authProvider', () => {
  context('authProvider', () => {
    it('should auth model work', () => {
      const hasLogin = Object.prototype.hasOwnProperty.call(auth, 'login')
      // expect(auth.hasOwnProperty('login')).to.true
      expect(hasLogin).to.be.true

      // expect(global).to.be.an('object').that.has.key('setImmediate')
      // expect(sessionStorage).to.be.an.instanceof(Function)
    })
  })

  // context('dataProvider', () => {
  //   it('should getheaders work', () => {
  //     const opts = {}
  //     getHeaders(opts)
  //     console.log('---', opts)
  //     expect(opts).to.be.an('object').that.has.key('headers')
  //   })
  // })
})
