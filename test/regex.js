const { expect } = require('chai')

describe('RegExp', () => {
  it('regexp', () => {
    const x = 'keyword'
    const rx = new RegExp(x, 'i')
    const ary1 = ['what ever the Keyword is', 'keyword: regex', 'Keywords: incauragtion']
    const ary2 = ['kayword', 'key words']

    const yes = ary1.some(e => rx.test(e))
    const no = ary2.every(e => rx.test(e))

    expect(yes).to.be.true
    expect(no).to.be.false
  })
})
