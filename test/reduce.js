const { expect } = require('chai')

describe('reduce simple test', () => {
  it('{} calculation', () => {
    const names = ['Alice', 'Bob', 'Bruce', 'Alice']
    const expected = {
      Alice: 2,
      Bob: 1,
      Bruce: 1,
    }
    const ret1 = names.reduce((acc, name) => ({ ...acc, [name]: acc[name] ? acc[name] + 1 : 1 }), {})
    expect(ret1).to.eql(expected)
  })

  it('reducer function', () => {
    const initialState = 0
    const reducer = (state = initialState, data) => state + data
    const total = [0, 1, 2, 3].reduce(reducer)
    expect(total).to.equal(6)
  })
})

describe('统计字符串中出现次数最多的字', () => {
  it('should split, reduce, entries, sort, slice, fromEntries work', () => {
    const arr =
      '统计是汉语中的“统计”原有合计或汇总计算的意思。英语中的“统计”（Statistics）一词来源于拉丁语status，是指各种现象的状态或状况。现今，统计一词有三种含义：（1）统计资料，是反映大量现象的状态和规律性的数字资料及有关文字说明；（2）统计工作，是关于搜集、整理、分析统计资料并进行推论以探求事物本质和规律性的活动；（3）统计科学，是研究如何搜集、整理和分析研究大量现象的数量资料并推论其本质和规律性的理论和方法，如社会经济统计学、数理统计学。'
    const accd = arr.split('').reduce((acc, word) => ({ ...acc, [word]: acc[word] ? acc[word] + 1 : 1 }), {})
    const len = Object.keys(accd).length
    const ret = Object.entries(accd)
      .sort((a, b) => {
        if (a[1] < b[1]) return 1
        if (a[1] > b[1]) return -1
        return 0
      })
      .slice(0, len > 5 ? 5 : len)
    expect(Object.fromEntries(ret)).to.eql({ 计: 12, 统: 10, 的: 9, '，': 6, 是: 5 })
  })
})
