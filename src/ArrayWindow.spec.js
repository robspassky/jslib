const ArrayWindow = require('./ArrayWindow')

describe('ArrayWindow class', () => {
  test ('can be instantiated', () => {
    const sut = new ArrayWindow([1, 2, 3])
    expect (sut).toBeDefined()
  })

  test('k-sum with empty array', () => {
    const sut = new ArrayWindow([])
    expect(sut.ksum(2)).toStrictEqual([])
  })

  test('k-sum', () => {
    const sut = new ArrayWindow([1, 2, 3, 4, 5])
    expect(sut.ksum(2)).toStrictEqual([3, 5, 7, 9])
  })

  test('k-sum with generic method with empty array', () => {
    const sut = new ArrayWindow([])
    expect(sut.gksum(2)).toStrictEqual([])
  })

  test('k-sum with generic method', () => {
    const sut = new ArrayWindow([1, 2, 3, 4, 5])
    expect(sut.gksum(2)).toStrictEqual([3, 5, 7, 9])
  })

  test('k-avg with generic method', () => {
    const sut = new ArrayWindow([1, 2, 3, 4, 5])
    expect(sut.gkavg(2)).toStrictEqual([1.5, 2.5, 3.5, 4.5])
  })

  test('max k-sum with generic method', () => {
    const sut = new ArrayWindow([1, 2, 3, 4, 5])
    expect(sut.maxksum(2)).toBe(9)
  })

})