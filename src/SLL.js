/** Class that implements a singly-linked list */
class SLL {
  constructor() {
    this.theList = []
  }

  /** 
   * Append an object to end of list
   * @param {any} x - object to append
   */
  add(x) {
    this.theList.push(x)
  }

  /** 
   * Return current size of list 
   * @returns {number} size of list
   */
  size() {
    return this.theList.length
  }
}

module.exports = SLL
