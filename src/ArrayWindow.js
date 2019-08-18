/**
 * Array with Window module
 * @module {Class} ArrayWindow
 */

 /** Implements an array with a sliding window */
module.exports = class ArrayWindow {
  /**
   * constructor
   * @param {any[]} data - the array
   */
  constructor(data) {
    this.data = data
  }

  /**
   * Calculates and returns an array of the sums of subarrays of size k
   * @param {number} k - size of window
   */
  ksum(k) {
    if (k > this.data.length) {
      return []
    }
    let sum = this.data.slice(0, k).reduce((sum, current) => { return sum += current }, 0)
    let retval = [sum]
    let start = 0
    let end = 0 + k
    while (end < this.data.length) {
      sum -= this.data[start]
      sum += this.data[end]
      retval.push(sum)
      start += 1
      end += 1
    }
    return retval
  }

  /**
   * This is a generalized sliding window algorithm to calculate.
   * @param {number} k 
   * @param {Function} initfn 
   * @param {Function} calcfn 
   */
  wcalc(k, initval, calcfn) {
    if (k > this.data.length) {
      return []
    }
    let retval = []
    let result = initval
    let start = 0
    for (let end = 0; end < this.data.length; end++) {
      let add = this.data[end]
      if (end - start >= k) {
        let remove = this.data[start]
        result = calcfn(result, add, remove)
        start += 1
      } else {
        result = calcfn(result, add)
      }
      if (end - start >= (k - 1)) {
        retval.push(result)
      }
    }
    return retval
  }

  gksum(k) {
    let calcfn = (sum, add, remove) => {
      if (remove === undefined) {
        return sum + add
      } else {
        return sum + add - remove
      }
    }
    return this.wcalc(k, 0, calcfn)
  }

  gkavg(k) {
    let calcfn = (avg, add, remove) => {
      if (remove === undefined) {
        return ((avg * k) + add) / k
      } else {
        return ((avg * k) + add - remove) / k
      }
    }
    return this.wcalc(k, 0, calcfn)
  }
}