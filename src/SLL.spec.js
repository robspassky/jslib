const SLL = require('./SLL')

describe('singly-linked list', () => {
  test('it can be created', () => {
    const sut = new SLL()
    expect(sut).toBeDefined()
  })

  test('it can add elements', () => {
    const sut = new SLL()
    sut.add(3)
    sut.add('foo')
    sut.add(true)
    expect(sut.size()).toBe(3)
  })
})
