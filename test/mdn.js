const { expect } = require('chai')

describe('mdn', () => {
  context('Object.entries', () => {
    // eslint-disable-next-line prettier/prettier
    const [object1, expected1] = [{ a: 'somestring', b: 42 }, [['a', 'somestring'], ['b', 42]]]

    it('should return an array', () => {
      const ary = Object.entries(object1)
      expect(ary).to.eql(expected1)

      // eslint-disable-next-line no-restricted-syntax
      for (const subAry of ary) {
        expect(Array.isArray(subAry)).to.true
      }

      // polyfill:
      const ary1 = Object.keys(object1).reduce((acc, key) => [...acc, [key, object1[key]]], [])
      expect(ary1).to.eql(expected1)
    })

    it('should {}[]<> generate pairs', () => {
      // eslint-disable-next-line prettier/prettier
      const [str2, expected2] = ['{}[]()<>', [['{', '}'], ['[', ']'], ['(', ')'], ['<', '>']]]
      const ary = str2.split('').reduce((acc, item, idx) => {
        const len = acc.length
        if (idx % 2 === 0) acc[len] = new Array(item)
        else acc[len - 1].push(item)
        return acc
      }, [])

      expect(ary).to.eql(expected2)
    })
  })

  context('Object.fromEntries', () => {
    it('should object loopable', () => {
      const object1 = { a: 1, b: 2, c: 3 }
      const object2 = Object.fromEntries(Object.entries(object1).map(([key, val]) => [key, val * 2]))
      expect(object2).to.eql({ a: 2, b: 4, c: 6 })
    })
  })

  context('iterator', () => {
    it('should for...of, for...in, forEach work', () => {
      const obj = { a: 'somestring', b: 42 }
      const map = new Map(Object.entries(obj))
      expect([...map]).to.eql([
        ['a', 'somestring'],
        ['b', 42],
      ])
    })
  })

  context('spread destructive', () => {
    function foo(...args) {
      return args
    }
    it('should args work', () => {
      expect(foo(1, 2)).to.eql([1, 2])
      expect(foo(1, 2, 3)).to.eql([1, 2, 3])
      expect(foo(1, 2, 3, 4)).to.eql([1, 2, 3, 4])
    })
  })
})
