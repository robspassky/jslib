/**
 * Singly-linked list module
 * @module {Class} SLL
 */

/**
 * Class representing a single node of an SLL
 * @private
 */
class Node {
  /**
   * constructs a node
   * @param {any} datum - the data to store in the node
   * @param {Node} pnext - the next node in the list
   */
  constructor (datum, pnext) {
    this.datum = datum
    this.pnext = pnext
  }
}

/** Class that implements a singly-linked list */
module.exports = class SLL {
  constructor () {
    this.theList = new Node(undefined, undefined)
  }

  /**
   * Append an object to end of list in O(n)
   * @param {any} x - object to append
   */
  add (x) {
    let p = this.theList
    while (p.pnext !== undefined) {
      p = p.pnext
    }
    p.pnext = new Node(x, undefined)
  }

  /**
   * Return current size of list in O(n)
   * @returns {number} size of list
   */
  size () {
    let size = 0
    let p = this.theList
    while (p.pnext !== undefined) {
      p = p.pnext
      size += 1
    }
    return size
  }
}
