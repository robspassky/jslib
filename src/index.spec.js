const jslib = require('./index')

describe('public API of jslib', () => {
  test('SLL exists', () => {
    expect(typeof jslib.SLL).toBe('function')
  })
})
