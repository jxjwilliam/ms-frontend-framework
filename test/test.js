const { expect } = require('chai')

describe('react-scripts test mocha, chai', () => {
  it('should expect test work', () => {
    expect({ a: 1 }).to.deep.equal({ a: 1 })
    expect({ a: 1 }).to.not.equal({ a: 1 });
  })
})
