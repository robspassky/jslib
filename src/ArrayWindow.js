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
  wcalc(k, initfn, calcfn) {
    if (k > this.data.length) {
      return []
    }
    let sum = initfn(this.data.slice(0, k))
    let retval = [ sum ]
    let start = 0
    let end = 0 + k
    while (end < this.data.length) {
      sum = calcfn(sum, this.data[start], this.data[end])
      retval.push(sum)
      start += 1
      end += 1
    }
    return retval
  }

  gkavg(k) {
    let initfn = array => array.reduce((sum, current) => sum += current, 0) / k
    let calcfn = (avg, remove, add) => avg = ((avg*k) - remove + add) / k
    return this.wcalc(k, initfn, calcfn)
  }

  gksum(k) {
    let initfn = array => array.reduce((sum, current) => sum += current, 0)
    let calcfn = (sum, remove, add) => sum = sum - remove + add
    return this.wcalc(k, initfn, calcfn)
  }
}