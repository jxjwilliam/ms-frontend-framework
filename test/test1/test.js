const { expect } = require('chai')

describe('misc', () => {
  it('name in names', () => {
    const names = ['Alice', 'Bob', 'Bruce', 'Alice']
    const expected = {
      Alice: 2,
      Bob: 1,
      Bruce: 1,
    }
    const ret1 = names.reduce((acc, name) => ({ ...acc, [name]: acc[name] ? acc[name] + 1 : 1 }), {})
    expect(ret1).to.eql(expected)

    // work but not good
    const ret2 = names.reduce((acc, name) => {
      // name in acc
      if (!acc[name]) acc[name] = 1
      else acc[name] += 1
      return acc
    }, {})
    expect(ret2).to.eql(expected)
  })

  it('reducer function', () => {
    const initialState = 0
    const reducer = (state = initialState, data) => state + data
    const total = [0, 1, 2, 3].reduce(reducer)
    expect(total).to.equal(6)
  })
})
