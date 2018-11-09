/**
 * CircularQueue based on LinkedList
 */

class Node {
    constructor (el) {
      this.el = el
      this.next = null
    }
}

class CircularQueue {
  constructor () {
    this.head = null
    this.tail = null
  }

  enqueue (value) {
    if (this.head === null) {  // 为空
      this.head = new Node(value)
      this.tail = this.head
      this.head.next = this.tail
    } else {
      this.tail.next = new Node(value)
      this.tail.next.next = this.head
      this.tail = this.tail.next
    }
  }

  outqueue () {
    if (this.head === this.tail) {
      const value = this.head.el
      this.head = null
      return value
    } else if (this.head !== null) {
      const value = this.head.el
      this.head = this.head.next
      this.tail.next = this.head
      return value
    } else {
      return -1
    }
  }

  isEmpty () {
    return this.head === null
  }

  display () {
    while (!this.isEmpty()) {
      console.log(this.outqueue())
    }
  }
}

const circularQueue = new CircularQueue()
circularQueue.enqueue(1)
circularQueue.enqueue(2)
circularQueue.enqueue(3)

console.log('------Display------')
circularQueue.display()
console.log('-------------------')
circularQueue.enqueue(1)
console.log('------Display------')
circularQueue.display()
console.log('-------------------')