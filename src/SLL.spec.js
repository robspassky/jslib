const SLL = require('./SLL')

describe('singly-linked list', () => {
  test('it can be created', () => {
    const sut = new SLL()
    expect(sut).toBeDefined()
  })
})